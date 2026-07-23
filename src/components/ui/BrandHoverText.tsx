import type { ReactNode } from "react";

type Props = {
  /** Brand-free label shown in the page. */
  publicLabel: ReactNode;
  /** Brand / SEO label revealed on hover or keyboard focus. */
  brandLabel: string;
  className?: string;
  /** When false, render public label only (no tooltip chrome). */
  enabled?: boolean;
};

/**
 * Shows a compliant public label; brand name appears in a small tooltip on
 * hover/focus (homepage advertising pattern).
 */
export default function BrandHoverText({
  publicLabel,
  brandLabel,
  className = "",
  enabled = true,
}: Props) {
  if (!enabled || !brandLabel || brandLabel === publicLabel) {
    return <span className={className}>{publicLabel}</span>;
  }

  return (
    <span
      className={`group/brand relative inline-flex max-w-full ${className}`.trim()}
    >
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-800 opacity-0 shadow-md ring-1 ring-slate-200/90 transition-opacity duration-150 group-hover/brand:opacity-100 group-focus-within/brand:opacity-100"
      >
        {brandLabel}
      </span>
      <span tabIndex={0} className="max-w-full outline-none">
        {publicLabel}
      </span>
    </span>
  );
}
