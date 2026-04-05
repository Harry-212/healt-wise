export type SearchItemType =
  | "Treatment"
  | "Compare"
  | "Price"
  | "Guide"
  | "Tool"
  | "Blog";

export type SearchItem = {
  type: SearchItemType;
  title: string;
  href: string;
  keywords?: string;
};

/** Routes and labels for sitewide search (blog posts merged in API). */
export const STATIC_SEARCH_ITEMS: SearchItem[] = [
  {
    type: "Treatment",
    title: "What is Wegovy?",
    href: "/what-is-wegovy",
    keywords: "semaglutide",
  },
  {
    type: "Treatment",
    title: "What is Mounjaro?",
    href: "/what-is-mounjaro",
    keywords: "tirzepatide",
  },
  {
    type: "Compare",
    title: "Wegovy vs Mounjaro",
    href: "/compare/wegovy-vs-mounjaro",
  },
  {
    type: "Compare",
    title: "Mounjaro vs Saxenda",
    href: "/compare/mounjaro-vs-saxenda",
  },
  {
    type: "Compare",
    title: "Best weight loss injections UK",
    href: "/compare/best-weight-loss-injections-uk",
  },
  {
    type: "Price",
    title: "Wegovy price UK",
    href: "/prices/wegovy-price-uk",
  },
  {
    type: "Price",
    title: "Mounjaro price UK",
    href: "/prices/mounjaro-price-uk",
  },
  {
    type: "Price",
    title: "Cheapest GLP-1 options UK",
    href: "/prices/cheapest-options-uk",
  },
  {
    type: "Price",
    title: "Saxenda price UK",
    href: "/prices/saxenda-price-uk",
  },
  {
    type: "Guide",
    title: "How GLP-1 works",
    href: "/how-glp-1-works",
  },
  {
    type: "Guide",
    title: "GPhC pharmacy verification",
    href: "/pharmacy-safety-gphc-verification",
  },
  {
    type: "Tool",
    title: "Weight loss tracker (My Hub)",
    href: "/tools/weight-loss-tracker",
  },
  {
    type: "Tool",
    title: "Cost calculator",
    href: "/tools/cost-calculator",
  },
  {
    type: "Tool",
    title: "Dosage calculator",
    href: "/tools/dosage-calculator",
  },
  {
    type: "Tool",
    title: "Progress estimator",
    href: "/tools/progress-estimator",
  },
  { type: "Blog", title: "Blog home", href: "/blog" },
];
