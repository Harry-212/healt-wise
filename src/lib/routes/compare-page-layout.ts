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
      eyebrow: "Treatment Comparison",
      titleItalic: "Compare",
      titleBold: "Wegovy vs Mounjaro",
      subtitle:
        "Side-by-side UK pharmacy prices, charts, and context — same data as our dedicated price pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "What Is Wegovy" },
        { href: "/what-is-mounjaro", label: "What Is Mounjaro" },
        { href: "#compare-med-tabs", label: "Prices" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/wegovy-vs-mounjaro",
      title:
        "Wegovy vs Mounjaro UK (2026): semaglutide vs tirzepatide price comparison",
      metaDescription:
        "Side-by-side UK pharmacy-style tables for Wegovy (once-weekly semaglutide) and Mounjaro (once-weekly tirzepatide): sort by dose, spot starter vs maintenance spend, and cross-check regulated providers. Research snapshot—not prescribing advice.",
      openGraphTitle:
        "Semaglutide vs tirzepatide UK tables — Wegovy & Mounjaro | Health Wise",
      openGraphDescription:
        "One page to tab between full Wegovy and Mounjaro datasets: filters, charts, and illustrative monthly patterns before you confirm live checkout prices.",
      imagePath: OG,
      imageAlt: "Health Wise — Wegovy vs Mounjaro UK comparison",
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
        { href: "#compare-med-tabs", label: "Prices" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/mounjaro-vs-saxenda",
      title:
        "Mounjaro vs Saxenda UK (2026): weekly pen vs daily liraglutide packs",
      metaDescription:
        "Compare once-weekly Mounjaro (tirzepatide) with daily Saxenda (liraglutide): different pack maths, pen counts, and titration paths—shown with full UK listing tables and charts. Illustrative figures; verify with your pharmacy.",
      openGraphTitle:
        "Weekly Mounjaro vs daily Saxenda — UK price tables | Health Wise",
      openGraphDescription:
        "Tab between advanced tables: Mounjaro strengths vs Saxenda multi-pen packs, with sortable columns and discount preview modes.",
      imagePath: OG,
      imageAlt: "Health Wise — Mounjaro vs Saxenda UK comparison",
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
  "mounjaro-vs-wegovy-vs-saxenda": {
    medications: ["mounjaro", "wegovy", "saxenda"],
    hero: {
      variant: "violet",
      eyebrow: "Three-Way UK Comparison",
      titleItalic: "Compare",
      titleBold: "Mounjaro vs Wegovy vs Saxenda",
      subtitle:
        "Live pharmacy tables first — same advanced tools for each brand — plus a structured overview further down the page.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "#triple-comparison-overview", label: "At A Glance" },
        { href: "/what-is-mounjaro", label: "Mounjaro" },
        { href: "/what-is-wegovy", label: "Wegovy" },
        { href: "/what-is-saxenda", label: "Saxenda" },
        { href: "#compare-med-tabs", label: "Prices" },
        { href: "#compare-faq", label: "FAQ" },
      ],
    },
    share: {
      canonicalPath: "/compare/mounjaro-vs-wegovy-vs-saxenda",
      title:
        "Mounjaro vs Wegovy vs Saxenda UK (2026): three-medicine price navigator",
      metaDescription:
        "Navigate UK private listings across tirzepatide (Mounjaro), semaglutide (Wegovy), and liraglutide (Saxenda): three full tabbed tables plus an on-page overview of treatment schedule and pack differences. Comparator only—not treatment guidance.",
      openGraphTitle:
        "Three GLP-1 options UK — Mounjaro, Wegovy, Saxenda tables | Health Wise",
      openGraphDescription:
        "Switch tabs for each medicine’s full comparison workspace, then use filters and charts to compare like-for-like doses and packs.",
      imagePath: OG,
      imageAlt:
        "Health Wise — Mounjaro vs Wegovy vs Saxenda UK comparison",
    },
    intro: {
      heading: "Why Read A Three-Way Comparison?",
      body: [
        "Mounjaro (tirzepatide), Wegovy (semaglutide), and Saxenda (liraglutide) are all prescription weight-management options used in eligible UK adults, but they differ in receptor profile, treatment frequency, titration, and how pharmacies quote pens or packs.",
        "The live comparison tables at the top of this page use the same advanced datasets as our standalone price pages — switch tabs to explore each brand in full detail. Further down, a structured overview highlights structural differences without replacing medical judgement.",
      ],
    },
    effectivenessTitle: "Effectiveness In Context",
    effectivenessBody:
      "Trial programmes, licensing, and individual response are not interchangeable across these medicines. Headline weight outcomes from studies cannot be mapped directly to your situation. Use this hub to understand pricing and pack mechanics, then discuss goals, contraindications, and monitoring with a prescriber.",
    sideEffectsTitle: "Side Effects & Commitments",
    sideEffectsBody:
      "Gastrointestinal symptoms are common early on across GLP-1 therapies; pancreatitis, gallbladder disease, and other risks are described in each summary of product characteristics. Saxenda’s daily schedule and Mounjaro’s dual agonism carry different counselling points — always read the PIL for the medicine you are actually prescribed.",
    bestChoiceBody:
      "There is no universal “winner”: eligibility, tolerability, treatment schedule, and total cost of care (assessment + medicine + follow-up) steer choice. Compare illustrative totals in each tab, cross-check GPhC registration, and confirm live checkout prices before you pay.",
  },
  "best-weight-loss-treatments-uk": {
    medications: ["wegovy", "mounjaro", "saxenda"],
    hero: {
      variant: "blue",
      eyebrow: "UK GLP-1 Comparison Hub",
      titleItalic: "Compare",
      titleBold: "Weight Loss Treatments UK",
      subtitle:
        "Wegovy, Mounjaro, and Saxenda — three full price datasets with the same tools as our standalone compare pages.",
      snapshotLabel: "Illustrative UK snapshot · verify live before you pay",
      navLinks: [
        { href: "/what-is-wegovy", label: "Wegovy" },
        { href: "/what-is-mounjaro", label: "Mounjaro" },
        { href: "/what-is-saxenda", label: "Saxenda" },
        { href: "#compare-med-tabs", label: "Prices" },
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
