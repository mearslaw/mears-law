"use client";

import Link from "next/link";
import { COMPANY_SERVICES } from "./companies/servicesData";
import { INDIVIDUAL_SERVICES } from "./individuals/servicesData";

const audiences = [
  {
    title: "Companies",
    href: "/services/companies",
    description:
      "Legal support for companies operating in complex, regulated, and technology-driven environments.",
    offerings: COMPANY_SERVICES,
  },
  {
    title: "Individuals",
    href: "/services/individuals",
    description:
      "Legal support for individuals facing high-stakes matters involving property, technology, and digital risk.",
    offerings: INDIVIDUAL_SERVICES,
  },
];

export default function ServicesPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-content">
          <h1 className="h1">
            Services
            <span className="underline"></span>
          </h1>
          <p className="lead">
            Choose the profile that best fits your matter, then explore the relevant service offering.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {audiences.map((audience) => (
            <article className="service-card" key={audience.title}>
              <h2 className="card-title">{audience.title}</h2>
              <p className="card-description">{audience.description}</p>

              <ul className="offering-list">
                {audience.offerings.map((offering) => (
                  <li key={offering.slug}>
                    <Link href={`${audience.href}/${offering.slug}`} className="offering-link">
                      {offering.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href={audience.href} className="card-link">
                View all {audience.title} services
              </Link>
            </article>
          ))}
        </div>
      </section>

      <style jsx>{`
        .page {
          background: #f3f4f6;
          color: #374151;
          min-height: 100vh;
        }

        .container {
          width: min(1200px, 92%);
          margin: 0 auto;
        }

        .hero {
          padding: 64px 0 48px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: left;
        }

        .h1 {
          font-size: 52px;
          line-height: 1.1;
          color: #0a1628;
          font-weight: 700;
          margin: 0 0 16px;
          position: relative;
          padding-bottom: 16px;
        }

        .underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5px;
          background: linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd);
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
          animation: expandUnderline 2s ease-out forwards;
        }

        @keyframes expandUnderline {
          0% {
            width: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 120px;
            opacity: 1;
          }
        }

        .lead {
          font-size: 20px;
          line-height: 1.65;
          margin: 0;
          color: #374151;
          opacity: 0.9;
          max-width: 850px;
        }

        .section {
          padding: 64px 0;
          background: #f3f4f6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .service-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(10, 22, 40, 0.08);
          padding: 32px;
          display: grid;
          gap: 16px;
        }

        .card-title {
          font-size: 32px;
          line-height: 1.2;
          color: #0a1628;
          font-weight: 700;
          margin: 0;
        }

        .card-description {
          font-size: 16px;
          line-height: 1.7;
          color: #374151;
          margin: 0;
        }

        .offering-list {
          margin: 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
        }

        .offering-link {
          color: #1e3a5f;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .offering-link:hover {
          border-color: #1e3a5f;
        }

        .card-link {
          font-size: 16px;
          font-weight: 600;
          color: #1e3a5f;
          text-decoration: none;
          width: fit-content;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .card-link:hover {
          border-color: #1e3a5f;
        }

        @media (max-width: 720px) {
          .h1 {
            font-size: 36px;
          }

          .lead {
            font-size: 18px;
          }

          .hero {
            padding: 48px 0 36px;
          }

          .card-title {
            font-size: 28px;
          }
        }
      `}</style>
    </main>
  );
}

