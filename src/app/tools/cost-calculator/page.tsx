"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";
import { formatGBP } from "@/lib/provider-helpers";

export default function CostCalculatorPage() {
  const [pen, setPen] = useState(169);
  const [consult, setConsult] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [weeks, setWeeks] = useState(4);

  const monthly = useMemo(() => {
    const perMonth = (weeks > 0 ? 4 / weeks : 1) * pen;
    return perMonth + consult + delivery;
  }, [pen, consult, delivery, weeks]);

  return (
    <div className="mx-auto max-w-2xl px-4 pb-20 pt-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
      <h1 className="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
        Cost calculator
      </h1>
      <p className="mt-4 text-slate-600">
        Illustrative only—adjust to match your prescriber and pharmacy. Add
        consultation and delivery to see a rough monthly equivalent.
      </p>
      <div className="mt-8 space-y-4 rounded-xl border border-brand-border bg-brand-surface/50 p-6">
        <label className="block text-sm font-medium text-slate-700">
          Pen / pack price (£)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={pen}
            min={0}
            onChange={(e) => setPen(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Consultation (£ / month)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={consult}
            min={0}
            onChange={(e) => setConsult(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Delivery (£ / month)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={delivery}
            min={0}
            onChange={(e) => setDelivery(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Weeks per pack
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={weeks}
            min={1}
            onChange={(e) => setWeeks(Number(e.target.value))}
          />
        </label>
        <p className="text-lg font-semibold text-brand-primary">
          Estimated monthly (illustrative): {formatGBP(monthly)}
        </p>
      </div>
      <Link
        href="/prices/cheapest-options-uk"
        className="mt-6 inline-flex text-sm font-semibold text-brand-cta underline"
      >
        Find cheapest option
      </Link>
      <div className="mt-12">
        <InternalLinks links={internalLinksFor("home")} />
      </div>
    </div>
  );
}
