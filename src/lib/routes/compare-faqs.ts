/** FAQ copy for `/compare/[slug]` — informational only; not medical advice. */

export type CompareFaqItem = { q: string; a: string };

export const COMPARE_PAGE_FAQS: Record<string, CompareFaqItem[]> = {
  "wegovy-vs-mounjaro": [
    {
      q: "Are the prices on this page live checkout prices?",
      a: "No. Figures are illustrative snapshots based on the same structured dataset we use on our dedicated price comparison pages. Pharmacies change prices, promotions, and bundles often. Always confirm the total at checkout on the provider you choose before you pay.",
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
      a: "Each matrix shows a visible data label near the heading. We update illustrative batches periodically, but private pharmacies can move faster than our labels. Treat numbers as a planning guide, not a quote.",
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
  ],

  "mounjaro-vs-saxenda": [
    {
      q: "Why are Saxenda prices often shown per pack while Mounjaro is per pen?",
      a: "Pharmacies display Saxenda in multi-pen packs more often, while Mounjaro weekly pens are commonly listed by strength and pen price. Our Saxenda matrix includes pack-size columns so you can normalise what you are comparing.",
    },
    {
      q: "Does daily Saxenda mean higher monthly cost than weekly Mounjaro?",
      a: "Not automatically. Total monthly cost depends on pack maths, dose progression, bundled fees, and how many pens you use per month. Compare totals in each tab rather than assuming from injection frequency alone.",
    },
    {
      q: "Are these matrices suitable for NHS pricing?",
      a: "This hub focuses on illustrative private pharmacy listings in our dataset. NHS pathways and charges differ by region and eligibility. Use NHS services for entitlement questions.",
    },
    {
      q: "Can I compare side-effect risk from the price matrix?",
      a: "No. Safety information belongs in the summary of product characteristics and patient information leaflet for your prescribed medicine. This page is intentionally pricing-focused.",
    },
    {
      q: "What does “balance pick” mean in the snapshot strip?",
      a: "It highlights a provider that scores well on a blend of factors in our illustrative model, not only the lowest headline price. It is a navigation aid, not a personal recommendation.",
    },
    {
      q: "How do filters help with Saxenda pack sizes?",
      a: "Filters reduce noise when you want to compare the same pack configuration across pharmacies, which matters because per-pen economics change with pack discounts.",
    },
    {
      q: "Will delivery and cold-chain rules differ between the two tabs?",
      a: "Yes. Each medicine has manufacturer storage guidance; pharmacies also describe dispatch and packaging in their listings. Read those details before you commit, especially in warm weather.",
    },
    {
      q: "Can I trust discount preview modes?",
      a: "Discount previews show how a listed promotion might affect totals when our dataset captures it. Promotions expire and eligibility rules apply at checkout.",
    },
    {
      q: "What if my prescriber recommends a dose not listed in the matrix?",
      a: "Dose availability varies by pharmacy and current stock. Use the matrix to understand typical pricing bands, then confirm the exact strength and price on the provider your clinician recommends.",
    },
    {
      q: "Where do I verify a pharmacy is legitimate?",
      a: "Use the GPhC register for Great Britain pharmacies and follow our pharmacy safety guide for red flags when buying prescription medicines online.",
    },
  ],

  "mounjaro-vs-wegovy-vs-saxenda": [
    {
      q: "What is the fastest way to compare all three medicines here?",
      a: "Use the medicine tabs at the top to load each full dataset, then compare totals for the dose band you are discussing with your prescriber.",
    },
    {
      q: "Does this page rank which medicine is “best”?",
      a: "No. We do not score medicines clinically. We present pricing mechanics, charts, and regulatory context so you can prepare questions for a consultation.",
    },
    {
      q: "Why might weekly injections still cost more than daily ones?",
      a: "Pack pricing, titration speed, bundled consultations, and promotions all move totals. Weekly versus daily schedules describe posology, not guaranteed monthly cost.",
    },
    {
      q: "Are the three datasets identical to your standalone price pages?",
      a: "Yes. Each tab mirrors the advanced matrix and chart stack from the dedicated comparison page for that brand so you can move between hubs without learning new controls.",
    },
    {
      q: "Can I use pairwise pages instead of this three-way hub?",
      a: "Yes. Links to our Wegovy vs Mounjaro and Mounjaro vs Saxenda comparisons are provided for deeper two-way reading. There is no separate Wegovy vs Saxenda hub at present.",
    },
    {
      q: "How do I interpret chart sections for three different brands?",
      a: "Charts are scoped per tab. Compare them only after aligning dose or pack units; otherwise you may mix incompatible units.",
    },
    {
      q: "Is consultation pricing included in every row?",
      a: "Where our dataset captures consultation or subscription lines, they appear in the columns described on each matrix. If a fee is missing, assume you must confirm it on the provider site.",
    },
    {
      q: "What should I do if prices moved since the data label date?",
      a: "Treat listings as indicative. Re-check live checkout, especially before repeat orders, and ask the pharmacy to confirm the strength and quantity you need.",
    },
    {
      q: "Does Health Wise endorse a specific pharmacy?",
      a: "No. We are an independent comparison publisher. Any “cheapest” or “balance” labels are derived from our illustrative rulesets, not paid placement.",
    },
  ],

  "best-weight-loss-treatments-uk": [
    {
      q: "What does this hub cover that individual brand pages do not?",
      a: "It places three full comparison workspaces behind one navigation flow so you can switch medicines without losing matrix behaviour. Content is otherwise aligned to our standalone hubs.",
    },
    {
      q: "Is there a single “cheapest injection” for the UK?",
      a: "There is no universal winner. Cheapest depends on dose, pack, bundled fees, and promotions. Our cheapest options guide explains how to think about total cost of care holistically.",
    },
    {
      q: "Why might Wegovy, Mounjaro, and Saxenda all appear in one menu?",
      a: "They are commonly searched private weight-management options in the UK. Licensing, eligibility, and posology differ. This page helps you compare pricing tools; suitability is clinical.",
    },
    {
      q: "Can I sort all three medicines in one combined matrix?",
      a: "No. Each medicine uses different pack and dose columns. Keep comparisons within each tab, then step back to total monthly estimates for your situation.",
    },
    {
      q: "How do I account for titration when comparing monthly spend?",
      a: "Early months on a lower dose may cost less than maintenance months. Project forward using the dose columns you expect to stay on after review with your prescriber.",
    },
    {
      q: "Are charts comparable across tabs?",
      a: "Only when you interpret them per medicine. Do not overlay Saxenda pack charts onto weekly pen charts without normalising units.",
    },
    {
      q: "What if I need NHS rather than private supply?",
      a: "NHS access depends on local policy and eligibility. This hub does not predict NHS availability. Discuss with your GP or specialist NHS weight-management services.",
    },
    {
      q: "Do you include international pharmacies?",
      a: "Our comparison focus is UK-regulated supply routes consistent with our methodology. Avoid unverified sellers even if they appear cheaper.",
    },
    {
      q: "Why are GPhC lines repeated in each tab?",
      a: "They are part of the full workspace for each brand. Repeating them keeps the experience identical to visiting each standalone comparison page.",
    },
    {
      q: "Where can I read next steps after comparing prices?",
      a: "Explore our helpful guides for lifestyle and treatment context, the methodology page for how we build matrices, and pharmacy verification steps before you pay.",
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
