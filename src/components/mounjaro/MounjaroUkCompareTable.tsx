"use client";

import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import {
  Building2,
  CalendarClock,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
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
  startingPrice,
  MOUNJARO_DOSE_KEYS,
  type MounjaroDoseColumnKey,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { pharmacyProfileHref } from "@/lib/data/wegovy-uk-compare-providers";
import { trustpilotHrefForProvider } from "@/lib/seo/trustpilot-link";
import { useTodayLabel } from "@/lib/hooks/useTodayLabel";
import { COMPARE_TABLE_MOBILE_OUTDENT_CLASS } from "@/lib/ui/compare-table-mobile-bleed";

type DoseFilter = "all" | MounjaroDoseColumnKey;

type MounjaroTableSort =
  | { key: "composite"; dir: "asc" | "desc" }
  | { key: "dose"; dose: MounjaroDoseColumnKey; dir: "asc" | "desc" }
  | { key: "rating"; dir: "asc" | "desc" }
  | { key: "provider"; dir: "asc" | "desc" };

function mounjaroSortToPreset(s: MounjaroTableSort): CompareSortPreset {
  switch (s.key) {
    case "composite":
    case "dose":
      return s.dir === "asc" ? "price-asc" : "price-desc";
    case "rating":
      return s.dir === "desc" ? "rating-desc" : "rating-asc";
    case "provider":
      return s.dir === "asc" ? "provider-asc" : "provider-desc";
  }
}

function presetToMounjaroSort(v: CompareSortPreset): MounjaroTableSort {
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

function doseHeaderLabel(key: MounjaroDoseColumnKey): string {
  return key.replace("mg", " mg");
}

function formatGBP(n: number) {
  return `£${Number.isInteger(n) ? n : n.toFixed(2)}`;
}

export default function MounjaroUkCompareTable({
  providers,
}: {
  providers: MounjaroUkProviderCompare[];
}) {
  const [providerQuery, setProviderQuery] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [minRating, setMinRating] = useState("");
  const [doseFilter, setDoseFilter] = useState<DoseFilter>("all");
  const [tableSort, setTableSort] = useState<MounjaroTableSort>({
    key: "provider",
    dir: "asc",
  });

  const todayLabel = useTodayLabel();

  const visibleDoseKeys = useMemo<MounjaroDoseColumnKey[]>(
    () => (doseFilter === "all" ? [...MOUNJARO_DOSE_KEYS] : [doseFilter]),
    [doseFilter],
  );

  const processed = useMemo(() => {
    const minP = priceMin.trim() === "" ? null : Number.parseFloat(priceMin);
    const maxP = priceMax.trim() === "" ? null : Number.parseFloat(priceMax);
    const minR = minRating.trim() === "" ? null : Number.parseFloat(minRating);
    const q = providerQuery.trim().toLowerCase();

    let rows = providers.filter((p) => {
      const priceForFilter =
        doseFilter === "all" ? startingPrice(p) : p.prices[doseFilter];
      if (
        doseFilter !== "all" &&
        (!Number.isFinite(priceForFilter) || priceForFilter <= 0)
      ) {
        return false;
      }
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (minP !== null && !Number.isNaN(minP) && priceForFilter < minP)
        return false;
      if (maxP !== null && !Number.isNaN(maxP) && priceForFilter > maxP)
        return false;
      if (minR !== null && !Number.isNaN(minR) && p.rating < minR) return false;
      return true;
    });

    const priceForComposite = (p: MounjaroUkProviderCompare) =>
      doseFilter === "all" ? startingPrice(p) : p.prices[doseFilter];

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
        case "dose":
          return (
            (a.prices[tableSort.dose] - b.prices[tableSort.dose]) *
            (tableSort.dir === "asc" ? 1 : -1)
          );
        case "composite":
          return (
            (priceForComposite(a) - priceForComposite(b)) *
            (tableSort.dir === "asc" ? 1 : -1)
          );
      }
    });

    const minStart =
      rows.length > 0
        ? Math.min(...rows.map((r) => priceForComposite(r)))
        : null;

    const doseMins: Partial<Record<MounjaroDoseColumnKey, number>> = {};
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
    doseFilter,
    tableSort,
    visibleDoseKeys,
  ]);

  const insights = useMemo(() => {
    const { rows } = processed;
    return { count: rows.length };
  }, [processed]);

  const dosePills = useMemo(
    () => [
      { value: "all" as DoseFilter, label: "All doses" },
      ...MOUNJARO_DOSE_KEYS.map((k) => ({
        value: k as DoseFilter,
        label: doseHeaderLabel(k),
      })),
    ],
    [],
  );

  const priceFilterScope =
    doseFilter === "all"
      ? "from lowest pen"
      : `for ${doseHeaderLabel(doseFilter)}`;

  const colCount = 1 + visibleDoseKeys.length + 3;

  const providerThClass =
    "sticky left-0 z-50 w-[9rem] sm:w-[14rem] border-b border-r border-slate-200/90 bg-slate-50 px-2 py-3 pl-3 sm:px-3 sm:pl-4 shadow-[4px_0_12px_-8px_rgba(15,23,42,0.15)]";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-violet-200/70 bg-linear-to-r from-violet-100/80 via-violet-50/70 to-white px-4 py-3 shadow-sm">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-[0_6px_18px_-6px_rgba(109,40,217,0.5)]">
          <Building2 className="h-5 w-5" aria-hidden />
        </span>
        <span className="flex min-w-0 flex-col leading-tight">
          <span className="text-2xl font-bold tabular-nums text-violet-900 sm:text-[28px]">
            {insights.count}
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wide text-violet-700/80">
            UK pharmacies matching your filters
          </span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-violet-800 shadow-sm ring-1 ring-violet-200/70">
          <CalendarClock className="h-3.5 w-3.5" aria-hidden />
          Last updated today{todayLabel ? `: ${todayLabel}` : ""}
        </span>
      </div>

      <CompareFilterBar
        accent="violet"
        pillsLabel="Doses"
        pills={dosePills}
        selectedPill={doseFilter}
        onSelectPill={(v) => setDoseFilter(v)}
        sort={mounjaroSortToPreset(tableSort)}
        onSortChange={(v) => setTableSort(presetToMounjaroSort(v))}
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
        filterExtras={
          <>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-violet-900">
              Price band
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="flex flex-col gap-1 text-xs font-semibold text-slate-600">
                <span className="inline-flex flex-col gap-0.5">
                  <span>Min £</span>
                  <span className="text-[10px] font-normal text-slate-500">
                    {priceFilterScope}
                  </span>
                </span>
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
                <span className="inline-flex flex-col gap-0.5">
                  <span>Max £</span>
                  <span className="text-[10px] font-normal text-slate-500">
                    {priceFilterScope}
                  </span>
                </span>
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
            </div>
          </>
        }
      />

      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-xs text-slate-600">
        <span className="font-semibold text-slate-800">Safety</span>
        <span>
          Private Mounjaro routes use an online consultation; confirm the
          supplying pharmacy on the{" "}
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-violet-800 underline-offset-2 hover:underline"
          >
            GPhC register
          </a>{" "}
          before you pay.
        </span>
        <Link
          href="/pharmacy-safety-gphc-verification"
          className="font-semibold text-violet-800 underline-offset-2 hover:underline"
        >
          Verification guide
        </Link>
      </p>

      <div className={COMPARE_TABLE_MOBILE_OUTDENT_CLASS}>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm max-lg:rounded-none max-lg:border-x-0">
          <p className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500 md:hidden">
            Scroll sideways — provider column stays fixed.
          </p>
          <div className="max-lg:max-h-none max-lg:min-h-0 max-lg:w-full max-lg:min-w-0 max-lg:overflow-x-auto max-lg:overflow-y-visible max-lg:overscroll-x-none max-lg:touch-pan-x lg:max-h-[min(78vh,800px)] lg:overflow-auto lg:overscroll-contain min-h-0 w-full min-w-0 [overflow-anchor:none]">
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
                          className="h-3.5 w-3.5 shrink-0 text-violet-700"
                          aria-hidden
                        />
                      ) : (
                        <ChevronDown
                          className="h-3.5 w-3.5 shrink-0 text-violet-700"
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
                {visibleDoseKeys.map((k) => {
                  const active =
                    tableSort.key === "dose" && tableSort.dose === k;
                  return (
                    <th
                      key={k}
                      scope="col"
                      className="w-[4.5rem] border-b border-slate-200/90 bg-slate-50 px-1 py-2 text-center sm:w-[4.75rem] sm:px-2 sm:py-3 lg:w-[6.75rem] xl:w-32"
                    >
                      <button
                        type="button"
                        title={`Sort by ${doseHeaderLabel(k)} price — tap to switch lowest / highest`}
                        onClick={() =>
                          setTableSort((prev) =>
                            prev.key === "dose" && prev.dose === k
                              ? {
                                  key: "dose",
                                  dose: k,
                                  dir: prev.dir === "asc" ? "desc" : "asc",
                                }
                              : { key: "dose", dose: k, dir: "asc" },
                          )
                        }
                        className="inline-flex w-full flex-col items-center justify-center gap-0.5 rounded-lg px-0.5 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-100/90 sm:flex-row sm:gap-1"
                      >
                        <span>{doseHeaderLabel(k)}</span>
                        {active ? (
                          tableSort.dir === "asc" ? (
                            <ChevronUp
                              className="h-3.5 w-3.5 shrink-0 text-violet-700"
                              aria-hidden
                            />
                          ) : (
                            <ChevronDown
                              className="h-3.5 w-3.5 shrink-0 text-violet-700"
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
                  className="min-w-[4.5rem] w-[5rem] border-b border-slate-200/90 bg-slate-50 px-1 py-2 align-bottom text-slate-700 sm:w-[5.5rem] sm:px-2 sm:py-3"
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
                          className="h-3.5 w-3.5 shrink-0 text-violet-700"
                          aria-hidden
                        />
                      ) : (
                        <ChevronUp
                          className="h-3.5 w-3.5 shrink-0 text-violet-700"
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
                <th
                  scope="col"
                  className="w-[5rem] sm:w-[6.5rem] border-b border-slate-200/90 bg-slate-50 px-3 py-3 text-xs font-semibold uppercase tracking-wide text-slate-700"
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
                    ? "bg-violet-50/90 group-hover:bg-violet-50"
                    : "bg-white group-hover:bg-slate-50/90";

                  return (
                    <tr
                      key={p.id}
                      className={`group border-b border-slate-100/90 last:border-0 ${
                        isLowestRow ? "bg-violet-50/40" : ""
                      }`}
                    >
                      <td
                        className={`sticky left-0 z-10 border-r border-slate-200/80 px-2 py-2.5 pl-3 sm:px-3 sm:pl-4 align-top shadow-[4px_0_12px_-8px_rgba(15,23,42,0.12)] ${stickyProviderBg}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          {linkProfile ? (
                            <Link
                              href={profile}
                              className="font-semibold text-violet-800 underline decoration-violet-300/70 underline-offset-2 transition hover:text-violet-950 hover:decoration-violet-600"
                            >
                              {p.name}
                            </Link>
                          ) : (
                            <span className="font-semibold text-slate-900">
                              {p.name}
                            </span>
                          )}
                          <div className="flex flex-wrap gap-1">
                            {isLowestRow && (
                              <span className="inline-flex items-center rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                Lowest from
                              </span>
                            )}
                            {p.badges?.includes("bestValue") && (
                              <span className="inline-flex items-center rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-violet-900">
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
                            className={`border-b border-slate-100/90 px-1.5 py-2.5 text-center align-middle text-xs tabular-nums sm:px-2 sm:text-sm lg:px-3 xl:px-4 ${
                              isColMin
                                ? "bg-violet-100/50 font-semibold text-violet-950"
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
                          className="inline-flex items-center gap-1.5 text-violet-800 underline decoration-violet-300/70 underline-offset-2 transition hover:text-violet-950 hover:decoration-violet-600"
                        >
                          <TrustpilotStarIcon className="h-4 w-4 shrink-0" />
                          {p.rating.toFixed(1)}
                          <span className="sr-only">
                            Trustpilot (opens in a new tab)
                          </span>
                        </a>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-top whitespace-nowrap text-xs text-slate-600">
                        <ProviderGphcLine
                          providerId={p.id}
                          gphcRegNo={p.gphcRegNo}
                        />
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
        Highlighted cells = lowest listed price for that strength in your
        current filter. Row tint = lowest starting pen (min across visible
        strengths).
      </p>
    </div>
  );
}
