"use client";

import Link from "next/link";

const CheckIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#1E3A5F"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12l2.5 2.5L16 9" />
    <style jsx>{`
      .icon {
        margin-top: 4px;
        flex: 0 0 auto;
      }
    `}</style>
  </svg>
);

const getText = (value) => (typeof value === "string" ? value : value.name);

export default function ServiceOfferingPage({
  audienceTitle,
  audienceHref,
  service,
}) {
  const hasChallenges = service.challenges?.length > 0;
  const hasServices = service.services?.length > 0;
  const hasDetailLists = hasChallenges || hasServices;

  return (
    <main className="page">
      <section className="hero">
        <div className="container hero-content">
          <p className="crumbs">
            <Link href="/services">Services</Link>
            <span>/</span>
            <Link href={audienceHref}>{audienceTitle}</Link>
          </p>

          <h1 className="h1">
            {service.title}
            <span className="underline"></span>
          </h1>

          <p className="lead">{service.blurb}</p>
          {service.blurb2 ? <p className="lead lead-secondary">{service.blurb2}</p> : null}
          {service.note ? <p className="lead lead-secondary">{service.note}</p> : null}
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          {hasDetailLists ? (
            <div className="bubble">
              {hasChallenges ? (
                <div className="bubble-col">
                  <div className="bubble-title">Key Challenges We Solve</div>
                  <ul className="list">
                    {service.challenges.map((challenge, index) => (
                      <li className="list-item" key={index}>
                        <CheckIcon />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {hasChallenges && hasServices ? <div className="bubble-divider"></div> : null}

              {hasServices ? (
                <div className="bubble-col">
                  <div className="bubble-title">Our Services</div>
                  <ul className="list services-list">
                    {service.services.map((item, index) => (
                      <li className="list-item" key={index}>
                        <span>{getText(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}

          {service.videoSrc ? (
            <div className="video-wrap">
              <video
                className="video-player"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                tabIndex={-1}
                aria-hidden="true"
                disablePictureInPicture
                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
              >
                <source src={service.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : null}

          <Link href={audienceHref} className="back-link">
            Back to {audienceTitle}
          </Link>
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

        .crumbs {
          margin: 0 0 16px;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          font-size: 14px;
          color: #6b7280;
        }

        .crumbs :global(a) {
          color: #1e3a5f;
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }

        .crumbs :global(a:hover) {
          border-color: #1e3a5f;
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

        .lead-secondary {
          margin-top: 12px;
        }

        .section {
          padding: 48px 0 64px;
          background: #f3f4f6;
        }

        .stack {
          display: grid;
          gap: 24px;
        }

        .bubble {
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(10, 22, 40, 0.06);
          padding: 32px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          background: #ffffff;
        }

        @media (min-width: 860px) {
          .bubble {
            grid-template-columns: 1fr auto 1fr;
            gap: 40px;
          }
        }

        .bubble-divider {
          display: none;
        }

        @media (min-width: 860px) {
          .bubble-divider {
            display: block;
            width: 1px;
            background: linear-gradient(
              to bottom,
              transparent 0%,
              #e5e7eb 10%,
              #e5e7eb 90%,
              transparent 100%
            );
          }
        }

        .bubble-title {
          font-size: 16px;
          font-weight: 700;
          color: #0a1628;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #374151;
          font-size: 15px;
          line-height: 1.6;
        }

        .services-list .list-item {
          font-weight: 400;
        }

        .video-wrap {
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(10, 22, 40, 0.06);
          overflow: hidden;
          max-width: 1600px;
          margin: 0 auto;
        }

        .video-player {
          display: block;
          width: 100%;
          height: auto;
          max-height: 900px;
          aspect-ratio: 16 / 9;
          object-fit: cover;
          background: #0f172a;
          pointer-events: none;
        }

        .back-link {
          width: fit-content;
          color: #1e3a5f;
          text-decoration: none;
          font-weight: 600;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }

        .back-link:hover {
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
        }
      `}</style>
    </main>
  );
}
