'use client';

import Image from 'next/image';
import Link from 'next/link';
import CompareHereLink from '@/components/ui/CompareHereLink';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Zap, Calculator, Grid3X3, Syringe, AlertCircle, HelpCircle, ShieldAlert } from 'lucide-react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/* ── types ────────────────────────────────────────────────────────── */
type Tab = 'calculator' | 'chart' | 'how-it-works' | 'safety';

const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: 'calculator', label: 'Calculator', icon: <Calculator className="w-4 h-4" /> },
  { id: 'chart', label: 'Dose Chart', icon: <Grid3X3 className="w-4 h-4" /> },
  { id: 'how-it-works', label: 'How It Works', icon: <Zap className="w-4 h-4" /> },
  { id: 'safety', label: 'Safety', icon: <AlertCircle className="w-4 h-4" /> },
];

const PEN_OPTIONS = [
  { val: '0.25', label: '0.25 mg' },
  { val: '0.5', label: '0.5 mg' },
  { val: '1', label: '1 mg' },
  { val: '1.7', label: '1.7 mg' },
  { val: '2.4', label: '2.4 mg' },
  { val: '7.2', label: '7.2 mg single-dose pen' }
];

const DOSE_OPTIONS = ['0.25', '0.5', '1', '1.7', '2.4', '7.2'];

const CHART_PENS = [0.25, 0.5, 1.0, 1.7, 2.4];
const CHART_DOSES = [0.25, 0.5, 1.0, 1.7, 2.4];

const ASSUMED_FULL_DOSE_CLICKS = 74;

/* ── helpers ──────────────────────────────────────────────────────── */
function pn(s: string) {
  const n = Number(String(s).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

function calculateEstimatedClicks(prescribedDose: number, penStrength: number) {
  if (
    !Number.isFinite(prescribedDose) ||
    !Number.isFinite(penStrength) ||
    prescribedDose <= 0 ||
    penStrength <= 0
  ) {
    return null;
  }

  if (penStrength === 7.2) {
    return null;
  }

  if (prescribedDose > penStrength) {
    return null;
  }

  return Math.round((prescribedDose / penStrength) * ASSUMED_FULL_DOSE_CLICKS);
}

function calculateLabelledCostPerDose(penCost: number) {
  if (!Number.isFinite(penCost) || penCost <= 0) {
    return null;
  }

  return penCost / 4;
}

/* ── animated number ──────────────────────────────────────────────── */
function AnimNum({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const mv = useMotionValue(value);
  const spring = useSpring(mv, { stiffness: 120, damping: 22 });
  const [display, setDisplay] = useState(value.toFixed(decimals));
  useEffect(() => {
    mv.set(value);
    return spring.on('change', (v) => setDisplay(v.toFixed(decimals)));
  }, [value, decimals, mv, spring]);
  return <>{display}</>;
}

/* ── chart component ──────────────────────────────────────────────── */
function ClickChart() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
      <table className="w-full min-w-[600px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="border-b border-slate-700 px-4 py-3 font-semibold">Prescribed Dose</th>
            {CHART_PENS.map((pen) => (
              <th key={pen} className="border-b border-slate-700 px-4 py-3 font-semibold text-center">
                {pen}mg Pen
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {CHART_DOSES.map((dose) => (
            <tr key={dose} className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-slate-900 bg-slate-50/50">{dose} mg</td>
              {CHART_PENS.map((pen) => {
                const clicks = calculateEstimatedClicks(dose, pen);
                const isExact = pen === dose;
                const isInvalid = dose > pen;

                return (
                  <td key={pen} className="px-4 py-3 text-center">
                    {isInvalid ? (
                      <span className="inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-400 ring-1 ring-slate-200/50">
                        N/A
                      </span>
                    ) : (
                      <span
                        className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-bold ${
                          isExact ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {clicks} {clicks === 1 ? 'click' : 'clicks'}
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════ */
export default function WegovyClickCalculatorClient() {
  const [tab, setTab] = useState<Tab>('calculator');
  const [penStrengthStr, setPenStrengthStr] = useState('0.5');
  const [desiredDoseStr, setDesiredDoseStr] = useState('0.25');
  const [penCostStr, setPenCostStr] = useState('');

  const resultRef = useRef<HTMLDivElement | null>(null);

  /* derived values */
  const penStrength = useMemo(() => pn(penStrengthStr), [penStrengthStr]);
  const desiredDose = useMemo(() => pn(desiredDoseStr), [desiredDoseStr]);
  const penCost = useMemo(() => pn(penCostStr), [penCostStr]);
  
  const clicks = useMemo(() => calculateEstimatedClicks(desiredDose, penStrength), [desiredDose, penStrength]);
  const costPerDose = useMemo(() => calculateLabelledCostPerDose(penCost), [penCost]);

  const hasResult = useMemo(() => {
    return Number.isFinite(penStrength) && Number.isFinite(desiredDose) && penStrength > 0 && desiredDose > 0;
  }, [penStrength, desiredDose]);

  const is72Case = useMemo(() => {
    return penStrength === 7.2 || desiredDose === 7.2;
  }, [penStrength, desiredDose]);

  const isExceeded = useMemo(() => {
    return !is72Case && desiredDose > penStrength;
  }, [is72Case, desiredDose, penStrength]);

  /* scroll to result on first result */
  useLayoutEffect(() => {
    if (!hasResult || !resultRef.current || tab !== 'calculator') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ids: number[] = [];
    let cancelled = false;
    const scroll = () => {
      if (!cancelled && resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      }
    };
    const queue = (n: number) => {
      if (n <= 0) {
        scroll();
        return;
      }
      ids.push(requestAnimationFrame(() => queue(n - 1)));
    };
    queue(prefersReduced ? 1 : 5);
    return () => {
      cancelled = true;
      ids.forEach(cancelAnimationFrame);
    };
  }, [hasResult, tab]);

  return (
    <div className="relative w-full overflow-x-clip">
      {/* ── Sticky hero ──────────────────────────────────────────── */}
      <section className="sticky top-0 z-0 flex min-h-[85vh] flex-col">
        <div className="relative flex min-h-[85vh] flex-1 flex-col">
          <Image src="/hero_compare_wegovy.webp" alt="Medical consultation and Wegovy healthcare concept" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-b from-emerald-950/90 via-emerald-950/85 to-slate-950/95" aria-hidden />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pb-32 pt-12 text-center sm:px-5 sm:pb-40 md:px-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 flex items-center gap-1.5 justify-center">
              <Syringe className="w-3 h-3" /> Information only · UK FlexTouch guide
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.4rem]">Wegovy Click Calculator & Dose Chart UK</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/95 sm:text-base">
              Use this independent calculator to view a mathematical estimate of how a selected Wegovy FlexTouch pen strength relates to a prescribed dose.
            </p>
            
            {/* Tab pills in hero */}
            <div className="mt-8 flex flex-wrap gap-2 justify-center rounded-full bg-white/10 p-1 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:text-sm ${tab === t.id ? 'bg-white text-emerald-950 shadow' : 'text-slate-300 hover:text-white'}`}
                >
                  {t.icon}
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stacking white card ──────────────────────────────────── */}
      <div ref={resultRef} id="calculator-results" className="relative z-10 -mt-24 scroll-mt-20 sm:-mt-32 sm:scroll-mt-24 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <motion.div
            initial={{ y: 24, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            className="rounded-t-4xl border border-slate-200/90 bg-white shadow-[0_-16px_56px_-14px_rgba(15,23,42,0.24)]"
          >
            <div className="p-4 sm:p-6 md:p-10">
              <AnimatePresence mode="wait">
                {tab === 'calculator' ? (
                  <motion.div
                    key="calculator"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="grid gap-8 lg:grid-cols-[420px_1fr] lg:gap-12 xl:grid-cols-[460px_1fr]"
                  >
                    {/* ── Left: inputs ─────────────────────────────── */}
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium text-slate-700">1. Select your Wegovy pen strength</label>
                        <p className="text-xs text-slate-500 mt-1 mb-3">Choose the strength printed on the label of the pen you have been supplied.</p>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {PEN_OPTIONS.map((opt) => (
                            <button
                              key={opt.val}
                              type="button"
                              onClick={() => setPenStrengthStr(opt.val)}
                              className={`rounded-xl border p-2.5 text-xs sm:text-sm font-semibold transition-all text-center leading-tight ${
                                penStrengthStr === opt.val ? 'border-emerald-600 bg-emerald-50 text-emerald-900 shadow-sm ring-1 ring-emerald-600' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700">2. Enter your prescribed weekly dose</label>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Only enter the dose that has been confirmed by your prescriber.</p>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.05"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                          value={desiredDoseStr}
                          onChange={(e) => setDesiredDoseStr(e.target.value)}
                          placeholder="e.g. 0.25"
                          aria-label="Prescribed Dose"
                        />
                        <div className="mt-3 flex flex-wrap gap-1.5 items-center">
                          <span className="text-[0.65rem] font-semibold uppercase text-slate-400 mr-1">Quick Options:</span>
                          {DOSE_OPTIONS.map((d) => (
                            <button key={d} onClick={() => setDesiredDoseStr(d)} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:bg-slate-200">
                              {d}mg
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700">3. Optional pen cost</label>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Enter the total amount paid to view a simple mathematical cost estimate.</p>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-500 font-medium">£</span>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="1"
                            className="w-full rounded-xl border border-slate-200 bg-white pl-8 pr-4 py-3.5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all"
                            value={penCostStr}
                            onChange={(e) => setPenCostStr(e.target.value)}
                            placeholder="0.00"
                            aria-label="Pen Cost"
                          />
                        </div>
                      </div>

                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                        <div className="flex items-start gap-2.5">
                          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold text-amber-900">Important safety notice</p>
                            <p className="mt-1.5 text-xs leading-relaxed text-amber-800">
                              Wegovy is a prescription-only medicine. This calculator provides mathematical information only and does not tell you what dose to use.
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed text-amber-800">
                              The official Wegovy patient leaflet says not to set a dose by counting clicks. Always use the dose shown on the pen’s dose counter and follow the instructions given by your doctor, pharmacist or nurse.
                            </p>
                            <p className="mt-1.5 text-xs leading-relaxed text-amber-800">
                              Do not change your dose, divide a dose or use medicine remaining after the four labelled doses unless a qualified prescriber has specifically instructed you to do so.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ── Right: results ────────────────────────────── */}
                    <div className="flex flex-col justify-center">
                      {!hasResult ? (
                        <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 py-14 text-center">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
                            <Calculator className="h-6 w-6 text-slate-400" />
                          </div>
                          <p className="font-semibold text-slate-700">Select options to calculate</p>
                        </div>
                      ) : (
                        <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="space-y-6">
                          
                          {/* ── Case A: 7.2 mg Doses ── */}
                          {is72Case ? (
                            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                <Syringe className="w-32 h-32 transform rotate-45 text-emerald-500" />
                              </div>
                              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">7.2 mg Prescribed Dose</p>
                              <p className="mt-3 text-lg font-bold text-white">No click calculation is shown for this dose.</p>
                              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                Wegovy 7.2 mg must be administered using the exact product and instructions supplied by your prescriber. Depending on the product supplied, this may involve a dedicated single-dose 7.2 mg pen or the prescribed 2.4 mg injection regimen.
                              </p>
                              <div className="mt-4 border-t border-slate-800 pt-3">
                                <p className="text-xs font-semibold text-amber-400">
                                  Do not calculate 7.2 mg as 222 clicks.
                                </p>
                              </div>
                            </div>
                          ) : isExceeded ? (
                            /* ── Case B: Dose Exceeds Pen ── */
                            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                <AlertCircle className="w-32 h-32 transform rotate-45 text-rose-500" />
                              </div>
                              <p className="text-sm font-semibold uppercase tracking-wide text-rose-400">Unavailable Calculation</p>
                              <p className="mt-3 text-base font-bold leading-snug text-white">
                                This dose cannot be represented as a partial setting of the selected pen.
                              </p>
                              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                                Check the strength printed on your pen and follow the treatment instructions supplied by your prescriber. Do not combine click calculations from multiple pens.
                              </p>
                            </div>
                          ) : (
                            /* ── Case C: Standard Calculation ── */
                            <div className="space-y-6">
                              <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                                  <Syringe className="w-32 h-32 transform rotate-45 text-emerald-500" />
                                </div>
                                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Mathematical Click Estimate</p>
                                <div className="mt-2 flex items-baseline gap-3">
                                  <p className="text-[5.5rem] font-black tabular-nums leading-none tracking-tight text-white drop-shadow-md">
                                    <AnimNum value={clicks || 0} />
                                  </p>
                                  <p className="text-xl font-bold text-emerald-300 pb-2">{clicks === 1 ? 'click' : 'clicks'}</p>
                                </div>

                                <div className="mt-6 space-y-3 border-t border-slate-800 pt-4 text-xs text-slate-300">
                                  <div className="flex justify-between">
                                    <span>Selected pen:</span>
                                    <span className="font-semibold text-white">{penStrength} mg</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Prescribed dose entered:</span>
                                    <span className="font-semibold text-white">{desiredDose} mg</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Percentage of a labelled full dose:</span>
                                    <span className="font-semibold text-white">{Math.round((desiredDose / penStrength) * 100)}%</span>
                                  </div>
                                </div>

                                <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
                                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-2">The Calculation</p>
                                  <div className="flex flex-wrap items-center gap-2 text-sm text-white/95 font-mono">
                                    <span>({desiredDose} mg</span>
                                    <span className="text-emerald-400">÷</span>
                                    <span>{penStrength} mg)</span>
                                    <span className="text-emerald-400">×</span>
                                    <span>74 clicks</span>
                                    <span className="text-emerald-400">=</span>
                                    <span className="font-bold text-emerald-300">{clicks}</span>
                                  </div>
                                </div>

                                <p className="mt-5 text-[10px] leading-relaxed text-slate-400">
                                  The 74-click figure is a mathematical reference used by this calculator. It is not an official Novo Nordisk dosing instruction. The manufacturer instructs patients not to set a Wegovy dose by counting clicks.
                                </p>
                              </div>

                              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                                <p className="text-xs font-bold text-slate-900">Important:</p>
                                <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                                  Do not use this number to set or change your dose. Follow the dose counter and your prescriber’s instructions.
                                </p>
                              </div>
                            </div>
                          )}

                          {/* ── Cost calculations output (if applicable) ── */}
                          {costPerDose !== null && (
                            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 space-y-2">
                              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Simple Cost Estimate</p>
                              <div className="flex justify-between items-baseline">
                                <span className="text-sm font-medium text-slate-700">Estimated cost per labelled dose:</span>
                                <span className="text-lg font-bold text-slate-900">£{costPerDose.toFixed(2)}</span>
                              </div>
                              <p className="text-[11px] leading-relaxed text-slate-500 pt-2 border-t border-slate-200">
                                The calculator should not assume that partial dosing extends the official life of a pen. Storage limits, sterility, device operation and prescribing instructions still apply. Do not assume a pen will last eight, twelve, or sixteen weeks simply because the mathematical dose is smaller. Doing so could lead to using the device outside of its official guidelines.
                              </p>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 pt-2">
                            <Link href="/compare/wegovy-vs-mounjaro" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white transition hover:bg-emerald-700 shadow-sm">
                              Compare GLP-1s <Zap className="inline h-3.5 w-3.5 fill-current" aria-hidden />
                            </Link>
                            <CompareHereLink
                              href="/wegovy-price-comparison"
                              size="hero"
                              className="min-h-10"
                              navAccent="emerald"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ) : tab === 'chart' ? (
                  <motion.div key="chart" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="space-y-6">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-bold text-slate-900">Wegovy FlexTouch Clicks Chart</h2>
                      <p className="mt-2 text-slate-600">Use this reference chart to quickly find the mathematical click estimates across all standard UK Wegovy FlexTouch pen strengths.</p>
                    </div>

                    <ClickChart />

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 mt-4 max-w-3xl">
                      <h3 className="text-sm font-semibold text-slate-900">How to read this chart:</h3>
                      <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1.5">
                        <li>Find your prescribed dose in the left-hand column.</li>
                        <li>Look across to the column that matches your supplied Pen Strength.</li>
                        <li>The intersecting number is the estimated mathematical clicks (based on 74 clicks for a full dose).</li>
                        <li><strong className="text-slate-500 font-bold">N/A</strong> indicates that a dose exceeds that pen's strength and cannot be dialed from it.</li>
                        <li>
                          <strong className="text-emerald-700 font-medium">Green cells</strong> indicate a full 74-click dose (dialled normally).
                        </li>
                      </ul>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 italic">
                        Disclaimer: The manufacturer does not instruct patients to set or verify doses by counting clicks. The 74-click reference is an educational model and not an official instruction.
                      </p>
                    </div>
                  </motion.div>
                ) : tab === 'how-it-works' ? (
                  <motion.div key="how-it-works" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="space-y-6 max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900">How the Wegovy Click Calculator Works</h2>
                    <p className="leading-relaxed text-slate-700">
                      This calculator compares the dose entered with the labelled strength of the selected pen. It then expresses that relationship as a percentage and, where applicable, as a mathematical click estimate.
                    </p>
                    <p className="leading-relaxed text-slate-700">
                      For example, a prescribed amount equal to half of the selected pen strength represents 50% of a labelled full dose.
                    </p>
                    
                    <div className="my-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
                      <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Mathematical Formula</p>
                      <p className="font-mono text-lg font-bold text-slate-900">Estimated clicks = (prescribed dose ÷ pen strength) × 74</p>
                    </div>

                    <p className="leading-relaxed text-slate-700">
                      This is an educational mathematical model. It is not a manufacturer-approved method of selecting or administering a Wegovy dose. The manufacturer instructs patients not to set a Wegovy dose by counting clicks.
                    </p>

                    <h3 className="text-lg font-bold text-slate-900 mt-6">Why we do not show 222 clicks for 7.2 mg</h3>
                    <p className="leading-relaxed text-slate-700">
                      Multiplying 74 clicks by three would produce the number 222. However, this does not represent an approved way to set a Wegovy dose.
                    </p>
                    <p className="leading-relaxed text-slate-700">
                      A 7.2 mg prescription relates to a complete weekly treatment dose and not to one continuous turn of a standard FlexTouch selector.
                    </p>
                    <p className="leading-relaxed text-slate-700">
                      For that reason, the calculator stops the click calculation at the labelled strength of the selected FlexTouch pen and displays separate official context for 7.2 mg.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="safety" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="space-y-6 max-w-3xl">
                    <h2 className="text-2xl font-bold text-slate-900">Important Safety Context</h2>
                    
                    <div className="rounded-xl bg-amber-50 border border-amber-200 p-5 space-y-3">
                      <p className="text-sm font-semibold text-amber-900">Official Dosing Instructions</p>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        The official patient leaflet instructs users to select the dose shown on the pen’s dose counter rather than setting a dose by counting clicks. The selector may make different clicking sounds depending on whether you turn it forward, backward, or pass the target dose.
                      </p>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Do not change your dose, divide a dose or use medicine remaining after the four labelled doses unless a qualified prescriber has specifically instructed you to do so.
                      </p>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mt-6">When to seek medical advice</h3>
                    <p className="leading-relaxed text-slate-700">
                      Always contact your doctor, pharmacist, or nurse if:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
                      <li>You are unsure which pen strength you have;</li>
                      <li>The dose counter stops before your prescribed dose appears;</li>
                      <li>You think the full dose was not delivered;</li>
                      <li>You are considering changing or delaying a dose;</li>
                      <li>You experience side effects that concern you.</li>
                    </ul>

                    <h3 className="text-lg font-bold text-slate-900 mt-6">Reporting side effects</h3>
                    <p className="leading-relaxed text-slate-700">
                      Wegovy is a prescription-only medicine in the UK. Any suspected side effects can be reported through the MHRA Yellow Card scheme, which helps monitor the safety of medicines in the UK.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-6 bg-background md:h-10" aria-hidden />
    </div>
  );
}
