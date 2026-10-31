import React from "react";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";

import LondonLocationContent from "@/components/locations/content/LondonLocationContent";

type Props = {
  slug: string;
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function LocationContentRenderer({ slug, loc, shareUrl }: Props) {
  if (slug === "london") return <LondonLocationContent loc={loc} shareUrl={shareUrl} />;

  // Fallback if not found
  return <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />;
}
