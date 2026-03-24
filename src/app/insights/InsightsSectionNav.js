"use client";

import { useEffect, useLayoutEffect } from "react";

const INSIGHTS_PATH = "/insights";

function stickyStackInsetPx() {
  const header = document.querySelector(".site-header");
  const bar = document.querySelector(".insights-section-nav");
  const h = header?.offsetHeight ?? 110;
  const b = bar?.offsetHeight ?? 52;
  return h + b + 16;
}

function scrollToSectionId(id, behavior = "smooth") {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector(".site-header");
  const bar = document.querySelector(".insights-section-nav");
  const headerH = header?.getBoundingClientRect().height ?? 110;
  const barH = bar?.getBoundingClientRect().height ?? 52;
  const gap = 12;
  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    headerH -
    barH -
    gap;

  window.scrollTo({ top: Math.max(0, top), behavior });
  window.history.replaceState(null, "", `${INSIGHTS_PATH}#${id}`);
}

export default function InsightsSectionNav({ sectionLinks }) {
  useLayoutEffect(() => {
    const prevPad = document.documentElement.style.scrollPaddingTop;
    const applyPad = () => {
      document.documentElement.style.scrollPaddingTop = `${stickyStackInsetPx()}px`;
    };
    applyPad();

    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        requestAnimationFrame(() => {
          scrollToSectionId(hash, "auto");
        });
      }
    }

    return () => {
      document.documentElement.style.scrollPaddingTop = prevPad;
    };
  }, []);

  useEffect(() => {
    const onResize = () => {
      document.documentElement.style.scrollPaddingTop = `${stickyStackInsetPx()}px`;
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!sectionLinks?.length) return null;

  return (
    <nav className="insights-section-nav" aria-label="Sections on this page">
      <div className="insights-page-inner insights-section-nav-inner">
        {sectionLinks.map((sec) => (
          <button
            key={sec.id}
            type="button"
            className="insights-section-nav-link"
            onClick={() => scrollToSectionId(sec.id)}
          >
            {sec.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
