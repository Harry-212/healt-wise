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
        "We show the date when the prices on this page were checked. Provider prices, delivery fees and offers can change after that date, so confirm the final amount directly with the provider before proceeding.",
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
 * Builds the Schema graph for the page. `#organization` and `#website` come
 * from the root layout graph, so they are referenced here, not redeclared.
 * Offer ranges run from the starter pen to the long term dose (Wegovy 2.4 mg,
 * Mounjaro 15 mg), matching the tables on the page.
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
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Cheapest Weight Loss Injections UK: Starter & Monthly Prices",
        headline: "Cheapest Weight Loss Injections UK",
        description:
          "Compare checked starter-dose and monthly costs from GPhC-registered UK pharmacies. Prices are dated, and provider fees may change after checking.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: [
          {
            "@type": "Thing",
            name: "Wegovy price comparison",
          },
          {
            "@type": "Thing",
            name: "Mounjaro price comparison",
          },
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
        name: "Cheapest weight loss injection price comparison in the UK",
        description:
          "Checked UK pharmacy price-comparison data for Mounjaro and Wegovy, covering listed dose prices, provider counts and the checking date. Healthwise360 provides independent comparison information and does not prescribe, dispense or sell medicines.",
        url,
        creator: { "@id": `${base}/#organization` },
        publisher: { "@id": `${base}/#organization` },
        dateModified,
        temporalCoverage: dateModified,
        spatialCoverage: { "@type": "Place", name: "United Kingdom" },
        isAccessibleForFree: true,
        inLanguage: "en-GB",
        license: `${base}/terms-of-service`,
        measurementTechnique: `Listed prices checked on each pharmacy website. The date of the last check is shown on the page. Method: ${base}/methodology`,
        about: [
          {
            "@type": "Thing",
            name: "Wegovy UK price comparison",
            url: `${base}/wegovy-price-comparison`,
          },
          {
            "@type": "Thing",
            name: "Mounjaro UK price comparison",
            url: `${base}/mounjaro-price-comparison`,
          },
        ],
        variableMeasured: [
          {
            "@type": "PropertyValue",
            name: "Wegovy price range for one pen, from starter dose to long term dose",
            minValue: parseFloat(wLowStr),
            maxValue: parseFloat(wHighStr),
            unitText: "GBP",
          },
          {
            "@type": "PropertyValue",
            name: "Mounjaro price range for one pen, from starter dose to long term dose",
            minValue: parseFloat(mLowStr),
            maxValue: parseFloat(mHighStr),
            unitText: "GBP",
          },
          {
            "@type": "PropertyValue",
            name: "Wegovy pharmacies checked",
            value: wCount,
          },
          {
            "@type": "PropertyValue",
            name: "Mounjaro pharmacies checked",
            value: mCount,
          },
          {
            "@type": "PropertyValue",
            name: "Dose coverage",
            value:
              "Wegovy from the 0.25 mg starter pen to the 2.4 mg long term pen. Mounjaro from the 2.5 mg starter pen to the 15 mg top dose pen.",
          },
        ],
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
