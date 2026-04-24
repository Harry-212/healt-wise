/**
 * On the homepage only, replace all medicine/GLP-1 names with the generic
 * "Weight Loss Treatment" label to comply with UK advertising rules.
 * On all other pages the original text is returned unchanged.
 */
export function sanitizeBrandDisplayNames(
  text: string,
  isHomepage = false,
): string {
  if (!isHomepage) return text;
  return text
    .replace(/\bGLP-1\b/gi, "Weight Loss Treatment")
    .replace(/\bGLP1\b/gi, "Weight Loss Treatment")
    .replace(/\bTirzepatide\b/gi, "Weight Loss Treatment")
    .replace(/\bSemaglutide\b/gi, "Weight Loss Treatment")
    .replace(/\bLiraglutide\b/gi, "Weight Loss Treatment")
    .replace(/\bWegovy\b/gi, "Weight Loss Treatment")
    .replace(/\bMounjaro\b/gi, "Weight Loss Treatment")
    .replace(/\bSaxenda\b/gi, "Weight Loss Treatment");
}
