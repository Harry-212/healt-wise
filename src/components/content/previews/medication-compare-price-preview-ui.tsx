import { Star } from "lucide-react";
import { formatUkGroupedInteger } from "@/lib/provider-helpers";

export const PREVIEW_ROWS = 3;

export function formatPrice(n: number) {
  return `£${n}`;
}

export function doseLabel(key: string) {
  return key.replace("mg", " mg");
}

export function ReviewsCell({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount?: number;
}) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5 tabular-nums">
      <Star
        className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400"
        aria-hidden
      />
      <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
      {reviewCount != null ? (
        <span className="text-xs text-slate-500">
          ({formatUkGroupedInteger(reviewCount)})
        </span>
      ) : null}
    </span>
  );
}
