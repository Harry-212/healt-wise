import { BadgeCheck } from "lucide-react";
import { gphcNumberForProvider } from "@/lib/data/gphc-provider-numbers";
import {
  gphcPharmacyRegisterUrl,
} from "@/lib/seo/gphc-pharmacy-register-url";

/** Register number link for compare matrix GPhC column (column header carries the “GPhC” label). */
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-max max-w-none items-center gap-1 whitespace-nowrap text-[11px] leading-snug text-slate-600 tabular-nums transition hover:text-violet-800"
      aria-label={`GPhC registration number ${ref} (opens register in new tab)`}
    >
      <BadgeCheck
        className="h-3.5 w-3.5 shrink-0 text-emerald-600"
        strokeWidth={2.25}
        aria-hidden
      />
      <span className="group-hover:underline">{ref}</span>
    </a>
  );
}
