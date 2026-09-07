import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import CompareFaqSection from "@/components/compare/CompareFaqSection";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import SaxendaUkCompareTable from "@/components/saxenda/SaxendaUkCompareTable";
import {
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "@/lib/data/compare-live";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "@/lib/data/saxenda-uk-compare-providers";
import { compareFaqPageJsonLd } from "@/lib/routes/compare-faqs";
import { LONDON_COMPARISON_FAQS } from "@/lib/routes/london-comparison-faqs";
import { londonComparisonJsonLdGraph } from "@/lib/seo/london-comparison-json-ld";
import { siteOrigin } from "@/lib/seo/site-origin";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  SITE_SHARE_IMAGE_ALT,
  SITE_SHARE_IMAGE_SRC,
} from "@/lib/site-assets";
import { siteBusinessAddressLine } from "@/lib/site-contact";
import { formatTodayUK } from "@/lib/format-uk-date";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const PAGE_TITLE = "Best Weight Loss Treatment Comparison London";
const PAGE_META_TITLE = `${PAGE_TITLE} | Healthwise360`;
const PAGE_META_DESCRIPTION =
  "Independent comparison of Mounjaro, Wegovy and Saxenda prices from GPhC-registered UK pharmacies serving London. Compare doses, delivery, and total monthly cost.";
const PAGE_PATH = "/best-weight-loss-treatment-comparison-london";

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: PAGE_PATH,
    title: PAGE_META_TITLE,
    metaDescription: PAGE_META_DESCRIPTION,
    openGraphTitle: PAGE_META_TITLE,
    openGraphDescription: PAGE_META_DESCRIPTION,
    imagePath: SITE_SHARE_IMAGE_SRC,
    imageAlt: SITE_SHARE_IMAGE_ALT,
  }),
  title: { absolute: PAGE_META_TITLE },
};

function londonWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: PAGE_META_TITLE,
    description: PAGE_META_DESCRIPTION,
    url: `${base}${PAGE_PATH}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export default function BestWeightLossTreatmentComparisonLondonPage() {
  const mounjaroProviders = getMounjaroCompareProviders();
  const wegovyProviders = getWegovyCompareProviders();
  const lastChecked = formatTodayUK();
  const webLd = londonWebPageJsonLd();
  const faqLd = compareFaqPageJsonLd(LONDON_COMPARISON_FAQS);
  const localBusinessLd = londonComparisonJsonLdGraph();

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Compare"
        sectionPath="/compare"
        pageName={PAGE_TITLE}
        pagePath={PAGE_PATH}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />

      <article className="w-full">
        <section className="w-full bg-linear-to-b from-slate-50 to-white px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/80">
              <MapPin className="h-3.5 w-3.5" aria-hidden />
              London
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-5xl md:leading-[1.1]">
              {PAGE_TITLE}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Compare Mounjaro, Wegovy, and Saxenda prices from GPhC-registered
              UK pharmacies serving London — dose by dose, provider by
              provider. Last checked {lastChecked}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#london-mounjaro-compare"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                Compare prices below
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/pharmacy-safety-gphc-verification"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden />
                GPhC verification guide
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee staticRow />
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why compare weight loss treatment in London
            </h2>
            <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
              <p>
                London residents can access weight loss treatment through NHS
                weight-management services, private London clinics, or online
                pharmacies that deliver UK-wide. Prices, consultation fees,
                and delivery arrangements vary between providers, so comparing
                the same dose across pharmacies before you commit can save
                real money over months of treatment.
              </p>
              <p>
                This page focuses on pricing and provider comparison only. For
                NHS pathways, local clinics, and broader context specific to
                London, see our{" "}
                <Link
                  href="/blog/london"
                  className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                >
                  weight loss treatment in London guide
                </Link>
                . For how we build these comparisons, read our{" "}
                <Link
                  href="/methodology"
                  className="font-semibold text-brand-primary underline-offset-2 hover:underline"
                >
                  methodology
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section
          id="london-mounjaro-compare"
          className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Mounjaro price comparison
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Filter by dose, price band, rating, or delivery type. Tap a
              provider name for its full profile.
            </p>
            <div className="mt-8">
              <MounjaroUkCompareTable providers={mounjaroProviders} />
            </div>
          </div>
        </section>

        <section
          id="london-wegovy-compare"
          className="scroll-mt-24 border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wegovy price comparison
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Compare weekly pen pricing by strength across GPhC-registered UK
              pharmacies.
            </p>
            <div className="mt-8">
              <WegovyUkCompareTable providers={wegovyProviders} />
            </div>
          </div>
        </section>

        <section
          id="london-saxenda-compare"
          className="scroll-mt-24 border-b border-slate-200/80 bg-slate-50/70 py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Saxenda price comparison
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Compare daily pack pricing across providers — useful if a
              once-daily schedule suits you better than a weekly pen.
            </p>
            <div className="mt-8">
              <SaxendaUkCompareTable providers={SAXENDA_UK_COMPARE_PROVIDERS} />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              About this comparison
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Healthwise360 is an independent UK comparison publisher,
              registered at {siteBusinessAddressLine()}. We do not sell,
              prescribe, or dispense medicine. Figures above are illustrative
              snapshots — always confirm the live total at checkout with the
              provider you choose, and read our{" "}
              <Link
                href="/editorial-policy"
                className="font-semibold text-brand-primary underline-offset-2 hover:underline"
              >
                editorial policy
              </Link>{" "}
              for how listings are selected.
            </p>
          </div>
        </section>

        <CompareFaqSection
          items={LONDON_COMPARISON_FAQS}
          subtitle="Quick answers about comparing weight loss treatment providers in London. This is not medical advice; always follow your prescriber and official patient information."
        />
      </article>
    </>
  );
}
