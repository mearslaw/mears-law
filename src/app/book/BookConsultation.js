"use client";
import { useState } from "react";

export default function BookConsultationPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  // OPTIONAL: if you have a live scheduler (Microsoft Bookings / Calendly / Cal.com),
  // paste its public booking URL below. If left empty, only the form shows.
  const SCHEDULER_URL = ""; 
  // Examples:
  // const SCHEDULER_URL = "https://outlook.office365.com/owa/calendar/your-id/bookings/";
  // const SCHEDULER_URL = "https://calendly.com/your-team/consultation-30min";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    // Basic requireds
    const firstName = (form.get("firstName") || "").trim();
    const lastName  = (form.get("lastName")  || "").trim();
    const email     = (form.get("email")     || "").trim();
    const message   = (form.get("message")   || "").trim();

    if (!firstName || !lastName || !email || !message) {
      setLoading(false);
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }

    // Honeypot: if filled, silently succeed
    if (form.get("company")) {
      setLoading(false);
      formEl.reset();
      setStatus({ type: "success", msg: "Thanks! (spam filter tripped)" });
      return;
    }

    // Required + helpful fields for Web3Forms
    form.append("access_key", "40541858-98f8-4f0c-9dcb-7109a7510baa");
    form.append("form_name", "Booking Request");
    form.append("from_name", `${firstName} ${lastName}`);
    form.append(
      "subject",
      `${firstName} ${lastName} requested a consultation (${form.get("preferred_date")} ${form.get("preferred_time") || ""})`
    );
    form.append("replyto", email);
    form.append("page", "Book Consultation");
    // Optional redirect after success:
    // form.append("redirect", "https://mearslaw.ca/thank-you");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form, // FormData with no headers to avoid CORS preflight issues
      });

      let raw = "", data = {};
      try { raw = await res.text(); data = raw ? JSON.parse(raw) : {}; } catch {}

      setLoading(false);

      const ok =
        res.ok &&
        (data?.success === true ||
         (typeof data?.message === "string" && data.message.toLowerCase().includes("success")));

      if (ok) {
        formEl.reset();
        setStatus({
          type: "success",
          msg: "Request received. We’ll confirm your consultation time by email shortly.",
        });
      } else {
        setStatus({
          type: "error",
          msg: data?.message || `Something went wrong (HTTP ${res.status}). Please try again.`,
        });
      }
    } catch (_) {
      setLoading(false);
      setStatus({ type: "error", msg: "Network error. Please try again." });
    }
  }

  // Helper for min date = today (yyyy-mm-dd)
  const todayISO = new Date().toISOString().split("T")[0];
  const defaultTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <main style={{ background: "#f3f4f6", minHeight: "100vh" }}>
      <section style={{ background: "#0A1628", color: "#fff", padding: "72px 0 40px" }}>
        <div style={{ width: "min(960px,92%)", margin: "0 auto" }}>
          <h1 style={{ margin: 0, fontSize: 40, fontWeight: 800 }}>Book a Consultation</h1>
          <p style={{ marginTop: 12, opacity: 0.9 }}>
            Pick a preferred date and time, or use the live calendar below if available.
          </p>
        </div>
      </section>

      <section style={{ padding: "40px 0 64px" }}>
        <div style={{ width: "min(960px,92%)", margin: "0 auto", display: "grid", gap: 32, gridTemplateColumns: "1fr" }}>
          
          {/* Left: Booking Request Form */}
          <div style={{ background: "#fff", borderRadius: 12, padding: 24, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
            <h2 style={{ marginTop: 0 }}>Request a Time</h2>
            <form onSubmit={onSubmit} noValidate>
              {/* honeypot */}
              <input type="text" name="company" autoComplete="off" style={{ display: "none" }} tabIndex={-1} />

              {/* Identify this form in your inbox */}
              <input type="hidden" name="form_name" value="Booking Request" />

              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}>
                <div>
                  <label className="label">First Name *</label>
                  <input name="firstName" required style={fieldStyle} />
                </div>
                <div>
                  <label className="label">Last Name *</label>
                  <input name="lastName" required style={fieldStyle} />
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <label className="label">Email *</label>
                <input name="email" type="email" required style={fieldStyle} />
              </div>

              <div style={{ marginTop: 16 }}>
                <label className="label">Phone (optional)</label>
                <input name="phone" type="tel" style={fieldStyle} />
              </div>

              <div style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr", marginTop: 16 }}>
                <div>
                  <label className="label">Preferred Date *</label>
                  <input name="preferred_date" type="date" required min={todayISO} style={fieldStyle} />
                </div>
                <div>
                  <label className="label">Preferred Time *</label>
                  <input name="preferred_time" type="time" required style={fieldStyle} />
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <label className="label">Time Zone</label>
                <select name="timezone" defaultValue={defaultTZ} style={fieldStyle}>
                  <option value="America/Toronto">America/Toronto</option>
                  <option value="America/Jamaica">America/Jamaica</option>
                  <option value={defaultTZ}>{defaultTZ} (Auto)</option>
                </select>
              </div>

              <div style={{ marginTop: 16 }}>
                <label className="label">Matter / Notes *</label>
                <textarea name="message" rows={6} required style={{ ...fieldStyle, resize: "vertical" }} />
              </div>

              {status.msg && (
                <div
                  style={{
                    marginTop: 16,
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: status.type === "success" ? "#d1fae5" : "#fee2e2",
                    color: status.type === "success" ? "#065f46" : "#991b1b",
                    textAlign: "center",
                  }}
                >
                  {status.msg}
                </div>
              )}

              <div style={{ marginTop: 24, textAlign: "center" }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "14px 28px",
                    background: "#0A1628",
                    color: "#fff",
                    border: "none",
                    borderRadius: 10,
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 8px 20px rgba(10,22,40,0.2)",
                  }}
                >
                  {loading ? "Sending..." : "Request Booking"}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Live Scheduler (optional) */}
          {SCHEDULER_URL ? (
            <div style={{ background: "#fff", borderRadius: 12, padding: 0, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}>
              <iframe
                title="Book a Consultation"
                src={SCHEDULER_URL}
                style={{ width: "100%", height: 900, border: 0, borderRadius: 12 }}
                allow="fullscreen"
              />
            </div>
          ) : null}
        </div>
      </section>

      <style jsx>{`
        .label { display:block; margin:0 0 6px; font-weight:600; color:#0A1628; }
        @media (max-width: 900px) {
          h1 { font-size: 28px !important; }
        }
      `}</style>
    </main>
  );
}

// shared input styling
const fieldStyle = {
  width: "100%",
  padding: "12px 10px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  outline: "none",
  background: "#fff",
  fontSize: 16,
};
