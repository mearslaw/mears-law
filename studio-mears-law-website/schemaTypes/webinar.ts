import { VideoIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const STATUSES = [
  { title: "Upcoming", value: "upcoming" },
  { title: "Past", value: "past" },
  { title: "Cancelled", value: "cancelled" },
];

/**
 * Matches the website shape in src/lib/webinars.js (id = slug).
 */
export const webinar = defineType({
  name: "webinar",
  title: "Webinar",
  type: "document",
  icon: VideoIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "ID (slug)",
      type: "slug",
      description:
        "Stable ID used in registration and Stripe metadata (e.g. ai-governance-in-house).",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      description: "Short description on the webinars page and in checkout.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "scheduledAt",
      title: "Scheduled date & time",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "durationMinutes",
      title: "Duration (minutes)",
      type: "number",
      initialValue: 75,
      validation: (rule) => rule.required().min(15).max(480),
    }),
    defineField({
      name: "priceCad",
      title: "Price (CAD)",
      type: "number",
      description:
        "Whole dollars (e.g. 149). With STRIPE_SECRET_KEY on the site, Checkout uses this amount. Without API checkout, use “Stripe Payment Link URL” below (or one site-wide link—see README).",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "stripePaymentLinkUrl",
      title: "Stripe Payment Link URL",
      type: "url",
      description:
        "Only when the site does NOT use STRIPE_SECRET_KEY: paste this webinar’s Payment Link from Stripe (price must match Price CAD). If empty, the site-wide env link is used—then all webinars share one Stripe price.",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: [...STATUSES], layout: "radio" },
      initialValue: "upcoming",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "recordingUrl",
      title: "Recording URL",
      type: "url",
      description: "Optional link after the event (e.g. hosted video page).",
    }),
    defineField({
      name: "embedUrl",
      title: "Embed URL",
      type: "url",
      description: "Optional iframe src for an embedded player on the webinars page.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      scheduledAt: "scheduledAt",
      status: "status",
    },
    prepare({ title, scheduledAt, status }) {
      const date =
        scheduledAt && !Number.isNaN(Date.parse(scheduledAt))
          ? new Date(scheduledAt).toLocaleDateString("en-CA")
          : "";
      return {
        title: title || "Webinar",
        subtitle: [status, date].filter(Boolean).join(" · "),
      };
    },
  },
});
