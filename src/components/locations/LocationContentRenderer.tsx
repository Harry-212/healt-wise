import React from "react";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";

import LondonLocationContent from "@/components/locations/content/LondonLocationContent";
import { getMounjaroCompareProviders, getWegovyCompareProviders } from "@/lib/data/compare-live";

type Props = {
  slug: string;
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function LocationContentRenderer({ slug, loc, shareUrl }: Props) {
  if (slug === "london") {
    // Live prices from the central store, so admin price updates reach this page.
    return (
      <LondonLocationContent
        loc={loc}
        shareUrl={shareUrl}
        mounjaroProviders={getMounjaroCompareProviders()}
        wegovyProviders={getWegovyCompareProviders()}
      />
    );
  }

  // Fallback if not found
  return <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />;
}
