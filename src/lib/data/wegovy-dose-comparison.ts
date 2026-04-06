/** Illustrative UK provider snapshots for Wegovy by dose — verify on provider sites before paying. */
export const WEGOVY_PRICE_LAST_UPDATED = "6 April 2026";

export type WegovyDoseMg =
  | "0.25"
  | "0.5"
  | "1.0"
  | "1.7"
  | "2.4";

export interface WegovyProviderRow {
  id: string;
  name: string;
  shortLabel: string;
  rating: number;
  reviewCount: number;
  promo?: string;
  /** Price shown for this pen/order at this dose (£). */
  priceGbp: number;
  /** Optional repeat / subscription line if different from headline (as per provider marketing). */
  repeatPriceGbp?: number;
  deliveryNote: string;
  coldChain: boolean;
  gphcLabel: string;
  gphcNumber?: string;
  trustFeatures: string[];
  /** External destination for "See offer" — replace with affiliate URLs when available. */
  offerUrl: string;
  isAffiliate?: boolean;
}

export const WEGOVY_DOSES_ORDER: WegovyDoseMg[] = [
  "0.25",
  "0.5",
  "1.0",
  "1.7",
  "2.4",
];

export const WEGOVY_DOSE_LABEL: Record<WegovyDoseMg, string> = {
  "0.25": "0.25mg",
  "0.5": "0.5mg",
  "1.0": "1.0mg",
  "1.7": "1.7mg",
  "2.4": "2.4mg",
};

function mg(d: WegovyDoseMg): number {
  return Number.parseFloat(d);
}

export function pricePerMg(priceGbp: number, dose: WegovyDoseMg): number {
  return priceGbp / mg(dose);
}

/** Rows keyed by dose — from independent research snapshot; confirm live pricing. */
export const WEGOVY_DOSE_COMPARISON: Record<WegovyDoseMg, WegovyProviderRow[]> = {
  "0.25": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 199,
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
      promo: "10% off for Health & Beautycard",
      priceGbp: 195,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
  ],
  "0.5": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 199,
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
      promo: "10% off for Health & Beautycard",
      priceGbp: 195,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
  ],
  "1.0": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 199,
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
      promo: "10% off for Health & Beautycard",
      priceGbp: 195,
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
      promo: "£10 off first order",
      priceGbp: 169,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "1.7": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 269,
      repeatPriceGbp: 199,
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
      promo: "10% off for Health & Beautycard",
      priceGbp: 265,
      repeatPriceGbp: 195,
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
      promo: "£10 off first order",
      priceGbp: 229,
      repeatPriceGbp: 169,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "2.4": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 269,
      repeatPriceGbp: 199,
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
      promo: "10% off for Health & Beautycard",
      priceGbp: 265,
      repeatPriceGbp: 195,
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
      promo: "£10 off first order",
      priceGbp: 229,
      repeatPriceGbp: 169,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
};
