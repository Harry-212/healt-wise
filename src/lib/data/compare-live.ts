import "server-only";
import {
  readMounjaroCompareProviders,
  readWegovyCompareProviders,
} from "./compare-store";
import type { MounjaroUkProviderCompare } from "./mounjaro-uk-compare-providers";
import type { WegovyUkProviderCompare } from "./wegovy-uk-compare-providers";

export function getMounjaroCompareProviders(): MounjaroUkProviderCompare[] {
  return readMounjaroCompareProviders();
}

export function getWegovyCompareProviders(): WegovyUkProviderCompare[] {
  return readWegovyCompareProviders();
}
