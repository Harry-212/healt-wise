import { BadgeCheck } from "lucide-react";
import { gphcNumberForProvider } from "@/lib/data/gphc-provider-numbers";

/** Compact GPhC register line shown under the provider name in compare tables. */
export default function ProviderGphcLine({
  providerId,
}: {
  providerId: string;
}) {
  const ref = gphcNumberForProvider(providerId);
  if (!ref) return null;
  return (
    <p className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[11px] leading-snug text-slate-500">
      <span className="font-semibold text-slate-600">GPhC</span>
      <span className="text-slate-300" aria-hidden>
        ·
      </span>
      <span className="inline-flex min-w-0 items-center gap-1 text-slate-600 tabular-nums">
        <BadgeCheck
          className="h-3.5 w-3.5 shrink-0 text-emerald-600"
          strokeWidth={2.25}
          aria-hidden
        />
        <span className="min-w-0 wrap-break-word">{ref}</span>
      </span>
    </p>
  );
}
