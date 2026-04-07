import { NextResponse } from "next/server";
import Stripe from "stripe";
import { WEBINARS } from "@/lib/webinars";

export const runtime = "nodejs";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const EMAIL_SENT_METADATA_FLAG = "confirmationEmailSent";
const EMAIL_SENT_AT_METADATA_FLAG = "confirmationEmailSentAt";
const MAX_TRACKED_EVENT_IDS = 1000;
const processedEventIds = new Set();
const processingEventIds = new Set();

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

function rememberProcessedEvent(eventId) {
  if (!eventId) return;
  processedEventIds.add(eventId);
  if (processedEventIds.size > MAX_TRACKED_EVENT_IDS) {
    const oldest = processedEventIds.values().next().value;
    if (oldest) processedEventIds.delete(oldest);
  }
}

function isSessionAlreadyConfirmed(session) {
  return (
    clean(session?.metadata?.[EMAIL_SENT_METADATA_FLAG]).toLowerCase() === "true"
  );
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

async function refreshCheckoutSession(stripe, sessionId) {
  if (!sessionId) return null;
  try {
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

async function markSessionEmailConfirmed(stripe, session) {
  const sessionId = clean(session?.id);
  if (!sessionId) return false;

  const metadata = {
    ...(session?.metadata || {}),
    [EMAIL_SENT_METADATA_FLAG]: "true",
    [EMAIL_SENT_AT_METADATA_FLAG]: new Date().toISOString(),
  };

  try {
    await stripe.checkout.sessions.update(sessionId, { metadata });
    return true;
  } catch {
    return false;
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

  const eventId = clean(event?.id);
  if (eventId && (processedEventIds.has(eventId) || processingEventIds.has(eventId))) {
    return NextResponse.json({
      received: true,
      ignored: "duplicate_event",
      eventId,
    });
  }

  if (eventId) processingEventIds.add(eventId);
  try {
    const webhookSession = event.data.object;
    if (
      webhookSession?.mode !== "payment" ||
      (webhookSession?.payment_status !== "paid" &&
        webhookSession?.status !== "complete")
    ) {
      return NextResponse.json({ received: true, ignored: "session_not_paid" });
    }

    const sessionId = clean(webhookSession?.id);
    const refreshedSession =
      (await refreshCheckoutSession(stripe, sessionId)) || webhookSession;

    if (isSessionAlreadyConfirmed(refreshedSession)) {
      if (eventId) rememberProcessedEvent(eventId);
      return NextResponse.json({
        received: true,
        ignored: "already_confirmed",
        sessionId,
      });
    }

    const webinarId = clean(refreshedSession?.metadata?.webinarId);
    const webinar = WEBINARS.find((item) => item.id === webinarId);
    if (!webinar) {
      return NextResponse.json({ received: true, ignored: "unknown_webinar" });
    }

    const attendeeEmail = clean(
      refreshedSession?.metadata?.email ||
        refreshedSession?.customer_details?.email ||
        refreshedSession?.customer_email
    ).toLowerCase();

    if (!isValidEmail(attendeeEmail)) {
      return NextResponse.json({ received: true, ignored: "invalid_email" });
    }

    const firstName = clean(refreshedSession?.metadata?.firstName);
    const lastName = clean(refreshedSession?.metadata?.lastName);
    const attendeeName = clean(`${firstName} ${lastName}`) || attendeeEmail;
    const company = clean(refreshedSession?.metadata?.company);
    const jobTitle = clean(refreshedSession?.metadata?.jobTitle);
    const notes = clean(refreshedSession?.metadata?.notes);
    const amountCad =
      typeof refreshedSession?.amount_total === "number"
        ? (refreshedSession.amount_total / 100).toFixed(2)
        : webinar.priceCad.toFixed(2);

    try {
      await sendConfirmationEmail({
        webinar,
        attendeeName,
        attendeeEmail,
        company,
        jobTitle,
        notes,
        sessionId: sessionId || "unknown-session",
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

    const metadataUpdated = await markSessionEmailConfirmed(stripe, refreshedSession);

    if (eventId) rememberProcessedEvent(eventId);
    return NextResponse.json({
      received: true,
      emailSent: true,
      metadataUpdated,
    });
  } finally {
    if (eventId) processingEventIds.delete(eventId);
  }
}
