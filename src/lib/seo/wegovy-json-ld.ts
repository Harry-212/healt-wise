import { siteOrigin } from "@/lib/seo/site-origin";

export function wegovyArticleJsonLd(): Record<string, unknown> {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "What Is Wegovy? UK Guide to Results, Doses & Costs",
    description:
      "Learn how Wegovy works, who may qualify in the UK, expected results, dosage, side effects and typical private treatment costs.",
    url: `${base}/what-is-wegovy`,
    dateModified: "2026-04-06",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export const WEGOVY_FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "How much does Wegovy cost in the UK?",
    answer:
      "Private Wegovy prices vary by dose and provider. Based on the prices shown in our comparison table, headline monthly order prices for common pen strengths often fall roughly between about £169 and £269 before promotions—always confirm live pricing, consultation rules, and delivery on the pharmacy site.",
  },
  {
    question: "Is Wegovy available on the NHS?",
    answer:
      "Access depends on local criteria and eligibility. Some patients may receive GLP-1 treatments via NHS specialist weight-management pathways when criteria are met; many people obtain Wegovy through private online clinics or pharmacies after a consultation. Check NHS and local guidance for the latest position.",
  },
  {
    question: "How long before I see results with Wegovy?",
    answer:
      "In clinical trials, weight change accumulates over many months alongside diet and activity changes. Individual response varies; your prescriber may adjust dose over time. Do not expect instant results in the first week.",
  },
];

export function wegovyFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WEGOVY_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
  starterLow: string;
  starterWeekly: string;
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
  const starterLow = params?.starterLow ?? "£72.89";
  const starterWeekly = params?.starterWeekly ?? "£18.22";
  const dose24Low = params?.dose24Low ?? "£173.69";
  const dose24High = params?.dose24High ?? "£290";
  const dose24Typical = params?.dose24Typical ?? "£200";
  const dose24Weekly = params?.dose24Weekly ?? "£43.42";
  const dose72Low = params?.dose72Low ?? "£175.49";
  const cheapestLeader = params?.cheapestLeader ?? "Pharmacy + Me";
  const cheapestLeaderWins = params?.cheapestLeaderWins ?? 6;
  const cheapestTotalDoses = params?.cheapestTotalDoses ?? 6;

  return [
    {
      question: "What is the price of Wegovy in the UK?",
      answer: `Wegovy costs from ${starterLow} to ${dose24High} for one pen in the UK, on doses from 0.25 mg to 2.4 mg. The 7.2 mg pen costs from ${dose72Low}. The price depends on your dose and your pharmacy.`,
    },
    {
      question: "How much is Wegovy per month?",
      answer: `One pen lasts a month. So Wegovy costs from ${starterLow} a month on the starter dose and from ${dose24Low} a month on 2.4 mg. Most people pay about ${dose24Typical} a month on 2.4 mg.`,
    },
    {
      question: "How much is Wegovy per week?",
      answer: `Wegovy costs from ${starterWeekly} a week in the UK. One pen holds 4 weekly doses, so the weekly price is the pen price divided by 4. On 2.4 mg, it is from ${dose24Weekly} a week.`,
    },
    {
      question: "What is the cheapest Wegovy provider in the UK?",
      answer: `${cheapestLeader} had the lowest price for ${cheapestLeaderWins} of the ${cheapestTotalDoses} doses in our latest check.`,
    },
    {
      question: "What's the cheapest place to get Wegovy?",
      answer:
        "A GPhC registered online pharmacy, if you pay privately. Compare the dose you will be on, add delivery, and check the month 2 price. Our table sorts the cheapest Wegovy prices first.",
    },
    {
      question: "Is cheap Wegovy safe?",
      answer:
        "Yes, if it comes from a GPhC registered pharmacy and a prescriber checks your health first. Never buy from a site that does not ask about your health.",
    },
    {
      question: "Can you buy Wegovy in the UK?",
      answer:
        "Yes. Wegovy jabs in the UK need a prescription. An online pharmacy can give you one after a health check, or you may get it on the NHS if you qualify.",
    },
    {
      question: "Is the Wegovy price going up?",
      answer:
        "Each pharmacy sets its own price, and some change it every month. Prices can go up or down at any time. We check them every month and show the date, so you see the latest price before you order.",
    },
    {
      question: "Will Wegovy get cheaper in the UK?",
      answer:
        "No one can say for sure. The best way to pay less today is to compare prices for your dose before each order.",
    },
    {
      question: "Do Wegovy prices include delivery?",
      answer:
        "Not always. It depends on the pharmacy. Many add a delivery charge at checkout because the pen must stay cold, so always check the final price before you pay.",
    },
    {
      question: "Can I switch pharmacy to get a better price?",
      answer:
        "Yes. A new pharmacy will do its own health check first. Tell them your current dose so you can carry on without a break.",
    },
    {
      question: "What are the best websites to compare Wegovy prices in the UK?",
      answer:
        "Pick a site that checks every pharmacy's GPhC number, shows the date of each price, covers every dose and does not let pharmacies pay to rank higher. Healthwise360 does all four.",
    },
    {
      question: "How often do you check Wegovy prices?",
      answer:
        "We check every price in the first week of each month. The date of the last check is shown next to the prices.",
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
