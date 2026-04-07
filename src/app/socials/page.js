"use client";

import Link from "next/link";

export default function SocialsPage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-content">
          <div className="eyebrow">SOCIALS</div>
          <h1 className="h1">
            Connect with Mears Law
            <span className="underline" aria-hidden="true"></span>
          </h1>
          <p className="lead">
            Follow us for updates on AI regulation, corporate and real estate
            law, immigration, and practical insights on navigating an evolving
            regulatory landscape.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container socials-grid">
          <SocialCard
            name="LinkedIn"
            href="https://www.linkedin.com/company/mearslawprofessionalcorporation/?originalSubdomain=ca"
            description="Firm updates, thought leadership, and professional insights."
          />
          <SocialCard
            name="Instagram"
            href="https://www.instagram.com/mearslawjamaica/"
            description="A look behind the scenes and community highlights."
          />
          <SocialCard
            name="TikTok"
            href="https://www.tiktok.com/@mearslaw"
            description="Short-form explainers on law, AI, and governance."
          />
          <SocialCard
            name="YouTube"
            href="https://www.youtube.com/@mearslaw"
            description="Long-form conversations and educational content."
          />
          <SocialCard
            name="Substack"
            href="https://substack.com/@mearslaw"
            description="In-depth commentary and newsletters direct to your inbox."
          />
        </div>
      </section>

      <style jsx>{`
        .page {
          background: #f3f4f6;
          min-height: 100vh;
        }

        .container {
          width: min(1200px, 92%);
          margin: 0 auto;
        }

        .hero {
          padding: 64px 0 40px;
          background: #ffffff;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: left;
        }

        .eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .h1 {
          font-size: 40px;
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
          width: 120px;
        }

        .lead {
          font-size: 18px;
          line-height: 1.7;
          color: #374151;
          margin: 0;
          max-width: 720px;
        }

        .section {
          padding: 48px 0 64px;
          background: #f3f4f6;
        }

        .socials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 20px 20px 18px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 8px 18px rgba(15, 23, 42, 0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: #8b5cf6;
          box-shadow: 0 14px 30px rgba(15, 23, 42, 0.12);
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
          color: #0f172a;
        }

        .card-description {
          font-size: 14px;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 8px;
        }

        .card-cta {
          font-size: 14px;
          font-weight: 600;
          color: #4f46e5;
        }

        @media (max-width: 720px) {
          .hero {
            padding: 48px 0 32px;
          }

          .h1 {
            font-size: 32px;
          }

          .lead {
            font-size: 16px;
          }
        }
      `}</style>
    </main>
  );
}

function SocialCard({ name, href, description }) {
  return (
    <Link href={href} className="card" target="_blank" rel="noopener noreferrer">
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
      <span className="card-cta">Open {name}</span>
    </Link>
  );
}

