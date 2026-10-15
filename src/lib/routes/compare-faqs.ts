/** FAQ copy for `/compare/[slug]` — informational only; not medical advice. */

export type CompareFaqItem = { q: string; a: string };

export const COMPARE_PAGE_FAQS: Record<string, CompareFaqItem[]> = {
  "wegovy-vs-mounjaro": [
    {
      q: "Is wegovy as good as mounjaro?",
      a: "Both are effective, MHRA-approved weekly weight-loss injections, but clinical trials show differences. In large clinical trials, patients on the highest dose of Mounjaro (tirzepatide, SURMOUNT-1) achieved an average weight loss of approximately 21% to 22.5%, compared with approximately 15% to 16% on Wegovy (semaglutide, STEP-1). However, individual responses, side effect tolerance, and personal health factors vary. A registered UK prescriber will assess which medicine is most suitable for you.",
    },
    {
      q: "Is wegovy the same as mounjaro?",
      a: "No, they contain different active ingredients and work on different hormone pathways. Wegovy contains semaglutide, which acts solely as a GLP-1 receptor agonist. Mounjaro contains tirzepatide, a dual receptor agonist targeting both GIP and GLP-1 receptors. Both are weekly pens, but they use different dose strengths, different titration schedules, and have different price structures.",
    },
    {
      q: "Is mounjaro better than wegovy?",
      a: "In head-to-head trial comparisons and separate clinical trials, Mounjaro has shown higher average percentage weight loss at comparable timeframes. However, 'better' depends on the patient: Wegovy has a longer real-world track record in the UK, different dose increments, and may be better tolerated by individuals who experience persistent side effects on dual agonists. Neither medicine is universally better for every individual.",
    },
    {
      q: "Is wegovy or mounjaro more effective?",
      a: "Clinical trial data indicates Mounjaro is generally more effective in terms of average weight reduction (averaging 21% to 22.5% reduction versus 15% to 16% for Wegovy at their maximum doses). Real-world effectiveness also depends heavily on sustained dietary changes, regular physical activity, and how comfortably you can tolerate the dose escalation schedule.",
    },
    {
      q: "Why are people switching from mounjaro to wegovy?",
      a: "Patients generally switch between Mounjaro and Wegovy due to tolerability or side effects, local stock availability, price differences at their specific maintenance dose, or because their weight loss has plateaued. Any switch must be supervised by a registered UK prescriber and typically involves starting from an introductory dose step.",
    },
    {
      q: "What is the main difference between Mounjaro and Wegovy?",
      a: "The primary difference is the active pharmaceutical ingredient and receptor mechanism. Wegovy uses semaglutide (a single GLP-1 receptor agonist), whereas Mounjaro uses tirzepatide (a dual GIP and GLP-1 receptor agonist). They also follow different titration ladders (Wegovy steps from 0.25 mg to 2.4 mg; Mounjaro steps from 2.5 mg to 15 mg) and differ in monthly pharmacy pricing.",
    },
    {
      q: "How much do Wegovy and Mounjaro cost per month in the UK?",
      a: "Wegovy starts from £83 per month for the 0.25 mg starter pen, rising to £135 to £290 per month for the 2.4 mg maintenance dose. Mounjaro starts from approximately £119 to £129 for 2.5 mg, rising to £150 to £230+ per month at higher maintenance doses (10 mg to 15 mg). Final totals depend on the pharmacy, consultation fees, and cold-chain delivery charges.",
    },
    {
      q: "Can I switch between Wegovy and Mounjaro?",
      a: "Yes, but switching GLP-1 class medications requires clinical assessment by a registered UK prescriber. You cannot simply transition directly across equivalent strengths. Prescribers typically review your medical history, establish an appropriate wash-out or reset schedule, and start you on a lower introductory dose to protect digestive tolerance.",
    },
    {
      q: "Can you get Wegovy or Mounjaro on the NHS?",
      a: "Both medicines have been recommended by NICE for NHS use in adults living with obesity who have weight-related health conditions (generally BMI 35+ or lower for specific ethnic groups) through specialist Tier 3 or Tier 4 weight management services. However, NHS waiting lists are lengthy and capacity is limited, which is why most UK adults currently access treatment through regulated private GPhC pharmacies.",
    },
    {
      q: "Does the cheapest provider have the lowest total cost?",
      a: "Not always. A low starter pen price may be offset by consultation fees, delivery charges, or sharp price increases once you progress to higher maintenance doses. To find the best value, calculate the projected total cost across 6 to 12 months at the maintenance dose you expect to remain on.",
    },
    {
      q: "Are the prices on this page live checkout prices?",
      a: "Provider prices were checked on the dates shown in each table. While we audit our dataset monthly across 60+ GPhC registered pharmacies, private providers may adjust listed prices, voucher codes, or delivery terms at any time. Always verify the final checkout total on the provider's website before ordering.",
    },
  ],

};

export function getCompareFaqsForSlug(slug: string): CompareFaqItem[] {
  return COMPARE_PAGE_FAQS[slug] ?? [];
}

/** JSON-LD for FAQ rich results (Google may show FAQ rich results where eligible). */
export function compareFaqPageJsonLd(items: CompareFaqItem[], pageUrl?: string): Record<string, unknown> {
  const faqNode: Record<string, unknown> = {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
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
