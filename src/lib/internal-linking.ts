export type InternalLinkSet = {
  compare: { href: string; label: string }[];
  price: { href: string; label: string };
  tool: { href: string; label: string };
};

const DEFAULT_COMPARE = [
  { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
  { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
];

const DEFAULT_PRICE = {
  href: "/prices/wegovy-price-uk",
  label: "Wegovy price UK",
};

const DEFAULT_TOOL = {
  href: "/tools/cost-calculator",
  label: "Cost calculator",
};

const MAP = {
  home: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best weight loss injections UK",
      },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
  },
  wegovyVsMounjaro: {
    compare: [
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best injections UK",
      },
    ],
    price: { href: "/prices/mounjaro-price-uk", label: "Mounjaro price UK" },
    tool: { href: "/tools/dosage-calculator", label: "Dosage calculator" },
  },
  mounjaroVsSaxenda: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best injections UK",
      },
    ],
    price: { href: "/prices/wegovy-price-uk", label: "Wegovy price UK" },
    tool: { href: "/tools/progress-estimator", label: "Progress estimator" },
  },
  bestInjections: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: { href: "/tools/cost-calculator", label: "Cost calculator" },
  },
  wegovyPriceUk: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: DEFAULT_TOOL,
  },
  mounjaroPriceUk: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/wegovy-price-uk", label: "Wegovy price UK" },
    tool: DEFAULT_TOOL,
  },
  cheapestOptions: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/mounjaro-price-uk", label: "Mounjaro price UK" },
    tool: { href: "/tools/progress-estimator", label: "Progress estimator" },
  },
  saxendaPriceUk: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: DEFAULT_TOOL,
  },
  blog: {
    compare: DEFAULT_COMPARE,
    price: DEFAULT_PRICE,
    tool: { href: "/tools/dosage-calculator", label: "Dosage calculator" },
  },
} as const satisfies Record<string, Partial<InternalLinkSet>>;

export type InternalTopic = keyof typeof MAP;

export function internalLinksFor(topic: InternalTopic): InternalLinkSet {
  const p = MAP[topic];
  return {
    compare: p.compare ?? DEFAULT_COMPARE,
    price: p.price ?? DEFAULT_PRICE,
    tool: p.tool ?? DEFAULT_TOOL,
  };
}
