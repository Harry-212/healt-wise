import type { ReactNode } from "react";

/** GPhC column title — centred, tighter type on very small screens to avoid overlap. */
export function GphcColumnHeaderContent(): ReactNode {
  return (
    <span
      className="inline-flex w-full min-w-0 flex-col items-center justify-center px-0.5 text-center sm:inline sm:w-auto sm:px-0"
      aria-label="GPhC registration number"
    >
      <span className="whitespace-nowrap text-[10px] font-semibold uppercase leading-tight tracking-wide sm:text-xs">
        GPhC
      </span>
    </span>
  );
}

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
 * Column header: full “Trustpilot” label; star stacked above on narrow widths.
 */
export function TrustpilotColumnHeaderContent(): ReactNode {
  return (
    <span className="inline-flex w-full min-w-0 max-w-full flex-col items-center justify-center gap-1 px-0.5 text-center sm:inline-flex sm:w-auto sm:flex-row sm:gap-1.5 sm:px-0">
      <TrustpilotStarIcon className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" />
      <span className="text-[10px] font-semibold leading-tight sm:text-xs">
        Trustpilot
      </span>
    </span>
  );
}
