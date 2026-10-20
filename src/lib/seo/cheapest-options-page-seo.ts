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
  ];
}

export const CHEAPEST_OPTIONS_FAQS = buildCheapestOptionsFaqs();

export function cheapestOptionsUkJsonLd(
  faqs: { question: string; answer: string }[] = CHEAPEST_OPTIONS_FAQS,
): Record<string, unknown> {
  const base = siteOrigin();
  const url = `${base}${PATH}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: "Cheapest Weight Loss Injections UK | Treatment Price Guide",
        headline: "Cheapest Weight Loss Injections UK",
        description:
          "Compare private UK costs for Mounjaro and Wegovy. See how dosage, delivery, consultation fees and maintenance costs affect the total.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        mainEntity: { "@id": `${url}#faq` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        isPartOf: { "@id": `${url}#webpage` },
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}
