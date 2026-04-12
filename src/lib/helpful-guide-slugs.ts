/** Listing page URL (same first segment as individual guides). */
export const HELPFUL_GUIDES_HUB_PATH = "/helpful-guides";

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

const SLUG_SET = new Set<string>(HELPFUL_GUIDE_SLUGS);

export function isHelpfulGuideSlug(s: string): s is HelpfulGuideSlug {
  return SLUG_SET.has(s);
}

export function helpfulGuidePath(slug: string): string {
  return `${HELPFUL_GUIDES_HUB_PATH}/${slug}`;
}
