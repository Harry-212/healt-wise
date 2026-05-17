/**
 * Full-bleed compare table below `xl` (covers phones + iPad portrait/landscape).
 * Uses viewport width — avoids `calc(100% + padding)` extra scroll slack at edges.
 */
export const COMPARE_TABLE_MOBILE_OUTDENT_CLASS =
  "max-xl:relative max-xl:left-1/2 max-xl:w-screen max-xl:max-w-[100vw] max-xl:-translate-x-1/2";

/**
 * Scrollport for UK compare matrices — no rubber-band wiggle at scroll ends (iOS/iPad).
 * Below `xl`: horizontal scroll only (page scrolls vertically). `xl+`: capped 2D scroll.
 */
export const COMPARE_TABLE_SCROLL_CLASS =
  "min-h-0 w-full min-w-0 [overflow-anchor:none] [-webkit-overflow-scrolling:touch] overscroll-none max-xl:max-h-none max-xl:overflow-x-auto max-xl:overflow-y-clip xl:max-h-[min(78vh,800px)] xl:overflow-auto";

/** White card around the matrix — clip without breaking sticky columns. */
export const COMPARE_TABLE_CARD_CLASS =
  "relative overflow-clip rounded-2xl border border-slate-200/90 bg-white shadow-sm max-xl:rounded-none max-xl:border-x-0";
