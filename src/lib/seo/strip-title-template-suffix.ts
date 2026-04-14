/** Root layout uses `title.template: "%s | Health Wise"` — strip accidental duplicate suffix from page titles. */
const TRAILING = /\s*\|\s*Health Wise\s*$/iu;

export function stripTitleTemplateSuffix(title: string): string {
  return title.replace(TRAILING, "").trim();
}
