import { NextResponse } from "next/server";
import { WEBINARS } from "../../../../../lib/webinars";

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

  const webinar = WEBINARS.find((item) => item.id === webinarId);
  if (!webinar) {
    return NextResponse.json(
      { message: "Selected webinar is not available." },
      { status: 400 }
    );
  }

  const accessKey =
    process.env.WEBINAR_REGISTRATION_ACCESS_KEY ||
    process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        message:
          "Webinar registration is not configured. Add WEBINAR_REGISTRATION_ACCESS_KEY to .env.local.",
      },
      { status: 503 }
    );
  }

  const attendee = `${firstName} ${lastName}`;
  const messageLines = [
    "New paid webinar registration",
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
  ];

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("name", attendee);
  formData.append("email", email);
  formData.append("subject", `Webinar registration: ${webinar.title}`);
  formData.append("message", messageLines.join("\n"));
  formData.append("from_name", "Mears Law Webinar Registration");
  formData.append("replyto", email);
  formData.append(
    "autoresponse",
    `Thanks for registering for "${webinar.title}" on ${formatDateTime(
      webinar.scheduledAt
    )}. Your registration has been received. Payment checkout details will be sent shortly.`
  );

  let web3formsResponse;
  try {
    web3formsResponse = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
      cache: "no-store",
    });
  } catch {
    return NextResponse.json(
      { message: "Registration service is currently unavailable. Please try again." },
      { status: 502 }
    );
  }

  let web3formsPayload = {};
  try {
    web3formsPayload = await web3formsResponse.json();
  } catch {}

  const ok =
    web3formsResponse.ok &&
    (web3formsPayload?.success === true ||
      (typeof web3formsPayload?.message === "string" &&
        web3formsPayload.message.toLowerCase().includes("success")));

  if (!ok) {
    return NextResponse.json(
      {
        message:
          web3formsPayload?.message ||
          "Registration could not be submitted. Please try again.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    message:
      "Registration submitted. A confirmation email has been sent to your inbox.",
  });
}
