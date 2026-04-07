import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

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
      description:
        "On the website, Videos and Podcasts appear together in one block.",
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
      title: "Summary",
      type: "text",
      rows: 4,
      description:
        "Short teaser for insight cards and SEO (plain text, max 400 characters).",
      validation: (rule) => rule.max(400),
    }),
    defineField({
      name: "body",
      title: "Article",
      type: "array",
      description:
        "Full article for internal pages. Ignored when “External link” is set (those posts send readers off-site).",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) => rule.required(),
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "externalUrl",
      title: "External link",
      type: "url",
      description:
        "Optional. If set, cards link here and the detail page promotes this URL instead of the article below.",
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Listing card image (optional).",
      options: { hotspot: true },
    }),
    defineField({
      name: "videoFile",
      title: "Video file",
      type: "file",
      description:
        "Upload a video file (e.g. MP4, WebM). Shown on the insight page when Section is Videos.",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.category !== "video",
    }),
    defineField({
      name: "audioFile",
      title: "Podcast audio file",
      type: "file",
      description:
        "Upload an audio episode (e.g. MP3, M4A). Shown on the insight page when Section is Podcasts.",
      options: {
        accept: "audio/*",
      },
      hidden: ({ parent }) => parent?.category !== "podcast",
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
