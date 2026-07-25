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

  "wegovy-vs-saxenda": [
    {
      q: "Why compare Wegovy and Saxenda on the same page?",
      a: "Both are GLP-1 prescription options used in eligible UK adults, but Wegovy is typically weekly while Saxenda is usually daily. This hub lets you tab between full UK listing tables without mixing datasets.",
    },
    {
      q: "Does weekly Wegovy always cost less than daily Saxenda?",
      a: "Not necessarily. Monthly totals depend on dose step, pack size, consultation fees, and delivery. Compare like-for-like totals in each tab rather than assuming from injection frequency alone.",
    },
    {
      q: "Are the prices live checkout quotes?",
      a: "No. Figures are illustrative snapshots from the same structured datasets as our dedicated price pages. Always confirm the total at checkout before you pay.",
    },
    {
      q: "Can I use this page to choose between Wegovy and Saxenda?",
      a: "No. Eligibility, contraindications, and monitoring are clinical decisions for a registered prescriber. Use this page for pricing structure and pharmacy context only.",
    },
    {
      q: "How are Saxenda packs shown differently from Wegovy pens?",
      a: "Saxenda is often listed in multi-pen packs, while Wegovy is commonly listed by weekly strength and pen price. Use pack-size and dose columns to normalise what you are comparing.",
    },
    {
      q: "Will delivery and cold-chain rules differ between the tabs?",
      a: "Yes. Each medicine has manufacturer storage guidance, and pharmacies describe dispatch and packaging differently. Read those details before you commit.",
    },
    {
      q: "Are these matrices suitable for NHS pricing?",
      a: "This hub focuses on illustrative private pharmacy listings. NHS pathways and charges differ by region and eligibility.",
    },
    {
      q: "What if my prescribed dose is not listed?",
      a: "Dose availability varies by pharmacy and stock. Use the matrix for typical pricing bands, then confirm the exact strength and price with your clinician’s recommended provider.",
    },
    {
      q: "Can I trust discount preview modes?",
      a: "Discount previews show how a listed promotion might affect totals when our dataset captures it. Promotions expire and eligibility rules apply at checkout.",
    },
    {
      q: "Where do I verify a pharmacy is legitimate?",
      a: "Use the GPhC register for Great Britain pharmacies and follow our pharmacy safety guide for red flags when buying prescription medicines online.",
    },
  ],

  "mounjaro-vs-wegovy-vs-saxenda": [
    {
      q: "What is the main difference between Mounjaro, Wegovy and Saxenda?",
      a: "They use different active ingredients. Mounjaro contains tirzepatide, which acts on both the GIP and GLP-1 receptors; Wegovy contains semaglutide and Saxenda contains liraglutide, which are GLP-1 receptor agonists. Alongside the active ingredient, the dosing schedule and provider pricing are the other practical differences.",
    },
    {
      q: "Are Mounjaro and Wegovy taken on the same schedule?",
      a: "Both Mounjaro and Wegovy are weekly treatments injected once a week after titration, while Saxenda is a daily treatment injected once a day. Each still begins at a low starting dose and builds up to a maintenance dose over several weeks.",
    },
    {
      q: "Why can treatment prices vary between providers?",
      a: "Provider pricing reflects how each pharmacy packages the medicine, consultation, follow-up and delivery. The same strength can be listed at different prices because some providers bundle these costs and others add them separately at checkout.",
    },
    {
      q: "Does the cheapest provider have the lowest total cost?",
      a: "Not always. A low starting price can come with a consultation fee, a delivery charge, or a higher repeat price at your maintenance dose. Compare the total monthly cost across the months you expect to be on treatment rather than the headline figure alone.",
    },
    {
      q: "Why can weekly treatments cost more than daily treatments?",
      a: "A weekly pen can carry a higher price per unit than a daily pen, but that does not decide the monthly total on its own. Pack size, dose escalation, and bundled consultation or delivery fees all affect the final cost, so a weekly treatment is not automatically more or less expensive than a daily one.",
    },
    {
      q: "Are consultation and delivery included?",
      a: "It depends on the provider. Where our dataset captures a consultation, subscription or delivery line, it appears alongside the medicine price. If a fee is not shown, assume you need to confirm it on the provider's own checkout before paying.",
    },
    {
      q: "Can these treatments be accessed through the NHS?",
      a: "In some cases, yes, but NHS access follows national and local pathway rules, specific eligibility criteria and service capacity, and can involve waiting lists. Availability differs by region and by medicine. Ask your GP or an NHS weight-management service whether you qualify.",
    },
    {
      q: "Does Healthwise360 recommend one treatment?",
      a: "No. Healthwise360 is an independent comparison publisher and does not recommend a specific medicine or pharmacy. We present the differences and pricing so you can prepare for a consultation; the decision belongs to a registered UK prescriber.",
    },
    {
      q: "How often are provider prices checked?",
      a: "Datasets are reviewed periodically and each one carries a visible last-checked label. Private pharmacies can change prices faster than our labels, so treat the figures as a planning guide and confirm the live total before you pay.",
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
