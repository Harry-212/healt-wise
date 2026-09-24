import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";
import {
  wegovyPriceAmount,
  type WegovyUkProviderCompare,
} from "./wegovy-uk-compare-providers";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "./saxenda-uk-compare-providers";
import type { CompareMedicationTab } from "@/lib/routes/compare-page-layout";

export type DoseSummary = {
  dose: string;
  low: number;
  high: number;
  median: number;
  /** Providers with a numeric price at this strength. */
  priced: number;
};

export type PriceGlanceRow = {
  medication: CompareMedicationTab;
  label: string;
  schedule: string;
  providerCount: number;
  checked: string;
  starter: DoseSummary | null;
  higher: DoseSummary | null;
};

function median(values: number[]): number {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function summarise(dose: string, values: (number | null)[]): DoseSummary | null {
  const nums = values.filter((v): v is number => v != null && v > 0);
  if (nums.length === 0) return null;
  return {
    dose,
    low: Math.min(...nums),
    high: Math.max(...nums),
    median: Math.round(median(nums)),
    priced: nums.length,
  };
}

/**
 * One row per medicine for the versus-page price summary, computed from the
 * same live data as the tabs so the figures always match the tables.
 * Saxenda has no per-strength figures here while its prices are re-checked.
 */
export function buildPriceGlance(
  medications: CompareMedicationTab[],
  data: {
    mounjaro: MounjaroUkProviderCompare[];
    mounjaroChecked: string;
    wegovy: WegovyUkProviderCompare[];
    wegovyChecked: string;
    saxendaChecked: string;
  },
): PriceGlanceRow[] {
  return medications.map((med) => {
    if (med === "mounjaro") {
      const first = MOUNJARO_DOSE_KEYS[0];
      const last = MOUNJARO_DOSE_KEYS[MOUNJARO_DOSE_KEYS.length - 1];
      return {
        medication: med,
        label: "Mounjaro",
        schedule: "Once weekly",
        providerCount: data.mounjaro.length,
        checked: data.mounjaroChecked,
        starter: summarise(first, data.mounjaro.map((p) => p.prices[first])),
        higher: summarise(last, data.mounjaro.map((p) => p.prices[last])),
      };
    }
    if (med === "wegovy") {
      return {
        medication: med,
        label: "Wegovy",
        schedule: "Once weekly",
        providerCount: data.wegovy.length,
        checked: data.wegovyChecked,
        starter: summarise(
          "0.25mg",
          data.wegovy.map((p) => wegovyPriceAmount(p.prices["0.25mg"])),
        ),
        higher: summarise(
          "2.4mg",
          data.wegovy.map((p) => wegovyPriceAmount(p.prices["2.4mg"])),
        ),
      };
    }
    return {
      medication: med,
      label: "Saxenda",
      schedule: "Once daily",
      providerCount: SAXENDA_UK_COMPARE_PROVIDERS.length,
      checked: data.saxendaChecked,
      starter: null,
      higher: null,
    };
  });
}
