import type { Metadata } from "next";
import { siteOrigin } from "./site-origin";

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
  /** `<title>` segment (layout template adds ` | Health Wise`) */
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

  return {
    title: input.title,
    description: input.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Health Wise",
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
