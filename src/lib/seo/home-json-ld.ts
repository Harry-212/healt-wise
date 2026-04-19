import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { siteOrigin } from "@/lib/seo/site-origin";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

/** Homepage-only structured data: reinforces main entry points (not a sitelink guarantee). */
export function homePageJsonLdGraph(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");

  const featured = [
    { name: "Compare weight loss treatments (UK)", path: HOME_COMPARE_HUB_HREF },
    { name: "News and blog", path: "/blog" },
    { name: "Helpful guides", path: HELPFUL_GUIDES_HUB_PATH },
  ] as const;

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: `${base}/`,
    name: SITE_BRAND_NAME,
    description:
      "Independent UK comparison for weight loss treatment prices, safety, and pharmacy context.",
    publisher: {
      "@type": "Organization",
      name: SITE_BRAND_NAME,
      url: base,
    },
  };

  const itemList: Record<string, unknown> = {
    "@type": "ItemList",
    "@id": `${base}/#featured-pages`,
    name: "Featured pages",
    numberOfItems: featured.length,
    itemListElement: featured.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: `${base}${entry.path}`,
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, itemList],
  };
}
