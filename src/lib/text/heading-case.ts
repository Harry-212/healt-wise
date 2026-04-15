/**
 * Capitalises the first letter of each word (ASCII letters at word boundaries).
 * Keeps existing capitals inside words (e.g. NHS, Mounjaro) unless they follow a word boundary.
 */
export function capitalizeHeadingWords(text: string): string {
  return text.replace(/\b([a-z])/g, (_, c: string) => c.toUpperCase());
}
