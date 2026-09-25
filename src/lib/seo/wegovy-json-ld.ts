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
    reviewedBy: {
      "@type": "Person",
      name: "Alistair Campbell",
      jobTitle: "Not medical doctor",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
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

export const WEGOVY_COMPARE_UK_FAQ_ITEMS: { question: string; answer: string }[] =
  [
    {
      question: "How much does Wegovy cost in the UK?",
      answer:
        "Private Wegovy pen prices depend on dose (0.25 mg up to 2.4 mg), the pharmacy, and whether consultation and delivery fees are bundled. Our comparison table shows estimated starting and average-style monthly figures, checked on the dates shown in the table—always confirm the live checkout price on the provider’s site.",
    },
    {
      question: "What is the cheapest Wegovy UK provider?",
      answer:
        "The lowest listed starting pen price shown in our comparison table varies when you filter the table; several chains and online clinics compete closely. The cheapest headline price is not always the best value—check consultation rules, delivery, cold-chain handling, and aftercare before you choose.",
    },
    {
      question: "Do I need a prescription for Wegovy?",
      answer:
        "Yes. Wegovy (semaglutide) is prescription-only in the UK. Legitimate private routes require an appropriate medical assessment by a qualified prescriber before a pharmacy can supply it.",
    },
    {
      question: "Why do Wegovy prices vary between pharmacies?",
      answer:
        "Prices differ because of dose, bundled consultation fees, delivery and cold-chain logistics, promotions, and how each provider structures subscriptions or bundles. Use the table filters and the sections below to compare total value, not just the headline pen price.",
    },
  ];

export function wegovyCompareUkFaqJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: WEGOVY_COMPARE_UK_FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
