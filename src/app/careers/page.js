"use client";

import { useEffect, useRef } from "react";

export default function CareersPage() {
	// animate the underline once when H1 is visible
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
			{ threshold: 0.7 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<>
			{/* ===== Hero (match Services) ===== */}
			<section className="careers-hero">
				<div className="container hero-content">
					<div className="eyebrow">CAREERS</div>
					<h1 ref={h1Ref} className="hero-h1">
						Build Your Legal Career at Mears Law
						<span className="underline" aria-hidden="true"></span>
					</h1>
					<p className="lede">
						At Mears Law, we believe in investing in the next generation of
						legal professionals. Our firm offers meaningful opportunities for
						law clerk students and law students to gain hands-on experience,
						develop practical skills, and contribute to impactful legal work
						across diverse practice areas.
					</p>
				</div>
			</section>

			{/* ===== Why Join Us ===== */}
			<section className="why-join patterned-section">
				<div className="container">
					<h2>Why Join Us?</h2>

					<div className="benefits-grid">
						<div className="benefit-card">
							<div className="benefit-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5z" />
									<path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
								</svg>
							</div>
							<h3>Mentorship & Learning</h3>
							<p>
								Work alongside experienced lawyers who are committed to your
								growth. We provide guidance, feedback, and opportunities to
								learn through real-world legal challenges.
							</p>
						</div>

						<div className="benefit-card">
							<div className="benefit-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
									<line x1="3" y1="9" x2="21" y2="9" />
									<line x1="9" y1="21" x2="9" y2="9" />
								</svg>
							</div>
							<h3>Diverse Practice Areas</h3>
							<p>
								Gain exposure to a wide range of legal fields—from emerging
								technologies and data governance to property transactions and
								immigration matters.
							</p>
						</div>

						<div className="benefit-card">
							<div className="benefit-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</div>
							<h3>Collaborative Environment</h3>
							<p>
								Be part of a supportive team that values curiosity, initiative,
								and diverse perspectives. Your ideas and contributions matter
								here.
							</p>
						</div>

						<div className="benefit-card">
							<div className="benefit-icon">
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
									<polyline points="22 4 12 14.01 9 11.01" />
								</svg>
							</div>
							<h3>Professional Development</h3>
							<p>
								Participate in training sessions, research projects, and
								client-facing work that build your confidence and prepare you
								for a successful legal career.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Who We're Looking For ===== */}
			<section className="who-were-looking-for patterned-section">
				<div className="container">
					<h2>Who We're Looking For</h2>
					<p className="sub">We welcome applications from:</p>

					<div className="applicant-types">
						<div className="applicant-type">
							<div className="type-icon">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5z" />
									<path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
								</svg>
							</div>
							<p>
								<strong>Law clerk students</strong> seeking co-op placements or
								part-time experience
							</p>
						</div>

						<div className="applicant-type">
							<div className="type-icon">
								<svg
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path d="M12 2L2 7l10 5 10-5-10-5z" />
									<path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
								</svg>
							</div>
							<p>
								<strong>Law students</strong> interested in internship
								opportunities
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* ===== Apply Online ===== */}
			<section className="apply-online">
				<div className="container">
					<h2>Apply Online</h2>
					<p className="sub">
						To apply, please complete our Internship Application Form and submit
						your resume and cover letter directly through the form.
					</p>

					<div className="apply-action">
						<a
							href="https://mearslaw.fillout.com/t/x2JDYQdkSwus"
							className="apply-button"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>Complete Application Form</span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<line x1="5" y1="12" x2="19" y2="12" />
								<polyline points="12 5 19 12 12 19" />
							</svg>
						</a>
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

				/* ===== Hero matches Services ===== */
				.careers-hero {
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

				.eyebrow {
					font:
						600 12px/1.2 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					letter-spacing: 0.18em;
					text-transform: uppercase;
					color: #6b7280;
					margin-bottom: 8px;
				}
				.hero-h1 {
					font-family:
						Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
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
					background: linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd);
					border-radius: 3px;
					box-shadow: 0 2px 8px rgba(139, 92, 246, 0.4);
					width: 0;
					opacity: 0;
				}
				.hero-h1.is-visible .underline {
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

				.lede {
					font:
						400 18px/1.75 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					color: #374151;
					margin: 0;
					max-width: 900px;
				}

				/* ===== Patterned backdrop vibe (like Services sections) ===== */
				.patterned-section {
					position: relative;
					overflow: hidden;
				}
				.patterned-section::before {
					content: "";
					position: absolute;
					inset: 0;
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
				.patterned-section::after {
					content: "";
					position: absolute;
					top: -100%;
					left: -100%;
					width: 300%;
					height: 300%;
					background:
						radial-gradient(
							circle at 30% 50%,
							rgba(139, 92, 246, 0.15) 0%,
							transparent 25%
						),
						radial-gradient(
							circle at 70% 50%,
							rgba(167, 139, 250, 0.12) 0%,
							transparent 25%
						),
						radial-gradient(
							circle at 50% 80%,
							rgba(196, 181, 253, 0.1) 0%,
							transparent 25%
						);
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
					.patterned-section::after {
						animation: none;
					}
				}

				/* ===== Sections ===== */
				.why-join {
					padding: 64px 0;
					background: #f3f4f6;
					border-top: 1px solid #e5e7eb;
				}
				.who-were-looking-for {
					padding: 64px 0;
					background: #f3f4f6;
					border-top: 1px solid #e5e7eb;
					border-bottom: 1px solid #e5e7eb;
				}
				.apply-online {
					padding: 64px 0 80px;
					background: #ffffff;
				}

				h2 {
					font-family:
						Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					font-size: clamp(22px, 3.2vw, 32px);
					line-height: 1.2;
					color: #0a1628;
					margin: 0 0 24px;
				}
				h3 {
					font-family:
						Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					font-size: 20px;
					margin: 0 0 10px;
					color: #0a1628;
				}

				.sub {
					font:
						400 16px/1.7 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					color: #4b5563;
					margin: 0 0 28px;
				}

				.benefits-grid {
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 24px;
					margin-top: 32px;
					position: relative;
					z-index: 1; /* above pattern */
				}

				.benefit-card {
					background: #ffffff;
					border: 1px solid #e5e7eb;
					border-radius: 16px;
					padding: 28px 24px;
					box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
					transition: all 0.3s ease;
				}
				.benefit-card:hover {
					transform: translateY(-4px);
					box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
					border-color: #3b82f6;
				}

				.benefit-icon {
					width: 48px;
					height: 48px;
					background: linear-gradient(135deg, #0a1628 0%, #1e3a5f 100%);
					border-radius: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: white;
					margin-bottom: 16px;
				}

				.benefit-card p {
					font:
						400 15px/1.7 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					color: #4b5563;
					margin: 0;
				}

				.applicant-types {
					display: flex;
					flex-direction: column;
					gap: 16px;
					margin-top: 24px;
					position: relative;
					z-index: 1;
				}
				.applicant-type {
					display: flex;
					align-items: flex-start;
					gap: 16px;
					background: #ffffff;
					border: 1px solid #e5e7eb;
					border-radius: 12px;
					padding: 20px 24px;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
				}
				.type-icon {
					width: 40px;
					height: 40px;
					background: #f3f4f6;
					border-radius: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #0a1628;
					flex-shrink: 0;
				}
				.applicant-type p {
					font:
						400 16px/1.7 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					color: #374151;
					margin: 0;
				}
				.applicant-type strong {
					color: #0a1628;
					font-weight: 600;
				}

				.apply-action {
					text-align: center;
					margin-top: 32px;
				}
				.apply-button {
					display: inline-flex;
					align-items: center;
					gap: 12px;
					background: #0a1628;
					color: white;
					padding: 16px 32px;
					border-radius: 12px;
					font:
						600 16px/1.2 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					text-decoration: none;
					transition: all 0.3s ease;
					box-shadow: 0 4px 12px rgba(10, 22, 40, 0.2);
				}
				.apply-button:hover {
					background: #1e3a5f;
					transform: translateY(-2px);
					box-shadow: 0 6px 16px rgba(10, 22, 40, 0.3);
				}
				.apply-button svg {
					transition: transform 0.3s ease;
				}
				.apply-button:hover svg {
					transform: translateX(4px);
				}

				.apply-note {
					margin-top: 20px;
					font:
						400 14px/1.6 Inter,
						system-ui,
						-apple-system,
						"Segoe UI",
						Roboto,
						Arial,
						sans-serif;
					color: #6b7280;
				}
				.apply-note a {
					color: #3b82f6;
					text-decoration: none;
				}
				.apply-note a:hover {
					text-decoration: underline;
				}

				/* Responsive */
				@media (max-width: 900px) {
					.benefits-grid {
						grid-template-columns: 1fr;
						gap: 20px;
					}
					.benefit-card {
						padding: 24px 20px;
					}
				}
				@media (max-width: 640px) {
					.careers-hero,
					.why-join,
					.who-were-looking-for,
					.apply-online {
						padding-left: 20px;
						padding-right: 20px;
					}
					.apply-button {
						width: 100%;
						justify-content: center;
					}
					.applicant-type {
						flex-direction: column;
						gap: 12px;
					}
				}
			`}</style>
		</>
	);
}
