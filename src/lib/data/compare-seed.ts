/**
 * One-time seed builders for compare JSON files.
 */
import type { MounjaroCompareStore, WegovyCompareStore } from "./compare-types";
import {
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS_BASE,
} from "./mounjaro-uk-compare-providers";
import {
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  buildWegovyProvidersFromSeed,
} from "./wegovy-uk-compare-providers";

export function buildMounjaroSeedStore(): MounjaroCompareStore {
  return {
    lastUpdated: MOUNJARO_UK_COMPARE_LAST_UPDATED,
    providers: structuredClone(MOUNJARO_UK_COMPARE_PROVIDERS_BASE),
  };
}

export function buildWegovySeedStore(): WegovyCompareStore {
  return {
    lastUpdated: WEGOVY_UK_COMPARE_LAST_UPDATED,
    providers: structuredClone(buildWegovyProvidersFromSeed()),
  };
}
