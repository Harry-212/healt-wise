import "server-only";
import {
  getMounjaroLastUpdatedLabel,
  getWegovyLastUpdatedLabel,
  readMounjaroCompareProviders,
  readWegovyCompareProviders,
} from "./compare-store";
import type { MounjaroUkProviderCompare } from "./mounjaro-uk-compare-providers";
import type { WegovyUkProviderCompare } from "./wegovy-uk-compare-providers";

/**
 * Live prices (the JSON edited in /admin-dashboard and by the monthly price
 * update). Server-only: client components get these rows through
 * LivePricesProvider (see live-prices-context.tsx) or as props.
 */

export function getMounjaroCompareProviders(): MounjaroUkProviderCompare[] {
  return readMounjaroCompareProviders();
}

export function getWegovyCompareProviders(): WegovyUkProviderCompare[] {
  return readWegovyCompareProviders();
}

export function getLiveMounjaroProvider(id: string): MounjaroUkProviderCompare | undefined {
  return readMounjaroCompareProviders().find((p) => p.id === id);
}

export function getLiveWegovyProvider(id: string): WegovyUkProviderCompare | undefined {
  return readWegovyCompareProviders().find((p) => p.id === id);
}

export function getLivePriceCheckLabels(): { mounjaro: string; wegovy: string } {
  return { mounjaro: getMounjaroLastUpdatedLabel(), wegovy: getWegovyLastUpdatedLabel() };
}
