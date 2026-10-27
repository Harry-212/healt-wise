"use client";

import { useRef, useState } from "react";
import {
  PILL_SOURCE_LABEL,
  formatPillGbp,
  pricesAtDose,
  type PillPriceRow,
  type PillPriceSource,
} from "@/lib/data/pill-prices";

type Props = {
  doses: string[];
  rows: PillPriceRow[];
  /** Adds an "All doses" tab that shows every dose column. */
  showAllTab?: boolean;
  /** Last checked date shown above the table. */
  lastCheckedLabel: string;
  tableId?: string;
  tabsId?: string;
};

const ALL = "all";

export function SourceTag({ source }: { source: PillPriceSource }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ${
        source === "pharmacy"
          ? "bg-emerald-50 text-emerald-800 ring-emerald-200"
          : "bg-slate-100 text-slate-700 ring-slate-200"
      }`}
    >
      {PILL_SOURCE_LABEL[source]}
    </span>
  );
}

export default function PillPriceTable({
  doses,
  rows,
  showAllTab = false,
  lastCheckedLabel,
  tableId = "price-table",
  tabsId = "dose-tabs",
}: Props) {
  const tabs = showAllTab ? [ALL, ...doses.map((_, i) => String(i))] : doses.map((_, i) => String(i));
  const [active, setActive] = useState(tabs[0]);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const label = (tab: string) => (tab === ALL ? "All doses" : doses[Number(tab)]);

  function onKeyDown(e: React.KeyboardEvent, index: number) {
    let next = index;
    if (e.key === "ArrowRight") next = (index + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(tabs[next]);
    tabRefs.current[tabs[next]]?.focus();
  }

  const isAll = active === ALL;
  const doseIndex = isAll ? -1 : Number(active);

  const allRows = [...rows].sort(
    (a, b) =>
      (a.prices[0] ?? Infinity) - (b.prices[0] ?? Infinity) ||
      a.provider.localeCompare(b.provider),
  );
  const lowestPerDose = doses.map((_, i) => pricesAtDose(rows, i)[0]?.price);
  const doseRows = isAll ? [] : pricesAtDose(rows, doseIndex);

  return (
    <div id={tabsId} className="scroll-mt-28 space-y-4">
      <div
        role="tablist"
        aria-label="Choose a dose"
        className="flex flex-wrap gap-2"
      >
        {tabs.map((tab, i) => {
          const selected = tab === active;
          return (
            <button
              key={tab}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              id={`${tabsId}-tab-${tab}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${tabsId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-[44px] rounded-full px-4 text-sm font-semibold ring-1 transition ${
                selected
                  ? "bg-emerald-700 text-white ring-emerald-700"
                  : "bg-white text-slate-800 ring-slate-300 hover:bg-slate-50"
              }`}
            >
              {label(tab)}
            </button>
          );
        })}
      </div>

      <p className="text-sm text-slate-600">
        Listed prices, last checked {lastCheckedLabel}.
      </p>

      <div
        id={`${tabsId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabsId}-tab-${active}`}
        className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"
      >
        <table id={tableId} className="w-full text-left text-sm">
          <caption className="sr-only">
            {isAll
              ? "Listed monthly price by provider for every dose"
              : `Listed monthly price by provider for the ${label(active)} dose, lowest first`}
          </caption>
          {isAll ? (
            <>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th scope="col" className="sticky left-0 z-10 bg-slate-50 px-3 py-3 font-semibold text-slate-900">
                    Provider
                  </th>
                  {doses.map((d) => (
                    <th key={d} scope="col" className="whitespace-nowrap px-3 py-3 font-semibold text-slate-900">
                      {d}
                    </th>
                  ))}
                  <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold text-slate-900">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {allRows.map((r) => (
                  <tr key={r.provider}>
                    <th scope="row" className="sticky left-0 z-10 whitespace-nowrap bg-white px-3 py-3 text-left font-medium text-slate-900">
                      {r.provider}
                    </th>
                    {r.prices.map((p, i) => {
                      const lowest = p != null && p === lowestPerDose[i];
                      return (
                        <td key={doses[i]} className="whitespace-nowrap px-3 py-3 tabular-nums">
                          {p == null ? (
                            <span className="text-slate-400">Not listed</span>
                          ) : lowest ? (
                            <span className="font-bold text-emerald-900">
                              {formatPillGbp(p)}{" "}
                              <span className="text-xs font-semibold uppercase tracking-wide">Lowest</span>
                            </span>
                          ) : (
                            formatPillGbp(p)
                          )}
                        </td>
                      );
                    })}
                    <td className="px-3 py-3">
                      <SourceTag source={r.source} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <>
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th scope="col" className="px-3 py-3 font-semibold text-slate-900">
                    Provider
                  </th>
                  <th scope="col" className="whitespace-nowrap px-3 py-3 font-semibold text-slate-900">
                    {label(active)}
                  </th>
                  <th scope="col" className="hidden px-3 py-3 font-semibold text-slate-900 sm:table-cell">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-800">
                {doseRows.map((r) => (
                  <tr key={r.provider}>
                    <th scope="row" className="px-3 py-3 text-left font-medium text-slate-900">
                      {r.provider}
                      <span className="mt-1 block sm:hidden">
                        <SourceTag source={r.source} />
                      </span>
                    </th>
                    <td className="whitespace-nowrap px-3 py-3 font-semibold tabular-nums">
                      {formatPillGbp(r.price)}
                    </td>
                    <td className="hidden px-3 py-3 sm:table-cell">
                      <SourceTag source={r.source} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
}
