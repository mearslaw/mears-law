"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function TeamPage() {
    const h1Ref = useRef(null);

    useEffect(() => {
        const el = h1Ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("is-visible");
                    obs.disconnect();
                }
            },
            { threshold: 0.7 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <>
            {/* Hero */}
            <section className="team-hero">
                <div className="container hero-content">
                    <div className="eyebrow">OUR TEAM</div>
                    <h1 ref={h1Ref} className="hero-h1">
                        Meet our Team
                        <span className="underline" aria-hidden="true" />
                    </h1>
                    <p className="lede">
                        Carissa advises governments, organizations, and founders on the legal issues that define modern risk — artificial intelligence, privacy, cybersecurity, and corporate transactions. She also counsels professionals and families on legal matters with clients across Canada and the Caribbean.
                    </p>

                    <div className="hero-meta">
                        <div className="meta-card">
                            <div className="meta-label">TITLE</div>
                            <div className="meta-value">Founder &amp; Principal Lawyer</div>
                        </div>
                        <div className="meta-card jurisdictions-card">
                            <div className="meta-label">JURISDICTIONS</div>
                            <div className="meta-value">Canada · Jamaica · Trinidad and Tobago</div>
                            <p className="jurisdiction-note">
                                Through Canada&apos;s interprovincial mobility framework, we are able to advise and support clients on matters involving multiple provinces, including technology, privacy, and commercial matters. Limitations may apply.
                            </p>
                        </div>
                        <div className="meta-card">
                            <div className="meta-label">EXPERIENCE</div>
                            <div className="meta-value">10+ Years of Practice</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team */}
            <section className="meet-team" aria-labelledby="meet-team-heading">
                <div className="container">
                    <h2 id="meet-team-heading">Meet Our Team</h2>
                    <article className="team-card">
                        <div className="team-photo" aria-hidden="true" />
                        <div className="team-card-body">
                            <h3 className="team-name">Carissa Mears, LL.B., LL.M.</h3>
                            <a
                                className="team-email"
                                href="mailto:carissa.mears@mearslaw.ca"
                            >
                                carissa.mears@mearslaw.ca
                            </a>
                            <Link className="team-profile-btn" href="/team/carissa-mears">
                                View Profile
                            </Link>
                        </div>
                    </article>
                </div>
            </section>

            {/* Stats bar */}
            <section className="stats-section patterned-section">
                <div className="container stats-grid">
                    {[
                        { val: "10+", label: "Years of Practice" },
                        { val: "3", label: "Jurisdictions" },
                    ].map((s, i) => (
                        <div key={i} className="stat-item">
                            <div className="stat-val">{s.val}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .container {
                    width: min(1200px, 92%);
                    margin: 0 auto;
                }

                /* ===== Hero ===== */
                .team-hero {
                    padding: 64px 0 40px;
                    background: #ffffff;
                    position: relative;
                    overflow: hidden;
                }

                .hero-content {
                    position: relative;
                    z-index: 1;
                }

                .eyebrow {
                    font: 600 12px/1.2 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    color: #6b7280;
                    margin-bottom: 8px;
                }

                .hero-h1 {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-size: clamp(32px, 5vw, 52px);
                    line-height: 1.1;
                    color: #0a1628;
                    font-weight: 700;
                    margin: 0 0 16px;
                    position: relative;
                    padding-bottom: 16px;
                }

                .hero-h1 .underline {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 5px;
                    background: linear-gradient(90deg, #8B5CF6, #A78BFA, #C4B5FD);
                    border-radius: 3px;
                    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
                    width: 0;
                    opacity: 0;
                }

                .hero-h1.is-visible .underline {
                    animation: expandUnderline 2s ease-out forwards;
                }

                @keyframes expandUnderline {
                    0% { width: 0; opacity: 0; }
                    50% { opacity: 1; }
                    100% { width: 120px; opacity: 1; }
                }

                .lede {
                    font: 400 16px/1.85 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #374151;
                    margin: 0 0 32px;
                    max-width: 760px;
                }

                .hero-meta {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .meta-card {
                    background: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 14px 20px;
                    min-width: 180px;
                }

                .meta-label {
                    font: 600 10px/1.2 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.14em;
                    color: #9ca3af;
                    margin-bottom: 4px;
                }

                .meta-value {
                    font: 600 14px/1.4 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                }

                .jurisdictions-card {
                    flex: 1 1 320px;
                    max-width: 520px;
                }

                .jurisdiction-note {
                    font: 400 13px/1.65 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #4b5563;
                    margin: 8px 0 0;
                }

                /* ===== Meet Our Team ===== */
                .meet-team {
                    padding: 48px 0;
                    background: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                }

                .meet-team h2 {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-size: clamp(22px, 3.2vw, 32px);
                    line-height: 1.2;
                    color: #0a1628;
                    font-weight: 700;
                    margin: 0 0 24px;
                }

                .team-card {
                    display: flex;
                    gap: 28px;
                    align-items: stretch;
                    max-width: 640px;
                    background: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: 14px;
                    padding: 24px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
                }

                .team-photo {
                    flex: 0 0 160px;
                    width: 160px;
                    min-height: 200px;
                    border-radius: 12px;
                    border: 1px solid #e5e7eb;
                    background: linear-gradient(145deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%);
                }

                .team-card-body {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 10px;
                    min-width: 0;
                }

                .team-name {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1.3;
                    color: #0a1628;
                    margin: 0;
                }

                .team-email {
                    font: 400 15px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #1e3a5f;
                    text-decoration: none;
                    border-bottom: 1px solid transparent;
                    width: fit-content;
                    transition: border-color 0.2s ease;
                }

                .team-email:hover {
                    border-color: #1e3a5f;
                }

                .team-profile-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: fit-content;
                    margin-top: 8px;
                    padding: 10px 20px;
                    font: 600 14px/1 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #ffffff;
                    background: #1e3a5f;
                    border: 1px solid #1e3a5f;
                    border-radius: 8px;
                    text-decoration: none;
                    transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
                }

                .team-profile-btn:hover {
                    background: #0a1628;
                    border-color: #0a1628;
                    box-shadow: 0 4px 12px rgba(30, 58, 95, 0.2);
                    transform: translateY(-1px);
                }

                /* Patterned sections */
                .patterned-section {
                    position: relative;
                    overflow: hidden;
                }

                .patterned-section::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image:
                            repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px),
                            repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(139, 92, 246, 0.04) 60px, rgba(139, 92, 246, 0.04) 61px);
                    pointer-events: none;
                    z-index: 0;
                }

                .patterned-section::after {
                    content: '';
                    position: absolute;
                    top: -100%; left: -100%;
                    width: 300%; height: 300%;
                    background:
                            radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 25%),
                            radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.12) 0%, transparent 25%),
                            radial-gradient(circle at 50% 80%, rgba(196, 181, 253, 0.1) 0%, transparent 25%);
                    animation: moveGradient 40s linear infinite;
                    pointer-events: none;
                    z-index: 0;
                }

                @keyframes moveGradient {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(-10%, -10%) rotate(180deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }

                /* ===== Stats ===== */
                .stats-section {
                    padding: 48px 0;
                    background: #fafbfc;
                    border-top: 1px solid #e5e7eb;
                    border-bottom: 1px solid #e5e7eb;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 0;
                    position: relative;
                    z-index: 1;
                    max-width: 480px;
                    margin: 0 auto;
                }

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 6px;
                    padding: 16px 8px;
                    border-right: 1px solid #e5e7eb;
                }

                .stat-item:last-child {
                    border-right: none;
                }

                .stat-val {
                    font: 700 28px/1 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                }

                .stat-label {
                    font: 600 11px/1.3 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.06em;
                    color: #6b7280;
                    text-align: center;
                }

                /* Responsive */
                @media (max-width: 900px) {
                    .stats-grid { max-width: 100%; }
                }

                @media (max-width: 600px) {
                    .hero-meta { flex-direction: column; }
                    .team-card {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }
                    .team-photo {
                        width: 100%;
                        max-width: 200px;
                        flex: none;
                    }
                    .team-card-body {
                        align-items: center;
                    }
                    .team-email,
                    .team-profile-btn {
                        margin-left: auto;
                        margin-right: auto;
                    }
                }
            `}</style>
        </>
    );
}
