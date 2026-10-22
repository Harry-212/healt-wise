"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  getMounjaroCompareProviderById,
  type MounjaroUkProviderCompare,
} from "./mounjaro-uk-compare-providers";
import {
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  getWegovyCompareProviderById,
  type WegovyUkProviderCompare,
} from "./wegovy-uk-compare-providers";

/**
 * Live price rows for the page's own provider, read on the server (see
 * app/pharmacies/[slug]/layout.tsx) and handed to the client-side pharmacy
 * content. Outside a provider, or for another provider id, the hooks fall back
 * to the static seed so nothing breaks.
 */
export type LivePrices = {
  providerId: string;
  mounjaro: MounjaroUkProviderCompare | null;
  wegovy: WegovyUkProviderCompare | null;
  mounjaroLastUpdated: string;
  wegovyLastUpdated: string;
};

const LivePricesContext = createContext<LivePrices | null>(null);

export function LivePricesProvider({ value, children }: { value: LivePrices; children: ReactNode }) {
  return <LivePricesContext.Provider value={value}>{children}</LivePricesContext.Provider>;
}

export function useLiveMounjaroProvider(id: string): MounjaroUkProviderCompare | undefined {
  const live = useContext(LivePricesContext);
  if (live && live.providerId === id) return live.mounjaro ?? undefined;
  return getMounjaroCompareProviderById(id);
}

export function useLiveWegovyProvider(id: string): WegovyUkProviderCompare | undefined {
  const live = useContext(LivePricesContext);
  if (live && live.providerId === id) return live.wegovy ?? undefined;
  return getWegovyCompareProviderById(id);
}

/** Both rows for one provider, in the shape provider-price-summary takes. */
export function useLiveProviderRows(id: string): {
  mounjaro?: MounjaroUkProviderCompare;
  wegovy?: WegovyUkProviderCompare;
} {
  return { mounjaro: useLiveMounjaroProvider(id), wegovy: useLiveWegovyProvider(id) };
}

/** Store-wide "prices checked" dates. */
export function useLivePriceCheckLabels(): { mounjaro: string; wegovy: string } {
  const live = useContext(LivePricesContext);
  return {
    mounjaro: live?.mounjaroLastUpdated ?? MOUNJARO_UK_COMPARE_LAST_UPDATED,
    wegovy: live?.wegovyLastUpdated ?? WEGOVY_UK_COMPARE_LAST_UPDATED,
  };
}
