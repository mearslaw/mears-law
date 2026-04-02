import { NextResponse } from "next/server";
import Stripe from "stripe";
import { WEBINARS } from "../../../../lib/webinars";

export const runtime = "nodejs";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

async function sendConfirmationEmail({
  webinar,
  attendeeName,
  attendeeEmail,
  company,
  jobTitle,
  notes,
  sessionId,
  amountCad,
}) {
  const accessKey =
    clean(process.env.WEBINAR_REGISTRATION_ACCESS_KEY) ||
    clean(process.env.WEB3FORMS_ACCESS_KEY);

  if (!accessKey) {
    throw new Error(
      "WEBINAR_REGISTRATION_ACCESS_KEY (or WEB3FORMS_ACCESS_KEY) is not configured."
    );
  }

  const adminMessageLines = [
    "Paid webinar registration confirmed",
    "",
    `Webinar: ${webinar.title}`,
    `Date: ${formatDateTime(webinar.scheduledAt)}`,
    `Amount paid (CAD): ${amountCad}`,
    `Stripe session: ${sessionId}`,
    "",
    `Attendee: ${attendeeName}`,
    `Email: ${attendeeEmail}`,
    `Company: ${company || "Not provided"}`,
    `Job title: ${jobTitle || "Not provided"}`,
    "",
    `Notes: ${notes || "None"}`,
  ];

  const attendeeConfirmation = [
    `Thanks for your registration for "${webinar.title}".`,
    "",
    `Payment has been confirmed for ${amountCad} CAD.`,
    `Session date/time: ${formatDateTime(webinar.scheduledAt)}.`,
    "",
    "You will receive webinar access details before the event.",
    "",
    "Mears Law",
  ].join("\n");

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("name", attendeeName);
  formData.append("email", attendeeEmail);
  formData.append("subject", `Paid webinar registration: ${webinar.title}`);
  formData.append("message", adminMessageLines.join("\n"));
  formData.append("from_name", "Mears Law Webinar Registration");
  formData.append("replyto", attendeeEmail);
  formData.append("autoresponse", attendeeConfirmation);

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
      payload?.message || "Confirmation email service rejected the request."
    );
  }

}

export async function POST(request) {
  const stripeSecretKey = clean(process.env.STRIPE_SECRET_KEY);
  const stripeWebhookSecret = clean(process.env.STRIPE_WEBHOOK_SECRET);

  if (!stripeSecretKey || !stripeWebhookSecret) {
    return NextResponse.json(
      {
        message:
          "Stripe webhook is not configured. Add STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET.",
      },
      { status: 503 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json(
      { message: "Missing stripe-signature header." },
      { status: 400 }
    );
  }

  const body = await request.text();
  const stripe = new Stripe(stripeSecretKey);

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
  } catch {
    return NextResponse.json(
      { message: "Invalid Stripe webhook signature." },
      { status: 400 }
    );
  }

  if (event.type !== "checkout.session.completed") {
    return NextResponse.json({ received: true, ignored: event.type });
  }

  const session = event.data.object;
  if (
    session?.mode !== "payment" ||
    (session?.payment_status !== "paid" && session?.status !== "complete")
  ) {
    return NextResponse.json({ received: true, ignored: "session_not_paid" });
  }

  const webinarId = clean(session?.metadata?.webinarId);
  const webinar = WEBINARS.find((item) => item.id === webinarId);
  if (!webinar) {
    return NextResponse.json({ received: true, ignored: "unknown_webinar" });
  }

  const attendeeEmail = clean(
    session?.metadata?.email ||
      session?.customer_details?.email ||
      session?.customer_email
  ).toLowerCase();

  if (!isValidEmail(attendeeEmail)) {
    return NextResponse.json({ received: true, ignored: "invalid_email" });
  }

  const firstName = clean(session?.metadata?.firstName);
  const lastName = clean(session?.metadata?.lastName);
  const attendeeName = clean(`${firstName} ${lastName}`) || attendeeEmail;
  const company = clean(session?.metadata?.company);
  const jobTitle = clean(session?.metadata?.jobTitle);
  const notes = clean(session?.metadata?.notes);
  const amountCad =
    typeof session?.amount_total === "number"
      ? (session.amount_total / 100).toFixed(2)
      : webinar.priceCad.toFixed(2);

  try {
    await sendConfirmationEmail({
      webinar,
      attendeeName,
      attendeeEmail,
      company,
      jobTitle,
      notes,
      sessionId: clean(session?.id) || "unknown-session",
      amountCad,
    });
  } catch {
    return NextResponse.json(
      {
        message:
          "Payment received but confirmation email could not be sent. Stripe will retry webhook delivery.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ received: true, emailSent: true });
}
