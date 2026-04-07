"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKS: {
  key: string;
  title: string;
  dose: string;
  points: string[];
}[] = [
  {
    key: "w1",
    title: "Week 1",
    dose: "0.6 mg daily",
    points: [
      "Starting dose to improve tolerability.",
      "Mild appetite changes may begin for some people.",
    ],
  },
  {
    key: "w2",
    title: "Week 2",
    dose: "1.2 mg daily",
    points: [
      "Step-up as prescribed if side effects are manageable.",
      "Early adjustment to daily injections continues.",
    ],
  },
  {
    key: "w3",
    title: "Week 3",
    dose: "1.8 mg daily",
    points: [
      "Further titration toward therapeutic range.",
      "Nausea or GI upset may still occur—report severe symptoms to your clinician.",
    ],
  },
  {
    key: "w4",
    title: "Week 4",
    dose: "2.4 mg daily",
    points: [
      "Approaching maintenance-range dosing for many users.",
      "Portion control may feel easier when treatment is tolerated.",
    ],
  },
  {
    key: "w5",
    title: "Week 5+",
    dose: "3.0 mg daily (maintenance)",
    points: [
      "Licensed maintenance dose for many adults on Saxenda (individual plans vary).",
      "Clinical trials assessed weight change over many months alongside diet and activity support.",
    ],
  },
];

export default function SaxendaWeekDoseTimeline() {
  const [index, setIndex] = useState(0);
  const step = WEEKS[index]!;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {WEEKS.map((w, i) => (
            <button
              key={w.key}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition md:text-sm ${
                i === index
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {w.title.replace("Week ", "W")}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous week"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next week"
            onClick={() => setIndex((i) => Math.min(WEEKS.length - 1, i + 1))}
            disabled={index === WEEKS.length - 1}
            className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-slate-50/90 p-4 md:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-800">
          Weekly dose escalation (illustrative)
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
        Why escalation matters: it reduces nausea risk, helps the body adapt, and
        supports adherence. Your prescriber may slow or pause titration if needed.
      </p>
    </div>
  );
}
