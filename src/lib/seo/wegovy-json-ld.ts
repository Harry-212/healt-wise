import { siteOrigin } from "@/lib/seo/site-origin";
import { PRICE_CHECK_DATE_ISO, PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";
import { alistairGreenwoodAuthorJsonLd } from "@/lib/seo/author-ref";
import { publisherOrganizationJsonLd } from "@/lib/seo/shared-json-ld";

export type WhatIsWegovyFaqParams = {
  /** Lowest listed starter pen price, e.g. "£76.94". */
  starterLow: string;
  /** Typical monthly price on 2.4 mg, e.g. "£200". */
  dose24Typical: string;
};

export function buildWegovyFaqItems(
  params?: WhatIsWegovyFaqParams,
): { question: string; answer: string }[] {
  const starterLow = params?.starterLow ?? "£64.99";
  const dose24Typical = params?.dose24Typical ?? "£200";
  return [
    {
      question: "Is Wegovy the same as Ozempic?",
      answer:
        "Yes and no. Both contain semaglutide and are made by Novo Nordisk. Wegovy is for weight loss and goes up to higher doses. Ozempic is for type 2 diabetes.",
    },
    {
      question: "Is Wegovy the same as Mounjaro?",
      answer:
        "No. Wegovy contains semaglutide and copies one hormone, GLP-1. Mounjaro contains tirzepatide and copies two hormones, GIP and GLP-1. In a head to head trial, people lost more weight on Mounjaro.",
    },
    {
      question: "What is the main side effect of Wegovy?",
      answer:
        "Feeling sick (nausea). It is most common in the first weeks and after each dose increase, and it often eases with time.",
    },
    {
      question: "Is Wegovy insulin?",
      answer:
        "No. Wegovy is not insulin. It helps your body make its own insulin when blood sugar is high, and it lowers hunger.",
    },
    {
      question: "Is Wegovy available on the NHS?",
      answer:
        "Yes, for some people, through specialist weight management services. You usually need a high BMI and a weight related health problem. NHS treatment lasts up to 2 years.",
    },
    {
      question: "How long can you take Wegovy?",
      answer:
        "Privately, as long as your prescriber says it is right for you. On the NHS, up to 2 years.",
    },
    {
      question: "What happens if I stop Wegovy?",
      answer:
        "Your hunger may come back, and weight often comes back too. Talk to your prescriber before you stop.",
    },
    {
      question: "Can I take Wegovy if I have type 2 diabetes?",
      answer:
        "Yes, if a prescriber agrees. It can help you lose weight. Tell them about your diabetes medicines, as your doses may need to change.",
    },
    {
      question: "What happens if I miss a dose?",
      answer:
        "If your next dose is more than 2 days away, take it as soon as you remember. If it is less than 2 days away, skip it and take the next one on your usual day.",
    },
    {
      question: "What does Wegovy cost in the UK?",
      answer: `From ${starterLow} for a starter pen at our latest check. Most people pay about ${dose24Typical} a month on 2.4 mg. See every dose and pharmacy on our Wegovy price page.`,
    },
  ];
}

export const WEGOVY_FAQ_ITEMS = buildWegovyFaqItems();

/**
 * Page graph for /what-is-wegovy. Deliberately WebPage + FAQPage only (no Drug
 * or Offer node): Healthwise360 is a comparison site, not a seller, so it
 * follows the same compliance-audit shape as /what-is-mounjaro.
 */
export function whatIsWegovyPageJsonLd(
  faqItems: { question: string; answer: string }[] = WEGOVY_FAQ_ITEMS,
): Record<string, unknown> {
  const base = siteOrigin();
  const pageUrl = `${base}/what-is-wegovy`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "What Is Wegovy? How It Works and When It Starts Working (UK)",
        headline: "What Is Wegovy?",
        description:
          "What is Wegovy? A weekly semaglutide injection for weight loss. See how it works, when it starts working, weight loss results, doses and UK prices.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: publisherOrganizationJsonLd(base),
        author: alistairGreenwoodAuthorJsonLd(base),
        about: { "@type": "Thing", name: "Wegovy (semaglutide)" },
        mainEntity: { "@id": `${pageUrl}#faq` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        // Same date the page shows as "Last updated". No lastReviewed/reviewedBy: the page
        // has no separately identified reviewer (Task 150).
        dateModified: PRICE_CHECK_DATE_ISO,
        citation: {
          "@type": "WebPage",
          name: "Semaglutide: a medicine to manage type 2 diabetes or treat obesity",
          url: "https://www.nhs.uk/medicines/semaglutide/",
          publisher: { "@type": "Organization", name: "NHS" },
        },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-answer", "#how-it-works-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "What Is Wegovy?",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export function wegovyClickCalculatorArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Wegovy Click Calculator UK & Dose Chart",
    description:
      "Educational calculator showing the mathematical relationship between a UK Wegovy FlexTouch pen strength and a dose already prescribed to you. Not a dosing recommendation.",
    url: `${base}/tools/wegovy-click-calculator`,
    dateModified: "2026-09-15",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
    publisher: {
      "@id": `${base}/#organization`,
    },
    creator: {
      "@id": `${base}/editorial-team/alistair-greenwood#person`,
    },
  };
}

export const WEGOVY_CLICK_CALCULATOR_FAQ_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "What is a Wegovy click calculator?",
      answer:
        "A Wegovy click calculator compares a dose entered by the user with the labelled strength of a selected FlexTouch pen. It provides a mathematical estimate only. It does not prescribe a dose or replace the dose counter, patient leaflet or instructions from a healthcare professional.",
    },
    {
      question: "Is counting Wegovy clicks an official dosing method?",
      answer:
        "No. The official Wegovy patient leaflet instructs users not to set a dose by counting clicks. Patients should turn the selector until their prescribed dose appears on the dose counter.",
    },
    {
      question: "How many clicks are in a full Wegovy dose?",
      answer:
        "The manufacturer does not instruct patients to identify a full dose by counting clicks. This calculator uses 74 as a mathematical reference, but that number must not be treated as an official dosing instruction.",
    },
    {
      question: "What Wegovy pen strengths are available in the UK?",
      answer:
        "The standard FlexTouch range includes 0.25 mg, 0.5 mg, 1 mg, 1.7 mg and 2.4 mg pens. A 7.2 mg weekly dose has also been approved for certain adults with obesity, including a dedicated single-dose pen approved in April 2026.",
    },
    {
      question: "Does each Wegovy FlexTouch pen contain four doses?",
      answer:
        "Yes. Each standard Wegovy FlexTouch pen contains four labelled doses of the strength printed on the pen.",
    },
    {
      question: "Is there a fifth dose in a Wegovy pen?",
      answer:
        "No additional dose should be assumed. The patient leaflet says that some solution may remain after four doses, but the amount is insufficient for another dose and the pen should be disposed of.",
    },
    {
      question: "Can I use a 2.4 mg pen to take a smaller dose?",
      answer:
        "Only follow the dose and method approved by your prescriber. Using clicks or partial pen settings to create a different dose is not the manufacturer's instructed method and should not be attempted without specific clinical guidance.",
    },
    {
      question: "Can I use this calculator to change my Wegovy dose?",
      answer:
        "No. Only a qualified prescriber should decide whether your dose should stay the same, increase, decrease or stop. The calculator is informational and does not provide individual medical advice.",
    },
    {
      question: "Is Wegovy 7.2 mg equal to 222 clicks?",
      answer:
        "No. Healthwise360 does not represent 7.2 mg as 222 clicks. The 7.2 mg dose is a complete prescribed weekly regimen and must be administered using the product and instructions supplied by the prescriber.",
    },
    {
      question: "How is Wegovy 7.2 mg administered?",
      answer:
        "The 7.2 mg dose was initially authorised as three consecutive 2.4 mg injections on the same day. A dedicated single-dose 7.2 mg pen was subsequently approved. Patients must follow the instructions for the exact product they receive.",
    },
    {
      question: "Can someone start Wegovy at 7.2 mg?",
      answer:
        "No. Wegovy normally starts at 0.25 mg once weekly and is increased gradually when instructed by the prescriber. The 7.2 mg option is only considered for certain adults with obesity after treatment at 2.4 mg.",
    },
    {
      question: "Is Wegovy 7.2 mg available through the NHS?",
      answer:
        "MHRA approval does not automatically mean a treatment is routinely funded by the NHS. NICE is currently developing its appraisal of semaglutide 7.2 mg for managing obesity. Patients should confirm current access with their healthcare provider.",
    },
    {
      question: "What happens if the dose counter stops early?",
      answer:
        "The official instructions say that if the counter stops before the prescribed dose is reached, there is not enough medicine left for a full dose. The pen should be disposed of and a new pen used according to the supplied instructions.",
    },
    {
      question: "Is Wegovy the same as Mounjaro?",
      answer:
        "No. Wegovy contains semaglutide, while Mounjaro contains tirzepatide. The medicines, pen mechanisms, labelled strengths and dosing instructions are different. A click calculation from one product must never be transferred to the other.",
    },
    {
      question: "Does Healthwise360 store the dose I enter?",
      answer:
        "No. Calculations are completed in your browser and the dose entered is not saved or used to create a personal profile.",
    },
  ];

export function wegovyClickCalculatorFaqJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${base}/tools/wegovy-click-calculator`,
    mainEntity: WEGOVY_CLICK_CALCULATOR_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type WegovyCompareFaqParams = {
  checkDate?: string;
  starterLow: string;
  starterWeekly: string;
  dose10Low?: string;
  dose17Low?: string;
  dose24Low: string;
  dose24High: string;
  dose24Typical: string;
  dose24Weekly: string;
  dose72Low: string;
  cheapestLeader: string;
  cheapestLeaderWins: number;
  cheapestTotalDoses: number;
};

export function buildWegovyCompareUkFaqItems(
  params?: WegovyCompareFaqParams,
): { question: string; answer: string }[] {
  const checkDate = params?.checkDate ?? "November 2026";
  const starterLow = params?.starterLow ?? "£64.99";
  const starterWeekly = params?.starterWeekly ?? "£16.25";
  const dose10Low = params?.dose10Low ?? "£98.99";
  const dose17Low = params?.dose17Low ?? "£139.99";
  const dose24Low = params?.dose24Low ?? "£159";
  const dose24High = params?.dose24High ?? "£290";
  const dose24Typical = params?.dose24Typical ?? "£200";
  const dose24Weekly = params?.dose24Weekly ?? "£39.75";
  const dose72Low = params?.dose72Low ?? "£194.99";
  const cheapestLeader = params?.cheapestLeader ?? "Solira";
  const cheapestLeaderWins = params?.cheapestLeaderWins ?? 6;
  const cheapestTotalDoses = params?.cheapestTotalDoses ?? 6;

  return [
    {
      question: "What is the price of Wegovy in the UK?",
      answer: `Among the six partners we checked on ${checkDate}, pen prices run from ${starterLow} for 0.25 mg to ${dose24Low} for 2.4 mg. Each pen holds four weekly doses of one strength.`,
    },
    {
      question: "How much is Wegovy per month?",
      answer: `One pen holds four weekly doses, so the price of one pen is the cost for a month. At the lowest listed prices it runs from ${starterLow} at 0.25 mg to ${dose24Low} at 2.4 mg.`,
    },
    {
      question: "How much is Wegovy per week?",
      answer: `Divide the pen price by four. At the lowest listed prices, that is ${starterWeekly} a week at 0.25 mg and ${dose24Weekly} a week at 2.4 mg.`,
    },
    {
      question: "What is the price of Wegovy 1 mg and 1.7 mg?",
      answer: `On ${checkDate}, the lowest listed Wegovy 1 mg pen is ${dose10Low} and the lowest 1.7 mg pen is ${dose17Low}. The 1.7 mg pen is where the price steps up most.`,
    },
    {
      question: "What is the Wegovy 7.2 mg price?",
      answer: `On ${checkDate}, the lowest listed Wegovy 7.2 mg pen is ${dose72Low}. Only some partners list this dose so far.`,
    },
    {
      question: "Which of our partner pharmacies has the lowest listed Wegovy price?",
      answer: `On ${checkDate}, ${cheapestLeader} listed the lowest price for ${cheapestLeaderWins} of the ${cheapestTotalDoses} doses. This changes from month to month.`,
    },
    {
      question: "What is the cheapest place to get Wegovy?",
      answer:
        "It depends on your dose. Compare the price at the dose you will be on, add delivery, and check the GPhC number. See our lowest price options page.",
    },
    {
      question: "Is cheap Wegovy safe?",
      answer:
        "A low price is only worth considering at a GPhC registered pharmacy that asks about your health before it prescribes. Be careful with sites that ask no health questions or show no GPhC number.",
    },
    {
      question: "Can you buy Wegovy in the UK?",
      answer:
        "Yes, with a prescription. Wegovy is a prescription only medicine, so a prescriber must check your health first.",
    },
    {
      question: "Is the Wegovy price going up?",
      answer:
        "Prices change between checks. The table in section 7 shows how the lowest listed price at each dose has moved since our first check.",
    },
    {
      question: "Will Wegovy get cheaper in the UK?",
      answer:
        "Nobody can say for certain. We record standard prices at every completed price verification, so you can see the direction of prices in section 7.",
    },
    {
      question: "Do Wegovy prices include delivery?",
      answer:
        "The dose prices in our table are standard prices and do not include delivery. The table shows each delivery charge, and the provider confirms the final total.",
    },
    {
      question: "Do Wegovy packs include needles?",
      answer:
        "The patient leaflet says each pack holds one pen and 4 disposable needles. Check with the partner that needles are sent with your pen.",
    },
    {
      question: "Can I switch pharmacy to get a better price?",
      answer:
        "Yes. You can move to another GPhC registered pharmacy. They will do a new health check first.",
    },
    {
      question: "Do you compare online pharmacies?",
      answer:
        "Yes. We compare selected GPhC registered partner pharmacies, not the whole UK market.",
    },
    {
      question: "How often do you check Wegovy prices?",
      answer:
        PRICE_CHECK_FREQUENCY_TEXT,
    },
  ];
}

export const WEGOVY_COMPARE_UK_FAQ_ITEMS: { question: string; answer: string }[] =
  buildWegovyCompareUkFaqItems();

export function wegovyCompareUkFaqJsonLd(
  items: { question: string; answer: string }[] = WEGOVY_COMPARE_UK_FAQ_ITEMS,
  pageUrl?: string,
): Record<string, unknown> {
  const faqNode: Record<string, unknown> = {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  faqNode["@context"] = "https://schema.org";

  if (pageUrl) {
    faqNode["@id"] = `${pageUrl}#faq`;
    faqNode["isPartOf"] = { "@id": `${pageUrl}#webpage` };
  }

  return faqNode;
}
