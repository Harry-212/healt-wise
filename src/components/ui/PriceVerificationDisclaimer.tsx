import React from "react";
import { PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";
import { ShieldCheck } from "lucide-react";

interface PriceVerificationDisclaimerProps {
  className?: string;
  variant?: "card" | "inline";
}

/**
 * Standard Price Verification Disclaimer component (Nov 2026).
 * Standardized wording approved for use across Healthwise360 price tables and location pages.
 */
export default function PriceVerificationDisclaimer({
  className = "",
  variant = "card",
}: PriceVerificationDisclaimerProps) {
  const text = PRICE_CHECK_FREQUENCY_TEXT;

  if (variant === "inline") {
    return (
      <p className={`text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400 ${className}`}>
        {text}
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
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-900 dark:text-emerald-300">
            Price Verification Standard
          </p>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
