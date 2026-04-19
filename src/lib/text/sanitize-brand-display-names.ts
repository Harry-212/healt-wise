/**
 * Replaces common GLP-1 brand names with INN-style display names for UI copy.
 * Used where we surface article/guide titles without editing every source string.
 */
export function sanitizeBrandDisplayNames(text: string): string {
  return text
    .replace(/\bWegovy\b/gi, "Semaglutide")
    .replace(/\bMounjaro\b/gi, "Tirzepatide")
    .replace(/\bSaxenda\b/gi, "Liraglutide");
}
