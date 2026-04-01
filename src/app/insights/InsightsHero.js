"use client";

import { useEffect, useRef } from "react";

export default function InsightsHero() {
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
		<section className="insights-hero">
			<div className="insights-hero-inner">
				<div className="insights-hero-eyebrow">INSIGHTS</div>
				<h1 ref={h1Ref} className="insights-hero-title">
					Insights
					<span className="insights-hero-underline" aria-hidden="true" />
				</h1>
				<p className="insights-hero-lede">
					Publications, commentary, news, and media from Mears Law — practical
					perspectives on corporations, governments and individuals.
				</p>
			</div>
		</section>
	);
}
