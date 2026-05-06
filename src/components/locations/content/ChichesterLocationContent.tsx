import React from "react";
import UkLocationArticleClient from "@/components/blog/UkLocationArticleClient";
import type { UkWeightLossLocation } from "@/lib/data/uk-weight-loss-locations";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

export default function ChichesterLocationContent({ loc, shareUrl }: Props) {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <p className="mb-6 rounded-lg bg-emerald-50/50 p-4 border border-emerald-100 text-slate-800 leading-relaxed"><strong className="text-emerald-900">Health Hub Chichester:</strong> Exploring weight loss options in Chichester requires balancing local NHS wait times with private online pathways. Whether you reside near the city centre or further out in England, understanding the specific treatments available can help you take the right first step toward managing your health.</p>
      </div>
      <UkLocationArticleClient loc={loc} shareUrl={shareUrl} />
    </>
  );
}
