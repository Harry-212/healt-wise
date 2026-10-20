import { siteOrigin } from "@/lib/seo/site-origin";

export function mounjaroArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What Is Mounjaro? UK Guide to Results, Doses & Costs",
    description:
      "Learn how Mounjaro works, who may qualify in the UK, expected results, dosage, side effects and typical private treatment costs.",
    url: `${base}/what-is-mounjaro`,
    dateModified: "2026-04-07",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export type WhatIsMounjaroOfferRange = {
  /** Lowest listed pen price (GBP) across the tracked pharmacies. */
  low: number;
  /** Highest listed pen price (GBP) across the tracked pharmacies. */
  high: number;
  /** Number of pharmacies the range covers. */
  providerCount: number;
};

/**
 * `offer` adds an AggregateOffer to the Mounjaro Drug node. Google treats Drug
 * as a Product, and Product snippets require offers, review or aggregateRating
 * (Search Console flagged the node as invalid without it). Pass the same
 * numbers the page body shows so the schema never drifts from the visible copy.
 */
export function whatIsMounjaroPageJsonLd(
  _offer?: WhatIsMounjaroOfferRange,
): Record<string, unknown> {
  const base = siteOrigin();
  const pageUrl = `${base}/what-is-mounjaro`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "What Is Mounjaro? How It Works and How Long It Takes (UK)",
        headline: "What Is Mounjaro?",
        description:
          "What is Mounjaro? A weekly tirzepatide injection for weight loss and type 2 diabetes. See how it works, how long it takes, doses and side effects.",
        inLanguage: "en-GB",
        isPartOf: { "@id": `${base}/#website` },
        publisher: { "@id": `${base}/#organization` },
        about: { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
        mainEntity: { "@id": `${pageUrl}#faq` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        lastReviewed: "2026-09-20",
        citation: {
          "@type": "WebPage",
          name: "Tirzepatide: a medicine to manage type 2 diabetes and treat obesity",
          url: "https://www.nhs.uk/medicines/tirzepatide/",
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "What Is Mounjaro?",
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        isPartOf: { "@id": `${pageUrl}#webpage` },
        mainEntity: MOUNJARO_FAQ_ITEMS.map((item) => ({
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

export const MOUNJARO_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Is Mounjaro safe?",
    answer:
      "Mounjaro is a licensed UK medicine, and many people use it safely under a prescriber's care. Like all medicines, it can cause side effects and it is not safe for everyone. Only get it from a GPhC registered pharmacy after a health check.",
  },
  {
    question: "Is Mounjaro insulin?",
    answer:
      "No. Mounjaro is not insulin. It is also an injection, but it works in a different way. It helps your body make insulin when it is needed and lowers hunger.",
  },
  {
    question: "Is Mounjaro the same as Ozempic?",
    answer:
      "No. Ozempic contains semaglutide and is made by Novo Nordisk. Mounjaro contains tirzepatide and is made by Lilly. Mounjaro copies two hormones. Ozempic copies one.",
  },
  {
    question: "Is Mounjaro a steroid?",
    answer:
      "No. Mounjaro is not a steroid. It copies natural gut hormones.",
  },
  {
    question: "Is Mounjaro the same as tirzepatide?",
    answer:
      "Yes and no. Tirzepatide is the medicine. Mounjaro is the brand name of the pen that holds it.",
  },
  {
    question: "Is Mounjaro an injection?",
    answer:
      "Yes. You inject it once a week under the skin with a pen called the KwikPen.",
  },
  {
    question: "Is Mounjaro a drug?",
    answer:
      "Yes. A drug is a medicine. Mounjaro is a prescription medicine.",
  },
  {
    question: "Is Mounjaro the same as Zepbound?",
    answer:
      "It is the same medicine, tirzepatide, with a different brand name. Zepbound is the US brand name. In the UK, you will see Mounjaro.",
  },
  {
    question: "Can I get Mounjaro on the NHS?",
    answer:
      "Yes, for some people. GPs in England began prescribing it for weight loss in June 2025, starting with people who have the greatest need. It is also available on the NHS for type 2 diabetes. Ask your GP.",
  },
  {
    question: "What happens if I stop Mounjaro?",
    answer:
      "Your hunger may come back, and weight often comes back too. Talk to your prescriber before you stop. They can help you plan.",
  },
];

export function mounjaroFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: MOUNJARO_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function mounjaroClickCalculatorArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  const pageUrl = `${base}/tools/mounjaro-click-calculator`;
  return {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: "Mounjaro Click Calculator UK",
    description:
      "Educational calculator showing the proportional relationship between a UK Mounjaro KwikPen strength and a dose already prescribed to you. Not a dosing recommendation.",
    url: pageUrl,
    dateModified: "2026-09-15",
    isPartOf: {
      "@id": `${base}/#website`,
    },
    publisher: {
      "@id": `${base}/#organization`,
    },
    creator: {
      "@id": `${base}/editorial-team/alistair-greenwood#person`,
    },
    inLanguage: "en-GB",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  };
}

export const MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS: {
  question: string;
  answer: string;
}[] = [
  {
    question: "How many clicks are in a Mounjaro KwikPen?",
    answer:
      "The manufacturer's instructions do not recommend using click counting to set a Mounjaro dose. The UK KwikPen is designed to deliver four fixed labelled doses using the dose window. Any click-based information shown by an educational calculator should therefore be treated as a mathematical reference rather than official dosing guidance.",
  },
  {
    question: "Can I use a 10 mg Mounjaro pen to take 5 mg?",
    answer:
      "Do not use a higher-strength pen to administer a lower dose unless your prescriber has specifically instructed you to do so. A mathematical calculator may show a proportional relationship between two amounts, but it does not determine whether that administration method is medically appropriate.",
  },
  {
    question: "Can I use this calculator to change my Mounjaro dose?",
    answer:
      "No. The calculator should only be used to understand a dose that has already been prescribed. Any increase, decrease or change in Mounjaro treatment should be discussed with the healthcare professional responsible for your prescription.",
  },
  {
    question: "Is click counting approved by Eli Lilly?",
    answer:
      "The standard UK Mounjaro KwikPen instructions do not provide a click-counting method for setting partial doses. The manufacturer instructs users to administer the labelled dose using the dose window and the instructions supplied with the pen.",
  },
  {
    question: "Is there a fifth dose in a Mounjaro KwikPen?",
    answer:
      "The Mounjaro KwikPen is designed to provide four labelled doses. Although some liquid may appear to remain after those doses have been used, the manufacturer instructs patients to discard the pen after the fourth dose.",
  },
  {
    question: "What should I do if my pen strength does not match my prescribed dose?",
    answer:
      "Contact your prescribing provider or dispensing pharmacy before using the pen. Do not use an online calculator to resolve a discrepancy between your prescription and the strength of the pen you have received.",
  },
];

export function mounjaroClickCalculatorFaqJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  const pageUrl = `${base}/tools/mounjaro-click-calculator`;
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    isPartOf: { "@id": `${pageUrl}#webpage` },
    mainEntity: MOUNJARO_CLICK_CALCULATOR_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type MounjaroFaqContext = {
  providerCount: number;
  starterLow: number;
  starterMedian: number;
  starterWeekly: string;
  topHigh: number;
  topMedian: number;
  topWeekly: string;
  cheapestLeader: string;
  cheapestLeaderWins: number;
  cheapestTotalDoses: number;
  cheapestException?: { dose: string; provider: string; price: number };
};

/**
 * Mounjaro price comparison FAQs (Task: Mounjaro price page content,
 * approved copy). Numbers are interpolated from the live comparison table
 * via `MounjaroFaqContext` so they never drift from the price table above
 * them — same approach as the rest of this page's derived figures.
 */
export function buildMounjaroCompareUkFaqItems(
  ctx: MounjaroFaqContext,
): { question: string; answer: string }[] {
  const gbp = (n: number) =>
    Number.isInteger(n) ? `£${n}` : `£${n.toFixed(2)}`;

  return [
    {
      question: "What is the price of Mounjaro in the UK?",
      answer: `Mounjaro costs from ${gbp(ctx.starterLow)} to ${gbp(ctx.topHigh)} for one pen in the UK. The price depends on your dose and your pharmacy. A typical starter pen costs ${gbp(ctx.starterMedian)}.`,
    },
    {
      question: "How much is Mounjaro per week?",
      answer: `Mounjaro costs from ${ctx.starterWeekly} a week in the UK. One pen holds 4 weekly doses, so the weekly price is the pen price divided by 4. On 15 mg, it is from ${ctx.topWeekly} a week.`,
    },
    {
      question: "Who is the cheapest Mounjaro supplier in the UK right now?",
      answer: ctx.cheapestException
        ? `${ctx.cheapestLeader} had the lowest price for ${ctx.cheapestLeaderWins} of the ${ctx.cheapestTotalDoses} doses in our latest check. ${ctx.cheapestException.provider} was cheapest for ${ctx.cheapestException.dose.replace("mg", " mg")} at ${gbp(ctx.cheapestException.price)}.`
        : `${ctx.cheapestLeader} had the lowest price for ${ctx.cheapestLeaderWins} of the ${ctx.cheapestTotalDoses} doses in our latest check.`,
    },
    {
      question: "What is the cheapest way to get Mounjaro?",
      answer:
        "Compare prices for the dose you will be on, add delivery, and check the month 2 price. Bundles of 2 or 3 pens can also lower the price per pen. Our table sorts the cheapest Mounjaro prices first.",
    },
    {
      question: "Is cheap Mounjaro safe?",
      answer:
        "Yes, if it comes from a GPhC registered pharmacy and a prescriber checks your health first. Never buy from a site that does not ask about your health.",
    },
    {
      question: "Why does Mounjaro cost more at higher doses?",
      answer: `Each pen holds more medicine at higher doses, so pharmacies charge more. The typical pen goes from ${gbp(ctx.starterMedian)} at 2.5 mg to ${gbp(ctx.topMedian)} at 15 mg.`,
    },
    {
      question: "Why did Mounjaro prices go up?",
      answer:
        "In September 2025, Lilly, the company that makes Mounjaro, raised the price it charges UK pharmacies. Most pharmacies raised their prices after that. This is why comparing prices before each order can save you money.",
    },
    {
      question: "Is the price the same for every Mounjaro KwikPen?",
      answer: `No. Each KwikPen holds 4 weekly doses, and the price changes with the dose and the pharmacy. Our table is a Mounjaro KwikPen price comparison for the UK: the same pen at ${ctx.providerCount} pharmacies.`,
    },
    {
      question: "Is tirzepatide the same as Mounjaro?",
      answer:
        "Yes. Tirzepatide is the medicine inside Mounjaro. When you look up Mounjaro tirzepatide prices, you are looking at the same pen. Our table works as a tirzepatide price comparison too, so you can compare tirzepatide prices in the UK here.",
    },
    {
      question: "Do Mounjaro prices include delivery?",
      answer:
        "Usually not. Most pharmacies add a delivery charge at checkout because the pen must stay cold. Always check the final price before you pay.",
    },
    {
      question: "Can I switch pharmacy to get a better price?",
      answer:
        "Yes. A new pharmacy will do its own health check first. Tell them your current dose so you can carry on without a break.",
    },
    {
      question: "Do you compare online pharmacies?",
      answer: `Yes. This Mounjaro online pharmacy price comparison covers ${ctx.providerCount} UK online pharmacies and clinics. Each one has a GPhC number you can check.`,
    },
    {
      question: "How often do you check Mounjaro prices?",
      answer:
        "We check every price in the first week of each month. The date of the last check is shown next to the prices.",
    },
  ];
}

export function mounjaroCompareUkFaqJsonLd(
  items: { question: string; answer: string }[],
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
