import type { PageShareMetadataInput } from "@/lib/seo/share-metadata";

export type CompareMedicationTab = "wegovy" | "mounjaro" | "saxenda";

/** Matches `HeroShaderVariant` in `@/components/ui/hero-shader` (avoid server → client type import). */
export type CompareHeroShaderVariant = "teal" | "violet" | "blue";

export type ComparePageLayoutConfig = {
  medications: CompareMedicationTab[];
  hero: {
    variant: CompareHeroShaderVariant;
    eyebrow: string;
    titleItalic: string;
    titleBold: string;
    subtitle: string;
    /** Short line under pill e.g. "Snapshot · April 2026" */
    snapshotLabel: string;
    navLinks: { href: string; label: string }[];
  };
  share: PageShareMetadataInput;
  /** Intro under TrustBar — HTML-free short lines */
  intro: {
    heading: string;
    body: string[];
  };
  effectivenessTitle: string;
  effectivenessBody: string;
  sideEffectsTitle: string;
  sideEffectsBody: string;
  bestChoiceTitle?: string;
  bestChoiceBody: string;
};

const OG = "/logo-health-wise.webp";

export const COMPARE_PAGE_LAYOUT: Record<string, ComparePageLayoutConfig> = {
  "wegovy-vs-mounjaro": {
    medications: ["wegovy", "mounjaro"],
    hero: {
      variant: "violet",
      eyebrow: "Treatment Comparison",
      titleItalic: "Compare",
      titleBold: "Mounjaro vs Wegovy",
      subtitle:
        "Side-by-side UK pharmacy prices, charts, and context — same data as our dedicated price pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "What Is Wegovy" },
        { href: "/what-is-mounjaro", label: "What Is Mounjaro" },
        { href: "#compare-med-tabs", label: "Matrix" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/wegovy-vs-mounjaro",
      title: "Mounjaro vs Wegovy UK | Cost, Results & Side Effects",
      metaDescription:
        "Compare Mounjaro and Wegovy in the UK by active ingredient, dosing, weight-loss evidence, side effects, eligibility and private costs.",
      openGraphTitle: "Mounjaro vs Wegovy UK | Cost, Results & Side Effects",
      openGraphDescription:
        "Compare Mounjaro and Wegovy in the UK by active ingredient, dosing, weight-loss evidence, side effects, eligibility and private costs.",
      imagePath: OG,
      imageAlt: "Healthwise360 — Mounjaro vs Wegovy UK comparison",
    },
    intro: {
      heading: "Why Compare On Price Data?",
      body: [
        "Wegovy (semaglutide) and Mounjaro (tirzepatide) are both pen-based weight-management treatments used in eligible UK adults, but dosing schedules, titration, and monthly spend patterns differ.",
        "Use the comparison tabs at the top of this page to open the full advanced table and charts for each brand — identical datasets to our standalone price comparison pages so you can switch context without losing fidelity.",
      ],
    },
    effectivenessTitle: "Effectiveness Snapshot",
    effectivenessBody:
      "Trial programmes and real-world outcomes differ by population, dose, and adherence. Mounjaro trials often report higher average weight change at comparable horizons in some studies; individual response varies. Discuss evidence and your goals with a prescriber — this hub is not medical advice.",
    sideEffectsTitle: "Side Effects & Tolerance",
    sideEffectsBody:
      "Both medicines commonly cause gastrointestinal symptoms early on; gallbladder, pancreatitis, and other risks are in the official patient information. Read the PIL for your medicine and our treatment guides before starting or switching.",
    bestChoiceBody:
      "The better option depends on eligibility, tolerability, cost stability after titration, and prescriber preference. Compare total monthly cost (consultation + delivery + medication) in the tables, then confirm live pricing and supply on the pharmacy you choose.",
  },
  "mounjaro-vs-saxenda": {
    medications: ["mounjaro", "saxenda"],
    hero: {
      variant: "teal",
      eyebrow: "Treatment Comparison",
      titleItalic: "Compare",
      titleBold: "Mounjaro vs Saxenda",
      subtitle:
        "Weekly GIP/GLP-1 vs daily GLP-1 — UK pack prices, filters, and charts in one place.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-mounjaro", label: "What Is Mounjaro" },
        { href: "/what-is-saxenda", label: "What Is Saxenda" },
        { href: "#compare-med-tabs", label: "Matrix" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/mounjaro-vs-saxenda",
      title: "Mounjaro vs Saxenda UK | Cost, Results & Dosing",
      metaDescription:
        "Compare Mounjaro and Saxenda in the UK by dosing schedule, weight-loss evidence, side effects, eligibility, availability and private cost.",
      openGraphTitle: "Mounjaro vs Saxenda UK | Cost, Results & Dosing",
      openGraphDescription:
        "Compare Mounjaro and Saxenda in the UK by dosing schedule, weight-loss evidence, side effects, eligibility, availability and private cost.",
      imagePath: OG,
      imageAlt: "Healthwise360 — Mounjaro vs Saxenda UK comparison",
    },
    intro: {
      heading: "Different Medicines, Different Pack Maths",
      body: [
        "Mounjaro is typically a once-weekly treatment with strengths from 2.5 mg upward; Saxenda (liraglutide) is usually daily, with pricing often shown per pack of pens.",
        "At the top of this page you can switch between the same advanced Mounjaro and Saxenda comparison tables we maintain on our dedicated price pages — ideal if you are weighing upfront cost, titration path, and prescriber availability.",
      ],
    },
    effectivenessTitle: "Effectiveness & Use Patterns",
    effectivenessBody:
      "Headline trial results and licensing indications are not interchangeable. Mounjaro and Saxenda have different posology and titration rules. Your prescriber will assess BMI, comorbidities, and prior GLP-1 experience — use this page for pricing structure, not treatment decisions.",
    sideEffectsTitle: "Safety & Monitoring",
    sideEffectsBody:
      "Nausea, reflux, and local site reactions from treatment are frequent discussion points for both classes. Saxenda and Mounjaro have distinct risk sections in their summaries of product characteristics — always read the PIL supplied with your medicine.",
    bestChoiceBody:
      "Cost is only one variable: treatment frequency, titration burden, stock availability, and personal tolerance often matter as much as the headline pen or pack price. Compare totals in each tab, then validate eligibility and live quotes with a regulated UK prescriber or pharmacy.",
  },
  "wegovy-vs-saxenda": {
    medications: ["wegovy", "saxenda"],
    hero: {
      variant: "blue",
      eyebrow: "Treatment Comparison",
      titleItalic: "Compare",
      titleBold: "Wegovy vs Saxenda",
      subtitle:
        "Weekly semaglutide vs daily liraglutide — UK pack prices, filters, and charts in one place.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "What Is Wegovy" },
        { href: "/what-is-saxenda", label: "What Is Saxenda" },
        { href: "#compare-med-tabs", label: "Matrix" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/wegovy-vs-saxenda",
      title: "Wegovy vs Saxenda UK | Cost, Results & Dosing",
      metaDescription:
        "Compare Wegovy and Saxenda in the UK by weekly or daily dosing, clinical evidence, side effects, eligibility and private treatment costs.",
      openGraphTitle: "Wegovy vs Saxenda UK | Cost, Results & Dosing",
      openGraphDescription:
        "Compare Wegovy and Saxenda in the UK by weekly or daily dosing, clinical evidence, side effects, eligibility and private treatment costs.",
      imagePath: OG,
      imageAlt: "Healthwise360 — Wegovy vs Saxenda UK comparison",
    },
    intro: {
      heading: "Weekly Vs Daily GLP-1 Options",
      body: [
        "Wegovy (semaglutide) is typically a once-weekly pen, while Saxenda (liraglutide) is usually injected daily, with pricing often shown per pack of pens.",
        "Use the comparison tabs at the top of this page to open the same advanced tables and charts we maintain on our dedicated price pages — useful when weighing dosing schedule, titration path, and private cost.",
      ],
    },
    effectivenessTitle: "Effectiveness & Use Patterns",
    effectivenessBody:
      "Headline trial results and licensing indications are not interchangeable. Wegovy and Saxenda have different posology and titration rules. Your prescriber will assess BMI, comorbidities, and prior GLP-1 experience — use this page for pricing structure, not treatment decisions.",
    sideEffectsTitle: "Safety & Monitoring",
    sideEffectsBody:
      "Nausea, reflux, and local site reactions are frequent discussion points for both medicines. Each has distinct risk sections in its summary of product characteristics — always read the PIL supplied with your medicine.",
    bestChoiceBody:
      "Cost is only one variable: treatment frequency, titration burden, stock availability, and personal tolerance often matter as much as the headline pen or pack price. Compare totals in each tab, then validate eligibility and live quotes with a regulated UK prescriber or pharmacy.",
  },
  "mounjaro-vs-wegovy-vs-saxenda": {
    medications: ["mounjaro", "wegovy", "saxenda"],
    hero: {
      variant: "violet",
      eyebrow: "Three-Way UK Comparison",
      titleItalic: "",
      titleBold: "Compare Mounjaro, Wegovy and Saxenda in the UK",
      subtitle:
        "Compare active ingredients, dosing schedules, clinical evidence, eligibility, side effects and current UK provider prices.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-mounjaro", label: "Mounjaro" },
        { href: "/what-is-wegovy", label: "Wegovy" },
        { href: "/what-is-saxenda", label: "Saxenda" },
        { href: "#compare-med-tabs", label: "Prices" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/mounjaro-vs-wegovy-vs-saxenda",
      title: "Mounjaro vs Wegovy vs Saxenda UK | Prices & Differences",
      metaDescription:
        "Compare Mounjaro, Wegovy and Saxenda in the UK by active ingredient, dosing, clinical evidence, side effects, eligibility and current provider prices.",
      openGraphTitle: "Mounjaro vs Wegovy vs Saxenda UK | Prices & Differences",
      openGraphDescription:
        "Compare Mounjaro, Wegovy and Saxenda in the UK by active ingredient, dosing, clinical evidence, side effects, eligibility and current provider prices.",
      imagePath: OG,
      imageAlt:
        "Healthwise360 — Mounjaro vs Wegovy vs Saxenda UK comparison",
    },
    intro: {
      heading: "Active Ingredients and How They Work",
      body: [
        "Mounjaro uses tirzepatide (dual GIP/GLP-1 receptor agonist). Wegovy uses semaglutide (GLP-1 receptor agonist). Saxenda uses liraglutide (GLP-1 receptor agonist). These treatment differences shape appetite signalling, titration plans, and how pharmacies quote pens or packs.",
        "Use this hub to compare Mounjaro, Wegovy and Saxenda side by side, then confirm suitability with a UK registered prescriber.",
      ],
    },
    effectivenessTitle: "Clinical Evidence",
    effectivenessBody:
      "Published programmes report average outcomes that vary by medicine, dose, trial population, and adherence. Clinical evidence is not a ranking of which option is “best” for you. Pair study context with dosing schedules, tolerability, and total treatment cost before decisions with your clinician.",
    sideEffectsTitle: "Side Effects",
    sideEffectsBody:
      "Gastrointestinal symptoms are common early across these therapies. Pancreatitis, gallbladder disease, and other risks appear in each summary of product characteristics. Daily versus weekly dosing schedules change counselling points — always read the PIL for the medicine you are prescribed.",
    bestChoiceTitle: "Consultation and Delivery Costs",
    bestChoiceBody:
      "Total treatment cost usually includes assessment or consultation fees, delivery or cold-chain charges, follow-up, and the medicine itself. Compare illustrative pharmacy rows in the tabs above, then confirm live checkout totals, eligibility criteria, and NHS versus private access options with a regulated provider.",
  },
  "best-weight-loss-treatments-uk": {
    medications: ["mounjaro", "wegovy", "saxenda"],
    hero: {
      variant: "blue",
      eyebrow: "UK GLP-1 Comparison Hub",
      titleItalic: "Compare",
      titleBold: "Weight Loss Treatments UK",
      subtitle:
        "Wegovy, Mounjaro, and Saxenda — three full price datasets with the same tools as our standalone compare pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-mounjaro", label: "Mounjaro" },
        { href: "/what-is-wegovy", label: "Wegovy" },
        { href: "/what-is-saxenda", label: "Saxenda" },
        { href: "#compare-med-tabs", label: "Matrix" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/best-weight-loss-treatments-uk",
      title:
        "UK weight loss treatments hub (2026): Wegovy, Mounjaro & Saxenda compared",
      metaDescription:
        "Start here for private UK GLP-1 listings: open dedicated tabs for Wegovy, Mounjaro, and Saxenda with advanced filters, chart views, and safety context. Helps you compare total cost patterns before you shortlist a GPhC-registered provider.",
      openGraphTitle:
        "UK GLP-1 hub — Wegovy, Mounjaro & Saxenda price tabs | Health Wise",
      openGraphDescription:
        "One landing page, three deep-dive tables: compare illustrative pen and pack pricing without mixing datasets.",
      imagePath: OG,
      imageAlt: "Health Wise — UK weight loss treatment comparison",
    },
    intro: {
      heading: "One Hub, Three Medicines",
      body: [
        "If you are evaluating UK private weight-management treatments, headline brand names are only the start — monthly spend changes with dose, pack size, and whether consultations are bundled.",
        "The tabs at the top of this page load our full comparison experience for each medicine. Each tab mirrors the dedicated price comparison page so pharmacists, patients, and carers can explore consistently.",
      ],
    },
    effectivenessTitle: "Which Treatment Is “Best”?",
    effectivenessBody:
      "There is no universal winner: NICE-aligned eligibility, tolerability, and prescriber experience steer choice. Trial data and SmPCs differ between once-weekly semaglutide or tirzepatide and daily liraglutide. This page helps you compare pricing mechanics; clinical suitability belongs in consultation.",
    sideEffectsTitle: "Side Effects & Commitments",
    sideEffectsBody:
      "All three medicines require ongoing medical supervision. GI side effects are common early; rare serious risks are described in official materials. Links in the footer connect to our deeper safety and methodology content.",
    bestChoiceBody:
      "Start with total cost of care (assessment + medicine + delivery), then narrow by cold-chain confidence and follow-up support. When you are ready, cross-check GPhC registration and confirm live prices on the provider’s site.",
  },
};
