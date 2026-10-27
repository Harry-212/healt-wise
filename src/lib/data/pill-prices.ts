export type PillPriceSource = "pharmacy" | "comparison";

export type PillPriceRow = {
  provider: string;
  /** One monthly price per dose, in dose order. `null` means not listed. */
  prices: (number | null)[];
  source: PillPriceSource;
};

export const PILL_PRICES_LAST_CHECKED_LABEL = "24 October 2026";
export const PILL_PRICES_LAST_CHECKED_ISO = "2026-10-24";

export const FOUNDAYO_DOSES = ["0.8mg", "2.5mg", "5.5mg", "9mg", "14.5mg", "17.2mg"];
export const WEGOVY_PILL_DOSES = ["1.5mg", "4mg", "9mg", "25mg"];

export const PILL_SOURCE_LABEL: Record<PillPriceSource, string> = {
  pharmacy: "Pharmacy website",
  comparison: "Comparison site",
};

/** Whole pounds without .00, everything else with two decimals. */
export function formatPillGbp(value: number): string {
  return Number.isInteger(value) ? `£${value}` : `£${value.toFixed(2)}`;
}

function byPriceThenName(
  a: { price: number; provider: string },
  b: { price: number; provider: string },
) {
  return a.price - b.price || a.provider.localeCompare(b.provider);
}

export type DosePrice = { provider: string; price: number; source: PillPriceSource };

/** Every listed price at one dose, lowest first, ties by provider name. */
export function pricesAtDose(rows: PillPriceRow[], doseIndex: number): DosePrice[] {
  return rows
    .flatMap((r) => {
      const price = r.prices[doseIndex];
      return price == null ? [] : [{ provider: r.provider, price, source: r.source }];
    })
    .sort(byPriceThenName);
}

export function doseRange(rows: PillPriceRow[], doseIndex: number) {
  const list = pricesAtDose(rows, doseIndex);
  return {
    lowest: list[0].price,
    highest: list[list.length - 1].price,
    providers: list.length,
  };
}

/** Lowest listed price overall and on a pharmacy's own website. Ties return every provider. */
export function cheapestAtDose(rows: PillPriceRow[], doseIndex: number) {
  const list = pricesAtDose(rows, doseIndex);
  const lowest = list[0].price;
  const pharmacyList = list.filter((p) => p.source === "pharmacy");
  const pharmacyLowest = pharmacyList[0]?.price;
  return {
    overall: { price: lowest, providers: list.filter((p) => p.price === lowest).map((p) => p.provider) },
    pharmacy:
      pharmacyLowest == null
        ? null
        : {
            price: pharmacyLowest,
            providers: pharmacyList.filter((p) => p.price === pharmacyLowest).map((p) => p.provider),
          },
  };
}

export type StepUpRow = { provider: string; total: number; source: PillPriceSource };

/** One month at every dose. Providers with a missing dose are left out. Lowest first, ties by name. */
export function stepUpTotals(rows: PillPriceRow[]): StepUpRow[] {
  return rows
    .filter((r) => r.prices.every((p) => p != null))
    .map((r) => ({
      provider: r.provider,
      total: Math.round(r.prices.reduce<number>((sum, p) => sum + (p ?? 0), 0) * 100) / 100,
      source: r.source,
    }))
    .sort((a, b) => a.total - b.total || a.provider.localeCompare(b.provider));
}
