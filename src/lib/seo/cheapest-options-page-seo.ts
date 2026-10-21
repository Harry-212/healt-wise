import { siteOrigin } from "@/lib/seo/site-origin";

const PATH = "/prices/cheapest-options-uk";

export type CheapestOptionsFaqParams = {
  /** Lowest Wegovy 0.25 mg pen, e.g. "£76.94". */
  wegovyStarter: string;
  /** Lowest Mounjaro 2.5 mg pen, e.g. "£99". */
  mounjaroStarter: string;
  /** Lowest 6 month total for Wegovy / Mounjaro, e.g. "£618". */
  wegovySixMonths: string;
  mounjaroSixMonths: string;
  /** True when Wegovy's lowest price is below Mounjaro's at every month of the first 6. */
  wegovyCheaperEveryMonth: boolean;
};

const DEFAULT_PARAMS: CheapestOptionsFaqParams = {
  wegovyStarter: "£76.94",
  mounjaroStarter: "£99",
  wegovySixMonths: "£618",
  mounjaroSixMonths: "£1,044",
  wegovyCheaperEveryMonth: true,
};

/**
 * Builds the 9 FAQs in the exact order specified by Cheapest Options UK SEO Settings (Page 2).
 */
export function buildCheapestOptionsFaqs(
  params: CheapestOptionsFaqParams = DEFAULT_PARAMS,
): { question: string; answer: string }[] {
  const p = params;
  return [
    {
      question: "What is the cheapest weight loss injection in the UK?",
      answer: p.wegovyCheaperEveryMonth
        ? `Wegovy, from ${p.wegovyStarter} for a 0.25 mg starter pen at our latest check. The cheapest Mounjaro starter pen is ${p.mounjaroStarter}.`
        : `At our latest check, a Wegovy 0.25 mg starter pen starts from ${p.wegovyStarter} and a Mounjaro 2.5 mg starter pen starts from ${p.mounjaroStarter}. Compare the dose you will actually be on.`,
    },
    {
      question: "Are the cheapest weight loss injections in the UK safe?",
      answer:
        "Yes, if they come from a GPhC registered pharmacy and a prescriber checks your health first. Never buy from a site that does not ask about your health.",
    },
    {
      question: "Do prices include delivery?",
      answer:
        "Not always. It depends on the pharmacy. Many add a delivery charge at checkout because the pen must stay cold.",
    },
    {
      question: "Why does the price at checkout look different?",
      answer:
        "Offers, delivery and consultation fees change often. We show standard prices from our last check, so always check the final price before you pay.",
    },
    {
      question: "Can I switch to a cheaper pharmacy?",
      answer:
        "Yes. A new pharmacy will do its own health check first. Tell them your current dose so you can carry on without a break.",
    },
    {
      question: "How often do you check prices?",
      answer:
        "We check every price in the first week of each month. The date of the last check is shown next to the prices.",
    },
    {
      question: "Which is cheaper, Wegovy or Mounjaro?",
      answer: p.wegovyCheaperEveryMonth
        ? `Wegovy is cheaper at every dose step. Over the first 6 months, the lowest prices add up to about ${p.wegovySixMonths} for Wegovy and ${p.mounjaroSixMonths} for Mounjaro.`
        : `It depends on the dose. Over the first 6 months, the lowest prices add up to about ${p.wegovySixMonths} for Wegovy and ${p.mounjaroSixMonths} for Mounjaro.`,
    },
    {
      question: "What is a cheap alternative to Mounjaro?",
      answer:
        "Wegovy is the main lower cost option. It costs less per pen at every stage. People lose a bit less weight on it than on Mounjaro, so ask your prescriber which suits you.",
    },
    {
      question: "Is Ozempic cheaper than Mounjaro?",
      answer:
        "Ozempic is licensed for type 2 diabetes, not weight loss. For weight loss, the same medicine is sold as Wegovy, which costs less than Mounjaro.",
    },
  ];
}

export const CHEAPEST_OPTIONS_FAQS = buildCheapestOptionsFaqs();

export type CheapestOptionsJsonLdInput = {
  wegovyCount?: number;
  mounjaroCount?: number;
  wegovyLow?: number | string;
  wegovyHigh?: number | string;
  mounjaroLow?: number | string;
  mounjaroHigh?: number | string;
  dateModified?: string;
  faqs?: { question: string; answer: string }[];
};

function formatPriceNumber(val: number | string | undefined, fallback: string): string {
  if (typeof val === "number") return val.toFixed(2);
  if (typeof val === "string") {
    const clean = val.replace(/[^0-9.]/g, "");
    const num = parseFloat(clean);
    return isNaN(num) ? fallback : num.toFixed(2);
  }
  return fallback;
}

/**
 * Builds the complete Schema graph matching Healthwise360 Cheapest Options UK Schema.txt.
 */
export function cheapestOptionsUkJsonLd(
  input?: CheapestOptionsJsonLdInput,
): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${PATH}`;

  const wCount = input?.wegovyCount ?? 63;
  const mCount = input?.mounjaroCount ?? 68;
  const wLowStr = formatPriceNumber(input?.wegovyLow, "76.94");
  const wHighStr = formatPriceNumber(input?.wegovyHigh, "290.00");
  const mLowStr = formatPriceNumber(input?.mounjaroLow, "99.00");
  const mHighStr = formatPriceNumber(input?.mounjaroHigh, "359.95");
  const dateModified = input?.dateModified ?? "2026-09-20";
  const faqs = input?.faqs ?? CHEAPEST_OPTIONS_FAQS;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: "Healthwise360",
        url: `${base}/`,
        logo: {
          "@type": "ImageObject",
          url: `${base}/logo-health-wise.webp`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Cheapest Weight Loss Injections UK 2026: Prices Compared",
        headline: "Cheapest Weight Loss Injections UK",
        description: `Compare the cheapest weight loss injections in the UK. Wegovy and Mounjaro from 60+ GPhC registered pharmacies, with starter pens from £${wLowStr}.`,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: [
          { "@id": `${url}#wegovy` },
          { "@id": `${url}#mounjaro` },
        ],
        mainEntity: { "@id": `${url}#price-data` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Cheapest Weight Loss Injections UK",
            item: url,
          },
        ],
      },
      {
        "@type": "Dataset",
        "@id": `${url}#price-data`,
        name: "Cheapest weight loss injection prices in the UK",
        description: `Lowest and typical price of one pen of Wegovy and Mounjaro at the starter and long term doses, from GPhC registered UK pharmacies (${wCount} for Wegovy, ${mCount} for Mounjaro).`,
        url,
        creator: { "@id": `${base}/#organization` },
        publisher: { "@id": `${base}/#organization` },
        dateModified,
        temporalCoverage: dateModified,
        spatialCoverage: { "@type": "Place", name: "United Kingdom" },
        isAccessibleForFree: true,
        inLanguage: "en-GB",
        license: `${base}/terms-of-service`,
        measurementTechnique:
          "Listed prices checked on each pharmacy website in the first week of every month",
        variableMeasured: [
          { "@type": "PropertyValue", name: "Lowest price", unitText: "GBP" },
          { "@type": "PropertyValue", name: "Typical price", unitText: "GBP" },
        ],
        about: [
          { "@id": `${url}#wegovy` },
          { "@id": `${url}#mounjaro` },
        ],
      },
      {
        "@type": ["Drug", "Product"],
        "@id": `${url}#wegovy`,
        name: "Wegovy",
        nonProprietaryName: "semaglutide",
        activeIngredient: "semaglutide",
        brand: { "@type": "Brand", name: "Wegovy" },
        manufacturer: { "@type": "Organization", name: "Novo Nordisk" },
        drugClass: { "@type": "DrugClass", name: "GLP-1 receptor agonist" },
        prescriptionStatus: "https://schema.org/PrescriptionOnly",
        administrationRoute: "Subcutaneous injection, once a week",
        dosageForm: "Prefilled injection pen. One pen holds 4 weekly doses.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          lowPrice: wLowStr,
          highPrice: wHighStr,
          offerCount: wCount,
          url: `${base}/wegovy-price-comparison`,
        },
      },
      {
        "@type": ["Drug", "Product"],
        "@id": `${url}#mounjaro`,
        name: "Mounjaro",
        nonProprietaryName: "tirzepatide",
        activeIngredient: "tirzepatide",
        brand: { "@type": "Brand", name: "Mounjaro" },
        manufacturer: { "@type": "Organization", name: "Eli Lilly and Company" },
        drugClass: {
          "@type": "DrugClass",
          name: "Dual GIP and GLP-1 receptor agonist",
        },
        prescriptionStatus: "https://schema.org/PrescriptionOnly",
        administrationRoute: "Subcutaneous injection, once a week",
        dosageForm: "Prefilled injection pen. One pen holds 4 weekly doses.",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "GBP",
          lowPrice: mLowStr,
          highPrice: mHighStr,
          offerCount: mCount,
          url: `${base}/mounjaro-price-comparison`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}
