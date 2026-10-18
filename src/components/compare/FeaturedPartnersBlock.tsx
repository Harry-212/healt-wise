import Link from "next/link";
import { Sparkles } from "lucide-react";
import ProviderGphcLine from "@/components/compare/ProviderGphcLine";
import { TrustpilotStarIcon } from "@/components/compare/TrustpilotRatingPresentation";

export type FeaturedPartnerCard = {
  id: string;
  name: string;
  /** "From" price already formatted for display. */
  fromPrice: string;
  rating: number;
  gphcRegNo?: string;
  profileHref: string | null;
};

/**
 * Featured partners sit in their own block, outside the price-ranked table.
 * They are never inserted into, or pinned inside, the ranked rows, so
 * affiliate status cannot alter the independent order.
 */
export default function FeaturedPartnersBlock({
  medicationLabel,
  partners,
}: {
  medicationLabel: string;
  partners: FeaturedPartnerCard[];
}) {
  if (partners.length === 0) return null;
  return (
    <section
      aria-label={`Featured ${medicationLabel} partners`}
      className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 shadow-sm sm:p-5"
    >
      <h3 className="text-sm font-bold uppercase tracking-wide text-emerald-900">
        Featured partners
      </h3>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((p) => (
          <li
            key={p.id}
            className="flex flex-col gap-2 rounded-xl border border-emerald-100 bg-white p-3"
          >
            <span className="inline-flex w-max items-center gap-1 rounded-full bg-emerald-700 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
              <Sparkles className="h-2.5 w-2.5" aria-hidden />
              Featured Partner
            </span>
            {p.profileHref ? (
              <Link
                href={p.profileHref}
                className="hw360-cta font-bold leading-snug text-emerald-950 underline decoration-emerald-400 underline-offset-2 hover:text-emerald-800"
                data-hw-provider={p.name}
                data-hw-provider-id={p.id}
                data-hw-medication={medicationLabel}
                data-hw-dose=""
                data-hw-total-pence={(() => {
                  const cleaned = p.fromPrice.replace(/[^0-9.]/g, "");
                  const num = parseFloat(cleaned);
                  return Number.isNaN(num) ? 0 : Math.round(num * 100);
                })()}
                data-hw-monetised="true"
                data-hw-placement="featured"
              >
                {p.name}
              </Link>
            ) : (
              <span className="font-bold leading-snug text-emerald-950">
                {p.name}
              </span>
            )}
            <p className="text-xs text-slate-600">
              {medicationLabel} from{" "}
              <span className="text-base font-bold tabular-nums text-slate-900">
                {p.fromPrice}
              </span>
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1 tabular-nums">
                <TrustpilotStarIcon className="h-3.5 w-3.5 shrink-0 text-amber-500 fill-amber-500" />
                {p.rating.toFixed(1)}
              </span>
              <ProviderGphcLine providerId={p.id} gphcRegNo={p.gphcRegNo} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
