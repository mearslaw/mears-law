import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityConfigured = Boolean(projectId && dataset);

export const client = sanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2025-03-21",
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN || undefined,
    })
  : null;

const builder =
  projectId && dataset ? createImageUrlBuilder({ projectId, dataset }) : null;

export function urlForImage(source) {
  if (!builder || !source?.asset) return null;
  return builder.image(source).width(800).height(450).fit("crop").url();
}

export const insightsListQuery = `*[_type == "insight"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  externalUrl,
  thumbnail
}`;

export const insightBySlugQuery = `*[_type == "insight" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  category,
  publishedAt,
  excerpt,
  externalUrl,
  thumbnail
}`;
