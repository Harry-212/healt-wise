"use client";

import Link from "next/link";
import { startTransition, useMemo, useState } from "react";
import { ArrowDown, ArrowUp, ArrowUpDown, Snowflake, Star } from "lucide-react";
import ProviderGphcLine from "@/components/compare/ProviderGphcLine";
import {
  minPackPriceForSize,
  SAXENDA_PACK_KEYS,
  type SaxendaPackKey,
  type SaxendaUkProviderCompare,
} from "@/lib/data/saxenda-uk-compare-providers";
import { pharmacyProfileHref } from "@/lib/data/wegovy-uk-compare-providers";

type SortKey = "provider" | "rating" | SaxendaPackKey;

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

function SortableTh({
  label,
  columnKey,
  sortKey,
  sortDir,
  onSort,
}: {
  label: string;
  columnKey: SortKey;
  sortKey: SortKey;
  sortDir: "asc" | "desc";
  onSort: (k: SortKey) => void;
}) {
  const active = sortKey === columnKey;
  return (
    <th
      scope="col"
      className="border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-left text-xs font-semibold text-slate-700"
    >
      <button
        type="button"
        onClick={() => onSort(columnKey)}
        className="inline-flex w-full items-center gap-1 rounded-lg px-1 py-1 uppercase tracking-wide transition hover:bg-slate-200/60 hover:text-slate-900 data-[active=true]:text-sky-800"
        data-active={active}
      >
        <span className="min-w-0 leading-tight">{label}</span>
        <span className="inline-flex shrink-0" aria-hidden>
          {active ? (
            sortDir === "asc" ? (
              <ArrowUp className="h-3.5 w-3.5 text-sky-700" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5 text-sky-700" />
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
      className={`border-b border-slate-100/90 px-2 py-2.5 align-middle tabular-nums ${
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
  const [sortKey, setSortKey] = useState<SortKey>("1");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const processed = useMemo(() => {
    const minR = minRating.trim() === "" ? null : Number.parseFloat(minRating);
    const q = providerQuery.trim().toLowerCase();

    let rows = providers.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q)) return false;
      if (minR !== null && !Number.isNaN(minR) && p.rating < minR) return false;
      return true;
    });

    const dir = sortDir === "asc" ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "provider":
          cmp = a.name.localeCompare(b.name);
          break;
        case "rating":
          cmp = a.rating - b.rating;
          break;
        case "1":
        case "3":
        case "5":
          cmp = a.packs[sortKey].packPrice - b.packs[sortKey].packPrice;
          break;
        default:
          cmp = 0;
      }
      return cmp * dir;
    });

    const packMins: Partial<Record<SaxendaPackKey, number>> = {};
    for (const k of SAXENDA_PACK_KEYS) {
      if (rows.length > 0) {
        packMins[k] = minPackPriceForSize(rows, k);
      }
    }

    const minOnePen =
      rows.length > 0 ? minPackPriceForSize(rows, "1") : null;

    return { rows, packMins, minOnePen };
  }, [providers, providerQuery, minRating, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  const insights = useMemo(() => {
    const { rows } = processed;
    if (rows.length === 0) {
      return {
        min1: null as number | null,
        min3: null as number | null,
        min5: null as number | null,
        count: 0,
      };
    }
    return {
      min1: minPackPriceForSize(rows, "1"),
      min3: minPackPriceForSize(rows, "3"),
      min5: minPackPriceForSize(rows, "5"),
      count: rows.length,
    };
  }, [processed]);

  const providerThClass =
    "sticky left-0 z-50 min-w-[13rem] max-w-[15rem] border-b border-r border-slate-200/90 bg-slate-50 px-3 py-3 pl-4 shadow-[4px_0_12px_-8px_rgba(15,23,42,0.15)]";

  const colCount = 8;

  const basePack = (p: SaxendaUkProviderCompare) => p.packs["1"];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm sm:text-left">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Cheapest 1 pen
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-sky-700">
            {insights.min1 != null ? formatGBP(insights.min1) : "—"}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Cheapest 3 pens
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-sky-700">
            {insights.min3 != null ? formatGBP(insights.min3) : "—"}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200/90 bg-white px-4 py-3 text-center shadow-sm sm:text-left">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Cheapest 5 pens
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-sky-700">
            {insights.min5 != null ? formatGBP(insights.min5) : "—"}
          </p>
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
            <option value="4.6">4.6+</option>
            <option value="4.5">4.5+</option>
            <option value="4.4">4.4+</option>
          </select>
        </label>
      </div>

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

      <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <p className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500 md:hidden">
          Scroll sideways on small screens.
        </p>
        <div className="max-h-[min(78vh,640px)] min-h-0 overflow-auto overscroll-contain [overflow-anchor:none]">
          <table className="w-full min-w-[52rem] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-20">
              <tr>
                <th
                  scope="col"
                  className={`${providerThClass} z-40 align-bottom`}
                >
                  <button
                    type="button"
                    onClick={() => toggleSort("provider")}
                    className="inline-flex w-full items-center gap-1 rounded-lg py-1 pr-1 text-left text-xs font-semibold uppercase tracking-wide text-slate-700 transition hover:bg-slate-200/60"
                  >
                    Provider
                    <span className="inline-flex shrink-0" aria-hidden>
                      {sortKey === "provider" ? (
                        sortDir === "asc" ? (
                          <ArrowUp className="h-3.5 w-3.5 text-sky-700" />
                        ) : (
                          <ArrowDown className="h-3.5 w-3.5 text-sky-700" />
                        )
                      ) : (
                        <ArrowUpDown className="h-3.5 w-3.5 text-slate-400" />
                      )}
                    </span>
                  </button>
                </th>
                <SortableTh
                  label="Reviews"
                  columnKey="rating"
                  sortKey={sortKey}
                  sortDir={sortDir}
                  onSort={toggleSort}
                />
                {SAXENDA_PACK_KEYS.map((k) => (
                  <SortableTh
                    key={k}
                    label={PACK_HEADER[k]}
                    columnKey={k}
                    sortKey={sortKey}
                    sortDir={sortDir}
                    onSort={toggleSort}
                  />
                ))}
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold text-slate-700"
                >
                  Delivery
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold text-slate-700"
                >
                  Trust &amp; safety
                </th>
                <th
                  scope="col"
                  className="border-b border-slate-200/90 bg-slate-50 px-2 py-3 text-xs font-semibold text-slate-700"
                >
                  Action
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
                  const isLowestOnePen =
                    processed.minOnePen != null &&
                    p.packs["1"].packPrice === processed.minOnePen;

                  return (
                    <tr
                      key={p.id}
                      className={`group border-b border-slate-100/90 last:border-0 ${
                        isLowestOnePen ? "bg-sky-50/40" : ""
                      }`}
                    >
                      <td
                        className={`sticky left-0 z-10 border-r border-slate-200/80 px-3 py-2.5 align-top shadow-[4px_0_12px_-8px_rgba(15,23,42,0.12)] ${
                          isLowestOnePen
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
                            <ProviderGphcLine providerId={p.id} />
                            {p.promoNote && (
                              <span className="text-[11px] font-medium text-amber-800">
                                {p.promoNote}
                              </span>
                            )}
                            {isLowestOnePen && (
                              <span className="inline-flex w-fit items-center rounded-full bg-sky-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                                Lowest 1 pen
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-slate-100/90 px-2 py-2.5 align-middle">
                        <span className="inline-flex items-center gap-1.5 tabular-nums">
                          <Star
                            className="h-4 w-4 shrink-0 fill-amber-400 text-amber-400"
                            aria-hidden
                          />
                          <span className="font-semibold text-slate-900">
                            {p.rating.toFixed(1)}
                          </span>
                          <span className="text-xs text-slate-500">
                            ({p.reviewCount.toLocaleString("en-GB")})
                          </span>
                        </span>
                      </td>
                      {SAXENDA_PACK_KEYS.map((k) => (
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
                              <Snowflake className="h-3.5 w-3.5 shrink-0" aria-hidden />
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
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500">
        Each pack column shows price and £/mg for that size. Shaded cells =
        lowest in that column (filtered). Row tint = lowest 1 pen price.
        Confirm live rates on each site.
      </p>
    </div>
  );
}
