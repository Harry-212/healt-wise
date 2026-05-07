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
      title:
        "Private GLP-1 weight loss costs UK (2026) — Wegovy, Mounjaro & Saxenda landscape",
      description:
        "Independent UK snapshot: how private listings differ for Wegovy (semaglutide), Mounjaro (tirzepatide), and Saxenda (liraglutide)—starter packs, titration, and why checkout totals beat headline prices. Links to full tables; not medical advice.",
      openGraphTitle:
        "UK private GLP-1 prices: Wegovy, Mounjaro & Saxenda (2026 snapshot)",
      openGraphDescription:
        "Illustrative cheapest listings, dose and pack context, plus FAQs—confirm live prices with a GPhC-registered pharmacy before you pay.",
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
