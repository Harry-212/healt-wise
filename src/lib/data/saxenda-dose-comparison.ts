/** Illustrative UK provider snapshots for Saxenda by dose — verify on provider sites before paying. */
export const SAXENDA_PRICE_LAST_UPDATED = "7 April 2026";

export type SaxendaDoseMg =
  | "0.6"
  | "1.2"
  | "1.8"
  | "2.4"
  | "3.0";

export interface SaxendaProviderRow {
  id: string;
  name: string;
  shortLabel: string;
  rating: number;
  reviewCount: number;
  promo?: string;
  priceGbp: number;
  repeatPriceGbp?: number;
  deliveryNote: string;
  coldChain: boolean;
  gphcLabel: string;
  gphcNumber?: string;
  trustFeatures: string[];
  offerUrl: string;
  isAffiliate?: boolean;
}

export const SAXENDA_DOSES_ORDER: SaxendaDoseMg[] = [
  "0.6",
  "1.2",
  "1.8",
  "2.4",
  "3.0",
];

export const SAXENDA_DOSE_LABEL: Record<SaxendaDoseMg, string> = {
  "0.6": "0.6mg daily",
  "1.2": "1.2mg daily",
  "1.8": "1.8mg daily",
  "2.4": "2.4mg daily",
  "3.0": "3.0mg daily",
};

function mg(d: SaxendaDoseMg): number {
  return Number.parseFloat(d);
}

export function saxendaPricePerMg(priceGbp: number, dose: SaxendaDoseMg): number {
  return priceGbp / mg(dose);
}

export const SAXENDA_DOSE_COMPARISON: Record<SaxendaDoseMg, SaxendaProviderRow[]> = {
  "0.6": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 149,
      deliveryNote: "Free — Click & Collect available",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "Various",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.boots.com/",
    },
    {
      id: "superdrug",
      name: "Superdrug Online Doctor",
      shortLabel: "SD",
      rating: 4.6,
      reviewCount: 3200,
      priceGbp: 145,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
  ],
  "1.2": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 159,
      deliveryNote: "Free — Click & Collect available",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "Various",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.boots.com/",
    },
    {
      id: "simple",
      name: "Simple Online Pharmacy",
      shortLabel: "SO",
      rating: 4.8,
      reviewCount: 1250,
      priceGbp: 139,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "1.8": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 169,
      deliveryNote: "Free — Click & Collect available",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "Various",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.boots.com/",
    },
    {
      id: "superdrug",
      name: "Superdrug Online Doctor",
      shortLabel: "SD",
      rating: 4.6,
      reviewCount: 3200,
      priceGbp: 165,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
  ],
  "2.4": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 179,
      repeatPriceGbp: 159,
      deliveryNote: "Free — Click & Collect available",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "Various",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.boots.com/",
    },
    {
      id: "simple",
      name: "Simple Online Pharmacy",
      shortLabel: "SO",
      rating: 4.8,
      reviewCount: 1250,
      priceGbp: 155,
      repeatPriceGbp: 139,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "3.0": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 189,
      repeatPriceGbp: 169,
      deliveryNote: "Free — Click & Collect available",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "Various",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.boots.com/",
    },
    {
      id: "superdrug",
      name: "Superdrug Online Doctor",
      shortLabel: "SD",
      rating: 4.6,
      reviewCount: 3200,
      priceGbp: 185,
      repeatPriceGbp: 165,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
    {
      id: "simple",
      name: "Simple Online Pharmacy",
      shortLabel: "SO",
      rating: 4.8,
      reviewCount: 1250,
      priceGbp: 169,
      repeatPriceGbp: 155,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
};
