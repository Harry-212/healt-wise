"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  FileDown,
  LayoutDashboard,
  Lock,
  LogIn,
  LogOut,
  Pencil,
  Plus,
  ShieldCheck,
  Trash2,
  TrendingDown,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { RechartsShell } from "@/components/charts/recharts-shell";
import {
  addEntry,
  clearAllEntries,
  computeMetrics,
  deleteEntry,
  formatWeight,
  fromKg,
  getEntries,
  getGoals,
  saveGoals,
  sortEntriesByDate,
  toKg,
  updateEntry,
  type GoalSettings,
  type TrackerEntry,
  type WeightUnit,
} from "@/lib/tracker-store";
import { useSupabaseAuth } from "@/components/providers/SupabaseAuthProvider";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { exportWeightTrackerPdf } from "@/lib/tracker-pdf-export";

/* ──────────────────────────────────────────────────────── constants */
const MEDS = ["Wegovy", "Mounjaro", "Saxenda", "Orlistat", "Other"] as const;
const DOSES: Record<string, string[]> = {
  Wegovy: ["0.25mg", "0.5mg", "1.0mg", "1.7mg", "2.4mg"],
  Mounjaro: ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
  Saxenda: ["0.6mg", "1.2mg", "1.8mg", "2.4mg", "3.0mg"],
  Orlistat: ["60mg", "120mg"],
  Other: ["Other"],
};

const BENEFITS = [
  {
    icon: Lock,
    title: "Privacy-first tracking",
    body: "Sign in to use the tracker. Your weigh-ins and chart are treated as sensitive health data — not for resale or ads.",
  },
  {
    icon: TrendingDown,
    title: "Track every milestone",
    body: "Log weekly weigh-ins alongside medication, dose, and supplier for the full picture.",
  },
  {
    icon: ShieldCheck,
    title: "Built for UK GLP-1 users",
    body: "Supports Wegovy, Mounjaro, and Saxenda tracking — with dose-specific fields.",
  },
  {
    icon: LayoutDashboard,
    title: "Insight at a glance",
    body: "Auto-calculated weight change, weekly trend, and goal progress updated instantly.",
  },
];

/* ──────────────────────────────────────────────────────── animated count-up */
function CountUp({ to, decimals = 1, suffix = "" }: { to: number; decimals?: number; suffix?: string }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 100, damping: 30 });
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    motionVal.set(to);
    const unsub = spring.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return unsub;
  }, [to, decimals, motionVal, spring]);
  return <>{display}{suffix}</>;
}

/* ──────────────────────────────────────────────────────── modal */
type ModalMode = "add" | "edit";

interface EntryModalProps {
  mode: ModalMode;
  initial?: TrackerEntry;
  preferredUnit: WeightUnit;
  onClose: () => void;
  onSaved: () => void;
}

function EntryModal({ mode, initial, preferredUnit, onClose, onSaved }: EntryModalProps) {
  const [date, setDate] = useState(initial?.date ?? "");
  useEffect(() => {
    if (initial?.date) return;
    setDate((d) => d || new Date().toISOString().slice(0, 10));
  }, [initial?.date]);
  const [weightStr, setWeightStr] = useState(
    initial ? fromKg(initial.weightKg, preferredUnit).toFixed(1) : "",
  );
  const [unit, setUnit] = useState<WeightUnit>(initial?.displayUnit ?? preferredUnit);
  const [medication, setMedication] = useState(initial?.medication ?? MEDS[0]);
  const [dose, setDose] = useState(initial?.dose ?? "");
  const [supplier, setSupplier] = useState(initial?.supplier ?? "");
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [err, setErr] = useState<string | null>(null);

  const doseOptions = DOSES[medication] ?? DOSES.Other!;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const w = parseFloat(weightStr.replace(",", "."));
    if (!Number.isFinite(w) || w <= 0) {
      setErr("Enter a valid weight.");
      return;
    }
    if (!date) { setErr("Enter a date."); return; }
    const weightKg = toKg(w, unit);
    const payload = {
      date,
      weightKg,
      displayUnit: unit,
      displayWeight: w,
      medication,
      dose: dose || doseOptions[0] || "",
      supplier,
      notes,
    };
    if (mode === "edit" && initial) {
      updateEntry(initial.id, payload);
    } else {
      addEntry(payload);
    }
    onSaved();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        className="relative z-10 w-full max-w-lg rounded-t-3xl sm:rounded-3xl bg-white p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            {mode === "edit" ? "Edit entry" : "Add entry"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <X className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Date
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                max={new Date().toISOString().slice(0, 10)}
                className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
              />
            </label>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Weight
              </label>
              <div className="flex gap-2">
                <input
                  inputMode="decimal"
                  required
                  value={weightStr}
                  onChange={(e) => setWeightStr(e.target.value)}
                  placeholder="e.g. 85.5"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
                />
                <div className="inline-flex shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-0.5 text-[0.72rem] font-semibold">
                  {(["kg", "lbs", "stone"] as WeightUnit[]).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUnit(u)}
                      className={`rounded-lg px-2 py-1.5 transition-colors ${unit === u ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
                    >
                      {u === "stone" ? "st" : u}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Medication
              <div className="relative mt-1">
                <select
                  value={medication}
                  onChange={(e) => { setMedication(e.target.value); setDose(""); }}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 pr-8 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
                >
                  {MEDS.map((m) => <option key={m}>{m}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Dose
              <div className="relative mt-1">
                <select
                  value={dose || doseOptions[0]}
                  onChange={(e) => setDose(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 pr-8 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
                >
                  {doseOptions.map((d) => <option key={d}>{d}</option>)}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            Supplier <span className="font-normal text-slate-400">(optional)</span>
            <input
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="e.g. Numan, Manual, LloydsPharmacy"
              className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Notes <span className="font-normal text-slate-400">(optional)</span>
            <input
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How are you feeling?"
              className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-300/40"
            />
          </label>

          {err && <p className="text-sm font-medium text-red-600">{err}</p>}

          <button
            type="submit"
            className="flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            {mode === "edit" ? "Save changes" : "Add entry"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── metric card */
function MetricCard({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-5 ring-1 ${accent ? "bg-gradient-to-br from-emerald-800 to-emerald-950 text-white ring-emerald-700/50 shadow-lg" : "bg-slate-50 ring-slate-200/80"}`}>
      <p className={`text-xs font-semibold uppercase tracking-wide ${accent ? "text-emerald-200" : "text-slate-500"}`}>
        {label}
      </p>
      <p className={`mt-2 text-2xl font-bold tabular-nums tracking-tight ${accent ? "text-white" : "text-slate-900"} sm:text-3xl`}>
        {value}
      </p>
      {sub && (
        <p className={`mt-1 text-xs ${accent ? "text-emerald-100/80" : "text-slate-400"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

function AuthGateModal({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracker-auth-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 34 }}
        className="relative z-10 w-full max-w-md rounded-t-3xl bg-white p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100">
              <LogIn className="h-5 w-5 text-violet-700" />
            </div>
            <div>
              <h2 id="tracker-auth-title" className="text-xl font-bold text-slate-900">
                Sign in to track free
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Use your Health Wise account to open the weight loss tracker. New here? Create a free account first —
                it only takes a moment.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4 text-slate-600" />
          </button>
        </div>

        <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50/90 p-4 text-sm leading-relaxed text-emerald-950">
          <div className="flex gap-2">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
            <p>
              <span className="font-semibold text-emerald-900">Your data stays yours.</span> We do not sell your
              tracking results or misuse them. Sign-in helps keep your progress private and tied to you — not shared
              for unrelated marketing.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="order-last inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:order-first"
          >
            Not now
          </button>
          <Link
            href="/my-hub/login?signup=1"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-violet-200 bg-violet-50 px-5 text-sm font-semibold text-violet-900 transition hover:bg-violet-100"
          >
            Sign up free
          </Link>
          <Link
            href="/my-hub/login"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800"
          >
            Log in
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────── main component */
export default function WeightTrackerClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, ready: authChecked, signOut } = useSupabaseAuth();
  const [entries, setEntries] = useState<TrackerEntry[]>([]);
  const [goals, setGoals] = useState<GoalSettings>({ goalWeightKg: null, preferredUnit: "kg" });
  const [started, setStarted] = useState(false);
  const [modal, setModal] = useState<{ mode: ModalMode; entry?: TrackerEntry } | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [goalInput, setGoalInput] = useState("");
  const [authGateOpen, setAuthGateOpen] = useState(false);
  const [exportBusy, setExportBusy] = useState(false);
  const dashboardRef = useRef<HTMLDivElement | null>(null);

  // Load from localStorage once on mount
  useEffect(() => {
    const stored = getEntries();
    setEntries(stored);
    const g = getGoals();
    setGoals(g);
    setGoalInput(g.goalWeightKg != null ? fromKg(g.goalWeightKg, g.preferredUnit).toFixed(1) : "");
    if (stored.length > 0 && !isSupabaseConfigured()) {
      setStarted(true);
    }
  }, []);

  useEffect(() => {
    if (!authChecked) return;
    if (!isSupabaseConfigured()) return;
    if (!user) {
      setStarted(false);
      return;
    }
    if (getEntries().length > 0) {
      setStarted(true);
    }
  }, [authChecked, user]);

  useEffect(() => {
    if (searchParams.get("start") !== "1") return;
    if (!authChecked) return;
    if (!user) {
      router.replace("/tools/weight-loss-tracker", { scroll: false });
      return;
    }
    setStarted(true);
    setModal({ mode: "add" });
    router.replace("/tools/weight-loss-tracker", { scroll: false });
  }, [searchParams, router, authChecked, user]);

  const refresh = useCallback(() => {
    setEntries(getEntries());
  }, []);

  const sorted = useMemo(() => sortEntriesByDate(entries), [entries]);
  const unit = goals.preferredUnit;
  const metrics = useMemo(() => computeMetrics(sorted, goals.goalWeightKg), [sorted, goals.goalWeightKg]);

  const chartData = useMemo(
    () => sorted.map((r) => ({
      date: r.date.slice(5), // "MM-DD"
      weight: parseFloat(fromKg(r.weightKg, unit).toFixed(1)),
      medication: r.medication,
    })),
    [sorted, unit],
  );

  const goalLineKg = goals.goalWeightKg;
  const goalLineVal = goalLineKg != null ? parseFloat(fromKg(goalLineKg, unit).toFixed(1)) : null;

  function handleStartTracking() {
    if (!user) {
      setAuthGateOpen(true);
      return;
    }
    setStarted(true);
    setModal({ mode: "add" });
  }

  function handleDelete(id: string) {
    deleteEntry(id);
    refresh();
    setDeleteConfirm(null);
  }

  function handleUnitChange(u: WeightUnit) {
    const newGoals = { ...goals, preferredUnit: u };
    setGoals(newGoals);
    saveGoals(newGoals);
    if (goals.goalWeightKg != null) {
      setGoalInput(fromKg(goals.goalWeightKg, u).toFixed(1));
    }
  }

  function handleGoalSave() {
    const v = parseFloat(goalInput.replace(",", "."));
    const goalKg = Number.isFinite(v) && v > 0 ? toKg(v, unit) : null;
    const newGoals = { ...goals, goalWeightKg: goalKg };
    setGoals(newGoals);
    saveGoals(newGoals);
  }

  /* ── Landing page ─────────────────────────────────────────── */
  if (!started) {
    return (
      <>
        <AnimatePresence>
          {authGateOpen && (
            <AuthGateModal key="auth-gate" onClose={() => setAuthGateOpen(false)} />
          )}
        </AnimatePresence>
      <div className="relative w-full overflow-x-clip">
        {/* Sticky hero */}
        <section className="sticky top-0 z-0 flex min-h-svh flex-col">
          <div className="relative flex min-h-svh flex-1 flex-col">
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=75&w=2000"
              alt="Person tracking weight loss progress in a clean modern setting"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/90 via-slate-950/80 to-slate-950/92" aria-hidden />
            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 pb-40 pt-12 text-center sm:px-5 sm:pb-48 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 ring-1 ring-white/20 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-emerald-300">
                    Private · Free · Sign in to begin
                  </span>
                </div>

                <h1 className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl">
                  Track Your Weight Loss{" "}
                  <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Privately
                  </span>
                </h1>

                <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
                  Monitor your progress, medication, and results in one place. Sign in keeps your tracking results
                  private and protected — we do not misuse your data.
                </p>

                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={handleStartTracking}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-violet-600 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-400 hover:to-violet-500"
                  >
                    <Plus className="h-4 w-4" />
                    Start Tracking Free
                  </button>
                  <Link
                    href="/compare/wegovy-vs-mounjaro"
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                  >
                    Compare treatments
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stacking white panel — benefits */}
        <div className="relative z-10 -mt-32 sm:-mt-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
            <motion.div
              initial={{ y: 32, opacity: 0.9 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="rounded-t-[2rem] border border-slate-200/90 bg-white shadow-[0_-16px_64px_-16px_rgba(15,23,42,0.22)]"
            >
              <div className="px-6 py-10 md:px-12 md:py-14">
                <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Built for UK weight loss treatment users
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
                  Whether you're on Wegovy, Mounjaro, or Saxenda — track every check-in with zero friction.
                </p>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {BENEFITS.map((b) => (
                    <div key={b.title} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200/80">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                        <b.icon className="h-5 w-5 text-violet-600" />
                      </div>
                      <p className="mt-4 font-semibold text-slate-900">{b.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.body}</p>
                    </div>
                  ))}
                </div>

                {/* Feature preview mockup */}
                <div className="mt-14 rounded-2xl bg-slate-900 p-1 shadow-2xl ring-1 ring-slate-800">
                  <div className="rounded-xl bg-white p-5">
                    <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="ml-2 text-xs font-semibold text-slate-400">Health Wise · My Hub</span>
                    </div>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {[
                        { l: "Total lost", v: "−7.4 kg" },
                        { l: "This week", v: "−0.6 kg" },
                        { l: "Goal progress", v: "62%" },
                      ].map((m) => (
                        <div key={m.l} className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/80">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{m.l}</p>
                          <p className="mt-2 text-2xl font-bold tabular-nums text-slate-900">{m.v}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/80">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-slate-500">Weight chart (illustrative)</p>
                      </div>
                      <div className="mt-3 h-24 w-full overflow-hidden">
                        <svg viewBox="0 0 300 80" className="w-full h-full" preserveAspectRatio="none">
                          <polyline
                            points="0,65 40,58 80,54 120,46 160,38 200,32 240,24 300,18"
                            fill="none"
                            stroke="#4f46e5"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <polyline
                            points="0,65 40,58 80,54 120,46 160,38 200,32 240,24 300,18"
                            fill="url(#previewGrad)"
                            stroke="none"
                          />
                          <defs>
                            <linearGradient id="previewGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.2" />
                              <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={handleStartTracking}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-900 px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
                  >
                    <Plus className="h-4 w-4" />
                    Start Tracking Free
                  </button>
                  <p className="text-xs text-slate-500">Free · Sign in required · Your tracking stays private</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="h-8 bg-background md:h-16" aria-hidden />
      </div>
      </>
    );
  }

  /* ── Dashboard ─────────────────────────────────────────────── */
  return (
    <>
      <AnimatePresence>
        {modal && (
          <EntryModal
            key="entry-modal"
            mode={modal.mode}
            initial={modal.entry}
            preferredUnit={unit}
            onClose={() => setModal(null)}
            onSaved={refresh}
          />
        )}
      </AnimatePresence>

      <div ref={dashboardRef} className="relative w-full overflow-x-clip">
        {/* Dashboard hero header */}
        <section className="relative overflow-hidden bg-slate-950 pb-32 pt-10 sm:pb-36 sm:pt-12">
          <Image
            src="https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            fill
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 to-slate-950" aria-hidden />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-emerald-400/90">
                  My Hub
                </p>
                <h1 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                  Weight Loss Tracker
                </h1>
                <p className="mt-1 text-sm text-slate-400">
                  {entries.length} {entries.length === 1 ? "entry" : "entries"} · Data stored privately in your browser
                  {user?.email ? ` · ${user.email}` : ""}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* Unit toggle */}
                <div className="inline-flex rounded-xl bg-white/10 p-0.5 text-xs font-semibold ring-1 ring-white/15">
                  {(["kg", "lbs", "stone"] as WeightUnit[]).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => handleUnitChange(u)}
                      className={`rounded-lg px-3 py-1.5 transition-colors ${unit === u ? "bg-white text-slate-900" : "text-slate-300 hover:text-white"}`}
                    >
                      {u === "stone" ? "st" : u}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setModal({ mode: "add" })}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-violet-400"
                >
                  <Plus className="h-4 w-4" />
                  Add entry
                </button>
                {entries.length > 0 && (
                  <button
                    type="button"
                    disabled={exportBusy}
                    onClick={() => {
                      void (async () => {
                        setExportBusy(true);
                        try {
                          await exportWeightTrackerPdf({
                            entries,
                            goals,
                            unit,
                            metrics,
                            userEmail: user?.email ?? null,
                          });
                        } finally {
                          setExportBusy(false);
                        }
                      })();
                    }}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-white/45 hover:bg-white/20 disabled:pointer-events-none disabled:opacity-60"
                  >
                    <FileDown className="h-4 w-4 shrink-0" />
                    {exportBusy ? "Exporting…" : "Export PDF"}
                  </button>
                )}
                {user && (
                  <button
                    type="button"
                    onClick={() => void signOut()}
                    className="relative z-20 inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-white/45 hover:bg-white/20 active:scale-[0.98]"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign out
                  </button>
                )}
              </div>
            </div>

            {/* Goal input */}
            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
              <p className="text-xs font-semibold text-slate-300">Goal weight:</p>
              <input
                inputMode="decimal"
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                onBlur={handleGoalSave}
                placeholder={`e.g. 70 ${unit}`}
                className="w-24 rounded-lg border border-white/20 bg-white/10 px-2 py-1 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
              />
              <span className="text-xs text-slate-400">{unit}</span>
              {metrics.estimatedGoalDate && (
                <span className="ml-auto text-xs text-slate-400">
                  Est. goal date:{" "}
                  <strong className="font-semibold text-emerald-300">
                    {metrics.estimatedGoalDate.toLocaleDateString("en-GB", {
                      month: "short",
                      year: "numeric",
                    })}
                  </strong>
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Main content stacking card */}
        <div className="relative z-10 -mt-24 sm:-mt-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
            <div className="rounded-t-[2rem] border border-slate-200/90 bg-white shadow-[0_-12px_48px_-12px_rgba(15,23,42,0.22)]">
              <div className="px-5 py-8 sm:px-6 sm:py-10 md:px-10 md:py-12 space-y-10">

                {/* Metrics */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    label="Total weight lost"
                    value={
                      metrics.totalLossKg != null
                        ? <><CountUp to={parseFloat(fromKg(metrics.totalLossKg, unit).toFixed(1))} /> {unit}</>
                        : "—"
                    }
                    sub="Since first entry"
                    accent={metrics.totalLossKg != null && metrics.totalLossKg > 0}
                  />
                  <MetricCard
                    label="Current weight"
                    value={
                      metrics.currentWeightKg != null
                        ? formatWeight(metrics.currentWeightKg, unit)
                        : "—"
                    }
                    sub={
                      metrics.startWeightKg != null
                        ? `Started at ${formatWeight(metrics.startWeightKg, unit)}`
                        : undefined
                    }
                  />
                  <MetricCard
                    label="Weekly avg loss"
                    value={
                      metrics.weeklyAvgLossKg != null
                        ? <><CountUp to={parseFloat(fromKg(metrics.weeklyAvgLossKg, unit).toFixed(2))} decimals={2} />{" "}{unit}/wk</>
                        : "—"
                    }
                    sub="Based on all entries"
                  />
                  <MetricCard
                    label="Goal progress"
                    value={
                      metrics.progressPct != null
                        ? <><CountUp to={parseFloat(metrics.progressPct.toFixed(1))} />%</>
                        : goals.goalWeightKg == null ? "Set a goal →" : "—"
                    }
                    sub={metrics.progressPct != null ? "Of total needed" : undefined}
                  />
                </div>

                {/* Progress bar */}
                {metrics.progressPct != null && (
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                      <span>Progress toward goal</span>
                      <span>{metrics.progressPct.toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, metrics.progressPct)}%` }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-emerald-500"
                      />
                    </div>
                  </div>
                )}

                {/* Chart */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-4 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <p className="text-sm font-semibold text-slate-800">Weight over time</p>
                    <p className="text-xs text-slate-500">Values in {unit}</p>
                  </div>
                  {chartData.length > 0 ? (
                    <RechartsShell heightPx={260}>
                      {(dims) => (
                        <LineChart
                          width={dims.width}
                          height={dims.height}
                          data={chartData}
                          margin={{ top: 4, right: 12, left: -8, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                          <XAxis dataKey="date" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                          <YAxis
                            domain={["auto", "auto"]}
                            tick={{ fontSize: 11, fill: "#94a3b8" }}
                            width={48}
                          />
                          <Tooltip
                            contentStyle={{
                              borderRadius: 12,
                              border: "1px solid #e2e8f0",
                              fontSize: 12,
                              padding: "8px 12px",
                            }}
                            formatter={(v) => [`${v} ${unit}`, "Weight"]}
                          />
                          {goalLineVal != null && (
                            <ReferenceLine
                              y={goalLineVal}
                              stroke="#10b981"
                              strokeDasharray="5 3"
                              label={{ value: "Goal", fill: "#10b981", fontSize: 11 }}
                            />
                          )}
                          <Line
                            type="monotone"
                            dataKey="weight"
                            stroke="#4f46e5"
                            strokeWidth={2.5}
                            dot={{ r: 3.5, fill: "#4f46e5", strokeWidth: 0 }}
                            activeDot={{ r: 5 }}
                            isAnimationActive={false}
                          />
                        </LineChart>
                      )}
                    </RechartsShell>
                  ) : (
                    <div className="flex h-48 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white">
                      <div className="text-center">
                        <TrendingDown className="mx-auto h-8 w-8 text-slate-300" />
                        <p className="mt-2 text-sm text-slate-500">Add entries to see your weight chart</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Internal links */}
                <div className="flex flex-wrap gap-3 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-4">
                  <p className="w-full text-sm font-semibold text-amber-900">Find best prices for your next refill:</p>
                  <Link href="/prices/cheapest-options-uk" className="inline-flex items-center gap-1 rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow hover:bg-amber-400">
                    Cheapest options UK
                  </Link>
                  <Link href="/wegovy-price-comparison" className="inline-flex items-center gap-1 rounded-xl border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-50">
                    Wegovy prices
                  </Link>
                  <Link href="/mounjaro-price-comparison" className="inline-flex items-center gap-1 rounded-xl border border-amber-300 bg-white px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-50">
                    Mounjaro prices
                  </Link>
                </div>

                {/* Table */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Your entries</h2>
                    <button
                      type="button"
                      onClick={() => setModal({ mode: "add" })}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                    >
                      <Plus className="h-4 w-4" />
                      Add entry
                    </button>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-slate-200/90 bg-white">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-slate-100 bg-slate-50/80">
                          {["Date", "Weight", "Change", "Medication", "Dose", "Supplier", ""].map((h) => (
                            <th key={h} className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {sorted.length === 0 ? (
                          <tr>
                            <td colSpan={7} className="px-4 py-12 text-center text-slate-500">
                              <TrendingDown className="mx-auto mb-2 h-7 w-7 text-slate-300" />
                              No entries yet. Add your first entry to start tracking.
                            </td>
                          </tr>
                        ) : (
                          sorted.map((row, i) => {
                            const prev = sorted[i - 1];
                            const changeKg = prev ? row.weightKg - prev.weightKg : null;
                            const changeDisplay = changeKg != null ? fromKg(changeKg, unit) : null;
                            const isDeleteConfirm = deleteConfirm === row.id;
                            return (
                              <motion.tr
                                key={row.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="group hover:bg-slate-50/80 transition-colors"
                              >
                                <td className="px-4 py-3 font-medium text-slate-800">{row.date}</td>
                                <td className="px-4 py-3 tabular-nums font-semibold text-slate-900">
                                  {formatWeight(row.weightKg, unit)}
                                </td>
                                <td className="px-4 py-3 tabular-nums">
                                  {changeDisplay == null ? (
                                    <span className="text-slate-400">—</span>
                                  ) : (
                                    <span className={changeDisplay < 0 ? "font-semibold text-emerald-600" : "text-rose-500"}>
                                      {changeDisplay > 0 ? "+" : ""}
                                      {changeDisplay.toFixed(1)} {unit}
                                    </span>
                                  )}
                                </td>
                                <td className="px-4 py-3 text-slate-700">{row.medication || "—"}</td>
                                <td className="px-4 py-3 text-slate-700">{row.dose || "—"}</td>
                                <td className="px-4 py-3 text-slate-500">{row.supplier || "—"}</td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                      type="button"
                                      onClick={() => setModal({ mode: "edit", entry: row })}
                                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
                                      title="Edit"
                                    >
                                      <Pencil className="h-3.5 w-3.5 text-slate-600" />
                                    </button>
                                    {isDeleteConfirm ? (
                                      <div className="flex items-center gap-1">
                                        <button
                                          type="button"
                                          onClick={() => handleDelete(row.id)}
                                          className="rounded-lg bg-red-100 px-2 py-1 text-xs font-semibold text-red-700 hover:bg-red-200 transition-colors"
                                        >
                                          Confirm
                                        </button>
                                        <button
                                          type="button"
                                          onClick={() => setDeleteConfirm(null)}
                                          className="rounded-lg bg-slate-100 px-2 py-1 text-xs text-slate-600 hover:bg-slate-200 transition-colors"
                                        >
                                          Cancel
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => setDeleteConfirm(row.id)}
                                        className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 hover:bg-red-100 hover:text-red-600 transition-colors"
                                        title="Delete"
                                      >
                                        <Trash2 className="h-3.5 w-3.5 text-slate-600" />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </motion.tr>
                            );
                          })
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Privacy footer */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Entries stored on this device</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Tracking data not sold or misused</span>
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm("Clear all tracker data? This cannot be undone.")) {
                          clearAllEntries();
                          setEntries([]);
                          setStarted(false);
                        }
                      }}
                      className="text-red-500 hover:text-red-700 underline underline-offset-2 transition-colors"
                    >
                      Clear all data
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-slate-400">
                    Information only — not medical advice. Always consult your prescriber.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="h-8 bg-background md:h-16" aria-hidden />
      </div>
    </>
  );
}
