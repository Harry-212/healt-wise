import type { PharmacyProvider } from "@/lib/types/provider";

/**
 * Monthly cost for display/sort. When `monthlyCost` is omitted, we use `totalPrice`
 * as an illustrative 4-week equivalent (homepage snapshot — replace with titration math when live).
 */
export function getMonthlyCost(provider: PharmacyProvider): number {
  if (provider.monthlyCost != null) return provider.monthlyCost;
  return provider.totalPrice;
}

export function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function consultationLabel(
  cost: PharmacyProvider["consultationCost"],
): string {
  return cost === "Included" ? "Yes" : typeof cost === "number" ? formatGBP(cost) : "—";
}
