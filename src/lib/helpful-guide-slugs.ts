/** Listing page URL (same first segment as individual guides). */
export const HELPFUL_GUIDES_HUB_PATH = "/helpful-guides";

/** URL-safe category slugs for `/helpful-guides/category/…` filters. */
export const HELPFUL_GUIDE_CATEGORY_SLUGS = [
  "medications",
  "pharmacy-safety",
  "safety-checks",
  "nutrition",
  "side-effects",
  "regulation",
] as const;

export type HelpfulGuideCategorySlug =
  (typeof HELPFUL_GUIDE_CATEGORY_SLUGS)[number];

export const HELPFUL_GUIDE_CATEGORIES: ReadonlyArray<{
  slug: HelpfulGuideCategorySlug;
  label: string;
}> = [
  { slug: "medications", label: "Medications" },
  { slug: "pharmacy-safety", label: "Pharmacy Safety" },
  { slug: "safety-checks", label: "Safety Checks" },
  { slug: "nutrition", label: "Nutrition" },
  { slug: "side-effects", label: "Side Effects" },
  { slug: "regulation", label: "Regulation" },
];

/** One-line intro per category listing, describing the guides it holds. */
export const HELPFUL_GUIDE_CATEGORY_INTROS: Record<HelpfulGuideCategorySlug, string> = {
  medications:
    "Guides to Mounjaro and Wegovy treatment in the UK: how the medicines work, how long access takes, weight-loss plateaus, pregnancy and other questions to raise with your prescriber.",
  "pharmacy-safety":
    "How to choose and use a UK pharmacy for weight-loss treatment: GPhC checks, local versus online pharmacies, switching provider and chilled delivery.",
  "safety-checks":
    "Practical safety checks while on treatment: spotting fake online pharmacies, disposing of used pens, travelling with medication and staying safe in hot weather.",
  nutrition:
    "Eating well alongside GLP-1 treatment: what to eat for steady progress and how approaches such as calorie cycling fit with Mounjaro.",
  "side-effects":
    "Guides to common side effects and setbacks on treatment, from constipation and feeling cold to stomach bugs and restarting after a break.",
  regulation:
    "How UK rules affect weight-loss treatment: whether pharmacies tell your GP, and why some online treatment content is being removed.",
};

const CATEGORY_SLUG_SET = new Set<string>(HELPFUL_GUIDE_CATEGORY_SLUGS);

const CATEGORY_LABEL_TO_SLUG = Object.fromEntries(
  HELPFUL_GUIDE_CATEGORIES.map(({ slug, label }) => [label, slug]),
) as Record<string, HelpfulGuideCategorySlug>;

const CATEGORY_SLUG_TO_LABEL = Object.fromEntries(
  HELPFUL_GUIDE_CATEGORIES.map(({ slug, label }) => [slug, label]),
) as Record<HelpfulGuideCategorySlug, string>;

export function isHelpfulGuideCategorySlug(
  s: string,
): s is HelpfulGuideCategorySlug {
  return CATEGORY_SLUG_SET.has(s);
}

export function helpfulGuideCategoryLabel(
  slug: HelpfulGuideCategorySlug,
): string {
  return CATEGORY_SLUG_TO_LABEL[slug];
}

export function helpfulGuidesCategoryHubPath(
  slug: HelpfulGuideCategorySlug,
): string {
  return `${HELPFUL_GUIDES_HUB_PATH}/category/${slug}`;
}

/** Resolves a raw `category` query value to slug + label, or null if unknown. */
export function resolveHelpfulGuideCategoryFilter(raw: string): {
  slug: HelpfulGuideCategorySlug;
  label: string;
} | null {
  let decoded = raw;
  try {
    decoded = decodeURIComponent(raw);
  } catch {
    /* keep raw */
  }

  if (isHelpfulGuideCategorySlug(decoded)) {
    return { slug: decoded, label: CATEGORY_SLUG_TO_LABEL[decoded] };
  }

  const slug = CATEGORY_LABEL_TO_SLUG[decoded];
  if (slug) {
    return { slug, label: decoded };
  }

  return null;
}

/** Slugs for long-form guides; live under `/helpful-guides/[slug]`. */
export const HELPFUL_GUIDE_SLUGS = [
  "mounjaro-weight-loss-injection-uk",
  "mounjaro-weight-loss-plateau",
  "mounjaro-prescription-timeline-uk",
  "mounjaro-delivery-storage-uk",
  "how-we-verify-uk-pharmacies-gphc-safety-standards",
  "mounjaro-pregnancy-risk-fertility-contraception",
  "switching-wegovy-to-mounjaro-uk",
  "mounjaro-multivitamins-uk",
  "local-vs-online-pharmacies-mounjaro-uk",
  "mounjaro-gp-notification-uk",
  "switching-pharmacies-mounjaro-wegovy-uk",
  "mounjaro-calorie-cycling-weight-loss",
  "mounjaro-early-weight-loss-why-it-slows",
  "mounjaro-nutrition-guide-uk",
  "mounjaro-menopause-weight-loss-uk",
  "mounjaro-wegovy-health-benefits-uk",
  "mounjaro-bmi-cutoff-stopping-uk",
  "norovirus-mounjaro-wegovy-uk",
  "mounjaro-eligibility-bmi-requirements-uk",
  "mounjaro-feeling-cold-why-fixes",
  "mounjaro-skin-pain-causes-treatment",
  "mounjaro-constipation-relief-uk",
  "mounjaro-side-effects-uk",
  "restarting-mounjaro-after-break-uk",
  "mounjaro-delivery-times-uk",
  "fake-online-pharmacy-uk-how-to-spot-stay-safe",
  "kwikpen-disposal-recycling-uk",
  "travel-insurance-mounjaro-users-uk",
  "mounjaro-hot-weather-safety-uk",
  "glp1-content-removed-weight-loss-advice-uk",
] as const;

export type HelpfulGuideSlug = (typeof HELPFUL_GUIDE_SLUGS)[number];

/** Real per-guide descriptions (mirrors each page's own metadata) — used
 * anywhere guides are listed so cards don't share one generic sentence. */
export const HELPFUL_GUIDE_DESCRIPTIONS: Record<HelpfulGuideSlug, string> = {
  "mounjaro-weight-loss-injection-uk":
    "Complete UK guide to Mounjaro for weight loss. How the dual GLP-1/GIP mechanism works, clinical results, eligibility, side effects, and 2026 costs.",
  "mounjaro-weight-loss-plateau":
    "Weight loss naturally slows after the first weeks on Mounjaro. Why plateaus happen, what they mean for long-term progress, and how to stay on track.",
  "mounjaro-prescription-timeline-uk":
    "Most patients receive Mounjaro within 1–3 days of approval. Learn the prescription process and how to avoid common delays.",
  "mounjaro-delivery-storage-uk":
    "Mounjaro must be stored between 2°C and 8°C. How to check your delivery, understand temperature safety zones, and what to do if it arrives warm.",
  "how-we-verify-uk-pharmacies-gphc-safety-standards":
    "How Healthwise360 validates pharmacies against the GPhC register. Our safety verification process and how you can check a pharmacy yourself.",
  "mounjaro-pregnancy-risk-fertility-contraception":
    "Mounjaro may indirectly increase fertility as metabolic health improves. Clinical facts about tirzepatide, contraception, and pregnancy risk in the UK.",
  "switching-wegovy-to-mounjaro-uk":
    "Thinking of switching from Wegovy to Mounjaro? Why patients switch, clinical differences, how to transition safely, and what to expect during the changeover.",
  "mounjaro-multivitamins-uk":
    "Mounjaro reduces appetite and may lower nutrient intake. The evidence on multivitamins while using Mounjaro, cutting through influencer noise.",
  "local-vs-online-pharmacies-mounjaro-uk":
    "Online pharmacies are cheaper; local ones offer face-to-face support. An honest breakdown of both options for Mounjaro patients in the UK.",
  "mounjaro-gp-notification-uk":
    "UK pharmacies must notify your GP when dispensing Mounjaro. Why it happens, how the process works, and what it means for your medical records.",
  "switching-pharmacies-mounjaro-wegovy-uk":
    "Want to switch pharmacy for Mounjaro or Wegovy? How to compare regulated providers, what documents you need, and how to switch safely.",
  "mounjaro-calorie-cycling-weight-loss":
    "Calorie cycling complements Mounjaro's appetite regulation—helping prevent plateaus and improve long-term adherence to treatment in the UK.",
  "mounjaro-early-weight-loss-why-it-slows":
    "Rapid early weight loss on Mounjaro is normal—but why does it slow? The biology behind initial results, what plateaus mean, and how to keep progressing.",
  "mounjaro-nutrition-guide-uk":
    "Mounjaro controls appetite—but what you eat determines results quality. A practical, evidence-based guide to nutrition while using tirzepatide in the UK.",
  "mounjaro-menopause-weight-loss-uk":
    "Menopause-related weight gain has hormonal causes. How Mounjaro's dual GLP-1/GIP mechanism can help menopausal women, eligibility, and maximising results.",
  "mounjaro-wegovy-health-benefits-uk":
    "Mounjaro and Wegovy do more than reduce weight. From blood sugar control to cardiovascular and liver health, here's what the clinical evidence shows.",
  "mounjaro-bmi-cutoff-stopping-uk":
    "Many UK patients are stopped on Mounjaro at a 'normal' BMI. Here's why that approach is flawed and how to find a provider with a long-term plan.",
  "norovirus-mounjaro-wegovy-uk":
    "Norovirus can feel more intense on Mounjaro or Wegovy. Why it happens, symptoms to watch for, when to delay your injection, and how to recover safely.",
  "mounjaro-eligibility-bmi-requirements-uk":
    "Who qualifies for Mounjaro in the UK? BMI thresholds, accepted health conditions, ethnicity adjustments, what happens when BMI drops, and how to restart.",
  "mounjaro-feeling-cold-why-fixes":
    "Feeling cold on Mounjaro is common. The physiological causes—reduced calorie intake, fat loss and metabolic shifts—and what you can do about it.",
  "mounjaro-skin-pain-causes-treatment":
    "Some Mounjaro users report skin sensitivity or burning. Likely causes and effective management strategies explained.",
  "mounjaro-constipation-relief-uk":
    "Constipation is a common Mounjaro side effect. Why it happens and the most effective hydration, fibre, movement and OTC strategies to ease it.",
  "mounjaro-side-effects-uk":
    "A complete overview of Mounjaro side effects—from common digestive symptoms to rare serious reactions—with evidence-based management strategies for each.",
  "restarting-mounjaro-after-break-uk":
    "Restarting Mounjaro after a break is often possible even if your BMI has dropped. How break length affects restart dose and what providers need.",
  "mounjaro-delivery-times-uk":
    "Fast Mounjaro delivery is advertised but prescribing takes time. What's involved, why delays happen, and how to choose a trustworthy UK provider.",
  "fake-online-pharmacy-uk-how-to-spot-stay-safe":
    "Fake pharmacies sell unsafe medicines. Learn the warning signs, who regulates UK pharmacies (GPhC, MHRA), and how to verify a site before you buy.",
  "kwikpen-disposal-recycling-uk":
    "How to dispose of Mounjaro KwikPens safely in the UK: sharps bins, general waste rules, returning unused medicine, and why recycling is not suitable.",
  "travel-insurance-mounjaro-users-uk":
    "Travelling on Mounjaro is usually straightforward. What insurers ask, why you must declare tirzepatide, what cover to look for, and a pre-trip checklist.",
  "mounjaro-hot-weather-safety-uk":
    "Mounjaro raises dehydration risk in hot weather. UK summer safety: hydration targets, sun protection, GLP-1 digestive symptoms, and when to seek help.",
  "glp1-content-removed-weight-loss-advice-uk":
    "Social media is restricting Mounjaro and Wegovy content. We examine what is being removed, the regulatory context, and what patients are losing.",
};

const SLUG_SET = new Set<string>(HELPFUL_GUIDE_SLUGS);

export function isHelpfulGuideSlug(s: string): s is HelpfulGuideSlug {
  return SLUG_SET.has(s);
}

export function helpfulGuidePath(slug: string): string {
  return `${HELPFUL_GUIDES_HUB_PATH}/${slug}`;
}
