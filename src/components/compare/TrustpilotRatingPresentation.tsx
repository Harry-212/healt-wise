import type { ReactNode } from "react";

const TRUSTPILOT_GREEN = "#00b67a";

/**
 * Green star (Trustpilot brand colour) for table headers, cells, and previews.
 */
export function TrustpilotStarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className ?? "h-3.5 w-3.5 shrink-0"}
    >
      <path
        fill={TRUSTPILOT_GREEN}
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}

/**
 * Compact “Trustpilot” label for sortable column headers (uppercase table styling).
 */
export function TrustpilotColumnHeaderContent(): ReactNode {
  return (
    <span className="inline-flex min-w-0 max-w-full items-center justify-center gap-0.5">
      <TrustpilotStarIcon className="h-3.5 w-3.5 shrink-0" />
      <span className="min-w-0 leading-tight">Trustpilot</span>
    </span>
  );
}
