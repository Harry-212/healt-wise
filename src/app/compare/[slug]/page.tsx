import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import {
  COMPARE_PAGE_LAYOUT,
  type ComparePageLayoutConfig,
} from "@/lib/routes/compare-page-layout";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import CompareTreatmentsHero from "@/components/compare/CompareTreatmentsHero";
import WegovyMounjaroQuickVerdict from "@/components/compare/WegovyMounjaroQuickVerdict";
import WegovyMounjaroLongFormContent from "@/components/compare/WegovyMounjaroLongFormContent";
import CompareFaqSection from "@/components/compare/CompareFaqSection";
import { getLivePriceSummary } from "@/lib/data/home-price-summary";
import {
  COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_ALT,
  COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_SRC,
} from "@/lib/site-assets";
import {
  compareFaqPageJsonLd,
  getCompareFaqsForSlug,
} from "@/lib/routes/compare-faqs";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import { compareWegovyMounjaroJsonLd } from "@/lib/seo/compare-wegovy-mounjaro-json-ld";

type Props = { params: Promise<{ slug: string }> };

/** Update when the versus-page copy or FAQs change. */
const COMPARE_PAGES_CONTENT_MODIFIED = "2026-10-17";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const COMPARE_SLUG_PHOTO_HERO: Record<string, { src: string; alt: string }> = {
  "wegovy-vs-mounjaro": {
    src: COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_SRC,
    alt: COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_ALT,
  },
};

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
  const meta = buildPageShareMetadata(layout.share);
  return {
    ...meta,
    title: { absolute: layout.share.title },
  };
}

function compareWebPageJsonLd(
  slug: string,
  name: string,
  description: string,
  dateModified: string,
) {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${base}/compare/${slug}`,
    dateModified,
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export default async function ComparePage({ params }: Props) {
  const { slug } = await params;
  const cfg = COMPARE_SLUGS[slug];
  const layout = layoutForSlug(slug);
  if (!cfg || !layout) notFound();

  const priceSummary = getLivePriceSummary();
  const webLdName = layout.share.title;
  const faqItems = getCompareFaqsForSlug(slug, {
    wegovySixMonthsLow: priceSummary.firstSixMonths.wegovyLow,
    mounjaroSixMonthsLow: priceSummary.firstSixMonths.mounjaroLow,
    wegovySixMonthsTypical: priceSummary.firstSixMonths.wegovyTypical,
    mounjaroSixMonthsTypical: priceSummary.firstSixMonths.mounjaroTypical,
  });
  const photoHero = COMPARE_SLUG_PHOTO_HERO[slug];
  const pricesLastCheckedIso = COMPARE_PAGES_CONTENT_MODIFIED;
  const webLd = compareWebPageJsonLd(
    slug,
    webLdName,
    layout.share.metaDescription,
    pricesLastCheckedIso,
  );

  const heroSubtitle = layout.hero.subtitle
    .replace("{{wegovyStarterLow}}", priceSummary.wegovyStarterLow)
    .replace("{{mounjaroStarterLow}}", priceSummary.mounjaroStarterLow);

  return (
    <>
      {slug === "wegovy-vs-mounjaro" ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              compareWegovyMounjaroJsonLd({
                name: webLdName,
                description: layout.share.metaDescription,
                contentModified: pricesLastCheckedIso,
                pricesChecked: priceSummary.lastUpdated,
                wegovyProviderCount: priceSummary.wegovyProviderCount,
                mounjaroProviderCount: priceSummary.mounjaroProviderCount,
                wegovyLow: priceSummary.wegovyStarterLowNum,
                wegovyHigh: priceSummary.wegovyTopHighNum,
                mounjaroLow: priceSummary.mounjaroStarterLowNum,
                mounjaroHigh: priceSummary.mounjaroTopHighNum,
                faqItems,
              }),
            ),
          }}
        />
      ) : (
        <>
          <BreadcrumbJsonLd
            pageName={webLdName}
            pagePath={`/compare/${slug}`}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
          />
          {faqItems.length > 0 ? (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(
                  compareFaqPageJsonLd(faqItems, `${siteOrigin()}/compare/${slug}`),
                ),
              }}
            />
          ) : null}
        </>
      )}

      <article className="w-full">
        {/* Section 1: Hero */}
        <CompareTreatmentsHero
          variant={layout.hero.variant}
          eyebrow={layout.hero.eyebrow}
          titleItalic={layout.hero.titleItalic}
          titleBold={layout.hero.titleBold}
          subtitle={heroSubtitle}
          subtitleId="hero-answer"
          snapshotLabel={layout.hero.snapshotLabel}
          navLinks={layout.hero.navLinks}
          showSnapshotPill={!photoHero}
          highlightNavLinks={Boolean(photoHero)}
          heroPhotoSrc={photoHero?.src}
          heroPhotoAlt={photoHero?.alt}
        />

        {/* Section 2: Quick comparison */}
        <WegovyMounjaroQuickVerdict
          wegovyStarterLow={priceSummary.wegovyStarterLow}
          mounjaroStarterLow={priceSummary.mounjaroStarterLow}
          wegovyTopTypical={priceSummary.wegovyTopTypical}
          mounjaroTopTypical={priceSummary.mounjaroTopTypical}
          pricesChecked={priceSummary.lastUpdated}
        />

        {/* Trust Marquee */}
        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Sections 3 through 9 */}
        {slug === "wegovy-vs-mounjaro" ? (
          <WegovyMounjaroLongFormContent
            priceRows={priceSummary.compareSnapshotRows}
            firstSixMonths={priceSummary.firstSixMonths}
            wegovy72Low={priceSummary.wegovy72Low}
            wegovy72Typical={priceSummary.wegovy72Typical}
            wegovy72Listed={priceSummary.wegovy72Listed}
            wegovyProviderCount={priceSummary.wegovyProviderCount}
            mounjaroProviderCount={priceSummary.mounjaroProviderCount}
            pricesChecked={priceSummary.lastUpdated}
          />
        ) : (
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
            </div>
          </section>
        )}

        {/* Section 11: FAQ */}
        <CompareFaqSection
          items={faqItems}
          heading="Wegovy vs Mounjaro FAQs"
          subtitle=""
        />

        {/* Highlighted Important information box */}
        {slug === "wegovy-vs-mounjaro" ? (
          <section className="border-b border-slate-200/80 bg-white py-8 md:py-10">
            <div className="mx-auto max-w-3xl px-4 md:px-8">
              <div className="rounded-2xl border border-amber-300/90 bg-amber-50/80 p-5 text-sm leading-relaxed text-amber-950 shadow-xs md:p-6 md:text-base">
                <p>
                  <strong className="font-bold text-amber-950">
                    Important information:
                  </strong>{" "}
                  Wegovy and Mounjaro are prescription only medicines in the UK. A registered prescriber must check that they are right for you. This page gives price and general information only. It is not medical advice. If you are unsure, speak to your GP or call NHS 111.
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {/* Author Card */}
        {slug === "wegovy-vs-mounjaro" ? (
          <section
            className="bg-white py-12 md:py-16"
            aria-labelledby="compare-author-heading"
          >
            <div className="mx-auto max-w-3xl px-4 md:px-8">
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 shadow-sm md:p-8">
                <Image
                  src="/authors/alistair-greenwood.webp"
                  alt="Alistair Greenwood"
                  width={80}
                  height={80}
                  className="mb-4 h-16 w-16 rounded-full object-cover ring-2 ring-white md:h-20 md:w-20"
                />
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Research and comparison by
                </p>
                <p
                  id="compare-author-heading"
                  className="mt-2 text-xl font-bold text-slate-900 md:text-2xl"
                >
                  <Link
                    href="/editorial-team/alistair-greenwood"
                    className="hover:text-brand-primary hover:underline underline-offset-2"
                  >
                    Alistair Greenwood
                  </Link>
                </p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  Founder of Healthwise360 | Weight-management pricing
                  researcher
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  Alistair uses his background in project management and
                  information analysis to research providers, compare
                  published treatment costs and explain what services
                  include. Drawing on his own experience of weight-management
                  challenges, he aims to make comparisons clearer and more
                  useful. He is not a healthcare professional and does not
                  provide medical advice.
                </p>
                <Link
                  href="/editorial-team/alistair-greenwood"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary underline-offset-2 hover:underline"
                >
                  Read Alistair&apos;s full profile
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
