import "./insights.css";

export const metadata = {
  title: "Insights",
  description:
    "Publications, quick takes, news, videos, podcasts, and webinars from Mears Law.",
  openGraph: {
    title: "Insights | Mears Law",
    description:
      "Publications, quick takes, news, videos, podcasts, and webinars from Mears Law.",
    url: "https://mearslaw.ca/insights",
  },
  alternates: {
    canonical: "https://mearslaw.ca/insights",
  },
};

export default function InsightsLayout({ children }) {
  return <div className="insights-root">{children}</div>;
}
