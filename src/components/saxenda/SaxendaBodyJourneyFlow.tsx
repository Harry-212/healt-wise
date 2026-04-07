"use client";

import { useState } from "react";
import {
  Syringe,
  Droplets,
  Brain,
  Hourglass,
  ArrowRight,
  UtensilsCrossed,
} from "lucide-react";

const STEPS: {
  id: string;
  title: string;
  short: string;
  detail: string;
  Icon: typeof Syringe;
}[] = [
  {
    id: "inject",
    title: "Daily injection",
    short: "Once daily",
    detail:
      "Liraglutide is injected once daily at a similar time. The pen delivers a set dose after your prescriber’s titration plan.",
    Icon: Syringe,
  },
  {
    id: "blood",
    title: "Circulation",
    short: "Distribution",
    detail:
      "The medicine reaches target tissues including the brain (hypothalamus), gut, and pancreas.",
    Icon: Droplets,
  },
  {
    id: "brain",
    title: "Hypothalamus",
    short: "Appetite",
    detail:
      "GLP-1 receptor activation in appetite centres helps reduce hunger signals and “food noise,” supporting smaller portions and lower calorie intake.",
    Icon: Brain,
  },
  {
    id: "stomach",
    title: "Stomach & gut",
    short: "Slower emptying",
    detail:
      "Food may leave the stomach more slowly, prolonging fullness and stabilising appetite between meals.",
    Icon: Hourglass,
  },
  {
    id: "outcome",
    title: "Calorie intake",
    short: "Not a metabolism boost",
    detail:
      "Saxenda mainly helps you eat less by appetite regulation and slower digestion—not by dramatically increasing resting metabolism. Sustainable lifestyle change remains essential.",
    Icon: UtensilsCrossed,
  },
];

export default function SaxendaBodyJourneyFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-linear-to-b from-sky-50/50 to-white p-4 shadow-sm md:p-6">
      <p className="mb-4 text-sm font-medium text-slate-700">
        How Saxenda regulates appetite — tap a step to read more.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-1 md:gap-2">
        {STEPS.map((s, i) => {
          const Icon = s.Icon;
          const isOn = active === i;
          return (
            <div key={s.id} className="flex items-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-1 rounded-xl px-2 py-2 text-center transition md:min-w-[4.5rem] md:px-3 ${
                  isOn
                    ? "bg-sky-600 text-white shadow-md ring-2 ring-sky-300"
                    : "bg-white/90 text-slate-700 ring-1 ring-slate-200 hover:bg-sky-50/80"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0 md:h-6 md:w-6" aria-hidden />
                <span className="max-w-[4.5rem] text-[10px] font-semibold leading-tight md:text-xs">
                  {s.title}
                </span>
              </button>
              {i < STEPS.length - 1 ? (
                <ArrowRight
                  className="mx-0.5 h-4 w-4 shrink-0 text-slate-400 md:mx-1"
                  aria-hidden
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <div
        className="mt-5 rounded-xl border border-sky-100 bg-white/90 p-4 text-sm leading-relaxed text-slate-700"
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold text-sky-900">
          {STEPS[active]?.title}: {STEPS[active]?.short}
        </p>
        <p className="mt-2">{STEPS[active]?.detail}</p>
      </div>
    </div>
  );
}
