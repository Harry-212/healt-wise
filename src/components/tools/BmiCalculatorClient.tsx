"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  Scale,
  Stethoscope,
} from "lucide-react";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  bmiBarPercent,
  bmiGaugeDegrees,
  categoryFromBmi,
  computeBmi,
  insightCallout,
  projectedBmiAfterWeightLossFraction,
  recommendedNextStep,
  treatmentEligibilityCopy,
} from "@/lib/bmi-calculator";

type HeightUnit = "cm" | "ft";
type WeightUnit = "kg" | "lbs" | "stone";

function parseNum(s: string): number {
  const n = Number(String(s).replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

function BmiScaleBar({ bmi }: { bmi: number }) {
  const pct = bmiBarPercent(bmi);
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        BMI scale (illustrative)
      </p>
      <div className="relative">
        <div className="grid h-3 grid-cols-4 overflow-hidden rounded-full text-[0.65rem] font-medium text-white">
          <div className="bg-sky-400/90" title="Underweight" />
          <div className="bg-emerald-500/90" title="Healthy" />
          <div className="bg-amber-500/90" title="Overweight" />
          <div className="bg-rose-500/90" title="Obese" />
        </div>
        <div
          className="absolute top-1/2 z-10 h-6 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow-md ring-2 ring-white"
          style={{ left: `${pct}%` }}
          aria-hidden
        />
      </div>
      <div className="flex justify-between text-[0.7rem] text-slate-500">
        <span>Underweight</span>
        <span>Healthy</span>
        <span>Overweight</span>
        <span>Obese</span>
      </div>
    </div>
  );
}

function BmiGauge({ bmi }: { bmi: number }) {
  const deg = bmiGaugeDegrees(bmi);
  const r = 56;
  const cx = 64;
  const cy = 60;
  const needleLen = r - 8;
  const rad = ((deg - 90) * Math.PI) / 180;
  const x2 = cx + needleLen * Math.cos(rad);
  const y2 = cy + needleLen * Math.sin(rad);

  return (
    <div className="flex flex-col items-center">
      <svg
        width="128"
        height="72"
        viewBox="0 0 128 72"
        className="text-slate-800"
        aria-hidden
      >
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="url(#bmiGaugeGrad)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="bmiGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#10b981" />
            <stop offset="60%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
        <line
          x1={cx}
          y1={cy}
          x2={x2}
          y2={y2}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx={cx} cy={cy} r="5" className="fill-slate-900" />
      </svg>
      <p className="mt-1 text-center text-[0.65rem] text-slate-500">
        Needle maps roughly to UK adult bands
      </p>
    </div>
  );
}

export default function BmiCalculatorClient() {
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");

  const [cm, setCm] = useState("170");
  const [ft, setFt] = useState("5");
  const [inches, setInches] = useState("10");

  const [kg, setKg] = useState("80");
  const [lbs, setLbs] = useState("176");
  const [stone, setStone] = useState("12");
  const [stoneLb, setStoneLb] = useState("8");

  const [error, setError] = useState<string | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const resultsPanelRef = useRef<HTMLElement | null>(null);

  /** After a successful calculation, bring the results stack into view smoothly (no manual scroll). */
  useLayoutEffect(() => {
    if (bmi == null) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let cancelled = false;
    const rafIds: number[] = [];

    const runScroll = () => {
      if (cancelled || !resultsPanelRef.current) return;
      resultsPanelRef.current.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    };

    /** Wait a few frames so layout + the results entrance animation can start, then smooth-scroll. */
    const queueFrames = (remaining: number, then: () => void) => {
      if (remaining <= 0) {
        then();
        return;
      }
      const id = window.requestAnimationFrame(() =>
        queueFrames(remaining - 1, then),
      );
      rafIds.push(id);
    };

    queueFrames(prefersReduced ? 1 : 5, runScroll);

    return () => {
      cancelled = true;
      for (const id of rafIds) window.cancelAnimationFrame(id);
    };
  }, [bmi]);

  const heightM = useMemo(() => {
      if (heightUnit === "cm") {
        const v = parseNum(cm);
        return Number.isFinite(v) && v > 0 ? v / 100 : NaN;
      }
      const f = parseNum(ft);
      const i = parseNum(inches);
      if (!Number.isFinite(f) || !Number.isFinite(i) || f < 0 || i < 0)
        return NaN;
      const totalIn = f * 12 + i;
      if (totalIn <= 0) return NaN;
      return totalIn * 0.0254;
    }, [heightUnit, cm, ft, inches]);

  const weightKg = useMemo(() => {
      if (weightUnit === "kg") {
        const v = parseNum(kg);
        return Number.isFinite(v) && v > 0 ? v : NaN;
      }
      if (weightUnit === "lbs") {
        const v = parseNum(lbs);
        return Number.isFinite(v) && v > 0 ? v * 0.45359237 : NaN;
      }
      const s = parseNum(stone);
      const sl = parseNum(stoneLb);
      if (
        !Number.isFinite(s) ||
        !Number.isFinite(sl) ||
        s < 0 ||
        sl < 0 ||
        sl >= 14
      ) {
        return NaN;
      }
      const totalLb = s * 14 + sl;
      if (totalLb <= 0) return NaN;
      return totalLb * 0.45359237;
    }, [weightUnit, kg, lbs, stone, stoneLb]);

  const calculate = useCallback(() => {
    setError(null);
    const h = heightM;
    const w = weightKg;
    if (!Number.isFinite(h) || h <= 0) {
      setError("Enter a valid height.");
      return;
    }
    if (!Number.isFinite(w) || w <= 0) {
      setError("Enter a valid weight.");
      return;
    }
    const result = computeBmi(h, w);
    if (result == null) {
      setError("Could not calculate BMI from those values.");
      return;
    }
    setBmi(result);
  }, [heightM, weightKg]);

  const category = bmi != null ? categoryFromBmi(bmi) : null;
  const nextStep = bmi != null ? recommendedNextStep(bmi) : null;
  const eligibility = bmi != null ? treatmentEligibilityCopy(bmi) : "";
  const callout = bmi != null ? insightCallout(bmi) : "";
  const bmi10 = bmi != null ? projectedBmiAfterWeightLossFraction(bmi, 0.1) : null;

  return (
    <div className="relative w-full overflow-x-clip">
      {/* Sticky hero — background stays put while panels stack over it */}
      <section className="sticky top-0 z-0 flex min-h-[100svh] flex-col">
        <div className="relative flex min-h-[100svh] flex-1 flex-col">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=75&w=2000"
            alt="Clinical care setting — decorative background for BMI calculator hero"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-slate-950/88 via-slate-950/82 to-slate-950/90"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-36 pt-10 sm:px-5 sm:pb-40 sm:pt-14 md:px-8">
            <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
              UK adults · Information only
            </p>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-center text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.35rem]">
              BMI calculator UK — see your result and what it means for weight
              loss treatment
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-slate-200/95 sm:text-base">
              Work out{" "}
              <strong className="font-semibold text-white">what is my BMI</strong>,
              check typical{" "}
              <strong className="font-semibold text-white">
                BMI for weight loss treatment
              </strong>{" "}
              bands, and explore whether you could discuss{" "}
              <strong className="font-semibold text-white">
                Wegovy or Mounjaro in the UK
              </strong>{" "}
              with a prescriber.
            </p>

            <div className="mx-auto mt-10 w-full max-w-lg space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-sm font-medium text-slate-100">
                      Height
                    </label>
                    <div className="inline-flex rounded-full bg-slate-900/60 p-0.5 text-[0.7rem] font-semibold ring-1 ring-white/15">
                      <button
                        type="button"
                        className={`rounded-full px-2.5 py-1 transition-colors ${heightUnit === "cm" ? "bg-white text-slate-900" : "text-slate-300 hover:text-white"}`}
                        onClick={() => setHeightUnit("cm")}
                      >
                        cm
                      </button>
                      <button
                        type="button"
                        className={`rounded-full px-2.5 py-1 transition-colors ${heightUnit === "ft" ? "bg-white text-slate-900" : "text-slate-300 hover:text-white"}`}
                        onClick={() => setHeightUnit("ft")}
                      >
                        ft / in
                      </button>
                    </div>
                  </div>
                  {heightUnit === "cm" ? (
                    <input
                      inputMode="decimal"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                      value={cm}
                      onChange={(e) => setCm(e.target.value)}
                      placeholder="e.g. 170"
                      aria-label="Height in centimetres"
                    />
                  ) : (
                    <div className="mt-2 flex gap-2">
                      <input
                        inputMode="numeric"
                        className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                        value={ft}
                        onChange={(e) => setFt(e.target.value)}
                        placeholder="ft"
                        aria-label="Feet"
                      />
                      <input
                        inputMode="decimal"
                        className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                        value={inches}
                        onChange={(e) => setInches(e.target.value)}
                        placeholder="in"
                        aria-label="Inches"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <label className="text-sm font-medium text-slate-100">
                      Weight
                    </label>
                    <div className="inline-flex rounded-full bg-slate-900/60 p-0.5 text-[0.65rem] font-semibold ring-1 ring-white/15">
                      {(
                        [
                          ["kg", "kg"] as const,
                          ["lbs", "lb"] as const,
                          ["stone", "st"] as const,
                        ] as const
                      ).map(([u, lab]) => (
                        <button
                          key={u}
                          type="button"
                          className={`rounded-full px-2 py-1 transition-colors ${weightUnit === u ? "bg-white text-slate-900" : "text-slate-300 hover:text-white"}`}
                          onClick={() => setWeightUnit(u)}
                        >
                          {lab}
                        </button>
                      ))}
                    </div>
                  </div>
                  {weightUnit === "kg" && (
                    <input
                      inputMode="decimal"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                      value={kg}
                      onChange={(e) => setKg(e.target.value)}
                      placeholder="e.g. 80"
                      aria-label="Weight in kilograms"
                    />
                  )}
                  {weightUnit === "lbs" && (
                    <input
                      inputMode="decimal"
                      className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                      value={lbs}
                      onChange={(e) => setLbs(e.target.value)}
                      placeholder="e.g. 176"
                      aria-label="Weight in pounds"
                    />
                  )}
                  {weightUnit === "stone" && (
                    <div className="mt-2 flex gap-2">
                      <input
                        inputMode="numeric"
                        className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                        value={stone}
                        onChange={(e) => setStone(e.target.value)}
                        placeholder="st"
                        aria-label="Stone"
                      />
                      <input
                        inputMode="decimal"
                        className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-3 py-2.5 text-white placeholder:text-slate-500 focus:border-emerald-400/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                        value={stoneLb}
                        onChange={(e) => setStoneLb(e.target.value)}
                        placeholder="lb"
                        aria-label="Pounds remaining"
                      />
                    </div>
                  )}
                </div>
              </div>

              {error && (
                <p className="text-sm font-medium text-amber-300" role="alert">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={calculate}
                className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-400 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Calculate my BMI
                <ChevronRight className="h-4 w-4 opacity-90" aria-hidden />
              </button>
              <p className="text-center text-[0.7rem] leading-snug text-slate-400">
                Not medical advice. Does not diagnose or prescribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping “card deck” panel */}
      <motion.section
        ref={resultsPanelRef}
        id="bmi-calculator-results"
        layout
        tabIndex={-1}
        aria-label="Your BMI results"
        className="relative z-10 -mt-28 scroll-mt-20 outline-none focus:outline-none sm:-mt-32 sm:scroll-mt-24 md:-mt-36 md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <motion.div
            initial={false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className="rounded-[1.35rem] border border-slate-200/90 bg-white shadow-[0_-12px_48px_-12px_rgba(15,23,42,0.25)] sm:rounded-t-[2rem]"
          >
            <div className="px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12">
              <AnimatePresence mode="wait">
                {bmi == null ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-6 text-center"
                  >
                    <p className="text-lg font-semibold text-slate-800">
                      Your results will stack here
                    </p>
                    <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                      Enter height and weight above, then tap{" "}
                      <span className="font-medium text-slate-800">
                        Calculate my BMI
                      </span>{" "}
                      to see your score, category, and UK treatment context.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="space-y-10"
                    aria-live="polite"
                  >
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                          <Activity className="h-5 w-5 text-violet-600" />
                        </div>
                        <p className="mt-4 text-3xl font-bold tabular-nums tracking-tight text-slate-900 sm:text-4xl">
                          {bmi}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          Your BMI score
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                          <Scale className="h-5 w-5 text-slate-600" />
                        </div>
                        <p className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
                          {category?.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          NHS-style category
                        </p>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 p-5 text-white shadow-lg shadow-emerald-900/20 ring-1 ring-emerald-700/50">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/95 shadow-md">
                          <Stethoscope className="h-5 w-5 text-emerald-950" />
                        </div>
                        <p className="mt-4 text-sm font-semibold leading-snug text-emerald-50">
                          Treatment eligibility (UK context)
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-emerald-100/95">
                          {eligibility}
                        </p>
                      </div>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                      <div className="space-y-6">
                        <BmiScaleBar bmi={bmi} />
                        <BmiGauge bmi={bmi} />
                      </div>
                      <div className="space-y-5">
                        <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-violet-800">
                            Insight
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-800">
                            {callout}
                          </p>
                        </div>
                        {nextStep && (
                          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                              Recommended next step
                            </p>
                            <p className="mt-2 font-semibold text-slate-900">
                              {nextStep.title}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                              {nextStep.body}
                            </p>
                          </div>
                        )}
                        <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                            Estimated weight loss potential
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-800">
                            With GLP-1 treatments, clinical studies often report
                            around{" "}
                            <strong className="font-semibold">
                              10–15% body weight reduction
                            </strong>{" "}
                            over time in suitable adults—your results could be
                            higher or lower.
                          </p>
                        </div>
                        {bmi10 != null && (
                          <p className="text-sm text-slate-600">
                            <span className="font-medium text-slate-800">
                              Illustrative projection:
                            </span>{" "}
                            if you lost ~10% of your body weight at this height,
                            your BMI would fall to about{" "}
                            <span className="font-semibold tabular-nums text-slate-900">
                              {bmi10}
                            </span>
                            .
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        <Link
                          href="/compare/wegovy-vs-mounjaro"
                          className="inline-flex min-h-11 items-center justify-center gap-1 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
                        >
                          Compare treatments
                          <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                        <Link
                          href="/prices/cheapest-options-uk"
                          className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900 bg-white px-5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                        >
                          See prices
                        </Link>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold">
                        <Link
                          href="/what-is-wegovy"
                          className="text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                        >
                          Wegovy guide
                        </Link>
                        <Link
                          href="/what-is-mounjaro"
                          className="text-violet-700 underline decoration-violet-300 underline-offset-2 hover:text-violet-900"
                        >
                          Mounjaro guide
                        </Link>
                        <Link
                          href="/wegovy-price-comparison"
                          className="text-slate-600 underline underline-offset-2 hover:text-slate-900"
                        >
                          Wegovy prices UK
                        </Link>
                        <Link
                          href="/mounjaro-price-comparison"
                          className="text-slate-600 underline underline-offset-2 hover:text-slate-900"
                        >
                          Mounjaro prices UK
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="h-6 bg-background md:h-10" aria-hidden />
    </div>
  );
}
