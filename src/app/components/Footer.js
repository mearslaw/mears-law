// "use client";

// import React, { useEffect } from "react";
// import Link from "next/link";

// const YEAR = new Date().getFullYear();

// export default function Footer() {
//   useEffect(() => {
//     const css = `
//       .site-footer, .site-footer * {
//         font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
//       }

//       .updates-strip {
//         background: #1E293B;
//         border-top: 1px solid rgba(255, 255, 255, 0.1);
//         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//       }

//       .updates-strip .container {
//         width: min(1200px, 92%);
//         margin: 0 auto;
//       }

//       .updates-strip .strip-inner {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         gap: 20px;
//         padding: 10px 0;
//         min-height: 46px;
//       }

//       .updates-strip .strip-text {
//         font-size: 17px;
//         font-weight: 700;
//         color: #fff;
//         text-align: center;
//         letter-spacing: 0.1px;
//       }

//       .updates-strip .strip-btn {
//         display: inline-flex;
//         align-items: center;
//         gap: 6px;
//         padding: 8px 14px;
//         background: #fff;
//         color: #0A1628;
//         text-decoration: none;
//         border-radius: 4px;
//         font-weight: 600;
//         font-size: 14px;
//         line-height: 1;
//         transition: all 0.2s ease;
//         border: 1px solid rgba(255, 255, 255, 0.2);
//       }

//       .updates-strip .strip-btn:hover {
//         transform: translateY(-1px);
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//       }

//       .updates-strip .arrow {
//         display: inline-block;
//         transform: translateX(1px);
//       }

//       /* Book with Lawyer Section */
//       .book-lawyer-strip {
//         background: #fafbfc;
//         border-bottom: 1px solid #e5e7eb;
//         position: relative;
//         overflow: hidden;
//       }

//       .book-lawyer-strip::before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         height: 1px;
//         background: linear-gradient(
//           90deg,
//           transparent,
//           rgba(30, 58, 95, 0.1) 20%,
//           rgba(30, 58, 95, 0.1) 80%,
//           transparent
//         );
//       }

//       .book-lawyer-strip .container {
//         width: min(1200px, 92%);
//         margin: 0 auto;
//       }

//       .book-lawyer-strip .strip-inner {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         gap: 24px;
//         padding: 32px 0;
//         position: relative;
//       }

//       .book-lawyer-strip .book-icon {
//         width: 48px;
//         height: 48px;
//         background: linear-gradient(135deg, #1E3A5F 0%, #0A1628 100%);
//         border-radius: 12px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         box-shadow: 0 4px 12px rgba(30, 58, 95, 0.15);
//       }

//       .book-lawyer-strip .book-icon svg {
//         width: 24px;
//         height: 24px;
//         color: #fff;
//       }

//       .book-lawyer-strip .book-content {
//         display: flex;
//         flex-direction: column;
//         gap: 4px;
//       }

//       .book-lawyer-strip .book-title {
//         font-size: 20px;
//         font-weight: 700;
//         color: #0A1628;
//         letter-spacing: 0.2px;
//         line-height: 1.2;
//       }

//       .book-lawyer-strip .book-subtitle {
//         font-size: 14px;
//         color: #6B7280;
//         font-weight: 500;
//         letter-spacing: 0.1px;
//       }

//       .book-lawyer-strip .book-btn {
//         display: inline-flex;
//         align-items: center;
//         gap: 8px;
//         padding: 14px 32px;
//         background: linear-gradient(135deg, #1E3A5F 0%, #0A1628 100%);
//         color: #fff;
//         text-decoration: none;
//         border-radius: 8px;
//         font-weight: 600;
//         font-size: 15px;
//         line-height: 1;
//         transition: all 0.3s ease;
//         box-shadow: 0 4px 12px rgba(30, 58, 95, 0.2);
//         border: 1px solid rgba(255, 255, 255, 0.1);
//         letter-spacing: 0.3px;
//       }

//       .book-lawyer-strip .book-btn:hover {
//         transform: translateY(-2px);
//         box-shadow: 0 6px 20px rgba(30, 58, 95, 0.35);
//         background: linear-gradient(135deg, #2d4a73 0%, #1a2a40 100%);
//       }

//       .book-lawyer-strip .book-btn:active {
//         transform: translateY(0);
//       }

//       .book-lawyer-strip .btn-arrow {
//         display: inline-block;
//         transition: transform 0.3s ease;
//       }

//       .book-lawyer-strip .book-btn:hover .btn-arrow {
//         transform: translateX(3px);
//       }

//       .site-footer {
//         background: #0A1628;
//         color: #E5E7EB;
//         padding: 40px 0 28px;
//       }

//       .site-footer .container {
//         width: min(1200px, 92%);
//         margin: 0 auto;
//       }

//       .site-footer .footer-top {
//         display: grid;
//         grid-template-columns: 1fr 1fr;
//         gap: 60px;
//         padding-bottom: 32px;
//         border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//         margin-bottom: 24px;
//       }

//       .site-footer .brand-section {
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//       }

//       .site-footer .brand-mark-img {
//         width: 120px;
//         height: 120px;
//         border-radius: 8px;
//         object-fit: cover;
//       }

//       .site-footer .contact-info {
//         display: flex;
//         flex-direction: column;
//         gap: 10px;
//       }

//       .site-footer .contact-link {
//         color: #E5E7EB;
//         text-decoration: none;
//         font-size: 17px;
//         transition: all 0.2s ease;
//         display: inline-block;
//         position: relative;
//       }

//       .site-footer .contact-link::after {
//         content: '';
//         position: absolute;
//         bottom: -2px;
//         left: 0;
//         width: 0;
//         height: 2px;
//         background: #60A5FA;
//         transition: width 0.3s ease;
//       }

//       .site-footer .contact-link:hover {
//         color: #60A5FA;
//         transform: translateX(4px);
//       }

//       .site-footer .contact-link:hover::after {
//         width: 100%;
//       }

//       .site-footer .right-section {
//         display: flex;
//         justify-content: flex-end;
//         align-items: flex-start;
//       }

//       .site-footer .socials {
//         display: flex;
//         gap: 14px;
//       }

//       .site-footer .socials a {
//         display: inline-flex;
//         width: 48px;
//         height: 48px;
//         border-radius: 10px;
//         align-items: center;
//         justify-content: center;
//         background: rgba(255, 255, 255, 0.06);
//         color: #E5E7EB;
//         border: 1px solid rgba(255, 255, 255, 0.1);
//         transition: all 0.3s ease;
//         text-decoration: none;
//       }

//       .site-footer .socials a:hover {
//         background: #60A5FA;
//         border-color: #60A5FA;
//         transform: translateY(-3px);
//         box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
//       }

//       .site-footer .socials svg {
//         width: 22px;
//         height: 22px;
//       }

//       .site-footer .footer-bottom {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//       }

//       .site-footer .copyright {
//         font-size: 15px;
//         color: #9CA3AF;
//       }

//       .site-footer .footer-links {
//         display: flex;
//         gap: 20px;
//         align-items: center;
//       }

//       .site-footer .footer-link {
//         color: #9CA3AF;
//         text-decoration: none;
//         font-size: 15px;
//         transition: color 0.2s ease;
//       }

//       .site-footer .footer-link:hover {
//         color: #60A5FA;
//       }

//       .site-footer .divider {
//         color: #6B7280;
//         margin: 0;
//       }

//       @media (max-width: 900px) {
//         .site-footer {
//           padding: 36px 0 24px;
//         }

//         .updates-strip .strip-inner {
//           flex-direction: column;
//           gap: 14px;
//           padding: 16px 0;
//           min-height: auto;
//         }

//         .updates-strip .strip-text {
//           font-size: 16px;
//           line-height: 1.4;
//         }

//         .updates-strip .strip-btn {
//           padding: 10px 20px;
//           font-size: 15px;
//           border-radius: 6px;
//           width: auto;
//           min-width: 120px;
//           justify-content: center;
//         }

//         .book-lawyer-strip .strip-inner {
//           flex-direction: column;
//           gap: 20px;
//           padding: 28px 0;
//           text-align: center;
//         }

//         .book-lawyer-strip .book-title {
//           font-size: 18px;
//         }

//         .book-lawyer-strip .book-subtitle {
//           font-size: 13px;
//         }

//         .book-lawyer-strip .book-btn {
//           padding: 12px 28px;
//           font-size: 14px;
//           width: 100%;
//           max-width: 280px;
//           justify-content: center;
//         }

//         .site-footer .footer-top {
//           grid-template-columns: 1fr;
//           gap: 32px;
//         }

//         .site-footer .right-section {
//           justify-content: flex-start;
//         }

//         .site-footer .footer-bottom {
//           flex-direction: column;
//           gap: 16px;
//           align-items: flex-start;
//         }

//         .site-footer .footer-links {
//           flex-wrap: wrap;
//         }
//       }
//     `;

//     const tag = document.createElement("style");
//     tag.setAttribute("data-footer-css", "true");
//     tag.appendChild(document.createTextNode(css));
//     document.head.appendChild(tag);
//     return () => {
//       try {
//         document.head.removeChild(tag);
//       } catch (_) {}
//     };
//   }, []);

//   const el = React.createElement;
//   const svg = (attrs, children = []) => el("svg", attrs, ...children);
//   const path = (attrs) => el("path", attrs);
//   const rect = (attrs) => el("rect", attrs); // for Substack mark

//   return el(
//     React.Fragment,
//     null,
//     // Updates strip
//     el(
//       "section",
//       { className: "updates-strip", role: "region", "aria-label": "Email updates" },
//       el(
//         "div",
//         { className: "container strip-inner" },
//         el("span", { className: "strip-text" }, "Want to receive updates from Mears Law?"),
//         el(
//           "a",
//           {
//             className: "strip-btn",
//             href: "https://mearslaw.kit.com/ea71ad71fe",
//             target: "_blank",
//             rel: "noopener noreferrer",
//             "aria-label": "Sign up for updates"
//           },
//           "Sign up ",
//           el("span", { className: "arrow" }, "›")
//         )
//       )
//     ),
//     // Book with Lawyer strip
//     el(
//       "section",
//       { className: "book-lawyer-strip", role: "region", "aria-label": "Book consultation" },
//       el(
//         "div",
//         { className: "container strip-inner" },
//         el(
//           "div",
//           { className: "book-icon" },
//           svg(
//             { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
//             [
//               path({ d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1" }),
//               el("circle", { cx: "9", cy: "7", r: "4", key: "2" }),
//               path({ d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "3" }),
//               path({ d: "M16 3.13a4 4 0 0 1 0 7.75", key: "4" })
//             ]
//           )
//         ),
//         el(
//           "div",
//           { className: "book-content" },
//           el("div", { className: "book-title" }, "Ready to Discuss Your Legal Matter?"),
//           el("div", { className: "book-subtitle" }, "Schedule a consultation with our experienced legal team")
//         ),
//         el(
//           Link,
//           { className: "book-btn", href: "/book", "aria-label": "Book a consultation" },
//           "Book a Consultation",
//           el("span", { className: "btn-arrow" }, "→")
//         )
//       )
//     ),
//     // Footer
//     el(
//       "footer",
//       { className: "site-footer" },
//       el(
//         "div",
//         { className: "container" },
//         // Top section
//         el(
//           "div",
//           { className: "footer-top" },
//         // Left: Logo + Contact Info
//         el(
//           "div",
//           { className: "brand-section" },
//           el(
//             "div",
//             { className: "contact-info" },
//             el(
//               Link,
//               { className: "contact-link", href: "/contact" },
//               "Contact Us"
//             ),
//             el(
//               "a",
//               { className: "contact-link", href: "mailto:info@mearslaw.ca" },
//               "info@mearslaw.ca"
//             ),
//             el(
//               Link,
//               { className: "contact-link", href: "/offices" },
//               "Offices"
//             )

//           )
//         ),
//         // Right: Social Media
//         el(
//           "div",
//           { className: "right-section" },
//           el(
//             "div",
//             { className: "socials" },
//             // LinkedIn
//             el(
//               "a",
//               {
//                 href: "https://www.linkedin.com/company/mearslawprofessionalcorporation/?originalSubdomain=ca",
//                 "aria-label": "LinkedIn",
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               },
//               svg(
//                 { viewBox: "0 0 24 24", fill: "currentColor" },
//                 [
//                   path({
//                     d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
//                   }),
//                 ]
//               )
//             ),
//             // Instagram
//             el(
//               "a",
//               {
//                 href: "https://www.instagram.com/mearslawjamaica/",
//                 "aria-label": "Instagram",
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               },
//               svg(
//                 { viewBox: "0 0 24 24", fill: "currentColor" },
//                 [
//                   path({
//                     d: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.61-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
//                   }),
//                 ]
//               )
//             ),
//             // TikTok
//             el(
//               "a",
//               {
//                 href: "https://www.tiktok.com/@mearslaw",
//                 "aria-label": "TikTok",
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               },
//               svg(
//                 { viewBox: "0 0 24 24", fill: "currentColor" },
//                 [
//                   path({
//                     d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z",
//                   }),
//                 ]
//               )
//             ),
//             // YouTube
//             el(
//               "a",
//               {
//                 href: "https://www.youtube.com/@mearslaw",
//                 "aria-label": "YouTube",
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               },
//               svg(
//                 { viewBox: "0 0 24 24", fill: "currentColor" },
//                 [
//                   path({
//                     d: "M23.498 6.186a3.002 3.002 0 0 0-2.115-2.125C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.383.561A3.002 3.002 0 0 0 .502 6.186 31.1 31.1 0 0 0 0 12c0 1.98.17 3.93.502 5.814a3.002 3.002 0 0 0 2.115 2.125C4.48 20.5 12 20.5 12 20.5s7.52 0 9.383-.561a3.002 3.002 0 0 0 2.115-2.125C23.83 15.93 24 13.98 24 12c0-1.98-.17-3.93-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
//                   }),
//                 ]
//               )
//             ),
//             // Substack (stacked-lines mark)
//             el(
//               "a",
//               {
//                 href: "https://substack.com/@mearslaw",
//                 "aria-label": "Substack",
//                 target: "_blank",
//                 rel: "noopener noreferrer",
//               },
//               svg(
//                 { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" },
//                 [
//                   // top bar
//                   path({ d: "M4 6h16v2H4z" }),
//                   // middle bar
//                   path({ d: "M4 10h16v2H4z" }),
//                   // ribbon block with centered point
//                   path({ d: "M4 14h16v6l-8-4-8 4z" }),
//                 ]
//               )
//             )
//           )
//         )
//       ),
//       // Bottom section
//       el(
//         "div",
//         { className: "footer-bottom" },
//         el(
//           "div",
//           { className: "copyright" },
//           `© ${YEAR} Mears Law. All rights reserved.`
//         ),
//         el(
//           "div",
//           { className: "footer-links" },
//           el(
//             Link,
//             { className: "footer-link", href: "/privacy" },
//             "Privacy and Terms"
//           )
//         )
//       )
//     )
//     )
//   );
// }
"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);

  const openCalendly = useCallback((e) => {
    e.preventDefault();
    setIsCalendlyOpen(true);
  }, []);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  const openSocials = useCallback((e) => {
    e.preventDefault();
    setIsSocialsOpen(true);
  }, []);

  const closeSocials = useCallback(() => {
    setIsSocialsOpen(false);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && (isCalendlyOpen || isSocialsOpen)) {
        if (isCalendlyOpen) closeCalendly();
        if (isSocialsOpen) closeSocials();
      }
    };
    
    if (isCalendlyOpen || isSocialsOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCalendlyOpen, isSocialsOpen, closeCalendly, closeSocials]);

  // Load Calendly script
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Load script
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const css = `
      .site-footer, .site-footer * {
        font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif !important;
      }

      .updates-strip {
        background: #1E293B;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .updates-strip .container {
        width: min(1200px, 92%);
        margin: 0 auto;
      }

      .updates-strip .strip-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 10px 0;
        min-height: 46px;
      }

      .updates-strip .strip-text {
        font-size: 17px;
        font-weight: 700;
        color: #fff;
        text-align: center;
        letter-spacing: 0.1px;
      }

      .updates-strip .strip-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 8px 14px;
        background: #fff;
        color: #0A1628;
        text-decoration: none;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 1;
        transition: all 0.2s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .updates-strip .strip-btn:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }

      .updates-strip .arrow {
        display: inline-block;
        transform: translateX(1px);
      }

      /* Book with Lawyer Section */
      .book-lawyer-strip {
        background: #fafbfc;
        border-bottom: 1px solid #e5e7eb;
        position: relative;
        overflow: hidden;
      }

      .book-lawyer-strip::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(30, 58, 95, 0.1) 20%,
          rgba(30, 58, 95, 0.1) 80%,
          transparent
        );
      }

      .book-lawyer-strip .container {
        width: min(1200px, 92%);
        margin: 0 auto;
      }

      .book-lawyer-strip .strip-inner {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        padding: 32px 0;
        position: relative;
      }

      .book-lawyer-strip .book-icon {
        width: 48px;
        height: 48px;
        background: linear-gradient(135deg, #1E3A5F 0%, #0A1628 100%);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(30, 58, 95, 0.15);
      }

      .book-lawyer-strip .book-icon svg {
        width: 24px;
        height: 24px;
        color: #fff;
      }

      .book-lawyer-strip .book-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .book-lawyer-strip .book-title {
        font-size: 20px;
        font-weight: 700;
        color: #0A1628;
        letter-spacing: 0.2px;
        line-height: 1.2;
      }

      .book-lawyer-strip .book-subtitle {
        font-size: 14px;
        color: #6B7280;
        font-weight: 500;
        letter-spacing: 0.1px;
      }

      .book-lawyer-strip .book-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 14px 32px;
        background: linear-gradient(135deg, #1E3A5F 0%, #0A1628 100%);
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 15px;
        line-height: 1;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(30, 58, 95, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        letter-spacing: 0.3px;
        cursor: pointer;
      }

      .book-lawyer-strip .book-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(30, 58, 95, 0.35);
        background: linear-gradient(135deg, #2d4a73 0%, #1a2a40 100%);
      }

      .book-lawyer-strip .book-btn:active {
        transform: translateY(0);
      }

      .book-lawyer-strip .btn-arrow {
        display: inline-block;
        transition: transform 0.3s ease;
      }

      .book-lawyer-strip .book-btn:hover .btn-arrow {
        transform: translateX(3px);
      }

      /* Calendly Modal */
      .calendly-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .calendly-overlay.open {
        display: flex;
        opacity: 1;
      }

      .calendly-modal {
        background: white;
        border-radius: 12px;
        width: 100%;
        max-width: 1000px;
        height: 90vh;
        max-height: 750px;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        overflow: hidden;
        transform: scale(0.95);
        transition: transform 0.3s ease;
      }

      .calendly-overlay.open .calendly-modal {
        transform: scale(1);
      }

      .calendly-close {
        position: absolute;
        top: 16px;
        right: 16px;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 2001;
        transition: background 0.2s ease;
        font-size: 24px;
        line-height: 1;
      }

      .calendly-close:hover {
        background: rgba(0, 0, 0, 0.8);
      }

      .calendly-inline-widget {
        width: 100%;
        height: 100%;
        min-width: 320px;
      }

      .site-footer {
        background: #0A1628;
        color: #E5E7EB;
        padding: 40px 0 28px;
      }
      
      .site-footer .container {
        width: min(1200px, 92%);
        margin: 0 auto;
      }

      .site-footer .footer-top {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        padding-bottom: 32px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 24px;
      }

      .site-footer .brand-section {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .site-footer .brand-mark-img {
        width: 120px;
        height: 120px;
        border-radius: 8px;
        object-fit: cover;
      }

      .site-footer .contact-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .site-footer .contact-link {
        color: #E5E7EB;
        text-decoration: none;
        font-size: 17px;
        transition: all 0.2s ease;
        display: inline-block;
        position: relative;
      }

      .site-footer .contact-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background: #60A5FA;
        transition: width 0.3s ease;
      }

      .site-footer .contact-link:hover {
        color: #60A5FA;
        transform: translateX(4px);
      }

      .site-footer .contact-link:hover::after {
        width: 100%;
      }

      .site-footer .right-section {
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
      }

      .site-footer .socials {
        display: flex;
        align-items: center;
      }

      .site-footer .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .site-footer .copyright {
        font-size: 15px;
        color: #9CA3AF;
      }

      .site-footer .footer-links {
        display: flex;
        gap: 20px;
        align-items: center;
      }

      .site-footer .footer-disclaimer {
        margin: 20px 0 0;
        padding-top: 18px;
        border-top: 1px solid rgba(148, 163, 184, 0.2);
        font-size: 12px;
        line-height: 1.55;
        color: #6B7280;
        max-width: 720px;
      }

      .site-footer .footer-link {
        color: #9CA3AF;
        text-decoration: none;
        font-size: 15px;
        transition: color 0.2s ease;
      }

      .site-footer .footer-link:hover {
        color: #60A5FA;
      }

      .site-footer .divider {
        color: #6B7280;
        margin: 0;
      }

      /* Socials Modal */
      .socials-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        padding: 20px;
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .socials-overlay.open {
        display: flex;
        opacity: 1;
      }

      .socials-modal {
        background: #020617;
        color: #e5e7eb;
        border-radius: 16px;
        width: 100%;
        max-width: 640px;
        padding: 22px 22px 18px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        position: relative;
      }

      .socials-modal-header {
        margin-bottom: 12px;
      }

      .socials-modal-title {
        font-size: 20px;
        font-weight: 600;
        margin: 0 0 4px;
      }

      .socials-modal-sub {
        font-size: 14px;
        color: #9ca3af;
        margin: 0;
      }

      .socials-list {
        list-style: none;
        padding: 0;
        margin: 16px 0 0;
        display: grid;
        gap: 10px;
      }

      .socials-list-item {
        padding: 10px 12px;
        border-radius: 10px;
        background: rgba(15, 23, 42, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.4);
        text-align: center;
      }

      .socials-list-link {
        display: inline-block;
        width: 100%;
        font-size: 14px;
        font-weight: 600;
        color: #60a5fa;
        text-decoration: none;
      }

      .socials-list-link:hover {
        color: #93c5fd;
      }

      .socials-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        color: #9ca3af;
        font-size: 22px;
        cursor: pointer;
      }

      @media (max-width: 900px) {
        .site-footer {
          padding: 36px 0 24px;
        }

        .updates-strip .strip-inner {
          flex-direction: column;
          gap: 14px;
          padding: 16px 0;
          min-height: auto;
        }

        .updates-strip .strip-text {
          font-size: 16px;
          line-height: 1.4;
        }

        .updates-strip .strip-btn {
          padding: 10px 20px;
          font-size: 15px;
          border-radius: 6px;
          width: auto;
          min-width: 120px;
          justify-content: center;
        }

        .book-lawyer-strip .strip-inner {
          flex-direction: column;
          gap: 20px;
          padding: 28px 0;
          text-align: center;
        }

        .book-lawyer-strip .book-title {
          font-size: 18px;
        }

        .book-lawyer-strip .book-subtitle {
          font-size: 13px;
        }

        .book-lawyer-strip .book-btn {
          padding: 12px 28px;
          font-size: 14px;
          width: 100%;
          max-width: 280px;
          justify-content: center;
        }

        .site-footer .footer-top {
          grid-template-columns: 1fr;
          gap: 32px;
        }

        .site-footer .right-section {
          justify-content: flex-start;
        }

        .site-footer .footer-bottom {
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }

        .site-footer .footer-links {
          flex-wrap: wrap;
        }
      }
    `;
    
    const tag = document.createElement("style");
    tag.setAttribute("data-footer-css", "true");
    tag.appendChild(document.createTextNode(css));
    document.head.appendChild(tag);
    return () => {
      try {
        document.head.removeChild(tag);
      } catch (_) {}
    };
  }, []);

  const el = React.createElement;
  const svg = (attrs, children = []) => el("svg", attrs, ...children);
  const path = (attrs) => el("path", attrs);
  const rect = (attrs) => el("rect", attrs); // for Substack mark

  return el(
    React.Fragment,
    null,
    // Updates strip
    el(
      "section",
      { className: "updates-strip", role: "region", "aria-label": "Email updates" },
      el(
        "div",
        { className: "container strip-inner" },
        el("span", { className: "strip-text" }, "Want to receive updates from Mears Law?"),
        el(
          "a",
          {
            className: "strip-btn",
            href: "https://mearslaw.kit.com/ea71ad71fe",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Sign up for updates"
          },
          "Sign up ",
          el("span", { className: "arrow" }, "›")
        )
      )
    ),
    // Book with Lawyer strip
    el(
      "section",
      { className: "book-lawyer-strip", role: "region", "aria-label": "Book consultation" },
      el(
        "div",
        { className: "container strip-inner" },
        el(
          "div",
          { className: "book-icon" },
          svg(
            { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
            [
              path({ d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1" }),
              el("circle", { cx: "9", cy: "7", r: "4", key: "2" }),
              path({ d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "3" }),
              path({ d: "M16 3.13a4 4 0 0 1 0 7.75", key: "4" })
            ]
          )
        ),
        el(
          "div",
          { className: "book-content" },
          el("div", { className: "book-title" }, "Ready to Discuss Your Matter?"),
          el("div", { className: "book-subtitle" }, "Schedule a consultation with our experienced team")
        ),
        el(
          "button",
          { 
            className: "book-btn",
            onClick: () => window.open("https://outlook.office.com/book/IntakeMeeting@mearslaw.ca/?ismsaljsauthenabled", "_blank"),
              "aria-label": "Book a consultation"
          },
          "Book a Consultation",
          el("span", { className: "btn-arrow" }, "→")
        )
      )
    ),
    // Calendly modal
    el(
      "div",
      { 
        className: `calendly-overlay${isCalendlyOpen ? " open" : ""}`,
        onClick: closeCalendly
      },
      el(
        "div",
        { 
          className: "calendly-modal",
          onClick: (e) => e.stopPropagation()
        },
        el(
          "button",
          { 
            className: "calendly-close",
            onClick: closeCalendly,
            "aria-label": "Close calendar"
          },
          "×"
        ),
        el("div", {
          className: "calendly-inline-widget",
          "data-url": "https://mearslaw.fillout.com/meeting-with-carissa-mears"
        })
      )
    ),
    // Footer
    el(
      "footer",
      { className: "site-footer" },
      el(
        "div",
        { className: "container" },
        // Top section
        el(
          "div",
          { className: "footer-top" },
        // Left: Contact Info
        el(
          "div",
          { className: "brand-section" },
          el(
            "div",
            { className: "contact-info" },
            el(
              Link,
              { className: "contact-link", href: "/contact" },
              "Leave us a message"
            ),
            el(
              Link,
              { className: "contact-link", href: "/offices" },
              "Offices"
            )
          )
        ),
        // Right: Social link (opens modal)
        el(
          "div",
          { className: "right-section" },
          el(
            "div",
            { className: "socials" },
            el(
              "a",
              { 
                className: "footer-link", 
                href: "#socials",
                onClick: openSocials
              },
              "Socials"
            )
          )
        )
      ),
      // Bottom section
      el(
        "div",
        { className: "footer-bottom" },
        el(
          "div",
          { className: "copyright" },
          `© ${YEAR} Mears Law. All rights reserved.`
        ),
        el(
          "div",
          { className: "footer-links" },
          el(
            Link,
            { className: "footer-link", href: "/insights" },
            "Insights"
          ),
          el(
            Link,
            { className: "footer-link", href: "/privacy" },
            "Privacy and Terms"
          )
        )
      ),
        el(
          "p",
          { className: "footer-disclaimer" },
          "The information on this website is provided for general informational purposes only and does not constitute legal advice. Accessing this website or contacting Mears Law does not create a lawyer-client relationship."
        )
      ),
      // Socials modal
      el(
        "div",
        {
          className: `socials-overlay${isSocialsOpen ? " open" : ""}`,
          onClick: closeSocials
        },
        el(
          "div",
          {
            className: "socials-modal",
            onClick: (e) => e.stopPropagation()
          },
          el(
            "button",
            {
              className: "socials-close",
              onClick: closeSocials,
              "aria-label": "Close socials"
            },
            "×"
          ),
          el(
            "div",
            { className: "socials-modal-header" },
            el(
              "h2",
              { className: "socials-modal-title" },
              "Connect with Mears Law"
            ),
            el(
              "p",
              { className: "socials-modal-sub" },
              "Follow us for updates on AI, governance, and legal insights."
            )
          ),
          el(
            "ul",
            { className: "socials-list" },
            el(
              "li",
              { className: "socials-list-item" },
              el(
                "a",
                {
                  className: "socials-list-link",
                  href: "https://www.linkedin.com/company/mearslawprofessionalcorporation/?originalSubdomain=ca",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "LinkedIn"
              )
            ),
            el(
              "li",
              { className: "socials-list-item" },
              el(
                "a",
                {
                  className: "socials-list-link",
                  href: "https://www.instagram.com/mearslawjamaica/",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "Instagram"
              )
            ),
            el(
              "li",
              { className: "socials-list-item" },
              el(
                "a",
                {
                  className: "socials-list-link",
                  href: "https://www.tiktok.com/@mearslaw",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "TikTok"
              )
            ),
            el(
              "li",
              { className: "socials-list-item" },
              el(
                "a",
                {
                  className: "socials-list-link",
                  href: "https://www.youtube.com/@mearslaw",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "YouTube"
              )
            ),
            el(
              "li",
              { className: "socials-list-item" },
              el(
                "a",
                {
                  className: "socials-list-link",
                  href: "https://substack.com/@mearslaw",
                  target: "_blank",
                  rel: "noopener noreferrer"
                },
                "Substack"
              )
            )
          )
        )
      )
    )
  );
}