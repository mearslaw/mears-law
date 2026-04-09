// src/app/offices/page.js
export const metadata = { title: "Offices — Mears Law" };

import React from "react";

export default function OfficesPage() {
    const h = React.createElement;

    const css = `
    /* ===== Shared accents / motion ===== */
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes pulse {
      0%,100% { opacity:.3; transform:scale(1); }
      50% { opacity:.8; transform:scale(1.2); }
    }
    @keyframes orbit { from { transform: rotate(0) translateX(200px) rotate(0); } to { transform: rotate(360deg) translateX(200px) rotate(-360deg); } }
    @keyframes fadeInUp { from { opacity:0; transform: translateY(30px); } to { opacity:1; transform: none; } }
    @keyframes expandUnderline { 0%{width:0;opacity:0} 50%{opacity:1} 100%{width:140px;opacity:1} }

    .offices-root {
      background:#f3f4f6;
      min-height:100vh;
      position:relative;
      overflow:hidden;
    }

    /* Subtle patterned backdrop like Services */
    .offices-root::before{
      content:'';
      position:absolute; inset:0;
      background-image:
        repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(139,92,246,.04) 60px,rgba(139,92,246,.04) 61px),
        repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(139,92,246,.04) 60px,rgba(139,92,246,.04) 61px);
      pointer-events:none;
      z-index:0;
    }
    .offices-root::after{
      content:'';
      position:absolute; top:-100%; left:-100%; width:300%; height:300%;
      background:
        radial-gradient(circle at 30% 50%, rgba(139,92,246,.12) 0%, transparent 25%),
        radial-gradient(circle at 70% 50%, rgba(167,139,250,.10) 0%, transparent 25%),
        radial-gradient(circle at 50% 80%, rgba(196,181,253,.08) 0%, transparent 25%);
      animation: moveGradient 40s linear infinite;
      pointer-events:none;
      z-index:0;
    }
    @keyframes moveGradient {
      0% { transform: translate(0,0) rotate(0deg); }
      50% { transform: translate(-10%,-10%) rotate(180deg); }
      100% { transform: translate(0,0) rotate(360deg); }
    }
    @media (prefers-reduced-motion: reduce){
      .offices-root::after { animation:none; }
    }

    /* Page container */
    .offices-wrap{
      --navy:#0f223b;
      --accent:#4B8071;
      --accent-light:rgba(75,128,113,0.08);
      --border:#e5e7eb;
      --text-primary:#1a1a1a;
      --text-secondary:#6b7280;
      --purple:#6b5d98;
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
      position:relative;
      width:min(1200px,94%);
      margin:0 auto 80px;
      padding:64px 0 0;
      z-index:1; /* above pattern layers */
    }

    /* HERO header (underline like Services/Careers) */
    .hero {
      background:#fff;
      border-bottom:1px solid #eef2f6;
      margin-bottom:32px;
      box-shadow: 0 1px 0 rgba(0,0,0,0.02);
    }
    .hero-inner{
      width:min(1200px,94%);
      margin:0 auto;
      padding:48px 0 36px;
      position:relative;
      z-index:1;
    }

    .offices-title {
      font-weight:700;
      letter-spacing:-0.5px;
      font-size: clamp(32px, 4vw, 48px);
      color:#0A1628;
      margin:0 0 12px;
      line-height:1.2;
      position:relative;
      padding-bottom:16px;
    }
    .offices-title .underline{
      position:absolute; left:0; bottom:0; height:5px;
      background: linear-gradient(90deg,#8B5CF6,#A78BFA,#C4B5FD);
      border-radius:3px;
      box-shadow:0 2px 8px rgba(139,92,246,.4);
      width:0; opacity:0;
      animation: expandUnderline 2s ease-out forwards;
    }

    .subtitle {
      font-size:18px;
      color: var(--text-secondary);
      margin:0 0 24px;
      font-weight:400;
    }

    /* Decorative globe stays, just layered lightly behind */
    .background-globe {
      position:absolute;
      top:-100px;
      left:50%;
      transform: translateX(-50%);
      width:500px; height:500px;
      pointer-events:none;
      z-index:0;
      opacity:.9; /* softened against pattern */
    }
    .globe-circle,.globe-circle-2,.globe-arc{
      position:absolute; top:50%; left:50%;
      border:2px dashed var(--purple);
      border-radius:50%;
    }
    .globe-circle{ width:400px;height:400px;margin:-200px 0 0 -200px;opacity:.15;animation: rotate 60s linear infinite; }
    .globe-circle-2{ width:320px;height:320px;margin:-160px 0 0 -160px;opacity:.1;animation: rotate 45s linear infinite reverse; }
    .globe-arc{ width:400px;height:200px;margin:-100px 0 0 -200px;opacity:.12;animation: rotate 50s linear infinite; }
    .globe-dots{ position:absolute; top:50%; left:50%; width:400px; height:400px; margin:-200px 0 0 -200px; }
    .dot{ position:absolute; width:6px;height:6px;background:var(--purple); border-radius:50%; top:50%; left:50%; margin:-3px 0 0 -3px; }
    .dot-1{ animation: orbit 20s linear infinite; } .dot-2{ animation: orbit 25s linear infinite 2s; }
    .dot-3{ animation: orbit 22s linear infinite 4s; } .dot-4{ animation: orbit 28s linear infinite 6s; }
    .dot-5{ animation: orbit 24s linear infinite 8s; } .dot-6{ animation: orbit 26s linear infinite 10s; }

    @keyframes verticalOrbit1 { 0%{transform:translateY(-180px);opacity:.2}25%{opacity:.6}50%{transform:translateY(180px);opacity:.2}75%{opacity:.6}100%{transform:translateY(-180px);opacity:.2} }
    @keyframes verticalOrbit2 { 0%{transform:translateY(0);opacity:.6}25%{opacity:.2}50%{transform:translateY(-180px) translateX(100px);opacity:.2}75%{opacity:.6}100%{transform:translateY(0);opacity:.6} }
    .vertical-dot{ position:absolute; width:5px;height:5px;background:var(--purple); border-radius:50%; left:50%; top:50%; margin:-2.5px 0 0 -2.5px; }
    .v-dot-1{ animation:verticalOrbit1 18s ease-in-out infinite; }
    .v-dot-2{ animation:verticalOrbit2 20s ease-in-out infinite 2s; }
    .v-dot-3{ animation:verticalOrbit1 22s ease-in-out infinite 4s; transform: translateX(80px); }
    .v-dot-4{ animation:verticalOrbit2 19s ease-in-out infinite 6s; transform: translateX(-80px); }
    .v-dot-5{ animation:verticalOrbit1 21s ease-in-out infinite 8s; transform: translateX(40px); }
    .v-dot-6{ animation:verticalOrbit2 23s ease-in-out infinite 10s; transform: translateX(-40px); }

    .content-wrapper {
      position: relative;
      z-index: 1;
      animation: fadeInUp 0.8s ease-out;
      padding-bottom:64px;
    }

    .cards {
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      margin-top: 8px;
    }
    @media (max-width:768px){ .cards{ grid-template-columns:1fr; } }

    .office-card {
      border:1px solid var(--border);
      border-radius:16px;
      padding:32px;
      background:#fff;
      transition: all .3s cubic-bezier(.4,0,.2,1);
      position:relative;
      overflow:hidden;
      box-shadow:0 2px 8px rgba(10,22,40,.06); /* matches your white cards across site */
    }
    .office-card::before{
      content:'';
      position:absolute; top:0; left:0; right:0; height:4px;
      background: linear-gradient(90deg, var(--accent), var(--navy));
      transform: scaleX(0); transform-origin:left;
      transition: transform .4s cubic-bezier(.4,0,.2,1);
    }
    .office-card:hover{
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(0,0,0,.08);
      border-color: var(--accent);
    }
    .office-card:hover::before{ transform: scaleX(1); }

    .office-name {
      font-weight:600;
      margin:0 0 20px;
      color:var(--text-primary);
      font-size:24px;
      letter-spacing:-.3px;
    }
    .addr-block{ margin:0 0 24px; color:var(--text-primary); line-height:1.6; }
    .addr-line{ font-size:16px; line-height:1.6; color:var(--text-secondary); font-weight:400; }

    .links{ margin:24px 0; }
    .btn-link{
      display:inline-flex; align-items:center; gap:8px;
      padding:12px 20px; border-radius:8px; border:1px solid var(--border);
      text-decoration:none; color:var(--text-primary);
      background:var(--accent-light); font-weight:500; font-size:15px;
      transition: all .2s ease;
    }
    .btn-link:hover{ background:var(--accent); color:#fff; border-color:var(--accent); transform: translateX(2px); }

    .contact-section{ margin-top:24px; padding-top:24px; border-top:1px solid var(--border); }
    .contact-row{ margin-bottom:12px; color:var(--text-primary); font-size:16px; display:flex; align-items:baseline; gap:8px; }
    .contact-row:last-child{ margin-bottom:0; }
    .label{ font-weight:500; color:var(--text-secondary); min-width:36px; }
    .tel .number,.fax .number{ font-weight:400; color:var(--text-primary); }
    .tel a{ color:var(--text-primary); text-decoration:none; transition: color .2s ease; }
    .tel a:hover{ color:var(--accent); }

    @media (max-width:640px){
      .hero-inner{ padding:40px 0 28px; }
      .offices-wrap{ width:min(1200px,94%); margin:0 auto 60px; padding-top:40px; }
      .office-card{ padding:24px; }
      .offices-title{ font-size:32px; }
    }
  `;

    const gmap = (q) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

    // Canada (Toronto)
    const caLine1 = "Floor 48, 1 King Street West";
    const caLine2 = "Toronto, Ontario, M5H 1A1";
    const caQuery = `${caLine1}, ${caLine2}`;
    const telCA = "(437) 888-2974";
    const faxCA = "(647) 374-0066";

    // Caribbean (Kingston)
    const jmLine1 = "19 Cargill Avenue";
    const jmLine2 = "Kingston 10, Jamaica";
    const jmQuery = `${jmLine1}, ${jmLine2}`;
    const telJM = "(876) 299-7746";

    return h(React.Fragment, null,
        h("style", { dangerouslySetInnerHTML: { __html: css } }),
        h("main", { className: "offices-root" },

            /* Decorative background and hero */
            h("section", { className: "hero" },
                h("div", { className: "hero-inner" },
                    h("h1", { className: "offices-title" }, "Our Offices",
                        h("span", { className: "underline", "aria-hidden": "true" })
                    ),
                    h("p", { className: "subtitle" }, "Serving clients across North America and the Caribbean")
                )
            ),

            h("div", { className: "offices-wrap" },
                h("div", { className: "background-globe", "aria-hidden": "true" },
                    h("div", { className: "globe-circle" }),
                    h("div", { className: "globe-circle-2" }),
                    h("div", { className: "globe-arc" }),
                    h("div", { className: "globe-dots" },
                        h("div", { className: "dot dot-1" }),
                        h("div", { className: "dot dot-2" }),
                        h("div", { className: "dot dot-3" }),
                        h("div", { className: "dot dot-4" }),
                        h("div", { className: "dot dot-5" }),
                        h("div", { className: "dot dot-6" }),
                        h("div", { className: "vertical-dot v-dot-1" }),
                        h("div", { className: "vertical-dot v-dot-2" }),
                        h("div", { className: "vertical-dot v-dot-3" }),
                        h("div", { className: "vertical-dot v-dot-4" }),
                        h("div", { className: "vertical-dot v-dot-5" }),
                        h("div", { className: "vertical-dot v-dot-6" })
                    )
                ),

                h("div", { className: "content-wrapper" },
                    h("section", { className: "cards" },

                        // Canada
                        h("div", { className: "office-card" },
                            h("h2", { className: "office-name" }, "Canada"),
                            h("div", { className: "addr-block", "aria-label": "Toronto address" },
                                h("div", { className: "addr-line" }, caLine1),
                                h("div", { className: "addr-line" }, caLine2)
                            ),
                            h("div", { className: "links" },
                                h("a", {
                                    className: "btn-link",
                                    href: gmap(caQuery),
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, "View on Google Maps →")
                            ),
                            h("div", { className: "contact-section" },
                                h("div", { className: "contact-row tel" },
                                    h("span", { className: "label" }, "Tel:"),
                                    h("a", { className: "number", href: "tel:+14378882974" }, telCA)
                                ),
                                h("div", { className: "contact-row fax" },
                                    h("span", { className: "label" }, "Fax:"),
                                    h("span", { className: "number" }, faxCA)
                                )
                            )
                        ),

                        // Caribbean
                        h("div", { className: "office-card" },
                            h("h2", { className: "office-name" }, "Caribbean"),
                            h("div", { className: "addr-block", "aria-label": "Kingston address" },
                                h("div", { className: "addr-line" }, jmLine1),
                                h("div", { className: "addr-line" }, jmLine2)
                            ),
                            h("div", { className: "links" },
                                h("a", {
                                    className: "btn-link",
                                    href: gmap(jmQuery),
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                }, "View on Google Maps →")
                            ),
                            h("div", { className: "contact-section" },
                                h("div", { className: "contact-row tel" },
                                    h("span", { className: "label" }, "Tel:"),
                                    h("a", { className: "number", href: "tel:+18762997746" }, telJM)
                                )
                            )
                        )
                    )
                )
            )
        )
    );
}