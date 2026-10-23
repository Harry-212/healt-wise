import {
  MOUNJARO_DOSE_KEYS,
  getMounjaroCompareProviderById,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  getWegovyCompareProviderById,
  wegovyPriceAmount,
  type WegovyUkProviderCompare,
} from "./wegovy-uk-compare-providers";
import { formatDose, formatGbp } from "./mounjaro-price-insights";

/**
 * The provider's live rows (from compare-live on the server, or the
 * live-prices-context hooks on the client). Omitted → the static seed.
 */
export type ProviderRows = {
  mounjaro?: MounjaroUkProviderCompare;
  wegovy?: WegovyUkProviderCompare;
};

function rowsFor(providerId: string, rows?: ProviderRows) {
  if (rows) return { mj: rows.mounjaro, wg: rows.wegovy };
  return { mj: getMounjaroCompareProviderById(providerId), wg: getWegovyCompareProviderById(providerId) };
}

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
  rows?: ProviderRows,
): string | null {
  const { mj, wg } = rowsFor(providerId, rows);

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

/**
 * "from £189 (2.5 mg) to £329 (15 mg)" — lowest and highest strength with a
 * checked price, for intro sentences. Null when the row has no prices.
 */
export function priceRangePhrase(
  row: MounjaroUkProviderCompare | WegovyUkProviderCompare | undefined,
): string | null {
  if (!row) return null;
  const priced = Object.entries(row.prices).flatMap(([dose, cell]) => {
    const amount = typeof cell === "number" ? cell : wegovyPriceAmount(cell);
    return amount != null && amount > 0 ? [{ dose, amount }] : [];
  });
  const pair = ends(priced);
  if (!pair) return null;
  const [first, last] = pair;
  return `from ${formatGbp(first.amount)} (${formatDose(first.dose)}) to ${formatGbp(last.amount)} (${formatDose(last.dose)})`;
}

const MONTH_NAMES: Record<string, string> = {
  Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June",
  Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: "November", Dec: "December",
};

/** "20 Sep 2026" → "20 September 2026" (prose uses the long month). */
export function longCheckDate(label: string | undefined): string | null {
  if (!label) return null;
  return label.replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/, (m) => MONTH_NAMES[m]);
}

export type ProviderTableRow = { strength: string; price: string };
export type ProviderTableFacts = {
  mounjaro: { rows: ProviderTableRow[]; checked: string } | null;
  wegovy: { rows: ProviderTableRow[]; checked: string } | null;
  gphcRegNo: string | null;
  rating: number | null;
};

/** Every checked table price for one provider (same rows as the comparison tables). */
export function providerTableFacts(providerId: string, rows?: ProviderRows): ProviderTableFacts {
  const { mj, wg } = rowsFor(providerId, rows);

  const mjRows = mj
    ? MOUNJARO_DOSE_KEYS.filter((k) => mj.prices[k] > 0).map((k) => ({
        strength: formatDose(k),
        price: formatGbp(mj.prices[k]),
      }))
    : [];
  const wgRows = wg
    ? WEGOVY_DOSE_KEYS.map((k) => {
        const cell = wg.prices[k];
        const amount = wegovyPriceAmount(cell);
        return {
          strength: formatDose(k),
          price: amount != null && amount > 0 ? formatGbp(amount) : String(cell),
        };
      })
    : [];

  return {
    mounjaro: mj && mjRows.length ? { rows: mjRows, checked: mj.updatedLabel } : null,
    wegovy: wg && wgRows.length ? { rows: wgRows, checked: wg.updatedLabel } : null,
    gphcRegNo: mj?.gphcRegNo ?? wg?.gphcRegNo ?? null,
    rating: mj?.rating ?? wg?.rating ?? null,
  };
}
