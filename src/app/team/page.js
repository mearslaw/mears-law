"use client";

import Link from "next/link";

export default function TeamPage() {
    return (
        <>
            {/* Hero - split layout (right and left) */}
            <section className="hero">

                {/* left side of the hero section*/}
                <div className="hero-left">
                    <div className="hero-firm">MEARS LAW</div>

                    <div className="hero-name">
                        <span className="hero-name-first">Carissa</span>
                        <span className="hero-name-last">Mears</span>
                    </div>

                    <div className="hero-title">FOUNDER &amp; PRINCIPAL LAWYER</div>
                        <ul className="hero-highlights">
                            <li>LL.M. Privacy &amp; Cybersecurity Law</li>
                            <li>Certified AI Governance Professional</li>
                            <li>Certified Information Privacy Manager (CIPM)</li>
                            <li>Fellow, Centre for AI &amp; Digital Policy</li>
                        </ul>
                    {/* the large M in the background design*/}
                    <div className="hero-monogram" aria-hidden="true">M</div>
                </div>

                {/* right side of the hero section */}
                <div className="hero-right">
                    <div className="hero-eyebrow">ABOUT CARISSA</div>
                    <h1 className="hero-headline">
                        A lawyer at the frontier of <strong>AI governance, privacy law</strong>, and{" "}
                        <strong>technology regulation</strong> — with the transactional depth to turn
                        policy into practice.
                    </h1>
                    <p className="hero-body">
                        With over a decade of experience advising businesses, governments, and
                        international organizations, Carissa brings rare fluency across AI law, data
                        privacy, corporate transactions, real estate, and estates. Her work spans
                        boardrooms, policy chambers, and global platforms — always grounded in clear,
                        practical counsel that clients can act on.
                    </p>

                    <div className="jurisdiction-tags">
                        <span className="tag">ONTARIO</span>
                        <span className="tag">JAMAICA</span>
                        <span className="tag">TRINIDAD &amp; TOBAGO</span>
                    </div>

                </div>
            </section>

            {/* stats bar */}
            <div className="stats-bar">
                <div className="stat">
                    <span className="stat-val">10+</span>
                    <span className="stat-label">YEARS OF PRACTICE</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                    <span className="stat-val">3</span>
                    <span className="stat-label">JURISDICTIONS</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                    <span className="stat-val">UN</span>
                    <span className="stat-label">POLICY CONTRIBUTOR</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                    <span className="stat-val">EU</span>
                    <span className="stat-label">AI ACT ADVISOR</span>
                </div>
                <div className="stat-divider" />
                <div className="stat">
                    <span className="stat-val">CAIP</span>
                    <span className="stat-label">AI GOVERNANCE CERTIFIED</span>
                </div>
            </div>

            {/* Practice areas */}
            <section className="practice">
                <div className="container">
                    <div className="section-label-row">
                        <span className="section-eyebrow">PRACTICE AREAS</span>
                        <span className="eyebrow-rule" />
                    </div>
                    <h2 className="section-heading">
                        Where Carissa
                        <br />
                        <em className="italic-green">practises</em>
                    </h2>
                    <div className="practice-grid">
                        {[
                            {
                                num: "01",
                                title: "AI Law & Governance",
                                body: "AI Act compliance, governance frameworks, algorithmic accountability, and regulatory strategy for organizations deploying AI systems.",
                                // featured: true,
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
                                body: "Incorporations, shareholder agreements, commercial contracts, and ongoing corporate counsel for technology companies and growing businesses.",
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
                            <div
                                key={area.num}
                                className={`practice-cell${area.featured ? " featured" : ""}`}
                            >
                                <span className="practice-accent" />
                                <span className="practice-num">{area.num}</span>
                                <h3 className="practice-title">{area.title}</h3>
                                <p className="practice-body">{area.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="experience">
                <div className="container exp-grid">
                    <div className="exp-left">
                        <div className="section-label-row">
                            <span className="section-eyebrow">EXPERIENCE</span>
                            <span className="eyebrow-rule" />
                        </div>
                        <h2 className="section-heading">
                            A career built at the{" "}
                            <em className="italic-green">intersection</em> of law, policy, and the
                            technologies reshaping both.
                        </h2>
                        <p className="exp-sub">
                            From clerking at the Caribbean Court of Justice to advising international
                            governments, Carissa&apos;s career spans the highest levels of legal practice,
                            policy development, and corporate advisory work.
                        </p>
                    </div>
                    <div className="exp-right">
                        {[
                            {
                                org: "CENTRE FOR AI & DIGITAL POLICY",
                                role: "Fellow — EU AI Policy Lead",
                                desc: "Leads a research team focused on EU AI Act enforcement and accountability. Contributes to the AI and Democratic Values Index, with policy work cited by regulators and featured in global governance initiatives including submissions to the United Nations and European Union.",
                            },
                            {
                                org: "DELOITTE",
                                role: "Legal Consultant",
                                desc: "Advised on major transactions and data breach matters within Deloitte's professional services practice, contributing legal expertise to complex multi-stakeholder engagements across technology and emerging regulatory frameworks.",
                            },
                            {
                                org: "CIBC",
                                role: "Privacy Consultant",
                                desc: "Designed and implemented privacy compliance programs aligned with Canadian and global data protection frameworks within one of Canada's largest financial institutions.",
                            },
                            {
                                org: "MEDICALERT CANADA",
                                role: "Legal Counsel",
                                desc: "Provided in-house legal counsel across regulatory, privacy, and commercial matters for a national health and safety organization.",
                            },
                            {
                                org: "BRAHAM LEGAL, JAMAICA",
                                role: "Associate — Chambers of a Former Attorney General",
                                desc: "Acted as instructing counsel in complex commercial disputes including shareholder, tax, and regulatory matters. Appeared as counsel on urgent applications including injunctions. Advised on Jamaica's largest urban renewal project — a major infrastructure development that proceeded to commencement as a result of counsel's work.",
                            },
                            {
                                org: "CARIBBEAN COURT OF JUSTICE",
                                role: "Judicial Clerk",
                                desc: "Conducted legal research and prepared judicial memoranda on indigenous land rights for the Court's landmark first decision on native land title in Belize — a historic ruling in Caribbean jurisprudence.",
                            },
                            {
                                org: "SUPREME COURT OF JAMAICA",
                                role: "Judicial Clerk",
                                desc: "Clerked for judges of the Supreme Court, conducting legal research and analysis across civil and commercial matters.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="exp-row">
                                <div className="exp-org">{item.org}</div>
                                <div className="exp-detail">
                                    <div className="exp-role">{item.role}</div>
                                    <p className="exp-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="thought">
                <div className="container">
                    <div className="section-label-row">
                        <span className="section-eyebrow">THOUGHT LEADERSHIP</span>
                        <span className="eyebrow-rule" />
                    </div>
                    <h2 className="section-heading">
                        Global voice.
                        <br />
                        <em className="italic-green">Local counsel.</em>
                    </h2>
                    <div className="thought-grid">
                        {[
                            {
                                label: "UNITED NATIONS",
                                body: "Facilitated a governance session for the UNDP before an audience of global leaders, politicians, judges, and senior decision-makers on AI accountability and democratic values.",
                            },
                            {
                                label: "EU AI ACT",
                                body: "Leads a policy team at the Centre for AI and Digital Policy focused on EU AI Act enforcement, contributing directly to international regulatory development.",
                            },
                            {
                                label: "INDUSTRY SPEAKING",
                                body: "Recognized speaker at major industry conferences alongside experts from Google, EY, and leading global law firms on AI governance, privacy, and emerging technology law.",
                            },
                            {
                                label: "POLICY CONTRIBUTIONS",
                                body: "Work cited by policymakers and featured in the AI and Democratic Values Index, with formal submissions to the United Nations and European Union on AI regulation.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="thought-card">
                                <div className="thought-accent" />
                                <div className="thought-label">{item.label}</div>
                                <p className="thought-body">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials and recognition */}
            <section className="credentials">
                <div className="container">
                    <div className="section-label-row">
                        <span className="section-eyebrow">CREDENTIALS &amp; RECOGNITION</span>
                        <span className="eyebrow-rule" />
                    </div>
                    <h2 className="section-heading">
                        Education, Certifications
                        <br />
                        <em className="italic-green">&amp; Affiliations</em>
                    </h2>
                    <div className="cred-grid">
                        {/* LEFT COL */}
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

                            <div className="cred-section-title cred-section-gap">CERTIFICATIONS</div>
                            <div className="cred-rule" />
                            {[
                                { code: "AIGP", name: "AI Governance Professional", issuer: "International Association of Privacy Professionals (IAPP)" },
                                { code: "CIPP/C", name: "Certified Information Privacy Professional — Canada", issuer: "International Association of Privacy Professionals (IAPP)" },
                                { code: "CIPM", name: "Certified Information Privacy Manager", issuer: "International Association of Privacy Professionals (IAPP)" },
                                { code: "FIP", name: "Fellow of Information Privacy", issuer: "International Association of Privacy Professionals (IAPP)" },
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

                        {/* right col */}
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

                            <div className="cred-section-title cred-section-gap">RECOGNITION &amp; AFFILIATIONS</div>
                            <div className="cred-rule" />
                            {[
                                { role: "FELLOW", org: "Centre for AI and Digital Policy (CAIDP)" },
                                { role: "MEMBER", org: "Law Association of Trinidad & Tobago (LATT)" },
                                { role: "MEMBER", org: "Law Society of Ontario (LSO)" },
                                { role: "MEMBER", org: "General Legal Council, Jamaica (GLC)" },
                                { role: "MEMBER", org: "International Association of Privacy Professionals (IAPP)" },
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

            {/* cta */}
            {/*<section className="cta-band">*/}
            {/*    <div className="cta-eyebrow">WORK WITH CARISSA</div>*/}
            {/*    <h2 className="cta-heading">*/}
            {/*        Ready to work with*/}
            {/*        <br />*/}
            {/*        <em className="cta-italic">counsel who leads</em>?*/}
            {/*    </h2>*/}
            {/*    <p className="cta-sub">*/}
            {/*        Mears Law offers flat-fee, technology-forward legal services —<br />*/}
            {/*        transparent pricing, expert counsel, no surprises.*/}
            {/*    </p>*/}
            {/*    <Link href="/book" className="cta-btn">*/}
            {/*        SCHEDULE A CONSULTATION →*/}
            {/*    </Link>*/}
            {/*</section>*/}

            <style jsx>{`
        /* tokens */
        .hero, .stats-bar, .practice, .experience, .thought, .credentials, .cta-band {
            --navy: #1a2f4a;
            --navy-dark: #152438;
            --navy-light: #243e5c;
            --teal: #4a8c7a;
            --teal-light: #6aab98;
            --cream: #f0efea;
            --off-white: #f7f6f2;
            --text-dark: #1c2b3a;
            --text-mid: #4a5568;
            --text-muted: #8a9ab0;
            --border: #d8d6cf;
            --font-serif: "Georgia", "Times New Roman", serif;
        }

        // global/shared css
        .container {
          width: min(1200px, 92%);
          margin: 0 auto;
        }
        .section-label-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .section-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .eyebrow-rule {
          flex: 1;
          height: 1px;
          background: var(--border);
          max-width: 80px;
        }
        .section-heading {
          font-family: var(--font-serif);
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 400;
          line-height: 1.15;
          color: var(--text-dark);
          margin: 0 0 32px;
        }
        .italic-green {
          font-style: italic;
          color: var(--teal);
        }

        // the hero section
        .hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 770px;
        }
        .hero-left {
          background: var(--navy-light);
          padding: 64px 56px;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .hero-monogram {
          position: absolute;
          top: -0px;
          right: -50px;
          font-family: var(--font-serif);
          font-size: 480px;
          font-weight: 100;
          color: rgba(255,255,255,0.05);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .hero-firm {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: var(--teal-light);
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }
        .hero-name {
          display: flex;
          flex-direction: column;
          line-height: 1.0;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .hero-name-first {
          font-family: var(--font-serif);
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 400;
          color: #ffffff;
        }
        .hero-name-last {
          font-family: var(--font-serif);
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 400;
          font-style: italic;
          color: var(--teal-light);
        }
        .hero-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }
        .hero-highlights {
          list-style: none;
          padding: 0;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .hero-highlights li {
          font-size: 13.5px;
          color: rgba(255,255,255,0.65);
          padding: 6px 0 6px 24px;
          position: relative;
          line-height: 1.5;
        }
        .hero-highlights li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 15px;
          width: 14px;
          height: 1px;
          background: var(--teal-light);
        }

        .hero-right {
          background: var(--off-white);
          padding: 64px 56px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .hero-headline {
          font-family: var(--font-serif);
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 400;
          line-height: 1.3;
          color: var(--text-dark);
          margin: 0 0 24px;
        }
        .hero-headline strong { font-weight: 700; }
        .hero-body {
          font-size: 15px;
          line-height: 1.8;
          color: var(--text-mid);
          margin: 0 0 32px;
        }
        .jurisdiction-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          border: 1px solid var(--text-dark);
          padding: 7px 14px;
          color: var(--text-dark);
        }

        /* stats bar css */
        .stats-bar {
          background: var(--navy);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 45px 40px;
        }
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          padding: 0 40px;
        }
        .stat-val {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 400;
          color: var(--teal-light);
          line-height: 1;
        }
        .stat-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.45);
        }
        .stat-divider {
          width: 1px;
          height: 45px;
          background: rgba(255,255,255,0.15);
          flex-shrink: 0;
        }

        /* Practice areas */
        .practice {
          background: var(--off-white);
          padding: 80px 0;
        }
        .practice-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-left: 1px solid var(--border);
          border-top: 1px solid var(--border);
        }
        .practice-cell {
          position: relative;
          padding: 36px 32px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }
        .practice-cell.featured { background: var(--navy); }
        .practice-accent {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--teal);
          margin-bottom: 20px;
        }
        .practice-cell.featured .practice-accent { background: var(--teal-light); }
        .practice-num {
          position: absolute;
          right: 16px;
          top: 20px;
          font-family: var(--font-serif);
          font-size: 52px;
          font-weight: 400;
          color: rgba(0,0,0,0.06);
          line-height: 1;
        }
        .practice-cell.featured .practice-num { color: rgba(255,255,255,0.08); }
        .practice-title {
          font-family: var(--font-serif);
          font-size: 19px;
          font-weight: 400;
          color: var(--text-dark);
          margin: 0 0 12px;
          position: relative;
        }
        .practice-cell.featured .practice-title { color: #ffffff; }
        .practice-body {
          font-size: 13.5px;
          line-height: 1.75;
          color: var(--text-mid);
          margin: 0;
          position: relative;
        }
        .practice-cell.featured .practice-body { color: rgba(255,255,255,0.65); }

        /* Experience */
        .experience {
          background: var(--cream);
          padding: 80px 0;
        }
        .exp-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 80px;
          align-items: start;
        }
        .exp-left {
          position: sticky;
          top: 145px;
        }
        .exp-sub {
          font-size: 14px;
          line-height: 1.8;
          color: var(--text-mid);
          margin: 0;
        }
        .exp-right { padding-top: 4px; }
        .exp-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
        }
        .exp-row:first-child { border-top: 1px solid var(--border); }
        .exp-org {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--teal);
          padding-top: 3px;
          line-height: 1.5;
        }
        .exp-role {
          font-family: var(--font-serif);
          font-size: 18px;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: 8px;
        }
        .exp-desc {
          font-size: 13.5px;
          line-height: 1.75;
          color: var(--text-mid);
          margin: 0;
        }

        /* ===== THOUGHT LEADERSHIP ===== */
        .thought {
          background: var(--off-white);
          padding: 80px 0;
        }
        .thought-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .thought-card {
          background: var(--cream);
          padding: 32px 28px 32px 36px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          position: relative;
        }
        .thought-accent {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--navy);
        }
        .thought-label {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--text-muted);
        }
        .thought-body {
          font-size: 14.5px;
          line-height: 1.8;
          color: var(--text-dark);
          margin: 0;
        }

        /* ===== CREDENTIALS ===== */
        .credentials {
          background: #ffffff;
          padding: 80px 0;
        }
        .cred-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
        }
        .cred-section-title {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .cred-section-gap { margin-top: 40px; }
        .cred-rule {
          height: 1px;
          background: var(--border);
        }
        .cred-item { padding-top: 20px; }
        .cred-inst {
          font-family: var(--font-serif);
          font-size: 17px;
          font-weight: 400;
          color: var(--text-dark);
          margin-bottom: 4px;
        }
        .cred-degree {
          font-size: 13px;
          color: var(--text-mid);
          line-height: 1.5;
        }
        .cred-note {
          font-size: 12.5px;
          font-style: italic;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .cred-divider {
          height: 1px;
          background: var(--border);
          margin-top: 20px;
        }
        .cert-row {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 16px;
          padding-top: 20px;
          align-items: start;
        }
        .cert-divider { grid-column: 1 / -1; margin-top: 4px; }
        .cert-code {
          font-family: var(--font-serif);
          font-size: 15px;
          color: var(--teal);
          padding-top: 2px;
        }
        .cert-name {
          font-size: 14px;
          color: var(--text-dark);
          line-height: 1.4;
        }
        .cert-issuer {
          font-size: 12px;
          color: var(--teal);
          margin-top: 3px;
        }
        .affil-row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 16px;
          padding-top: 20px;
          align-items: start;
        }
        .affil-divider { grid-column: 1 / -1; margin-top: 4px; }
        .affil-role {
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          padding-top: 3px;
        }
        .affil-org {
          font-family: var(--font-serif);
          font-size: 16px;
          font-weight: 400;
          color: var(--text-dark);
          line-height: 1.4;
        }

        /* ===== CTA ===== */
        .cta-band {
          background: var(--navy);
          padding: 96px 40px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .cta-eyebrow {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--teal-light);
        }
        .cta-heading {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
        }
        .cta-italic {
          font-style: italic;
          color: rgba(200,210,220,0.6);
        }
        .cta-sub {
          font-size: 15px;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          margin: 0;
        }
        .cta-btn {
          display: inline-block;
          margin-top: 12px;
          padding: 18px 40px;
          background: var(--teal);
          color: #ffffff;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-decoration: none;
          transition: background 0.2s;
        }
        .cta-btn:hover { background: var(--teal-light); }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 960px) {
          .hero { grid-template-columns: 1fr; }
          .hero-left { padding: 48px 32px; min-height: 400px; }
          .hero-right { padding: 48px 32px; }
          .practice-grid { grid-template-columns: 1fr 1fr; }
          .exp-grid { grid-template-columns: 1fr; gap: 40px; }
          .exp-left { position: static; }
          .cred-grid { grid-template-columns: 1fr; gap: 48px; }
          .thought-grid { grid-template-columns: 1fr; }
          .stats-bar { flex-wrap: wrap; gap: 16px 0; }
          .stat-divider { display: none; }
          .stat { padding: 8px 24px; }
        }
        @media (max-width: 600px) {
          .practice-grid { grid-template-columns: 1fr; }
          .exp-row { grid-template-columns: 1fr; gap: 8px; }
          .hero-monogram { font-size: 160px; }
        }
      `}</style>
        </>
    );
}