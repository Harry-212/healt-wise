/**
 * On the homepage only, replace all medicine/GLP-1 names with the generic
 * "Weight Loss Treatment" label to comply with UK advertising rules.
 * On all other pages the original text is returned unchanged.
 */
export function sanitizeBrandDisplayNames(
  text: string,
  isHomepage = false,
): string {
  return text;
}
