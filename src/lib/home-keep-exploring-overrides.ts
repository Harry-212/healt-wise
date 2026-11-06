import { GUIDE_IMAGES } from "@/lib/guide-images";
import type { RecommendedItem } from "@/lib/recommended-reading";

/**
 * Homepage-only card overrides for "Keep exploring" — avoids changing blog
 * article bodies while keeping the carousel compliant on `/`.
 */
const OVERRIDES: Partial<Record<string, Partial<RecommendedItem>>> = {
  // Brand sanitising turned "Switching Wegovy to Mounjaro UK" into
  // "Switching Weight Loss Treatment To Weight Loss Treatment UK"; copy from Jeff.
  "/helpful-guides/switching-wegovy-to-mounjaro-uk": {
    imageUrl: GUIDE_IMAGES["mounjaro-prescription-timeline-uk"],
    title: "Switching Between Weight Loss Treatments: A UK Guide",
    description:
      "Considering a change in your weight loss treatment? Learn what to discuss with your prescriber before switching.",
  },
  // Task 13 (Healthwise360 correction brief, 6 Nov 2026): the same sanitising left
  // "Weight Loss Treatment or Weight Loss Treatment?" in this card's text. The brief's
  // title names Mounjaro and Wegovy, but the homepage hides prescription brand names
  // (see sanitize-brand-display-names.ts), so the title stays brand-free here.
  "/helpful-guides/switching-pharmacies-mounjaro-wegovy-uk": {
    title: "Switching Pharmacies for Weight Loss Treatment UK",
    description:
      "Compare regulated providers, understand what information may be required and learn what to discuss with your prescriber before switching pharmacy.",
  },
  "/blog/mounjaro-vs-ozempic-smart-comparisons-for-better-results": {
    imageUrl: "/blog/mounjaro%20weight%20loss%20results.webp",
    title: "Mounjaro vs Ozempic: Which Is Right for You?",
    description:
      "Compare Mounjaro and Ozempic in the UK with clear, independent context — eligibility, access, and what to ask a prescriber.",
  },
};

export function applyHomeKeepExploringOverrides(
  item: RecommendedItem,
): RecommendedItem {
  const patch = OVERRIDES[item.href];
  if (!patch) return item;
  return { ...item, ...patch };
}
