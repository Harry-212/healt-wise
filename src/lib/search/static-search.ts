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
    type: "Treatment",
    title: "What is Saxenda?",
    href: "/what-is-saxenda",
    keywords: "liraglutide daily",
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
    title: "Compare Wegovy prices UK",
    href: "/wegovy-price-comparison",
    keywords: "wegovy comparison table cheapest pharmacy",
  },
  {
    type: "Price",
    title: "Compare Mounjaro prices UK",
    href: "/mounjaro-price-comparison",
    keywords: "mounjaro tirzepatide comparison table cheapest pharmacy",
  },
  {
    type: "Price",
    title: "Compare Saxenda prices UK",
    href: "/saxenda-price-comparison",
    keywords: "saxenda liraglutide comparison table cheapest pharmacy pens",
  },
  {
    type: "Price",
    title: "Cheapest GLP-1 options UK",
    href: "/prices/cheapest-options-uk",
  },
  {
    type: "Guide",
    title: "How GLP-1 works",
    href: "/what-is-wegovy#how-wegovy-works",
  },
  {
    type: "Guide",
    title: "GPhC pharmacy verification",
    href: "/pharmacy-safety-gphc-verification",
  },
  {
    type: "Guide",
    title: "Helpful health guides",
    href: "/helpful-guides",
    keywords: "Mounjaro Wegovy pharmacy safety UK guides",
  },
  {
    type: "Tool",
    title: "BMI, BMR & Calorie Calculator UK",
    href: "/tools/bmi-calculator",
  },
  {
    type: "Tool",
    title: "Weight loss tracker (My Hub)",
    href: "/tools/weight-loss-tracker",
  },
  { type: "Blog", title: "Blog home", href: "/blog" },
];
