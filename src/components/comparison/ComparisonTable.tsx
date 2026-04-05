"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { PharmacyProvider } from "@/lib/types/provider";
import {
  consultationLabel,
  formatGBP,
  getMonthlyCost,
} from "@/lib/provider-helpers";

type SortKey =
  | "provider"
  | "price"
  | "monthly"
  | "consultation"
  | "delivery";

export interface ComparisonTableProps {
  providers: PharmacyProvider[];
  className?: string;
}

export default function ComparisonTable({
  providers,
  className = "",
}: ComparisonTableProps) {
  const [medication, setMedication] = useState<
    "all" | PharmacyProvider["brandOffered"]
  >("all");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [providerQuery, setProviderQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("price");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filteredSorted = useMemo(() => {
    const max = maxPrice.trim() === "" ? null : Number.parseFloat(maxPrice);
    const q = providerQuery.trim().toLowerCase();

    let rows = providers.filter((p) => {
      if (medication !== "all" && p.brandOffered !== medication) {
        if (medication === "Mounjaro" || medication === "Wegovy") {
          if (p.brandOffered !== "Both" && p.brandOffered !== medication)
            return false;
        } else if (p.brandOffered !== medication) return false;
      }
      if (max !== null && !Number.isNaN(max) && p.totalPrice > max)
        return false;
      if (q && !p.name.toLowerCase().includes(q)) return false;
      return true;
    });

    const dir = sortDir === "asc" ? 1 : -1;
    rows = [...rows].sort((a, b) => {
      let cmp = 0;
      switch (sortKey) {
        case "provider":
          cmp = a.name.localeCompare(b.name);
          break;
        case "price":
          cmp = a.totalPrice - b.totalPrice;
          break;
        case "monthly":
          cmp = getMonthlyCost(a) - getMonthlyCost(b);
          break;
        case "consultation": {
          const ac =
            a.consultationCost === "Included"
              ? 0
              : typeof a.consultationCost === "number"
                ? a.consultationCost
                : 9999;
          const bc =
            b.consultationCost === "Included"
              ? 0
              : typeof b.consultationCost === "number"
                ? b.consultationCost
                : 9999;
          cmp = ac - bc;
          break;
        }
        case "delivery":
          cmp = a.deliverySpeed.localeCompare(b.deliverySpeed);
          break;
        default:
          cmp = 0;
      }
      return cmp * dir;
    });

    return rows;
  }, [providers, medication, maxPrice, providerQuery, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir(key === "provider" || key === "delivery" ? "asc" : "asc");
    }
  }

  const thBtn =
    "inline-flex items-center gap-1 font-semibold text-brand-secondary hover:text-brand-cta";

  return (
    <div className={className}>
      <div className="mb-4 flex flex-col gap-3 rounded-xl border border-brand-border bg-brand-card p-4 shadow-sm md:flex-row md:flex-wrap md:items-end">
        <label className="flex min-w-[140px] flex-col gap-1 text-xs font-medium text-brand-secondary">
          Medication
          <select
            value={medication}
            onChange={(e) =>
              setMedication(e.target.value as typeof medication)
            }
            className="rounded-lg border border-brand-border bg-brand-card px-3 py-2 text-sm text-brand-primary"
          >
            <option value="all">All</option>
            <option value="Wegovy">Wegovy</option>
            <option value="Mounjaro">Mounjaro</option>
            <option value="Both">Both</option>
            <option value="Saxenda">Saxenda</option>
          </select>
        </label>
        <label className="flex min-w-[140px] flex-col gap-1 text-xs font-medium text-brand-secondary">
          Max price (£)
          <input
            type="number"
            min={0}
            step={1}
            placeholder="Any"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="rounded-lg border border-brand-border bg-brand-card px-3 py-2 text-sm text-brand-primary"
          />
        </label>
        <label className="flex min-w-[180px] flex-1 flex-col gap-1 text-xs font-medium text-brand-secondary">
          Provider
          <input
            type="search"
            placeholder="Search name"
            value={providerQuery}
            onChange={(e) => setProviderQuery(e.target.value)}
            className="rounded-lg border border-brand-border bg-brand-card px-3 py-2 text-sm text-brand-primary"
          />
        </label>
      </div>

      <div className="relative rounded-xl border border-brand-border bg-brand-card shadow-sm">
        <p className="px-4 pt-3 text-xs text-brand-secondary md:hidden">
          Scroll horizontally to see all columns
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-brand-surface shadow-sm">
              <tr className="border-b border-brand-border">
                <th className="px-4 py-3">
                  <button
                    type="button"
                    className={thBtn}
                    onClick={() => toggleSort("provider")}
                  >
                    Provider
                    {sortKey === "provider" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-4 py-3">
                  <button
                    type="button"
                    className={thBtn}
                    onClick={() => toggleSort("price")}
                  >
                    Price (from)
                    {sortKey === "price" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-4 py-3">
                  <button
                    type="button"
                    className={thBtn}
                    onClick={() => toggleSort("monthly")}
                  >
                    Monthly cost
                    {sortKey === "monthly" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-4 py-3">
                  <button
                    type="button"
                    className={thBtn}
                    onClick={() => toggleSort("consultation")}
                  >
                    Consultation
                    {sortKey === "consultation"
                      ? sortDir === "asc"
                        ? " ↑"
                        : " ↓"
                      : ""}
                  </button>
                </th>
                <th className="px-4 py-3">
                  <button
                    type="button"
                    className={thBtn}
                    onClick={() => toggleSort("delivery")}
                  >
                    Delivery
                    {sortKey === "delivery" ? (sortDir === "asc" ? " ↑" : " ↓") : ""}
                  </button>
                </th>
                <th className="px-4 py-3 text-right font-semibold text-brand-secondary">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredSorted.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-brand-secondary"
                  >
                    No providers match your filters.
                  </td>
                </tr>
              ) : (
                filteredSorted.map((p) => {
                  const href =
                    p.affiliateUrl ??
                    (p.brandOffered === "Wegovy" ||
                    (p.brandOffered === "Both" && p.totalPrice % 2 === 0)
                      ? "/wegovy-price-comparison"
                      : "/mounjaro-price-comparison");
                  return (
                    <tr
                      key={p.id}
                      className="border-b border-brand-border/80 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-brand-primary">
                        {p.name}
                      </td>
                      <td className="px-4 py-3 text-brand-primary">
                        {formatGBP(p.totalPrice)}
                      </td>
                      <td className="px-4 py-3 text-brand-primary">
                        {formatGBP(getMonthlyCost(p))}
                      </td>
                      <td className="px-4 py-3 text-brand-primary">
                        {consultationLabel(p.consultationCost)}
                      </td>
                      <td className="px-4 py-3 text-brand-secondary">
                        {p.deliverySpeed}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link
                          href={href}
                          className="inline-flex rounded-lg bg-brand-cta px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
                        >
                          Check Price
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
    </div>
  );
}
