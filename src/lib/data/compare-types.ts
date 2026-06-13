import type { MounjaroUkCompareBadge, MounjaroUkProviderCompare } from "./mounjaro-uk-compare-providers";
import type {
  WegovyPriceCell,
  WegovyUkCompareBadge,
  WegovyUkProviderCompare,
} from "./wegovy-uk-compare-providers";

export type CompareMedication = "mounjaro" | "wegovy";

export type MounjaroCompareStore = {
  lastUpdated: string;
  providers: MounjaroUkProviderCompare[];
};

export type WegovyCompareStore = {
  lastUpdated: string;
  providers: WegovyUkProviderCompare[];
};

/** Editable row shape used by admin API (serialisable). */
export type MounjaroProviderInput = {
  id: string;
  name: string;
  deliveryNote: string;
  notes?: string;
  rating: number;
  headlineFrom: number;
  gphcRegNo: string;
  trustpilotUrl?: string;
  linkProfilePage?: boolean;
  prices: MounjaroUkProviderCompare["prices"];
  updatedLabel: string;
  consultationIncluded: boolean;
  badges?: MounjaroUkCompareBadge[];
  ctaHref: string;
};

export type WegovyProviderInput = {
  id: string;
  name: string;
  deliveryNote: string;
  notes?: string;
  rating: number;
  headlineFrom: number;
  gphcRegNo: string;
  trustpilotUrl?: string;
  linkProfilePage?: boolean;
  prices: Record<
    keyof WegovyUkProviderCompare["prices"],
    WegovyPriceCell
  >;
  updatedLabel: string;
  consultationIncluded: boolean;
  badges?: WegovyUkCompareBadge[];
  ctaHref: string;
};

export type CompareStorePayload =
  | { medication: "mounjaro"; store: MounjaroCompareStore }
  | { medication: "wegovy"; store: WegovyCompareStore };
