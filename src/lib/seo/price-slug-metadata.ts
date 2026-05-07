import type { Metadata } from "next";
import { PRICE_SLUGS } from "@/lib/routes/price-slugs";
import { buildSeoMetadata } from "@/lib/seo/metadata";
import { siteOrigin } from "@/lib/seo/site-origin";

/** Per-slug SEO for `/prices/[slug]` — avoids one global template for every price page. */
export function metadataForPriceSlug(slug: string): Metadata | null {
  const cfg = PRICE_SLUGS[slug];
  if (!cfg) return null;

  if (cfg.seo) {
    const url = `${siteOrigin()}/prices/${slug}`;
    const ogTitle = cfg.seo.openGraphTitle ?? cfg.seo.title;
    const ogDesc =
      cfg.seo.openGraphDescription ?? cfg.seo.description;
    return {
      title: cfg.seo.title,
      description: cfg.seo.description,
      keywords: cfg.seo.keywords,
      alternates: { canonical: url },
      openGraph: {
        type: "article",
        url,
        title: ogTitle,
        description: ogDesc,
        siteName: "Health Wise",
      },
      twitter: {
        card: "summary_large_image",
        title: ogTitle,
        description: ogDesc,
      },
      robots: { index: true, follow: true },
    };
  }

  return buildSeoMetadata(cfg.keyword, `/prices/${slug}`);
}
