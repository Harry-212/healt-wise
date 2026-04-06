"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS: {
  key: string;
  title: string;
  dose: string;
  points: string[];
}[] = [
  {
    key: "m1",
    title: "Month 1",
    dose: "0.25 mg",
    points: [
      "Body begins adjusting to treatment.",
      "Reduced appetite may be noticeable.",
      "Early, gradual weight changes for some people.",
    ],
  },
  {
    key: "m2",
    title: "Month 2",
    dose: "0.5 mg",
    points: [
      "Appetite control may feel more consistent.",
      "Initial weight loss may begin for many users.",
    ],
  },
  {
    key: "m3",
    title: "Month 3",
    dose: "1.0 mg",
    points: [
      "Stronger reduction in hunger for many people.",
      "More visible progress may appear on the scales.",
    ],
  },
  {
    key: "m4",
    title: "Month 4",
    dose: "1.7 mg",
    points: [
      "Approaching commonly used maintenance-range doses.",
      "Continued steady weight loss when treatment is tolerated.",
    ],
  },
  {
    key: "m5",
    title: "Month 5+",
    dose: "2.4 mg (maintenance)",
    points: [
      "Full therapeutic effect for many who reach this dose.",
      "Clinical trials show significant weight reduction over time with lifestyle support.",
    ],
  },
];

export default function WegovyMonthTimeline() {
  const [index, setIndex] = useState(0);
  const step = MONTHS[index]!;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {MONTHS.map((m, i) => (
            <button
              key={m.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition md:text-sm ${
                i === index
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {m.title.replace("Month ", "M")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setIndex((i) => Math.min(MONTHS.length - 1, i + 1))}
            disabled={index === MONTHS.length - 1}
            className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-slate-50/90 p-4 md:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
          Typical titration (illustrative)
        </p>
        <h4 className="mt-1 text-lg font-bold text-slate-900">
          {step.title} — {step.dose}
        </h4>
        <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-700">
          {step.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Your prescriber sets the schedule; not everyone follows the same calendar or
        reaches every dose.
      </p>
    </div>
  );
}
