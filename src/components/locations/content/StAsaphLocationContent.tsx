import React from "react";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function StAsaphLocationContent({ loc, shareUrl }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="mb-6 rounded-lg bg-slate-50 p-4 border border-slate-200 text-slate-800 leading-relaxed"><strong className="text-slate-900">Weight Management in St Asaph:</strong> Navigating the intersection of Wales's public health resources and private clinical services can be daunting. For individuals in St Asaph considering prescription weight loss treatments, comparing online prescribers ensures you find a safe and properly regulated medical provider.</p>
      </div>
      <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />
    </>
  );
}
