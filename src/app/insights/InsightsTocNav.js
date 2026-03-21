"use client";

import { useEffect, useLayoutEffect } from "react";

/** Total height from top of viewport covered by site header + sticky insights TOC + gap */
function stickyStackInsetPx() {
  const header = document.querySelector(".site-header");
  const toc = document.querySelector(".insights-toc");
  const h = header?.offsetHeight ?? 110;
  const t = toc?.offsetHeight ?? 52;
  return h + t + 20;
}

export default function InsightsTocNav({ sections }) {
  useLayoutEffect(() => {
    const prevPad = document.documentElement.style.scrollPaddingTop;
    const applyPad = () => {
      document.documentElement.style.scrollPaddingTop = `${stickyStackInsetPx()}px`;
    };
    applyPad();

    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ block: "start", behavior: "auto" });
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

  return (
    <nav className="insights-toc" aria-label="On this page">
      <div className="insights-page-inner insights-toc-inner">
        {sections.map((sec) => (
          <a key={sec.id} href={`#${sec.id}`} className="insights-toc-link">
            {sec.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
