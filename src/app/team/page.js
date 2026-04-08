"use client";

import React, { useEffect, useRef, createElement as h, Fragment } from "react";
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
                        <div className="meta-card">
                            <div className="meta-label">JURISDICTIONS</div>
                            <div className="meta-value">Ontario · Jamaica · Trinidad &amp; Tobago</div>
                        </div>
                        <div className="meta-card">
                            <div className="meta-label">EXPERIENCE</div>
                            <div className="meta-value">10+ Years of Practice</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <section className="stats-section patterned-section">
                <div className="container stats-grid">
                    {[
                        { val: "10+", label: "Years of Practice" },
                        { val: "3", label: "Jurisdictions" },
                        { val: "UN", label: "Policy Contributor" },
                        { val: "EU", label: "AI Act Advisor" },
                        { val: "CAIP", label: "AI Governance Certified" },
                    ].map((s, i) => (
                        <div key={i} className="stat-item">
                            <div className="stat-val">{s.val}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Note: "About Carissa" highlights grid removed as it was repetitive in the site and didn't look very clean due to that */}

            {/* Practice Areas */}
            <section className="practice patterned-section">
                <div className="container">
                    <h2>Practice Areas</h2>
                    <p className="sub">
                        Carissa manages the delivery of legal services across the firm's practice areas — from cutting-edge AI and privacy law to corporate transactions, real estate, and estates.
                        Carissa also advises founders, professionals and individuals on complex matters throughout various stages of their lives. She works with clients across Canada and the Caribbean.
                    </p>
                    <div className="pill-grid">
                        {[
                            {
                                num: "01",
                                title: "AI Law & Governance",
                                body: "AI Act compliance, governance frameworks, algorithmic accountability, and regulatory strategy for organizations deploying AI systems.",
                            },
                            {
                                num: "02",
                                title: "Privacy & Cybersecurity",
                                body: "PIPEDA, GDPR, and global privacy compliance programs. Data breach response, privacy impact assessments, and operational governance structures.",
                            },
                            {
                                num: "03",
                                title: "Technology Transactions",
                                body: "SaaS agreements, software licensing, IP assignments, vendor contracts, and technology M&A for startups and established enterprises.",
                            },
                            {
                                num: "04",
                                title: "Corporate & Commercial",
                                body: "Mergers and Acquisitions, incorporations, shareholder agreements, commercial contracts, and ongoing corporate counsel for technology companies and growing businesses.",
                            },
                            {
                                num: "05",
                                title: "Real Estate",
                                body: "Residential and commercial transactions across Ontario and the Caribbean, with specialized expertise advising diaspora buyers purchasing property in Jamaica.",
                            },
                            {
                                num: "06",
                                title: "Wills & Estates",
                                body: "Estate planning, wills, powers of attorney, and cross-border estate matters — including multi-jurisdictional planning for clients with assets in Canada and the Caribbean.",
                            },
                        ].map((area) => (
                            <div key={area.num} className="pill practice-pill">
                                <div className="practice-num">{area.num}</div>
                                <h4>{area.title}</h4>
                                <p>{area.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="experience">
                <div className="container">
                    <h2>Experience</h2>
                    <p className="sub">
                        From clerking at the Caribbean Court of Justice to advising international
                        governments, Carissa&apos;s career spans the highest levels of legal practice,
                        policy development, and corporate advisory work.
                    </p>

                    <div className="exp-list">
                        {[
                            {
                                org: "Centre for AI & Digital Policy",
                                role: "Former Fellow — EU AI Policy Lead",
                                desc: "Led a research team focused on EU AI Act enforcement and accountability. Contributed to the AI and Democratic Values Index, with policy work cited by regulators and featured in global governance initiatives including submissions to the United Nations and European Union.",
                            },
                            {
                                org: "Deloitte",
                                role: "Legal Consultant",
                                desc: "Advised on major transactions and data breach matters within Deloitte's professional services practice, contributing legal expertise to complex multi-stakeholder engagements across technology and emerging regulatory frameworks.",
                            },
                            {
                                org: "CIBC",
                                role: "Privacy Consultant",
                                desc: "Designed and implemented privacy compliance programs aligned with Canadian and global data protection frameworks within one of Canada's largest financial institutions.",
                            },
                            {
                                org: "MedicAlert Canada",
                                role: "Legal Counsel",
                                desc: "Provided in-house legal counsel across regulatory, privacy, and commercial matters for a national health and safety organization.",
                            },
                            {
                                org: "Braham Legal, Jamaica",
                                role: "Associate — Chambers of a Former Attorney General",
                                desc: "Acted as instructing counsel in complex commercial disputes including shareholder, tax, and regulatory matters. Appeared as counsel on urgent applications including injunctions. Advised on Jamaica's largest urban renewal project.",
                            },
                            {
                                org: "Caribbean Court of Justice",
                                role: "Judicial Clerk",
                                desc: "Conducted legal research and prepared judicial memoranda on indigenous land rights for the Court's landmark first decision on native land title in Belize — a historic ruling in Caribbean jurisprudence.",
                            },
                            {
                                org: "Supreme Court of Jamaica",
                                role: "Judicial Clerk",
                                desc: "Clerked for judges of the Supreme Court, conducting legal research and analysis across civil and commercial matters.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="exp-row">
                                <div className="exp-left">
                                    <div className="exp-org">{item.org}</div>
                                    <div className="exp-role">{item.role}</div>
                                </div>
                                <div className="exp-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Thought Leadership */}
            <section className="thought patterned-section">
                <div className="container">
                    <h2>Thought Leadership</h2>
                    <p className="sub">
                        A global voice on AI governance and privacy law — recognized by the United Nations,
                        European Union, and leading industry conferences worldwide.
                    </p>
                    <div className="pill-grid thought-grid">
                        {[
                            {
                                label: "United Nations Development Program",
                                body: "Facilitated a governance session for the UNDP before an audience of global leaders, politicians, judges, and senior decision-makers on AI accountability and democratic values.",
                            },
                            {
                                label: "EU AI Act",
                                body: "Led a policy team at the Centre for AI and Digital Policy focused on EU AI Act enforcement, contributing directly to international regulatory development.",
                            },
                            {
                                label: "Industry Speaking",
                                body: "Recognized speaker at major industry conferences alongside experts from Google, EY, and leading global law firms on AI governance, privacy, and emerging technology law.",
                            },
                            {
                                label: "Policy Contributions",
                                body: "Work cited by policymakers and featured in the AI and Democratic Values Index, with formal submissions to the United Nations and European Union on AI regulation.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="pill thought-pill">
                                <h4>{item.label}</h4>
                                <p>{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== Credentials ===== */}
            <section className="credentials">
                <div className="container">
                    <h2>Credentials &amp; Recognition</h2>
                    <p className="sub">
                        Education, certifications, bar admissions, and professional affiliations that
                        underpin Carissa&apos;s practice.
                    </p>

                    <div className="cred-columns">
                        {/* Left column */}
                        <div className="cred-col">
                            <div className="cred-section-title">EDUCATION</div>
                            <div className="cred-rule" />
                            {[
                                {
                                    inst: "Osgoode Hall Law School, York University",
                                    degree: "LL.M, Privacy & Cybersecurity Law",
                                    note: "Significant research paper on global AI regulation",
                                },
                                {
                                    inst: "The University of the West Indies",
                                    degree: "LL.B. (Hons), Bachelor of Laws",
                                },
                                {
                                    inst: "Norman Manley Law School",
                                    degree: "Legal Education Certificate",
                                },
                                {
                                    inst: "Federation of Law Societies of Canada",
                                    degree: "National Committee on Accreditation",
                                },
                            ].map((e, i) => (
                                <div key={i} className="cred-item">
                                    <div className="cred-inst">{e.inst}</div>
                                    <div className="cred-degree">{e.degree}</div>
                                    {e.note && <div className="cred-note">{e.note}</div>}
                                    <div className="cred-divider" />
                                </div>
                            ))}

                            <div className="cred-section-title cred-gap">CERTIFICATIONS</div>
                            <div className="cred-rule" />
                            {[
                                { code: "AIGP", name: "AI Governance Professional", issuer: "IAPP" },
                                { code: "CIPP/C", name: "Certified Information Privacy Professional — Canada", issuer: "IAPP" },
                                { code: "CIPM", name: "Certified Information Privacy Manager", issuer: "IAPP" },
                                { code: "FIP", name: "Fellow of Information Privacy", issuer: "IAPP" },
                                { code: "ISO", name: "ISO 42001 Lead Implementor — AI Management Systems", issuer: "PECB" },
                            ].map((c, i) => (
                                <div key={i} className="cert-row">
                                    <div className="cert-code">{c.code}</div>
                                    <div className="cert-detail">
                                        <div className="cert-name">{c.name}</div>
                                        <div className="cert-issuer">{c.issuer}</div>
                                    </div>
                                    <div className="cred-divider cert-divider" />
                                </div>
                            ))}
                        </div>

                        {/* Right column */}
                        <div className="cred-col">
                            <div className="cred-section-title">BAR ADMISSIONS</div>
                            <div className="cred-rule" />
                            {[
                                { inst: "Law Society of Ontario", note: "Barrister & Solicitor — Ontario, Canada" },
                                { inst: "General Legal Council", note: "Attorney-at-Law — Jamaica" },
                                { inst: "Law Association of Trinidad & Tobago", note: "Attorney-at-Law — Trinidad & Tobago" },
                            ].map((b, i) => (
                                <div key={i} className="cred-item">
                                    <div className="cred-inst">{b.inst}</div>
                                    <div className="cred-degree">{b.note}</div>
                                    <div className="cred-divider" />
                                </div>
                            ))}

                            <div className="cred-section-title cred-gap">RECOGNITION &amp; AFFILIATIONS</div>
                            <div className="cred-rule" />
                            {[
                                { role: "Former Fellow", org: "Centre for AI and Digital Policy (CAIDP)" },
                                { role: "Member", org: "Law Association of Trinidad & Tobago (LATT)" },
                                { role: "Member", org: "Law Society of Ontario (LSO)" },
                                { role: "Member", org: "General Legal Council, Jamaica (GLC)" },
                                { role: "Member", org: "International Association of Privacy Professionals (IAPP)" },
                            ].map((a, i) => (
                                <div key={i} className="affil-row">
                                    <div className="affil-role">{a.role}</div>
                                    <div className="affil-org">{a.org}</div>
                                    <div className="cred-divider affil-divider" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                :global(html) {
                    scroll-behavior: smooth;
                }

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

                // patterned sections
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
                    grid-template-columns: repeat(5, 1fr);
                    gap: 0;
                    position: relative;
                    z-index: 1;
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

                /* ===== Shared section styles ===== */
                .practice {
                    padding: 64px 0;
                    background: #fafbfc;
                    border-bottom: 1px solid #e5e7eb;
                }

                .experience {
                    padding: 64px 0;
                    background: #ffffff;
                    border-bottom: 1px solid #e5e7eb;
                }

                .thought {
                    padding: 64px 0;
                    background: #fafbfc;
                    border-bottom: 1px solid #e5e7eb;
                }

                .credentials {
                    padding: 64px 0 72px;
                    background: #ffffff;
                }

                h2 {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-size: clamp(22px, 3.2vw, 32px);
                    line-height: 1.2;
                    color: #0a1628;
                    font-weight: 700;
                    margin: 0 0 12px;
                }

                h4 {
                    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-size: 16px;
                    font-weight: 700;
                    margin: 0 0 6px;
                    color: #0a1628;
                }

                .sub {
                    font: 400 16px/1.85 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #374151;
                    margin: 0 0 32px;
                }

                // pill grid
                .pill-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 18px;
                    position: relative;
                    z-index: 1;
                }

                .thought-grid {
                    grid-template-columns: repeat(2, 1fr);
                }

                .pill {
                    background: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 14px;
                    padding: 20px 18px;
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
                    transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
                }

                .pill:hover {
                    transform: translateY(-3px);
                    border-color: #8B5CF6;
                    box-shadow: 0 14px 28px rgba(139, 92, 246, 0.12);
                }

                .practice-pill .practice-num {
                    font: 700 11px/1 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.1em;
                    color: #9ca3af;
                    margin-bottom: 10px;
                }

                .pill p {
                    margin: 4px 0 0;
                    font: 400 14px/1.75 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #4b5563;
                }

                /* ===== Experience ===== */
                .exp-list {
                    display: flex;
                    flex-direction: column;
                }

                .exp-row {
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 24px;
                    padding: 24px 0;
                    border-bottom: 1px solid #e5e7eb;
                    align-items: start;
                }

                .exp-row:first-child {
                    border-top: 1px solid #e5e7eb;
                }

                .exp-org {
                    font: 700 13px/1.4 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                    margin-bottom: 3px;
                }

                .exp-role {
                    font: 400 12px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #6b7280;
                }

                .exp-desc {
                    font: 400 14.5px/1.8 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #374151;
                }
                
                // credentials
                .cred-columns {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                }

                .cred-section-title {
                    font: 600 10.5px/1 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.14em;
                    color: #9ca3af;
                    margin-bottom: 12px;
                }

                .cred-gap {
                    margin-top: 40px;
                }

                .cred-rule {
                    height: 1px;
                    background: #e5e7eb;
                }

                .cred-item {
                    padding-top: 18px;
                }

                .cred-inst {
                    font: 600 15px/1.4 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                    margin-bottom: 3px;
                }

                .cred-degree {
                    font: 400 13px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #4b5563;
                }

                .cred-note {
                    font: 400 12px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    font-style: italic;
                    color: #6b7280;
                    margin-top: 2px;
                }

                .cred-divider {
                    height: 1px;
                    background: #f3f4f6;
                    margin-top: 18px;
                }

                .cert-row {
                    display: grid;
                    grid-template-columns: 56px 1fr;
                    gap: 12px;
                    padding-top: 16px;
                    align-items: start;
                }

                .cert-divider {
                    grid-column: 1 / -1;
                    margin-top: 4px;
                }

                .cert-code {
                    font: 700 13px/1.3 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                    padding-top: 2px;
                }

                .cert-name {
                    font: 500 13px/1.4 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                }

                .cert-issuer {
                    font: 400 11.5px/1.4 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #6b7280;
                    margin-top: 2px;
                }

                .affil-row {
                    display: grid;
                    grid-template-columns: 110px 1fr;
                    gap: 12px;
                    padding-top: 16px;
                    align-items: start;
                }

                .affil-divider {
                    grid-column: 1 / -1;
                    margin-top: 4px;
                }

                .affil-role {
                    font: 600 11px/1.3 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    letter-spacing: 0.08em;
                    color: #9ca3af;
                    padding-top: 3px;
                    text-transform: uppercase;
                }

                .affil-org {
                    font: 500 14px/1.5 Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
                    color: #0a1628;
                }

                // Responsive
                @media (max-width: 900px) {
                    .stats-grid { grid-template-columns: repeat(3, 1fr); }
                    .pill-grid { grid-template-columns: repeat(2, 1fr); }
                    .thought-grid { grid-template-columns: 1fr; }
                    .exp-row { grid-template-columns: 1fr; gap: 6px; }
                    .cred-columns { grid-template-columns: 1fr; gap: 48px; }
                }

                @media (max-width: 600px) {
                    .stats-grid { grid-template-columns: repeat(2, 1fr); }
                    .pill-grid { grid-template-columns: 1fr; }
                    .hero-meta { flex-direction: column; }
                }
            `}</style>
        </>
    );
}