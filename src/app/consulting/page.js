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

function ServiceCard({ title, blurb, challenges, services, clients, id }) {
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

export default function ConsultingPage() {
  const consultingServices = [
    {
      id: "ai-governance",
      title: "Artificial Intelligence Governance",
      blurb:
        "Effective AI governance requires strategic oversight and comprehensive frameworks. At Mears Law, we provide consulting services to help organizations establish robust AI governance structures, ensuring ethical adoption, regulatory compliance, and sustainable AI implementation.",
      challenges: [
        "Establishing Governance Frameworks",
        "Ensuring Ethical AI Practices",
        "Regulatory Compliance",
        "Risk Management & Oversight",
      ],
      services: [
        "AI Governance Strategy Development",
        "Regulatory Compliance Consulting",
        "ISO/IEC 42001 Implementation",
        "Risk Assessment & Mitigation",
        "Ethical AI Framework Implementation",
        "Policy Development & Training",
      ],
    },
    {
      id: "privacy-compliance",
      title: "Privacy and Data Protection Compliance",
      blurb:
        "Maintaining privacy compliance in an evolving regulatory landscape requires expert guidance and proactive strategies. At Mears Law, we offer consulting services to help organizations build and maintain comprehensive privacy compliance programs that protect both data and reputation.",
      challenges: [
        "Navigating Complex Regulations",
        "Building Compliance Programs",
        "Maintaining Ongoing Compliance",
        "Managing Cross-Border Requirements",
      ],
      services: [
        "Data Mapping",
        "Privacy Impact Assessments",
        "Regulatory Gap Analysis",
        "ISO/IEC 27001 Implementation",
        "Compliance Program Development",
        "Training & Awareness Programs",
      ],
    },
  ];

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="h1">
            Consulting Services
            <span className="underline"></span>
          </h1>
          <p className="lead">
            We provide strategic consulting services to help organizations establish robust governance
            structures and maintain compliance—ensuring ethical practices and sustainable implementation.
          </p>
        </div>
      </section>

      {/* CONSULTING SERVICES */}
      <section className="section">
        <div className="container stack">
          {consultingServices.map((s, i) => (
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
