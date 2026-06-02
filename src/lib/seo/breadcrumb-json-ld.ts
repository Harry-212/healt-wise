import { siteOrigin } from "@/lib/seo/site-origin";

export type BreadcrumbJsonLdItem = {
  name: string;
  item: string;
};

function absoluteUrl(pathOrUrl: string): string {
  const base = siteOrigin().replace(/\/$/, "");
  const value = pathOrUrl.trim();

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value === "" || value === "/") {
    return `${base}/`;
  }

  const path = value.startsWith("/") ? value : `/${value}`;
  return `${base}${path.replace(/\/$/, "")}`;
}

export function breadcrumbListJsonLd(
  items: readonly BreadcrumbJsonLdItem[],
  opts: { id?: string; includeContext?: boolean } = {},
): Record<string, unknown> {
  return {
    ...(opts.includeContext === false
      ? {}
      : { "@context": "https://schema.org" }),
    "@type": "BreadcrumbList",
    ...(opts.id ? { "@id": opts.id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.item),
    })),
  };
}

export function pageBreadcrumbJsonLd(opts: {
  sectionName: string;
  sectionPath: string;
  pageName: string;
  pagePath: string;
  id?: string;
  includeContext?: boolean;
}): Record<string, unknown> {
  return breadcrumbListJsonLd([
    { name: "Home", item: "/" },
    { name: opts.sectionName, item: opts.sectionPath },
    { name: opts.pageName, item: opts.pagePath },
  ], { id: opts.id, includeContext: opts.includeContext });
}
