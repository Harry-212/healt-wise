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
  href: "/prices/cheapest-options-uk",
  label: "Cheapest options UK",
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
    price: {
      href: "/mounjaro-price-comparison",
      label: "Compare Mounjaro prices UK",
    },
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
    price: {
      href: "/wegovy-price-comparison",
      label: "Compare Wegovy prices UK",
    },
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
    price: {
      href: "/wegovy-price-comparison",
      label: "Compare Wegovy prices UK",
    },
    tool: DEFAULT_TOOL,
  },
  cheapestOptions: {
    compare: DEFAULT_COMPARE,
    price: {
      href: "/mounjaro-price-comparison",
      label: "Compare Mounjaro prices UK",
    },
    tool: { href: "/tools/progress-estimator", label: "Progress estimator" },
  },
  saxendaPriceUk: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: DEFAULT_TOOL,
  },
  saxendaPriceCompare: {
    compare: [
      { href: "/wegovy-price-comparison", label: "Compare Wegovy prices UK" },
      { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: {
      href: "/prices/cheapest-options-uk",
      label: "Cheapest options UK",
    },
    tool: DEFAULT_TOOL,
  },
  blog: {
    compare: DEFAULT_COMPARE,
    price: DEFAULT_PRICE,
    tool: { href: "/tools/dosage-calculator", label: "Dosage calculator" },
  },
  whatIsWegovy: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best weight loss injections UK",
      },
    ],
    price: {
      href: "/wegovy-price-comparison",
      label: "Compare Wegovy prices UK",
    },
    tool: {
      href: "/tools/weight-loss-tracker",
      label: "Weight loss tracker (My Hub)",
    },
  },
  whatIsMounjaro: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best weight loss injections UK",
      },
    ],
    price: {
      href: "/mounjaro-price-comparison",
      label: "Compare Mounjaro prices UK",
    },
    tool: {
      href: "/tools/dosage-calculator",
      label: "Dosage calculator",
    },
  },
  whatIsSaxenda: {
    compare: [
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best weight loss injections UK",
      },
    ],
    price: {
      href: "/saxenda-price-comparison",
      label: "Compare Saxenda prices UK",
    },
    tool: {
      href: "/tools/cost-calculator",
      label: "Cost calculator",
    },
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
