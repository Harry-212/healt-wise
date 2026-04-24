import type { RecommendedItem } from "@/lib/recommended-reading";

/**
 * Homepage-only card overrides for "Keep exploring" — avoids changing blog
 * article bodies while keeping the carousel compliant on `/`.
 */
const OVERRIDES: Partial<Record<string, Partial<RecommendedItem>>> = {
  "/blog/understanding-prescription-weight-loss-injections-uk": {
    imageUrl: "/blog/pharmacies.webp",
  },
  "/blog/mounjaro-weight-loss-injections-game-changer": {
    imageUrl: "/blog/mounjaro%20weight%20loss%20before%20and%20after.webp",
    title: "Could Mounjaro Weight Loss Treatment Be Your Game-Changer?",
    description:
      "Could prescription weight loss treatment be your breakthrough to finally conquer stubborn diet plateaus? A UK-focused overview.",
  },
  "/blog/mounjaro-vs-ozempic-smart-comparisons-for-better-results": {
    imageUrl: "/blog/mounjaro%20weight%20loss%20results.webp",
    title: "Weight Loss Treatment Comparisons: Smarter UK Choices",
    description:
      "Compare weight loss treatment options in the UK with clear, independent context — eligibility, access, and what to ask a prescriber.",
  },
};

export function applyHomeKeepExploringOverrides(
  item: RecommendedItem,
): RecommendedItem {
  const patch = OVERRIDES[item.href];
  if (!patch) return item;
  return { ...item, ...patch };
}
