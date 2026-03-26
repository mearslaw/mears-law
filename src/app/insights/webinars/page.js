import Link from "next/link";
import WebinarRegistrationForm from "./WebinarRegistrationForm";
import { WEBINARS } from "../../../lib/webinars";

export const metadata = {
  title: "Webinars",
  description:
    "Paid webinars from Mears Law on AI governance, privacy, digital risk, and technology law.",
  openGraph: {
    title: "Webinars | Mears Law Insights",
    description:
      "Explore upcoming paid webinars and register online for practical legal and governance sessions.",
    url: "https://mearslaw.ca/insights/webinars",
  },
  alternates: {
    canonical: "https://mearslaw.ca/insights/webinars",
  },
};

function formatWebinarDate(iso) {
  try {
    return new Intl.DateTimeFormat("en-CA", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "America/Toronto",
    }).format(new Date(iso));
  } catch {
    return "Date to be announced";
  }
}

function formatPriceCad(amount) {
  try {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${amount} CAD`;
  }
}

export default function WebinarsPage() {
  const sortedWebinars = [...WEBINARS].sort(
    (a, b) => new Date(a.scheduledAt).getTime() - new Date(b.scheduledAt).getTime()
  );

  return (
    <main className="webinars-page">
      <div className="webinars-inner">
        <section className="webinars-intro">
          <p className="webinars-kicker">Insights</p>
          <h1 className="webinars-title">Webinars</h1>
          <p className="webinars-lede">
            We host practical, focused webinars on emerging issues in technology
            law, privacy, AI governance, and digital risk. Our sessions are
            designed for professionals, founders, and decision-makers.
          </p>
        </section>

        <section className="webinars-layout" aria-label="Webinar content and registration">
          <div className="webinars-panel">
            <h2 className="webinars-panel-title">Upcoming Sessions</h2>
            <ul className="webinars-event-list">
              {sortedWebinars.map((webinar) => (
                <li key={webinar.id} className="webinars-event-card">
                  <h3 className="webinars-event-title">{webinar.title}</h3>
                  <p className="webinars-event-meta">
                    {formatWebinarDate(webinar.scheduledAt)} | {webinar.durationMinutes} min
                    | {formatPriceCad(webinar.priceCad)}
                  </p>
                  <p className="webinars-event-summary">{webinar.summary}</p>

                  {webinar.embedUrl ? (
                    <div className="webinars-recording-embed-wrap">
                      <iframe
                        className="webinars-recording-embed"
                        src={webinar.embedUrl}
                        title={`${webinar.title} recording`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : null}

                  {webinar.recordingUrl ? (
                    <a
                      className="webinars-recording-link"
                      href={webinar.recordingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch recording
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="webinars-panel">
            <h2 className="webinars-panel-title">Register for a Paid Webinar</h2>
            <WebinarRegistrationForm />
          </div>
        </section>

        <section className="webinars-panel">
          <p className="webinars-event-summary">
            Need quick context before registering? Return to the{" "}
            <Link className="webinars-recording-link" href="/insights">
              Insights hub
            </Link>{" "}
            for recent publications, videos, and commentary.
          </p>
        </section>
      </div>
    </main>
  );
}
