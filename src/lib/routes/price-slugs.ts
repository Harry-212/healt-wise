export type PriceSlugSeo = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  keywords?: string[];
};

export type PriceSlugConfig = {
  keyword: string;
  /** When set, used for `generateMetadata` instead of the generic `buildSeoMetadata` template. */
  seo?: PriceSlugSeo;
};

export const PRICE_SLUGS: Record<string, PriceSlugConfig> = {
  "cheapest-options-uk": {
    keyword: "Cheapest Weight Loss Injections UK",
    seo: {
      title: "Cheapest Weight Loss Injections UK: Starter & Monthly Prices",
      description:
        "Compare checked starter-dose and monthly costs from GPhC-registered UK pharmacies. Prices are dated, and provider fees may change after checking.",
      openGraphTitle: "Cheapest Weight Loss Injections in the UK: Price Guide",
      openGraphDescription:
        "The lowest UK prices for weight loss injections, from starter pen to long term dose, plus the hidden costs to check before you pay.",
    },
  },
};
