import React from "react";
import { ShieldCheck } from "lucide-react";
import {
  PRICE_CHECK_DATE_LONG,
  PRICE_CHECK_FREQUENCY_TEXT,
} from "@/lib/data/price-check";

/** Same sentence as PRICE_CHECK_FREQUENCY_TEXT: the approved Option C wording lives only there. */
export const STANDARD_PRICE_VERIFICATION_TEXT = PRICE_CHECK_FREQUENCY_TEXT;

export interface PriceVerificationDisclaimerProps {
  className?: string;
  variant?: "card" | "inline";
  /**
   * Date of the latest completed price verification, already formatted ("31 October 2026").
   * Omit it to use the central price-check date, so the date always follows the latest
   * completed verification. Pass `null` to show the wording without a date (used where a
   * page has no check date of its own).
   */
  checkDate?: string | null;
}

const DEFAULT_INLINE_CLASS = "text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400";

/**
 * The one reusable price-verification block (Jeff, 13 Nov 2026): the approved wording plus
 * the dynamic latest-check date. Methodology, the price comparison pages, the Wegovy vs
 * Mounjaro page and the table notices all render this block, so a wording change is made
 * once in `PRICE_CHECK_FREQUENCY_TEXT` and a new check date once in `PRICE_CHECK_DATE_ISO`.
 */
export default function PriceVerificationDisclaimer({
  className = "",
  variant = "card",
  checkDate,
}: PriceVerificationDisclaimerProps) {
  const date = checkDate === undefined ? PRICE_CHECK_DATE_LONG : checkDate;

  if (variant === "inline") {
    return (
      <p className={className.trim() || DEFAULT_INLINE_CLASS} data-price-verification>
        {STANDARD_PRICE_VERIFICATION_TEXT}
        {date ? ` Last checked: ${date}.` : null}
      </p>
    );
  }

  return (
    <div
      role="note"
      aria-label="Price verification notice"
      data-price-verification
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
            {date ? (
              <span className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
                Latest check: {date}
              </span>
            ) : null}
          </div>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            {STANDARD_PRICE_VERIFICATION_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}
