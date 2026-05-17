/**
 * Full-bleed compare table below `xl` (covers phones + iPad portrait/landscape).
 * Uses viewport width — avoids `calc(100% + padding)` extra scroll slack at edges.
 */
export const COMPARE_TABLE_MOBILE_OUTDENT_CLASS =
  "max-xl:relative max-xl:left-1/2 max-xl:w-screen max-xl:max-w-[100vw] max-xl:-translate-x-1/2";

/**
 * Scrollport for UK compare matrices.
 *
 * Below `xl`: horizontal scroll inside the table; **vertical scroll stays on the page**
 * (`overflow-y-visible` — required for Android; `overflow-y-clip` blocks page scroll there).
 * `overscroll-x-none` stops horizontal rubber-band without blocking vertical chaining.
 *
 * `xl+`: capped 2D scroll inside the card.
 */
export const COMPARE_TABLE_SCROLL_CLASS =
  "min-h-0 w-full min-w-0 [overflow-anchor:none] [-webkit-overflow-scrolling:touch] max-xl:max-h-none max-xl:overflow-x-auto max-xl:overflow-y-visible max-xl:overscroll-x-none xl:max-h-[min(78vh,800px)] xl:overflow-auto xl:overscroll-none";

/**
 * White card around the matrix.
 * Below `xl`: no vertical clip so touches reach the document (Android).
 */
export const COMPARE_TABLE_CARD_CLASS =
  "relative max-xl:overflow-visible rounded-2xl border border-slate-200/90 bg-white shadow-sm max-xl:rounded-none max-xl:border-x-0 xl:overflow-clip";
