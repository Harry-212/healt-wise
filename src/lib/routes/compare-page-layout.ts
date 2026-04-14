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
  bestChoiceBody: string;
};

const OG = "/logo-health-wise.webp";

export const COMPARE_PAGE_LAYOUT: Record<string, ComparePageLayoutConfig> = {
  "wegovy-vs-mounjaro": {
    medications: ["wegovy", "mounjaro"],
    hero: {
      variant: "violet",
      eyebrow: "Treatment comparison",
      titleItalic: "Compare",
      titleBold: "Wegovy vs Mounjaro",
      subtitle:
        "Side-by-side UK pharmacy prices, charts, and context — same data as our dedicated price pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "What is Wegovy" },
        { href: "/what-is-mounjaro", label: "What is Mounjaro" },
        { href: "#compare-med-tabs", label: "Prices" },
      ],
    },
    share: {
      canonicalPath: "/compare/wegovy-vs-mounjaro",
      title:
        "Wegovy vs Mounjaro UK (2026): prices, differences & safest options",
      metaDescription:
        "Compare Wegovy and Mounjaro with real UK pharmacy price tables, charts, and GPhC context. Independent snapshot — same data as our price comparison tools.",
      openGraphTitle:
        "Wegovy vs Mounjaro UK (2026) — live-style price tables | Health Wise",
      openGraphDescription:
        "Interactive Wegovy and Mounjaro UK tables: filter, sort, discount mode, and charts in one comparison hub.",
      imagePath: OG,
      imageAlt: "Health Wise — Wegovy vs Mounjaro UK comparison",
    },
    intro: {
      heading: "Why compare on price data?",
      body: [
        "Wegovy (semaglutide) and Mounjaro (tirzepatide) are both injectable weight-management medicines used in eligible UK adults, but dosing schedules, titration, and monthly spend patterns differ.",
        "Use the tabs below to open the full advanced table and charts for each brand — identical datasets to our standalone price comparison pages so you can switch context without losing fidelity.",
      ],
    },
    effectivenessTitle: "Effectiveness snapshot",
    effectivenessBody:
      "Trial programmes and real-world outcomes differ by population, dose, and adherence. Mounjaro trials often report higher average weight change at comparable horizons in some studies; individual response varies. Discuss evidence and your goals with a prescriber — this hub is not medical advice.",
    sideEffectsTitle: "Side effects & tolerance",
    sideEffectsBody:
      "Both medicines commonly cause gastrointestinal symptoms early on; gallbladder, pancreatitis, and other risks are in the official patient information. Read the PIL for your medicine and our treatment guides before starting or switching.",
    bestChoiceBody:
      "The better option depends on eligibility, tolerability, cost stability after titration, and prescriber preference. Compare total monthly cost (consultation + delivery + medication) in the tables, then confirm live pricing and supply on the pharmacy you choose.",
  },
  "mounjaro-vs-saxenda": {
    medications: ["mounjaro", "saxenda"],
    hero: {
      variant: "teal",
      eyebrow: "Treatment comparison",
      titleItalic: "Compare",
      titleBold: "Mounjaro vs Saxenda",
      subtitle:
        "Weekly GIP/GLP-1 vs daily GLP-1 — UK pack prices, filters, and charts in one place.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-mounjaro", label: "What is Mounjaro" },
        { href: "/what-is-saxenda", label: "What is Saxenda" },
        { href: "#compare-med-tabs", label: "Prices" },
      ],
    },
    share: {
      canonicalPath: "/compare/mounjaro-vs-saxenda",
      title:
        "Mounjaro vs Saxenda UK (2026): prices, dosing context & providers",
      metaDescription:
        "Compare Mounjaro pen pricing with Saxenda multi-pack prices across UK pharmacies. Full tables, charts, and GPhC safety context — same engine as our price pages.",
      openGraphTitle:
        "Mounjaro vs Saxenda UK (2026) — interactive pharmacy tables | Health Wise",
      openGraphDescription:
        "Switch between Mounjaro and Saxenda datasets: sort, filter, discount mode, and pack-size columns for Saxenda.",
      imagePath: OG,
      imageAlt: "Health Wise — Mounjaro vs Saxenda UK comparison",
    },
    intro: {
      heading: "Different medicines, different pack maths",
      body: [
        "Mounjaro is typically a once-weekly injection with strengths from 2.5 mg upward; Saxenda (liraglutide) is usually daily, with pricing often shown per pack of pens.",
        "Below you can jump between the same advanced Mounjaro and Saxenda comparison tables we maintain on our dedicated price pages — ideal if you are weighing upfront cost, titration path, and prescriber availability.",
      ],
    },
    effectivenessTitle: "Effectiveness & use patterns",
    effectivenessBody:
      "Headline trial results and licensing indications are not interchangeable. Mounjaro and Saxenda have different posology and titration rules. Your prescriber will assess BMI, comorbidities, and prior GLP-1 experience — use this page for pricing structure, not treatment decisions.",
    sideEffectsTitle: "Safety & monitoring",
    sideEffectsBody:
      "Nausea, reflux, and injection-site issues are frequent discussion points for both classes. Saxenda and Mounjaro have distinct risk sections in their summaries of product characteristics — always read the PIL supplied with your medicine.",
    bestChoiceBody:
      "Cost is only one variable: injection frequency, titration burden, stock availability, and personal tolerance often matter as much as the headline pen or pack price. Compare totals in each tab, then validate eligibility and live quotes with a regulated UK prescriber or pharmacy.",
  },
  "best-weight-loss-injections-uk": {
    medications: ["wegovy", "mounjaro", "saxenda"],
    hero: {
      variant: "blue",
      eyebrow: "UK GLP-1 comparison hub",
      titleItalic: "Compare",
      titleBold: "Weight loss injections UK",
      subtitle:
        "Wegovy, Mounjaro, and Saxenda — three full price datasets with the same tools as our standalone compare pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "Wegovy" },
        { href: "/what-is-mounjaro", label: "Mounjaro" },
        { href: "/what-is-saxenda", label: "Saxenda" },
        { href: "#compare-med-tabs", label: "Prices" },
      ],
    },
    share: {
      canonicalPath: "/compare/best-weight-loss-injections-uk",
      title:
        "Best weight loss injections UK (2026) — compare Wegovy, Mounjaro & Saxenda prices",
      metaDescription:
        "One hub for UK Wegovy, Mounjaro, and Saxenda pharmacy comparisons: advanced tables, charts, filters, and GPhC context. Independent snapshot — updated 2026.",
      openGraphTitle:
        "Best weight loss injections UK (2026) — three live-style tables | Health Wise",
      openGraphDescription:
        "Tab between Wegovy, Mounjaro, and Saxenda with full comparison tables and chart sections.",
      imagePath: OG,
      imageAlt: "Health Wise — UK weight loss injection comparison",
    },
    intro: {
      heading: "One hub, three medicines",
      body: [
        "If you are evaluating UK private weight-management injections, headline brand names are only the start — monthly spend changes with dose, pack size, and whether consultations are bundled.",
        "Use the tabs to load our full comparison experience for each medicine. Each tab mirrors the dedicated price comparison page so pharmacists, patients, and carers can explore consistently.",
      ],
    },
    effectivenessTitle: "Which injection is “best”?",
    effectivenessBody:
      "There is no universal winner: NICE-aligned eligibility, tolerability, and prescriber experience steer choice. Trial data and SmPCs differ between once-weekly semaglutide or tirzepatide and daily liraglutide. This page helps you compare pricing mechanics; clinical suitability belongs in consultation.",
    sideEffectsTitle: "Side effects & commitments",
    sideEffectsBody:
      "All three medicines require ongoing medical supervision. GI side effects are common early; rare serious risks are described in official materials. Links in the footer connect to our deeper safety and methodology content.",
    bestChoiceBody:
      "Start with total cost of care (assessment + medicine + delivery), then narrow by cold-chain confidence and follow-up support. When you are ready, cross-check GPhC registration and confirm live prices on the provider’s site.",
  },
};
