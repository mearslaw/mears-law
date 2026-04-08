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
              Carissa advises founders, professionals, and individuals on complex matters throughout various stages of their lives.
              We focus on the practice areas where we deliver the most value—so you get senior attention and practical advice.
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
                  Comprehensive legal services including AI Regulation, Corporate Law (Mergers & Acquisitions), Immigration Law,
                  Family Law, and Real Estate. Expert legal counsel to help you navigate complex challenges with confidence.
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
                  Strategic consulting for AI Governance and Privacy Compliance. We help organizations
                  establish robust governance structures and maintain compliance through expert guidance
                  and comprehensive frameworks.
                </p>
                <div className="card-footer">
                  <span className="card-link">Explore Consulting Services →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* NEW: PERSONAL & FAMILY LAW SECTION */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="individual-services-box">
              <h2 className="card-title" style={{ marginBottom: '24px' }}>Individual & Family Services</h2>
              <div className="personal-grid">
                <div className="personal-item">
                  <h3>Immigration Law</h3>
                  <p>Strategic counsel for work permits, study permits, and permanent residency applications. We ensure a seamless transition for professionals and their families as they navigate Canadian and international borders.</p>
                </div>
                <div className="personal-item">
                  <h3>Family Law</h3>
                  <p>Compassionate legal support for pivotal life transitions. We specialize in domestic contracts, including marriage and cohabitation agreements, ensuring your interests and future are secured with discretion.</p>
                </div>
              </div>
            </div>
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
          0% { width: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { width: 120px; opacity: 1; }
        }
        
        .lead{ 
          font-size:20px; 
          line-height:1.65; 
          margin:0; 
          color:#374151; 
          opacity:.9; 
          max-width: 800px;
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
          inset: 0;
          background-image: 
            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px),
            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px);
          pointer-events: none;
          z-index: 0;
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

        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(10, 22, 40, 0.12);
          border-color: #8B5CF6;
        }

        .card-title {
          font-size: 32px;
          line-height: 1.2;
          color: #0A1628;
          font-weight: 700;
          margin: 0;
        }

        .individual-services-box {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E5E7EB;
          padding: 48px;
          position: relative;
          z-index: 1;
        }

        .personal-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        @media (min-width: 768px) {
          .personal-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .personal-item h3 {
          font-size: 20px;
          color: #0A1628;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .personal-item p {
          font-size: 15px;
          line-height: 1.6;
          color: #4b5563;
        }

        .card-link {
          font-size: 16px;
          font-weight: 600;
          color: #8B5CF6;
          display: inline-flex;
          align-items: center;
        }
      `}</style>
      </main>
  );
}