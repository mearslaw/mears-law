import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const CATEGORIES = [
  { title: "Publications", value: "publication" },
  { title: "Quick Takes", value: "quickTake" },
  { title: "News", value: "news" },
  { title: "Videos", value: "video" },
  { title: "Podcasts", value: "podcast" },
];

export const insight = defineType({
  name: "insight",
  title: "Insight",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Section",
      type: "string",
      options: {
        list: [...CATEGORIES],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().max(400),
    }),
    defineField({
      name: "externalUrl",
      title: "External link",
      type: "url",
      description:
        "Optional. If set, list cards open this URL. Otherwise the site shows an internal detail page.",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", category: "category", media: "thumbnail" },
    prepare({ title, category, media }) {
      const cat =
        CATEGORIES.find((c) => c.value === category)?.title ?? category;
      return { title, subtitle: cat, media };
    },
  },
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
