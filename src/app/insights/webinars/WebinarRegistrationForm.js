"use client";

import { useMemo, useState } from "react";
import { WEBINARS } from "../../../lib/webinars";

const DEFAULT_FORM = {
  webinarId: WEBINARS[0]?.id || "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  jobTitle: "",
  notes: "",
  consent: false,
};

export default function WebinarRegistrationForm() {
  const [form, setForm] = useState(DEFAULT_FORM);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const webinarOptions = useMemo(
    () => WEBINARS.map((webinar) => ({ value: webinar.id, label: webinar.title })),
    []
  );

  function onFieldChange(e) {
    const { name, type, value, checked } = e.currentTarget;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", message: "" });

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

      setStatus({
        type: "success",
        message:
          payload?.message ||
          "Registration received. Please check your email for confirmation details.",
      });
      setForm((prev) => ({
        ...DEFAULT_FORM,
        webinarId: prev.webinarId || DEFAULT_FORM.webinarId,
      }));
    } catch (err) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
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
          I understand this is a paid webinar registration and I consent to receive
          confirmation and follow-up emails.
        </span>
      </label>

      {status.message ? (
        <p
          className={`webinars-form-status ${
            status.type === "success"
              ? "webinars-form-status-ok"
              : "webinars-form-status-err"
          }`}
          role="status"
        >
          {status.message}
        </p>
      ) : null}

      <div className="webinars-form-actions">
        <button className="webinars-form-btn" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register for Paid Webinar"}
        </button>
        <p className="webinars-form-note">
          Stripe checkout is being added in the next implementation phase.
        </p>
      </div>
    </form>
  );
}
