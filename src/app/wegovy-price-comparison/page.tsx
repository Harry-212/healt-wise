import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import WegovyCompareChartsSection from "@/components/compare/WegovyCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import WegovyCompareShaderHero from "@/components/wegovy/WegovyCompareShaderHero";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import WegovyPriceSnapshot from "@/components/wegovy/WegovyPriceSnapshot";
import WegovyPriceByDoseSection from "@/components/wegovy/WegovyPriceByDoseSection";
import WegovyCheapestSection from "@/components/wegovy/WegovyCheapestSection";
import WegovyMonthlyCostSection from "@/components/wegovy/WegovyMonthlyCostSection";
import { isAffiliatePartner } from "@/lib/data/affiliate-partners";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import { cheapestAcrossDoses } from "@/lib/data/mounjaro-price-insights";
import {
  WEGOVY_DOSE_KEYS,
  type WegovyUkProviderCompare,
  wegovyPriceAmount,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  buildWegovyPriceInsights,
  cheapestWegovyAtDose,
  buildWegovyFirstSixMonthsCostEstimate,
  formatDose,
  formatGbp,
} from "@/lib/data/wegovy-price-insights";
import { getWegovyCompareProviders } from "@/lib/data/compare-live";
import { getWegovyLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  buildWegovyCompareUkFaqItems,
  WEGOVY_COMPARE_UK_FAQ_ITEMS,
  wegovyCompareUkFaqJsonLd,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/wegovy-price-comparison",
    title: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    metaDescription:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    openGraphTitle: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    openGraphDescription:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    imagePath: "/wegovy-health-wise.png",
    imageAlt: "Compare Wegovy prices UK — Healthwise360",
  }),
  title: {
    absolute: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
  },
};

const WEGOVY_RESOURCE_LINKS = [
  {
    href: "/wegovy-faq",
    title: "Wegovy FAQ",
    description: "Read common UK questions about fees, doses, and policies.",
  },
] as const;

function compareWebPageJsonLd(providers: WegovyUkProviderCompare[]) {
  const base = siteOrigin();
  const pageUrl = `${base}/wegovy-price-comparison`;

  const webpage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    description:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    url: pageUrl,
    dateModified: "2026-09-25",
    isPartOf: {
      "@id": `${base}/#website`,
    },
    publisher: {
      "@id": `${base}/#organization`,
    },
    inLanguage: "en-GB",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${pageUrl}#providers`,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${base}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare Wegovy prices",
        item: pageUrl,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#providers`,
    name: "Wegovy Providers",
    numberOfItems: providers.length,
    itemListElement: providers.map((provider, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Organization",
        name: provider.name,
        url: `${base}/pharmacies/${provider.id}`,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, breadcrumb, itemList],
  };
}

export default function CompareWegovyPricesUkPage() {
  const WEGOVY_UK_COMPARE_PROVIDERS = getWegovyCompareProviders();
  const wegovyLastUpdated = getWegovyLastUpdatedLabel();
  const pageUrl = `${siteOrigin()}/wegovy-price-comparison`;

  const insights = buildWegovyPriceInsights(WEGOVY_UK_COMPARE_PROVIDERS);
  const firstSixMonths = buildWegovyFirstSixMonthsCostEstimate(
    WEGOVY_UK_COMPARE_PROVIDERS,
  );

  const priceRows = WEGOVY_UK_COMPARE_PROVIDERS.map((p) =>
    Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  );
  const affiliatePriceRows = WEGOVY_UK_COMPARE_PROVIDERS.filter((p) =>
    isAffiliatePartner(p.id),
  ).map((p) =>
    Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  );
  const annualCosts = buildAnnualCostEstimates(
    WEGOVY_DOSE_KEYS,
    ["1mg", "1.7mg", "2.4mg", "7.2mg"],
    priceRows,
    affiliatePriceRows,
  );
  const nameRows = WEGOVY_UK_COMPARE_PROVIDERS.map((p) => ({
    id: p.id,
    name: p.name,
    prices: Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  }));
  const cheapestAcross = cheapestAcrossDoses(nameRows, WEGOVY_DOSE_KEYS);

  const cheapestByDose = Object.fromEntries(
    WEGOVY_DOSE_KEYS.map((k) => [
      k,
      cheapestWegovyAtDose(WEGOVY_UK_COMPARE_PROVIDERS, k, 3),
    ]),
  );

  const dose24Stat = insights?.doses.find((d) => d.dose === "2.4mg") ?? insights?.top;
  const dose72Stat = insights?.doses.find((d) => d.dose === "7.2mg");
  const faqItems = insights && dose24Stat
    ? buildWegovyCompareUkFaqItems({
        starterLow: formatGbp(insights.starter.low),
        starterWeekly: formatGbp(
          Math.round((insights.starter.low / 4) * 100) / 100,
        ),
        dose24Low: formatGbp(dose24Stat.low),
        dose24High: formatGbp(dose24Stat.high),
        dose24Typical: formatGbp(dose24Stat.median),
        dose24Weekly: formatGbp(
          Math.round((dose24Stat.low / 4) * 100) / 100,
        ),
        dose72Low: formatGbp(dose72Stat?.low ?? 175.49),
        cheapestLeader: cheapestAcross?.leader ?? insights.starter.lowProvider,
        cheapestLeaderWins:
          cheapestAcross?.leaderWins ?? WEGOVY_DOSE_KEYS.length,
        cheapestTotalDoses:
          cheapestAcross?.totalDoses ?? WEGOVY_DOSE_KEYS.length,
      })
    : WEGOVY_COMPARE_UK_FAQ_ITEMS;

  const providerCount = WEGOVY_UK_COMPARE_PROVIDERS.length;
  const faqLd = wegovyCompareUkFaqJsonLd(faqItems, pageUrl);
  const webLd = compareWebPageJsonLd(WEGOVY_UK_COMPARE_PROVIDERS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <article className="w-full">
        {/* Section 1: Hero */}
        <WegovyCompareShaderHero
          lastUpdated={wegovyLastUpdated}
          cheapestPrice={insights?.starter.low}
          cheapestProvider={insights?.starter.lowProvider}
          providerCount={providerCount}
        />

        {/* Section 2: Price snapshot */}
        {insights ? (
          <WegovyPriceSnapshot
            insights={insights}
            typicalFirstSixMonths={firstSixMonths.totalTypical}
          />
        ) : null}

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Section 3: Price table */}
        <section
          id="wegovy-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare Wegovy prices UK at every pharmacy
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              This is our full Wegovy UK price comparison. It shows the price of
              every dose at {providerCount} pharmacies, with each
              pharmacy&apos;s rating and GPhC number. Each row also shows the
              delivery charge and the total, so you see what you will really
              pay.
            </p>
            <p className="mt-3 max-w-3xl text-slate-600">
              You can compare Wegovy prices here instead of visiting{" "}
              {providerCount} websites. Wegovy UK prices change often, so the
              date of the last check sits above the table.
            </p>
            <div className="mt-6 max-w-3xl">
              <p className="font-semibold text-slate-900">How to use it:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-600">
                <li>Pick your dose.</li>
                <li>Sort by price, from the lowest price up.</li>
                <li>Tap a pharmacy to see its full review.</li>
              </ol>
            </div>
            <div className="mt-10">
              <WegovyUkCompareTable
                providers={WEGOVY_UK_COMPARE_PROVIDERS}
                lastUpdated={wegovyLastUpdated}
                showCostGuideLink
              />
            </div>
          </div>
        </section>

        {/* Section 4: Price by dose */}
        {insights ? (
          <WegovyPriceByDoseSection
            doses={insights.doses}
            cheapestByDose={cheapestByDose}
          />
        ) : null}

        {/* Section 5: Cheapest */}
        <WegovyCheapestSection
          cheapestAcross={cheapestAcross}
          starterLow={insights?.starter.low}
        />

        {/* Resources links */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                More Wegovy pricing resources
              </h2>
              <p className="mt-3 text-slate-600">
                Questions about Wegovy fees, pen strengths and switching provider
                are answered in more depth here.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {WEGOVY_RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-sm"
                >
                  <h3 className="font-bold text-emerald-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 underline-offset-2 group-hover:underline">
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Monthly cost */}
        <WegovyMonthlyCostSection
          starterLow={insights?.starter.low}
          topLow={insights?.top.low}
          topHigh={insights?.top.high}
          firstSixMonths={firstSixMonths}
          annualCosts={annualCosts}
        />

        {/* Price overview charts */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Wegovy price UK: what you can expect
              </h2>
              {insights ? (
                <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                  Across the {insights.providerCount} providers in our table
                  (latest price update {wegovyLastUpdated}), a{" "}
                  {formatDose(insights.starter.dose)} starter pen is listed from{" "}
                  {formatGbp(insights.starter.low)} to{" "}
                  {formatGbp(insights.starter.high)}, with a median of{" "}
                  {formatGbp(insights.starter.median)}. At{" "}
                  {formatDose(insights.top.dose)} the range is{" "}
                  {formatGbp(insights.top.low)} to{" "}
                  {formatGbp(insights.top.high)} (median{" "}
                  {formatGbp(insights.top.median)}). For the same provider,
                  moving from {formatDose(insights.starter.dose)} to{" "}
                  {formatDose(insights.top.dose)} adds a median of{" "}
                  {formatGbp(insights.medianStepUp)} per pen. The charts below
                  show how prices spread at each strength.
                </p>
              ) : null}
            </div>
            <div className="grid gap-8 lg:grid-cols-1">
              <WegovyCompareChartsSection
                providers={WEGOVY_UK_COMPARE_PROVIDERS}
              />
            </div>
          </div>
        </section>

        {/* Section 7: Why prices differ */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why do Wegovy prices vary in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The same Wegovy pen can cost{" "}
              {formatGbp(insights?.top.low ?? 173.69)} at one pharmacy and{" "}
              {formatGbp(insights?.top.high ?? 290)} at another. So what sets
              the price? These six things:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">
                  Your dose.
                </strong>{" "}
                Higher doses cost more.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Delivery.
                </strong>{" "}
                Pens are sent cold, and many pharmacies charge extra for this.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Consultation fees.
                </strong>{" "}
                Most are free, but a few pharmacies add one.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  First order offers.
                </strong>{" "}
                A low first price can go up in month 2.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Subscriptions.
                </strong>{" "}
                Some pharmacies lock you into a monthly plan.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Bundles.
                </strong>{" "}
                Buying 2 or 3 pens at once can lower the price of each pen.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              That is why we compare Wegovy weight loss prices on the full cost,
              not just the headline price.
            </p>
          </div>
        </section>

        {/* Section 8: How to compare */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How to compare Wegovy prices in 4 steps
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Pick the dose you will be on, not only the starter dose.</li>
              <li>
                Sort by price in our table to see the best prices for Wegovy
                first.
              </li>
              <li>Add delivery and any fees on the pharmacy&apos;s website.</li>
              <li>
                Check the GPhC number on the official register before you pay.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A Wegovy price comparison is only fair if you compare the same
              dose. Our table does steps 1, 2 and 4 for you, for free.
            </p>
          </div>
        </section>

        {/* Section 9: Our checks */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How we check every Wegovy pharmacy
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We check all the Wegovy suppliers in the UK in our table with the
              same 5 checks. No pharmacy can pay to rank higher.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">
                  GPhC registration.
                </strong>{" "}
                We check each pharmacy on the official{" "}
                <a
                  href="https://www.pharmacyregulation.org/registers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  GPhC register
                </a>
                .
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Safe prescribing.
                </strong>{" "}
                A prescriber must check your health before any pen is sent.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Full price.
                </strong>{" "}
                We record the price of every dose.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Delivery.
                </strong>{" "}
                We check cold packing, delivery times and tracking.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Support.
                </strong>{" "}
                We look at dose advice and how easy it is to get help.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We check every price in the first week of each month and show the
              date next to it. We show standard prices. First order codes are
              not included, because we cannot check their terms. If two
              pharmacies share one GPhC number, we flag it in the table.
            </p>
            <div className="mt-6">
              <Link
                href="/methodology"
                className="group inline-flex items-center gap-2 font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Read how we check prices
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: NHS */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Can you get Wegovy on the NHS?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Yes, but only a small group of people can get it. On the NHS,
              Wegovy is given through specialist weight management services, to
              people with a high BMI and a health problem linked to their
              weight, for up to 2 years. If you get it on the NHS, you pay a
              normal prescription charge or nothing. Most people pay privately,
              at the prices in our table. Ask your GP, and compare Wegovy prices
              here if you go private.
            </p>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wegovy price comparison FAQs
            </h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 after:float-right after:text-slate-400 after:content-['+'] group-open:after:content-['−']">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to compare and next-step your care?
            </h2>
            <p className="mt-4 text-slate-300">
              Use the table to shortlist providers, then confirm eligibility and
              live pricing on regulated sites.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CompareHereLink href="#wegovy-compare-table" size="footer" />
              <Link
                href="/what-is-wegovy#eligibility-uk"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Start your treatment journey
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
