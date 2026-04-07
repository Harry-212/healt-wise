/** Illustrative UK provider snapshots for Mounjaro by dose — verify on provider sites before paying. */
export const MOUNJARO_PRICE_LAST_UPDATED = "7 April 2026";

export type MounjaroDoseMg =
  | "2.5"
  | "5"
  | "7.5"
  | "10"
  | "12.5"
  | "15";

export interface MounjaroProviderRow {
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

export const MOUNJARO_DOSES_ORDER: MounjaroDoseMg[] = [
  "2.5",
  "5",
  "7.5",
  "10",
  "12.5",
  "15",
];

export const MOUNJARO_DOSE_LABEL: Record<MounjaroDoseMg, string> = {
  "2.5": "2.5mg",
  "5": "5mg",
  "7.5": "7.5mg",
  "10": "10mg",
  "12.5": "12.5mg",
  "15": "15mg",
};

function mg(d: MounjaroDoseMg): number {
  return Number.parseFloat(d);
}

export function mounjaroPricePerMg(priceGbp: number, dose: MounjaroDoseMg): number {
  return priceGbp / mg(dose);
}

export const MOUNJARO_DOSE_COMPARISON: Record<MounjaroDoseMg, MounjaroProviderRow[]> = {
  "2.5": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 209,
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
      priceGbp: 199,
      deliveryNote: "Free — Click & Collect or delivery",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "9010166",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://onlinedoctor.superdrug.com/",
    },
  ],
  "5": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 229,
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
      promo: "£10 off first order",
      priceGbp: 189,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "7.5": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 249,
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
      priceGbp: 239,
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
      priceGbp: 209,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "10": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 279,
      repeatPriceGbp: 249,
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
      priceGbp: 269,
      repeatPriceGbp: 239,
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
      priceGbp: 239,
      repeatPriceGbp: 209,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "12.5": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 299,
      repeatPriceGbp: 269,
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
      priceGbp: 259,
      repeatPriceGbp: 229,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
  "15": [
    {
      id: "boots",
      name: "Boots Online Doctor",
      shortLabel: "B",
      rating: 4.5,
      reviewCount: 5000,
      priceGbp: 319,
      repeatPriceGbp: 289,
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
      priceGbp: 309,
      repeatPriceGbp: 279,
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
      priceGbp: 269,
      repeatPriceGbp: 239,
      deliveryNote: "Free — Royal Mail Tracked 24",
      coldChain: true,
      gphcLabel: "GPhC",
      gphcNumber: "1036724",
      trustFeatures: ["Verified provider"],
      offerUrl: "https://www.simpleonlinepharmacy.co.uk/",
    },
  ],
};
