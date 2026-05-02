import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

function isoDateForSchema(raw: string): string | undefined {
  const t = raw.trim();
  if (!t) return undefined;
  if (/^\d{4}-\d{2}-\d{2}$/.test(t)) return t;
  const d = new Date(t);
  if (!Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  return undefined;
}

function absoluteUrl(pathOrUrl: string): string {
  const base = siteOrigin().replace(/\/$/, "");
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

/** JSON-LD for Markdown-backed `/blog/[slug]` posts (feed / AI citation). */
export function markdownBlogPostingJsonLd(opts: {
  slug: string;
  title: string;
  description: string;
  datePublishedRaw: string;
  heroImage?: string;
}): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}/blog/${opts.slug}`;
  const datePublished = isoDateForSchema(opts.datePublishedRaw);

  const graph: Record<string, unknown> = {
    "@type": "BlogPosting",
    "@id": `${url}#blogPosting`,
    headline: opts.title,
    description: opts.description,
    author: { "@type": "Organization", name: SITE_BRAND_NAME },
    publisher: {
      "@type": "Organization",
      name: SITE_BRAND_NAME,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    isAccessibleForFree: true,
    inLanguage: "en-GB",
  };

  if (datePublished) {
    graph.datePublished = datePublished;
    graph.dateModified = datePublished;
  }

  if (opts.heroImage) {
    graph.image = {
      "@type": "ImageObject",
      url: absoluteUrl(opts.heroImage),
    };
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      graph,
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${base}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: opts.title,
            item: url,
          },
        ],
      },
    ],
  };
}
