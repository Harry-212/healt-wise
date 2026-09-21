import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { allPharmacySlugs } from "@/lib/routes/all-pharmacy-slugs";
import { landingProviderName } from "@/lib/seo/pharmacy-review-seo";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";

const TITLE = "All UK Weight Loss Pharmacies | Healthwise360";
const DESCRIPTION =
  "Every UK pharmacy reviewed by Healthwise360: GPhC-registered providers of Mounjaro, Wegovy and Saxenda, with independent pricing and safety reviews.";

export const metadata: Metadata = withDefaultShareImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/pharmacies`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
});

function displayName(slug: string): string {
  return (
    landingProviderName(slug) ??
    slug
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}

export default function PharmaciesIndexPage() {
  const slugs = allPharmacySlugs();
  const providers = slugs
    .map((slug) => ({ slug, name: displayName(slug) }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="All Pharmacies"
        pagePath="/pharmacies"
      />
      <div className="bg-linear-to-b from-[#e6f4ea] via-white to-white px-4 pb-16 pt-10 sm:px-6 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <nav
            className="mb-6 flex text-sm font-medium text-emerald-900/70"
            aria-label="Breadcrumb"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-emerald-950">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-emerald-800/50">
                →
              </li>
              <li className="text-emerald-950">All Pharmacies</li>
            </ol>
          </nav>

          <h1 className="text-balance text-3xl font-bold leading-tight tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
            Every UK weight loss pharmacy we review
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-emerald-900/85">
            Independent reviews of {providers.length} GPhC-registered UK
            online pharmacies and clinics offering Mounjaro, Wegovy or
            Saxenda — treatment prices, consultation process, delivery and
            clinical support. See our{" "}
            <Link
              href="/pharmacy-safety-gphc-verification"
              className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
            >
              GPhC verification methodology
            </Link>{" "}
            for how each provider is checked.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/compare/mounjaro-vs-wegovy-vs-saxenda"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/20 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition-colors hover:border-emerald-700/40 hover:bg-emerald-50"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-700" aria-hidden />
              Compare prices side-by-side
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {providers.map(({ slug, name }) => (
              <li key={slug}>
                <Link
                  href={`/pharmacies/${slug}`}
                  className="group flex items-center justify-between gap-2 rounded-xl border border-emerald-900/10 bg-white px-4 py-3 text-sm font-semibold text-emerald-950 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-700/30 hover:shadow-md"
                >
                  <span>{name}</span>
                  <ChevronRight
                    className="h-4 w-4 shrink-0 text-emerald-700/50 transition-transform group-hover:translate-x-0.5 group-hover:text-emerald-700"
                    aria-hidden
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
