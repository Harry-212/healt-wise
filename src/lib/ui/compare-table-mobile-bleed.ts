/**
 * Break out of parent `px-4` / `md:px-8` so compare tables reach screen edges below `lg`.
 * Parent must not use `overflow-x: hidden` or the breakout will clip.
 */
export const COMPARE_TABLE_MOBILE_OUTDENT_CLASS =
  "max-lg:-mx-4 max-lg:w-[calc(100%+2rem)] md:max-lg:-mx-8 md:max-lg:w-[calc(100%+4rem)]";
