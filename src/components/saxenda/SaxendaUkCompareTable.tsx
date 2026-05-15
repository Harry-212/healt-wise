"use client";

import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import {
  Building2,
  CalendarClock,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Snowflake,
} from "lucide-react";
import ProviderGphcLine from "@/components/compare/ProviderGphcLine";
import {
  GphcColumnHeaderContent,
  TrustpilotColumnHeaderContent,
  TrustpilotStarIcon,
} from "@/components/compare/TrustpilotRatingPresentation";
import CompareFilterBar, {
  type CompareSortPreset,
} from "@/components/compare/CompareFilterBar";
import {
  minPackPriceForSize,
  SAXENDA_PACK_KEYS,
  type SaxendaPackKey,
  type SaxendaUkProviderCompare,
} from "@/lib/data/saxenda-uk-compare-providers";
import { pharmacyProfileHref } from "@/lib/data/wegovy-uk-compare-providers";
import { formatUkGroupedInteger } from "@/lib/provider-helpers";
import { useTodayLabel } from "@/lib/hooks/useTodayLabel";
import { COMPARE_TABLE_MOBILE_OUTDENT_CLASS } from "@/lib/ui/compare-table-mobile-bleed";

type PackFilter = "all" | SaxendaPackKey;

type SaxendaTableSort =
  | { key: "composite"; dir: "asc" | "desc" }
  | { key: "pack"; pack: SaxendaPackKey; dir: "asc" | "desc" }
  | { key: "rating"; dir: "asc" | "desc" }
  | { key: "provider"; dir: "asc" | "desc" };

function saxendaSortToPreset(s: SaxendaTableSort): CompareSortPreset {
  switch (s.key) {
    case "composite":
    case "pack":
      return s.dir === "asc" ? "price-asc" : "price-desc";
    case "rating":
      return s.dir === "desc" ? "rating-desc" : "rating-asc";
    case "provider":
      return s.dir === "asc" ? "provider-asc" : "provider-desc";
  }
}

function presetToSaxendaSort(v: CompareSortPreset): SaxendaTableSort {
  switch (v) {
    case "price-asc":
      return { key: "composite", dir: "asc" };
    case "price-desc":
      return { key: "composite", dir: "desc" };
    case "rating-desc":
      return { key: "rating", dir: "desc" };
    case "rating-asc":
      return { key: "rating", dir: "asc" };
    case "provider-asc":
      return { key: "provider", dir: "asc" };
    case "provider-desc":
      return { key: "provider", dir: "desc" };
  }
}

const PACK_HEADER: Record<SaxendaPackKey, string> = {
  "1": "1 pen",
  "3": "3 pens",
  "5": "5 pens",
};

function formatGBP(n: number) {
  return `£${n.toFixed(2)}`;
}

function providerInitial(name: string): string {
  const t = name.trim();
  return t ? t[0]!.toUpperCase() : "?";
}

function PackPriceCell({
  packKey,
  p,
  isColMin,
}: {
  packKey: SaxendaPackKey;
  p: SaxendaUkProviderCompare;
  isColMin: boolean;
}) {
  const row = p.packs[packKey];
  return (
    <td
      className={`border-b border-slate-100/90 px-2 py-2.5 align-middle tabular-nums sm:px-2.5 lg:px-3 xl:px-4 ${
        isColMin
          ? "bg-sky-100/60 font-semibold text-sky-950"
          : "text-slate-900"
      }`}
    >
      <div className="flex flex-col gap-0.5">
        <span>{formatGBP(row.packPrice)}</span>
        <span className="text-[11px] font-medium text-slate-500">
          £{row.pricePerMg.toFixed(2)}/mg
        </span>
      </div>
    </td>
  );
}

export default function SaxendaUkCompareTable({
  providers,
}: {
  providers: SaxendaUkProviderCompare[];
}) {
  const [providerQuery, setProviderQuery] = useState("");
  const [minRating, setMinRating] = useState("");
  const [packFilter, setPackFilter] = useState<PackFilter>("all");
  const [tableSort, setTableSort] = useState<SaxendaTableSort>({
    key: "provider",
    dir: "asc",
  });

  const todayLabel = useTodayLabel();

  const visiblePackKeys = useMemo<SaxendaPackKey[]>(
    () =>
      packFilter === "all" ? [...SAXENDA_PACK_KEYS] : [packFilter],
    [packFilter],
  );

  const processed = useMemo(() => {
    const minR = minRating.trim() === "" ? null : Number.parseFloat(minRating);
    const q = providerQuery.trim().toLowerCase();

    let rows = providers.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (minR !== null && !Number.isNaN(minR) && p.rating < minR) return false;
      return true;
    });

    const priceForComposite = (p: SaxendaUkProviderCompare) =>
      packFilter === "all"
        ? p.packs["1"].packPrice
        : p.packs[packFilter].packPrice;

    rows = [...rows].sort((a, b) => {
      switch (tableSort.key) {
        case "provider":
          return tableSort.dir === "asc"
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        case "rating":
          return tableSort.dir === "desc"
            ? b.rating - a.rating
            : a.rating - b.rating;
        case "pack":
          return (
            (a.packs[tableSort.pack].packPrice -
              b.packs[tableSort.pack].packPrice) *
            (tableSort.dir === "asc" ? 1 : -1)
          );
        case "composite":
          return (
            (priceForComposite(a) - priceForComposite(b)) *
            (tableSort.dir === "asc" ? 1 : -1)
          );
      }
    });

    const packMins: Partial<Record<SaxendaPackKey, number>> = {};
    for (const k of visiblePackKeys) {
      if (rows.length > 0) {
        packMins[k] = minPackPriceForSize(rows, k);
      }
    }

    const minRowPrice =
      rows.length > 0
        ? Math.min(...rows.map((r) => priceForComposite(r)))
        : null;

    return { rows, packMins, minRowPrice };
  }, [providers, providerQuery, minRating, packFilter, tableSort, visiblePackKeys]);

  const insights = useMemo(() => {
    const { rows } = processed;
    return { count: rows.length };
  }, [processed]);

  const packPills = useMemo(
    () => [
      { value: "all" as PackFilter, label: "All packs" },
      ...SAXENDA_PACK_KEYS.map((k) => ({
        value: k as PackFilter,
        label: PACK_HEADER[k],
      })),
    ],
    [],
  );

  const providerThClass =
    "sticky left-0 z-50 w-[10rem] sm:w-[14rem] border-b border-r border-slate-200/90 bg-slate-50 px-2 py-3 pl-3 sm:px-3 sm:pl-4 shadow-[4px_0_12px_-8px_rgba(15,23,42,0.15)]";

  // Provider + Trustpilot + GPhC + packs + Delivery + Trust&safety + Action + Updated
  const colCount = 1 + 1 + 1 + visiblePackKeys.length + 3 + 1;

  const basePack = (p: SaxendaUkProviderCompare) => p.packs["1"];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-sky-200/70 bg-linear-to-r from-sky-100/80 via-sky-50/70 to-white px-4 py-3 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white shadow-[0_6px_18px_-6px_rgba(2,132,199,0.5)]">
          <Building2 className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-2xl font-bold tabular-nums text-sky-900 sm:text-[28px]">
            {insights.count}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide text-sky-700/80">
            UK pharmacies matching your filters
          </span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-sky-800 shadow-sm ring-1 ring-sky-200/70">
          <CalendarClock className="h-3.5 w-3.5" aria-hidden />
          Last updated today{todayLabel ? `: ${todayLabel}` : ""}
        </span>
      </div>

      <CompareFilterBar
        accent="sky"
        pillsLabel="Pack size"
        pills={packPills}
        selectedPill={packFilter}
        onSelectPill={(v) => setPackFilter(v)}
        sort={saxendaSortToPreset(tableSort)}
        onSortChange={(v) => setTableSort(presetToSaxendaSort(v))}
        pillRegionTop={
          <>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Provider
              <input
                type="search"
                placeholder="Search by name…"
                value={providerQuery}
                onChange={(e) =>
                  startTransition(() => setProviderQuery(e.target.value))
                }
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
              Trustpilot review (min.)
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
          </>
        }
      />

      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-xs text-slate-600">
        <span className="font-semibold text-slate-800">Safety</span>
        <span>
          Confirm the supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>
          .
        </span>
        <Link
          href="/pharmacy-safety-gphc-verification"
          className="font-semibold text-sky-800 underline-offset-2 hover:underline"
        >
          Verification guide
        </Link>
      </p>

      <div className={COMPARE_TABLE_MOBILE_OUTDENT_CLASS}>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm max-lg:rounded-none max-lg:border-x-0">
          <p className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500 md:hidden">
            Scroll sideways on small screens.
          </p>
          <div className="max-lg:max-h-none max-lg:min-h-0 max-lg:w-full max-lg:min-w-0 max-lg:overflow-x-auto max-lg:overflow-y-visible max-lg:overscroll-x-none max-lg:touch-pan-x lg:max-h-[min(78vh,640px)] lg:overflow-auto lg:overscroll-contain min-h-0 w-full min-w-0 [overflow-anchor:none]">
          <table className="w-full min-w-max table-auto border-collapse text-left text-sm">
            <thead className="sticky top-0 z-20">
              <tr className="text-slate-600">
                <th
                  scope="col"
                  className={`${providerThClass} z-40 align-bottom`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setTableSort((prev) =>
                        prev.key === "provider"
                          ? {
                              key: "provider",
                              dir: prev.dir === "asc" ? "desc" : "asc",
                            }
                          : { key: "provider", dir: "asc" },
                      )
                    }
                    className="flex w-full items-center justify-between gap-1 rounded-lg px-0.5 py-1 text-left text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100/90"
                  >
                    Provider
                    {tableSort.key === "provider" ? (
                      tableSort.dir === "asc" ? (
                        <ChevronUp
                          className="h-3.5 w-3.5 shrink-0 text-sky-700"
                          aria-hidden
                        />
                      ) : (
                        <ChevronDown
                          className="h-3.5 w-3.5 shrink-0 text-sky-700"
                          aria-hidden
                        />
                      )
                    ) : (
                      <ChevronsUpDown
                        className="h-3.5 w-3.5 shrink-0 text-slate-400"
                        aria-hidden
                      />
                    )}
                  </button>
                </th>
                <th
                  scope="col"
                  className="min-w-[4.5rem] w-[5rem] border-b border-slate-200/90 bg-slate-50 px-1 py-2 align-bottom text-slate-700 sm:w-[6rem] sm:px-2 sm:py-3"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setTableSort((prev) =>
                        prev.key === "rating"
                          ? {
                              key: "rating",
                              dir: prev.dir === "desc" ? "asc" : "desc",
                            }
                          : { key: "rating", dir: "desc" },
                      )
                    }
                    className="flex w-full flex-col items-center justify-center gap-0.5 rounded-lg px-0.5 py-1 transition hover:bg-slate-100/90 sm:flex-row sm:gap-1"
                  >
                    <TrustpilotColumnHeaderContent />
                    {tableSort.key === "rating" ? (
                      tableSort.dir === "desc" ? (
                        <ChevronDown
                          className="h-3.5 w-3.5 shrink-0 text-sky-700"
                          aria-hidden
                        />
                      ) : (
                        <ChevronUp
                          className="h-3.5 w-3.5 shrink-0 text-sky-700"
                          aria-hidden
                        />
                      )
                    ) : (
                      <ChevronsUpDown
                        className="h-3.5 w-3.5 shrink-0 text-slate-400"
                        aria-hidden
                      />
                    )}
                  </button>
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-2 py-2.5 align-bottom whitespace-nowrap text-slate-700"
                >
                  <GphcColumnHeaderContent />
                </th>
                {visiblePackKeys.map((k) => {
                  const active =
                    tableSort.key === "pack" && tableSort.pack === k;
                  return (
                    <th
                      key={k}
                      scope="col"
                      className="w-[5.5rem] border-b border-slate-200/90 bg-slate-50 px-1 py-2 text-center sm:w-[6.5rem] sm:px-2 sm:py-3 lg:w-32 xl:w-36"
                    >
                      <button
                        type="button"
                        title={`Sort by ${PACK_HEADER[k]} price — tap to switch lowest / highest`}
                        onClick={() =>
                          setTableSort((prev) =>
                            prev.key === "pack" && prev.pack === k
                              ? {
                                  key: "pack",
                                  pack: k,
                                  dir: prev.dir === "asc" ? "desc" : "asc",
                                }
                              : { key: "pack", pack: k, dir: "asc" },
                          )
                        }
                        className="inline-flex w-full flex-col items-center justify-center gap-0.5 rounded-lg px-0.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100/90 sm:flex-row sm:gap-1"
                      >
                        <span>{PACK_HEADER[k]}</span>
                        {active ? (
                          tableSort.dir === "asc" ? (
                            <ChevronUp
                              className="h-3.5 w-3.5 shrink-0 text-sky-700"
                              aria-hidden
                            />
                          ) : (
                            <ChevronDown
                              className="h-3.5 w-3.5 shrink-0 text-sky-700"
                              aria-hidden
                            />
                          )
                        ) : (
                          <ChevronsUpDown
                            className="h-3.5 w-3.5 shrink-0 text-slate-400"
                            aria-hidden
                          />
                        )}
                      </button>
                    </th>
                  );
                })}
                <th
                  scope="col"
                  className="w-[7rem] sm:w-[9rem] border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Delivery
                </th>
                <th
                  scope="col"
                  className="w-[6rem] sm:w-[8rem] border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Trust &amp; safety
                </th>
                <th
                  scope="col"
                  className="w-[5rem] sm:w-[5.5rem] border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Action
                </th>
                <th
                  scope="col"
                  className="w-[5rem] sm:w-[6.5rem] border-b border-slate-200/90 bg-slate-50 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
                >
                  Updated
                </th>
              </tr>
            </thead>
            <tbody>
              {processed.rows.length === 0 ? (
                <tr>
                  <td
                    colSpan={colCount}
                    className="px-4 py-12 text-center text-slate-500"
                  >
                    No providers match your filters.
                  </td>
                </tr>
              ) : (
                processed.rows.map((p) => {
                  const href = pharmacyProfileHref(p.id);
                  const init = providerInitial(p.name);
                  const rowPrice =
                    packFilter === "all"
                      ? p.packs["1"].packPrice
                      : p.packs[packFilter].packPrice;
                  const isLowestRow =
                    processed.minRowPrice != null &&
                    rowPrice === processed.minRowPrice;

                  return (
                    <tr
                      key={p.id}
                      className={`group border-b border-slate-100/90 last:border-0 ${
                        isLowestRow ? "bg-sky-50/40" : ""
                      }`}
                    >
                      <td
                        className={`sticky left-0 z-10 border-r border-slate-200/80 px-2 py-2.5 pl-3 sm:px-3 sm:pl-4 align-top shadow-[4px_0_12px_-8px_rgba(15,23,42,0.12)] ${
                          isLowestRow
                            ? "bg-sky-50/90 group-hover:bg-sky-50"
                            : "bg-white group-hover:bg-slate-50/90"
                        }`}
                      >
                        <div className="flex gap-3">
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200/90 text-sm font-bold text-slate-700"
                            aria-hidden
                          >
                            {init}
                          </span>
                          <div className="flex min-w-0 flex-col gap-1">
                            <Link
                              href={href}
                              className="font-semibold text-sky-900 underline decoration-sky-300/70 underline-offset-2 hover:decoration-sky-600"
                            >
                              {p.name}
                            </Link>
                            {p.promoNote && (
                              <span className="text-[11px] font-medium text-amber-800">
                                {p.promoNote}
                              </span>
                            )}
                            {isLowestRow && (
                              <span className="inline-flex w-fit items-center rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                Lowest{" "}
                                {packFilter === "all"
                                  ? "1 pen"
                                  : PACK_HEADER[packFilter]}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-middle">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <TrustpilotStarIcon className="h-4 w-4 shrink-0" />
                          <span className="font-semibold text-slate-900">
                            {p.rating.toFixed(1)}
                          </span>
                          <span className="text-xs text-slate-500">
                            ({formatUkGroupedInteger(p.reviewCount)})
                          </span>
                        </span>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-top whitespace-nowrap text-xs text-slate-600">
                        <ProviderGphcLine providerId={p.id} />
                      </td>
                      {visiblePackKeys.map((k) => (
                        <PackPriceCell
                          key={k}
                          packKey={k}
                          p={p}
                          isColMin={
                            processed.packMins[k] != null &&
                            p.packs[k].packPrice === processed.packMins[k]
                          }
                        />
                      ))}
                      <td className="max-w-[9.5rem] border-b border-slate-100/90 px-2 py-2.5 align-top text-xs leading-snug text-slate-700">
                        <div className="font-semibold text-slate-900">Free</div>
                        <div className="mt-0.5">Includes delivery</div>
                        <div className="mt-1 text-slate-600">
                          {basePack(p).collectionSummary}
                        </div>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-top text-xs text-slate-600">
                        <div className="flex flex-col gap-1.5">
                          {basePack(p).coldChain && (
                            <span className="inline-flex items-center gap-1 font-medium text-sky-900">
                              <Snowflake
                                className="h-3.5 w-3.5 shrink-0"
                                aria-hidden
                              />
                              Cold chain
                            </span>
                          )}
                          <span className="font-medium text-emerald-800">
                            Verified provider
                          </span>
                        </div>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-middle">
                        <Link
                          href={href}
                          className="inline-flex rounded-lg bg-sky-600 px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-sky-700"
                        >
                          See offer
                        </Link>
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
      </div>

      <p className="text-center text-xs text-slate-500">
        Each pack column shows price and £/mg for that size. Shaded cells =
        lowest in that column (filtered). Row tint = lowest{" "}
        {packFilter === "all" ? "1 pen" : PACK_HEADER[packFilter]} price.
        Confirm live rates on each site.
      </p>
    </div>
  );
}
