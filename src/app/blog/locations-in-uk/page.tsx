import type { Metadata } from "next";
import Link from "next/link";
import { ukLocationArticleSlug } from "@/lib/blog";
import {
  UK_WEIGHT_LOSS_LOCATIONS,
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkNation,
} from "@/lib/data/uk-weight-loss-locations";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Best weight loss treatment UK — guides by city & town",
  description:
    "Programmatic local guides: best weight loss treatment, GLP-1 injections, Wegovy & Mounjaro access, and NHS vs private options for every major UK city and selected towns.",
  alternates: {
    canonical: `${siteOrigin()}/blog/locations-in-uk`,
  },
};

const NATION_ORDER: UkNation[] = [
  "England",
  "Scotland",
  "Wales",
  "Northern Ireland",
];

export default function LocationsInUkHubPage() {
  const byNation = NATION_ORDER.map((nation) => ({
    nation,
    items: UK_WEIGHT_LOSS_LOCATIONS.filter((l) => l.nation === nation).sort(
      (a, b) => a.name.localeCompare(b.name),
    ),
  }));

  return (
    <div className="mx-auto min-w-0 max-w-4xl px-4 pb-24 pt-10 sm:px-6 md:pt-14">
      <Link
        href="/blog"
        className="text-sm font-medium text-brand-primary hover:underline"
      >
        ← Back to blog
      </Link>
      <p className="mt-6 text-xs font-semibold uppercase text-brand-primary">
        Locations in UK
      </p>
      <h1 className="mt-2 text-balance text-3xl font-bold text-slate-900 sm:text-4xl">
        Best weight loss treatment UK — by city &amp; town
      </h1>
      <p className="mt-3 text-sm text-slate-600">
        Paginated blog grid (20 per page) for these posts:{" "}
        <Link
          href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
          className="font-medium text-brand-primary underline-offset-2 hover:underline"
        >
          open blog — Locations filter
        </Link>
        .
      </p>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
        Long-tail local guides for GLP-1 weight loss injections (Wegovy,
        Mounjaro), NHS weight management, private clinics, and regulated online
        pharmacies — organised under the{" "}
        <strong className="font-semibold text-slate-800">
          Locations in UK
        </strong>{" "}
        category. Pick your place below; each page includes city-relevant FAQs
        and structured topics for search.
      </p>

      <div className="mt-12 space-y-14">
        {byNation.map(({ nation, items }) => (
          <section key={nation} aria-labelledby={`nation-${nation}`}>
            <h2
              id={`nation-${nation}`}
              className="border-b border-slate-200 pb-2 text-xl font-semibold text-slate-900"
            >
              {nation}
              <span className="ml-2 text-sm font-normal text-slate-500">
                ({items.length} pages)
              </span>
            </h2>
            <ul className="mt-4 columns-1 gap-x-8 text-sm sm:columns-2">
              {items.map((loc) => (
                <li key={loc.slug} className="mb-2 break-inside-avoid">
                  <Link
                    href={`/blog/${ukLocationArticleSlug(loc.slug)}`}
                    className="text-slate-700 underline-offset-2 hover:text-brand-primary hover:underline"
                  >
                    Best weight loss treatment in {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
