import React from "react";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function DerbyLocationContent({ loc, shareUrl }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="mb-6 rounded-lg bg-indigo-50/50 p-4 border border-indigo-100 text-slate-800 leading-relaxed"><strong className="text-indigo-900">Derby Care Insight:</strong> As awareness of treatments like Mounjaro and Saxenda grows across England, residents in Derby are increasingly turning to digital healthcare solutions. We have compiled this independent guide to highlight what to look for when choosing a reliable provider serving the Derby area.</p>
      </div>
      <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />
    </>
  );
}
