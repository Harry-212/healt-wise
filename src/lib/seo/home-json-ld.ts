import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";

/** Homepage-only structured data: reinforces main entry points (not a sitelink guarantee). */
export function homePageJsonLdGraph(): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");

  const featured = [
    { name: "Compare Wegovy prices UK", path: "/wegovy-price-comparison" },
    { name: "Compare Mounjaro prices UK", path: "/mounjaro-price-comparison" },
    { name: "Compare Saxenda prices UK", path: "/saxenda-price-comparison" },
    { name: "News & blog", path: "/blog" },
    { name: "Helpful guides", path: HELPFUL_GUIDES_HUB_PATH },
  ] as const;

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: `${base}/`,
    name: "Health Wise",
    description:
      "Independent UK comparison for GLP-1 weight loss treatment prices, safety, and pharmacy context.",
    publisher: {
      "@type": "Organization",
      name: "Health Wise",
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
