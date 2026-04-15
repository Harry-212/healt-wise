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
  href: "/tools/bmi-calculator",
  label: "BMI & Calorie calculator",
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
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker (My Hub)" },
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
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
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
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  bestInjections: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
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
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
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
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
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
      href: "/tools/bmi-calculator",
      label: "BMI & Calorie calculator",
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
      href: "/tools/bmi-calculator",
      label: "BMI & Calorie calculator",
    },
  },
  bmiCalculator: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      {
        href: "/compare/best-weight-loss-injections-uk",
        label: "Best weight loss injections UK",
      },
    ],
    price: {
      href: "/prices/cheapest-options-uk",
      label: "Compare prices UK",
    },
    tool: {
      href: "/tools/weight-loss-tracker",
      label: "Weight loss tracker (My Hub)",
    },
  },
  helpfulGuide: {
    compare: DEFAULT_COMPARE,
    price: DEFAULT_PRICE,
    tool: DEFAULT_TOOL,
  },
  guidePharmacy: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Compare UK prices" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaro: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideGlp1: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Compare UK prices" },
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker" },
  },
  guideMounjaroPillar: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroPlateau: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/weight-loss-tracker", label: "Weight loss tracker (My Hub)" },
  },
  guideMounjaroTimeline: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroStorage: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroVitamins: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideLocalVsOnline: {
    compare: DEFAULT_COMPARE,
    price: { href: "/prices/cheapest-options-uk", label: "Compare UK prices" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideSwitchingWegovy: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroGP: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideSwitchingPharmacy: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideCalorieCycling: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideEarlyWeightLoss: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroNutrition: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroMenopause: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroHealthBenefits: {
    compare: [
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/compare/mounjaro-vs-saxenda", label: "Mounjaro vs Saxenda" },
    ],
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroBMICutoff: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideNorovirus: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroEligibility: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroFeelCold: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroSkinPain: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroConstipation: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroSideEffects: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideRestartingMounjaro: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroDeliveryTimes: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideFakePharmacy: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideKwikpenDisposal: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideTravelInsuranceMounjaro: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  guideMounjaroHotWeather: {
    compare: DEFAULT_COMPARE,
    price: { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
  },
  blogUkLocation: {
    compare: [
      { href: "/compare/best-weight-loss-injections-uk", label: "Best weight loss injections UK" },
      { href: "/compare/wegovy-vs-mounjaro", label: "Wegovy vs Mounjaro" },
      { href: "/blog?topic=locations", label: "UK city guides on the blog" },
    ],
    price: { href: "/prices/cheapest-options-uk", label: "Cheapest options UK" },
    tool: { href: "/tools/bmi-calculator", label: "BMI & Calorie calculator" },
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
