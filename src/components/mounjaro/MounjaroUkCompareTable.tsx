"use client";

import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Star } from "lucide-react";
import ProviderGphcLine from "@/components/compare/ProviderGphcLine";
import {
  estimatedMonthlyCost,
  startingPrice,
  MOUNJARO_DOSE_KEYS,
  type MounjaroDoseColumnKey,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { pharmacyProfileHref } from "@/lib/data/wegovy-uk-compare-providers";

type SortKey =
  | "provider"
  | "starting"
  | "monthly"
  | "rating"
  | "updated"
  | MounjaroDoseColumnKey;

function doseHeaderLabel(key: MounjaroDoseColumnKey): string {
  return key.replace("mg", " mg");
}

function formatGBP(n: number) {
  return `£${n}`;
}

function SortableTh({
  label,
  columnKey,
  sortKey,
  sortDir,
  onSort,
  narrow,
  center,
  title,
}: {
  label: string;
  columnKey: SortKey;
  sortKey: SortKey;
  sortDir: "asc" | "desc";
  onSort: (k: SortKey) => void;
  narrow?: boolean;
  center?: boolean;
  title?: string;
}) {
  const active = sortKey === columnKey;
  return (
    <th
      scope="col"
      title={title ?? label}
      className={`border-b border-slate-200/90 bg-slate-50 px-2 py-3 font-semibold text-slate-700 ${
        narrow ? "w-[3.85rem] min-w-[3.85rem] max-w-[3.85rem] text-center" : "whitespace-nowrap"
      } ${center ? "text-center" : ""}`}
    >
      <button
        type="button"
        onClick={() => onSort(columnKey)}
        className={`inline-flex w-full items-center justify-center gap-1 rounded-lg px-1 py-1 text-xs uppercase tracking-wide transition hover:bg-slate-200/60 hover:text-slate-900 data-[active=true]:text-violet-800 ${
          center ? "text-center" : "text-left"
        }`}
        data-active={active}
      >
        <span className="min-w-0 leading-tight">{label}</span>
        <span className="inline-flex shrink-0 flex-col" aria-hidden>
          {active ? (
            sortDir === "asc" ? (
              <ArrowUp className="h-3.5 w-3.5 text-violet-700" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5 text-violet-700" />
            )
          ) : (
            <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
          )}
        </span>
        <span className="sr-only">Sort column</span>
      </button>
    </th>
  );
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
  const [deliveryFilter, setDeliveryFilter] = useState<
    "all" | "free" | "paid" | "collect"
  >("all");
  const [sortKey, setSortKey] = useState<SortKey>("starting");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

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

    const dir = sortDir === "asc" ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "provider":
          cmp = a.name.localeCompare(b.name);
          break;
        case "starting":
          cmp = startingPrice(a) - startingPrice(b);
          break;
        case "monthly":
          cmp = estimatedMonthlyCost(a) - estimatedMonthlyCost(b);
          break;
        case "rating":
          cmp = a.rating - b.rating;
          break;
        case "updated":
          cmp = a.updatedLabel.localeCompare(b.updatedLabel);
          break;
        default:
          if (MOUNJARO_DOSE_KEYS.includes(sortKey as MounjaroDoseColumnKey)) {
            cmp =
              a.prices[sortKey as MounjaroDoseColumnKey] -
              b.prices[sortKey as MounjaroDoseColumnKey];
          }
      }
      return cmp * dir;
    });

    const minStart =
      rows.length > 0
        ? Math.min(...rows.map((r) => startingPrice(r)))
        : null;

    const doseMins: Partial<Record<MounjaroDoseColumnKey, number>> = {};
    for (const k of MOUNJARO_DOSE_KEYS) {
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
    sortKey,
    sortDir,
  ]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir(
        key === "provider" || key === "updated" ? "asc" : "asc",
      );
    }
  }

  const insights = useMemo(() => {
    const { rows } = processed;
    if (rows.length === 0) {
      return {
        cheapest: null as number | null,
        avgMonthly: null as number | null,
        count: 0,
      };
    }
    const cheapest = Math.min(...rows.map((r) => startingPrice(r)));
    const avgMonthly = Math.round(
      rows.reduce((acc, r) => acc + estimatedMonthlyCost(r), 0) / rows.length,
    );
    return { cheapest, avgMonthly, count: rows.length };
  }, [processed]);

  const colCount = 1 + MOUNJARO_DOSE_KEYS.length + 3;

  const providerThClass =
    "sticky left-0 z-50 min-w-[13rem] max-w-[14rem] border-b border-r border-slate-200/90 bg-slate-50 px-3 py-3 pl-4 shadow-[4px_0_12px_-8px_rgba(15,23,42,0.15)]";

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm sm:text-left">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Cheapest price today
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-violet-700">
            {insights.cheapest != null ? formatGBP(insights.cheapest) : "—"}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Lowest starting pen (filtered)</p>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Avg monthly estimate
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
            {insights.avgMonthly != null ? formatGBP(insights.avgMonthly) : "—"}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Mean of dose averages (filtered)
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm sm:text-left">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Providers compared
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
            {insights.count}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">Matching your filters</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:flex-row md:flex-wrap md:items-end">
        <label className="flex min-w-[160px] flex-1 flex-col gap-1 text-xs font-semibold text-slate-600">
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
        <label className="flex w-full min-w-[100px] flex-col gap-1 text-xs font-semibold text-slate-600 md:w-28">
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
        <label className="flex w-full min-w-[100px] flex-col gap-1 text-xs font-semibold text-slate-600 md:w-28">
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
        <label className="flex min-w-[120px] flex-col gap-1 text-xs font-semibold text-slate-600">
          Min rating
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
        <label className="flex min-w-[160px] flex-col gap-1 text-xs font-semibold text-slate-600">
          Delivery (filter)
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

      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 py-3 text-xs text-slate-600">
        <span className="font-semibold text-slate-800">Safety</span>
        <span>
          Private Mounjaro routes use an online consultation; confirm the supplying
          pharmacy on the{" "}
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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <p className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500 md:hidden">
          Scroll sideways — provider column stays fixed.
        </p>
        <div className="max-h-[min(78vh,800px)] min-h-0 overflow-auto overscroll-contain [overflow-anchor:none]">
          <table className="w-full min-w-[62rem] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-20">
              <tr className="text-slate-600">
                <th
                  scope="col"
                  className={`${providerThClass} z-40 align-bottom`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSort("provider")}
                    className="inline-flex w-full items-center gap-1 rounded-lg py-1 pr-1 text-left text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-200/60 hover:text-slate-900"
                  >
                    Provider
                    <span className="inline-flex shrink-0" aria-hidden>
                      {sortKey === "provider" ? (
                        sortDir === "asc" ? (
                          <ArrowUp className="h-3.5 w-3.5 text-violet-700" />
                        ) : (
                          <ArrowDown className="h-3.5 w-3.5 text-violet-700" />
                        )
                      ) : (
                        <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
                      )}
                    </span>
                    <span className="sr-only">Sort column</span>
                  </button>
                </th>
                {MOUNJARO_DOSE_KEYS.map((k) => (
                  <SortableTh
                    key={k}
                    label={doseHeaderLabel(k)}
                    columnKey={k}
                    sortKey={sortKey}
                    sortDir={sortDir}
                    onSort={toggleSort}
                    narrow
                    title={`Mounjaro ${doseHeaderLabel(k)} pen (illustrative)`}
                  />
                ))}
                <SortableTh
                  label="Avg / mo"
                  columnKey="monthly"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={toggleSort}
                  center
                  title="Mean price across the six pen strengths"
                />
                <SortableTh
                  label="Reviews"
                  columnKey="rating"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={toggleSort}
                />
                <SortableTh
                  label="Updated"
                  columnKey="updated"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={toggleSort}
                />
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
                    rating.
                  </td>
                </tr>
              ) : (
                processed.rows.map((p) => {
                  const start = startingPrice(p);
                  const monthly = estimatedMonthlyCost(p);
                  const isLowestRow =
                    processed.minStart != null && start === processed.minStart;
                  const profile = pharmacyProfileHref(p.id);

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
                        className={`sticky left-0 z-10 border-r border-slate-200/80 px-3 py-2.5 pl-4 align-top shadow-[4px_0_12px_-8px_rgba(15,23,42,0.12)] ${stickyProviderBg}`}
                      >
                        <div className="flex flex-col gap-1.5">
                          <Link
                            href={profile}
                            className="font-semibold text-violet-800 underline decoration-violet-300/70 underline-offset-2 transition hover:text-violet-950 hover:decoration-violet-600"
                          >
                            {p.name}
                          </Link>
                          <ProviderGphcLine providerId={p.id} />
                          {p.headlineFrom !== start && (
                            <span className="text-[11px] leading-snug text-slate-500">
                              Headline ~£{p.headlineFrom}
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
                      {MOUNJARO_DOSE_KEYS.map((k) => {
                        const v = p.prices[k];
                        const isColMin =
                          processed.doseMins[k] != null &&
                          v === processed.doseMins[k];
                        return (
                          <td
                            key={k}
                            className={`border-b border-slate-100/90 px-1 py-2.5 text-center align-middle text-xs tabular-nums sm:text-sm ${
                              isColMin
                                ? "bg-violet-100/50 font-semibold text-violet-950"
                                : ""
                            }`}
                          >
                            {formatGBP(v)}
                          </td>
                        );
                      })}
                      <td className="border-b border-slate-100/90 px-2 py-2.5 text-center align-middle tabular-nums text-slate-700">
                        {formatGBP(monthly)}
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-middle tabular-nums font-medium text-slate-900">
                        <span className="inline-flex items-center gap-1.5">
                          <Star
                            className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400"
                            aria-hidden
                          />
                          {p.rating.toFixed(1)}
                        </span>
                      </td>
                      <td className="border-b border-slate-100/90 px-3 py-2.5 align-middle text-xs text-slate-600">
                        {p.updatedLabel}
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
        Highlighted cells = lowest listed price for that strength in your current
        filter. Row tint = lowest starting pen (min across strengths).
      </p>
    </div>
  );
}
