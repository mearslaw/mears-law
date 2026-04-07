import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getWebinarById } from "@/lib/webinars";

export const runtime = "nodejs";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const DEFAULT_STRIPE_WEBINAR_PAYMENT_LINK =
  "https://buy.stripe.com/eVq8wQ4qT3XGgVE5Mp2go02";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toMetadataValue(value, maxLength = 500) {
  return clean(value).slice(0, maxLength);
}

function formatDateTime(iso) {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "America/Toronto",
    }).format(new Date(iso));
  } catch {
    return "To be announced";
  }
}

function getBaseUrl(request) {
  const configured =
    clean(process.env.NEXT_PUBLIC_SITE_URL) || clean(process.env.SITE_URL);

  if (configured) {
    return configured.replace(/\/+$/, "");
  }

  const origin = clean(request.headers.get("origin"));
  if (origin) {
    return origin.replace(/\/+$/, "");
  }

  return request.nextUrl.origin.replace(/\/+$/, "");
}

function getStripePaymentLink() {
  return (
    clean(process.env.STRIPE_WEBINAR_PAYMENT_LINK) ||
    DEFAULT_STRIPE_WEBINAR_PAYMENT_LINK
  );
}

async function sendRegistrationNotification({
  webinar,
  firstName,
  lastName,
  email,
  company,
  jobTitle,
  notes,
  paymentLink,
}) {
  const accessKey =
    clean(process.env.WEBINAR_REGISTRATION_ACCESS_KEY) ||
    clean(process.env.WEB3FORMS_ACCESS_KEY);

  if (!accessKey) {
    return {
      sent: false,
      reason: "missing_access_key",
    };
  }

  const attendee = clean(`${firstName} ${lastName}`);
  const messageLines = [
    "New paid webinar registration (payment link flow)",
    "",
    `Webinar: ${webinar.title}`,
    `Date: ${formatDateTime(webinar.scheduledAt)}`,
    `Price (CAD): ${webinar.priceCad}`,
    "",
    `Attendee: ${attendee}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Job title: ${jobTitle || "Not provided"}`,
    "",
    `Notes: ${notes || "None"}`,
    "",
    `Stripe Payment Link: ${paymentLink}`,
  ];

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("name", attendee || email);
  formData.append("email", email);
  formData.append("subject", `Webinar registration: ${webinar.title}`);
  formData.append("message", messageLines.join("\n"));
  formData.append("from_name", "Mears Law Webinar Registration");
  formData.append("replyto", email);
  formData.append(
    "autoresponse",
    [
      `Thanks for registering for "${webinar.title}" on ${formatDateTime(
        webinar.scheduledAt
      )}.`,
      "",
      "Complete payment at the secure Stripe link below to confirm your spot:",
      paymentLink,
      "",
      "If you have questions, reply to this email.",
    ].join("\n")
  );

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
    cache: "no-store",
  });

  let payload = {};
  try {
    payload = await response.json();
  } catch {}

  const ok =
    response.ok &&
    (payload?.success === true ||
      (typeof payload?.message === "string" &&
        payload.message.toLowerCase().includes("success")));

  if (!ok) {
    throw new Error(
      payload?.message || "Registration could not be submitted. Please try again."
    );
  }

  return { sent: true };
}

export async function POST(request) {
  let payload = {};
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const webinarId = clean(payload.webinarId);
  const firstName = clean(payload.firstName);
  const lastName = clean(payload.lastName);
  const email = clean(payload.email).toLowerCase();
  const company = clean(payload.company);
  const jobTitle = clean(payload.jobTitle);
  const notes = clean(payload.notes);
  const consent = Boolean(payload.consent);

  if (!webinarId || !firstName || !lastName || !email || !company) {
    return NextResponse.json(
      { message: "Missing required registration fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  if (!consent) {
    return NextResponse.json(
      { message: "Consent is required to register." },
      { status: 400 }
    );
  }

  const webinar = await getWebinarById(webinarId);
  if (!webinar || webinar.status !== "upcoming") {
    return NextResponse.json(
      { message: "Selected webinar is not available." },
      { status: 400 }
    );
  }

  if (!Number.isFinite(webinar.priceCad) || webinar.priceCad <= 0) {
    return NextResponse.json(
      {
        message:
          "Selected webinar does not have a valid price configured for checkout.",
      },
      { status: 400 }
    );
  }

  const stripeSecretKey = clean(process.env.STRIPE_SECRET_KEY);
  if (!stripeSecretKey) {
    const paymentLink = getStripePaymentLink();
    if (!paymentLink) {
      return NextResponse.json(
        {
          message:
            "Stripe payment link is not configured. Add STRIPE_WEBINAR_PAYMENT_LINK to .env.local.",
        },
        { status: 503 }
      );
    }

    try {
      // Validate the payment link URL early so misconfiguration is surfaced clearly.
      // eslint-disable-next-line no-new
      new URL(paymentLink);
    } catch {
      return NextResponse.json(
        {
          message:
            "Stripe payment link is invalid. Update STRIPE_WEBINAR_PAYMENT_LINK to a valid URL.",
        },
        { status: 503 }
      );
    }

    try {
      await sendRegistrationNotification({
        webinar,
        firstName,
        lastName,
        email,
        company,
        jobTitle,
        notes,
        paymentLink,
      });
    } catch (error) {
      return NextResponse.json(
        {
          message:
            error?.message ||
            "Registration could not be submitted. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message: "Redirecting to secure Stripe checkout...",
      checkoutUrl: paymentLink,
      mode: "payment_link",
    });
  }

  const stripe = new Stripe(stripeSecretKey);
  const baseUrl = getBaseUrl(request);
  const unitAmountCadCents = Math.round(webinar.priceCad * 100);

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      success_url: `${baseUrl}/insights/webinars/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/insights/webinars?registration=cancelled`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "cad",
            unit_amount: unitAmountCadCents,
            product_data: {
              name: webinar.title,
              description: webinar.summary,
            },
          },
        },
      ],
      metadata: {
        webinarId,
        webinarTitle: toMetadataValue(webinar.title),
        firstName: toMetadataValue(firstName),
        lastName: toMetadataValue(lastName),
        email: toMetadataValue(email),
        company: toMetadataValue(company),
        jobTitle: toMetadataValue(jobTitle),
        notes: toMetadataValue(notes, 500),
        consent: consent ? "true" : "false",
      },
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to start Stripe checkout. Please try again." },
      { status: 502 }
    );
  }

  if (!session?.url) {
    return NextResponse.json(
      { message: "Stripe checkout could not be initialized." },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message: "Redirecting to secure Stripe checkout...",
    checkoutUrl: session.url,
    mode: "checkout_session",
  });
}
