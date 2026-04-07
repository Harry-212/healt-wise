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
    dose: "2.5 mg",
    points: [
      "Initial adjustment phase; body begins adapting to treatment.",
      "Appetite changes may begin for some people.",
      "Minimal weight change is common early on.",
    ],
  },
  {
    key: "m2",
    title: "Month 2",
    dose: "5 mg",
    points: [
      "Increased appetite control for many users.",
      "Early weight loss may appear on the scales for some.",
    ],
  },
  {
    key: "m3",
    title: "Month 3",
    dose: "7.5 mg",
    points: [
      "Stronger effects on hunger for many people.",
      "More consistent progress may show with tolerated doses.",
    ],
  },
  {
    key: "m4",
    title: "Month 4",
    dose: "10 mg",
    points: [
      "Significant appetite reduction for many who reach this step.",
      "Noticeable weight loss may accumulate alongside lifestyle support.",
    ],
  },
  {
    key: "m5",
    title: "Month 5+",
    dose: "12.5–15 mg",
    points: [
      "Full therapeutic effect for many at the highest licensed titration steps.",
      "Clinical trials show substantial mean weight reduction over time—not a guarantee for any individual.",
    ],
  },
];

export default function MounjaroMonthTimeline() {
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
                  ? "bg-violet-600 text-white shadow-sm"
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
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-800">
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
        Your prescriber sets the schedule; UK SmPC and individual tolerance
        matter—not everyone reaches every dose on the same timeline.
      </p>
    </div>
  );
}
