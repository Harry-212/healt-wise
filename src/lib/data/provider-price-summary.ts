import {
  MOUNJARO_DOSE_KEYS,
  getMounjaroCompareProviderById,
} from "./mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  getWegovyCompareProviderById,
  wegovyPriceAmount,
} from "./wegovy-uk-compare-providers";
import { formatDose, formatGbp } from "./mounjaro-price-insights";

type Priced = { dose: string; amount: number };

/** Lowest and highest strength that carry a checked numeric price. */
function ends(rows: Priced[]): [Priced, Priced] | null {
  if (rows.length === 0) return null;
  return [rows[0], rows[rows.length - 1]];
}

function describe(medicine: string, pair: [Priced, Priced]): string {
  const [first, last] = pair;
  const one = `${formatGbp(first.amount)} for a ${formatDose(first.dose)} pen`;
  if (first.dose === last.dose) return `${medicine} at ${one}`;
  return `${medicine} at ${one} and ${formatGbp(last.amount)} for a ${formatDose(last.dose)} pen`;
}

/**
 * One sentence quoting a provider's checked table prices — same medicine,
 * strength and pack (one pen) as the comparison tables, with the check date.
 * Returns null when the provider has no table prices.
 */
export function providerTablePriceSentence(
  providerId: string,
  providerName: string,
): string | null {
  const mj = getMounjaroCompareProviderById(providerId);
  const wg = getWegovyCompareProviderById(providerId);

  const parts: string[] = [];
  const dates = new Set<string>();

  if (mj) {
    const pair = ends(
      MOUNJARO_DOSE_KEYS.filter((k) => mj.prices[k] > 0).map((k) => ({
        dose: k,
        amount: mj.prices[k],
      })),
    );
    if (pair) {
      parts.push(describe("Mounjaro", pair));
      dates.add(mj.updatedLabel);
    }
  }
  if (wg) {
    const pair = ends(
      WEGOVY_DOSE_KEYS.flatMap((k) => {
        const amount = wegovyPriceAmount(wg.prices[k]);
        return amount != null && amount > 0 ? [{ dose: k, amount }] : [];
      }),
    );
    if (pair) {
      parts.push(describe("Wegovy", pair));
      dates.add(wg.updatedLabel);
    }
  }

  if (parts.length === 0) return null;
  const checked = [...dates].join(" and ");
  return `In our comparison tables (prices checked ${checked}), ${providerName} lists ${parts.join(", and ")}. Prices for the other strengths are in the tables.`;
}
