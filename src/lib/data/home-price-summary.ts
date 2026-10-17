import "server-only";
import {
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "./compare-live";
import { getMounjaroLastUpdatedLabel } from "./compare-store";
import {
  buildFirstMonthsCostEstimate,
  buildMounjaroPriceInsights,
  formatGbp,
} from "./mounjaro-price-insights";
import { MOUNJARO_DOSE_KEYS } from "./mounjaro-uk-compare-providers";
import {
  buildWegovyFirstSixMonthsCostEstimate,
  buildWegovyPriceInsights,
} from "./wegovy-price-insights";
import {
  WEGOVY_DOSE_KEYS,
  wegovyPriceAmount,
} from "./wegovy-uk-compare-providers";

export type HomePriceSnapshotRow = {
  dose: string;
  lowest: string;
  typical: string;
  highest: string;
};

export type HomeFirstThreeMonthsRow = {
  month: string;
  mounjaroDose: string;
  mounjaroPrice: string;
  wegovyDose: string;
  wegovyPrice: string;
};

export type HomePriceSummary = {
  lastUpdated: string;
  mounjaroProviderCount: number;
  wegovyProviderCount: number;
  mounjaroStarterLow: string;
  mounjaroStarterLowNum: number;
  mounjaroStarterTypical: string;
  mounjaroStarterHigh: string;
  mounjaroStarterGap: string;
  mounjaroTopLow: string;
  mounjaroTopTypical: string;
  mounjaroTopHigh: string;
  mounjaroTopHighNum: number;
  wegovyStarterLow: string;
  wegovyStarterLowNum: number;
  wegovyStarterTypical: string;
  wegovyStarterHigh: string;
  wegovyTopLow: string;
  wegovyTopTypical: string;
  wegovyTopHigh: string;
  wegovyTopHighNum: number;
  wegovy72Low: string;
  wegovy72Typical: string;
  wegovy72Listed: number;
  snapshotRows: HomePriceSnapshotRow[];
  compareSnapshotRows: HomePriceSnapshotRow[];
  firstThreeMonths: {
    rows: HomeFirstThreeMonthsRow[];
    mounjaroTotal: string;
    wegovyTotal: string;
    mounjaroProvider: string;
    wegovyProvider: string;
  };
  firstSixMonths: {
    wegovyLow: string;
    wegovyTypical: string;
    mounjaroLow: string;
    mounjaroTypical: string;
  };
};

export function getLivePriceSummary(): HomePriceSummary {
  const mjProviders = getMounjaroCompareProviders();
  const wgProviders = getWegovyCompareProviders();
  const lastUpdated = getMounjaroLastUpdatedLabel();

  const mjInsights = buildMounjaroPriceInsights(mjProviders);
  const wgInsights = buildWegovyPriceInsights(wgProviders);

  const mjStarter = mjInsights?.starter ?? {
    dose: "2.5mg",
    low: 119.69,
    median: 152,
    high: 229,
    lowProvider: "Pharmacy + Me",
    listed: mjProviders.length,
  };
  const mjTop = mjInsights?.top ?? {
    dose: "15mg",
    low: 245.69,
    median: 299,
    high: 359.95,
    lowProvider: "Pharmacy + Me",
    listed: mjProviders.length,
  };

  const wgStarter = wgInsights?.starter ?? {
    dose: "0.25mg",
    low: 72.89,
    median: 100,
    high: 205,
    lowProvider: "Pharmacy + Me",
    listed: wgProviders.length,
  };
  const wgTop =
    wgInsights?.doses.find((d) => d.dose === "2.4mg") ??
    wgInsights?.top ?? {
      dose: "2.4mg",
      low: 173.69,
      median: 200,
      high: 290,
      lowProvider: "Pharmacy + Me",
      listed: wgProviders.length,
    };
  const wg72 = wgInsights?.doses.find((d) => d.dose === "7.2mg") ?? {
    dose: "7.2mg",
    low: 175.49,
    median: 259,
    high: 350,
    lowProvider: "Pharmacy + Me",
    listed: 48,
  };

  // Cheapest single verified pharmacy (affiliate or not) for the first 3 months of Mounjaro (2.5mg, 5mg, 7.5mg)
  const mjThreeMonthCandidates = mjProviders
    .filter(
      (p) =>
        p.prices["2.5mg"] > 0 && p.prices["5mg"] > 0 && p.prices["7.5mg"] > 0,
    )
    .map((p) => ({
      name: p.name,
      m1: p.prices["2.5mg"],
      m2: p.prices["5mg"],
      m3: p.prices["7.5mg"],
      total:
        Math.round(
          (p.prices["2.5mg"] + p.prices["5mg"] + p.prices["7.5mg"]) * 100,
        ) / 100,
    }))
    .sort((a, b) => a.total - b.total);

  const mjBest3 = mjThreeMonthCandidates[0] ?? {
    name: "Pharmacy + Me",
    m1: 119.69,
    m2: 134.99,
    m3: 185.39,
    total: 440.07,
  };

  // Cheapest single verified pharmacy (affiliate or not) for the first 3 months of Wegovy (0.25mg, 0.5mg, 1mg)
  const wgThreeMonthCandidates = wgProviders
    .map((p) => {
      const m1 = wegovyPriceAmount(p.prices["0.25mg"]);
      const m2 = wegovyPriceAmount(p.prices["0.5mg"]);
      const m3 = wegovyPriceAmount(p.prices["1mg"]);
      if (!m1 || !m2 || !m3) return null;
      return {
        name: p.name,
        m1,
        m2,
        m3,
        total: Math.round((m1 + m2 + m3) * 100) / 100,
      };
    })
    .filter(
      (
        c,
      ): c is {
        name: string;
        m1: number;
        m2: number;
        m3: number;
        total: number;
      } => c !== null,
    )
    .sort((a, b) => a.total - b.total);

  const wgBest3 = wgThreeMonthCandidates[0] ?? {
    name: "Pharmacy + Me",
    m1: 72.89,
    m2: 72.89,
    m3: 72.89,
    total: 218.67,
  };

  // First 6 months estimates
  const mjPriceRows = mjProviders.map((p) =>
    Object.fromEntries(
      MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
    ) as Record<(typeof MOUNJARO_DOSE_KEYS)[number], number | null>,
  );
  const mjFirstSix = buildFirstMonthsCostEstimate(
    MOUNJARO_DOSE_KEYS,
    6,
    mjPriceRows,
  );
  const wgFirstSix = buildWegovyFirstSixMonthsCostEstimate(wgProviders);

  const snapshotRows: HomePriceSnapshotRow[] = [
    {
      dose: "Mounjaro 2.5 mg (starter)",
      lowest: formatGbp(mjStarter.low),
      typical: formatGbp(mjStarter.median),
      highest: formatGbp(mjStarter.high),
    },
    {
      dose: "Mounjaro 15 mg (top dose)",
      lowest: formatGbp(mjTop.low),
      typical: formatGbp(mjTop.median),
      highest: formatGbp(mjTop.high),
    },
    {
      dose: "Wegovy 0.25 mg (starter)",
      lowest: formatGbp(wgStarter.low),
      typical: formatGbp(wgStarter.median),
      highest: formatGbp(wgStarter.high),
    },
    {
      dose: "Wegovy 2.4 mg (top dose)",
      lowest: formatGbp(wgTop.low),
      typical: formatGbp(wgTop.median),
      highest: formatGbp(wgTop.high),
    },
  ];

  const compareSnapshotRows: HomePriceSnapshotRow[] = [
    {
      dose: "Wegovy 0.25 mg (starter)",
      lowest: formatGbp(wgStarter.low),
      typical: formatGbp(wgStarter.median),
      highest: formatGbp(wgStarter.high),
    },
    {
      dose: "Wegovy 2.4 mg (usual top dose)",
      lowest: formatGbp(wgTop.low),
      typical: formatGbp(wgTop.median),
      highest: formatGbp(wgTop.high),
    },
    {
      dose: "Mounjaro 2.5 mg (starter)",
      lowest: formatGbp(mjStarter.low),
      typical: formatGbp(mjStarter.median),
      highest: formatGbp(mjStarter.high),
    },
    {
      dose: "Mounjaro 15 mg (top dose)",
      lowest: formatGbp(mjTop.low),
      typical: formatGbp(mjTop.median),
      highest: formatGbp(mjTop.high),
    },
  ];

  return {
    lastUpdated,
    mounjaroProviderCount: mjProviders.length,
    wegovyProviderCount: wgProviders.length,
    mounjaroStarterLow: formatGbp(mjStarter.low),
    mounjaroStarterLowNum: mjStarter.low,
    mounjaroStarterTypical: formatGbp(mjStarter.median),
    mounjaroStarterHigh: formatGbp(mjStarter.high),
    mounjaroStarterGap: formatGbp(
      Math.round((mjStarter.high - mjStarter.low) * 100) / 100,
    ),
    mounjaroTopLow: formatGbp(mjTop.low),
    mounjaroTopTypical: formatGbp(mjTop.median),
    mounjaroTopHigh: formatGbp(mjTop.high),
    mounjaroTopHighNum: mjTop.high,
    wegovyStarterLow: formatGbp(wgStarter.low),
    wegovyStarterLowNum: wgStarter.low,
    wegovyStarterTypical: formatGbp(wgStarter.median),
    wegovyStarterHigh: formatGbp(wgStarter.high),
    wegovyTopLow: formatGbp(wgTop.low),
    wegovyTopTypical: formatGbp(wgTop.median),
    wegovyTopHigh: formatGbp(wgTop.high),
    wegovyTopHighNum: wgTop.high,
    wegovy72Low: formatGbp(wg72.low),
    wegovy72Typical: formatGbp(wg72.median),
    wegovy72Listed: wg72.listed,
    snapshotRows,
    compareSnapshotRows,
    firstThreeMonths: {
      rows: [
        {
          month: "Month 1",
          mounjaroDose: "2.5 mg",
          mounjaroPrice: formatGbp(mjBest3.m1),
          wegovyDose: "0.25 mg",
          wegovyPrice: formatGbp(wgBest3.m1),
        },
        {
          month: "Month 2",
          mounjaroDose: "5 mg",
          mounjaroPrice: formatGbp(mjBest3.m2),
          wegovyDose: "0.5 mg",
          wegovyPrice: formatGbp(wgBest3.m2),
        },
        {
          month: "Month 3",
          mounjaroDose: "7.5 mg",
          mounjaroPrice: formatGbp(mjBest3.m3),
          wegovyDose: "1 mg",
          wegovyPrice: formatGbp(wgBest3.m3),
        },
      ],
      mounjaroTotal: formatGbp(mjBest3.total),
      wegovyTotal: formatGbp(wgBest3.total),
      mounjaroProvider: mjBest3.name,
      wegovyProvider: wgBest3.name,
    },
    firstSixMonths: {
      wegovyLow: formatGbp(wgFirstSix.totalLow),
      wegovyTypical: formatGbp(wgFirstSix.totalTypical),
      mounjaroLow: formatGbp(mjFirstSix.totalLow),
      mounjaroTypical: formatGbp(mjFirstSix.totalTypical),
    },
  };
}
