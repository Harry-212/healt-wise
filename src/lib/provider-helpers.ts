import type { PharmacyProvider } from "@/lib/types/provider";

/**
 * Monthly cost for display/sort. When `monthlyCost` is omitted, we use `totalPrice`
 * as an illustrative 4-week equivalent (homepage snapshot — replace with titration math when live).
 */
export function getMonthlyCost(provider: PharmacyProvider): number {
  if (provider.monthlyCost != null) return provider.monthlyCost;
  return provider.totalPrice;
}

/**
 * Deterministic GBP display (no Intl) so SSR and the browser produce identical
 * strings — Node and Chromium can disagree on narrow spaces in currency output.
 */
export function formatGBP(value: number): string {
  if (!Number.isFinite(value)) return "£0";
  const neg = value < 0;
  const v = Math.abs(value);
  const whole = Math.abs(v % 1) < 1e-9;
  const str = whole ? String(Math.trunc(v)) : v.toFixed(2);
  const [intPart, dec] = str.split(".");
  const grouped = intPart!.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const body = dec != null ? `${grouped}.${dec}` : grouped;
  return neg ? `-£${body}` : `£${body}`;
}

/** Integer grouping for review counts etc. — same SSR/client string as formatGBP. */
export function formatUkGroupedInteger(value: number): string {
  if (!Number.isFinite(value)) return "0";
  const n = Math.trunc(value);
  const neg = n < 0;
  const s = String(Math.abs(n));
  const grouped = s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return neg ? `-${grouped}` : grouped;
}

export function consultationLabel(
  cost: PharmacyProvider["consultationCost"],
): string {
  return cost === "Included" ? "Yes" : typeof cost === "number" ? formatGBP(cost) : "—";
}
