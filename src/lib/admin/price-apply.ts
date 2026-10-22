import "server-only";
import type { CompareMedication, MounjaroCompareStore, WegovyCompareStore } from "@/lib/data/compare-types";
import { MOUNJARO_DOSE_KEYS } from "@/lib/data/mounjaro-uk-compare-providers";
import { WEGOVY_DOSE_KEYS } from "@/lib/data/wegovy-uk-compare-providers";

/**
 * Applies an approved monthly price update (from scripts/price-scraper) to the
 * live compare stores. Only per-dose prices, the provider's check date and the
 * store's lastUpdated change; every other field is left as it is.
 *
 * Safety rails:
 * - `expectedCurrent` must still match the live price (someone may have edited
 *   it in /admin-dashboard since the check ran) — otherwise the row is skipped;
 * - a price outside £40–£700 or more than 50% away from the live one is refused;
 * - unknown providers or doses are refused, never created.
 */

export type PriceUpdate = {
  medication: CompareMedication;
  providerId: string;
  dose: string;
  price: number;
  expectedCurrent: number | string | null;
};

export type CheckedProvider = { medication: CompareMedication; providerId: string };

export type ApplyRequest = {
  checkedOn: string; // yyyy-mm-dd (UK date of the check)
  updates: PriceUpdate[];
  checked: CheckedProvider[];
};

export type ApplyResult = {
  applied: (PriceUpdate & { previous: number | string | null })[];
  skipped: (Partial<PriceUpdate> & { reason: string })[];
  checkedProviders: number;
  lastUpdated: string | null;
};

const MIN_PRICE = 40;
const MAX_PRICE = 700;
const MAX_RELATIVE_CHANGE = 0.5;

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

/** "2026-11-02" → { short: "2 Nov 2026", long: "2 November 2026" } (the formats the data already uses). */
export function checkDateLabels(iso: string): { short: string; long: string } | null {
  const m = iso.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const [, y, mo, d] = m;
  const month = Number(mo) - 1;
  if (month < 0 || month > 11 || Number(d) < 1 || Number(d) > 31) return null;
  return { short: `${Number(d)} ${MONTHS_SHORT[month]} ${y}`, long: `${Number(d)} ${MONTHS_LONG[month]} ${y}` };
}

const isMed = (v: unknown): v is CompareMedication => v === "mounjaro" || v === "wegovy";

/** Validates the request body shape; returns an error message or the typed request. */
export function parseApplyRequest(body: unknown): ApplyRequest | string {
  if (!body || typeof body !== "object") return "Invalid body";
  const o = body as Record<string, unknown>;
  if (typeof o.checkedOn !== "string" || !checkDateLabels(o.checkedOn)) return "checkedOn must be yyyy-mm-dd";
  if (!Array.isArray(o.updates) || !Array.isArray(o.checked)) return "updates and checked must be arrays";
  if (o.updates.length > 1000 || o.checked.length > 1000) return "Too many rows";
  const updates: PriceUpdate[] = [];
  for (const u of o.updates) {
    const r = u as Record<string, unknown>;
    if (!r || !isMed(r.medication) || typeof r.providerId !== "string" || typeof r.dose !== "string" || typeof r.price !== "number") {
      return "Invalid update row";
    }
    updates.push({
      medication: r.medication,
      providerId: r.providerId,
      dose: r.dose,
      price: r.price,
      expectedCurrent: typeof r.expectedCurrent === "number" || typeof r.expectedCurrent === "string" ? r.expectedCurrent : null,
    });
  }
  const checked: CheckedProvider[] = [];
  for (const c of o.checked) {
    const r = c as Record<string, unknown>;
    if (!r || !isMed(r.medication) || typeof r.providerId !== "string") return "Invalid checked row";
    checked.push({ medication: r.medication, providerId: r.providerId });
  }
  return { checkedOn: o.checkedOn, updates, checked };
}

type AnyProvider = { id: string; prices: Record<string, number | string>; headlineFrom: number; updatedLabel: string };

/** Mutates the given stores in place. Call save() afterwards only if not a dry run. */
export function applyPriceUpdates(
  req: ApplyRequest,
  stores: { mounjaro: MounjaroCompareStore; wegovy: WegovyCompareStore },
): ApplyResult {
  const labels = checkDateLabels(req.checkedOn)!;
  const result: ApplyResult = { applied: [], skipped: [], checkedProviders: 0, lastUpdated: null };
  const doseKeys: Record<CompareMedication, readonly string[]> = { mounjaro: MOUNJARO_DOSE_KEYS, wegovy: WEGOVY_DOSE_KEYS };
  const touched: Record<CompareMedication, Set<string>> = { mounjaro: new Set(), wegovy: new Set() };
  const find = (med: CompareMedication, id: string) =>
    (stores[med].providers as AnyProvider[]).find((p) => p.id === id);

  for (const u of req.updates) {
    const provider = find(u.medication, u.providerId);
    if (!provider) {
      result.skipped.push({ ...u, reason: "unknown provider" });
      continue;
    }
    if (!doseKeys[u.medication].includes(u.dose)) {
      result.skipped.push({ ...u, reason: "unknown dose" });
      continue;
    }
    const price = Math.round(u.price * 100) / 100;
    if (!Number.isFinite(price) || price < MIN_PRICE || price > MAX_PRICE) {
      result.skipped.push({ ...u, reason: `price outside £${MIN_PRICE}–£${MAX_PRICE}` });
      continue;
    }
    const previous = provider.prices[u.dose] ?? null;
    if (String(previous) !== String(u.expectedCurrent)) {
      result.skipped.push({ ...u, reason: `live price changed since the check (now ${previous})` });
      continue;
    }
    if (typeof previous === "number" && previous > 0 && Math.abs(price - previous) / previous > MAX_RELATIVE_CHANGE) {
      result.skipped.push({ ...u, reason: "change larger than 50% — apply by hand if correct" });
      continue;
    }
    provider.prices[u.dose] = price;
    touched[u.medication].add(provider.id);
    result.applied.push({ ...u, price, previous });
  }

  for (const c of req.checked) if (find(c.medication, c.providerId)) touched[c.medication].add(c.providerId);

  for (const med of ["mounjaro", "wegovy"] as const) {
    if (touched[med].size === 0) continue;
    for (const id of touched[med]) {
      const p = find(med, id)!;
      p.updatedLabel = labels.short;
      const positives = Object.values(p.prices).filter((v): v is number => typeof v === "number" && v > 0);
      if (positives.length > 0) p.headlineFrom = Math.min(...positives);
    }
    stores[med].lastUpdated = labels.long;
    result.checkedProviders += touched[med].size;
    result.lastUpdated = labels.long;
  }
  return result;
}
