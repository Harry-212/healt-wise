import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Scale, Shield } from "lucide-react";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import {
  COMPARE_PAGE_LAYOUT,
  type ComparePageLayoutConfig,
} from "@/lib/routes/compare-page-layout";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import CompareTreatmentsHero from "@/components/compare/CompareTreatmentsHero";
import CompareMedPriceTabs from "@/components/compare/CompareMedPriceTabs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(COMPARE_SLUGS).map((slug) => ({ slug }));
}

function layoutForSlug(slug: string): ComparePageLayoutConfig | null {
  const base = COMPARE_SLUGS[slug];
  const layout = COMPARE_PAGE_LAYOUT[slug];
  if (!base || !layout) return null;
  return layout;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const layout = layoutForSlug(slug);
  if (!layout) return {};
  return buildPageShareMetadata(layout.share);
}

function compareWebPageJsonLd(slug: string, name: string, description: string) {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${base}/compare/${slug}`,
    dateModified: "2026-04-14",
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: base,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const cfg = COMPARE_SLUGS[slug];
  const layout = layoutForSlug(slug);
  if (!cfg || !layout) notFound();

  const webLd = compareWebPageJsonLd(
    slug,
    layout.hero.titleBold,
    layout.share.metaDescription,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />

      <article className="w-full">
        <CompareTreatmentsHero
          variant={layout.hero.variant}
          eyebrow={layout.hero.eyebrow}
          titleItalic={layout.hero.titleItalic}
          titleBold={layout.hero.titleBold}
          subtitle={layout.hero.subtitle}
          snapshotLabel={layout.hero.snapshotLabel}
          navLinks={layout.hero.navLinks}
        />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              {layout.intro.heading}
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              {layout.intro.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm">
                <Scale className="h-8 w-8 text-brand-primary" aria-hidden />
                <p className="mt-3 font-semibold text-slate-900">Transparent pricing</p>
                <p className="mt-1 text-sm text-slate-600">
                  Sort every column, filter by band, and preview where discounts will
                  surface.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm">
                <Shield className="h-8 w-8 text-emerald-600" aria-hidden />
                <p className="mt-3 font-semibold text-slate-900">UK regulatory lens</p>
                <p className="mt-1 text-sm text-slate-600">
                  GPhC lines and cold-chain cues match our standalone compare tools.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm">
                <BadgeCheck className="h-8 w-8 text-violet-600" aria-hidden />
                <p className="mt-3 font-semibold text-slate-900">Editorial balance</p>
                <p className="mt-1 text-sm text-slate-600">
                  “Cheapest” vs “balance pick” callouts mirror the price hub pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CompareMedPriceTabs medications={layout.medications} />

        <section className="border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
            <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                {layout.effectivenessTitle}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed md:text-base">
                {layout.effectivenessBody}
              </p>
            </div>
            <div className="rounded-2xl border border-white/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8">
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                {layout.sideEffectsTitle}
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed md:text-base">
                {layout.sideEffectsBody}{" "}
                <Link
                  href="/helpful-guides"
                  className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                >
                  Helpful guides
                </Link>{" "}
                and{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                >
                  GPhC verification
                </Link>{" "}
                go deeper.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Best choice for you
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {layout.bestChoiceBody}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/prices/cheapest-options-uk"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Cheapest options UK
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                Our methodology
              </Link>
            </div>
          </div>
        </section>

      </article>
    </>
  );
}
