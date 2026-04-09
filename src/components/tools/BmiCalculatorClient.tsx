"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ChevronDown,
  Scale,
  Stethoscope,
  Utensils,
  Zap,
} from "lucide-react";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  ACTIVITY_LEVELS,
  bmiBarPercent,
  bmrInsight,
  calorieTargets,
  categoryFromBmi,
  computeBmi,
  computeBmr,
  computeTdee,
  insightCallout,
  projectedBmiAfterWeightLossFraction,
  recommendedNextStep,
  treatmentEligibilityCopy,
  type ActivityLevel,
  type Gender,
} from "@/lib/bmi-calculator";

/* ── types ────────────────────────────────────────────────────────── */
type Tab = "bmi" | "bmr" | "tdee";
type HeightUnit = "cm" | "ft";
type WeightUnit = "kg" | "lbs" | "stone";

const TABS: { id: Tab; label: string; short: string }[] = [
  { id: "bmi", label: "Simple BMI", short: "BMI" },
  { id: "bmr", label: "BMI + BMR", short: "BMI+BMR" },
  { id: "tdee", label: "TDEE & Calorie Needs", short: "TDEE" },
];

/* ── helpers ──────────────────────────────────────────────────────── */
function pn(s: string) {
  const n = Number(String(s).replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

/* ── animated number ──────────────────────────────────────────────── */
function AnimNum({
  value,
  decimals = 0,
}: {
  value: number;
  decimals?: number;
}) {
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 120, damping: 22 });
  const [display, setDisplay] = useState(value.toFixed(decimals));
  useEffect(() => {
    mv.set(value);
    return spring.on("change", (v) => setDisplay(v.toFixed(decimals)));
  }, [value, decimals, mv, spring]);
  return <>{display}</>;
}

/* ── BMI scale bar ────────────────────────────────────────────────── */
function BmiBar({ bmi }: { bmi: number }) {
  const pct = bmiBarPercent(bmi);
  const cat = categoryFromBmi(bmi);
  return (
    <div className="space-y-2">
      <div className="relative">
        <div className="flex h-2.5 overflow-hidden rounded-full">
          <div className="flex-[18.5] bg-sky-400" />
          <div className="flex-[6.5] bg-emerald-500" />
          <div className="flex-[5] bg-amber-500" />
          <div className="flex-[10] bg-rose-500" />
        </div>
        <motion.div
          className="absolute top-1/2 h-5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 shadow ring-2 ring-white"
          animate={{ left: `${pct}%` }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          aria-hidden
        />
      </div>
      <div className="flex justify-between text-[0.68rem] font-medium text-slate-500">
        <span>Underweight</span>
        <span>Healthy</span>
        <span>Overweight</span>
        <span>Obese</span>
      </div>
      <p className="text-xs text-slate-500">
        Your marker:{" "}
        <span style={{ color: cat.color }} className="font-semibold">
          {cat.label}
        </span>
      </p>
    </div>
  );
}

/* ── semi-circle gauge ────────────────────────────────────────────── */
function Gauge({ bmi }: { bmi: number }) {
  const r = 52, cx = 64, cy = 62, len = r - 10;
  const degRaw = ((bmi - 16) / 26) * 180;
  const deg = Math.max(0, Math.min(180, degRaw));
  const rad = ((deg - 90) * Math.PI) / 180;
  const x2 = cx + len * Math.cos(rad);
  const y2 = cy + len * Math.sin(rad);

  return (
    <svg width="128" height="72" viewBox="0 0 128 72" aria-hidden>
      <defs>
        <linearGradient id="gaugeG" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="38%" stopColor="#10b981" />
          <stop offset="62%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      <path
        d={`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`}
        fill="none"
        stroke="url(#gaugeG)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <motion.line
        x1={cx} y1={cy} x2={x2} y2={y2}
        stroke="#0f172a"
        strokeWidth="2.5"
        strokeLinecap="round"
        animate={{ x2, y2 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
      />
      <circle cx={cx} cy={cy} r="5" fill="#0f172a" />
    </svg>
  );
}

/* ── calorie row ──────────────────────────────────────────────────── */
function CalRow({
  label,
  sub,
  value,
  accent = false,
}: {
  label: string;
  sub: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${accent ? "bg-slate-900 text-white" : "bg-slate-50 ring-1 ring-slate-200/80"}`}
    >
      <div>
        <p className={`text-sm font-semibold ${accent ? "text-white" : "text-slate-800"}`}>
          {label}
        </p>
        <p className={`text-xs ${accent ? "text-slate-300" : "text-slate-500"}`}>{sub}</p>
      </div>
      <p className={`tabular-nums text-xl font-bold ${accent ? "text-white" : "text-slate-900"}`}>
        <AnimNum value={value} />
        <span className="ml-1 text-sm font-normal opacity-70">kcal</span>
      </p>
    </div>
  );
}

/* ── shared inputs component ──────────────────────────────────────── */
interface InputsProps {
  tab: Tab;
  // height
  heightUnit: HeightUnit;
  setHeightUnit: (u: HeightUnit) => void;
  cm: string; setCm: (v: string) => void;
  ft: string; setFt: (v: string) => void;
  ins: string; setIns: (v: string) => void;
  // weight
  weightUnit: WeightUnit;
  setWeightUnit: (u: WeightUnit) => void;
  kg: string; setKg: (v: string) => void;
  lbs: string; setLbs: (v: string) => void;
  stone: string; setStone: (v: string) => void;
  stoneLb: string; setStoneLb: (v: string) => void;
  // advanced
  age: string; setAge: (v: string) => void;
  gender: Gender; setGender: (g: Gender) => void;
  activity: ActivityLevel; setActivity: (a: ActivityLevel) => void;
}

const INPUT_CLS =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/30";

const SEG_BASE = "rounded-lg px-2.5 py-1 text-[0.72rem] font-semibold transition-colors";
const SEG_ON = `${SEG_BASE} bg-slate-900 text-white`;
const SEG_OFF = `${SEG_BASE} text-slate-500 hover:text-slate-900`;

function Inputs(p: InputsProps) {
  return (
    <div className="space-y-4">
      {/* Height */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <label className="text-sm font-medium text-slate-700">Height</label>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            <button type="button" className={p.heightUnit === "cm" ? SEG_ON : SEG_OFF} onClick={() => p.setHeightUnit("cm")}>cm</button>
            <button type="button" className={p.heightUnit === "ft" ? SEG_ON : SEG_OFF} onClick={() => p.setHeightUnit("ft")}>ft / in</button>
          </div>
        </div>
        {p.heightUnit === "cm" ? (
          <input inputMode="decimal" className={INPUT_CLS} value={p.cm} onChange={(e) => p.setCm(e.target.value)} placeholder="e.g. 170" aria-label="Height cm" />
        ) : (
          <div className="mt-1.5 flex gap-2">
            <input inputMode="numeric" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/30" value={p.ft} onChange={(e) => p.setFt(e.target.value)} placeholder="ft" aria-label="Feet" />
            <input inputMode="decimal" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/30" value={p.ins} onChange={(e) => p.setIns(e.target.value)} placeholder="in" aria-label="Inches" />
          </div>
        )}
      </div>

      {/* Weight */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <label className="text-sm font-medium text-slate-700">Weight</label>
          <div className="inline-flex rounded-lg border border-slate-200 bg-slate-50 p-0.5">
            {(["kg","lbs","stone"] as WeightUnit[]).map((u) => (
              <button key={u} type="button" className={p.weightUnit === u ? SEG_ON : SEG_OFF} onClick={() => p.setWeightUnit(u)}>
                {u === "stone" ? "st" : u}
              </button>
            ))}
          </div>
        </div>
        {p.weightUnit === "kg" && <input inputMode="decimal" className={INPUT_CLS} value={p.kg} onChange={(e) => p.setKg(e.target.value)} placeholder="e.g. 80" aria-label="Weight kg" />}
        {p.weightUnit === "lbs" && <input inputMode="decimal" className={INPUT_CLS} value={p.lbs} onChange={(e) => p.setLbs(e.target.value)} placeholder="e.g. 176" aria-label="Weight lbs" />}
        {p.weightUnit === "stone" && (
          <div className="mt-1.5 flex gap-2">
            <input inputMode="numeric" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/30" value={p.stone} onChange={(e) => p.setStone(e.target.value)} placeholder="st" aria-label="Stone" />
            <input inputMode="decimal" className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/30" value={p.stoneLb} onChange={(e) => p.setStoneLb(e.target.value)} placeholder="lb" aria-label="Lbs part" />
          </div>
        )}
      </div>

      {/* Age + Gender for BMR and TDEE tabs */}
      {(p.tab === "bmr" || p.tab === "tdee") && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-slate-700">Age (years)</label>
              <input inputMode="numeric" className={INPUT_CLS} value={p.age} onChange={(e) => p.setAge(e.target.value)} placeholder="e.g. 34" aria-label="Age" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Gender</label>
              <div className="mt-1.5 flex h-[42px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <button type="button" className={`flex-1 text-sm font-semibold transition-colors ${p.gender === "male" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`} onClick={() => p.setGender("male")}>Male</button>
                <button type="button" className={`flex-1 text-sm font-semibold transition-colors ${p.gender === "female" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"}`} onClick={() => p.setGender("female")}>Female</button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Activity level for TDEE tab */}
      {p.tab === "tdee" && (
        <div>
          <label className="text-sm font-medium text-slate-700">Activity level</label>
          <div className="relative mt-1.5">
            <select
              value={p.activity}
              onChange={(e) => p.setActivity(e.target.value as ActivityLevel)}
              className={`${INPUT_CLS} mt-0 appearance-none pr-8`}
              aria-label="Activity level"
            >
              {(Object.entries(ACTIVITY_LEVELS) as [ActivityLevel, { label: string }][]).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function BmiCalculatorClient() {
  /* shared inputs */
  const [tab, setTab] = useState<Tab>("bmi");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [cm, setCm] = useState("170");
  const [ft, setFt] = useState("5");
  const [ins, setIns] = useState("10");
  const [kg, setKg] = useState("80");
  const [lbs, setLbs] = useState("176");
  const [stone, setStone] = useState("12");
  const [stoneLb, setStoneLb] = useState("8");
  /* advanced */
  const [age, setAge] = useState("34");
  const [gender, setGender] = useState<Gender>("male");
  const [activity, setActivity] = useState<ActivityLevel>("light");

  const resultRef = useRef<HTMLDivElement | null>(null);
  const prevTabRef = useRef<Tab>(tab);

  /* derived values — real-time */
  const heightM = useMemo(() => {
    if (heightUnit === "cm") {
      const v = pn(cm); return v > 0 ? v / 100 : NaN;
    }
    const f = pn(ft), i = pn(ins);
    if (!Number.isFinite(f) || !Number.isFinite(i) || f < 0 || i < 0) return NaN;
    const tot = f * 12 + i;
    return tot > 0 ? tot * 0.0254 : NaN;
  }, [heightUnit, cm, ft, ins]);

  const weightKg = useMemo(() => {
    if (weightUnit === "kg") { const v = pn(kg); return v > 0 ? v : NaN; }
    if (weightUnit === "lbs") { const v = pn(lbs); return v > 0 ? v * 0.45359237 : NaN; }
    const s = pn(stone), sl = pn(stoneLb);
    if (!Number.isFinite(s) || !Number.isFinite(sl) || sl >= 14) return NaN;
    const tot = s * 14 + sl;
    return tot > 0 ? tot * 0.45359237 : NaN;
  }, [weightUnit, kg, lbs, stone, stoneLb]);

  const heightCm = useMemo(() => Number.isFinite(heightM) ? Math.round(heightM * 100) : NaN, [heightM]);
  const ageNum = useMemo(() => { const v = pn(age); return v >= 15 && v <= 100 ? v : NaN; }, [age]);

  const bmi = useMemo(() => computeBmi(heightM, weightKg), [heightM, weightKg]);
  const bmr = useMemo(() => computeBmr(weightKg, heightCm, ageNum, gender), [weightKg, heightCm, ageNum, gender]);
  const tdee = useMemo(() => (bmr != null ? computeTdee(bmr, activity) : null), [bmr, activity]);
  const calTargets = useMemo(() => (tdee != null ? calorieTargets(tdee) : null), [tdee]);

  const hasResult = useMemo(() => {
    if (tab === "bmi") return bmi != null;
    if (tab === "bmr") return bmi != null && bmr != null;
    return tdee != null && bmi != null;
  }, [tab, bmi, bmr, tdee]);

  /* scroll to result on first result */
  useLayoutEffect(() => {
    if (!hasResult || !resultRef.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ids: number[] = [];
    let cancelled = false;
    const scroll = () => {
      if (!cancelled && resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
      }
    };
    const queue = (n: number) => {
      if (n <= 0) { scroll(); return; }
      ids.push(requestAnimationFrame(() => queue(n - 1)));
    };
    queue(prefersReduced ? 1 : 5);
    return () => { cancelled = true; ids.forEach(cancelAnimationFrame); };
  }, [hasResult]);

  /* derived display */
  const category = bmi != null ? categoryFromBmi(bmi) : null;
  const eligibility = bmi != null ? treatmentEligibilityCopy(bmi) : null;
  const nextStep = bmi != null ? recommendedNextStep(bmi) : null;
  const callout = bmi != null ? insightCallout(bmi) : null;
  const bmi10 = bmi != null ? projectedBmiAfterWeightLossFraction(bmi, 0.1) : null;
  const bmrNote = bmr != null ? bmrInsight(bmr, gender) : null;

  const inputProps: InputsProps = {
    tab, heightUnit, setHeightUnit, cm, setCm, ft, setFt, ins, setIns,
    weightUnit, setWeightUnit, kg, setKg, lbs, setLbs, stone, setStone, stoneLb, setStoneLb,
    age, setAge, gender, setGender, activity, setActivity,
  };

  /* tab change: reset result scroll */
  function handleTabChange(t: Tab) {
    prevTabRef.current = tab;
    setTab(t);
  }

  return (
    <div className="relative w-full overflow-x-clip">
      {/* ── Sticky hero ──────────────────────────────────────────── */}
      <section className="sticky top-0 z-0 flex min-h-svh flex-col">
        <div className="relative flex min-h-svh flex-1 flex-col">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=75&w=2000"
            alt="Clinical health assessment setting"
            fill priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/88 via-slate-950/82 to-slate-950/92" aria-hidden />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pb-44 pt-12 text-center sm:px-5 sm:pb-52 md:px-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90">
              UK adults · Information only
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.4rem]">
              BMI, BMR & Calorie Calculator UK
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/95 sm:text-base">
              Calculate your{" "}
              <strong className="font-semibold text-white">BMI</strong>,{" "}
              <strong className="font-semibold text-white">Basal Metabolic Rate</strong>, and{" "}
              <strong className="font-semibold text-white">daily calorie needs</strong>{" "}
              — plus what your numbers mean for UK weight loss treatment.
            </p>
            {/* Tab pills in hero */}
            <div className="mt-8 inline-flex rounded-full bg-white/10 p-1 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => handleTabChange(t.id)}
                  className={`rounded-full px-3 py-2 text-xs font-semibold transition-all sm:px-5 sm:text-sm ${tab === t.id ? "bg-white text-slate-900 shadow" : "text-slate-300 hover:text-white"}`}
                >
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden">{t.short}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stacking white card ──────────────────────────────────── */}
      <div
        ref={resultRef}
        id="bmi-calculator-results"
        className="relative z-10 -mt-36 scroll-mt-20 sm:-mt-44 sm:scroll-mt-24 md:scroll-mt-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <motion.div
            initial={{ y: 24, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="rounded-t-[2rem] border border-slate-200/90 bg-white shadow-[0_-16px_56px_-14px_rgba(15,23,42,0.24)]"
          >
            {/* Mobile tab selector inside card */}
            <div className="border-b border-slate-100 px-4 pt-5 sm:hidden">
              <div className="flex gap-1 overflow-x-auto pb-3">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleTabChange(t.id)}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all ${tab === t.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
                  >
                    {t.short}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-10">
              {/* Two-column grid */}
              <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:gap-12 xl:grid-cols-[460px_1fr]">

                {/* ── Left: inputs ─────────────────────────────── */}
                <div>
                  {/* Desktop tab selector */}
                  <div className="mb-6 hidden sm:flex gap-1 rounded-2xl bg-slate-100 p-1">
                    {TABS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleTabChange(t.id)}
                        className={`flex-1 rounded-xl py-2 text-xs font-semibold transition-all ${tab === t.id ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-800"}`}
                      >
                        <span className="hidden md:inline">{t.label}</span>
                        <span className="md:hidden">{t.short}</span>
                      </button>
                    ))}
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                    >
                      <Inputs {...inputProps} />
                      <p className="mt-4 text-[0.7rem] text-slate-400">
                        Results update as you type · Not medical advice
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* ── Right: results ────────────────────────────── */}
                <AnimatePresence mode="wait">
                  {!hasResult ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 py-14 text-center"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                        <Activity className="h-6 w-6 text-slate-400" />
                      </div>
                      <p className="font-semibold text-slate-700">Your results appear here</p>
                      <p className="max-w-xs text-sm text-slate-500">
                        Fill in your{" "}
                        {tab === "bmi" ? "height and weight" : tab === "bmr" ? "height, weight, age and gender" : "all fields including activity level"}{" "}
                        to see your numbers instantly.
                      </p>
                    </motion.div>
                  ) : tab === "bmi" && bmi != null && category != null ? (
                    <motion.div
                      key="result-bmi"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-5"
                      aria-live="polite"
                    >
                      {/* Big BMI number */}
                      <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200/80">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Your BMI</p>
                        <div className="mt-2 flex items-end gap-4">
                          <p
                            className="text-6xl font-black tabular-nums leading-none tracking-tight"
                            style={{ color: category.color }}
                          >
                            <AnimNum value={bmi} decimals={1} />
                          </p>
                          <div className="pb-1.5">
                            <span
                              className="inline-flex rounded-full px-3 py-1 text-xs font-bold text-white"
                              style={{ backgroundColor: category.color }}
                            >
                              {category.label}
                            </span>
                          </div>
                        </div>
                        <div className="mt-5">
                          <BmiBar bmi={bmi} />
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <Gauge bmi={bmi} />
                          {bmi10 != null && (
                            <div className="text-right">
                              <p className="text-xs text-slate-500">If you lost 10% body weight</p>
                              <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-800">
                                BMI → <AnimNum value={bmi10} decimals={1} />
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Treatment eligibility */}
                      {eligibility && (
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 text-white shadow-lg ring-1 ring-emerald-700/50">
                          <div className="flex items-start gap-3">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400">
                              <Stethoscope className="h-4 w-4 text-emerald-950" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
                                UK treatment context
                              </p>
                              <p className="mt-1.5 text-sm leading-relaxed text-emerald-50/95">
                                {eligibility}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Insight + next step */}
                      {callout && (
                        <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-5">
                          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Insight</p>
                          <p className="mt-2 text-sm leading-relaxed text-slate-800">{callout}</p>
                        </div>
                      )}
                      {nextStep && (
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Recommended next step</p>
                          <p className="mt-1.5 font-semibold text-slate-900">{nextStep.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">{nextStep.body}</p>
                        </div>
                      )}

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <Link href="/compare/wegovy-vs-mounjaro" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700">
                          Compare treatments <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                        <Link href="/prices/cheapest-options-uk" className="inline-flex min-h-10 items-center rounded-full border-2 border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                          See prices
                        </Link>
                        <a href="#faq" className="inline-flex min-h-10 items-center rounded-full bg-slate-100 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                          Show FAQ
                        </a>
                      </div>
                    </motion.div>

                  ) : tab === "bmr" && bmi != null && bmr != null && category != null ? (
                    <motion.div
                      key="result-bmr"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-5"
                      aria-live="polite"
                    >
                      {/* BMI + BMR side by side */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                          <div className="flex items-center gap-2">
                            <Scale className="h-4 w-4 text-slate-500" />
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">BMI</p>
                          </div>
                          <p
                            className="mt-2 text-5xl font-black tabular-nums leading-none"
                            style={{ color: category.color }}
                          >
                            <AnimNum value={bmi} decimals={1} />
                          </p>
                          <span
                            className="mt-2 inline-flex rounded-full px-2.5 py-0.5 text-[0.7rem] font-bold text-white"
                            style={{ backgroundColor: category.color }}
                          >
                            {category.label}
                          </span>
                        </div>
                        <div className="rounded-2xl bg-slate-900 p-5 text-white">
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-amber-400" />
                            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">BMR (kcal/day)</p>
                          </div>
                          <p className="mt-2 text-5xl font-black tabular-nums leading-none text-white">
                            <AnimNum value={bmr} />
                          </p>
                          <p className="mt-2 text-xs text-slate-400">Calories burned at complete rest</p>
                        </div>
                      </div>

                      {/* BMI bar */}
                      <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                        <BmiBar bmi={bmi} />
                        <div className="mt-3 flex justify-center">
                          <Gauge bmi={bmi} />
                        </div>
                      </div>

                      {/* BMR insight */}
                      {bmrNote && (
                        <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-5">
                          <div className="flex items-start gap-3">
                            <Zap className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">What your BMR means</p>
                              <p className="mt-1.5 text-sm leading-relaxed text-slate-800">{bmrNote}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Treatment eligibility */}
                      {eligibility && (
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 text-white shadow-lg">
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">UK treatment context</p>
                          <p className="mt-2 text-sm leading-relaxed text-emerald-50/95">{eligibility}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-1">
                        <Link href="/compare/wegovy-vs-mounjaro" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700">
                          Compare treatments <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                        <a href="#faq" className="inline-flex min-h-10 items-center rounded-full bg-slate-100 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                          Show FAQ
                        </a>
                      </div>
                    </motion.div>

                  ) : tab === "tdee" && tdee != null && calTargets != null && bmi != null && bmr != null && category != null ? (
                    <motion.div
                      key="result-tdee"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-5"
                      aria-live="polite"
                    >
                      {/* TDEE hero number */}
                      <div className="rounded-2xl bg-slate-900 p-6 text-white">
                        <div className="flex items-center gap-2">
                          <Utensils className="h-4 w-4 text-amber-400" />
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">TDEE — Total Daily Energy Expenditure</p>
                        </div>
                        <p className="mt-3 text-7xl font-black tabular-nums leading-none text-white">
                          <AnimNum value={tdee} />
                        </p>
                        <p className="mt-2 text-sm text-slate-400">kcal/day · based on {ACTIVITY_LEVELS[activity].short} activity</p>
                      </div>

                      {/* Calorie targets */}
                      <div className="space-y-2">
                        <p className="px-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Daily calorie targets</p>
                        <CalRow label="Maintain weight" sub="No surplus or deficit" value={calTargets.maintain} />
                        <CalRow label="Lose 0.5 kg/week" sub="Mild deficit (~550 kcal below TDEE)" value={calTargets.mildLoss} accent />
                        <CalRow label="Lose 1 kg/week" sub="Moderate deficit (~1100 kcal below TDEE)" value={calTargets.modLoss} />
                      </div>

                      {/* BMI + BMR mini row */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-slate-50 p-3 text-center ring-1 ring-slate-200/80">
                          <p className="text-[0.65rem] font-semibold uppercase text-slate-500">BMI</p>
                          <p className="mt-1 text-xl font-bold tabular-nums" style={{ color: category.color }}>
                            <AnimNum value={bmi} decimals={1} />
                          </p>
                        </div>
                        <div className="rounded-xl bg-slate-50 p-3 text-center ring-1 ring-slate-200/80">
                          <p className="text-[0.65rem] font-semibold uppercase text-slate-500">BMR</p>
                          <p className="mt-1 text-xl font-bold tabular-nums text-slate-900">
                            <AnimNum value={bmr} />
                          </p>
                        </div>
                        <div className="rounded-xl p-3 text-center ring-1" style={{ backgroundColor: category.color + "18", borderColor: category.color + "40" }}>
                          <p className="text-[0.65rem] font-semibold uppercase" style={{ color: category.color }}>Category</p>
                          <p className="mt-1 text-sm font-bold" style={{ color: category.color }}>{category.shortLabel}</p>
                        </div>
                      </div>

                      {/* GLP-1 context */}
                      {eligibility && (
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 text-white shadow-lg">
                          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">UK treatment context</p>
                          <p className="mt-2 text-sm leading-relaxed text-emerald-50/95">{eligibility}</p>
                          <p className="mt-2 text-xs text-emerald-300/80">On GLP-1 treatments like Wegovy or Mounjaro, appetite reduction means calorie targets often adjust naturally — always work with your prescriber.</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 pt-1">
                        <Link href="/compare/wegovy-vs-mounjaro" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-700">
                          Compare treatments <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                        <Link href="/prices/cheapest-options-uk" className="inline-flex min-h-10 items-center rounded-full border-2 border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                          See prices
                        </Link>
                        <a href="#faq" className="inline-flex min-h-10 items-center rounded-full bg-slate-100 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                          Show FAQ
                        </a>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-6 bg-background md:h-10" aria-hidden />
    </div>
  );
}
