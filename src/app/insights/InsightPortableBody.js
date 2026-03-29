import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlForImage } from "../../lib/sanity";

export default function InsightPortableBody({ value }) {
  if (!value?.length) return null;

  const components = {
    block: {
      normal: ({ children }) => (
        <p className="insights-body-p">{children}</p>
      ),
      h2: ({ children }) => (
        <h2 className="insights-body-h2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="insights-body-h3">{children}</h3>
      ),
      blockquote: ({ children }) => (
        <blockquote className="insights-body-quote">{children}</blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="insights-body-ul">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="insights-body-ol">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="insights-body-li">{children}</li>
      ),
      number: ({ children }) => (
        <li className="insights-body-li">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, value }) => {
        const href = value?.href;
        if (!href) return <span>{children}</span>;
        const external = /^https?:\/\//i.test(href);
        return (
          <a
            href={href}
            className="insights-body-a"
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const src = urlForImage(value);
        if (!src) return null;
        return (
          <figure className="insights-body-figure">
            <Image
              src={src}
              alt={value.alt || ""}
              width={1100}
              height={619}
              className="insights-body-inline-img"
              sizes="(max-width: 900px) 100vw, min(720px, 92vw)"
            />
          </figure>
        );
      },
    },
  };

  return (
    <div className="insights-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
