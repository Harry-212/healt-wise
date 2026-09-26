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
  /** Three pair-specific fact cards under the intro (two-medicine pages). */
  keyFacts?: { title: string; body: string }[];
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
      snapshotLabel: "Prices checked on the dates shown · confirm with the provider before you pay",
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
      heading: "Choosing Between Mounjaro And Wegovy",
      body: [
        "Wegovy (semaglutide) and Mounjaro (tirzepatide) are both pen-based weight-management treatments used in eligible UK adults, but dosing schedules, titration, and monthly spend patterns differ.",
        "The tabs above hold the full Wegovy and Mounjaro price tables. Because both are weekly pens that cover four weeks, their prices can be compared pen for pen at the strength you are prescribed.",
      ],
    },
    keyFacts: [
      {
        title: "Different Active Ingredients",
        body: "Wegovy contains semaglutide, a GLP-1 receptor agonist. Mounjaro contains tirzepatide, which acts on both the GIP and GLP-1 receptors.",
      },
      {
        title: "Same Weekly Rhythm",
        body: "Both are injected once a week, and each pen holds four weekly doses, so one pen covers about four weeks at a given strength.",
      },
      {
        title: "Different Dose Ladders",
        body: "Wegovy steps up from 0.25 mg towards 2.4 mg, and some providers also list 7.2 mg. Mounjaro rises from 2.5 mg in 2.5 mg steps up to 15 mg.",
      },
    ],
    effectivenessTitle: "Effectiveness Snapshot",
    effectivenessBody:
      "Trial programmes and real-world outcomes differ by population, dose, and adherence. Mounjaro trials often report higher average weight change at comparable horizons in some studies; individual response varies. Discuss evidence and your goals with a prescriber — this hub is not medical advice.",
    sideEffectsTitle: "Side Effects & Tolerance",
    sideEffectsBody:
      "Both medicines commonly cause gastrointestinal symptoms early on; gallbladder, pancreatitis, and other risks are in the official patient information. Read the PIL for your medicine and our treatment guides before starting or switching.",
    bestChoiceBody:
      "The better option depends on eligibility, tolerability, cost stability after titration, and prescriber preference. Compare the pen price at the strength you expect to stay on, add any consultation or delivery charge, then confirm the final total and supply with the provider you choose.",
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
      snapshotLabel: "Prices checked on the dates shown · confirm with the provider before you pay",
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
        "Switch tabs above to see Mounjaro pen prices and Saxenda pack prices. Because one is a weekly pen and the other a daily multi-pen pack, compare the cost of a month rather than a single item.",
      ],
    },
    keyFacts: [
      {
        title: "Weekly Vs Daily",
        body: "Mounjaro (tirzepatide) is injected once a week. Saxenda (liraglutide) is injected once a day.",
      },
      {
        title: "Pens Vs Packs",
        body: "A Mounjaro pen holds four weekly doses of one strength. A Saxenda pen holds 18 mg, so at the 3 mg daily dose it lasts six days — which is why Saxenda is usually sold in packs of 3 or 5 pens.",
      },
      {
        title: "Titration Pace",
        body: "Saxenda starts at 0.6 mg a day and usually rises by 0.6 mg each week to 3 mg. Mounjaro starts at 2.5 mg and rises in 2.5 mg steps no sooner than every four weeks.",
      },
    ],
    effectivenessTitle: "Evidence In Context",
    effectivenessBody:
      "Mounjaro and Saxenda were studied in separate trial programmes with different populations, durations and doses, so headline weight-change figures are not a like-for-like ranking. Previous GLP-1 treatment, other health conditions and whether a daily or weekly routine suits you are all part of the prescriber's assessment.",
    sideEffectsTitle: "Safety & Monitoring",
    sideEffectsBody:
      "Stomach symptoms such as nausea and diarrhoea are common with both, especially while the dose is being increased. Each medicine has its own warnings in its summary of product characteristics — read the patient information leaflet supplied with your pens.",
    bestChoiceBody:
      "For pricing, the practical difference is the unit you pay for: a Mounjaro pen covers four weeks at one strength, while Saxenda at 3 mg uses about five pens a month. Compare monthly totals at the strength you expect to stay on, then confirm eligibility and the final price with a regulated UK prescriber or pharmacy.",
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
      snapshotLabel: "Prices checked on the dates shown · confirm with the provider before you pay",
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
        "Switch tabs above to see Wegovy pen prices and Saxenda pack prices. A month of Wegovy is usually one pen; a month of Saxenda at 3 mg is about five.",
      ],
    },
    keyFacts: [
      {
        title: "Two GLP-1 Medicines",
        body: "Wegovy (semaglutide) and Saxenda (liraglutide) both act on the GLP-1 receptor, but they are different molecules with different dosing.",
      },
      {
        title: "One Pen Vs Five",
        body: "A Wegovy pen holds four weekly doses. A Saxenda pen holds 18 mg, which lasts six days at the 3 mg daily dose — about five pens for 30 days.",
      },
      {
        title: "Titration Pace",
        body: "Saxenda usually rises by 0.6 mg each week from 0.6 mg to 3 mg. Wegovy steps up every four weeks from 0.25 mg towards 2.4 mg.",
      },
    ],
    effectivenessTitle: "Evidence In Context",
    effectivenessBody:
      "Semaglutide and liraglutide were tested in separate programmes with different doses and durations. Trial averages describe groups, not what one person will experience; your prescriber weighs the evidence alongside your history and any previous GLP-1 treatment.",
    sideEffectsTitle: "Safety & Monitoring",
    sideEffectsBody:
      "Because both act on the GLP-1 receptor, their common side effects overlap — mainly nausea, vomiting, diarrhoea and constipation, particularly during dose increases. Specific warnings differ; read the patient information leaflet for the medicine you are prescribed.",
    bestChoiceBody:
      "Weekly versus daily injections is often the deciding practical factor alongside cost. Work out the monthly total — one Wegovy pen per four weeks against about five Saxenda pens a month at 3 mg — then confirm eligibility and the final price with a regulated UK prescriber or pharmacy.",
  },
};
