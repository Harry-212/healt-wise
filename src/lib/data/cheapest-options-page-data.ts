import {
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
  wegovyPriceAmount,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  buildFirstMonthsCostEstimate,
  buildMounjaroPriceInsights,
  cheapestProvidersAtDose,
  formatDose,
  formatGbp,
  type CheapestAtDose,
  type PriceRow,
} from "@/lib/data/mounjaro-price-insights";
import {
  buildWegovyFirstSixMonthsCostEstimate,
  buildWegovyPriceInsights,
} from "@/lib/data/wegovy-price-insights";
import {
  buildCheapestOptionsFaqs,
  type CheapestOptionsFaqParams,
} from "@/lib/seo/cheapest-options-page-seo";

type MDose = (typeof MOUNJARO_DOSE_KEYS)[number];
type WDose = (typeof WEGOVY_DOSE_KEYS)[number];

export type CheapestWinner = {
  id: string;
  name: string;
  linkProfile: boolean;
  doses: string[];
};

function groupWinners(
  rows: { dose: string; winner: CheapestAtDose | undefined }[],
  linkable: Map<string, boolean>,
): CheapestWinner[] {
  const byName = new Map<string, CheapestWinner>();
  for (const r of rows) {
    if (!r.winner) continue;
    const id = r.winner.id ?? r.winner.name;
    const entry = byName.get(r.winner.name) ?? {
      id,
      name: r.winner.name,
      linkProfile: linkable.get(id) ?? false,
      doses: [],
    };
    entry.doses.push(r.dose);
    byName.set(r.winner.name, entry);
  }
  return [...byName.values()].sort((a, b) => b.doses.length - a.doses.length);
}

/**
 * Every figure on /prices/cheapest-options-uk comes from here, so the page body,
 * FAQ and schema can never disagree with the price tables.
 */
export function getCheapestOptionsPageData() {
  const wProviders = WEGOVY_UK_COMPARE_PROVIDERS;
  const mProviders = MOUNJARO_UK_COMPARE_PROVIDERS;

  const wInsights = buildWegovyPriceInsights(wProviders);
  const mInsights = buildMounjaroPriceInsights(mProviders);

  const wEst = buildWegovyFirstSixMonthsCostEstimate(wProviders);
  const mRows: Record<MDose, number | null>[] = mProviders.map(
    (p) =>
      Object.fromEntries(
        MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
      ) as Record<MDose, number | null>,
  );
  const mEst = buildFirstMonthsCostEstimate(MOUNJARO_DOSE_KEYS, 6, mRows);

  const wStat = (d: WDose) => wInsights?.doses.find((s) => s.dose === d);
  const mStat = (d: MDose) => mInsights?.doses.find((s) => s.dose === d);

  const wegovyCheaperEveryMonth =
    wEst.rows.length === 6 &&
    mEst.rows.length === 6 &&
    wEst.rows.every((r, i) => r.low > 0 && r.low < mEst.rows[i].low);

  const wPriceRows: PriceRow<WDose>[] = wProviders.map((p) => ({
    id: p.id,
    name: p.name,
    prices: Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<WDose, number | null>,
  }));
  const mPriceRows: PriceRow<MDose>[] = mProviders.map((p, i) => ({
    id: p.id,
    name: p.name,
    prices: mRows[i],
  }));

  const linkable = new Map<string, boolean>(
    [...wProviders, ...mProviders].map((p) => [p.id, p.linkProfilePage !== false]),
  );
  const wWinners = groupWinners(
    WEGOVY_DOSE_KEYS.map((d) => ({
      dose: formatDose(d),
      winner: cheapestProvidersAtDose(wPriceRows, d, 1)[0],
    })),
    linkable,
  );
  const mWinners = groupWinners(
    MOUNJARO_DOSE_KEYS.map((d) => ({
      dose: formatDose(d),
      winner: cheapestProvidersAtDose(mPriceRows, d, 1)[0],
    })),
    linkable,
  );

  const wStarter = wStat("0.25mg");
  const wLong = wStat("2.4mg");
  const mStarter = mStat("2.5mg");
  const mTop = mStat("15mg");

  const faqParams: CheapestOptionsFaqParams = {
    wegovyStarter: formatGbp(wStarter?.low ?? 0),
    mounjaroStarter: formatGbp(mStarter?.low ?? 0),
    wegovySixMonths: formatGbp(Math.round(wEst.totalLow)),
    mounjaroSixMonths: formatGbp(Math.round(mEst.totalLow)),
    wegovyCheaperEveryMonth,
  };

  return {
    wegovyCount: wProviders.length,
    mounjaroCount: mProviders.length,
    wegovyUpdated: WEGOVY_UK_COMPARE_LAST_UPDATED,
    mounjaroUpdated: MOUNJARO_UK_COMPARE_LAST_UPDATED,
    wStarter,
    wLong,
    mStarter,
    mTop,
    wEst,
    mEst,
    wegovyCheaperEveryMonth,
    wWinners,
    mWinners,
    faqParams,
    faqs: buildCheapestOptionsFaqs(faqParams),
  };
}

export type CheapestOptionsPageData = ReturnType<
  typeof getCheapestOptionsPageData
>;
