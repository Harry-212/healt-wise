"use client";

import { useState } from "react";
import {
  Syringe,
  Droplets,
  Layers,
  Brain,
  Hourglass,
  TrendingDown,
  ArrowRight,
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
    title: "Injection",
    short: "Weekly pen",
    detail:
      "Tirzepatide enters tissue and reaches the bloodstream after your once-weekly KwikPen injection.",
    Icon: Syringe,
  },
  {
    id: "dual",
    title: "Dual pathways",
    short: "GIP + GLP-1",
    detail:
      "Mounjaro activates both GIP and GLP-1 receptors—hormones involved after eating in appetite, digestion, and insulin regulation.",
    Icon: Layers,
  },
  {
    id: "brain",
    title: "Brain",
    short: "Appetite",
    detail:
      "Signalling helps reduce hunger and food-focused thoughts for many people, alongside smaller portions and less frequent snacking.",
    Icon: Brain,
  },
  {
    id: "stomach",
    title: "Stomach",
    short: "Slower emptying",
    detail:
      "Food may leave the stomach more slowly, helping fullness last longer after meals.",
    Icon: Hourglass,
  },
  {
    id: "result",
    title: "Outcome",
    short: "Metabolic support",
    detail:
      "Together, these effects support lower calorie intake and improved metabolic control for many users, alongside lifestyle change.",
    Icon: TrendingDown,
  },
];

export default function MounjaroBodyJourneyFlow() {
  const [active, setActive] = useState(0);

  return (
    <div className="rounded-2xl border border-slate-200/90 bg-linear-to-b from-violet-50/50 to-white p-4 shadow-sm md:p-6">
      <p className="mb-4 text-sm font-medium text-slate-700">
        Journey of Mounjaro in the body — dual GIP and GLP-1 pathways. Tap a step
        to read more.
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
                    ? "bg-violet-600 text-white shadow-md ring-2 ring-violet-300"
                    : "bg-white/90 text-slate-700 ring-1 ring-slate-200 hover:bg-violet-50/80"
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
        className="mt-5 rounded-xl border border-violet-100 bg-white/90 p-4 text-sm leading-relaxed text-slate-700"
        role="status"
        aria-live="polite"
      >
        <p className="font-semibold text-violet-900">
          {STEPS[active]?.title}: {STEPS[active]?.short}
        </p>
        <p className="mt-2">{STEPS[active]?.detail}</p>
      </div>
    </div>
  );
}
