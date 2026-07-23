export type PriceSlugSeo = {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  keywords: string[];
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
      title: "Cheapest Weight Loss Injections UK | Treatment Price Guide",
      description:
        "Compare private UK costs for Mounjaro, Wegovy and Saxenda. See how dosage, delivery, consultation fees and maintenance costs affect the total.",
      openGraphTitle: "Cheapest Weight Loss Injections UK | Treatment Price Guide",
      openGraphDescription:
        "Compare private UK costs for Mounjaro, Wegovy and Saxenda. See how dosage, delivery, consultation fees and maintenance costs affect the total.",
      keywords: [
        "cheapest GLP-1 UK",
        "cheapest wegovy UK",
        "mounjaro price UK cheapest",
        "saxenda cost UK private",
        "weight loss treatments UK prices",
        "semaglutide price UK",
        "tirzepatide price UK",
        "liraglutide saxenda UK",
        "private prescription weight loss UK",
      ],
    },
  },
};
