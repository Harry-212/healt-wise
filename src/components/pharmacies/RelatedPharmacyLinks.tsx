import Link from "next/link";
import { activeProviders } from "@/lib/data/providers";

interface PharmacyReviewLink {
  slug: string;
  label: string;
  href: string;
}

/** Every active partner's review page, A–Z, from the central provider data. */
function pharmacyReviews(): PharmacyReviewLink[] {
  return activeProviders().map((p) => ({
    slug: p.id,
    label: `Read our ${p.name} review`,
    href: `/pharmacies/${p.id}`,
  }));
}

/**
 * Shared reusable component: Neutral Pharmacy Cross-Links.
 *
 * Places a neutral, alphabetical cross-linking block to the other partner pharmacy
 * reviews near the bottom of the review page, after the final provider CTA and
 * disclaimer, and before "Recommended for you" / "Keep exploring".
 */
export default function RelatedPharmacyLinks({
  currentSlug,
}: {
  currentSlug: string;
}) {
  // Automatically exclude the current pharmacy and preserve strict alphabetical order
  const filtered = pharmacyReviews().filter(
    (item) => item.slug !== currentSlug,
  ).sort((a, b) => a.label.localeCompare(b.label));

  if (filtered.length === 0) return null;

  return (
    <section
      aria-labelledby="compare-other-pharmacies-heading"
      className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 md:py-10"
    >
      <div className="rounded-2xl border border-slate-200/90 bg-slate-50/75 p-6 sm:p-8">
        <h2
          id="compare-other-pharmacies-heading"
          className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          Compare other pharmacies we review
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
          Explore our other pharmacy reviews to compare checked prices, delivery
          information, registration details and available support. Inclusion does
          not mean that Healthwise360 recommends one provider over another.
        </p>

        <ul className="mt-5 space-y-2.5">
          {filtered.map((item) => (
            <li key={item.slug} className="flex items-center">
              <Link
                href={item.href}
                className="font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
          Some providers may have a commercial relationship with Healthwise360.
          This does not affect their position in our price comparison tables.
        </p>

        <div className="mt-4">
          <Link
            href="/pharmacies"
            className="inline-flex items-center font-semibold text-emerald-800 underline decoration-emerald-500 underline-offset-4 hover:text-emerald-950"
          >
            View all pharmacies we review →
          </Link>
        </div>
      </div>
    </section>
  );
}
