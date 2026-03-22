import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client, insightBySlugQuery, urlForImage } from "../../../lib/sanity";
import InsightPortableBody from "../InsightPortableBody";

export const revalidate = 60;

const CATEGORY_LABELS = {
  publication: "Publications",
  quickTake: "Quick Takes",
  news: "News",
  video: "Videos & Podcasts",
  podcast: "Videos & Podcasts",
};

function formatDate(iso) {
  if (!iso) return "";
  try {
    return new Intl.DateTimeFormat("en-CA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!client) {
    return { title: "Insight" };
  }
  const doc = await client.fetch(insightBySlugQuery, { slug }).catch(() => null);
  if (!doc) {
    return { title: "Insight" };
  }
  return {
    title: doc.title,
    description: doc.excerpt?.slice(0, 160) ?? undefined,
    openGraph: {
      title: doc.title,
      description: doc.excerpt?.slice(0, 160),
      url: `https://mearslaw.ca/insights/${slug}`,
    },
    alternates: {
      canonical: `https://mearslaw.ca/insights/${slug}`,
    },
  };
}

export default async function InsightDetailPage({ params }) {
  const { slug } = await params;

  if (!client) {
    notFound();
  }

  const doc = await client.fetch(insightBySlugQuery, { slug }).catch(() => null);
  if (!doc) {
    notFound();
  }

  if (doc.externalUrl) {
    return (
      <div className="insights-detail-inner insights-detail-inner--compact">
        <Link href="/insights" className="insights-back-link">
          ← All insights
        </Link>
        <p className="insights-detail-eyebrow">
          {CATEGORY_LABELS[doc.category] ?? doc.category}
        </p>
        <h1 className="insights-detail-title">{doc.title}</h1>
        <p className="insights-detail-lede">
          This item is hosted externally. Continue to read or watch it on the
          linked site.
        </p>
        <a
          href={doc.externalUrl}
          className="insights-detail-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open link
        </a>
      </div>
    );
  }

  const imgUrl = urlForImage(doc.thumbnail);

  return (
    <article>
      <div className="insights-detail-inner">
        <Link href="/insights" className="insights-back-link">
          ← All insights
        </Link>
        <header className="insights-detail-header">
          <p className="insights-detail-eyebrow">
            {CATEGORY_LABELS[doc.category] ?? doc.category}
          </p>
          <h1 className="insights-detail-title insights-detail-title--tight">
            {doc.title}
          </h1>
          <time className="insights-detail-date" dateTime={doc.publishedAt}>
            {formatDate(doc.publishedAt)}
          </time>
        </header>
        {imgUrl ? (
          <div className="insights-detail-image-wrap">
            <Image
              src={imgUrl}
              alt=""
              width={1200}
              height={675}
              className="insights-detail-image"
              priority
              sizes="(max-width: 900px) 100vw, min(1200px, 92vw)"
            />
          </div>
        ) : null}
        {doc.excerpt ? (
          <p className="insights-detail-excerpt">{doc.excerpt}</p>
        ) : null}
        {doc.category === "video" && doc.videoUrl ? (
          <div className="insights-media-wrap">
            <video
              className="insights-media-video"
              controls
              playsInline
              preload="metadata"
              src={doc.videoUrl}
            >
              Your browser does not support embedded video.
            </video>
          </div>
        ) : null}
        {doc.category === "podcast" && doc.audioUrl ? (
          <div className="insights-media-wrap">
            <audio className="insights-media-audio" controls preload="metadata" src={doc.audioUrl}>
              Your browser does not support embedded audio.
            </audio>
          </div>
        ) : null}
        <InsightPortableBody value={doc.body} />
      </div>
    </article>
  );
}
