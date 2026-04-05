"use client";

import { useState } from "react";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";

export default function DosageCalculatorPage() {
  const [brand, setBrand] = useState<"wegovy" | "mounjaro">("wegovy");

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Dosage calculator
      </h1>
      <p className="mt-4 text-slate-600">
        Dose changes must follow your prescriber. Use this as a reminder of
        common titration steps—always follow your individual plan and PIL.
      </p>
      <div className="mt-8 rounded-xl border border-brand-border bg-brand-surface/50 p-6">
        <label className="text-sm font-medium text-slate-700">
          Brand
          <select
            className="mt-2 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={brand}
            onChange={(e) =>
              setBrand(e.target.value as "wegovy" | "mounjaro")
            }
          >
            <option value="wegovy">Wegovy (semaglutide)</option>
            <option value="mounjaro">Mounjaro (tirzepatide)</option>
          </select>
        </label>
        <ul className="mt-6 list-inside list-disc text-sm text-slate-600">
          {brand === "wegovy" ? (
            <>
              <li>Typical titration steps: 0.25 → 0.5 → 1.0 → 1.7 → 2.4 mg</li>
              <li>See our full guide for timing and tolerability.</li>
            </>
          ) : (
            <>
              <li>Typical titration steps: 2.5 → 5 → 7.5 → 10 → 12.5 → 15 mg</li>
              <li>See our full guide for timing and tolerability.</li>
            </>
          )}
        </ul>
      </div>
      <div className="mt-12">
        <InternalLinks links={internalLinksFor("home")} />
      </div>
    </div>
  );
}
