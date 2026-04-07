"use client";

import Link from "next/link";

export default function AudienceServicesPage({
  title,
  intro,
  audiencePath,
  services,
}) {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-content">
          <h1 className="h1">
            {title}
            <span className="underline"></span>
          </h1>
          <p className="lead">{intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.slug}>
              <h2 className="card-title">{service.title}</h2>
              <p className="card-description">{service.blurb}</p>
              <Link
                href={`${audiencePath}/${service.slug}`}
                className="card-link"
                aria-label={`View ${service.title} details`}
              >
                View offering
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
          max-width: 900px;
        }

        .section {
          padding: 48px 0 64px;
          background: #f3f4f6;
          position: relative;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .service-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(10, 22, 40, 0.06);
          padding: 28px;
          display: grid;
          gap: 14px;
          align-content: start;
        }

        .card-title {
          margin: 0;
          font-size: 30px;
          line-height: 1.2;
          color: #0a1628;
        }

        .card-description {
          margin: 0;
          color: #374151;
          line-height: 1.7;
          font-size: 16px;
        }

        .card-link {
          font-weight: 600;
          color: #1e3a5f;
          text-decoration: none;
          width: fit-content;
          padding-bottom: 2px;
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
            font-size: 26px;
          }
        }
      `}</style>
    </main>
  );
}
