import React from "react";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function EdinburghLocationContent({ loc, shareUrl }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="mb-6 rounded-lg bg-amber-50/30 p-4 border border-amber-100 text-slate-800 leading-relaxed"><strong className="text-amber-900">Choosing a Provider in Edinburgh:</strong> Not all online clinics are created equal. If you live in Edinburgh and are looking into medically supported weight loss, it is vital to verify that the pharmacy is fully registered and capable of maintaining cold-chain delivery protocols to Edinburgh.</p>
      </div>
      <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />
    </>
  );
}
