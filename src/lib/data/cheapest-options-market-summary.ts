import {
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
} from "@/lib/data/saxenda-uk-compare-providers";
import {
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
} from "@/lib/data/wegovy-uk-compare-providers";

function median(values: number[]): number {
  const s = [...values].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid]! : Math.round((s[mid - 1]! + s[mid]!) / 2);
}

function argMinBy<T>(items: T[], score: (x: T) => number): T | undefined {
  if (items.length === 0) return undefined;
  let best = items[0]!;
  let bestScore = score(best);
  for (let i = 1; i < items.length; i++) {
    const it = items[i]!;
    const sc = score(it);
    if (sc < bestScore) {
      best = it;
      bestScore = sc;
    }
  }
  return best;
}

export type CheapestOptionsMarketSummary = {
  snapshotNote: string;
  providerCounts: {
    wegovy: number;
    mounjaro: number;
    saxenda: number;
  };
  wegovy: {
    min025: number;
    max024: number;
    medianStarterPen: number;
    providerAtLowest025: string;
  };
  mounjaro: {
    min25: number;
    max15: number;
    median25: number;
    providerAtLowest25: string;
  };
  saxenda: {
    minPack1: number;
    maxPack1: number;
    medianPack1: number;
    providerAtLowestPack1: string;
  };
  /** For bar chart — same units are not clinically interchangeable. */
  entryPriceChart: { label: string; amount: number; detail: string }[];
};

export function getCheapestOptionsMarketSummary(): CheapestOptionsMarketSummary {
  const wegovy = WEGOVY_UK_COMPARE_PROVIDERS;
  const mounjaro = MOUNJARO_UK_COMPARE_PROVIDERS;
  const saxenda = SAXENDA_UK_COMPARE_PROVIDERS;

  const wegovy025 = wegovy.map((p) => p.prices["0.25mg"]);
  const wegovy024 = wegovy.map((p) => p.prices["2.4mg"]);
  const mounj25 = mounjaro.map((p) => p.prices["2.5mg"]);
  const mounj15 = mounjaro.map((p) => p.prices["15mg"]);
  const sax1 = saxenda.map((p) => p.packs["1"].packPrice);

  const min025 = Math.min(...wegovy025);
  const max024 = Math.max(...wegovy024);
  const min25 = Math.min(...mounj25);
  const max15 = Math.max(...mounj15);
  const minPack1 = Math.min(...sax1);
  const maxPack1 = Math.max(...sax1);

  const pW = argMinBy(wegovy, (p) => p.prices["0.25mg"]);
  const pM = argMinBy(mounjaro, (p) => p.prices["2.5mg"]);
  const pS = argMinBy(saxenda, (p) => p.packs["1"].packPrice);

  const snapshotNote = [
    `Wegovy table: ${WEGOVY_UK_COMPARE_LAST_UPDATED}.`,
    `Mounjaro table: ${MOUNJARO_UK_COMPARE_LAST_UPDATED}.`,
    `Saxenda table: ${SAXENDA_UK_COMPARE_LAST_UPDATED}.`,
  ].join(" ");

  return {
    snapshotNote,
    providerCounts: {
      wegovy: wegovy.length,
      mounjaro: mounjaro.length,
      saxenda: saxenda.length,
    },
    wegovy: {
      min025: min025,
      max024: max024,
      medianStarterPen: median(wegovy025),
      providerAtLowest025: pW?.name ?? "—",
    },
    mounjaro: {
      min25: min25,
      max15: max15,
      median25: median(mounj25),
      providerAtLowest25: pM?.name ?? "—",
    },
    saxenda: {
      minPack1: minPack1,
      maxPack1: maxPack1,
      medianPack1: median(sax1),
      providerAtLowestPack1: pS?.name ?? "—",
    },
    entryPriceChart: [
      {
        label: "Wegovy",
        amount: min025,
        detail: "Lowest listed 0.25 mg pen in snapshot",
      },
      {
        label: "Mounjaro",
        amount: min25,
        detail: "Lowest listed 2.5 mg pen in snapshot",
      },
      {
        label: "Saxenda",
        amount: minPack1,
        detail: "Lowest listed 1-pen pack in snapshot",
      },
    ],
  };
}
