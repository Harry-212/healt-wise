import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import MounjaroCompareChartsSection from "@/components/compare/MounjaroCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import MounjaroCompareShaderHero from "@/components/mounjaro/MounjaroCompareShaderHero";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import MounjaroPriceSnapshot from "@/components/mounjaro/MounjaroPriceSnapshot";
import MounjaroPriceByDoseSection from "@/components/mounjaro/MounjaroPriceByDoseSection";
import MounjaroCheapestSection from "@/components/mounjaro/MounjaroCheapestSection";
import MounjaroMonthlyCostSection from "@/components/mounjaro/MounjaroMonthlyCostSection";
import ComparisonCoverageNote from "@/components/compare/ComparisonCoverageNote";
import NhsAccessSection from "@/components/compare/NhsAccessSection";
import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import {
  buildMounjaroPriceInsights,
  buildFirstMonthsCostEstimate,
  cheapestAcrossDoses,
  cheapestProvidersAtDose,
  formatDose,
  formatGbp,
} from "@/lib/data/mounjaro-price-insights";
import { getMounjaroCompareProviders } from "@/lib/data/compare-live";
import { getProvider } from "@/lib/data/providers";
import { getMounjaroLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  buildMounjaroCompareUkFaqItems,
  mounjaroCompareUkFaqJsonLd,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import { dateModifiedWithPriceCheck } from "@/lib/data/price-check";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/mounjaro-price-comparison",
    title: "Mounjaro Price Comparison UK 2026: Prices by Dose",
    metaDescription:
      "Compare Mounjaro prices by dose across our listed GPhC-registered partner pharmacies, from 2.5 mg to 15 mg.",
    openGraphTitle: "Mounjaro Price Comparison UK: Prices by Dose",
    openGraphDescription:
      "See the lowest Mounjaro price for every dose at our UK pharmacy partners. Checked and dated, with no paid rankings.",
    imagePath: "/mounjaro healt wise.png",
    imageAlt: "Compare Mounjaro prices UK — Healthwise360",
  }),
  title: {
    absolute: "Mounjaro Price Comparison UK 2026: Prices by Dose",
  },
};

function compareWebPageJsonLd(providers: MounjaroUkProviderCompare[]) {
  const base = siteOrigin();
  const pageUrl = `${base}/mounjaro-price-comparison`;
  
  const webpage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Mounjaro Price Comparison UK 2026: Prices by Dose",
    description:
      "Compare Mounjaro prices by dose across our listed GPhC-registered partner pharmacies, from 2.5 mg to 15 mg.",
    url: pageUrl,
    dateModified: dateModifiedWithPriceCheck("2026-10-15"),
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
        name: "Compare Mounjaro prices",
        item: pageUrl,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#providers`,
    name: "Mounjaro Providers",
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

export default function CompareMounjaroPricesUkPage() {
  const MOUNJARO_UK_COMPARE_PROVIDERS = getMounjaroCompareProviders();
  const mounjaroLastUpdated = getMounjaroLastUpdatedLabel();
  const pageUrl = `${siteOrigin()}/mounjaro-price-comparison`;

  const priceRows = MOUNJARO_UK_COMPARE_PROVIDERS.map((p) =>
    Object.fromEntries(
      MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
    ) as Record<(typeof MOUNJARO_DOSE_KEYS)[number], number | null>,
  );
  const annualCosts = buildAnnualCostEstimates(
    MOUNJARO_DOSE_KEYS,
    ["5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    priceRows,
  );
  const firstSixMonths = buildFirstMonthsCostEstimate(
    MOUNJARO_DOSE_KEYS,
    6,
    priceRows,
  );
  const insights = buildMounjaroPriceInsights(MOUNJARO_UK_COMPARE_PROVIDERS);
  const nameRows = MOUNJARO_UK_COMPARE_PROVIDERS.map((p) => ({
    id: p.id,
    name: p.name,
    prices: p.prices,
  }));
  const cheapestByDose = Object.fromEntries(
    MOUNJARO_DOSE_KEYS.map((k) => [k, cheapestProvidersAtDose(nameRows, k, 3)]),
  );
  const cheapestAcross = cheapestAcrossDoses(nameRows, MOUNJARO_DOSE_KEYS);
  const providerCount = MOUNJARO_UK_COMPARE_PROVIDERS.length;
  const offerRows = MOUNJARO_UK_COMPARE_PROVIDERS.map((p) => {
    const offers = getProvider(p.id)?.offers ?? [];
    return {
      id: p.id,
      name: p.name,
      offer:
        offers.length > 0
          ? offers.map((o) => o.summary).join("; ")
          : "None advertised",
    };
  });

  const midDose = insights?.doses.find((d) => d.dose === "7.5mg");
  const faqItems =
    insights && midDose
      ? buildMounjaroCompareUkFaqItems({
          providerCount,
          checkDate: mounjaroLastUpdated,
          starterLow: insights.starter.low,
          starterHigh: insights.starter.high,
          starterWeekly: formatGbp(
            Math.round((insights.starter.low / 4) * 100) / 100,
          ),
          topHigh: insights.top.high,
          topWeekly: formatGbp(Math.round((insights.top.low / 4) * 100) / 100),
          mid: {
            low: midDose.low,
            high: midDose.high,
            weekly: formatGbp(Math.round((midDose.low / 4) * 100) / 100),
          },
          cheapestLeader: cheapestAcross?.leader ?? insights.starter.lowProvider,
          cheapestLeaderWins: cheapestAcross?.leaderWins ?? 0,
          cheapestTotalDoses:
            cheapestAcross?.totalDoses ?? MOUNJARO_DOSE_KEYS.length,
        })
      : [];
  const faqLd = mounjaroCompareUkFaqJsonLd(faqItems, pageUrl);
  const webLd = compareWebPageJsonLd(MOUNJARO_UK_COMPARE_PROVIDERS);

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
        {/* Section 1: Hero (H1: Mounjaro Price Comparison UK) */}
        <MounjaroCompareShaderHero
          lastUpdated={mounjaroLastUpdated}
          providerCount={providerCount}
          lowestByDose={insights?.doses.map((d) => ({ dose: d.dose, price: d.low }))}
        />

        {/* Section 2: Snapshot (H2: Mounjaro prices UK at a glance) */}
        {insights ? (
          <MounjaroPriceSnapshot
            insights={insights}
            typicalFirstSixMonths={firstSixMonths.totalTypical}
          />
        ) : null}

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Section 3: Price table (H2: Compare Mounjaro prices at our partner pharmacies) */}
        <section
          id="mounjaro-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare Mounjaro prices at our partner pharmacies
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              This is our full Mounjaro price comparison table for the UK. It
              shows the price of every dose at {providerCount} partner pharmacies,
              with each pharmacy&apos;s rating and GPhC number. Each row also
              shows the delivery charge and the total, so you see what you
              will really pay.
            </p>
            <p className="mt-3 max-w-3xl text-slate-600">
              You can compare Mounjaro prices online here instead of
              visiting {providerCount} websites. Mounjaro UK prices change
              often, so the date of the last check sits above the table.
            </p>
            <div className="mt-6 max-w-3xl">
              <p className="font-semibold text-slate-900">How to use it:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-600">
                <li>Pick your dose.</li>
                <li>Sort by price, from the lowest price up.</li>
                <li>Tap a pharmacy to see its full review.</li>
              </ol>
            </div>
            <ComparisonCoverageNote className="mt-6" />

            <div className="mt-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-3.5 py-1 text-xs font-semibold text-violet-800">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                Prices checked {mounjaroLastUpdated}
              </div>
              <MounjaroUkCompareTable
                providers={MOUNJARO_UK_COMPARE_PROVIDERS}
                lastUpdated={mounjaroLastUpdated}
                showCostGuideLink
              />
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-slate-600">
              <p>
                Every price in the dose columns is the standard price. Offers,
                codes and first order discounts appear only in the offers
                table below and are never used to rank a partner.
              </p>
              <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white">
                <table className="w-full border-collapse text-left text-sm">
                  <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <tr>
                      <th scope="col" className="px-4 py-3">Provider</th>
                      <th scope="col" className="px-4 py-3">Offers (not in the price)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {offerRows.map((row) => (
                      <tr key={row.id}>
                        <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                          {row.name}
                        </th>
                        <td className="px-4 py-3 text-slate-700">{row.offer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: What the Mounjaro price includes */}
        <section
          id="mounjaro-price-includes"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What the Mounjaro price includes
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              A listed price is usually the pen. Some partners add a
              consultation fee, a delivery charge or a charge for needles, so
              the final total can be higher than the pen price. Each partner
              page shows what is included. Pens must be kept cold on the way
              to you, which is why delivery is often charged on top.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">Item</th>
                    <th scope="col" className="px-4 py-3">What to check before you order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">Pen</th>
                    <td className="px-4 py-3">The dose, and how many pens are in the order</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">Consultation</th>
                    <td className="px-4 py-3">Whether a health check fee is added, and whether it repeats on each order</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">Delivery</th>
                    <td className="px-4 py-3">The cost, and whether the pen travels cold</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">Needles</th>
                    <td className="px-4 py-3">Whether pen needles are included (the Lilly patient guide notes needles do not come with the pen)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="px-4 py-3 font-medium text-slate-900">Month 2</th>
                    <td className="px-4 py-3">Whether the price changes on repeat orders</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              The Mounjaro patient leaflet explains how the pen is stored and
              used. See{" "}
              <Link
                href="/methodology"
                className="font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                how we check partners
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 4: Price by dose (H2: Mounjaro price by dose (UK)) */}
        {insights ? (
          <MounjaroPriceByDoseSection
            doses={insights.doses}
            cheapestByDose={cheapestByDose}
          />
        ) : null}

        {/* Section 5: Cheapest (H2: Which partner pharmacy lists the lowest Mounjaro price?) */}
        <MounjaroCheapestSection
          cheapestAcross={cheapestAcross}
          cheapestStarterPrice={insights?.starter.low ?? 0}
        />

        {/* Section 6: Monthly cost (H2: How much does Mounjaro cost per month in the UK?) */}
        {insights ? (
          <MounjaroMonthlyCostSection
            starterLow={insights.starter.low}
            topLow={insights.top.low}
            topHigh={insights.top.high}
            firstSixMonths={firstSixMonths}
            annualCosts={annualCosts}
            providerCount={providerCount}
          />
        ) : null}

        {/* Section 7: Why prices vary (H2: Why do Mounjaro prices vary in the UK?) */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why do Mounjaro prices vary in the UK?
            </h2>
            {insights ? (
              <p className="mt-4 text-slate-600 leading-relaxed">
                The same pen strength can cost very different amounts. The
                widest gap in our table is at{" "}
                {formatDose(insights.widest.dose)}, where listed prices run from{" "}
                {formatGbp(insights.widest.low)} to{" "}
                {formatGbp(insights.widest.high)}. The main reasons:
              </p>
            ) : null}
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">Your dose.</strong>{" "}
                Higher doses cost more.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Delivery.</strong>{" "}
                Pens are sent cold, and most pharmacies charge extra for this.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Consultation fees.</strong>{" "}
                Most are free, but a few pharmacies add one.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">First order offers.</strong>{" "}
                A low first price can change in month 2.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Subscriptions.</strong>{" "}
                Some pharmacies lock you into a monthly plan.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Bundles.</strong>{" "}
                Buying 2 or 3 pens at once can lower the price of each pen.
              </li>
            </ul>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The manufacturer raised the UK list price of Mounjaro from 1
              September 2025, with the largest rise on the 12.5 mg and 15 mg
              pens (Pharmaceutical Journal). Partners passed it on in different ways, which is one reason
              prices differ between them.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              That is why a good Mounjaro cost comparison in the UK looks at
              the full price, not just the headline price.
            </p>
          </div>
        </section>

        {/* Section 8: How to compare (H2: How to compare Mounjaro prices in 4 steps) */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How to compare Mounjaro prices in 4 steps
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Pick the dose you will be on, not only the starter dose.</li>
              <li>
                Sort by price in our table to see the lowest listed prices
                first.
              </li>
              <li>
                Add delivery and any fees from the pharmacy&apos;s website.
                This is how you compare Mounjaro costs, not just prices.
              </li>
              <li>
                Check the GPhC number on the official register before you pay.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A Mounjaro price comparison in the UK is only fair if you
              compare the same dose. Our comparison does steps 1, 2 and 4 for
              you, for free. It also lets you compare Mounjaro providers on
              support and delivery, not just price.
            </p>
          </div>
        </section>

        {/* Section 9: How we check (H2: How we check every Mounjaro pharmacy) */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How we check every Mounjaro pharmacy
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Every pharmacy in our table passes the same 5 checks. No
              pharmacy can pay to rank higher.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">GPhC registration.</strong>{" "}
                We check each pharmacy on the official{" "}
                <a
                  href="https://www.pharmacyregulation.org/registers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-violet-800 underline-offset-2 hover:underline"
                >
                  GPhC register
                </a>
                .
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Safe prescribing.</strong>{" "}
                A prescriber must check your health before any pen is sent.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Full price.</strong>{" "}
                We record the price of every dose.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Delivery.</strong>{" "}
                We check cold packing, delivery times and tracking.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Support.</strong>{" "}
                We look at dose advice and how easy it is to get help.
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
              <Link
                href="/methodology"
                className="group inline-flex items-center gap-2 font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                Read how we check prices
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <span>Prices checked {mounjaroLastUpdated}.</span>
            </div>
          </div>
        </section>

        {/* Section 10: NHS (H2: Can you get Mounjaro on the NHS?) */}
        <NhsAccessSection
          medicine="Mounjaro"
          heading="Can you get Mounjaro on the NHS?"
        >
          <p>
            Yes, but only a small group of people can get it right now. On
            the NHS, Mounjaro for weight management is being introduced in
            phases, and it is first available to people with the highest
            clinical need. If you get Mounjaro on the NHS, you pay a normal
            prescription charge or nothing.
          </p>
          <p>
            Most people pay privately for now, at the prices in our table.
            Read the{" "}
            <a
              href="https://www.england.nhs.uk/medicines-for-obesity/weight-management-injections/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-800 underline-offset-2 hover:underline"
            >
              NHS England page on weight management injections
            </a>{" "}
            and{" "}
            <a
              href="https://www.nice.org.uk/guidance/ta1026"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-violet-800 underline-offset-2 hover:underline"
            >
              NICE guidance TA1026
            </a>
            , and ask your GP if you are unsure.
          </p>
        </NhsAccessSection>

        {/* Section 11: Compare with other treatments */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare with other treatments
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Looking at another treatment? See our{" "}
              <Link
                href="/wegovy-price-comparison"
                className="font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                Wegovy price comparison
              </Link>{" "}
              or{" "}
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                Wegovy vs Mounjaro
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Section 12: FAQ (H2: Mounjaro price comparison FAQs) */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Mounjaro price comparison FAQs
            </h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 after:float-right after:text-slate-400 after:content-['+'] group-open:after:content-['−']">
                    <h3 className="inline text-base font-semibold text-slate-900">
                      {item.question}
                    </h3>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 13: Mounjaro price UK: what you can expect */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Mounjaro price UK: what you can expect
              </h2>
              {insights ? (
                <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
                  Across the {insights.providerCount} providers in our table
                  (latest price update {mounjaroLastUpdated}), a{" "}
                  {formatDose(insights.starter.dose)} starter pen is listed from{" "}
                  {formatGbp(insights.starter.low)} to{" "}
                  {formatGbp(insights.starter.high)}, with a median of{" "}
                  {formatGbp(insights.starter.median)}. At{" "}
                  {formatDose(insights.top.dose)}, the highest strength, the range
                  is {formatGbp(insights.top.low)} to{" "}
                  {formatGbp(insights.top.high)} (median{" "}
                  {formatGbp(insights.top.median)}). For the same provider, moving
                  from {formatDose(insights.starter.dose)} to{" "}
                  {formatDose(insights.top.dose)} adds a median of{" "}
                  {formatGbp(insights.medianStepUp)} per pen. The charts below
                  show how prices spread at each strength.
                </p>
              ) : null}
            </div>
            <div className="grid gap-8 lg:grid-cols-1">
              <MounjaroCompareChartsSection
                providers={MOUNJARO_UK_COMPARE_PROVIDERS}
              />
            </div>
          </div>
        </section>

        {/* Section 14: Ready to compare? */}
        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-2xl font-bold md:text-3xl">Ready to compare?</h2>
            <p className="mt-4 text-slate-300">
              Shortlist providers at the strength you expect to use, then
              confirm eligibility and the final total with the provider.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CompareHereLink href="#mounjaro-compare-table" size="footer" />
            </div>
          </div>
        </section>

        {/* Section 15: Keep exploring is the sitewide block below the page; this URL shows the six approved cards (SiteEndSectionClient). */}

        <section id="mounjaro-also-searched-as" className="bg-white py-8 md:py-10">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              <strong className="font-semibold text-slate-900">Mounjaro prices:</strong>{" "}
              Also searched as: monjaro, munjaro &amp; manjaro prices –
              you&apos;re in the right place for weight management price comparison.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
