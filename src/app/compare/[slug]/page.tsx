import type { Metadata } from "next";
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
import TripleCompareContent from "@/components/compare/TripleCompareContent";
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
import { SAXENDA_UK_COMPARE_LAST_UPDATED } from "@/lib/data/saxenda-uk-compare-providers";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";
import {
  COMPARE_GLP1_PRICE_HERO_IMAGE_ALT,
  COMPARE_GLP1_PRICE_HERO_IMAGE_SRC,
  COMPARE_MOUNJARO_VS_SAXENDA_HERO_IMAGE_ALT,
  COMPARE_MOUNJARO_VS_SAXENDA_HERO_IMAGE_SRC,
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
const COMPARE_PAGES_CONTENT_MODIFIED = "2026-09-24";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const COMPARE_SLUG_PHOTO_HERO: Record<string, { src: string; alt: string }> = {
  "wegovy-vs-mounjaro": {
    src: COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_SRC,
    alt: COMPARE_WEGOVY_VS_MOUNJARO_HERO_IMAGE_ALT,
  },
  "mounjaro-vs-saxenda": {
    src: COMPARE_MOUNJARO_VS_SAXENDA_HERO_IMAGE_SRC,
    alt: COMPARE_MOUNJARO_VS_SAXENDA_HERO_IMAGE_ALT,
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
  if (layout.share.title.includes("|")) {
    return {
      ...meta,
      title: { absolute: layout.share.title },
    };
  }
  return meta;
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

  const webLdName = layout.share.title.includes("|")
    ? layout.share.title
    : layout.share.title ||
      [layout.hero.titleItalic, layout.hero.titleBold]
        .map((s) => s.trim())
        .filter(Boolean)
        .join(" ");
  const faqItems = getCompareFaqsForSlug(slug);
  const photoHero = COMPARE_SLUG_PHOTO_HERO[slug];
  const isTripleHub = slug === "mounjaro-vs-wegovy-vs-saxenda";
  const mounjaroLastUpdated = getMounjaroLastUpdatedLabel();
  const wegovyLastUpdated = getWegovyLastUpdatedLabel();
  const mounjaroProviders = getMounjaroCompareProviders();
  const wegovyProviders = getWegovyCompareProviders();
  const priceGlance = isTripleHub
    ? []
    : buildPriceGlance(layout.medications, {
        mounjaro: mounjaroProviders,
        mounjaroChecked: mounjaroLastUpdated,
        wegovy: wegovyProviders,
        wegovyChecked: wegovyLastUpdated,
        saxendaChecked: SAXENDA_UK_COMPARE_LAST_UPDATED,
      });
  const pricesLastCheckedLabel = mounjaroLastUpdated;
  // Date the page content last changed — not "today" on every request.
  const pricesLastCheckedIso = COMPARE_PAGES_CONTENT_MODIFIED;
  const webLd = compareWebPageJsonLd(
    slug,
    webLdName || layout.hero.titleBold,
    layout.share.metaDescription,
    pricesLastCheckedIso,
  );

  return (
    <>
      <BreadcrumbJsonLd
        {...(isTripleHub
          ? {}
          : {
              sectionName: "Compare treatments",
              sectionPath: "/compare/mounjaro-vs-wegovy-vs-saxenda",
            })}
        pageName={webLdName || layout.hero.titleBold}
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
            __html: JSON.stringify(compareFaqPageJsonLd(faqItems)),
          }}
        />
      ) : null}

      <article className="w-full">
        <CompareTreatmentsHero
          variant={layout.hero.variant}
          eyebrow={layout.hero.eyebrow}
          titleItalic={layout.hero.titleItalic}
          titleBold={layout.hero.titleBold}
          subtitle={layout.hero.subtitle}
          snapshotLabel={layout.hero.snapshotLabel}
          navLinks={layout.hero.navLinks}
          wideDesktopHero={isTripleHub}
          showSnapshotPill={!isTripleHub && !photoHero}
          highlightNavLinks={Boolean(photoHero) && !isTripleHub}
          heroPhotoSrc={
            isTripleHub ? COMPARE_GLP1_PRICE_HERO_IMAGE_SRC : photoHero?.src
          }
          heroPhotoAlt={
            isTripleHub ? COMPARE_GLP1_PRICE_HERO_IMAGE_ALT : photoHero?.alt
          }
          showSubtitleLiveDate={false}
        />

        <CompareMedPriceTabs
          medications={layout.medications}
          mounjaroProviders={mounjaroProviders}
          wegovyProviders={wegovyProviders}
          mounjaroLastUpdated={mounjaroLastUpdated}
          wegovyLastUpdated={wegovyLastUpdated}
        />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {isTripleHub ? (
          <TripleCompareContent lastCheckedLabel={pricesLastCheckedLabel} />
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
            {layout.keyFacts?.length ? (
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {layout.keyFacts.map((fact, i) => {
                  const Icon = [Scale, Shield, BadgeCheck][i % 3];
                  const tint = ["text-brand-primary", "text-emerald-600", "text-violet-600"][i % 3];
                  return (
                    <div
                      key={fact.title}
                      className="rounded-2xl border border-slate-200/90 bg-linear-to-br from-slate-50 to-white p-5 shadow-sm"
                    >
                      <Icon className={`h-8 w-8 ${tint}`} aria-hidden />
                      <p className="mt-3 font-semibold text-slate-900">
                        {fact.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-600">{fact.body}</p>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>

        {priceGlance.length > 0 ? (
          <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
            <div className="mx-auto max-w-5xl px-4 md:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                Prices At A Glance
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                Median listed price per pen across the providers in each
                table, with the lowest and highest in brackets. Figures come
                from the same data as the tabs above.
              </p>
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Price summary by medicine
                  </caption>
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">Medicine</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Injection</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Providers</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Starting strength</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Higher strength</th>
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
                            <td className="px-4 py-3 tabular-nums">
                              {formatDose(row.starter.dose)}: {formatGbp(row.starter.median)}{" "}
                              <span className="text-slate-500">
                                ({formatGbp(row.starter.low)}–{formatGbp(row.starter.high)})
                              </span>
                            </td>
                            <td className="px-4 py-3 tabular-nums">
                              {formatDose(row.higher.dose)}: {formatGbp(row.higher.median)}{" "}
                              <span className="text-slate-500">
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
            </div>
          </section>
        ) : null}

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
              {layout.bestChoiceTitle ?? "Best Choice For You"}
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
        </>
        )}

        <CompareFaqSection items={faqItems} />

        {isTripleHub ? (
          <section
            className="bg-white py-12 md:py-16"
            aria-labelledby="compare-author-heading"
          >
            <div className="mx-auto max-w-3xl px-4 md:px-8">
              <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 shadow-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  Research and comparison by
                </p>
                <h2
                  id="compare-author-heading"
                  className="mt-2 text-xl font-bold text-slate-900 md:text-2xl"
                >
                  Alistair Greenwood
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
              </div>
            </div>
          </section>
        ) : null}
      </article>
    </>
  );
}
