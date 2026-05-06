import React from "react";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function PortsmouthLocationContent({ loc, shareUrl }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="mb-6 rounded-lg bg-blue-50/50 p-4 border border-blue-100 text-slate-800 leading-relaxed"><strong className="text-blue-900">Local Guide for Portsmouth:</strong> The landscape for medical weight loss in Portsmouth is constantly evolving. From new injectable therapies like Wegovy to established oral options, residents of Portsmouth now have multiple registered online pharmacies that provide secure, discreet delivery directly to their doorsteps.</p>
      </div>
      <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />
    </>
  );
}
