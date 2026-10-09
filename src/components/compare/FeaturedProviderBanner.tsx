import Image from "next/image";
import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import { gphcPharmacyRegisterUrl } from "@/lib/seo/gphc-pharmacy-register-url";

/**
 * A promoted-provider banner shown above a compare table. Client request
 * (9 Oct 2026): "add the affiliate links at the top... or an extra section
 * at the top for them" when onboarding a new provider — this is that
 * section.
 *
 * The "Visit" CTA goes to the provider's own `/pharmacies/:slug` page
 * first, same as every other provider's name link sitewide, rather than
 * straight to their external site — that page is also where the
 * discount-code box and the GPhC/Trustpilot verification live.
 */
export default function FeaturedProviderBanner({
  medicationLabel,
  providerName,
  logoSrc,
  logoAlt,
  headlineFrom,
  rating,
  trustpilotUrl,
  gphcRegNo,
  profileHref,
}: {
  medicationLabel: string;
  providerName: string;
  logoSrc: string;
  logoAlt: string;
  headlineFrom: number;
  rating: number;
  trustpilotUrl?: string;
  gphcRegNo: string;
  profileHref: string;
}) {
  return (
    <section
      aria-label={`Featured ${medicationLabel} provider`}
      className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-50/60 p-5 shadow-sm sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              <Sparkles className="h-3 w-3" aria-hidden />
              Featured
            </span>
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={160}
              height={42}
              className="h-9 w-auto max-w-[9rem] object-contain object-left sm:h-10 sm:max-w-[10rem]"
            />
          </div>

          <div className="min-w-0">
            <Link
              href={profileHref}
              className="font-semibold text-slate-900 underline-offset-2 hover:underline"
            >
              {providerName}
            </Link>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600">
              {trustpilotUrl && (
                <a
                  href={trustpilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-slate-900 hover:underline"
                >
                  <Star className="h-3 w-3 fill-amber-500 text-amber-500" aria-hidden />
                  {rating.toFixed(1)} on Trustpilot
                </a>
              )}
              <a
                href={gphcPharmacyRegisterUrl(gphcRegNo)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 hover:underline"
              >
                GPhC {gphcRegNo}
              </a>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
          <p className="text-sm text-slate-600">
            {medicationLabel} from{" "}
            <span className="text-lg font-bold text-slate-900">
              £{headlineFrom.toFixed(2)}
            </span>
          </p>
          <Link
            href={profileHref}
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Visit {providerName}
          </Link>
        </div>
      </div>
    </section>
  );
}
