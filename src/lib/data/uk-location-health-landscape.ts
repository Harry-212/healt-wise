/** Regional / national health context blocks for UK location articles (official-source framing). */

export type UkNation = "England" | "Scotland" | "Wales" | "Northern Ireland";

export type UkLocationHealthLandscape = {
  widerAreaLabel: string;
  body: string;
  sourceUrl: string;
  sourceLabel: string;
  dataYear: string;
};

type LandscapeVariant = Omit<UkLocationHealthLandscape, "body"> & {
  body: (name: string, seed: number) => string;
};

function seedFromSlug(slug: string): number {
  return slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

const ENGLAND_VARIANTS: LandscapeVariant[] = [
  {
    widerAreaLabel: "England",
    sourceUrl:
      "https://digital.nhs.uk/data-and-information/publications/statistical/statistics-on-obesity-physical-activity-and-diet",
    sourceLabel: "NHS Digital — Statistics on Obesity, Physical Activity and Diet",
    dataYear: "2024",
    body: (name, s) =>
      [
        `National summaries for England describe how overweight and obesity prevalence varies by region and deprivation; ${name} residents usually sit inside those wider curves rather than having a standalone “city percentage” updated every month.`,
        s % 2 === 0
          ? "That matters because waiting lists, eligibility wording for tiered services, and how quickly GP practices refer into weight-management programmes can all shift with local capacity—not because the medicines themselves change by postcode."
          : "When you read headlines about obesity rates, the geography is often regional or integrated care board scale; use it as context for service pressure and public-health messaging, not as a personal diagnosis.",
      ].join(" "),
  },
  {
    widerAreaLabel: "England",
    sourceUrl: "https://www.nice.org.uk/guidance/ng246",
    sourceLabel: "NICE — NG246 Overweight and obesity management",
    dataYear: "2024",
    body: (name, s) =>
      [
        `Guidance used across England (and influencing policy elsewhere) treats excess weight as a long-term condition where structured support, realistic follow-up, and medication eligibility sit inside clear pathways.`,
        `${name} is still affected by the same national frameworks—what differs is how quickly you can access dietitian-led programmes, specialist clinics, or prescribing conversations locally.`,
        s % 3 === 0
          ? "If numbers appear in policy documents, they are usually aggregated; treat them as background for “why services feel stretched,” not proof of individual risk."
          : "Comparing yourself to a regional chart is rarely helpful; comparing your options—NHS, private, online—with a clinician usually is.",
      ].join(" "),
  },
  {
    widerAreaLabel: "England",
    sourceUrl: "https://www.ons.gov.uk/peoplepopulationandcommunity/healthandsocialcare",
    sourceLabel: "ONS — Health and social care",
    dataYear: "2023",
    body: (name, s) =>
      [
        `ONS releases complement NHS administrative statistics; together they describe trends over time rather than pinning every town to an annually refreshed obesity percentage.`,
        `People searching from ${name} often bump into those national datasets while trying to sanity-check adverts claiming “everyone is eligible.”`,
        s % 2 === 0
          ? "Healthy scepticism toward miracle timelines is compatible with optimism about evidence-based options—once someone qualified has reviewed your history."
          : "If a statistic is cited without geography and year, it may still be useful mood music for policymakers but useless for personal decisions.",
      ].join(" "),
  },
];

const SCOTLAND_VARIANTS: LandscapeVariant[] = [
  {
    widerAreaLabel: "Scotland",
    sourceUrl:
      "https://www.publichealthscotland.scot/our-areas-of-work/health-intelligence-and-data/obesity/",
    sourceLabel: "Public Health Scotland — Obesity",
    dataYear: "2024",
    body: (name, s) =>
      [
        `Scotland publishes obesity-related intelligence at national level with breakdowns that rarely map one-to-one onto a single settlement like ${name}.`,
        "Health-board footprints, rural transport, and seasonal access to outpatient clinics still change how quickly someone can start structured support—before anyone mentions GLP-1 medicines.",
        s % 2 === 0
          ? "Treat regional prevalence figures as context for service design, not as a verdict on your kitchen habits."
          : "If you see different messaging from NHS England neighbours, that can reflect governance as much as biology.",
      ].join(" "),
  },
];

const WALES_VARIANTS: LandscapeVariant[] = [
  {
    widerAreaLabel: "Wales",
    sourceUrl: "https://statswales.gov.wales/Catalogue/Health-and-Social-Care",
    sourceLabel: "StatsWales — Health and social care",
    dataYear: "2023",
    body: (name, s) =>
      [
        `Welsh health statistics are often reported at health-board or national scale; ${name} sits inside those summaries alongside neighbouring communities.`,
        "That means local nuance shows up less in a single obesity percentage and more in referral routes, language access, and waiting times.",
        s % 2 === 0
          ? "When comparing treatment options, check who holds prescribing responsibility and how repeat monitoring is arranged—not only the monthly price."
          : "National indicators can still highlight why public programmes prioritise certain cohorts at certain times.",
      ].join(" "),
  },
];

const NI_VARIANTS: LandscapeVariant[] = [
  {
    widerAreaLabel: "Northern Ireland",
    sourceUrl: "https://www.health-ni.gov.uk/topics/obesity",
    sourceLabel: "Department of Health (NI) — Obesity",
    dataYear: "2023",
    body: (name, s) =>
      [
        `Northern Ireland pathways can read differently from NHS England leaflets even when the underlying medication classes overlap; ${name} readers may notice different wording on referrals and community programmes.`,
        "Official obesity framing still tends to be regional or programme-level rather than a neat annual figure for each postcode.",
        s % 2 === 0
          ? "If you cross borders for work or GP registration, double-check which system your records live in before assuming continuity of care."
          : "Cold-chain courier coverage is still a practical detail that matters once treatment actually starts.",
      ].join(" "),
  },
];

function variantsForNation(nation: UkNation): LandscapeVariant[] {
  switch (nation) {
    case "Scotland":
      return SCOTLAND_VARIANTS;
    case "Wales":
      return WALES_VARIANTS;
    case "Northern Ireland":
      return NI_VARIANTS;
    default:
      return ENGLAND_VARIANTS;
  }
}

export function buildHealthLandscapeForUkLocation(
  slug: string,
  name: string,
  nation: UkNation,
): UkLocationHealthLandscape {
  const seed = seedFromSlug(slug);
  const pool = variantsForNation(nation);
  const v = pool[seed % pool.length];
  return {
    widerAreaLabel: v.widerAreaLabel,
    body: v.body(name, seed),
    sourceUrl: v.sourceUrl,
    sourceLabel: v.sourceLabel,
    dataYear: v.dataYear,
  };
}
