import React from "react";
import { ShieldCheck } from "lucide-react";

export const STANDARD_PRICE_VERIFICATION_TEXT =
  "Standard retail prices are reviewed monthly using each partner pharmacy’s website and information supplied directly by the pharmacy. The date shown is the date of the latest completed price verification. Prices may change between checks, so confirm the final price and any additional charges with the pharmacy before ordering.";

export interface PriceVerificationDisclaimerProps {
  className?: string;
  variant?: "card" | "inline";
  checkDate?: string;
}

/**
 * Standard Price Verification Disclaimer component (Nov 2026).
 * Reusable text block and component standardizing price verification wording across Healthwise360.
 */
export default function PriceVerificationDisclaimer({
  className = "",
  variant = "card",
  checkDate,
}: PriceVerificationDisclaimerProps) {
  if (variant === "inline") {
    return (
      <p className={`text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 ${className}`.trim()}>
        {STANDARD_PRICE_VERIFICATION_TEXT}
        {checkDate ? ` (Checked: ${checkDate})` : ""}
      </p>
    );
  }

  return (
    <div
      role="note"
      aria-label="Price verification notice"
      className={`rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 sm:p-5 dark:border-emerald-950/40 dark:bg-emerald-950/20 ${className}`.trim()}
    >
      <div className="flex items-start gap-3.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
              Price Verification Standard
            </p>
            {checkDate && (
              <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                Latest check: {checkDate}
              </span>
            )}
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {STANDARD_PRICE_VERIFICATION_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}
