"use client";

import {
  LogOut,
  Plus,
  RefreshCw,
  RotateCcw,
  Save,
  Search,
  Syringe,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";
import { hasPharmacyPage } from "@/lib/routes/all-pharmacy-slugs";
import { slugify } from "@/lib/utils/slugify";

function LockedCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block rounded border border-slate-100 bg-slate-50 px-2 py-1 text-slate-700 ${className}`}
    >
      {children}
    </span>
  );
}

/** Round to 2 decimal places (pence) for stable price editing. */
function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Price field that always shows two decimals when idle (e.g. 149.00).
 * Text input keeps trailing zeros (native number inputs strip them).
 * ↑↓ keys or the stepper buttons adjust by 0.01.
 */
function AdminPriceInput({
  value,
  onCommit,
}: {
  /** `null` = empty / non-numeric (e.g. TBC before edit). */
  value: number | null;
  onCommit: (n: number) => void;
}) {
  const [focused, setFocused] = useState(false);
  const [draft, setDraft] = useState("");

  const display = focused
    ? draft
    : value == null
      ? ""
      : roundMoney(value).toFixed(2);

  function commitFromRaw(raw: string) {
    const n = Number.parseFloat(raw.replace(",", "."));
    onCommit(Number.isFinite(n) ? roundMoney(n) : 0);
  }

  function stepBy(delta: number) {
    const base =
      Number.parseFloat((focused ? draft : display).replace(",", ".")) || 0;
    const next = Math.max(0, roundMoney(base + delta));
    setDraft(next.toFixed(2));
    onCommit(next);
  }

  return (
    <span className="inline-flex items-stretch overflow-hidden rounded border border-slate-200 bg-white">
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={display}
        onFocus={() => {
          setFocused(true);
          setDraft(value == null ? "" : roundMoney(value).toFixed(2));
        }}
        onChange={(e) => {
          const raw = e.target.value;
          if (raw !== "" && !/^\d*[.,]?\d*$/.test(raw)) return;
          setDraft(raw);
          const n = Number.parseFloat(raw.replace(",", "."));
          if (Number.isFinite(n)) onCommit(roundMoney(n));
        }}
        onBlur={() => {
          setFocused(false);
          commitFromRaw(draft);
          setDraft("");
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            stepBy(0.01);
          } else if (e.key === "ArrowDown") {
            e.preventDefault();
            stepBy(-0.01);
          }
        }}
        className="w-20 border-0 bg-transparent px-2 py-1 tabular-nums outline-none"
        placeholder="0.00"
      />
      <span className="flex w-5 shrink-0 flex-col border-l border-slate-200">
        <button
          type="button"
          tabIndex={-1}
          aria-label="Increase by 0.01"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => stepBy(0.01)}
          className="flex h-1/2 items-center justify-center text-[9px] leading-none text-slate-500 hover:bg-slate-50"
        >
          ▴
        </button>
        <button
          type="button"
          tabIndex={-1}
          aria-label="Decrease by 0.01"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => stepBy(-0.01)}
          className="flex h-1/2 items-center justify-center border-t border-slate-200 text-[9px] leading-none text-slate-500 hover:bg-slate-50"
        >
          ▾
        </button>
      </span>
    </span>
  );
}


/**
 * Shows the auto-generated profile slug for a provider and whether its
 * `/pharmacies/:slug` page (and links) is live yet.
 */
function ProviderSlugHint({ id, name }: { id: string; name: string }) {
  const live = hasPharmacyPage(id);
  const slug = live ? id : slugify(name);
  if (!slug) return null;
  return (
    <span className="mt-1 block max-w-44 text-[10px] leading-tight text-slate-400">
      /pharmacies/{slug}
      {live ? (
        <span className="text-emerald-600"> · linked</span>
      ) : (
        <span> · no page yet (no link)</span>
      )}
    </span>
  );
}
type MedicationTab = "mounjaro" | "wegovy";
type AdminMounjaroProvider = MounjaroUkProviderCompare & { notes?: string };
type AdminWegovyProvider = WegovyUkProviderCompare & { notes?: string };

type ApiResponse = {
  medication: MedicationTab;
  lastUpdated: string;
  providers: AdminMounjaroProvider[] | AdminWegovyProvider[];
};

function todayUpdatedLabel(): string {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** Public table header label, e.g. "July 2026". */
function currentMonthYearLabel(): string {
  const d = new Date();
  const month = d.toLocaleDateString("en-GB", { month: "long" });
  return `${month} ${d.getFullYear()}`;
}

function rowsSnapshot(
  rows: AdminMounjaroProvider[] | AdminWegovyProvider[],
): string {
  return JSON.stringify(rows);
}

function emptyMounjaroProvider(): AdminMounjaroProvider {
  return {
    id: `provider-${Date.now()}`,
    name: "New Provider",
    deliveryNote: "Confirm on site",
    notes: "",
    rating: 4.5,
    headlineFrom: 0,
    gphcRegNo: "",
    prices: {
      "2.5mg": 0,
      "5mg": 0,
      "7.5mg": 0,
      "10mg": 0,
      "12.5mg": 0,
      "15mg": 0,
    },
    updatedLabel: todayUpdatedLabel(),
    consultationIncluded: true,
    ctaHref: "/what-is-mounjaro#how-to-get-mounjaro-uk",
  };
}

function emptyWegovyProvider(): AdminWegovyProvider {
  return {
    id: `provider-${Date.now()}`,
    name: "New Provider",
    deliveryNote: "Confirm on site",
    notes: "",
    rating: 4.5,
    headlineFrom: 0,
    gphcRegNo: "",
    prices: {
      "0.25mg": 0,
      "0.5mg": 0,
      "1mg": 0,
      "1.7mg": 0,
      "2.4mg": 0,
      "7.2mg": "TBC",
    },
    updatedLabel: todayUpdatedLabel(),
    consultationIncluded: true,
    ctaHref: "/what-is-wegovy#how-to-get-wegovy-uk",
  };
}

function normaliseMounjaroRows(
  rows: AdminMounjaroProvider[],
): AdminMounjaroProvider[] {
  const today = todayUpdatedLabel();
  return rows.map((row) => ({
    ...row,
    notes: row.notes ?? "",
    updatedLabel: today,
  }));
}

function normaliseWegovyRows(
  rows: AdminWegovyProvider[],
): AdminWegovyProvider[] {
  const today = todayUpdatedLabel();
  return rows.map((row) => ({
    ...row,
    notes: row.notes ?? "",
    updatedLabel: today,
  }));
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<MedicationTab>("mounjaro");
  const [mounjaroRows, setMounjaroRows] = useState<AdminMounjaroProvider[]>(
    [],
  );
  const [wegovyRows, setWegovyRows] = useState<AdminWegovyProvider[]>([]);
  const [savedSnapshot, setSavedSnapshot] = useState({
    mounjaro: "[]",
    wegovy: "[]",
  });
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<string | null>(null);

  const loadData = useCallback(async (med: MedicationTab) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/${med}`, { cache: "no-store" });
      if (res.status === 401) {
        router.refresh();
        return;
      }
      if (!res.ok) {
        throw new Error("Failed to load data");
      }
      const data = (await res.json()) as ApiResponse;
      if (med === "mounjaro") {
        const rows = normaliseMounjaroRows(
          data.providers as AdminMounjaroProvider[],
        );
        setMounjaroRows(rows);
        setSavedSnapshot((prev) => ({
          ...prev,
          mounjaro: rowsSnapshot(rows),
        }));
      } else {
        const rows = normaliseWegovyRows(
          data.providers as AdminWegovyProvider[],
        );
        setWegovyRows(rows);
        setSavedSnapshot((prev) => ({
          ...prev,
          wegovy: rowsSnapshot(rows),
        }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Load failed");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void loadData(activeTab);
  }, [activeTab, loadData]);

  const filteredMounjaro = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return mounjaroRows;
    return mounjaroRows.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q),
    );
  }, [mounjaroRows, search]);

  const filteredWegovy = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return wegovyRows;
    return wegovyRows.filter(
      (p) =>
        p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q),
    );
  }, [wegovyRows, search]);

  const hasUnsavedChanges = useMemo(() => {
    const current =
      activeTab === "mounjaro"
        ? rowsSnapshot(mounjaroRows)
        : rowsSnapshot(wegovyRows);
    const saved =
      activeTab === "mounjaro"
        ? savedSnapshot.mounjaro
        : savedSnapshot.wegovy;
    return current !== saved;
  }, [activeTab, mounjaroRows, wegovyRows, savedSnapshot]);

  const lastUpdatedLabel = currentMonthYearLabel();

  async function handleSave() {
    setSaving(true);
    setMessage(null);
    setError(null);
    try {
      const providers = activeTab === "mounjaro" ? mounjaroRows : wegovyRows;
      const res = await fetch(`/api/admin/${activeTab}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastUpdated: lastUpdatedLabel,
          providers,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Save failed");
      }
      setSavedSnapshot((prev) => ({
        ...prev,
        [activeTab]: rowsSnapshot(providers),
      }));
      setMessage(
        `Saved ${activeTab === "mounjaro" ? "Mounjaro" : "Wegovy"} table (${providers.length} providers).`,
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm(`Delete provider "${id}"?`)) return;
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const nextProviders =
        activeTab === "mounjaro"
          ? mounjaroRows.filter((p) => p.id !== id)
          : wegovyRows.filter((p) => p.id !== id);

      const res = await fetch(`/api/admin/${activeTab}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lastUpdated: lastUpdatedLabel,
          providers: nextProviders,
        }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Delete failed");
      }
      if (activeTab === "mounjaro") {
        setMounjaroRows(nextProviders as AdminMounjaroProvider[]);
        setSavedSnapshot((prev) => ({
          ...prev,
          mounjaro: rowsSnapshot(nextProviders),
        }));
      } else {
        setWegovyRows(nextProviders as AdminWegovyProvider[]);
        setSavedSnapshot((prev) => ({
          ...prev,
          wegovy: rowsSnapshot(nextProviders),
        }));
      }
      setMessage("Provider deleted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleReset() {
    const medLabel = activeTab === "mounjaro" ? "Mounjaro" : "Wegovy";
    if (
      !window.confirm(
        `Reset the ${medLabel} table back to the original prices? This replaces all current rows (including your edits, additions and deletions) with the original data.`,
      )
    ) {
      return;
    }
    setSaving(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/${activeTab}/reset`, {
        method: "POST",
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Reset failed");
      }
      await loadData(activeTab);
      setMessage(`${medLabel} table reset to the original prices.`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Reset failed");
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  function handleAddProvider() {
    const created =
      activeTab === "mounjaro"
        ? emptyMounjaroProvider()
        : emptyWegovyProvider();
    if (activeTab === "mounjaro") {
      setMounjaroRows((rows) => [created as AdminMounjaroProvider, ...rows]);
    } else {
      setWegovyRows((rows) => [created as AdminWegovyProvider, ...rows]);
    }
    setSearch("");
    setError(null);
    setHighlightId(created.id);
    setMessage(
      "New provider added at the top of the table — edit its details, then click Save all.",
    );
    if (typeof window !== "undefined") {
      window.requestAnimationFrame(() => {
        document
          .getElementById(`admin-row-${created.id}`)
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      window.setTimeout(() => {
        setHighlightId((cur) => (cur === created.id ? null : cur));
      }, 3000);
    }
  }

  function updateMounjaroRow(
    index: number,
    patch: Partial<AdminMounjaroProvider>,
  ) {
    setMounjaroRows((rows) =>
      rows.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  }

  function updateMounjaroPrice(
    index: number,
    dose: (typeof MOUNJARO_DOSE_KEYS)[number],
    value: number,
  ) {
    setMounjaroRows((rows) =>
      rows.map((row, i) =>
        i === index
          ? { ...row, prices: { ...row.prices, [dose]: roundMoney(value) } }
          : row,
      ),
    );
  }

  function updateWegovyRow(
    index: number,
    patch: Partial<AdminWegovyProvider>,
  ) {
    setWegovyRows((rows) =>
      rows.map((row, i) => (i === index ? { ...row, ...patch } : row)),
    );
  }

  function updateWegovyPrice(
    index: number,
    dose: (typeof WEGOVY_DOSE_KEYS)[number],
    value: number,
  ) {
    setWegovyRows((rows) =>
      rows.map((row, i) =>
        i === index
          ? {
              ...row,
              prices: { ...row.prices, [dose]: roundMoney(value) },
            }
          : row,
      ),
    );
  }

  const rowCount =
    activeTab === "mounjaro" ? mounjaroRows.length : wegovyRows.length;

  return (
    <div className="min-h-svh bg-slate-100">
      <div className="flex min-h-svh flex-col lg:flex-row">
        <aside className="flex w-full shrink-0 flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 lg:w-56 lg:gap-0 lg:border-b-0 lg:border-r lg:py-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 lg:mb-3">
            Compare tables
          </p>
          <nav className="flex gap-2 lg:flex-col lg:space-y-2">
            {(
              [
                { id: "mounjaro" as const, label: "Mounjaro", accent: "violet" },
                { id: "wegovy" as const, label: "Wegovy", accent: "teal" },
              ] as const
            ).map((tab) => {
              const on = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearch("");
                    setMessage(null);
                    setError(null);
                    setHighlightId(null);
                  }}
                  className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition lg:w-full lg:flex-none lg:justify-start ${
                    on
                      ? tab.id === "mounjaro"
                        ? "bg-violet-600 text-white shadow-sm"
                        : "bg-teal-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Syringe className="h-4 w-4 shrink-0" aria-hidden />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="flex gap-2 lg:mt-auto lg:flex-col lg:space-y-2 lg:pt-8">
            <button
              type="button"
              onClick={() => void loadData(activeTab)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:w-full lg:flex-none"
            >
              <RefreshCw className="h-4 w-4" aria-hidden />
              Reload
            </button>
            <button
              type="button"
              onClick={() => void handleLogout()}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 lg:w-full lg:flex-none"
            >
              <LogOut className="h-4 w-4" aria-hidden />
              Log out
            </button>
          </div>
        </aside>

        <main
          className={`min-w-0 flex-1 px-4 py-6 md:px-8 ${hasUnsavedChanges ? "pb-24" : ""}`}
        >
          <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {activeTab === "mounjaro" ? "Mounjaro" : "Wegovy"} price table
              </h1>
              <p className="mt-1 text-sm text-slate-600">
                {rowCount} providers · changes appear on the public compare page
                after save
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Provider, rating, GPhC and updated date are locked. Edit dose
                prices and notes, then save.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600">
                <span className="font-medium text-slate-800">Last updated</span>
                <span className="ml-2 tabular-nums text-slate-900">
                  {lastUpdatedLabel}
                </span>
              </p>
              <button
                type="button"
                onClick={handleAddProvider}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                <Plus className="h-4 w-4" aria-hidden />
                Add provider
              </button>
              <button
                type="button"
                onClick={() => void handleReset()}
                disabled={saving || loading}
                className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800 hover:bg-amber-100 disabled:opacity-60"
              >
                <RotateCcw className="h-4 w-4" aria-hidden />
                Reset prices
              </button>
              {!hasUnsavedChanges && (
                <button
                  type="button"
                  onClick={() => void handleSave()}
                  disabled={saving || loading}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
                >
                  <Save className="h-4 w-4" aria-hidden />
                  {saving ? "Saving…" : "Save all"}
                </button>
              )}
            </div>
          </div>

          {message && (
            <p className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
              {message}
            </p>
          )}
          {error && (
            <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900">
              {error}
            </p>
          )}

          <div className="mb-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <Search className="h-4 w-4 text-slate-400" aria-hidden />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or id…"
              className="w-full bg-transparent text-sm text-slate-900 outline-none"
            />
          </div>

          {loading ? (
            <p className="text-sm text-slate-600">Loading table…</p>
          ) : activeTab === "mounjaro" ? (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[1200px] w-full border-collapse text-left text-xs">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="sticky left-0 z-10 bg-slate-50 px-3 py-2">
                      Provider
                    </th>
                    <th className="px-2 py-2">Rating</th>
                    <th className="px-2 py-2">GPhC</th>
                    {MOUNJARO_DOSE_KEYS.map((d) => (
                      <th key={d} className="px-2 py-2">
                        {d}
                      </th>
                    ))}
                    <th className="px-2 py-2">Notes</th>
                    <th className="px-2 py-2">Updated</th>
                    <th className="px-2 py-2" />
                  </tr>
                </thead>
                <tbody>
                  {filteredMounjaro.map((row) => {
                    const index = mounjaroRows.indexOf(row);
                    const highlighted = row.id === highlightId;
                    return (
                      <tr
                        key={row.id}
                        id={`admin-row-${row.id}`}
                        className={`border-t border-slate-100 transition-colors ${
                          highlighted
                            ? "bg-emerald-50 ring-2 ring-inset ring-emerald-400"
                            : "hover:bg-slate-50/60"
                        }`}
                      >
                        <td className="sticky left-0 z-10 bg-white px-2 py-2">
                          <LockedCell className="w-36 font-medium">
                            {row.name}
                          </LockedCell>
                          <ProviderSlugHint id={row.id} name={row.name} />
                        </td>
                        <td className="px-2 py-2">
                          <LockedCell className="w-16 tabular-nums">
                            {row.rating.toFixed(1)}
                          </LockedCell>
                        </td>
                        <td className="px-2 py-2">
                          <LockedCell className="w-24 tabular-nums">
                            {row.gphcRegNo || "—"}
                          </LockedCell>
                        </td>
                        {MOUNJARO_DOSE_KEYS.map((dose) => (
                          <td key={dose} className="px-2 py-2">
                            <AdminPriceInput
                              value={row.prices[dose]}
                              onCommit={(n) =>
                                updateMounjaroPrice(index, dose, n)
                              }
                            />
                          </td>
                        ))}
                        <td className="px-2 py-2 align-top">
                          <textarea
                            value={row.notes ?? ""}
                            onChange={(e) =>
                              updateMounjaroRow(index, {
                                notes: e.target.value,
                              })
                            }
                            rows={2}
                            placeholder="e.g. Free next-day delivery"
                            className="w-48 resize-y rounded border border-slate-200 px-2 py-1 leading-snug"
                          />
                        </td>
                        <td className="px-2 py-2 align-top">
                          <LockedCell className="w-28">{row.updatedLabel}</LockedCell>
                        </td>
                        <td className="px-2 py-2">
                          <button
                            type="button"
                            onClick={() => void handleDelete(row.id)}
                            className="rounded-lg p-1.5 text-red-600 hover:bg-red-50"
                            aria-label={`Delete ${row.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-[1200px] w-full border-collapse text-left text-xs">
                <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="sticky left-0 z-10 bg-slate-50 px-3 py-2">
                      Provider
                    </th>
                    <th className="px-2 py-2">Rating</th>
                    <th className="px-2 py-2">GPhC</th>
                    {WEGOVY_DOSE_KEYS.map((d) => (
                      <th key={d} className="px-2 py-2">
                        {d}
                      </th>
                    ))}
                    <th className="px-2 py-2">Notes</th>
                    <th className="px-2 py-2">Updated</th>
                    <th className="px-2 py-2" />
                  </tr>
                </thead>
                <tbody>
                  {filteredWegovy.map((row) => {
                    const index = wegovyRows.indexOf(row);
                    const highlighted = row.id === highlightId;
                    return (
                      <tr
                        key={row.id}
                        id={`admin-row-${row.id}`}
                        className={`border-t border-slate-100 transition-colors ${
                          highlighted
                            ? "bg-emerald-50 ring-2 ring-inset ring-emerald-400"
                            : "hover:bg-slate-50/60"
                        }`}
                      >
                        <td className="sticky left-0 z-10 bg-white px-2 py-2">
                          <LockedCell className="w-36 font-medium">
                            {row.name}
                          </LockedCell>
                          <ProviderSlugHint id={row.id} name={row.name} />
                        </td>
                        <td className="px-2 py-2">
                          <LockedCell className="w-16 tabular-nums">
                            {row.rating.toFixed(1)}
                          </LockedCell>
                        </td>
                        <td className="px-2 py-2">
                          <LockedCell className="w-24 tabular-nums">
                            {row.gphcRegNo || "—"}
                          </LockedCell>
                        </td>
                        {WEGOVY_DOSE_KEYS.map((dose) => {
                          const cell = row.prices[dose];
                          return (
                            <td key={dose} className="px-2 py-2">
                              <AdminPriceInput
                                value={
                                  typeof cell === "number" ? cell : null
                                }
                                onCommit={(n) =>
                                  updateWegovyPrice(index, dose, n)
                                }
                              />
                            </td>
                          );
                        })}
                        <td className="px-2 py-2 align-top">
                          <textarea
                            value={row.notes ?? ""}
                            onChange={(e) =>
                              updateWegovyRow(index, {
                                notes: e.target.value,
                              })
                            }
                            rows={2}
                            placeholder="e.g. Free — Click & Collect"
                            className="w-48 resize-y rounded border border-slate-200 px-2 py-1 leading-snug"
                          />
                        </td>
                        <td className="px-2 py-2 align-top">
                          <LockedCell className="w-28">{row.updatedLabel}</LockedCell>
                        </td>
                        <td className="px-2 py-2">
                          <button
                            type="button"
                            onClick={() => void handleDelete(row.id)}
                            className="rounded-lg p-1.5 text-red-600 hover:bg-red-50"
                            aria-label={`Delete ${row.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-4 text-xs text-slate-500">
            Price cells use a numeric stepper (0.01 steps) and always show two
            decimal places on the public compare pages (e.g. £149.00). Existing
            Wegovy TBC/OOS cells stay until you enter a number.
          </p>
        </main>
      </div>

      {hasUnsavedChanges && (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-300 bg-amber-50/95 px-4 py-3 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.12)] backdrop-blur-sm lg:left-56">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-amber-950">
              You have unsaved changes on this table
            </p>
            <button
              type="button"
              onClick={() => void handleSave()}
              disabled={saving || loading}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-700 disabled:opacity-60"
            >
              <Save className="h-4 w-4" aria-hidden />
              {saving ? "Saving…" : "Save all changes"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
