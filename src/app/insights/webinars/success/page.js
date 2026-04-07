import Link from "next/link";

export const metadata = {
  title: "Webinar Registration Confirmed",
  description:
    "Your webinar payment has been completed. Confirmation details have been sent by email.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function WebinarRegistrationSuccessPage({ searchParams }) {
  const sessionId =
    typeof searchParams?.session_id === "string" ? searchParams.session_id : "";

  return (
    <main className="webinars-page">
      <div className="webinars-inner">
        <section className="webinars-panel">
          <p className="webinars-kicker">Webinars</p>
          <h1 className="webinars-title">Registration Confirmed</h1>
          <p className="webinars-lede">
            Your payment was successful. We will send webinar access details to
            your email before the event.
          </p>

          <p className="webinars-event-summary" style={{ marginTop: 16 }}>
            A confirmation email is sent automatically after payment verification.
            If you do not receive it within a few minutes, please check spam/junk
            and then contact our team.
          </p>

          {sessionId ? (
            <p className="webinars-event-meta" style={{ marginTop: 10 }}>
              Reference: <code>{sessionId}</code>
            </p>
          ) : null}

          <p className="webinars-event-summary" style={{ marginTop: 18 }}>
            <Link href="/insights/webinars" className="webinars-recording-link">
              Back to Webinars
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
