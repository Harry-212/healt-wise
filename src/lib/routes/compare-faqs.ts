/** FAQ copy for `/compare/[slug]` — informational only; not medical advice. */

export type CompareFaqItem = { q: string; a: string };

export const COMPARE_PAGE_FAQS: Record<string, CompareFaqItem[]> = {
  "wegovy-vs-mounjaro": [
    {
      q: "Are the prices on this page live checkout prices?",
      a: "No. Provider prices were checked on the dates shown in each table. Prices and availability can change; confirm the final total and any additional charges with the provider before you pay.",
    },
    {
      q: "Why do Wegovy and Mounjaro monthly costs look so different?",
      a: "Monthly spend depends on dose step, pen pricing, whether consultations and delivery are bundled, and how often you move up in titration. The matrix lets you sort and filter so you can compare like-for-like strengths where possible, but your prescriber decides the appropriate dose and schedule.",
    },
    {
      q: "Does a higher matrix price always mean worse value?",
      a: "Not necessarily. Some listings include follow-up messaging, app support, or bundled reviews that others price separately. Use the columns for consultation fees, delivery, and trust signals alongside the headline pen price.",
    },
    {
      q: "Can I use this page to decide whether Wegovy or Mounjaro is right for me?",
      a: "No. This hub is for comparing pricing structure and pharmacy context in the UK. Eligibility, contraindications, and monitoring plans are clinical decisions for a registered prescriber after a full assessment.",
    },
    {
      q: "How often is the comparison data refreshed?",
      a: "Each table shows the date its prices were checked. Private providers can change prices between checks, so treat the figures as a planning guide, not a quote.",
    },
    {
      q: "What do the charts add beyond the matrix?",
      a: "Distribution views help you see spreads and clustering across providers for the same dose band. They complement sorting in the matrix but do not replace reading provider-specific terms.",
    },
    {
      q: "Why is GPhC verification mentioned everywhere?",
      a: "Prescription-only medicines from UK routes should involve a regulated prescriber and a pharmacy accountable to UK standards. We surface GPhC registration lines to make it easier to cross-check who is supplying your medicine.",
    },
    {
      q: "If stock is short, will the matrix show it?",
      a: "Where our dataset includes stock or maintenance flags, you will see them in line with our standalone pages. Availability still changes quickly, so confirm directly with the pharmacy when you are ready to order.",
    },
    {
      q: "Can I switch between brands using only this comparison?",
      a: "Switching GLP-1 class medicines is a medical decision with titration rules and risk review. This page does not provide switching protocols. Speak to your prescriber before stopping or changing medicine.",
    },
    {
      q: "Where can I read more about methodology and safety?",
      a: "Use our methodology page for how we structure comparisons, our helpful guides hub for treatment context, and the GPhC verification guide for checking pharmacy credentials.",
    },
    {
      q: "What is the main difference between Mounjaro and Wegovy?",
      a: "They use different active ingredients. Mounjaro contains tirzepatide, which acts on both the GIP and GLP-1 receptors, while Wegovy contains semaglutide, a GLP-1 receptor agonist. Alongside the active ingredient, the dose ladder and provider pricing are the other practical differences.",
    },
    {
      q: "Are Mounjaro and Wegovy taken on the same schedule?",
      a: "Both are weekly treatments injected once a week after titration. Each still begins at a low starting dose and builds up to a maintenance dose over several weeks.",
    },
    {
      q: "Does the cheapest provider have the lowest total cost?",
      a: "Not always. A low starting price can come with a consultation fee, a delivery charge, or a higher repeat price at your maintenance dose. Compare the total monthly cost across the months you expect to be on treatment rather than the headline figure alone.",
    },
    {
      q: "Can these treatments be accessed through the NHS?",
      a: "In some cases, yes, but NHS access follows national and local pathway rules, specific eligibility criteria and service capacity, and can involve waiting lists. Availability differs by region and by medicine. Ask your GP or an NHS weight-management service whether you qualify.",
    },
    {
      q: "What should I verify before selecting a provider?",
      a: "Check that the medicine is dispensed by a registered UK pharmacy, confirm whether consultation and delivery are included, look at the maintenance price rather than only the starting price, and read the terms for repeat orders and follow-up.",
    },
    {
      q: "Can results from separate clinical trials be compared directly?",
      a: "Not reliably. Each medicine was studied in its own trial programme with different populations, durations and dosing, so comparing headline figures across studies rarely gives a fair like-for-like conclusion. Read published outcomes as context for a clinical conversation, not as a ranking.",
    },
  ],

};

export function getCompareFaqsForSlug(slug: string): CompareFaqItem[] {
  return COMPARE_PAGE_FAQS[slug] ?? [];
}

/** JSON-LD for FAQ rich results (Google may show FAQ rich results where eligible). */
export function compareFaqPageJsonLd(items: CompareFaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
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
}
