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
      data-tooltip={brandLabel}
      className={`group/brand relative inline-flex max-w-full before:pointer-events-none before:absolute before:bottom-[calc(100%+6px)] before:left-1/2 before:z-30 before:-translate-x-1/2 before:whitespace-nowrap before:rounded-md before:bg-white before:px-2.5 before:py-1 before:text-xs before:font-medium before:text-slate-800 before:opacity-0 before:shadow-md before:ring-1 before:ring-slate-200/90 before:transition-opacity before:duration-150 before:content-[attr(data-tooltip)] group-hover/brand:before:opacity-100 group-focus-within/brand:before:opacity-100 ${className}`.trim()}
    >
      <span tabIndex={0} className="max-w-full outline-none">
        {publicLabel}
      </span>
    </span>
  );
}
