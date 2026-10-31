import { siteOrigin } from "@/lib/seo/site-origin";

const FAQ_BASE = "https://schema.org";

function siteId(): string {
  return `${siteOrigin()}/#website`;
}

function breadcrumbList(
  path: string,
  items: { name: string; item: string }[],
) {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": `${siteOrigin()}${path}#breadcrumb`,
    itemListElement: items.map((b, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: b.name,
      item: b.item,
    })),
  };
}

const DEFAULT_CRUMB: { name: string; path: string } = {
  name: "UK price comparisons",
  path: "/prices/cheapest-options-uk",
};

type PharmacyProfileJsonInput = {
  slug: string;
  name: string;
  title: string;
  description: string;
};

/**
 * WebSite, WebPage, BreadcrumbList — for default pharmacy profile pages (no on-page FAQ).
 */
export function pharmacyProfileJsonGraph(
  input: PharmacyProfileJsonInput,
): Record<string, unknown> {
  const origin = siteOrigin();
  const path = `/pharmacies/${input.slug}`;
  const url = `${origin}${path}`;

  return {
    "@context": FAQ_BASE,
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: input.title,
        description: input.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": siteId() },
      },
      breadcrumbList(path, [
        { name: "Home", item: origin },
        { name: DEFAULT_CRUMB.name, item: `${origin}${DEFAULT_CRUMB.path}` },
        { name: input.name, item: url },
      ]),
    ],
  };
}
