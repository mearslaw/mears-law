"use client";
import React, { useState, useCallback, useEffect, createElement as h, Fragment } from "react";
import Link from "next/link";

/* ---------- inline CSS (copied from your JSX block, unchanged in look/feel) ---------- */
const CSS = `
/* Vars + base */
.site-header{
  --navy:#0f223b;
  --ink:#EAF2FF;
  --ink-dim:#C7D5E9;
  --radius:12px;

  position:sticky; top:0; z-index:1000;
  background:var(--navy);
  border-bottom:1px solid rgba(255,255,255,0.12);
  box-shadow:0 2px 6px rgba(0,0,0,0.06);
  color:var(--ink);
  font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}

.container{ width:min(1200px,92%); margin:0 auto; }

/* ====== TALL HEADER BAR ====== */
.site-header{ --bar-h:110px; }   /* larger */
.nav{
  height:var(--bar-h);
  padding:0;
  display:flex; align-items:center; justify-content:space-between;
  overflow:visible;
}

/* Brand */
.brand{ display:flex; align-items:center; text-decoration:none; color:var(--ink); }
.brand-mark-img{
  width:160px; height:auto; display:block; object-fit:contain;
  filter: drop-shadow(0 3px 10px rgba(0,0,0,.28));
  margin-top:12px;             /* positioned lower */
  margin-bottom:-6px;
  flex-shrink:0;
}
.brand-mark-img.small{ width:140px; margin:0; }

/* Primary nav */
.nav-links{ display:flex; align-items:center; gap:65px; }
.site-header .nav-links a,
.site-header .nav-links a:visited{
  font-weight:600; text-decoration:none;
  color:var(--ink-dim);
  display:inline-flex; align-items:center;
  line-height:1.2;
  padding:12px px;
  transition:color .2s ease, opacity .2s ease;
  white-space:nowrap;
}
.site-header .nav-links a:hover{ color:var(--ink); }
.site-header .nav-links a:focus-visible{
  outline:2px solid rgba(234,242,255,.35); outline-offset:3px; border-radius:6px;
}

/* Services Dropdown */
.services-dropdown {
  position: relative;
}

.services-trigger {
  background: none;
  border: none;
  color: var(--ink-dim);
  font-weight: 600;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 0;
  transition: color .2s ease;
  white-space: nowrap;
}

.services-trigger:hover {
  color: var(--ink);
}

.services-trigger svg {
  width: 14px;
  height: 14px;
  transition: transform .2s ease;
}

.services-dropdown.open .services-trigger svg {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  min-width: 220px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: opacity .2s ease, transform .2s ease, visibility .2s ease;
  z-index: 100;
  padding: 8px 0;
  border: 1px solid rgba(0,0,0,.08);
}

.services-dropdown.open .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.services-dropdown .dropdown-menu .dropdown-item,
.services-dropdown .dropdown-menu .dropdown-item:visited,
.services-dropdown .dropdown-menu .dropdown-item:active,
.services-dropdown .dropdown-menu .dropdown-item:link {
  display: block;
  padding: 10px 16px;
  color: #000000 !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  font-size: 15px;
  transition: background .2s ease, color .2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.services-dropdown .dropdown-menu .dropdown-item:hover {
  background: #f3f4f6;
  color: #0A1628 !important;
}

.dropdown-group {
  position: relative;
}

.dropdown-parent {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.submenu-arrow {
  color: #6b7280;
  font-size: 14px;
  line-height: 1;
}

.dropdown-submenu {
  position: absolute;
  top: 0;
  left: calc(100% - 4px);
  min-width: 280px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.08);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-8px);
  transition: opacity .2s ease, transform .2s ease, visibility .2s ease;
  z-index: 110;
}

.dropdown-group:hover > .dropdown-submenu,
.dropdown-group:focus-within > .dropdown-submenu {
  opacity: 1;
  visibility: visible;
  transform: translateX(0);
}

.services-dropdown .dropdown-submenu .dropdown-subitem,
.services-dropdown .dropdown-submenu .dropdown-subitem:visited,
.services-dropdown .dropdown-submenu .dropdown-subitem:active,
.services-dropdown .dropdown-submenu .dropdown-subitem:link {
  display: block !important;
  width: 100%;
  padding: 10px 16px;
  color: #111827 !important;
  text-decoration: none !important;
  font-weight: 500 !important;
  font-size: 14px;
  line-height: 1.35;
  white-space: normal;
}

.dropdown-subitem:hover {
  background: #f9fafb;
}

/* CTA */
.cta{ display:flex; align-items:center; gap:10px; }
.btn{
  display:inline-flex; align-items:center; justify-content:center;
  padding:6px 12px;
  line-height:1.1;
  border-radius:14px; font-weight:700;
  border:1px solid rgba(0,0,0,0.12);
  text-decoration:none;
  transition:transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
  background:#fff; color:var(--navy);
  box-shadow:0 2px 6px rgba(0,0,0,.08);
  white-space:nowrap;
  cursor: pointer;
}
.btn:hover{ box-shadow:0 4px 10px rgba(0,0,0,.12); transform:translateY(-1px); }
.site-header .btn-primary{ background:#fff; color:var(--navy); }

/* Only square the DESKTOP header CTA */
.site-header .cta .btn { border-radius: 4px; }

.hamburger{ display:none; border:0; background:none; padding:6px; color:var(--ink); }

/* Mobile */
@media (max-width:900px){
  .site-header{ --bar-h:88px; }
  .brand{ align-items:flex-start; padding-top:8px; }
  .brand-mark-img{ width:140px; margin-top:0px; margin-bottom:0px; }
  .nav-links{ display:none; }
  .hamburger{ display:block; }
}

/* Mobile drawer */
.mobile-drawer{
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 84vw; max-width: 360px;
  background: #0f223b;
  color: var(--ink);
  transform: translateX(100%);
  transition: transform .28s ease;
  box-shadow: -8px 0 24px rgba(0,0,0,.22);
  z-index: 1100;
  display: none;
  font-family: var(--font-inter), Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}
.mobile-drawer.open{ transform: translateX(0); }
@media (max-width:900px){ .mobile-drawer{ display:block; } }

.drawer-header{ display:flex; align-items:center; justify-content:space-between; padding:12px 14px; border-bottom:1px solid rgba(255,255,255,0.1); }
.mobile-links{ display:flex; flex-direction:column; padding:12px 14px; gap:14px; }
.mobile-links a{ color:#fff; text-decoration:none; font-weight:600; line-height:1.25; }
.mobile-links a:hover{ opacity:.9; }
.mobile-submenu{ display:flex; flex-direction:column; padding-left:20px; gap:10px; margin-top:8px; }
.mobile-submenu a{ color:rgba(255,255,255,0.85); font-weight:500; font-size:14px; }
.mobile-submenu-group{ display:grid; gap:8px; }
.mobile-submenu-title{ color:#fff !important; font-weight:600 !important; }
.mobile-submenu-nested{ display:grid; gap:8px; padding-left:14px; }
.mobile-submenu-nested a{ color:rgba(255,255,255,0.85); font-weight:500; font-size:13px; }
.mobile-cta{ display:flex; flex-direction:column; gap:10px; padding:8px 14px 16px; }
.mobile-cta .btn{ background:#fff; color:var(--navy); }
.close{ border:0; background:none; color:#fff; padding:6px; }

/* Calendly Modal */
.calendly-overlay {
}

.calendly-overlay.open {
  display: flex;
  opacity: 1;
}

.calendly-modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 1000px;
  height: 90vh;
  max-height: 750px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.calendly-overlay.open .calendly-modal {
  transform: scale(1);
}

.calendly-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2001;
  transition: background 0.2s ease;
  font-size: 24px;
  line-height: 1;
}

.calendly-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.calendly-inline-widget {
  width: 100%;
  height: 100%;
  min-width: 320px;
}
`;

/* ---------- inject CSS once ---------- */
function useInlineStyles(id, cssText) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("style");
      el.id = id;
      el.type = "text/css";
      el.appendChild(document.createTextNode(cssText));
      document.head.appendChild(el);
    }
  }, [id, cssText]);
}

/* ---------- Load Calendly script ---------- */
function useFilloutScript() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!document.querySelector('script[src*="fillout.com/embed"]')) {
      const script = document.createElement("script");
      script.src = "https://server.fillout.com/embed/v1/";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

/* ---------- icons (no JSX) ---------- */
const IconHamburger = () =>
  h(
    "svg",
    { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
    h("path", { d: "M3 6h18M3 12h18M3 18h18" })
  );

const IconClose = () =>
  h(
    "svg",
    { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", "aria-hidden": "true" },
    h("path", { d: "M18 6L6 18M6 6l12 12" })
  );

const IconChevronDown = () =>
  h(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
    h("path", { d: "M6 9l6 6 6-6" })
  );

/* ---------- component (no JSX) ---------- */
export default function Header() {
  useInlineStyles("ml-header-inline-css", CSS);
  useFilloutScript();

  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  
  const toggleMenu = useCallback(() => setIsOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleServicesDropdown = useCallback(() => setIsServicesDropdownOpen((v) => !v), []);
  const closeServicesDropdown = useCallback(() => setIsServicesDropdownOpen(false), []);
  
  const openCalendly = useCallback((e) => {
    e.preventDefault();
    setIsCalendlyOpen(true);
    closeMenu(); // Close mobile menu if open
  }, [closeMenu]);

  const closeCalendly = useCallback(() => {
    setIsCalendlyOpen(false);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isCalendlyOpen) {
        closeCalendly();
      }
    };
    
    if (isCalendlyOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isCalendlyOpen, closeCalendly]);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isServicesDropdownOpen) return;
    
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown')) {
        closeServicesDropdown();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesDropdownOpen, closeServicesDropdown]);

  /* brand */
  const brandLink = h(
    Link,
    { className: "brand", href: "/", "aria-label": "Mears Law home" },
    h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img" })
  );

  /* desktop primary nav */
  const servicesDropdown = h(
    "div",
    { className: `services-dropdown${isServicesDropdownOpen ? " open" : ""}` },
    h(
      "button",
      {
        className: "services-trigger",
        onClick: toggleServicesDropdown,
        "aria-expanded": isServicesDropdownOpen,
        "aria-haspopup": "true"
      },
      "Services",
      h(IconChevronDown)
    ),
    h(
      "div",
      { className: "dropdown-menu", role: "menu" },
      h(
        "div",
        { className: "dropdown-group" },
        h(
          Link,
          {
            href: "/services/companies",
            className: "dropdown-item dropdown-parent",
            role: "menuitem",
            onClick: closeServicesDropdown
          },
          "Companies",
          h("span", { className: "submenu-arrow", "aria-hidden": "true" }, ">")
        ),
        h(
          "div",
          { className: "dropdown-submenu" },
          h(
            Link,
            {
              href: "/services/companies/artificial-intelligence",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Artificial Intelligence"
          ),
          h(
            Link,
            {
              href: "/services/companies/privacy-data-protection",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Privacy and Data Protection"
          ),
          h(
            Link,
            {
              href: "/services/companies/corporate",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Corporate"
          ),
          h(
            Link,
            {
              href: "/services/companies/real-estate",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Real Estate"
          )
        )
      ),
      h(
        "div",
        { className: "dropdown-group" },
        h(
          Link,
          {
            href: "/services/individuals",
            className: "dropdown-item dropdown-parent",
            role: "menuitem",
            onClick: closeServicesDropdown
          },
          "Individuals",
          h("span", { className: "submenu-arrow", "aria-hidden": "true" }, ">")
        ),
        h(
          "div",
          { className: "dropdown-submenu" },
          h(
            Link,
            {
              href: "/services/individuals/digital-asset-protection",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Digital Asset Protection"
          ),
          h(
            Link,
            {
              href: "/services/individuals/real-estate",
              className: "dropdown-subitem",
              role: "menuitem",
              onClick: closeServicesDropdown
            },
            "Real Estate"
          )
        )
      )
    )
  );

  const navLinks = h(
    "nav",
    { className: "nav-links", "aria-label": "Primary" },
    h(Link, { href: "/" }, "Home"),
    h(Link, { href: "/about" }, "About"),
    servicesDropdown,
    h(Link, { href: "/careers" }, "Careers"),
    h(Link, { href: "/contact" }, "Contact"),
  );

  /* desktop cta + hamburger */
  const ctaBlock = h(
    "div",
    { className: "cta" },
    h(
      "button",
      { 
        className: "btn btn-primary", 
        onClick: openCalendly,
        "aria-label": "Book consultation" 
      },
      "Book Consultation"
    ),
    h(
      "button",
      { className: "hamburger", "aria-label": "Open menu", onClick: toggleMenu },
      h(IconHamburger)
    )
  );

  const topBar = h(
    "div",
    { className: "container nav" },
    brandLink,
    navLinks,
    ctaBlock
  );

  const headerEl = h("header", { className: "site-header" }, topBar);

  /* mobile drawer */
  const drawerHeader = h(
    "div",
    { className: "drawer-header" },
    h(
      Link,
      { className: "brand", href: "/", onClick: closeMenu, "aria-label": "Mears Law home" },
      h("img", { src: "/images/mears-logo.png", alt: "Mears Law logo", className: "brand-mark-img small" })
    ),
    h(
      "button",
      { className: "close", "aria-label": "Close menu", onClick: closeMenu },
      h(IconClose)
    )
  );

  const mobileLinks = h(
    "nav",
    { className: "mobile-links", "aria-label": "Mobile" },
    h(Link, { href: "/", onClick: closeMenu }, "Home"),
    h(Link, { href: "/about", onClick: closeMenu }, "About"),
    h(
      "div",
      null,
      h("div", { style: { fontWeight: 600, color: "#fff", marginBottom: "8px" } }, "Services"),
      h(
        "div",
        { className: "mobile-submenu" },
        h(
          "div",
          { className: "mobile-submenu-group" },
          h(Link, { href: "/services/companies", onClick: closeMenu, className: "mobile-submenu-title" }, "Companies"),
          h(
            "div",
            { className: "mobile-submenu-nested" },
            h(Link, { href: "/services/companies/artificial-intelligence", onClick: closeMenu }, "Artificial Intelligence"),
            h(Link, { href: "/services/companies/privacy-data-protection", onClick: closeMenu }, "Privacy and Data Protection"),
            h(Link, { href: "/services/companies/corporate", onClick: closeMenu }, "Corporate"),
            h(Link, { href: "/services/companies/real-estate", onClick: closeMenu }, "Real Estate")
          )
        ),
        h(
          "div",
          { className: "mobile-submenu-group" },
          h(Link, { href: "/services/individuals", onClick: closeMenu, className: "mobile-submenu-title" }, "Individuals"),
          h(
            "div",
            { className: "mobile-submenu-nested" },
            h(Link, { href: "/services/individuals/digital-asset-protection", onClick: closeMenu }, "Digital Asset Protection"),
            h(Link, { href: "/services/individuals/real-estate", onClick: closeMenu }, "Real Estate")
          )
        )
      )
    ),
    h(Link, { href: "/careers", onClick: closeMenu }, "Careers"),
    h(Link, { href: "/contact", onClick: closeMenu }, "Contact"),
  );

  const mobileCta = h(
    "div",
    { className: "mobile-cta" },
    h(
      "button",
      { 
        className: "btn", 
        onClick: openCalendly
      },
      "Book Consultation"
    )
  );

  const drawer = h(
    "div",
    { className: `mobile-drawer${isOpen ? " open" : ""}` },
    drawerHeader,
    mobileLinks,
    mobileCta
  );

  /* Calendly modal */
  const calendlyModal = h(
    "div",
    { 
      className: `calendly-overlay${isCalendlyOpen ? " open" : ""}`,
      onClick: closeCalendly
    },
    h(
      "div",
      { 
        className: "calendly-modal",
        onClick: (e) => e.stopPropagation()
      },
      h(
        "button",
        { 
          className: "calendly-close",
          onClick: closeCalendly,
          "aria-label": "Close calendar"
        },
        "×"
      ),
      h("iframe", {
        src: "https://mearslaw.fillout.com/meeting-with-carissa-mears",
        style: { width: "100%", height: "100%", border: "none" }
      })    
    )
  );

  return h(Fragment, null, headerEl, drawer, calendlyModal);
}
