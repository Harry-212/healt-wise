import { longCheckDate } from "@/lib/data/provider-price-summary";
import { PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";
import PriceVerificationDisclaimer from "@/components/ui/PriceVerificationDisclaimer";

/** Approved Option C wording for every price table (Task 142, 11 Nov 2026). */
export const PRICE_CHECK_SCHEDULE_TEXT = PRICE_CHECK_FREQUENCY_TEXT;

/**
 * Price notice beside a table: the shared PriceVerificationDisclaimer block in its inline
 * form. `lastChecked` is the store's or the provider's check date ("2 Nov 2026" or
 * "2 November 2026"); with no date the wording is shown without one. No hooks, so it renders
 * in server and client components.
 */
export default function PriceCheckNotice({
  lastChecked,
  className = "text-xs text-slate-600",
}: {
  lastChecked: string | null | undefined;
  className?: string;
}) {
  return (
    <PriceVerificationDisclaimer
      variant="inline"
      className={className}
      checkDate={longCheckDate(lastChecked ?? undefined) ?? null}
    />
  );
}
