import type { PageShareMetadataInput } from "@/lib/seo/share-metadata";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";

export type CompareMedicationTab = "wegovy" | "mounjaro";

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
      eyebrow: "Independent UK Comparison",
      titleItalic: "",
      titleBold: "Wegovy vs Mounjaro UK: What Each One Costs",
      subtitle:
        "Wegovy and Mounjaro are both weekly weight loss injections, and the monthly price you pay depends on the dose you are on. This page compares what selected UK partner pharmacies charge for each one: the first month, an estimated 6 months, and what each price includes. Prices were checked on " + PRICE_CHECK_DATE_LONG + ". A Wegovy starter pen costs from {{wegovyStarterLow}} and a Mounjaro starter pen from {{mounjaroStarterLow}}.",
      snapshotLabel: `Prices checked ${PRICE_CHECK_DATE_LONG} · Same prices as our price pages · No paid rankings`,
      navLinks: [
        { href: "#quick-verdict", label: "At a Glance" },
        { href: "#cost", label: "Cost" },
        { href: "#what-included", label: "What is Included" },
        { href: "#difference", label: "Difference" },
        { href: "#trial-findings", label: "Trial Findings" },
        { href: "#pricing-research", label: "Pricing Research" },
        { href: "#side-effects-nhs", label: "Side Effects & NHS" },
        { href: "#which-budget", label: "Your Budget" },
        { href: "#methodology", label: "How We Compare" },
        { href: "#compare-faq", label: "FAQs" },
      ],
    },
    share: {
      canonicalPath: "/compare/wegovy-vs-mounjaro",
      title: "Wegovy vs Mounjaro UK: What Each One Costs",
      metaDescription:
        "Wegovy vs Mounjaro UK: Compare weight loss, dose, side effects, NHS access and verified prices across selected partner providers.",
      openGraphTitle: "Wegovy vs Mounjaro UK: Price, Dose and Results",
      openGraphDescription:
        "See how Wegovy and Mounjaro compare on weight loss, dose, side effects and price in the UK. Checked and dated, with no paid rankings.",
      imagePath: OG,
      imageAlt: "Healthwise360 — Wegovy vs Mounjaro UK comparison",
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
};
