import { BadgeCheck } from "lucide-react";
import { gphcNumberForProvider } from "@/lib/data/gphc-provider-numbers";
import {
  gphcPharmacyRegisterUrl,
} from "@/lib/seo/gphc-pharmacy-register-url";

/** Compact GPhC register line shown under the provider name in compare tables. */
export default function ProviderGphcLine({
  providerId,
  gphcRegNo,
}: {
  providerId: string;
  /** GPhC premises number from provider data. Falls back to legacy id map. */
  gphcRegNo?: string;
}) {
  const ref = (gphcRegNo?.trim() || gphcNumberForProvider(providerId) || "")
    .trim();
  if (!ref) return null;
  const href = gphcPharmacyRegisterUrl(ref);
  return (
    <p className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-[11px] leading-snug text-slate-500">
      <span className="font-semibold text-slate-600">GPhC</span>
      <span className="text-slate-300" aria-hidden>
        ·
      </span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex min-w-0 items-center gap-1 text-slate-600 tabular-nums transition hover:text-violet-800"
      >
        <BadgeCheck
          className="h-3.5 w-3.5 shrink-0 text-emerald-600"
          strokeWidth={2.25}
          aria-hidden
        />
        <span className="min-w-0 wrap-break-word group-hover:underline">
          {ref}
        </span>
        <span className="sr-only">(opens GPhC register in a new tab)</span>
      </a>
    </p>
  );
}
