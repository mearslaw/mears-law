"use client";

const CheckIcon = () => (
  <svg
    width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="#1E3A5F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className="icon" aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
    <style jsx>{`.icon{margin-top:4px;flex:0 0 auto;}`}</style>
  </svg>
);

function ServiceCard({ title, blurb, challenges, services, id }) {
  return (
    <article className="service" id={id}>
      <header className="svc-head">
        <h2 className="h2">{title}</h2>
        <p className="blurb">{blurb}</p>
      </header>

      <div className="bubble">
        <div className="bubble-col">
          <div className="bubble-title">Key Challenges We Solve</div>
          <ul className="list">
            {challenges.map((item, i) => (
              <li className="list-item" key={i}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bubble-divider"></div>

        <div className="bubble-col">
          <div className="bubble-title">Our Services</div>
          <ul className="list services-list">
            {services.map((service, i) => (
              <li className="list-item" key={i}>
                <span>{service.name || service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style jsx>{`
        .service{ 
          opacity:1; 
          scroll-margin-top: 140px;
        }
        
        .svc-head{ margin-bottom:20px; }
        .h2{ 
          font-size:32px; 
          line-height:1.2; 
          color:#0A1628; 
          font-weight:600; 
          margin:0 0 8px; 
        }
        .blurb{ 
          color:#374151; 
          margin:0; 
          line-height:1.7; 
          font-size:16px;
        }
        @media (max-width:720px){ 
          .h2{ font-size:26px; } 
        }

        .bubble{
          margin-top:20px;
          border-radius:12px;
          border:1px solid #E5E7EB;
          box-shadow:0 2px 8px rgba(10,22,40,.06);
          padding:32px;
          display:grid;
          grid-template-columns:1fr;
          gap:32px;
          background:#FFFFFF;
          position:relative;
        }
        
        @media (min-width:860px){ 
          .bubble{ 
            grid-template-columns:1fr auto 1fr;
            gap:40px;
          } 
        }

        .bubble-divider{
          display:none;
        }
        
        @media (min-width:860px){
          .bubble-divider{
            display:block;
            width:1px;
            background:linear-gradient(
              to bottom,
              transparent 0%,
              #E5E7EB 10%,
              #E5E7EB 90%,
              transparent 100%
            );
          }
        }

        .bubble-title{ 
          font-size:16px; 
          font-weight:700; 
          color:#0A1628; 
          margin-bottom:16px;
          text-transform:uppercase;
          letter-spacing:0.5px;
        }
        
        .list{ 
          list-style:none; 
          padding:0; 
          margin:0; 
          display:grid; 
          gap:12px; 
        }
        
        .list-item{ 
          display:flex; 
          align-items:flex-start; 
          gap:10px; 
          color:#374151;
          font-size:15px;
          line-height:1.6;
        }

        .services-list .list-item {
          font-weight:400;
        }
      `}</style>
    </article>
  );
}

export default function LegalPage() {
  const legalServices = [
    {
      id: "ai-regulation",
      title: "Artificial Intelligence",
      blurb:
        "Businesses are eager to leverage AI but often face uncertainty about where to start, how to comply with regulations, and how to adopt AI responsibly. At Mears Law, we provide practical, strategic, and legal solutions to help you implement AI confidently and ethically.",
      challenges: [
        "Compliance with AI Laws",
        "Lack of Internal Expertise",
        "Risk of Ethical Missteps",
        "Operational Integration",
      ],
      services: [
        { name: "Contract & Vendor Management" },
        { name: "Risk Mitigation & Dispute Resolution" },
        { name: "Training & Advisory" },
      ],
    },
    {
      id: "privacy-data-protection",
      title: "Privacy and Data Protection",
      blurb:
        "In today's data-driven world, protecting personal and business information is not just a legal requirement—it's a cornerstone of trust. At Mears Law, we help organizations navigate complex privacy laws and implement robust data protection strategies that safeguard your reputation and minimize risk.",
      challenges: [
        "Compliance with Privacy Laws: Businesses struggle to interpret privacy regulations like PIPEDA and GDPR",
        "Data Breach Risks: Concerns about security vulnerabilities and liability exposure",
        "Cross-Border Data Transfers: Complexities in handling international data flows",
        "Operational Integration: Difficulty embedding privacy practices into operations",
      ],
      services: [
        "Contract & Vendor Management",
        "Breach Response & Litigation",
        "Training & Advisory",
      ],
    },
    {
      id: "corporate-law",
      title: "Corporate",
      blurb:
        "Strong legal foundations are essential for business success. At Mears Law, we help entrepreneurs, corporations, and investors navigate corporate law with clarity and confidence—whether you're starting a business, managing growth, or raising capital.",
      challenges: [
        "Starting a Business: Confusion around incorporation and governance",
        "Managing Risk: Uncertainty about compliance and liability",
        "Complex Transactions: Difficulty structuring deals and agreements",
        "Raising Capital: Navigating securities laws and investor agreements",
        "Scaling Operations: Need for frameworks that support expansion",
      ],
      services: [
        "Business Formation & Structuring",
        "Corporate Governance & Compliance",
        "Mergers & Acquisitions",
        "Raising Capital",
        "Commercial Contracts",
        "Corporate Restructuring",
        "Ongoing Advisory",
      ],
    },
    {
      id: "real-estate-law",
      title: "Real Estate",
      blurb:
        "Real estate transactions are significant investments that require precision and legal expertise. At Mears Law, we guide clients through every stage of residential and commercial property deals—ensuring smooth transactions, compliance, and protection of your interests.",
      challenges: [
        "Complex Contracts: Buyers and sellers struggle with understanding legal terms",
        "Risk of Title Issues: Concerns about liens, encumbrances, or ownership disputes",
        "Financing & Closing Delays: Missed deadlines or incomplete documentation can derail deals",
        "Commercial Lease Negotiations: Businesses face challenges securing favorable terms",
      ],
      services: [
        "Residential Real Estate",
        "Commercial Real Estate",
        "Real Estate Financing",
        "Risk Management & Dispute Resolution",
        "Ongoing Advisory",
      ],
    },
    {
      id: "immigration-law",
      title: "Immigration",
      blurb:
        "Navigating Canada's immigration system can be complex and overwhelming. Whether you're an individual seeking permanent residency or a business hiring global talent, Mears Law provides strategic, efficient, and compliant solutions to help you achieve your immigration goals.",
      challenges: [
        "Confusing Application Processes: Clients struggle with forms, documentation, and eligibility",
        "Delays & Compliance Risks: Missed deadlines or incomplete applications lead to costly delays",
        "Employer Obligations: Challenges meeting compliance standards when hiring foreign workers",
        "Changing Regulations: Immigration laws evolve quickly, creating uncertainty",
      ],
      services: [
        "Permanent Residency & Citizenship",
        "Work Permits & Employer Compliance",
        "Study Permits & International Students",
        "Business Immigration",
        "Appeals & Dispute Resolution",
        "Ongoing Advisory",
      ],
    },
  ];

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="h1">
            Legal Services
            <span className="underline"></span>
          </h1>
          <p className="lead">
            We focus on the practice areas where we deliver the most value—so you get senior
            attention, practical advice, and outcomes that matter.
          </p>
        </div>
      </section>

      {/* LEGAL SERVICES */}
      <section className="section">
        <div className="container stack">
          {legalServices.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </section>

      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }

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
          padding:48px 0 64px;
          background:#f3f4f6;
          position: relative;
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
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 25%),
            radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.1) 0%, transparent 25%);
          animation: moveGradient 40s linear infinite;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
          clip-path: inset(0);
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

        .stack{ 
          display:grid; 
          gap:48px; 
          position: relative;
          z-index: 1;
        }
        
        @media (max-width:720px){ 
          .stack{ gap:36px; } 
        }
      `}</style>
    </main>
  );
}
