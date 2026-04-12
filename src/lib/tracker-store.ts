/**
 * Weight tracker local store — persists to localStorage.
 * Optional future: sync rows to Supabase `weight_entries` for the signed-in user.
 */

export type WeightUnit = "kg" | "lbs" | "stone";

export type TrackerEntry = {
  id: string;
  date: string; // ISO date string "YYYY-MM-DD"
  weightKg: number; // always stored in kg for consistency
  displayUnit: WeightUnit; // unit the user entered in
  displayWeight: number; // value in the display unit
  medication: string;
  dose: string;
  supplier: string;
  notes: string;
  createdAt: number; // epoch ms
};

export type GoalSettings = {
  goalWeightKg: number | null;
  preferredUnit: WeightUnit;
};

const ENTRIES_KEY = "hw_tracker_entries_v1";
const GOALS_KEY = "hw_tracker_goals_v1";

function read<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or private mode */
  }
}

export function getEntries(): TrackerEntry[] {
  return read<TrackerEntry[]>(ENTRIES_KEY, []);
}

export function addEntry(
  entry: Omit<TrackerEntry, "id" | "createdAt">,
): TrackerEntry {
  const entries = getEntries();
  const newEntry: TrackerEntry = {
    ...entry,
    id: generateId(),
    createdAt: Date.now(),
  };
  entries.push(newEntry);
  write(ENTRIES_KEY, entries);
  return newEntry;
}

export function updateEntry(
  id: string,
  patch: Partial<Omit<TrackerEntry, "id" | "createdAt">>,
): void {
  const entries = getEntries().map((e) =>
    e.id === id ? { ...e, ...patch } : e,
  );
  write(ENTRIES_KEY, entries);
}

export function deleteEntry(id: string): void {
  const entries = getEntries().filter((e) => e.id !== id);
  write(ENTRIES_KEY, entries);
}

export function clearAllEntries(): void {
  write(ENTRIES_KEY, []);
}

export function getGoals(): GoalSettings {
  return read<GoalSettings>(GOALS_KEY, {
    goalWeightKg: null,
    preferredUnit: "kg",
  });
}

export function saveGoals(goals: GoalSettings): void {
  write(GOALS_KEY, goals);
}

function generateId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/* ── Unit conversion helpers ─────────────────────────────────────── */

export function toKg(value: number, unit: WeightUnit): number {
  if (unit === "kg") return value;
  if (unit === "lbs") return value * 0.45359237;
  // stone: 1 stone = 14 lbs = 6.35029318 kg
  return value * 6.35029318;
}

export function fromKg(kg: number, unit: WeightUnit): number {
  if (unit === "kg") return kg;
  if (unit === "lbs") return kg / 0.45359237;
  return kg / 6.35029318;
}

export function formatWeight(kg: number, unit: WeightUnit): string {
  const v = fromKg(kg, unit);
  if (unit === "stone") {
    const st = Math.floor(v);
    const lb = Math.round((v - st) * 14 * 10) / 10;
    return `${st} st ${lb} lb`;
  }
  return `${v.toFixed(1)} ${unit}`;
}

export function sortEntriesByDate(entries: TrackerEntry[]): TrackerEntry[] {
  return [...entries].sort((a, b) => a.date.localeCompare(b.date));
}

/* ── Metrics calculation ─────────────────────────────────────────── */

export type TrackerMetrics = {
  startWeightKg: number | null;
  currentWeightKg: number | null;
  totalLossKg: number | null;
  weeklyAvgLossKg: number | null;
  progressPct: number | null;
  estimatedGoalDate: Date | null;
};

export function computeMetrics(
  sorted: TrackerEntry[],
  goalWeightKg: number | null,
): TrackerMetrics {
  if (sorted.length === 0) {
    return {
      startWeightKg: null,
      currentWeightKg: null,
      totalLossKg: null,
      weeklyAvgLossKg: null,
      progressPct: null,
      estimatedGoalDate: null,
    };
  }

  const first = sorted[0]!;
  const last = sorted[sorted.length - 1]!;
  const startWeightKg = first.weightKg;
  const currentWeightKg = last.weightKg;
  const totalLossKg = startWeightKg - currentWeightKg;

  const t0 = new Date(first.date).getTime();
  const t1 = new Date(last.date).getTime();
  const weeks = Math.max((t1 - t0) / (7 * 24 * 60 * 60 * 1000), 0.25);
  const weeklyAvgLossKg = sorted.length > 1 ? totalLossKg / weeks : null;

  const totalLossNeeded =
    goalWeightKg != null ? startWeightKg - goalWeightKg : null;
  const progressPct =
    totalLossNeeded != null && totalLossNeeded > 0
      ? Math.min(100, Math.max(0, (totalLossKg / totalLossNeeded) * 100))
      : null;

  let estimatedGoalDate: Date | null = null;
  if (
    goalWeightKg != null &&
    weeklyAvgLossKg != null &&
    weeklyAvgLossKg > 0 &&
    currentWeightKg > goalWeightKg
  ) {
    const remaining = currentWeightKg - goalWeightKg;
    const weeksLeft = remaining / weeklyAvgLossKg;
    estimatedGoalDate = new Date(Date.now() + weeksLeft * 7 * 24 * 60 * 60 * 1000);
  }

  return {
    startWeightKg,
    currentWeightKg,
    totalLossKg,
    weeklyAvgLossKg,
    progressPct,
    estimatedGoalDate,
  };
}
