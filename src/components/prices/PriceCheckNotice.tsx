import { longCheckDate } from "@/lib/data/provider-price-summary";

/** Wording agreed with the client for every price table (Oct 2026). */
export const PRICE_CHECK_SCHEDULE_TEXT =
  "Standard prices are checked directly with each pharmacy on the 1st working day of every month.";

/**
 * "Standard prices are checked … every month. Last checked: 2 November 2026."
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
