import Image from "next/image";
import Link from "next/link";
import InsightsHero from "./InsightsHero";
import InsightsTocNav from "./InsightsTocNav";
import {
  client,
  insightsListQuery,
  sanityConfigured,
  urlForImage,
} from "../../lib/sanity";

export const dynamic = "force-dynamic";

/** `categories` = Sanity `insight.category` values shown in this block (order preserved per section). */
const SECTIONS = [
  {
    key: "publication",
    label: "Publications",
    id: "publications",
    categories: ["publication"],
  },
  {
    key: "quickTake",
    label: "Quick Takes",
    id: "quick-takes",
    categories: ["quickTake"],
  },
  { key: "news", label: "News", id: "news", categories: ["news"] },
  {
    key: "media",
    label: "Videos & Podcasts",
    id: "videos-podcasts",
    categories: ["video", "podcast"],
  },
];

const KNOWN_CATEGORIES = new Set(SECTIONS.flatMap((s) => s.categories));

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function InsightCard({ item }) {
  if (!item.externalUrl && !item.slug) {
    return null;
  }
  const href = item.externalUrl || `/insights/${item.slug}`;
  const external = Boolean(item.externalUrl);
  const imgUrl = urlForImage(item.thumbnail);

  const body = (
    <>
      {imgUrl ? (
        <div className="insights-card-image-wrap">
          <Image
            src={imgUrl}
            alt=""
            width={800}
            height={450}
            className="insights-card-image"
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="insights-card-body">
        <time className="insights-card-date" dateTime={item.publishedAt}>
          {formatDate(item.publishedAt)}
        </time>
        <h3 className="insights-card-title">{item.title}</h3>
        {item.excerpt ? (
          <p className="insights-card-excerpt">{item.excerpt}</p>
        ) : null}
        <span className="insights-card-cta">
          {external ? "Visit link" : "Read more"}
          <span aria-hidden="true"> →</span>
        </span>
      </div>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className="insights-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className="insights-card">
      {body}
    </Link>
  );
}

export default async function InsightsPage() {
  let items = [];
  let fetchError = false;

  if (client) {
    try {
      items = await client.fetch(insightsListQuery);
    } catch {
      fetchError = true;
    }
  }

  const byCategory = SECTIONS.map((section) => ({
    ...section,
    items: items
      .filter((i) => section.categories.includes(i.category))
      .sort((a, b) => {
        const ta = new Date(a.publishedAt || a._createdAt || 0).getTime();
        const tb = new Date(b.publishedAt || b._createdAt || 0).getTime();
        return tb - ta;
      }),
  }));

  const otherItems = items.filter(
    (i) => i.category == null || !KNOWN_CATEGORIES.has(i.category)
  );
  const sectionsToRender =
    otherItems.length > 0
      ? [
          ...byCategory,
          {
            key: "other",
            label: "Other",
            id: "other",
            items: otherItems,
          },
        ]
      : byCategory;

  const tocSections =
    otherItems.length > 0
      ? [...SECTIONS, { id: "other", label: "Other" }]
      : SECTIONS;

  return (
    <>
      <InsightsHero />

      {!sanityConfigured ? (
        <section className="insights-notice">
          <div className="insights-page-inner">
            <p>
              <strong>CMS not configured.</strong> Add{" "}
              <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and{" "}
              <code>NEXT_PUBLIC_SANITY_DATASET</code> to{" "}
              <code>.env.local</code> (see <code>.env.example</code> in the repo
              root).
            </p>
          </div>
        </section>
      ) : null}

      {sanityConfigured && fetchError ? (
        <section className="insights-notice insights-notice-warn">
          <div className="insights-page-inner">
            <p>
              Content could not be loaded. Check your Sanity project settings,
              dataset name, and CORS origins for this site URL.
            </p>
          </div>
        </section>
      ) : null}

      <InsightsTocNav sections={tocSections} />

      {sectionsToRender.map((section) => (
        <section
          key={section.key}
          className="insights-section"
          aria-labelledby={section.id}
        >
          <div className="insights-section-inner">
            <h2 id={section.id} className="insights-section-title">
              {section.label}
            </h2>
            {section.items.length === 0 ? (
              <p className="insights-section-empty">
                No items in this section yet.
              </p>
            ) : (
              <ul className="insights-grid" role="list">
                {section.items.map((item) => (
                  <li key={item._id} role="listitem">
                    <InsightCard item={item} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
