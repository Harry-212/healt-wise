import { siteOrigin } from "@/lib/seo/site-origin";
import { PRICE_CHECK_DATE_ISO, PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";
import { alistairGreenwoodAuthorJsonLd } from "@/lib/seo/author-ref";
import { publisherOrganizationJsonLd } from "@/lib/seo/shared-json-ld";

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
        publisher: publisherOrganizationJsonLd(base),
        author: alistairGreenwoodAuthorJsonLd(base),
        about: { "@type": "Thing", name: "Mounjaro (tirzepatide)" },
        mainEntity: { "@id": `${pageUrl}#faq` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        // Same date the page shows as "Last updated". No lastReviewed/reviewedBy: the page
        // has no separately identified reviewer (Task 150).
        dateModified: PRICE_CHECK_DATE_ISO,
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
  /** Date of the latest price check, as shown on the page. */
  checkDate: string;
  starterLow: number;
  starterHigh: number;
  starterWeekly: string;
  topHigh: number;
  topWeekly: string;
  /** 7.5 mg pen range and weekly price at the lowest listed price. */
  mid: { low: number; high: number; weekly: string };
  cheapestLeader: string;
  cheapestLeaderWins: number;
  cheapestTotalDoses: number;
};

/**
 * Mounjaro price comparison FAQs, in the order given in the approved page
 * content (Nov 2026). Numbers are interpolated from the live comparison table
 * via `MounjaroFaqContext` so they never drift from the price table above
 * them, and the visible FAQ and the FAQPage schema use the same items.
 */
export function buildMounjaroCompareUkFaqItems(
  ctx: MounjaroFaqContext,
): { question: string; answer: string }[] {
  const gbp = (n: number) =>
    Number.isInteger(n) ? `£${n}` : `£${n.toFixed(2)}`;

  return [
    {
      question: "What is the price of Mounjaro in the UK?",
      answer: `Among the ${ctx.providerCount} partners we checked on ${ctx.checkDate}, pen prices run from ${gbp(ctx.starterLow)} for 2.5 mg to ${gbp(ctx.topHigh)} for 15 mg. Each pen holds four weekly doses of one strength.`,
    },
    {
      question: "How much is Mounjaro per week?",
      answer: `Divide the pen price by four, because each pen holds four weekly doses. At the lowest listed prices, that is from ${ctx.starterWeekly} a week at 2.5 mg to ${ctx.topWeekly} a week at 15 mg.`,
    },
    {
      question: "What is the Mounjaro price for 7.5 mg in the UK?",
      answer: `Among our checked partners, a 7.5 mg pen is listed from ${gbp(ctx.mid.low)} to ${gbp(ctx.mid.high)} on ${ctx.checkDate}, which is about ${ctx.mid.weekly} a week at the lowest price. Check the table for the partner you are considering.`,
    },
    {
      question: "How much is the Mounjaro 2.5 mg injection?",
      answer: `A 2.5 mg pen is listed from ${gbp(ctx.starterLow)} to ${gbp(ctx.starterHigh)} on ${ctx.checkDate} among our checked partners. This is the starting dose in the patient leaflet, so the price you pay later may be different.`,
    },
    {
      question: "Which of our partner pharmacies has the lowest listed Mounjaro price?",
      answer: `On ${ctx.checkDate}, ${ctx.cheapestLeader} listed the lowest price for ${ctx.cheapestLeaderWins} of the ${ctx.cheapestTotalDoses} doses. This can change each month, so check the date next to the price.`,
    },
    {
      question: "What is the cheapest way to get Mounjaro?",
      answer:
        "Compare the price for the dose you will be on, add delivery and any fees, check the month 2 price, and check the GPhC number. See our full cheapest options page.",
    },
    {
      question: "Is cheap Mounjaro safe?",
      answer:
        "A low price is only worth considering at a GPhC registered pharmacy that asks about your health before it prescribes. Be careful with sites that ask no health questions or show no GPhC number. You can check any pharmacy on the official GPhC register.",
    },
    {
      question: "Why does Mounjaro cost more at higher doses?",
      answer:
        "Pharmacies pay more for the higher dose pens, so the listed price goes up with the dose. The manufacturer's list price rose most for the 12.5 mg and 15 mg pens in September 2025.",
    },
    {
      question: "Why did Mounjaro prices go up?",
      answer:
        "The manufacturer raised the UK list price of Mounjaro from 1 September 2025, with the largest rise on the 12.5 mg and 15 mg pens. Partners passed it on in different ways.",
    },
    {
      question: "Is the price the same for every Mounjaro KwikPen?",
      answer:
        "No. The price depends on the dose strength. Each pen holds four doses of one strength, and your prescriber decides which strength you use.",
    },
    {
      question: "Is tirzepatide the same as Mounjaro?",
      answer: "Mounjaro is the brand name, and tirzepatide is the active ingredient.",
    },
    {
      question: "Do Mounjaro prices include delivery?",
      answer:
        "The dose prices in our table are standard prices and do not include delivery. Pens must be kept cold, so most pharmacies charge for delivery. The table shows each delivery charge, and the provider confirms the final total.",
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
      question: "How often do you check Mounjaro prices?",
      answer:
        PRICE_CHECK_FREQUENCY_TEXT,
    },
    {
      question: "Is Mounjaro cheaper on the NHS?",
      answer:
        "Some people can get Mounjaro on the NHS if they meet the NICE criteria. Access depends on local services, so your GP can tell you if you are eligible.",
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
