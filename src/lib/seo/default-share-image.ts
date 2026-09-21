import type { Metadata } from "next";
import {
  SITE_SHARE_IMAGE_ALT,
  SITE_SHARE_IMAGE_HEIGHT,
  SITE_SHARE_IMAGE_SRC,
  SITE_SHARE_IMAGE_WIDTH,
} from "@/lib/site-assets";

/**
 * Next.js merges route metadata shallowly, so a page that declares its own
 * `openGraph` / `twitter` object drops the share image (and Twitter card
 * type) set on the root layout. Wrap page metadata with this helper so those
 * pages keep the default 1200x630 share card unless they set their own.
 */
export function withDefaultShareImage(metadata: Metadata): Metadata {
  const { openGraph, twitter } = metadata;
  const next: Metadata = { ...metadata };

  if (openGraph) {
    next.openGraph = {
      ...openGraph,
      images: openGraph.images ?? [
        {
          url: SITE_SHARE_IMAGE_SRC,
          width: SITE_SHARE_IMAGE_WIDTH,
          height: SITE_SHARE_IMAGE_HEIGHT,
          alt: SITE_SHARE_IMAGE_ALT,
        },
      ],
    };
  }

  if (twitter) {
    next.twitter = {
      card: "summary_large_image",
      ...twitter,
      images: twitter.images ?? [SITE_SHARE_IMAGE_SRC],
    };
  }

  return next;
}
