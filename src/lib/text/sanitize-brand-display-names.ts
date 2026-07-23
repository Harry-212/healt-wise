/**
 * Homepage / public-ad surfaces: hide prescription brand names in visible copy
 * (UK advertising rules). Hover tooltips may still reveal the brand label.
 * INN names (tirzepatide / semaglutide / liraglutide) are allowed on the page.
 */

const BRAND_NAMES =
  /\b(Mounjaro|Wegovy|Saxenda|Ozempic|Zepbound)\b/gi;

/** Known nav / hub phrases → clearer brand-free labels before word replace. */
const PHRASE_REPLACEMENTS: ReadonlyArray<readonly [RegExp, string]> = [
  [/Compare Mounjaro prices UK/gi, "Compare weight loss treatment prices UK"],
  [/Compare Wegovy prices UK/gi, "Compare weight loss treatment prices UK"],
  [/Compare Saxenda prices UK/gi, "Compare weight loss treatment prices UK"],
  [/Mounjaro Click Calculator & Chart/gi, "Weight loss treatment click calculator"],
  [/Wegovy Click Calculator & Chart/gi, "Weight loss treatment click calculator"],
  [/Mounjaro vs Wegovy vs Saxenda/gi, "Weight loss treatment comparison"],
  [/Mounjaro vs Wegovy/gi, "Weight loss treatment comparison"],
  [/Mounjaro vs Saxenda/gi, "Weight loss treatment comparison"],
  [/Wegovy vs Saxenda/gi, "Weight loss treatment comparison"],
  [/Mounjaro Prices/gi, "Weight loss treatment prices"],
  [/Wegovy Prices/gi, "Weight loss treatment prices"],
  [/Saxenda Prices/gi, "Weight loss treatment prices"],
];

export function textContainsBrandName(text: string): boolean {
  if (!text) return false;
  BRAND_NAMES.lastIndex = 0;
  return BRAND_NAMES.test(text);
}

/**
 * On the homepage only, replace medicine brand names with the generic
 * "Weight Loss Treatment" label. INN names are left unchanged.
 * Elsewhere return text unchanged.
 */
export function sanitizeBrandDisplayNames(
  text: string,
  isHomepage = false,
): string {
  if (!isHomepage || !text) return text;

  let out = text;
  for (const [pattern, replacement] of PHRASE_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }

  BRAND_NAMES.lastIndex = 0;
  out = out.replace(BRAND_NAMES, "Weight Loss Treatment");

  // Collapse "Weight Loss Treatment vs Weight Loss Treatment (vs …)"
  out = out.replace(
    /Weight Loss Treatment(?:\s+vs\s+Weight Loss Treatment)+/gi,
    "Weight Loss Treatment comparison",
  );

  return out;
}
