import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Scale, Shield } from "lucide-react";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import {
  COMPARE_PAGE_LAYOUT,
  type ComparePageLayoutConfig,
} from "@/lib/routes/compare-page-layout";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import CompareTreatmentsHero from "@/components/compare/CompareTreatmentsHero";
import CompareMedPriceTabs from "@/components/compare/CompareMedPriceTabs";
import WegovyMounjaroQuickVerdict from "@/components/compare/WegovyMounjaroQuickVerdict";
import WegovyMounjaroLongFormContent from "@/components/compare/WegovyMounjaroLongFormContent";
import {
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "@/lib/data/compare-live";
import {
  getMounjaroLastUpdatedLabel,
  getWegovyLastUpdatedLabel,
} from "@/lib/data/compare-store";
import CompareFaqSection from "@/components/compare/CompareFaqSection";
import { buildPriceGlance } from "@/lib/data/compare-price-glance";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";
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

type Props = { params: Promise<{ slug: string }> };

/** Update when the versus-page copy or FAQs change. */
const COMPARE_PAGES_CONTENT_MODIFIED = "2026-10-15";

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

  const webLdName = layout.share.title;
  const faqItems = getCompareFaqsForSlug(slug);
  const photoHero = COMPARE_SLUG_PHOTO_HERO[slug];
  const mounjaroLastUpdated = getMounjaroLastUpdatedLabel();
  const wegovyLastUpdated = getWegovyLastUpdatedLabel();
  const mounjaroProviders = getMounjaroCompareProviders();
  const wegovyProviders = getWegovyCompareProviders();
  const priceGlance = buildPriceGlance(layout.medications, {
    mounjaro: mounjaroProviders,
    mounjaroChecked: mounjaroLastUpdated,
    wegovy: wegovyProviders,
    wegovyChecked: wegovyLastUpdated,
  });
  const pricesLastCheckedLabel = mounjaroLastUpdated;
  const pricesLastCheckedIso = COMPARE_PAGES_CONTENT_MODIFIED;
  const webLd = compareWebPageJsonLd(
    slug,
    webLdName,
    layout.share.metaDescription,
    pricesLastCheckedIso,
  );

  const priceGlanceSlot = priceGlance.length > 0 ? (
    <div className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
        Prices at a Glance
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
        Median listed price per pen across the pharmacies in each table, with the lowest and highest verified prices in brackets. Figures come from the latest audit across 60+ GPhC-registered UK pharmacies.
      </p>
      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Price summary by medicine</caption>
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Medicine</th>
              <th scope="col" className="px-4 py-3 font-semibold">Schedule</th>
              <th scope="col" className="px-4 py-3 font-semibold">Pharmacies</th>
              <th scope="col" className="px-4 py-3 font-semibold">Starting strength</th>
              <th scope="col" className="px-4 py-3 font-semibold">Higher maintenance strength</th>
              <th scope="col" className="px-4 py-3 font-semibold">Prices checked</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {priceGlance.map((row) => (
              <tr key={row.medication}>
                <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                  {row.label}
                </th>
                <td className="px-4 py-3">{row.schedule}</td>
                <td className="px-4 py-3 tabular-nums">{row.providerCount}</td>
                {row.starter && row.higher ? (
                  <>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-800">
                      {formatDose(row.starter.dose)}: {formatGbp(row.starter.median)}{" "}
                      <span className="text-slate-500 font-normal">
                        ({formatGbp(row.starter.low)}–{formatGbp(row.starter.high)})
                      </span>
                    </td>
                    <td className="px-4 py-3 tabular-nums font-medium text-slate-800">
                      {formatDose(row.higher.dose)}: {formatGbp(row.higher.median)}{" "}
                      <span className="text-slate-500 font-normal">
                        ({formatGbp(row.higher.low)}–{formatGbp(row.higher.high)})
                      </span>
                    </td>
                  </>
                ) : (
                  <td colSpan={2} className="px-4 py-3">
                    Sold in packs of pens; see the {row.label} tab for pack prices.
                  </td>
                )}
                <td className="px-4 py-3">{row.checked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/mounjaro-price-comparison"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
        >
          Full Mounjaro price comparison
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <Link
          href="/wegovy-price-comparison"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
        >
          Full Wegovy price comparison
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  ) : null;

  const priceTabsSlot = (
    <div>
      <div className="mb-4">
        <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
          Compare Wegovy and Mounjaro Prices at 60+ Pharmacies
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Switch between tabs below to inspect dose prices, delivery charges, and total checkout prices across verified GPhC UK pharmacies.
        </p>
      </div>
      <CompareMedPriceTabs
        medications={layout.medications}
        mounjaroProviders={mounjaroProviders}
        wegovyProviders={wegovyProviders}
        mounjaroLastUpdated={mounjaroLastUpdated}
        wegovyLastUpdated={wegovyLastUpdated}
        showWegovyPillCard={slug === "wegovy-vs-mounjaro"}
      />
    </div>
  );

  return (
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

      <article className="w-full">
        {/* Section 1: Hero */}
        <CompareTreatmentsHero
          variant={layout.hero.variant}
          eyebrow={layout.hero.eyebrow}
          titleItalic={layout.hero.titleItalic}
          titleBold={layout.hero.titleBold}
          subtitle={layout.hero.subtitle}
          snapshotLabel={layout.hero.snapshotLabel}
          navLinks={layout.hero.navLinks}
          showSnapshotPill={!photoHero}
          highlightNavLinks={Boolean(photoHero)}
          heroPhotoSrc={photoHero?.src}
          heroPhotoAlt={photoHero?.alt}
          primaryCtaLabel="Compare Prices & Doses"
        />

        {/* Section 2: Quick Verdict Side-by-side Summary Table */}
        <WegovyMounjaroQuickVerdict />

        {/* Trust Marquee */}
        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Sections 3 through 8: Difference, Cost (with Glance & Tabs slots), Dose, Side Effects, NHS, Methodology */}
        {slug === "wegovy-vs-mounjaro" ? (
          <WegovyMounjaroLongFormContent
            lastCheckedLabel={pricesLastCheckedLabel}
            priceGlanceSlot={priceGlanceSlot}
            priceTabsSlot={priceTabsSlot}
          />
        ) : (
          <>
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
            {priceGlanceSlot}
            {priceTabsSlot}
          </>
        )}

        {/* Section 9: FAQ */}
        <CompareFaqSection
          items={faqItems}
          subtitle="Top questions asked by UK patients comparing Wegovy and Mounjaro, answered factually based on clinical trials and UK pharmacy data."
        />

        {/* Section 10: Author Card */}
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
                <h2
                  id="compare-author-heading"
                  className="mt-2 text-xl font-bold text-slate-900 md:text-2xl"
                >
                  <Link
                    href="/editorial-team/alistair-greenwood"
                    className="hover:text-brand-primary hover:underline underline-offset-2"
                  >
                    Alistair Greenwood
                  </Link>
                </h2>
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
