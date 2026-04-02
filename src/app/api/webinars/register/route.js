import { NextResponse } from "next/server";
import Stripe from "stripe";
import { WEBINARS } from "../../../../lib/webinars";

export const runtime = "nodejs";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toMetadataValue(value, maxLength = 500) {
  return clean(value).slice(0, maxLength);
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

export async function POST(request) {
  const stripeSecretKey = clean(process.env.STRIPE_SECRET_KEY);
  if (!stripeSecretKey) {
    return NextResponse.json(
      {
        message:
          "Stripe checkout is not configured. Add STRIPE_SECRET_KEY to .env.local.",
      },
      { status: 503 }
    );
  }

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

  const webinar = WEBINARS.find((item) => item.id === webinarId);
  if (!webinar) {
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
  });
}
