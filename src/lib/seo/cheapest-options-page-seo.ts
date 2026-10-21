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
        ? `Wegovy is cheaper at every month of the first 6. Over that time, the lowest prices add up to about ${p.wegovySixMonths} for Wegovy and ${p.mounjaroSixMonths} for Mounjaro.`
        : `It depends on the dose. Over the first 6 months, the lowest prices add up to about ${p.wegovySixMonths} for Wegovy and ${p.mounjaroSixMonths} for Mounjaro.`,
    },
    {
      question: "What is a cheap alternative to Mounjaro?",
      answer:
        "Wegovy is the main other weekly injection for weight loss. Compare its price for the dose you will be on. People lose a bit less weight on it than on Mounjaro in a head to head trial, so ask your prescriber which suits you.",
    },
    {
      question: "Is Ozempic cheaper than Mounjaro?",
      answer:
        "Ozempic is licensed for type 2 diabetes, not weight loss. For weight loss, the same medicine is sold as Wegovy.",
    },
  ];
}

export const CHEAPEST_OPTIONS_FAQS = buildCheapestOptionsFaqs();

export type CheapestOptionsJsonLdInput = {
  faqs: { question: string; answer: string }[];
  /** ISO yyyy-mm-dd of the latest price check. */
  checkedIso: string | null;
  wegovy: { low: number; high: number; count: number };
  mounjaro: { low: number; high: number; count: number };
};

/**
 * `#organization` and `#website` come from the root layout graph, and the
 * breadcrumb from `<BreadcrumbJsonLd>`, so neither is repeated here. Offer
 * ranges run from the starter pen to the long term dose (Wegovy 2.4 mg,
 * Mounjaro 15 mg), matching the tables on the page.
 */
export function cheapestOptionsUkJsonLd(
  input: CheapestOptionsJsonLdInput,
): Record<string, unknown> {
  const base = siteOrigin().replace(/\/$/, "");
  const url = `${base}${PATH}`;
  const org = { "@id": `${base}/#organization` };
  const { wegovy, mounjaro } = input;

  const drug = (
    anchor: string,
    d: {
      name: string;
      generic: string;
      maker: string;
      drugClass: string;
      range: { low: number; high: number; count: number };
      offerUrl: string;
    },
  ) => ({
    "@type": ["Drug", "Product"],
    "@id": `${url}#${anchor}`,
    name: d.name,
    nonProprietaryName: d.generic,
    activeIngredient: d.generic,
    brand: { "@type": "Brand", name: d.name },
    manufacturer: { "@type": "Organization", name: d.maker },
    drugClass: { "@type": "DrugClass", name: d.drugClass },
    prescriptionStatus: "https://schema.org/PrescriptionOnly",
    administrationRoute: "Subcutaneous injection, once a week",
    dosageForm: "Prefilled injection pen. One pen holds 4 weekly doses.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: d.range.low.toFixed(2),
      highPrice: d.range.high.toFixed(2),
      offerCount: d.range.count,
      url: `${base}${d.offerUrl}`,
    },
  });

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
          "Find the cheapest weight loss injections in the UK. Compare starter and monthly prices, hidden fees and safe online pharmacies, checked every month.",
        inLanguage: "en-GB",
        ...(input.checkedIso ? { dateModified: input.checkedIso } : {}),
        isPartOf: { "@id": `${base}/#website` },
        publisher: org,
        about: [{ "@id": `${url}#wegovy` }, { "@id": `${url}#mounjaro` }],
        mainEntity: { "@id": `${url}#price-data` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "Dataset",
        "@id": `${url}#price-data`,
        name: "Cheapest weight loss injection prices in the UK",
        description: `Lowest and typical price of one pen of Wegovy (0.25 mg to 2.4 mg) and Mounjaro (2.5 mg to 15 mg) from GPhC registered UK pharmacies (${wegovy.count} for Wegovy, ${mounjaro.count} for Mounjaro).`,
        url,
        creator: org,
        publisher: org,
        ...(input.checkedIso
          ? { dateModified: input.checkedIso, temporalCoverage: input.checkedIso }
          : {}),
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
        about: [{ "@id": `${url}#wegovy` }, { "@id": `${url}#mounjaro` }],
      },
      drug("wegovy", {
        name: "Wegovy",
        generic: "semaglutide",
        maker: "Novo Nordisk",
        drugClass: "GLP-1 receptor agonist",
        range: wegovy,
        offerUrl: "/wegovy-price-comparison",
      }),
      drug("mounjaro", {
        name: "Mounjaro",
        generic: "tirzepatide",
        maker: "Eli Lilly and Company",
        drugClass: "Dual GIP and GLP-1 receptor agonist",
        range: mounjaro,
        offerUrl: "/mounjaro-price-comparison",
      }),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: input.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
