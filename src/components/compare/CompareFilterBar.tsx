"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";

export type CompareAccent = "violet" | "emerald" | "sky";

export type CompareSortPreset =
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "rating-asc"
  | "provider-asc"
  | "provider-desc";

export type CompareFilterPill<T extends string> = {
  value: T;
  label: string;
};

const ACCENT_CLASSES: Record<
  CompareAccent,
  {
    activePill: string;
    idlePill: string;
    label: string;
    selectFocus: string;
  }
> = {
  violet: {
    activePill:
      "bg-violet-700 text-white shadow-sm ring-1 ring-violet-700 hover:bg-violet-800",
    idlePill:
      "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-violet-300 hover:text-violet-900",
    label: "text-violet-900",
    selectFocus: "focus:border-violet-500 focus:ring-violet-200",
  },
  emerald: {
    activePill:
      "bg-emerald-700 text-white shadow-sm ring-1 ring-emerald-700 hover:bg-emerald-800",
    idlePill:
      "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-emerald-300 hover:text-emerald-900",
    label: "text-emerald-900",
    selectFocus: "focus:border-emerald-500 focus:ring-emerald-200",
  },
  sky: {
    activePill:
      "bg-sky-700 text-white shadow-sm ring-1 ring-sky-700 hover:bg-sky-800",
    idlePill:
      "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-sky-300 hover:text-sky-900",
    label: "text-sky-900",
    selectFocus: "focus:border-sky-500 focus:ring-sky-200",
  },
};

const DEFAULT_SORT_OPTIONS: { value: CompareSortPreset; label: string }[] = [
  { value: "price-asc", label: "Cost (Low to High)" },
  { value: "price-desc", label: "Cost (High to Low)" },
  { value: "rating-desc", label: "Trustpilot (High to Low)" },
  { value: "rating-asc", label: "Trustpilot (Low to High)" },
  { value: "provider-asc", label: "Provider (A → Z)" },
  { value: "provider-desc", label: "Provider (Z → A)" },
];

type Props<T extends string> = {
  accent: CompareAccent;
  /** Pill group label, e.g. "Doses" or "Pack size". */
  pillsLabel?: string;
  pills: CompareFilterPill<T>[];
  selectedPill: T;
  onSelectPill: (value: T) => void;
  /** Sort dropdown */
  sort: CompareSortPreset;
  onSortChange: (value: CompareSortPreset) => void;
  /** Optional override for sort options. */
  sortOptions?: { value: CompareSortPreset; label: string }[];
  /** Optional trailing slot — e.g. an "Updated today" badge. */
  trailing?: ReactNode;
  /** Full-width block under dose/pack pills + sort (search, price band, Trustpilot, delivery). */
  filterExtras?: ReactNode;
  /** Renders below the pills label, above the dose/pack buttons (e.g. provider + Trustpilot filters). */
  pillRegionTop?: ReactNode;
  /**
   * Label for the mobile-only expand/collapse control for `filterExtras`.
   * On `sm+`, extras stay always visible (no toggle).
   */
  filterExtrasMobileToggleLabel?: string;
};

export default function CompareFilterBar<T extends string>({
  accent,
  pillsLabel,
  pills,
  selectedPill,
  onSelectPill,
  sort,
  onSortChange,
  sortOptions = DEFAULT_SORT_OPTIONS,
  trailing,
  filterExtras,
  pillRegionTop,
  filterExtrasMobileToggleLabel = "Price band",
}: Props<T>) {
  const acc = ACCENT_CLASSES[accent];
  const [mobileExtrasOpen, setMobileExtrasOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0 flex-1">
          {pillsLabel ? (
            <p
              className={`mb-2 text-[11px] font-bold uppercase tracking-wide ${acc.label}`}
            >
              {pillsLabel}
            </p>
          ) : null}
          {pillRegionTop ? (
            <div className="mb-3 grid gap-3 sm:grid-cols-2">{pillRegionTop}</div>
          ) : null}
          <div
            role="tablist"
            aria-label={pillsLabel ?? "Filter"}
            className="flex flex-wrap gap-2"
          >
            {pills.map((pill) => {
              const on = pill.value === selectedPill;
              return (
                <button
                  key={pill.value}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  data-on={on ? "true" : "false"}
                  onClick={() => onSelectPill(pill.value)}
                  className={`inline-flex min-h-[34px] items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-tight transition ${
                    on ? acc.activePill : acc.idlePill
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-stretch gap-2 sm:items-end">
          <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <span className="whitespace-nowrap">Sort by:</span>
            <span className="relative inline-flex">
              <select
                value={sort}
                onChange={(e) =>
                  onSortChange(e.target.value as CompareSortPreset)
                }
                className={`appearance-none rounded-xl border border-slate-200 bg-white py-2 pl-3 pr-9 text-sm font-semibold text-slate-900 shadow-sm transition focus:outline-none focus:ring-2 ${acc.selectFocus}`}
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                aria-hidden
              />
            </span>
          </label>
          {trailing ? <div className="text-xs">{trailing}</div> : null}
        </div>
      </div>
      {filterExtras ? (
        <div className="mt-3 border-t border-slate-200/80 pt-3">
          <button
            type="button"
            className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl border border-slate-200/90 bg-slate-50/90 px-3 py-2.5 text-left shadow-sm sm:hidden"
            aria-expanded={mobileExtrasOpen}
            onClick={() => setMobileExtrasOpen((o) => !o)}
          >
            <span
              className={`text-[11px] font-bold uppercase tracking-wide ${acc.label}`}
            >
              {filterExtrasMobileToggleLabel}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                mobileExtrasOpen ? "rotate-180" : ""
              }`}
              aria-hidden
            />
          </button>
          <div
            className={
              mobileExtrasOpen
                ? "block max-sm:[&>p:first-of-type]:hidden"
                : "hidden sm:block"
            }
          >
            {filterExtras}
          </div>
        </div>
      ) : null}
    </div>
  );
}
