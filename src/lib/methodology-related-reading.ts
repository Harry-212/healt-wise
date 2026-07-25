import type { RecommendedItem } from "@/lib/recommended-reading";
import { helpfulGuidePath } from "@/lib/helpful-guide-slugs";
import { GUIDE_IMAGES } from "@/lib/guide-images";

/**
 * Keep exploring cards on `/methodology` — trust / methodology neighbours only.
 * Excludes commercial “injections” article titles that dilute this page’s intent.
 */
const METHODOLOGY_RELATED: RecommendedItem[] = [
  {
    kind: "guide",
    href: "/pharmacy-safety-gphc-verification",
    title: "GPhC Verification Guide",
    description:
      "How to check UK pharmacy registration and spot unsafe online sellers.",
    imageUrl: "/blog/pharmacies.webp",
  },
  {
    kind: "guide",
    href: "/editorial-policy",
    title: "Editorial Policy & Medical Content Standards",
    description:
      "How we research, review, update and correct weight-loss treatment content.",
    imageUrl: "/logo-health-wise.webp",
  },
  {
    kind: "guide",
    href: "/about",
    title: "About Healthwise360",
    description:
      "Independent UK provider research, pharmacy checks and comparison guides.",
    imageUrl: "/logo-health-wise.webp",
  },
  {
    kind: "guide",
    href: helpfulGuidePath("how-we-verify-uk-pharmacies-gphc-safety-standards"),
    title: "How We Verify UK Pharmacies",
    description:
      "GPhC safety standards and checks we apply when listing providers.",
    imageUrl:
      GUIDE_IMAGES["how-we-verify-uk-pharmacies-gphc-safety-standards"] ??
      "/blog/pharmacies.webp",
  },
  {
    kind: "guide",
    href: helpfulGuidePath("fake-online-pharmacy-uk-how-to-spot-stay-safe"),
    title: "Fake Online Pharmacy UK: How to Spot and Stay Safe",
    description:
      "Red flags, registration checks and safer pathways for private treatment.",
    imageUrl:
      GUIDE_IMAGES["fake-online-pharmacy-uk-how-to-spot-stay-safe"] ??
      "/blog/pharmacies.webp",
  },
  {
    kind: "guide",
    href: "/contact",
    title: "Contact Healthwise360",
    description:
      "Send corrections, provider updates or questions about our methodology.",
    imageUrl: "/logo-health-wise.webp",
  },
];

export function getMethodologyRelatedReading(): RecommendedItem[] {
  return METHODOLOGY_RELATED.filter((item) => item.imageUrl.length > 0);
}

/** Drop commercial “injections” titles from generic recommendation pools. */
export function excludesInjectionKeyword(item: RecommendedItem): boolean {
  const hay = `${item.title} ${item.href} ${item.description}`.toLowerCase();
  return !hay.includes("injection");
}
