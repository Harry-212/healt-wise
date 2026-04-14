import type { Metadata } from "next";
import { GUIDE_IMAGES } from "@/lib/guide-images";
import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { openGraphSizedImageUrl } from "@/lib/seo/open-graph-image-url";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { siteOrigin } from "@/lib/seo/site-origin";
import { stripTitleTemplateSuffix } from "@/lib/seo/strip-title-template-suffix";

export type BuildGuideShareMetadataInput = {
  /** Folder slug under `/helpful-guides/[slug]` */
  slug: string;
  /** Value for `<title>` before root layout `template` appends ` | Health Wise` */
  title: string;
  description: string;
  /** Usually shorter than `title`; used for OG / Twitter */
  openGraphTitle: string;
  /** Defaults to `description` */
  openGraphDescription?: string;
  openGraphType?: "article" | "website";
};

/**
 * Open Graph + Twitter Card using the same hero image as `GuideLayout` (`GUIDE_IMAGES`).
 * Requires `metadataBase` on the root layout.
 */
export function buildGuideShareMetadata(
  input: BuildGuideShareMetadataInput,
): Metadata {
  const origin = siteOrigin();
  const path = helpfulGuidePath(input.slug);
  const canonical = `${origin}${path}`;
  const heroRaw = GUIDE_IMAGES[input.slug] ?? `${origin}${SITE_LOGO_SRC}`;
  const heroUrl = openGraphSizedImageUrl(heroRaw);
  const ogDescription = input.openGraphDescription ?? input.description;

  return {
    title: stripTitleTemplateSuffix(input.title),
    description: input.description,
    alternates: { canonical },
    openGraph: {
      type: input.openGraphType ?? "article",
      url: canonical,
      siteName: "Health Wise",
      locale: "en_GB",
      title: input.openGraphTitle,
      description: ogDescription,
      images: [
        {
          url: heroUrl,
          secureUrl: heroUrl.startsWith("https://") ? heroUrl : undefined,
          alt: input.openGraphTitle,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.openGraphTitle,
      description: ogDescription,
      images: [heroUrl],
    },
  };
}
