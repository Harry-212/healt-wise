import { longCheckDate } from "@/lib/data/provider-price-summary";
import { PRICE_CHECK_FREQUENCY_TEXT } from "@/lib/data/price-check";

/** Approved Option C wording for every price table (Task 142, 11 Nov 2026). */
export const PRICE_CHECK_SCHEDULE_TEXT = PRICE_CHECK_FREQUENCY_TEXT;

/**
 * "<approved wording> Last checked: 2 November 2026."
 * `lastChecked` is the store's or the provider's check date ("2 Nov 2026" or
 * "2 November 2026"). No hooks, so it renders in server and client components.
 */
export default function PriceCheckNotice({
  lastChecked,
  className = "text-xs text-slate-600",
}: {
  lastChecked: string | null | undefined;
  className?: string;
}) {
  const date = longCheckDate(lastChecked ?? undefined);
  return (
    <p className={className}>
      {PRICE_CHECK_SCHEDULE_TEXT}
      {date ? ` Last checked: ${date}.` : null}
    </p>
  );
}
