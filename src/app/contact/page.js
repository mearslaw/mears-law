// "use client";
// import { useState, useEffect, useRef } from "react";

// export default function ContactPage() {
//   const [status, setStatus] = useState({ type: "", msg: "" });
//   const [loading, setLoading] = useState(false);
//   const [focused, setFocused] = useState({});
//   const h1Ref = useRef(null);

//   useEffect(() => {
//     const el = h1Ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           el.classList.add("is-visible");
//           obs.disconnect();
//         }
//       },
//       { threshold: 0.7 }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);
// async function onSubmit(e) {
//   e.preventDefault();
//   setStatus({ type: "", msg: "" });
//   setLoading(true);

//   const formEl = e.currentTarget;          // <-- keep a stable ref to the form
//   const form   = new FormData(formEl);

//   const firstName = (form.get("firstName") || "").trim();
//   const lastName  = (form.get("lastName")  || "").trim();
//   const email     = (form.get("email")     || "").trim();
//   const message   = (form.get("message")   || "").trim();

//   if (!firstName || !lastName || !email || !message) {
//     setLoading(false);
//     setStatus({ type: "error", msg: "Please fill in all required fields." });
//     return;
//   }

//   // Honeypot: silently succeed
//   if (form.get("company")) {
//     setLoading(false);
//     formEl.reset();
//     setStatus({ type: "success", msg: "Thanks! (spam filter tripped)" });
//     return;
//   }

//   // Topics -> readable comma list
//   const topics = form.getAll("topics");
//   const topicsDisplay = topics.length ? topics.join(", ") : "—";
//   form.delete("topics");
//   form.append("topics", topicsDisplay);

//   // Web3Forms required + helpful fields
//   form.append("access_key", "fdb77520-81d8-46ad-8925-aad64b15ad89");
//   form.append("from_name", `${firstName} ${lastName}`);
//   form.append("subject", `${firstName} ${lastName} sent a message from mearslaw.ca`);
//   form.append("replyto", email);
//   form.append("page", "Contact");
//   // form.append("redirect", "https://mearslaw.ca/thank-you"); // optional redirect

//   try {
//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: form,                         // no headers -> no fragile CORS preflight
//     });

//     // read raw text, then try to parse JSON without throwing
//     let raw = "", data = {};
//     try { raw = await res.text(); data = raw ? JSON.parse(raw) : {}; } catch {}

//     // Optional: console log to see exactly what came back during testing
//     // console.log("[Web3Forms]", res.status, data || raw);

//     setLoading(false);

//     const ok =
//       res.ok &&
//       (data?.success === true ||
//        (typeof data?.message === "string" && data.message.toLowerCase().includes("success")));

//     if (ok) {
//       formEl.reset();                     // <-- use the saved form reference
//       setStatus({
//         type: "success",
//         msg: "Thank you for reaching out. We've received your message and will respond within two business days.",
//       });
//     } else {
//       setStatus({
//         type: "error",
//         msg: data?.message || `Something went wrong (HTTP ${res.status}). Please try again.`,
//       });
//     }
//   } catch (err) {
//     // Only runs if fetch itself throws (blocked by extension/VPN/etc.)
//     setLoading(false);
//     setStatus({ type: "error", msg: "Network error. Please try again." });
//   }
// }



//   const handleFocus = (field) => setFocused({ ...focused, [field]: true });
//   const handleBlur = (field) => setFocused({ ...focused, [field]: false });

//   return (
//     <main className="wrap">
//       <section className="hero">
//         <div className="container hero-content">
//           <header className="hdr">
//             <h1 ref={h1Ref} className="title hero-h1">
//               Contact Us
//               <span className="underline" aria-hidden="true"></span>
//             </h1>
//             <p className="lead">
//               Just share a few details, and we'll be in touch within two business days. We look
//               forward to connecting with you.
//             </p>
//           </header>
//         </div>
//       </section>

//       <section className="form-section patterned-section">
//         <div className="container">
//           <form className="form" onSubmit={onSubmit} noValidate>
//             {/* Honeypot (hidden) */}
//             <input type="text" name="company" autoComplete="off" className="hp" tabIndex={-1} />

//             <div className="row">
//               <label className="label">
//                 Name <span className="req-text">(required)</span>
//               </label>
//               <div className="label-row">
//                 <span className="sublabel">First Name</span>
//                 <span className="sublabel">Last Name</span>
//               </div>
//               <div className="cols">
//                 <div className="input-wrap">
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     required
//                     className={focused.firstName ? "focused" : ""}
//                     onFocus={() => handleFocus("firstName")}
//                     onBlur={() => handleBlur("firstName")}
//                   />
//                 </div>
//                 <div className="input-wrap">
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     required
//                     className={focused.lastName ? "focused" : ""}
//                     onFocus={() => handleFocus("lastName")}
//                     onBlur={() => handleBlur("lastName")}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="row">
//               <label htmlFor="email" className="label">
//                 Email <span className="req-text">(required)</span>
//               </label>
//               <div className="input-wrap">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   className={focused.email ? "focused" : ""}
//                   onFocus={() => handleFocus("email")}
//                   onBlur={() => handleBlur("email")}
//                 />
//               </div>
//             </div>

//             <div className="row">
//               <label htmlFor="companyName" className="label">
//                 Company <span className="opt-text">(optional)</span>
//               </label>
//               <div className="input-wrap">
//                 <input
//                   id="companyName"
//                   name="companyName"
//                   type="text"
//                   className={focused.companyName ? "focused" : ""}
//                   onFocus={() => handleFocus("companyName")}
//                   onBlur={() => handleBlur("companyName")}
//                 />
//               </div>
//             </div>

//             <div className="row">
//               <label htmlFor="phone" className="label">
//                 Phone <span className="opt-text">(optional)</span>
//               </label>
//               <div className="input-wrap">
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   className={focused.phone ? "focused" : ""}
//                   onFocus={() => handleFocus("phone")}
//                   onBlur={() => handleBlur("phone")}
//                 />
//               </div>
//             </div>

//             <div className="row">
//               <label className="label">
//                 Topics <span className="opt-text">(optional)</span>
//               </label>
//               <div className="topics-grid">
//                 <label className="checkbox-label">
//                   <input type="checkbox" name="topics" value="legal-representation" />
//                   <span className="checkbox-text">Legal Representation</span>
//                 </label>
//                 <label className="checkbox-label">
//                   <input type="checkbox" name="topics" value="mailing-list" />
//                   <span className="checkbox-text">Mailing List</span>
//                 </label>
//                 <label className="checkbox-label">
//                   <input type="checkbox" name="topics" value="pr-media" />
//                   <span className="checkbox-text">PR/Media</span>
//                 </label>
//                 <label className="checkbox-label">
//                   <input type="checkbox" name="topics" value="other" />
//                   <span className="checkbox-text">Other</span>
//                 </label>
//               </div>
//             </div>

//             <div className="row">
//               <label htmlFor="message" className="label">
//                 Message <span className="req-text">(required)</span>
//               </label>
//               <div className="input-wrap">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={6}
//                   required
//                   className={focused.message ? "focused" : ""}
//                   onFocus={() => handleFocus("message")}
//                   onBlur={() => handleBlur("message")}
//                 />
//               </div>
//             </div>

//             {status.msg && (
//               <div className={`status ${status.type === "success" ? "ok" : "err"}`}>{status.msg}</div>
//             )}

//             <div className="btn-wrap">
//               <button className="btn" type="submit" disabled={loading}>
//                 {loading ? "Sending..." : "Send"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <style jsx>{`
//         * { box-sizing: border-box; }
//         :global(html) { scroll-behavior: smooth; }

//         .wrap {
//           background: #f3f4f6;
//           min-height: 100vh;
//         }

//         .container { width: min(960px, 92%); margin: 0 auto; }

//        /* ===== Hero Section (Aligned + Responsive) ===== */
//       .hero {
//         padding: 96px 0 48px; /* More space above, balanced below */
//         background: #ffffff;
//         position: relative;
//         overflow: hidden;
//       }

//       .hero-content {
//         position: relative;
//         z-index: 1;
//         text-align: left;
//       }

//       /* Title */
//       .title.hero-h1 {
//         font-size: 52px;
//         line-height: 1.1;
//         color: #0A1628;
//         font-weight: 700;
//         margin: 0 0 16px;
//         position: relative;
//         padding-bottom: 16px;
//       }

//       /* Underline Animation (left-aligned) */
//       .hero-h1 .underline {
//         position: absolute;
//         bottom: 0;
//         left: 0;
//         height: 5px;
//         background: linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD);
//         border-radius: 3px;
//         box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
//         animation: expandUnderline 2s ease-out forwards;
//         width: 0;
//         opacity: 0;
//       }

//       @keyframes expandUnderline {
//         0% { width: 0; opacity: 0; }
//         50% { opacity: 1; }
//         100% { width: 120px; opacity: 1; }
//       }

//       /* Description */
//       .lead {
//         font-size: 20px;
//         line-height: 1.65;
//         margin: 0;
//         color: #374151;
//         opacity: 0.9;
//         text-align: left;
//         max-width: 700px;
//       }

//       /* ===== Responsive Adjustments ===== */
//       @media (max-width: 1024px) {
//         .hero {
//           padding: 80px 0 40px;
//         }
//       }

//       @media (max-width: 720px) {
//         .hero {
//           padding: 64px 0 32px; /* tighter but still balanced */
//         }

//         .title.hero-h1 {
//           font-size: 36px;
//         }

//         .lead {
//           font-size: 18px;
//           line-height: 1.7;
//         }
//       }
//         /* ===== Form section with subtle pattern like Services ===== */
//         .form-section {
//           padding: 48px 0 72px;
//           background: #f3f4f6;
//           position: relative;
//           overflow: hidden;
//         }
//         .patterned-section::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image:
//             repeating-linear-gradient(
//               90deg,
//               transparent,
//               transparent 60px,
//               rgba(139, 92, 246, 0.04) 60px,
//               rgba(139, 92, 246, 0.04) 61px
//             ),
//             repeating-linear-gradient(
//               0deg,
//               transparent,
//               transparent 60px,
//               rgba(139, 92, 246, 0.04) 60px,
//               rgba(139, 92, 246, 0.04) 61px
//             );
//           pointer-events: none;
//           z-index: 0;
//         }
//         .patterned-section::after {
//           content: '';
//           position: absolute;
//           top: -100%;
//           left: -100%;
//           width: 300%;
//           height: 300%;
//           background:
//             radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 25%),
//             radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.10) 0%, transparent 25%),
//             radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.08) 0%, transparent 25%);
//           animation: moveGradient 40s linear infinite;
//           pointer-events: none;
//           z-index: 0;
//         }
//         @keyframes moveGradient {
//           0% { transform: translate(0, 0) rotate(0deg); }
//           50% { transform: translate(-10%, -10%) rotate(180deg); }
//           100% { transform: translate(0, 0) rotate(360deg); }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .patterned-section::after { animation: none; }
//         }

//         /* ===== Form styles (unchanged logic, same look) ===== */
//         .form { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }

//         .hp { display: none !important; }

//         .row { margin-bottom: 2.5rem; }

//         .label {
//           display: block;
//           color: #0a1628;
//           font-weight: 600;
//           font-size: 1.125rem;
//           margin-bottom: 0.75rem;
//           letter-spacing: -0.01em;
//         }
//         .req-text, .opt-text { color: #6b7280; font-size: 1rem; font-weight: 400; }

//         .label-row {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1.25rem;
//           margin-bottom: 0.5rem;
//         }
//         @media (min-width: 640px) {
//           .label-row { grid-template-columns: 1fr 1fr; }
//         }

//         .sublabel {
//           display: block;
//           color: #0a1628;
//           font-size: 0.9375rem;
//           font-weight: 500;
//         }

//         .cols {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 1.25rem;
//         }
//         @media (min-width: 640px) {
//           .cols { grid-template-columns: 1fr 1fr; }
//         }

//         .input-wrap { position: relative; }

//         input:not([type="checkbox"]), textarea {
//           width: 100%;
//           font-family: inherit;
//           font-size: 1rem;
//           color: #0a1628;
//           background: transparent;
//           border: none;
//           border-bottom: 1.5px solid #d1d5db;
//           padding: 0.75rem 0;
//           outline: none;
//           transition: border-color 0.3s ease;
//           font-weight: 400;
//         }
//         input::placeholder, textarea::placeholder { color: transparent; }
//         input.focused, textarea.focused {
//           border-bottom-color: #0a1628;
//           border-bottom-width: 2px;
//         }

//         textarea {
//           min-height: 140px;
//           resize: vertical;
//           line-height: 1.6;
//           padding-top: 0.5rem;
//         }

//         /* Topics Checkboxes */
//         .topics-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 1rem;
//           margin-top: 1rem;
//         }
//         @media (max-width: 639px) {
//           .topics-grid { grid-template-columns: 1fr; }
//         }

//         .checkbox-label {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           cursor: pointer;
//           padding: 0.5rem 0;
//         }
//         .checkbox-label input[type="checkbox"] {
//           width: 20px;
//           height: 20px;
//           border: 2px solid #d1d5db;
//           border-radius: 4px;
//           cursor: pointer;
//           appearance: none;
//           -webkit-appearance: none;
//           background: #ffffff;
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//           position: relative;
//         }
//         .checkbox-label input[type="checkbox"]:checked {
//           background: #0a1628;
//           border-color: #0a1628;
//         }
//         .checkbox-label input[type="checkbox"]:checked::after {
//           content: '';
//           position: absolute;
//           left: 6px;
//           top: 2px;
//           width: 5px;
//           height: 10px;
//           border: solid white;
//           border-width: 0 2px 2px 0;
//           transform: rotate(45deg);
//         }
//         .checkbox-label:hover input[type="checkbox"] { border-color: #9ca3af; }

//         .checkbox-text { color: #0a1628; font-size: 1rem; font-weight: 400; user-select: none; }

//         .status {
//           margin-top: 1.5rem;
//           padding: 1rem;
//           font-size: 0.9375rem;
//           text-align: center;
//           border-radius: 8px;
//         }
//         .ok  { color: #065f46; background: #d1fae5; }
//         .err { color: #991b1b; background: #fee2e2; }

//         .btn-wrap { margin-top: 3rem; text-align: center; }
//         .btn {
//           display: inline-block;
//           padding: 1rem 3rem;
//           font-family: inherit;
//           font-weight: 600;
//           font-size: 1.0625rem;
//           color: #ffffff;
//           background: #0a1628;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           letter-spacing: 0.02em;
//           box-shadow: 0 4px 12px rgba(10, 22, 40, 0.2);
//         }
//         .btn:hover:not(:disabled) {
//           background: #1e3a5f;
//           transform: translateY(-1px);
//           box-shadow: 0 6px 16px rgba(10, 22, 40, 0.3);
//         }
//         .btn:disabled { opacity: 0.5; cursor: not-allowed; }

//         /* Mobile spacing */
//         @media (max-width: 639px) {
//           .hero { padding: 48px 0 24px; }
//           .form-section { padding: 36px 0 56px; }
//           .title { font-size: 2.5rem; }
//           .lead { font-size: 1rem; }
//           .row { margin-bottom: 2rem; }
//           .label { font-size: 1rem; }
//           .btn { width: 100%; padding: 0.875rem 2rem; }
//         }
//       `}</style>
//     </main>
//   );
// }
"use client";
import { useState, useEffect, useRef } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({});
  const h1Ref = useRef(null);

  useEffect(() => {
    const el = h1Ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          obs.disconnect();
        }
      },
      { threshold: 0.7 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const firstName = (form.get("firstName") || "").trim();
    const lastName = (form.get("lastName") || "").trim();
    const email = (form.get("email") || "").trim();
    const message = (form.get("message") || "").trim();

    if (!firstName || !lastName || !email || !message || !form.get("consultationAcknowledgement")) {
      setLoading(false);
      setStatus({ type: "error", msg: "Please fill in all required fields." });
      return;
    }

    // Honeypot: silently succeed
    if (form.get("company")) {
      setLoading(false);
      formEl.reset();
      setStatus({ type: "success", msg: "Thanks! (spam filter tripped)" });
      return;
    }

    // Topics -> readable comma list
    const topics = form.getAll("topics");
    const topicsDisplay = topics.length ? topics.join(", ") : "—";
    form.delete("topics");
    form.append("topics", topicsDisplay);

    // Web3Forms required + helpful fields - NEW ACCESS KEY
    form.append("access_key", "c4a2eabc-9c86-448b-aa6f-93a95d56ec65");
    form.append("from_name", `${firstName} ${lastName}`);
    form.append("subject", `${firstName} ${lastName} sent a message from mearslaw.ca`);
    form.append("replyto", email);
    form.append("page", "Contact");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
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
          msg: "Thank you for reaching out. We've received your message and will respond within two business days.",
        });
      } else {
        setStatus({
          type: "error",
          msg: data?.message || `Something went wrong (HTTP ${res.status}). Please try again.`,
        });
      }
    } catch (err) {
      setLoading(false);
      setStatus({ type: "error", msg: "Network error. Please try again." });
    }
  }

  const handleFocus = (field) => setFocused({ ...focused, [field]: true });
  const handleBlur = (field) => setFocused({ ...focused, [field]: false });

  return (
    <main className="wrap">
      {/* Rest of your JSX remains exactly the same */}
      <section className="hero">
        <div className="container hero-content">
          <header className="hdr">
            <h1 ref={h1Ref} className="title hero-h1">
              Contact Us
              <span className="underline" aria-hidden="true"></span>
            </h1>
            <p className="lead">
              Just share a few details, and we'll be in touch within two business days. We look
              forward to connecting with you.
            </p>
          </header>
        </div>
      </section>

      <section className="form-section patterned-section">
        <div className="container">
          <form className="form" onSubmit={onSubmit} noValidate>
            {/* All your existing form fields remain unchanged */}
            <input type="text" name="company" autoComplete="off" className="hp" tabIndex={-1} />

            <div className="row">
              <label className="label">
                Name <span className="req-text">(required)</span>
              </label>
              <div className="label-row">
                <span className="sublabel">First Name</span>
                <span className="sublabel">Last Name</span>
              </div>
              <div className="cols">
                <div className="input-wrap">
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    className={focused.firstName ? "focused" : ""}
                    onFocus={() => handleFocus("firstName")}
                    onBlur={() => handleBlur("firstName")}
                  />
                </div>
                <div className="input-wrap">
                  <input
                    id="lastName"
                    name="lastName"
                    required
                    className={focused.lastName ? "focused" : ""}
                    onFocus={() => handleFocus("lastName")}
                    onBlur={() => handleBlur("lastName")}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <label htmlFor="email" className="label">
                Email <span className="req-text">(required)</span>
              </label>
              <div className="input-wrap">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={focused.email ? "focused" : ""}
                  onFocus={() => handleFocus("email")}
                  onBlur={() => handleBlur("email")}
                />
              </div>
            </div>

            <div className="row">
              <label htmlFor="companyName" className="label">
                Company <span className="opt-text">(optional)</span>
              </label>
              <div className="input-wrap">
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className={focused.companyName ? "focused" : ""}
                  onFocus={() => handleFocus("companyName")}
                  onBlur={() => handleBlur("companyName")}
                />
              </div>
            </div>

            <div className="row">
              <label htmlFor="phone" className="label">
                Phone <span className="opt-text">(optional)</span>
              </label>
              <div className="input-wrap">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={focused.phone ? "focused" : ""}
                  onFocus={() => handleFocus("phone")}
                  onBlur={() => handleBlur("phone")}
                />
              </div>
            </div>

            <div className="row">
              <label className="label">
                Topics <span className="opt-text">(optional)</span>
              </label>
              <div className="topics-grid">
                <label className="checkbox-label">
                  <input type="checkbox" name="topics" value="legal-representation" />
                  <span className="checkbox-text">Legal Representation</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="topics" value="mailing-list" />
                  <span className="checkbox-text">Mailing List</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="topics" value="pr-media" />
                  <span className="checkbox-text">PR/Media</span>
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="topics" value="other" />
                  <span className="checkbox-text">Other</span>
                </label>
              </div>
            </div>

            <div className="row">
              <label htmlFor="message" className="label">
                Message <span className="req-text">(required)</span>
              </label>
              <div className="input-wrap">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={focused.message ? "focused" : ""}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                />
              </div>
            </div>

            <div className="row">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="consultationAcknowledgement"
                  value="accepted"
                  required
                />
                <span className="checkbox-text">
                  Sending this request for consultation does not create a solicitor-client relationship, will not make us your lawyers, and does not make you a client of the firm. We ask that you do not include confidential information as we cannot ensure that this information remains private and confidential. No information provided to you during the consultation and before you have retained our services is legal advice. We are not liable for any reliance on any legal information provided to you during the consultation and before you have retained our services. I acknowledge that I have read and accept the conditions outlined above.
                </span>
              </label>
            </div>

            {status.msg && (
              <div className={`status ${status.type === "success" ? "ok" : "err"}`}>{status.msg}</div>
            )}

            <div className="btn-wrap">
              <button className="btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* All your existing styles remain unchanged */}
      <style jsx>{`
        * { box-sizing: border-box; }
        :global(html) { scroll-behavior: smooth; }
        .wrap { background: #f3f4f6; min-height: 100vh; }
        .container { width: min(960px, 92%); margin: 0 auto; }
        .hero { padding: 96px 0 48px; background: #ffffff; position: relative; overflow: hidden; }
        .hero-content { position: relative; z-index: 1; text-align: left; }
        .title.hero-h1 { font-size: 52px; line-height: 1.1; color: #0A1628; font-weight: 700; margin: 0 0 16px; position: relative; padding-bottom: 16px; }
        .hero-h1 .underline { position: absolute; bottom: 0; left: 0; height: 5px; background: linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD); border-radius: 3px; box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4); animation: expandUnderline 2s ease-out forwards; width: 0; opacity: 0; }
        @keyframes expandUnderline { 0% { width: 0; opacity: 0; } 50% { opacity: 1; } 100% { width: 120px; opacity: 1; } }
        .lead { font-size: 20px; line-height: 1.65; margin: 0; color: #374151; opacity: 0.9; text-align: left; max-width: 700px; }
        @media (max-width: 1024px) { .hero { padding: 80px 0 40px; } }
        @media (max-width: 720px) { .hero { padding: 64px 0 32px; } .title.hero-h1 { font-size: 36px; } .lead { font-size: 18px; line-height: 1.7; } }
        .form-section { padding: 48px 0 72px; background: #f3f4f6; position: relative; overflow: hidden; }
        .patterned-section::before { content: ''; position: absolute; inset: 0; background-image: repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px), repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px); pointer-events: none; z-index: 0; }
        .patterned-section::after { content: ''; position: absolute; top: -100%; left: -100%; width: 300%; height: 300%; background: radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.12) 0%, transparent 25%), radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.10) 0%, transparent 25%), radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.08) 0%, transparent 25%); animation: moveGradient 40s linear infinite; pointer-events: none; z-index: 0; }
        @keyframes moveGradient { 0% { transform: translate(0, 0) rotate(0deg); } 50% { transform: translate(-10%, -10%) rotate(180deg); } 100% { transform: translate(0, 0) rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .patterned-section::after { animation: none; } }
        .form { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
        .hp { display: none !important; }
        .row { margin-bottom: 2.5rem; }
        .label { display: block; color: #0a1628; font-weight: 600; font-size: 1.125rem; margin-bottom: 0.75rem; letter-spacing: -0.01em; }
        .req-text, .opt-text { color: #6b7280; font-size: 1rem; font-weight: 400; }
        .label-row { display: grid; grid-template-columns: 1fr; gap: 1.25rem; margin-bottom: 0.5rem; }
        @media (min-width: 640px) { .label-row { grid-template-columns: 1fr 1fr; } }
        .sublabel { display: block; color: #0a1628; font-size: 0.9375rem; font-weight: 500; }
        .cols { display: grid; grid-template-columns: 1fr; gap: 1.25rem; }
        @media (min-width: 640px) { .cols { grid-template-columns: 1fr 1fr; } }
        .input-wrap { position: relative; }
        input:not([type="checkbox"]), textarea { width: 100%; font-family: inherit; font-size: 1rem; color: #0a1628; background: transparent; border: none; border-bottom: 1.5px solid #d1d5db; padding: 0.75rem 0; outline: none; transition: border-color 0.3s ease; font-weight: 400; }
        input::placeholder, textarea::placeholder { color: transparent; }
        input.focused, textarea.focused { border-bottom-color: #0a1628; border-bottom-width: 2px; }
        textarea { min-height: 140px; resize: vertical; line-height: 1.6; padding-top: 0.5rem; }
        .topics-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
        @media (max-width: 639px) { .topics-grid { grid-template-columns: 1fr; } }
        .checkbox-label { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; padding: 0.5rem 0; }
        .checkbox-label input[type="checkbox"] { width: 20px; height: 20px; border: 2px solid #d1d5db; border-radius: 4px; cursor: pointer; appearance: none; -webkit-appearance: none; background: #ffffff; transition: all 0.2s ease; flex-shrink: 0; position: relative; }
        .checkbox-label input[type="checkbox"]:checked { background: #0a1628; border-color: #0a1628; }
        .checkbox-label input[type="checkbox"]:checked::after { content: ''; position: absolute; left: 6px; top: 2px; width: 5px; height: 10px; border: solid white; border-width: 0 2px 2px 0; transform: rotate(45deg); }
        .checkbox-label:hover input[type="checkbox"] { border-color: #9ca3af; }
        .checkbox-text { color: #0a1628; font-size: 1rem; font-weight: 400; user-select: none; }
        .status { margin-top: 1.5rem; padding: 1rem; font-size: 0.9375rem; text-align: center; border-radius: 8px; }
        .ok { color: #065f46; background: #d1fae5; }
        .err { color: #991b1b; background: #fee2e2; }
        .btn-wrap { margin-top: 3rem; text-align: center; }
        .btn { display: inline-block; padding: 1rem 3rem; font-family: inherit; font-weight: 600; font-size: 1.0625rem; color: #ffffff; background: #0a1628; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s ease; letter-spacing: 0.02em; box-shadow: 0 4px 12px rgba(10, 22, 40, 0.2); }
        .btn:hover:not(:disabled) { background: #1e3a5f; transform: translateY(-1px); box-shadow: 0 6px 16px rgba(10, 22, 40, 0.3); }
        .btn:disabled { opacity: 0.5; cursor: not-allowed; }
        @media (max-width: 639px) { .hero { padding: 48px 0 24px; } .form-section { padding: 36px 0 56px; } .title { font-size: 2.5rem; } .lead { font-size: 1rem; } .row { margin-bottom: 2rem; } .label { font-size: 1rem; } .btn { width: 100%; padding: 0.875rem 2rem; } }
      `}</style>
    </main>
  );
}