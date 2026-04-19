import type { Metadata } from "next";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { siteOrigin } from "./site-origin";
import { stripTitleTemplateSuffix } from "./strip-title-template-suffix";

/** Encode each path segment so spaces and special chars work in OG/Twitter URLs. */
function encodedSitePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

export type PageShareMetadataInput = {
  /** Path only, e.g. `/what-is-wegovy` */
  canonicalPath: string;
  /** `<title>` segment before layout `template` appends ` | ${SITE_BRAND_NAME}` */
  title: string;
  metaDescription: string;
  /** Often slightly shorter; shown in WhatsApp, Facebook, X previews */
  openGraphTitle: string;
  openGraphDescription?: string;
  /** Public file path, e.g. `/wegovy healt wise.png` */
  imagePath: string;
  imageAlt: string;
};

/**
 * Open Graph + Twitter Card metadata for link previews (title, description, image).
 * Requires `metadataBase` on the root layout (see `layout.tsx`).
 */
export function buildPageShareMetadata(
  input: PageShareMetadataInput,
): Metadata {
  const origin = siteOrigin();
  const path =
    input.canonicalPath.startsWith("/")
      ? input.canonicalPath
      : `/${input.canonicalPath}`;
  const canonical = `${origin}${path}`;
  const ogDescription =
    input.openGraphDescription ?? input.metaDescription;
  const imagePath = encodedSitePath(input.imagePath);
  const documentTitle = stripTitleTemplateSuffix(input.title);

  return {
    title: documentTitle,
    description: input.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_BRAND_NAME,
      locale: "en_GB",
      title: input.openGraphTitle,
      description: ogDescription,
      images: [
        {
          url: imagePath,
          alt: input.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.openGraphTitle,
      description: ogDescription,
      images: [imagePath],
    },
  };
}
