"use client";

import { useMemo, useState } from "react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import { Star } from "lucide-react";
import { formatGBP, formatUkGroupedInteger } from "@/lib/provider-helpers";
import {
  MOUNJARO_DOSE_COMPARISON,
  MOUNJARO_DOSE_LABEL,
  MOUNJARO_DOSES_ORDER,
  MOUNJARO_PRICE_LAST_UPDATED,
  mounjaroPricePerMg,
  type MounjaroDoseMg,
  type MounjaroProviderRow,
} from "@/lib/data/mounjaro-dose-comparison";

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span
      className="inline-flex items-center gap-0.5 text-amber-500"
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? "fill-current" : "fill-none opacity-30"}`}
        />
      ))}
    </span>
  );
}

function ProviderAvatar({ label }: { label: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-xs font-bold text-white">
      {label}
    </span>
  );
}

function RowCards({
  dose,
  rows,
}: {
  dose: MounjaroDoseMg;
  rows: MounjaroProviderRow[];
}) {
  return (
    <div className="flex flex-col gap-4 md:hidden">
      {rows.map((row) => (
        <div
          key={row.id}
          className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm"
        >
          <div className="flex items-start gap-3">
            <ProviderAvatar label={row.shortLabel} />
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-slate-900">{row.name}</p>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <Stars rating={row.rating} />
                <span>
                  {row.rating.toFixed(1)} (
                  {formatUkGroupedInteger(row.reviewCount)})
                </span>
              </div>
              {row.promo ? (
                <p className="mt-2 text-xs font-medium text-emerald-700">
                  {row.promo}
                </p>
              ) : null}
            </div>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div>
              <dt className="text-slate-500">
                Price ({MOUNJARO_DOSE_LABEL[dose]})
              </dt>
              <dd className="font-semibold text-slate-900">
                {formatGBP(row.priceGbp)}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500">£/mg</dt>
              <dd className="font-medium text-slate-800">
                {formatGBP(mounjaroPricePerMg(row.priceGbp, dose))}/mg
              </dd>
            </div>
            {row.repeatPriceGbp != null ? (
              <div className="col-span-2">
                <dt className="text-slate-500">
                  Repeat / maintenance (if stated)
                </dt>
                <dd className="font-medium text-slate-800">
                  {formatGBP(row.repeatPriceGbp)}
                </dd>
              </div>
            ) : null}
            <div className="col-span-2">
              <dt className="text-slate-500">Delivery</dt>
              <dd>{row.deliveryNote}</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-slate-500">Trust &amp; safety</dt>
              <dd className="flex flex-wrap gap-1">
                {row.coldChain ? (
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs">
                    Cold chain
                  </span>
                ) : null}
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-900">
                  {row.gphcLabel}: {row.gphcNumber ?? "—"}
                </span>
              </dd>
            </div>
          </dl>
          <a
            href={row.offerUrl}
            target="_blank"
            rel={
              row.isAffiliate
                ? "noopener noreferrer sponsored"
                : "noopener noreferrer"
            }
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-brand-cta py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:brightness-95"
          >
            See offer
          </a>
        </div>
      ))}
    </div>
  );
}

function RowTable({
  dose,
  rows,
}: {
  dose: MounjaroDoseMg;
  rows: MounjaroProviderRow[];
}) {
  return (
    <div className="hidden overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm md:block">
      <table className="w-full min-w-[720px] text-left text-sm">
        <thead>
          <tr className="border-b border-brand-border bg-slate-50/90">
            <th className="px-4 py-3 font-semibold text-slate-800">Provider</th>
            <th className="px-4 py-3 font-semibold text-slate-800">
              Price ({MOUNJARO_DOSE_LABEL[dose]})
            </th>
            <th className="px-4 py-3 font-semibold text-slate-800">£/mg</th>
            <th className="px-4 py-3 font-semibold text-slate-800">
              Repeat price
            </th>
            <th className="px-4 py-3 font-semibold text-slate-800">Delivery</th>
            <th className="px-4 py-3 font-semibold text-slate-800">
              Trust &amp; safety
            </th>
            <th className="px-4 py-3 font-semibold text-slate-800">Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 last:border-0"
            >
              <td className="px-4 py-4 align-top">
                <div className="flex items-start gap-3">
                  <ProviderAvatar label={row.shortLabel} />
                  <div>
                    <p className="font-semibold text-slate-900">{row.name}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                      <Stars rating={row.rating} />
                      <span>
                        {row.rating.toFixed(1)} (
                        {formatUkGroupedInteger(row.reviewCount)})
                      </span>
                    </div>
                    {row.promo ? (
                      <p className="mt-1 text-xs font-medium text-emerald-700">
                        {row.promo}
                      </p>
                    ) : null}
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 align-top font-semibold text-slate-900">
                {formatGBP(row.priceGbp)}
              </td>
              <td className="px-4 py-4 align-top text-slate-700">
                {formatGBP(mounjaroPricePerMg(row.priceGbp, dose))}/mg
              </td>
              <td className="px-4 py-4 align-top text-slate-700">
                {row.repeatPriceGbp != null
                  ? formatGBP(row.repeatPriceGbp)
                  : "—"}
              </td>
              <td className="max-w-[200px] px-4 py-4 align-top text-slate-600">
                {row.deliveryNote}
              </td>
              <td className="px-4 py-4 align-top text-xs text-slate-600">
                <div className="flex flex-col gap-1">
                  {row.coldChain ? <span>Cold chain</span> : null}
                  <span>
                    {row.gphcLabel}: {row.gphcNumber ?? "—"}
                  </span>
                  {row.trustFeatures.map((t) => (
                    <span key={t} className="text-emerald-800">
                      {t}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-4 align-top">
                <a
                  href={row.offerUrl}
                  target="_blank"
                  rel={
                    row.isAffiliate
                      ? "noopener noreferrer sponsored"
                      : "noopener noreferrer"
                  }
                  className="inline-flex rounded-lg bg-brand-cta px-3 py-2 text-xs font-bold text-slate-900 hover:brightness-95"
                >
                  See offer
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function MounjaroDoseComparisonTable({
  id = "mounjaro-price-uk",
}: {
  id?: string;
}) {
  const [dose, setDose] = useState<MounjaroDoseMg>("2.5");

  const rows = useMemo(() => MOUNJARO_DOSE_COMPARISON[dose], [dose]);

  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Mounjaro price UK by dose
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Illustrative snapshots — last updated {MOUNJARO_PRICE_LAST_UPDATED}.
            Confirm on the provider site before you pay.
          </p>
        </div>
        <p className="text-xs text-slate-500">
          Private UK pricing often rises with pen strength; always compare
          monthly all-in costs including consultation and delivery.
        </p>
      </div>

      <div className="mb-6">
        <p className="mb-2 text-sm font-medium text-slate-700">Select dose</p>
        <div
          className="flex flex-wrap gap-2"
          role="tablist"
          aria-label="Mounjaro dose"
        >
          {MOUNJARO_DOSES_ORDER.map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={dose === d}
              onClick={() => setDose(d)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                dose === d
                  ? "border-violet-600 bg-violet-50 text-violet-900 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {MOUNJARO_DOSE_LABEL[d]}
            </button>
          ))}
        </div>
      </div>

      <RowTable dose={dose} rows={rows} />
      <RowCards dose={dose} rows={rows} />

      <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
        <CompareHereLink href="/mounjaro-price-comparison" />
      </div>
    </section>
  );
}
