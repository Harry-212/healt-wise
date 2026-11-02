/**
 * The only place providers are ordered in the comparison tables and the
 * directory. The rules are fixed and public (see `ORDERING_RULES_SUMMARY`):
 *
 * - default order is A–Z by provider name;
 * - the other orders use the standard retail price, the retail price plus the
 *   standard delivery fee, the price at a selected dose, or the Trustpilot score;
 * - ties always fall back to A–Z, so the same data gives the same order;
 * - providers with no value for the chosen basis go last, in either direction.
 *
 * Nothing here can read commission, affiliate status, offers or any paid
 * placement: the inputs are name, retail price, delivery fee and rating only.
 * Keep this file dependency-free (plain-Node SEO tests read it).
 */

export type SortDirection = "asc" | "desc";

export type OrderingRule =
  | "alphabetical"
  | "retail-price"
  | "total-price"
  | "rating";

/** Everything the ordering is allowed to look at. */
export type Orderable = {
  name: string;
  /** Standard retail price on the chosen basis (starting price or selected dose); null when not listed. */
  retail: number | null;
  /** Standard delivery fee in pounds (0 = free); null when unknown. */
  deliveryFee: number | null;
  /** Trustpilot score. */
  rating: number;
};

export const ORDERING_RULES_SUMMARY =
  "Providers are listed A–Z by default. You can also sort by standard retail price, retail price plus standard delivery, the price at one dose, or Trustpilot score. Ties are broken A–Z. Order is never influenced by commission, affiliate status or discount codes.";

function compareName(a: string, b: string): number {
  return a.localeCompare(b, "en-GB", { sensitivity: "base" });
}

function compareNullable(a: number | null, b: number | null, dir: SortDirection): number {
  if (a == null && b == null) return 0;
  if (a == null) return 1;
  if (b == null) return -1;
  return (a - b) * (dir === "asc" ? 1 : -1);
}

/** Retail price plus standard delivery, or null when either part is unknown. */
export function totalPrice(o: Orderable): number | null {
  if (o.retail == null || o.deliveryFee == null) return null;
  return Math.round((o.retail + o.deliveryFee) * 100) / 100;
}

export function compareOrderable(
  a: Orderable,
  b: Orderable,
  rule: OrderingRule,
  dir: SortDirection,
): number {
  let primary = 0;
  switch (rule) {
    case "alphabetical":
      primary = compareName(a.name, b.name) * (dir === "asc" ? 1 : -1);
      break;
    case "retail-price":
      primary = compareNullable(a.retail, b.retail, dir);
      break;
    case "total-price":
      primary = compareNullable(totalPrice(a), totalPrice(b), dir);
      break;
    case "rating":
      primary = (a.rating - b.rating) * (dir === "asc" ? 1 : -1);
      break;
  }
  return primary !== 0 ? primary : compareName(a.name, b.name);
}

/** Returns a new array ordered by the rule; the input is not changed. */
export function orderProviders<T>(
  rows: readonly T[],
  pick: (row: T) => Orderable,
  rule: OrderingRule,
  dir: SortDirection,
): T[] {
  return [...rows].sort((a, b) => compareOrderable(pick(a), pick(b), rule, dir));
}
