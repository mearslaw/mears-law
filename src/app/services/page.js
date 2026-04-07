"use client";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="h1">
            Services
            <span className="underline"></span>
          </h1>
          <p className="lead">
            We focus on the practice areas where we deliver the most value—so you get senior
            attention, practical advice, and outcomes that matter.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section">
        <div className="container services-grid">
          <Link href="/legal" className="service-card">
            <div className="card-content">
              <h2 className="card-title">Legal Services</h2>
              <p className="card-description">
                Comprehensive legal services including AI Regulation, Corporate Law, Immigration Law,
                Real Estate Law, and Privacy Law. Expert legal counsel to help you navigate complex
                legal challenges with confidence.
              </p>
              <div className="card-footer">
                <span className="card-link">Explore Legal Services →</span>
              </div>
            </div>
          </Link>

          <Link href="/consulting" className="service-card">
            <div className="card-content">
              <h2 className="card-title">Consulting Services</h2>
              <p className="card-description">
                Strategic consulting services for AI Governance and Privacy Compliance. We help
                organizations establish robust governance structures and maintain compliance through
                expert guidance and comprehensive frameworks.
              </p>
              <div className="card-footer">
                <span className="card-link">Explore Consulting Services →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <style jsx>{`
        :root{
          --ink:#0A1628;
          --body:#374151;
          --accent:#1E3A5F;
        }

        .page{ 
          background:#f3f4f6; 
          color:var(--body); 
          min-height:100vh; 
        }
        
        .container{ 
          width:min(1200px,92%); 
          margin:0 auto; 
        }

        .hero{ 
          padding:64px 0 48px;
          background:#FFFFFF;
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: left;
        }
        
        .h1{ 
          font-size:52px; 
          line-height:1.1; 
          color:#0A1628; 
          font-weight:700; 
          margin:0 0 16px;
          position: relative;
          padding-bottom: 16px;
        }

        .underline {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5px;
          background: linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD);
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
        
        .lead{ 
          font-size:20px; 
          line-height:1.65; 
          margin:0; 
          color:#374151; 
          opacity:.9; 
        }
        
        @media (max-width:720px){ 
          .h1{ font-size:36px; } 
          .lead{ font-size:18px; } 
          .hero{ padding:48px 0 36px; }
        }

        .section{ 
          padding:64px 0;
          background:#f3f4f6;
          position: relative;
          overflow: hidden;
        }

        .section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(139, 92, 246, 0.04) 60px,
              rgba(139, 92, 246, 0.04) 61px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 60px,
              rgba(139, 92, 246, 0.04) 60px,
              rgba(139, 92, 246, 0.04) 61px
            );
          pointer-events: none;
          z-index: 0;
        }

        .section::after {
          content: '';
          position: absolute;
          top: -100%;
          left: -100%;
          width: 300%;
          height: 300%;
          background: 
            radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.1) 0%, transparent 25%);
          animation: moveGradient 40s linear infinite;
          pointer-events: none;
          z-index: 0;
        }

        @keyframes moveGradient {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-10%, -10%) rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .section::after {
            animation: none;
          }
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }

        .service-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 12px rgba(10, 22, 40, 0.08);
          padding: 40px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          display: block;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(10, 22, 40, 0.12);
          border-color: #8B5CF6;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .card-title {
          font-size: 32px;
          line-height: 1.2;
          color: #0A1628;
          font-weight: 700;
          margin: 0;
        }

        .card-description {
          font-size: 16px;
          line-height: 1.7;
          color: #374151;
          margin: 0;
          flex: 1;
        }

        .card-footer {
          margin-top: 8px;
        }

        .card-link {
          font-size: 16px;
          font-weight: 600;
          color: #8B5CF6;
          display: inline-flex;
          align-items: center;
          transition: transform 0.2s ease;
        }

        .service-card:hover .card-link {
          transform: translateX(4px);
        }

        @media (max-width: 720px) {
          .service-card {
            padding: 32px 24px;
          }

          .card-title {
            font-size: 28px;
          }

          .card-description {
            font-size: 15px;
          }
        }
      `}</style>
    </main>
  );
}