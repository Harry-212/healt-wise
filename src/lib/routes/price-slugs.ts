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
    keyword: "Cheapest GLP-1 options UK",
    seo: {
      title: "Cheapest Weight Loss Injections UK: Starter & Monthly Prices",
      description:
        "Find the cheapest weight loss injections in the UK. Compare starter and monthly prices, hidden fees and safe online pharmacies, checked every month.",
      openGraphTitle: "Cheapest Weight Loss Injections in the UK: Price Guide",
      openGraphDescription:
        "The lowest UK prices for weight loss injections, from starter pen to long term dose, plus the hidden costs to check before you pay.",
    },
  },
};
