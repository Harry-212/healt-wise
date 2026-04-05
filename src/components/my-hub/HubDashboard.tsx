"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { WeightEntryRow } from "@/lib/types/weight-entry";

const MEDS = ["Wegovy", "Mounjaro", "Saxenda", "Other"] as const;
const DOSES = [
  "0.25mg",
  "0.5mg",
  "1.0mg",
  "1.7mg",
  "2.4mg",
  "2.5mg",
  "5mg",
  "7.5mg",
  "10mg",
  "12.5mg",
  "15mg",
  "Other",
] as const;

export default function HubDashboard({
  userId,
  email,
}: {
  userId: string;
  email: string;
}) {
  const supabase = useMemo(() => createBrowserSupabaseClient(), []);
  const [rows, setRows] = useState<WeightEntryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [entryDate, setEntryDate] = useState(
    () => new Date().toISOString().slice(0, 10),
  );
  const [weight, setWeight] = useState("");
  const [medication, setMedication] = useState<string>(MEDS[0]);
  const [dose, setDose] = useState<string>(DOSES[0]);
  const [supplier, setSupplier] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    if (!supabase) return;
    setLoading(true);
    const { data, error } = await supabase
      .from("weight_entries")
      .select("*")
      .eq("user_id", userId)
      .order("entry_date", { ascending: true });
    if (!error && data) setRows(data as WeightEntryRow[]);
    setLoading(false);
  }, [supabase, userId]);

  useEffect(() => {
    load();
  }, [load]);

  const sorted = useMemo(() => [...rows].sort((a, b) => a.entry_date.localeCompare(b.entry_date)), [rows]);

  const metrics = useMemo(() => {
    if (sorted.length < 2) {
      return { totalLoss: null as number | null, weeklyAvg: null as number | null, progressPct: null as number | null };
    }
    const first = sorted[0]!;
    const last = sorted[sorted.length - 1]!;
    const startW = Number(first.weight_kg);
    const endW = Number(last.weight_kg);
    const totalLoss = startW - endW;
    const t0 = new Date(first.entry_date).getTime();
    const t1 = new Date(last.entry_date).getTime();
    const weeks = Math.max((t1 - t0) / (7 * 24 * 60 * 60 * 1000), 0.25);
    const weeklyAvg = totalLoss / weeks;
    const progressPct =
      startW > 0 ? Math.min(100, Math.max(0, (totalLoss / startW) * 100)) : 0;
    return { totalLoss, weeklyAvg, progressPct };
  }, [sorted]);

  const chartData = useMemo(
    () =>
      sorted.map((r) => ({
        date: r.entry_date,
        weight: Number(r.weight_kg),
      })),
    [sorted],
  );

  async function addEntry(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase || !weight) return;
    setSaving(true);
    const w = Number.parseFloat(weight);
    if (Number.isNaN(w)) {
      setSaving(false);
      return;
    }
    await supabase.from("weight_entries").insert({
      user_id: userId,
      entry_date: entryDate,
      weight_kg: w,
      medication,
      dose,
      supplier: supplier || null,
    });
    setWeight("");
    setSaving(false);
    load();
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    window.location.href = "/my-hub/login";
  }

  if (!supabase) {
    return (
      <p className="p-8 text-center text-slate-600">
        Supabase client unavailable.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            My Hub
          </h1>
          <p className="text-sm text-slate-500">{email}</p>
        </div>
        <button
          type="button"
          onClick={() => signOut()}
          className="rounded-lg border border-brand-border px-4 py-2 text-sm font-medium"
        >
          Sign out
        </button>
      </div>

      <div className="mt-8 grid gap-4 rounded-xl border border-brand-border bg-brand-surface/40 p-6 md:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Total weight change (kg)
          </p>
          <p className="mt-1 text-2xl font-bold text-brand-primary">
            {metrics.totalLoss == null
              ? "—"
              : `${metrics.totalLoss.toFixed(1)} kg`}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            First vs latest entry (positive = lower weight than start)
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Weekly average (kg/wk)
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {metrics.weeklyAvg == null ? "—" : metrics.weeklyAvg.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase text-slate-500">
            Progress (% of start weight)
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            {metrics.progressPct == null ? "—" : `${metrics.progressPct.toFixed(1)}%`}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-amber-200/80 bg-amber-50/90 p-6">
        <h2 className="text-lg font-semibold text-amber-950">
          Find the best deal
        </h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <Link
            href="/prices/cheapest-options-uk"
            className="inline-flex rounded-lg bg-brand-cta px-4 py-2 text-sm font-bold text-slate-900"
          >
            Find cheapest refill
          </Link>
          <Link
            href="/#compare-preview"
            className="inline-flex rounded-lg border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-950"
          >
            Best deal today
          </Link>
        </div>
      </div>

      <form
        onSubmit={addEntry}
        className="mt-10 grid gap-4 rounded-xl border border-brand-border bg-white p-6"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Add entry
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <label className="text-sm font-medium">
            Date
            <input
              type="date"
              required
              value={entryDate}
              onChange={(e) => setEntryDate(e.target.value)}
              className="mt-1 w-full rounded-lg border border-brand-border px-3 py-2"
            />
          </label>
          <label className="text-sm font-medium">
            Weight (kg)
            <input
              type="number"
              step="0.1"
              required
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 w-full rounded-lg border border-brand-border px-3 py-2"
            />
          </label>
          <label className="text-sm font-medium">
            Medication
            <select
              value={medication}
              onChange={(e) => setMedication(e.target.value)}
              className="mt-1 w-full rounded-lg border border-brand-border px-3 py-2"
            >
              {MEDS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Dose
            <select
              value={dose}
              onChange={(e) => setDose(e.target.value)}
              className="mt-1 w-full rounded-lg border border-brand-border px-3 py-2"
            >
              {DOSES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium sm:col-span-2 lg:col-span-1">
            Supplier
            <input
              value={supplier}
              onChange={(e) => setSupplier(e.target.value)}
              placeholder="Pharmacy name"
              className="mt-1 w-full rounded-lg border border-brand-border px-3 py-2"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={saving}
          className="w-full rounded-lg bg-brand-primary py-3 text-sm font-bold text-white disabled:opacity-60 sm:w-auto sm:px-8"
        >
          {saving ? "Saving…" : "Save entry"}
        </button>
      </form>

      <div className="mt-10 h-64 w-full rounded-xl border border-brand-border p-4">
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis domain={["dataMin - 2", "dataMax + 2"]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#1f2937"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="flex h-full items-center justify-center text-sm text-slate-500">
            Add entries to see your weight trend.
          </p>
        )}
      </div>

      <div className="mt-10 overflow-x-auto rounded-xl border border-brand-border">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="sticky top-0 bg-brand-surface">
            <tr className="border-b border-brand-border">
              <th className="px-3 py-2 font-semibold">Date</th>
              <th className="px-3 py-2 font-semibold">Weight</th>
              <th className="px-3 py-2 font-semibold">Change</th>
              <th className="px-3 py-2 font-semibold">Medication</th>
              <th className="px-3 py-2 font-semibold">Dose</th>
              <th className="px-3 py-2 font-semibold">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="px-3 py-8 text-center text-slate-500">
                  Loading…
                </td>
              </tr>
            ) : sorted.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-3 py-8 text-center text-slate-500">
                  No entries yet.
                </td>
              </tr>
            ) : (
              sorted.map((r, i) => {
                const prev = sorted[i - 1];
                const change =
                  prev != null
                    ? Number(r.weight_kg) - Number(prev.weight_kg)
                    : null;
                return (
                  <tr
                    key={r.id}
                    className="border-b border-brand-border/70"
                  >
                    <td className="px-3 py-2">{r.entry_date}</td>
                    <td className="px-3 py-2">{Number(r.weight_kg).toFixed(1)}</td>
                    <td className="px-3 py-2">
                      {change == null
                        ? "—"
                        : `${change > 0 ? "+" : ""}${change.toFixed(1)}`}
                    </td>
                    <td className="px-3 py-2">{r.medication ?? "—"}</td>
                    <td className="px-3 py-2">{r.dose ?? "—"}</td>
                    <td className="px-3 py-2">{r.supplier ?? "—"}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
