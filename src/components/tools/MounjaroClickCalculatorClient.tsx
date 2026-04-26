'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { Zap, Calculator, Grid3X3, Syringe, AlertCircle, HelpCircle } from 'lucide-react';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

/* ── types ────────────────────────────────────────────────────────── */
type Tab = 'calculator' | 'chart';

const TABS: { id: Tab; label: string; short: string; icon: React.ReactNode }[] = [
  { id: 'calculator', label: 'Dose Calculator', short: 'Calculator', icon: <Calculator className="w-4 h-4" /> },
  { id: 'chart', label: 'Full Clicks Chart', short: 'Chart', icon: <Grid3X3 className="w-4 h-4" /> },
];

const PEN_STRENGTHS = [2.5, 5.0, 7.5, 10.0, 12.5, 15.0];
const COMMON_DOSES = [2.5, 3.75, 5.0, 7.5, 10.0, 12.5, 15.0];

/* ── helpers ──────────────────────────────────────────────────────── */
function pn(s: string) {
  const n = Number(String(s).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
}

function calculateClicks(penStrength: number, desiredDose: number) {
  if (penStrength <= 0 || desiredDose <= 0) return 0;
  return Math.round((desiredDose / penStrength) * 60);
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
            <th className="border-b border-slate-700 px-4 py-3 font-semibold">Desired Dose</th>
            {PEN_STRENGTHS.map((pen) => (
              <th key={pen} className="border-b border-slate-700 px-4 py-3 font-semibold text-center">
                {pen}mg Pen
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {COMMON_DOSES.map((dose) => (
            <tr key={dose} className="border-b border-slate-100 transition-colors hover:bg-slate-50">
              <td className="px-4 py-3 font-medium text-slate-900 bg-slate-50/50">{dose} mg</td>
              {PEN_STRENGTHS.map((pen) => {
                const clicks = calculateClicks(pen, dose);
                const isExact = pen === dose;
                const isImpossible = clicks > 60 && !isExact; // Technically possible but requires multiple injections, usually not advised to go over pen strength in clicks if not necessary, but math still works. Let's just color it differently if clicks > 60.

                return (
                  <td key={pen} className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center justify-center rounded-md px-2.5 py-1 text-xs font-bold ${
                        isExact ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300' : clicks > 60 ? 'bg-orange-50 text-orange-700 ring-1 ring-orange-200' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {clicks} {clicks === 1 ? 'click' : 'clicks'}
                    </span>
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
export default function MounjaroClickCalculatorClient() {
  const [tab, setTab] = useState<Tab>('calculator');
  const [penStrengthStr, setPenStrengthStr] = useState('5');
  const [desiredDoseStr, setDesiredDoseStr] = useState('2.5');

  const resultRef = useRef<HTMLDivElement | null>(null);

  /* derived values */
  const penStrength = useMemo(() => pn(penStrengthStr), [penStrengthStr]);
  const desiredDose = useMemo(() => pn(desiredDoseStr), [desiredDoseStr]);
  const clicks = useMemo(() => calculateClicks(penStrength, desiredDose), [penStrength, desiredDose]);

  const hasResult = useMemo(() => {
    return Number.isFinite(penStrength) && Number.isFinite(desiredDose) && penStrength > 0 && desiredDose > 0;
  }, [penStrength, desiredDose]);

  /* scroll to result on first result */
  useLayoutEffect(() => {
    if (!hasResult || !resultRef.current || tab !== 'calculator') return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ids: number[] = [];
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
          <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=75&w=2000" alt="Medical calculation and healthcare concept" fill priority className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-b from-violet-950/90 via-violet-950/85 to-slate-950/95" aria-hidden />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pb-32 pt-12 text-center sm:px-5 sm:pb-40 md:px-8">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300/90 flex items-center gap-1.5 justify-center">
              <Syringe className="w-3 h-3" /> Information only · KwikPen UK
            </p>
            <h1 className="mx-auto mt-3 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.4rem]">Mounjaro Click Calculator & Dose Chart</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-300/95 sm:text-base">Calculate exact KwikPen dial clicks for your custom dose, or view our comprehensive dosage reference chart for UK Mounjaro pens.</p>
            {/* Tab pills in hero */}
            <div className="mt-8 flex gap-2 rounded-full bg-white/10 p-1 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:px-6 sm:text-sm ${tab === t.id ? 'bg-white text-violet-950 shadow' : 'text-slate-300 hover:text-white'}`}
                >
                  {t.icon}
                  <span className="hidden sm:inline">{t.label}</span>
                  <span className="sm:hidden">{t.short}</span>
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
                        <label className="text-sm font-medium text-slate-700">1. Your Pen Strength (mg)</label>
                        <p className="text-xs text-slate-500 mt-1 mb-3">Select the Mounjaro pen you currently have.</p>
                        <div className="grid grid-cols-3 gap-2">
                          {PEN_STRENGTHS.map((pen) => (
                            <button
                              key={pen}
                              type="button"
                              onClick={() => setPenStrengthStr(pen.toString())}
                              className={`rounded-xl border py-2.5 text-sm font-semibold transition-all ${
                                penStrengthStr === pen.toString() ? 'border-violet-600 bg-violet-50 text-violet-900 shadow-sm ring-1 ring-violet-600' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                              }`}
                            >
                              {pen} mg
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-slate-700">2. Desired Dose (mg)</label>
                        <p className="text-xs text-slate-500 mt-1 mb-2">Enter the dose you wish to inject.</p>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.5"
                          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-base text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 transition-all"
                          value={desiredDoseStr}
                          onChange={(e) => setDesiredDoseStr(e.target.value)}
                          placeholder="e.g. 2.5"
                          aria-label="Desired Dose"
                        />
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          <span className="text-[0.65rem] font-semibold uppercase text-slate-400 mt-1 mr-1">Common:</span>
                          {[2.5, 3.75, 5, 7.5].map((d) => (
                            <button key={d} onClick={() => setDesiredDoseStr(d.toString())} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 transition hover:bg-slate-200">
                              {d}mg
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                        <div className="flex items-start gap-2.5">
                          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-sm font-semibold text-amber-900">Medical Warning</h4>
                            <p className="mt-1 text-xs leading-relaxed text-amber-800">Adjusting your Mounjaro dose by counting clicks is considered off-label use. Always consult your prescriber before changing your dosage protocol.</p>
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
                          <p className="font-semibold text-slate-700">Enter doses to calculate</p>
                        </div>
                      ) : (
                        <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="space-y-6">
                          <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl ring-1 ring-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                              <Syringe className="w-32 h-32 transform rotate-45" />
                            </div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-violet-300">Clicks Required</p>
                            <div className="mt-2 flex items-baseline gap-3">
                              <p className="text-[5.5rem] font-black tabular-nums leading-none tracking-tight text-white drop-shadow-md">
                                <AnimNum value={clicks} />
                              </p>
                              <p className="text-xl font-bold text-violet-200 pb-2">{clicks === 1 ? 'click' : 'clicks'}</p>
                            </div>

                            <div className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur-sm border border-white/10">
                              <p className="text-xs font-semibold uppercase tracking-wider text-violet-200/80 mb-2">The Math</p>
                              <div className="flex items-center gap-2 text-sm text-white/90">
                                <span>({desiredDose}mg</span>
                                <span className="text-violet-300">÷</span>
                                <span>{penStrength}mg)</span>
                                <span className="text-violet-300">×</span>
                                <span>60 clicks</span>
                                <span className="text-violet-300">=</span>
                                <span className="font-bold">{clicks}</span>
                              </div>
                            </div>
                          </div>

                          {clicks > 60 && (
                            <div className="rounded-2xl border border-orange-200 bg-orange-50/80 p-5">
                              <div className="flex items-start gap-3">
                                <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" />
                                <div>
                                  <p className="text-sm font-semibold text-orange-800">Requires multiple injections</p>
                                  <p className="mt-1 text-sm leading-relaxed text-orange-700">
                                    A single Mounjaro KwikPen dose is physically limited to 60 clicks. To achieve {clicks} clicks, you will need to inject a full 60-click dose, then dial an additional {clicks - 60} clicks for a second
                                    injection.
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="flex flex-wrap gap-2 pt-2">
                            <Link href="/compare/wegovy-vs-mounjaro" className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-violet-600 px-5 text-sm font-semibold text-white transition hover:bg-violet-700 shadow-sm">
                              Compare GLP-1s <Zap className="inline h-3.5 w-3.5 fill-current" aria-hidden />
                            </Link>
                            <Link
                              href="/mounjaro-price-comparison"
                              className="inline-flex min-h-10 items-center rounded-full border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:border-slate-300"
                            >
                              Mounjaro Prices
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="chart" initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.22, ease: 'easeInOut' }} className="space-y-6">
                    <div className="max-w-3xl">
                      <h2 className="text-2xl font-bold text-slate-900">Mounjaro KwikPen Clicks Chart</h2>
                      <p className="mt-2 text-slate-600">Use this reference chart to quickly find the exact number of clicks needed for your desired dose across all available UK Mounjaro pen strengths.</p>
                    </div>

                    <ClickChart />

                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 mt-4 max-w-3xl">
                      <h4 className="text-sm font-semibold text-slate-900">How to read this chart:</h4>
                      <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1.5">
                        <li>Find your desired dose in the left-hand column.</li>
                        <li>Look across to the column that matches your current Pen Strength.</li>
                        <li>The intersecting number is the total clicks you need to dial.</li>
                        <li>
                          <strong className="text-emerald-700 font-medium">Green cells</strong> indicate a full 60-click dose.
                        </li>
                      </ul>
                    </div>
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
