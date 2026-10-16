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
import NhsAccessSection from "@/components/compare/NhsAccessSection";
import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import { isAffiliatePartner } from "@/lib/data/affiliate-partners";
import {
  buildMounjaroPriceInsights,
  buildFirstMonthsCostEstimate,
  cheapestAcrossDoses,
  cheapestProvidersAtDose,
  formatDose,
  formatGbp,
} from "@/lib/data/mounjaro-price-insights";
import { getMounjaroCompareProviders } from "@/lib/data/compare-live";
import { getMounjaroLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  buildMounjaroCompareUkFaqItems,
  mounjaroCompareUkFaqJsonLd,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/mounjaro-price-comparison",
    title: "Mounjaro Price Comparison UK 2026: Cheapest Prices by Dose",
    metaDescription:
      "Compare Mounjaro prices at 67 GPhC registered UK pharmacies. Find the cheapest Mounjaro in the UK for every dose, from 2.5 mg to 15 mg.",
    openGraphTitle: "Mounjaro Price Comparison UK: Cheapest Price by Dose",
    openGraphDescription:
      "See the lowest Mounjaro price for every dose at 67 UK pharmacies. Checked and dated, with no paid rankings.",
    imagePath: "/mounjaro healt wise.png",
    imageAlt: "Compare Mounjaro prices UK — Healthwise360",
  }),
  title: {
    absolute: "Mounjaro Price Comparison UK 2026: Cheapest Prices by Dose",
  },
};

const MOUNJARO_RESOURCE_LINKS = [
  {
    href: "/mounjaro-faq",
    title: "Mounjaro FAQ",
    description: "Read common UK questions about fees, doses, and policies.",
  },
] as const;

function compareWebPageJsonLd(providers: MounjaroUkProviderCompare[]) {
  const base = siteOrigin();
  const pageUrl = `${base}/mounjaro-price-comparison`;
  
  const webpage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Mounjaro Price Comparison UK 2026: Cheapest Prices by Dose",
    description:
      "Compare Mounjaro prices at 67 GPhC registered UK pharmacies. Find the cheapest Mounjaro in the UK for every dose, from 2.5 mg to 15 mg.",
    url: pageUrl,
    dateModified: "2026-10-15",
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
  const affiliatePriceRows = MOUNJARO_UK_COMPARE_PROVIDERS.filter((p) =>
    isAffiliatePartner(p.id),
  ).map((p) =>
    Object.fromEntries(
      MOUNJARO_DOSE_KEYS.map((k) => [k, p.prices[k] > 0 ? p.prices[k] : null]),
    ) as Record<(typeof MOUNJARO_DOSE_KEYS)[number], number | null>,
  );
  const annualCosts = buildAnnualCostEstimates(
    MOUNJARO_DOSE_KEYS,
    ["5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    priceRows,
    affiliatePriceRows,
  );
  const firstSixMonths = buildFirstMonthsCostEstimate(
    MOUNJARO_DOSE_KEYS,
    6,
    priceRows,
    affiliatePriceRows,
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

  const faqItems = insights
    ? buildMounjaroCompareUkFaqItems({
        providerCount,
        starterLow: insights.starter.low,
        starterMedian: insights.starter.median,
        starterWeekly: formatGbp(
          Math.round((insights.starter.low / 4) * 100) / 100,
        ),
        topHigh: insights.top.high,
        topMedian: insights.top.median,
        topWeekly: formatGbp(Math.round((insights.top.low / 4) * 100) / 100),
        cheapestLeader: cheapestAcross?.leader ?? insights.starter.lowProvider,
        cheapestLeaderWins: cheapestAcross?.leaderWins ?? 0,
        cheapestTotalDoses: cheapestAcross?.totalDoses ?? MOUNJARO_DOSE_KEYS.length,
        cheapestException: cheapestAcross?.exceptions[0]
          ? {
              dose: cheapestAcross.exceptions[0].dose,
              provider: cheapestAcross.exceptions[0].provider,
              price:
                cheapestByDose[cheapestAcross.exceptions[0].dose]?.[0]
                  ?.price ?? 0,
            }
          : undefined,
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
          cheapestPrice={insights?.starter.low}
          cheapestProvider={insights?.starter.lowProvider}
          providerCount={providerCount}
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

        {/* Section 3: Price table (H2: Compare Mounjaro prices UK at every pharmacy) */}
        <section
          id="mounjaro-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare Mounjaro prices UK at every pharmacy
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              This is our full Mounjaro price comparison table for the UK. It
              shows the price of every dose at {providerCount} pharmacies,
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
            <p className="mt-4 max-w-3xl text-sm text-slate-500">
              This Mounjaro injection price comparison for the UK works as a
              free Mounjaro price checker and a Mounjaro price comparison
              chart in one.
            </p>

            <div className="mt-8">
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
          </div>
        </section>

        {/* Section 4: Price by dose (H2: Mounjaro price by dose (UK)) */}
        {insights ? (
          <MounjaroPriceByDoseSection
            doses={insights.doses}
            cheapestByDose={cheapestByDose}
          />
        ) : null}

        {/* Section 5: Cheapest (H2: Where is the cheapest Mounjaro in the UK?) */}
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
                <strong className="font-semibold text-slate-900">
                  Your dose.
                </strong>{" "}
                Higher doses cost more.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Delivery.
                </strong>{" "}
                Pens are sent cold, and most pharmacies charge extra for
                this.
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
                Sort by price in our table to see the best prices for
                Mounjaro first.
              </li>
              <li>
                Add delivery and any fees on the pharmacy&apos;s website.
                This is how you compare Mounjaro costs, not just prices.
              </li>
              <li>
                Check the GPhC number on the official register before you
                pay.
              </li>
            </ol>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A Mounjaro price comparison in the UK is only fair if you
              compare the same dose. Our Mounjaro comparison site does steps
              1, 2 and 4 for you, for free. It also lets you compare
              Mounjaro providers on support and delivery, not just price.
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
                <strong className="font-semibold text-slate-900">
                  GPhC registration.
                </strong>{" "}
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
            <div className="mt-6">
              <Link
                href="/methodology"
                className="group inline-flex items-center gap-2 font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                Read how we check prices
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* Section 10: NHS (H2: Can you get Mounjaro on the NHS?) */}
        <NhsAccessSection
          medicine="Mounjaro"
          heading="Can you get Mounjaro on the NHS?"
        >
          <p>
            Yes, but only a small group of people can get it right now. The
            NHS is bringing Mounjaro in slowly, starting with people who
            have a very high BMI and health problems linked to their
            weight. If you get Mounjaro on the NHS, you pay a normal
            prescription charge or nothing.
          </p>
          <p>
            Most people pay privately for now, at the prices in our table.
            In any Mounjaro price comparison, the UK NHS route is the
            cheapest, if you qualify. Ask your GP, and compare Mounjaro
            prices for the UK here if you go private.
          </p>
        </NhsAccessSection>

        {/* Section 11: FAQ (H2: Mounjaro price comparison FAQs) */}
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

        {/* Supporting Context & Resources (No H2/H3 tags to strictly preserve heading hierarchy) */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                Mounjaro price UK: what you can expect
              </p>
              {insights ? (
                <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed text-sm md:text-base">
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

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-3xl">
              <p className="text-xl font-bold text-slate-900 md:text-2xl">
                More Mounjaro pricing resources
              </p>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Questions about Mounjaro fees, pen strengths and switching
                provider are answered in more depth here.
              </p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {MOUNJARO_RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-violet-100 bg-violet-50/40 p-5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:shadow-sm"
                >
                  <p className="font-bold text-violet-950">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-800 underline-offset-2 group-hover:underline">
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <p className="text-xl font-bold text-slate-900 md:text-2xl">
              A note on discounted Mounjaro prices
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Prices in our Mounjaro table are standard list prices. First-order
              voucher codes are excluded, and delivery is excluded unless a
              provider only sells it as part of a programme price. Some providers
              also advertise introductory, subscription or multi-month pricing;
              we have not independently confirmed those terms, so they are not
              shown. Check the provider&apos;s site for current offers.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <p className="text-xl font-bold text-slate-900 md:text-2xl">
              What is Mounjaro?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
              Mounjaro (tirzepatide) is a dual GIP/GLP-1 injection used for weight
              management in eligible adults alongside diet and activity changes.
              It is not suitable for everyone and requires medical supervision.
            </p>
            <Link
              href="/what-is-mounjaro"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-800 underline-offset-2 hover:underline"
            >
              Learn more about how Mounjaro works
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <p className="text-2xl font-bold md:text-3xl">
              Ready to compare and next-step your care?
            </p>
            <p className="mt-4 text-slate-300">
              Shortlist providers at the strength you expect to use, then
              confirm eligibility and the final total with the provider.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CompareHereLink href="#mounjaro-compare-table" size="footer" />
              <Link
                href="/what-is-mounjaro#eligibility-uk"
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
