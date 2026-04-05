"use client";

import { useMemo, useState } from "react";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";

export default function ProgressEstimatorPage() {
  const [start, setStart] = useState(95);
  const [current, setCurrent] = useState(88);
  const [goal, setGoal] = useState(80);

  const pct = useMemo(() => {
    if (start <= goal) return 0;
    const total = start - goal;
    const done = start - current;
    return Math.max(0, Math.min(100, Math.round((done / total) * 100)));
  }, [start, current, goal]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 md:px-6">
      <h1 className="text-3xl font-bold text-slate-900">
        Progress estimator
      </h1>
      <p className="mt-4 text-slate-600">
        For motivation only—not a clinical prediction. Weight change varies by
        person, dose, diet, and activity.
      </p>
      <div className="mt-8 space-y-4 rounded-xl border border-brand-border bg-brand-surface/50 p-6">
        <label className="block text-sm font-medium">
          Start weight (kg)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium">
          Current weight (kg)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={current}
            onChange={(e) => setCurrent(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm font-medium">
          Goal weight (kg)
          <input
            type="number"
            className="mt-1 w-full rounded-lg border border-brand-border bg-white px-3 py-2"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </label>
        <p className="text-lg font-semibold text-brand-primary">
          Progress toward goal (illustrative): {pct}%
        </p>
      </div>
      <div className="mt-12">
        <InternalLinks links={internalLinksFor("home")} />
      </div>
    </div>
  );
}
