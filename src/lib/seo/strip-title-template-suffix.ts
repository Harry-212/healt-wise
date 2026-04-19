/** Root layout appends `| ${SITE_BRAND_NAME}` — strip accidental duplicate suffix from page titles. */
const TRAILING = /\s*\|\s*(Health Wise|Healthwise360)\s*$/iu;

export function stripTitleTemplateSuffix(title: string): string {
  return title.replace(TRAILING, "").trim();
}
