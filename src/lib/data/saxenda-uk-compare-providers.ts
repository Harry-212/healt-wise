/** Illustrative UK Saxenda multi-pack prices — confirm live rates on each provider. */

import type { SaxendaDoseMg } from "./saxenda-dose-comparison";
import { SAXENDA_DOSES_ORDER } from "./saxenda-dose-comparison";

export const SAXENDA_UK_COMPARE_LAST_UPDATED = "April 2026";

/** Daily titration steps shown in the UK compare table (same order as clinical guidance). */
export const SAXENDA_COMPARE_DOSE_KEYS: SaxendaDoseMg[] = SAXENDA_DOSES_ORDER;

export type SaxendaPackKey = "1" | "3" | "5";

export type SaxendaPackRow = {
  packPrice: number;
  pricePerMg: number;
  totalCost: number;
  repeatPrice: number;
  deliverySummary: string;
  collectionSummary: string;
  coldChain: boolean;
  gphcRef: string;
};

export type SaxendaUkProviderCompare = {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  promoNote?: string;
  /** Illustrative order price at each daily dose step (GBP, whole pounds). */
  doses: Record<SaxendaDoseMg, number>;
  packs: Record<SaxendaPackKey, SaxendaPackRow>;
  updatedLabel: string;
  ctaHref: string;
};

export const SAXENDA_PACK_KEYS: SaxendaPackKey[] = ["1", "3", "5"];

export const SAXENDA_UK_COMPARE_PROVIDERS: SaxendaUkProviderCompare[] = [
  {
    id: "lloyds-pharmacy-online-doctor",
    name: "Lloyds Pharmacy Online Doctor",
    rating: 4.4,
    reviewCount: 2100,
    doses: {
      "0.6": 141,
      "1.2": 151,
      "1.8": 161,
      "2.4": 171,
      "3.0": 181,
    },
    packs: {
      "1": {
        packPrice: 49,
        pricePerMg: 2.72,
        totalCost: 49,
        repeatPrice: 49,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect available",
        coldChain: true,
        gphcRef: "1036724",
      },
      "3": {
        packPrice: 135,
        pricePerMg: 2.5,
        totalCost: 135,
        repeatPrice: 49,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect available",
        coldChain: true,
        gphcRef: "1036724",
      },
      "5": {
        packPrice: 210,
        pricePerMg: 2.33,
        totalCost: 210,
        repeatPrice: 49,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect available",
        coldChain: true,
        gphcRef: "1036724",
      },
    },
    updatedLabel: "4 April",
    ctaHref: "/how-to-get-started-weight-loss-treatment",
  },
  {
    id: "boots-online-doctor",
    name: "Boots Online Doctor",
    rating: 4.5,
    reviewCount: 5000,
    doses: {
      "0.6": 149,
      "1.2": 159,
      "1.8": 169,
      "2.4": 179,
      "3.0": 189,
    },
    packs: {
      "1": {
        packPrice: 51,
        pricePerMg: 2.83,
        totalCost: 51,
        repeatPrice: 51,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect",
        coldChain: true,
        gphcRef: "Various",
      },
      "3": {
        packPrice: 145,
        pricePerMg: 2.69,
        totalCost: 145,
        repeatPrice: 51,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect",
        coldChain: true,
        gphcRef: "Various",
      },
      "5": {
        packPrice: 235,
        pricePerMg: 2.61,
        totalCost: 235,
        repeatPrice: 51,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Click & Collect",
        coldChain: true,
        gphcRef: "Various",
      },
    },
    updatedLabel: "4 April",
    ctaHref: "/how-to-get-started-weight-loss-treatment",
  },
  {
    id: "superdrug-online-doctor",
    name: "Superdrug Online Doctor",
    rating: 4.6,
    reviewCount: 3200,
    promoNote: "10% off for Members",
    doses: {
      "0.6": 145,
      "1.2": 152,
      "1.8": 165,
      "2.4": 175,
      "3.0": 185,
    },
    packs: {
      "1": {
        packPrice: 47,
        pricePerMg: 2.61,
        totalCost: 47,
        repeatPrice: 47,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Same Day Collection",
        coldChain: true,
        gphcRef: "9010166",
      },
      "3": {
        packPrice: 135,
        pricePerMg: 2.5,
        totalCost: 135,
        repeatPrice: 47,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Same Day Collection",
        coldChain: true,
        gphcRef: "9010166",
      },
      "5": {
        packPrice: 215,
        pricePerMg: 2.39,
        totalCost: 215,
        repeatPrice: 47,
        deliverySummary: "Free · Includes delivery",
        collectionSummary: "Same Day Collection",
        coldChain: true,
        gphcRef: "9010166",
      },
    },
    updatedLabel: "4 April",
    ctaHref: "/how-to-get-started-weight-loss-treatment",
  },
];

export function getSaxendaCompareProviderById(
  id: string,
): SaxendaUkProviderCompare | undefined {
  return SAXENDA_UK_COMPARE_PROVIDERS.find((p) => p.id === id);
}

export function packLabel(key: SaxendaPackKey): string {
  if (key === "1") return "1 pen";
  if (key === "3") return "3 pens";
  return "5 pens";
}

export function headlinePackPrice(
  p: SaxendaUkProviderCompare,
  pack: SaxendaPackKey,
): number {
  return p.packs[pack].packPrice;
}

/** Lowest pack price among providers for the selected pack size. */
export function minPackPriceForSize(
  providers: SaxendaUkProviderCompare[],
  pack: SaxendaPackKey,
): number {
  return Math.min(...providers.map((p) => p.packs[pack].packPrice));
}

export function saxendaStartingDosePrice(p: SaxendaUkProviderCompare): number {
  return p.doses["0.6"];
}

export function saxendaMaintenanceDosePrice(p: SaxendaUkProviderCompare): number {
  return p.doses["3.0"];
}

export function minDosePriceForStep(
  providers: SaxendaUkProviderCompare[],
  dose: SaxendaDoseMg,
): number {
  return Math.min(...providers.map((p) => p.doses[dose]));
}

/** Min/max pack price across providers for each pack size (for charts). */
export function saxendaPackPriceRangeByPack(
  providers: SaxendaUkProviderCompare[],
): { pack: string; min: number; max: number }[] {
  return SAXENDA_PACK_KEYS.map((k) => {
    const prices = providers.map((p) => p.packs[k].packPrice);
    return {
      pack: packLabel(k),
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  });
}

export function saxendaAveragePackPriceByPack(
  providers: SaxendaUkProviderCompare[],
): { pack: string; avg: number }[] {
  if (providers.length === 0) return [];
  return SAXENDA_PACK_KEYS.map((k) => {
    const sum = providers.reduce((a, p) => a + p.packs[k].packPrice, 0);
    return { pack: packLabel(k), avg: sum / providers.length };
  });
}
