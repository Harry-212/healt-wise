import type { InternalTopic } from "@/lib/internal-linking";

export const PRICE_SLUGS: Record<
  string,
  { keyword: string; internal: InternalTopic }
> = {
  "wegovy-price-uk": {
    keyword: "Wegovy price UK",
    internal: "wegovyPriceUk",
  },
  "mounjaro-price-uk": {
    keyword: "Mounjaro price UK",
    internal: "mounjaroPriceUk",
  },
  "cheapest-options-uk": {
    keyword: "Cheapest GLP-1 options UK",
    internal: "cheapestOptions",
  },
  "saxenda-price-uk": {
    keyword: "Saxenda price UK",
    internal: "saxendaPriceUk",
  },
};
