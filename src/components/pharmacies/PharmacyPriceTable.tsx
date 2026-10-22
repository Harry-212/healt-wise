"use client";

import Link from "next/link";
import { MOUNJARO_DOSE_KEYS } from "@/lib/data/mounjaro-uk-compare-providers";
import { formatWegovyPriceCell, WEGOVY_DOSE_KEYS } from "@/lib/data/wegovy-uk-compare-providers";
import { useLiveMounjaroProvider, useLiveWegovyProvider } from "@/lib/data/live-prices-context";
import PriceCheckNotice from "@/components/prices/PriceCheckNotice";

export default function PharmacyPriceTable({
  slug,
  providerName,
}: {
  slug: string;
  providerName: string;
}) {
  const m = useLiveMounjaroProvider(slug);
  const w = useLiveWegovyProvider(slug);

  if (!m && !w) return null;
  const checkedOn = m?.updatedLabel ?? w?.updatedLabel;

  return (
    <section className="my-8 overflow-hidden rounded-xl border border-emerald-900/15 bg-white shadow-sm ring-1 ring-emerald-950/5">
      <div className="border-b border-emerald-900/10 bg-emerald-50/70 px-5 py-4 sm:px-6">
        <h2 className="text-base font-bold text-emerald-950 sm:text-lg">
          {providerName} Prices by Dose
        </h2>
        <PriceCheckNotice lastChecked={checkedOn} className="mt-1 text-xs text-slate-600" />
        <p className="text-xs text-slate-600">Standard pen prices. Includes 4 weekly doses per pen.</p>
      </div>

      <div className="grid divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Mounjaro Column */}
        <div className="p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-bold text-slate-900">Mounjaro (Tirzepatide)</span>
            <Link
              href="/mounjaro-price-comparison"
              className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Compare all 67 →
            </Link>
          </div>
          {m ? (
            <div className="space-y-2">
              {MOUNJARO_DOSE_KEYS.map((dose) => {
                const price = m.prices[dose];
                return (
                  <div
                    key={dose}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3.5 py-2 text-sm"
                  >
                    <span className="font-medium text-slate-700">{dose} pen</span>
                    <span className="font-bold text-slate-900">
                      {price && price > 0 ? `£${price.toFixed(2)}` : "TBC"}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm italic text-slate-500">Mounjaro pricing not listed.</p>
          )}
        </div>

        {/* Wegovy Column */}
        <div className="p-5 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-bold text-slate-900">Wegovy (Semaglutide)</span>
            <Link
              href="/wegovy-price-comparison"
              className="text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Compare all 62 →
            </Link>
          </div>
          {w ? (
            <div className="space-y-2">
              {WEGOVY_DOSE_KEYS.map((dose) => {
                const cell = w.prices[dose];
                const display = formatWegovyPriceCell(cell);
                return (
                  <div
                    key={dose}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/60 px-3.5 py-2 text-sm"
                  >
                    <span className="font-medium text-slate-700">{dose} pen</span>
                    <span className="font-bold text-slate-900">{display}</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm italic text-slate-500">Wegovy pricing not listed.</p>
          )}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50/80 px-5 py-3 text-xs text-slate-600 sm:px-6">
        Prices reflect standard pharmacy rates without single-use discount codes. Always check live stock and consultation fees on the pharmacy&apos;s site before ordering.
      </div>
    </section>
  );
}

