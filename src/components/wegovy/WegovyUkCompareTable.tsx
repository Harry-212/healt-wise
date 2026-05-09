"use client";

import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import { Building2, CalendarClock, ChevronDown, ChevronUp } from "lucide-react";
import ProviderGphcLine from "@/components/compare/ProviderGphcLine";
import {
  TrustpilotColumnHeaderContent,
  TrustpilotStarIcon,
} from "@/components/compare/TrustpilotRatingPresentation";
import CompareFilterBar, {
  type CompareSortPreset,
} from "@/components/compare/CompareFilterBar";
import {
  pharmacyProfileHref,
  startingPrice,
  WEGOVY_DOSE_KEYS,
  type WegovyDoseColumnKey,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";
import { trustpilotHrefForProvider } from "@/lib/seo/trustpilot-link";
import { useTodayLabel } from "@/lib/hooks/useTodayLabel";

type DoseFilter = "all" | WegovyDoseColumnKey;

function doseHeaderLabel(key: WegovyDoseColumnKey): string {
  return key.replace("mg", " mg");
}

function formatGBP(n: number) {
  return `£${Number.isInteger(n) ? n : n.toFixed(2)}`;
}

export default function WegovyUkCompareTable({
  providers,
}: {
  providers: WegovyUkProviderCompare[];
}) {
  const [providerQuery, setProviderQuery] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [minRating, setMinRating] = useState("");
  const [deliveryFilter, setDeliveryFilter] = useState<
    "all" | "free" | "paid" | "collect"
  >("all");
  const [doseFilter, setDoseFilter] = useState<DoseFilter>("all");
  const [sortPreset, setSortPreset] = useState<CompareSortPreset>("provider-asc");
  const [moreFiltersOpen, setMoreFiltersOpen] = useState(false);

  const todayLabel = useTodayLabel();

  const visibleDoseKeys = useMemo<WegovyDoseColumnKey[]>(
    () =>
      doseFilter === "all" ? [...WEGOVY_DOSE_KEYS] : [doseFilter],
    [doseFilter],
  );

  const processed = useMemo(() => {
    const minP = priceMin.trim() === "" ? null : Number.parseFloat(priceMin);
    const maxP = priceMax.trim() === "" ? null : Number.parseFloat(priceMax);
    const minR = minRating.trim() === "" ? null : Number.parseFloat(minRating);
    const q = providerQuery.trim().toLowerCase();

    let rows = providers.filter((p) => {
      const start = startingPrice(p);
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (minP !== null && !Number.isNaN(minP) && start < minP) return false;
      if (maxP !== null && !Number.isNaN(maxP) && start > maxP) return false;
      if (minR !== null && !Number.isNaN(minR) && p.rating < minR) return false;
      const d = p.deliveryNote.toLowerCase();
      if (deliveryFilter === "free" && !d.includes("free")) return false;
      if (deliveryFilter === "paid" && !d.includes("inc £")) return false;
      if (deliveryFilter === "collect" && !d.includes("collect")) return false;
      return true;
    });

    const dir = sortPreset === "price-desc" ? -1 : 1;
    const priceFor = (p: WegovyUkProviderCompare) =>
      doseFilter === "all" ? startingPrice(p) : p.prices[doseFilter];

    rows = [...rows].sort((a, b) => {
      switch (sortPreset) {
        case "price-asc":
        case "price-desc":
          return (priceFor(a) - priceFor(b)) * dir;
        case "rating-desc":
          return b.rating - a.rating;
        case "provider-asc":
          return a.name.localeCompare(b.name);
      }
    });

    const minStart =
      rows.length > 0 ? Math.min(...rows.map((r) => priceFor(r))) : null;

    const doseMins: Partial<Record<WegovyDoseColumnKey, number>> = {};
    for (const k of visibleDoseKeys) {
      if (rows.length > 0) {
        doseMins[k] = Math.min(...rows.map((r) => r.prices[k]));
      }
    }

    return { rows, minStart, doseMins };
  }, [
    providers,
    providerQuery,
    priceMin,
    priceMax,
    minRating,
    deliveryFilter,
    doseFilter,
    sortPreset,
    visibleDoseKeys,
  ]);

  const insights = useMemo(() => {
    const { rows } = processed;
    return { count: rows.length };
  }, [processed]);

  const dosePills = useMemo(
    () => [
      { value: "all" as DoseFilter, label: "All doses" },
      ...WEGOVY_DOSE_KEYS.map((k) => ({
        value: k as DoseFilter,
        label: doseHeaderLabel(k),
      })),
    ],
    [],
  );

  const colCount = 1 + visibleDoseKeys.length + 2;

  const providerThClass =
    "sticky left-0 z-50 min-w-[13rem] max-w-[14rem] border-b border-r border-slate-200/90 bg-slate-50 px-3 py-3 pl-4 shadow-[4px_0_12px_-8px_rgba(15,23,42,0.15)]";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-200/70 bg-linear-to-r from-emerald-100/80 via-emerald-50/70 to-white px-4 py-3 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-[0_6px_18px_-6px_rgba(5,150,105,0.5)]">
          <Building2 className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-2xl font-bold tabular-nums text-emerald-900 sm:text-[28px]">
            {insights.count}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide text-emerald-700/80">
            UK pharmacies matching your filters
          </span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm ring-1 ring-emerald-200/70">
          <CalendarClock className="h-3.5 w-3.5" aria-hidden />
          Last updated today{todayLabel ? `: ${todayLabel}` : ""}
        </span>
      </div>

      <CompareFilterBar
        accent="emerald"
        pillsLabel="Doses"
        pills={dosePills}
        selectedPill={doseFilter}
        onSelectPill={(v) => setDoseFilter(v)}
        sort={sortPreset}
        onSortChange={setSortPreset}
      />

      <div className="rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setMoreFiltersOpen((v) => !v)}
          aria-expanded={moreFiltersOpen}
          className="flex w-full items-center justify-between gap-2 rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          <span className="inline-flex items-center gap-2">
            More filters
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-600">
              search · price · rating · delivery
            </span>
          </span>
          {moreFiltersOpen ? (
            <ChevronUp className="h-4 w-4 text-slate-500" aria-hidden />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-500" aria-hidden />
          )}
        </button>
        {moreFiltersOpen ? (
          <div className="grid gap-3 border-t border-slate-200/80 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Provider name
              <input
                type="search"
                placeholder="Search…"
                value={providerQuery}
                onChange={(e) =>
                  startTransition(() => setProviderQuery(e.target.value))
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Min £ (from)
              <input
                type="number"
                min={0}
                step={1}
                placeholder="Any"
                value={priceMin}
                onChange={(e) =>
                  startTransition(() => setPriceMin(e.target.value))
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Max £ (from)
              <input
                type="number"
                min={0}
                step={1}
                placeholder="Any"
                value={priceMax}
                onChange={(e) =>
                  startTransition(() => setPriceMax(e.target.value))
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Min Trustpilot
              <select
                value={minRating}
                onChange={(e) =>
                  startTransition(() => setMinRating(e.target.value))
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              >
                <option value="">Any</option>
                <option value="4.9">4.9+</option>
                <option value="4.8">4.8+</option>
                <option value="4.7">4.7+</option>
                <option value="4.6">4.6+</option>
                <option value="4.5">4.5+</option>
                <option value="4.4">4.4+</option>
                <option value="4.3">4.3+</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Delivery
              <select
                value={deliveryFilter}
                onChange={(e) =>
                  startTransition(() =>
                    setDeliveryFilter(e.target.value as typeof deliveryFilter),
                  )
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              >
                <option value="all">All</option>
                <option value="free">Free delivery</option>
                <option value="paid">Inc. delivery fee</option>
                <option value="collect">Collect / in-store</option>
              </select>
            </label>
          </div>
        ) : null}
      </div>

      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-xs text-slate-600">
        <span className="font-semibold text-slate-800">Safety</span>
        <span>
          Private Wegovy routes use an online consultation; confirm the
          supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-teal-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>{" "}
          before you pay.
        </span>
        <Link
          href="/pharmacy-safety-gphc-verification"
          className="font-semibold text-teal-800 underline-offset-2 hover:underline"
        >
          Verification guide
        </Link>
      </p>

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <p className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500 md:hidden">
          Scroll sideways — provider column stays fixed.
        </p>
        <div className="max-h-[min(78vh,800px)] min-h-0 overflow-auto overscroll-contain [overflow-anchor:none]">
          <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-20">
              <tr className="text-slate-600">
                <th
                  scope="col"
                  className={`${providerThClass} z-40 align-bottom`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Provider
                  </span>
                </th>
                {visibleDoseKeys.map((k) => (
                  <th
                    key={k}
                    scope="col"
                    title={`Wegovy ${doseHeaderLabel(k)} pen (illustrative)`}
                    className="w-[4.25rem] min-w-[4.25rem] max-w-[4.25rem] border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-center text-xs font-semibold uppercase tracking-wide text-slate-700"
                  >
                    {doseHeaderLabel(k)}
                  </th>
                ))}
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  <TrustpilotColumnHeaderContent />
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Updated
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-800">
              {processed.rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={colCount}
                    className="px-4 py-12 text-center text-slate-500"
                  >
                    No providers match your filters — try widening price or
                    Trustpilot score.
                  </td>
                </tr>
              ) : (
                processed.rows.map((p) => {
                  const start =
                    doseFilter === "all"
                      ? startingPrice(p)
                      : p.prices[doseFilter];
                  const isLowestRow =
                    processed.minStart != null && start === processed.minStart;
                  const profile = pharmacyProfileHref(p.id);
                  const linkProfile = p.linkProfilePage !== false;
                  const tpHref = trustpilotHrefForProvider(
                    p.name,
                    p.trustpilotUrl,
                  );

                  const stickyProviderBg = isLowestRow
                    ? "bg-emerald-50/90 group-hover:bg-emerald-50"
                    : "bg-white group-hover:bg-slate-50/90";

                  return (
                    <tr
                      key={p.id}
                      className={`group border-b border-slate-100/90 last:border-0 ${
                        isLowestRow ? "bg-emerald-50/40" : ""
                      }`}
                    >
                      <td
                        className={`sticky left-0 z-10 border-r border-slate-200/80 px-3 py-2.5 pl-4 align-top shadow-[4px_0_12px_-8px_rgba(15,23,42,0.12)] ${stickyProviderBg}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {linkProfile ? (
                            <Link
                              href={profile}
                              className="font-semibold text-teal-800 underline decoration-teal-300/70 underline-offset-2 transition hover:text-teal-950 hover:decoration-teal-600"
                            >
                              {p.name}
                            </Link>
                          ) : (
                            <span className="font-semibold text-slate-900">
                              {p.name}
                            </span>
                          )}
                          <ProviderGphcLine
                            providerId={p.id}
                            gphcRegNo={p.gphcRegNo}
                          />
                          {p.headlineFrom !== start && (
                            <span className="text-[11px] leading-snug text-slate-500">
                              Headline ~{formatGBP(p.headlineFrom)}
                            </span>
                          )}
                          <div className="flex flex-wrap gap-1">
                            {isLowestRow && (
                              <span className="inline-flex items-center rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                Lowest from
                              </span>
                            )}
                            {p.badges?.includes("bestValue") && (
                              <span className="inline-flex items-center rounded-full bg-teal-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-teal-900">
                                Best value
                              </span>
                            )}
                            {p.badges?.includes("mostPopular") && (
                              <span className="inline-flex items-center rounded-full bg-slate-200/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-800">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      {visibleDoseKeys.map((k) => {
                        const v = p.prices[k];
                        const isColMin =
                          processed.doseMins[k] != null &&
                          v === processed.doseMins[k];
                        return (
                          <td
                            key={k}
                            className={`border-b border-slate-100/90 px-1 py-2.5 text-center align-middle text-xs tabular-nums sm:text-sm ${
                              isColMin
                                ? "bg-emerald-100/50 font-semibold text-emerald-950"
                                : ""
                            }`}
                          >
                            {formatGBP(v)}
                          </td>
                        );
                      })}
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-middle tabular-nums font-medium text-slate-900">
                        <a
                          href={tpHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-teal-800 underline decoration-teal-300/70 underline-offset-2 transition hover:text-teal-950 hover:decoration-teal-600"
                        >
                          <TrustpilotStarIcon className="h-4 w-4 shrink-0" />
                          {p.rating.toFixed(1)}
                          <span className="sr-only">
                            Trustpilot (opens in a new tab)
                          </span>
                        </a>
                      </td>
                      <td className="border-b border-slate-100/90 px-3 py-2.5 align-middle text-xs text-slate-600">
                        {todayLabel ?? p.updatedLabel}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500">
        Green cells = lowest listed price for that strength in your current
        filter. Row tint = lowest starting pen (min across visible strengths).
      </p>
    </div>
  );
}
