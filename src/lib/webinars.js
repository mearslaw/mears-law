import { client, sanityConfigured, webinarsListQuery, webinarBySlugQuery } from "./sanity";

/** Topic tags for copy / future use (not stored per webinar in CMS). */
export const WEBINAR_TOPICS = [
  "AI governance for in-house legal teams",
  "Privacy compliance for growing companies",
  "Digital asset risk for professionals and founders",
  "Responsible AI procurement",
];

/**
 * Normalized webinar shape (matches former hard-coded WEBINARS items).
 * @param {object} doc
 * @returns {{
 *   id: string,
 *   title: string,
 *   summary: string,
 *   scheduledAt: string,
 *   durationMinutes: number,
 *   priceCad: number,
 *   status: string,
 *   recordingUrl: string,
 *   embedUrl: string,
 * }}
 */
export function normalizeWebinar(doc) {
  if (!doc) return null;
  return {
    id: doc.id || "",
    title: doc.title || "",
    summary: doc.summary || "",
    scheduledAt: doc.scheduledAt || "",
    durationMinutes: Number(doc.durationMinutes) || 0,
    priceCad: Number(doc.priceCad) || 0,
    status: doc.status || "upcoming",
    recordingUrl: doc.recordingUrl || "",
    embedUrl: doc.embedUrl || "",
  };
}

/** All webinars from Sanity, sorted by scheduled time (query order). */
export async function getWebinars() {
  if (!sanityConfigured || !client) return [];
  try {
    const rows = await client.fetch(webinarsListQuery);
    return Array.isArray(rows)
      ? rows
          .map((row) => normalizeWebinar(row))
          .filter((w) => w && w.id)
      : [];
  } catch {
    return [];
  }
}

/** Single webinar by slug/id (for API validation). */
export async function getWebinarById(id) {
  if (!id || !sanityConfigured || !client) return null;
  try {
    const doc = await client.fetch(webinarBySlugQuery, { slug: id });
    return normalizeWebinar(doc);
  } catch {
    return null;
  }
}
