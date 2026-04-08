"use client";

import { useEffect, useMemo, useState } from "react";

const DEFAULT_CHECKOUT_MODE =
  process.env.NEXT_PUBLIC_WEBINAR_CHECKOUT_MODE === "checkout_session"
    ? "checkout_session"
    : "payment_link";

function buildInitialForm(webinars) {
  const firstId = webinars[0]?.id || "";
  return {
    webinarId: firstId,
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    notes: "",
    consent: false,
  };
}

function formatCad(n) {
  try {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
      maximumFractionDigits: 0,
    }).format(Number(n));
  } catch {
    return `${n} CAD`;
  }
}

export default function WebinarRegistrationForm({ webinars = [] }) {
  const [form, setForm] = useState(() => buildInitialForm(webinars));
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [checkoutMode, setCheckoutMode] = useState(DEFAULT_CHECKOUT_MODE);
  const [pendingStripeUrl, setPendingStripeUrl] = useState(null);

  useEffect(() => {
    setForm((prev) => {
      const next = buildInitialForm(webinars);
      const stillValid = webinars.some((w) => w.id === prev.webinarId);
      return {
        ...next,
        webinarId: stillValid ? prev.webinarId : next.webinarId,
        firstName: prev.firstName,
        lastName: prev.lastName,
        email: prev.email,
        company: prev.company,
        jobTitle: prev.jobTitle,
        notes: prev.notes,
        consent: prev.consent,
      };
    });
  }, [webinars]);

  useEffect(() => {
    setPendingStripeUrl(null);
    setStatus({ type: "", message: "" });
  }, [form.webinarId]);

  const webinarOptions = useMemo(
    () =>
      webinars.map((webinar) => ({ value: webinar.id, label: webinar.title })),
    [webinars]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    if (url.searchParams.get("registration") === "cancelled") {
      setStatus({
        type: "error",
        message:
          "Checkout was cancelled. Your registration has not been completed yet.",
      });
    }
  }, []);

  function onFieldChange(e) {
    const { name, type, value, checked } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function goToStripe(url) {
    window.location.assign(url);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });
    setPendingStripeUrl(null);

    if (!form.consent) {
      setStatus({
        type: "error",
        message: "Please confirm consent to registration terms before submitting.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/webinars/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let payload = {};
      try {
        payload = await res.json();
      } catch {}

      if (!res.ok) {
        throw new Error(payload?.message || "Registration could not be completed.");
      }

      if (!payload?.checkoutUrl) {
        throw new Error("Checkout session could not be started.");
      }

      const resolvedMode =
        payload?.mode === "checkout_session" ? "checkout_session" : "payment_link";
      setCheckoutMode(resolvedMode);

      const useFixedSiteLink =
        resolvedMode === "payment_link" && payload?.usesSiteDefaultPaymentLink;

      if (useFixedSiteLink) {
        const listed = formatCad(payload.listedPriceCad);
        setPendingStripeUrl(payload.checkoutUrl);
        setStatus({
          type: "warning",
          message: `This site uses one shared Stripe Payment Link. The amount Stripe charges is set in Stripe (often CA$149), not the price shown on this page (${listed}). To charge the listed price, your team should set STRIPE_SECRET_KEY (Checkout) or add a “Stripe Payment Link URL” for this webinar in the CMS. When you continue, you will leave this site to pay on Stripe.`,
        });
        setLoading(false);
        return;
      }

      setStatus({
        type: "success",
        message:
          resolvedMode === "payment_link"
            ? "Redirecting to Stripe Payment Link..."
            : payload?.message || "Redirecting to secure Stripe checkout...",
      });

      goToStripe(payload.checkoutUrl);
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (webinars.length === 0) {
    return (
      <p className="webinars-event-summary">
        There are no upcoming paid webinars open for registration right now. Please
        check back later or contact the firm for other training options.
      </p>
    );
  }

  return (
    <form className="webinars-form" onSubmit={onSubmit} noValidate>
      <label className="webinars-form-label" htmlFor="webinarId">
        Select webinar
        <select
          id="webinarId"
          name="webinarId"
          className="webinars-form-select"
          value={form.webinarId}
          onChange={onFieldChange}
          required
        >
          {webinarOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <div className="webinars-form-grid">
        <label className="webinars-form-label" htmlFor="firstName">
          First name
          <input
            id="firstName"
            name="firstName"
            className="webinars-form-input"
            value={form.firstName}
            onChange={onFieldChange}
            required
          />
        </label>

        <label className="webinars-form-label" htmlFor="lastName">
          Last name
          <input
            id="lastName"
            name="lastName"
            className="webinars-form-input"
            value={form.lastName}
            onChange={onFieldChange}
            required
          />
        </label>
      </div>

      <div className="webinars-form-grid">
        <label className="webinars-form-label" htmlFor="email">
          Work email
          <input
            id="email"
            name="email"
            type="email"
            className="webinars-form-input"
            value={form.email}
            onChange={onFieldChange}
            required
          />
        </label>

        <label className="webinars-form-label" htmlFor="company">
          Company
          <input
            id="company"
            name="company"
            className="webinars-form-input"
            value={form.company}
            onChange={onFieldChange}
            required
          />
        </label>
      </div>

      <label className="webinars-form-label" htmlFor="jobTitle">
        Job title
        <input
          id="jobTitle"
          name="jobTitle"
          className="webinars-form-input"
          value={form.jobTitle}
          onChange={onFieldChange}
        />
      </label>

      <label className="webinars-form-label" htmlFor="notes">
        Notes or accommodations
        <textarea
          id="notes"
          name="notes"
          className="webinars-form-textarea"
          value={form.notes}
          onChange={onFieldChange}
        />
      </label>

      <label className="webinars-form-checkbox" htmlFor="consent">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={onFieldChange}
          required
        />
        <span>
          I understand this is a webinar registration and I consent to receive
          confirmation and follow-up emails.
        </span>
      </label>

      {status.message ? (
        <p
          className={`webinars-form-status ${
            status.type === "success"
              ? "webinars-form-status-ok"
              : status.type === "warning"
                ? "webinars-form-status-warn"
                : "webinars-form-status-err"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}

      <div className="webinars-form-actions">
        {pendingStripeUrl ? (
          <>
            <button
              type="button"
              className="webinars-form-btn"
              onClick={() => goToStripe(pendingStripeUrl)}
            >
              Continue to Stripe (amount may differ from listing)
            </button>
            <button
              type="button"
              className="webinars-form-btn webinars-form-btn-secondary"
              onClick={() => {
                setPendingStripeUrl(null);
                setStatus({ type: "", message: "" });
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button className="webinars-form-btn" type="submit" disabled={loading}>
            {loading
              ? "Working..."
              : checkoutMode === "payment_link"
                ? "Continue to Stripe Payment Link"
                : "Continue to Secure Checkout"}
          </button>
        )}
        <p className="webinars-form-note">
          {pendingStripeUrl
            ? "You can cancel and ask your administrator to enable Stripe Checkout (STRIPE_SECRET_KEY) so the charged amount matches the price on this page."
            : checkoutMode === "payment_link"
              ? "If checkout shows a different price than this page, the site is using a fixed Stripe Payment Link — see warning after submit or configure STRIPE_SECRET_KEY."
              : "You will be redirected to Stripe to complete payment securely."}
        </p>
      </div>
    </form>
  );
}
