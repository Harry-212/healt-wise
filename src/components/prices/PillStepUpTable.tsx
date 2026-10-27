"use client";

import { useState } from "react";
import { formatPillGbp, type StepUpRow } from "@/lib/data/pill-prices";
import { SourceTag } from "./PillPriceTable";

type Props = {
  rows: StepUpRow[];
  /** Totals column heading. */
  totalLabel: string;
  /**
   * When set, the table first shows this many lowest totals plus the highest,
   * with a button to show every provider.
   */
  collapsedCount?: number;
  highestNote?: string;
};

export default function PillStepUpTable({
  rows,
  totalLabel,
  collapsedCount,
  highestNote,
}: Props) {
  const [expanded, setExpanded] = useState(collapsedCount == null);
  const collapsible = collapsedCount != null && rows.length > collapsedCount + 1;
  const last = rows[rows.length - 1];
  const visible =
    expanded || !collapsible ? rows : [...rows.slice(0, collapsedCount), last];

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[360px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Provider</th>
              <th scope="col" className="px-3 py-3 font-semibold text-slate-900">{totalLabel}</th>
              <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-800">
            {visible.map((r) => (
              <tr key={r.provider}>
                <th scope="row" className="px-3 py-3 text-left font-medium text-slate-900">
                  {r.provider}
                  {highestNote && r === last ? (
                    <span className="ml-1 font-normal text-slate-500">({highestNote})</span>
                  ) : null}
                </th>
                <td className="whitespace-nowrap px-3 py-3 font-semibold tabular-nums">
                  {formatPillGbp(r.total)}
                </td>
                <td className="px-3 py-3">
                  <SourceTag source={r.source} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {collapsible ? (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="min-h-[44px] rounded-full px-4 text-sm font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
        >
          {expanded ? "Show fewer providers" : `Show all ${rows.length} providers`}
        </button>
      ) : null}
    </div>
  );
}
