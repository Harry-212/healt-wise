import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import WegovyCompareChartsSection from "@/components/compare/WegovyCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import WegovyCompareShaderHero from "@/components/wegovy/WegovyCompareShaderHero";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import {
  startingPrice,
  WEGOVY_DOSE_KEYS,
  wegovyPriceAmount,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  buildDosePriceInsights,
  formatDose,
  formatGbp,
} from "@/lib/data/mounjaro-price-insights";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import AnnualCostSection from "@/components/compare/AnnualCostSection";
import NhsAccessSection from "@/components/compare/NhsAccessSection";
import { getWegovyCompareProviders } from "@/lib/data/compare-live";
import { getWegovyLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  WEGOVY_COMPARE_UK_FAQ_ITEMS,
  wegovyCompareUkFaqJsonLd,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

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

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    description:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    url: `${base}/wegovy-price-comparison`,
    dateModified: "2026-09-25",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export default function CompareWegovyPricesUkPage() {
  const WEGOVY_UK_COMPARE_PROVIDERS = getWegovyCompareProviders();
  const wegovyLastUpdated = getWegovyLastUpdatedLabel();
  const faqLd = wegovyCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = WEGOVY_UK_COMPARE_PROVIDERS.filter(
    (p) => startingPrice(p) > 0,
  ).reduce((a, b) => (startingPrice(a) <= startingPrice(b) ? a : b));
  // "TBC" / "OOS" cells are not listed prices.
  const priceRows = WEGOVY_UK_COMPARE_PROVIDERS.map((p) =>
    Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  );
  const annualCosts = buildAnnualCostEstimates(
    WEGOVY_DOSE_KEYS,
    ["1mg", "1.7mg", "2.4mg", "7.2mg"],
    priceRows,
  );
  const insights = buildDosePriceInsights(
    WEGOVY_UK_COMPARE_PROVIDERS.map((p, i) => ({
      name: p.name,
      prices: priceRows[i],
    })),
    WEGOVY_DOSE_KEYS,
    "0.25mg",
    "2.4mg",
  );
  const highDose = insights?.doses.find((d) => d.dose === "7.2mg");

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Prices"
        sectionPath="/prices"
        pageName="Compare Wegovy Prices UK (2026)"
        pagePath="/wegovy-price-comparison"
      />
<script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <article className="w-full">
        <WegovyCompareShaderHero lastUpdated={wegovyLastUpdated} />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Core table */}
        <section
          id="wegovy-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Advanced comparison table
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Each pen strength has its own column (0.25 mg–7.2 mg). Pick a
              single strength, or filter by name, starting price band and
              Trustpilot rating; every column header shows sort controls
              (active column uses a filled arrow). Tap a provider name for its
              profile page. Row tint and green cells highlight the lowest prices
              in your current view. TBC means we have no confirmed price for
              that strength.
            </p>
            <div className="mt-10">
              <WegovyUkCompareTable providers={WEGOVY_UK_COMPARE_PROVIDERS} lastUpdated={wegovyLastUpdated} />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                More Wegovy pricing resources
              </h2>
              <p className="mt-3 text-slate-600">
                Questions about Wegovy fees, pen strengths and switching
                provider are answered in more depth here.
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

        {/* Price overview + charts */}
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
                  {formatGbp(insights.medianStepUp)} per pen.
                  {highDose ? (
                    <>
                      {" "}
                      The 7.2 mg pen is listed by {highDose.listed} of{" "}
                      {insights.providerCount} providers, from{" "}
                      {formatGbp(highDose.low)} to {formatGbp(highDose.high)}{" "}
                      (median {formatGbp(highDose.median)}); the others show
                      TBC.
                    </>
                  ) : null}{" "}
                  The charts below show how prices spread at each strength.
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

        {/* Why prices differ */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why do Wegovy prices vary in the UK?
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
                  Pen strength
                </strong>{" "}
                — each strength from 0.25 mg to 7.2 mg is priced separately, and
                most providers charge more for each step up.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Consultation model
                </strong>{" "}
                — online doctors and pharmacies may include the prescriber
                assessment in the pen price, while programmes may bundle
                coaching or app support.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Delivery</strong>{" "}
                — our table shows the pen price only; check each provider&apos;s
                delivery charge at checkout.
              </li>
            </ul>
          </div>
        </section>

        {/* Total cost and what's included */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare the total cost and what&apos;s included
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              A lower advertised price may not mean a lower total cost. Compare
              the same dose and pack size, check delivery and consultation
              charges, and review any offer conditions and included support.
              Confirm the current details directly with the provider before
              making your choice.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {insights &&
              insights.starter.lowProvider !== insights.top.lowProvider ? (
                <>
                  The cheapest {formatDose(insights.starter.dose)} starter pen
                  is not the cheapest at {formatDose(insights.top.dose)}: in our
                  table the lowest starter price is from{" "}
                  {insights.starter.lowProvider}, but the lowest{" "}
                  {formatDose(insights.top.dose)} price is from{" "}
                  {insights.top.lowProvider}.{" "}
                </>
              ) : null}
              To compare like for like, use the same strength column for every
              provider, check whether a strength you may need is listed or shows
              TBC, and add delivery and any separate consultation charge.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Lens</th>
                    <th className="px-4 py-3">Example in this snapshot</th>
                    <th className="px-4 py-3">Starting pen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-emerald-50/40">
                    <td className="px-4 py-3 font-semibold text-emerald-900">
                      Cheapest listed
                    </td>
                    <td className="px-4 py-3 text-slate-800">{cheapest.name}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">
                      £{startingPrice(cheapest)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Verified providers */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              UK verified Wegovy providers
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              All providers in our table are presented for comparison in a UK
              regulated-medicine context. You should still confirm that the
              supplying pharmacy appears on the{" "}
              <a
                href="https://www.pharmacyregulation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal-800 underline-offset-2 hover:underline"
              >
                General Pharmaceutical Council (GPhC)
              </a>{" "}
              register and that prescribing follows UK rules before you pay.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              For more on how we think about safety, see our{" "}
              <Link
                href="/pharmacy-safety-gphc-verification"
                className="font-semibold text-teal-800 underline-offset-2 hover:underline"
              >
                GPhC verification guide
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Dosage & cost */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How dosage affects Wegovy cost
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Lowest, median and highest listed price per pen at each strength
              across our table, and how many providers list that strength. Your
              prescriber decides which strength you use and when it changes.
            </p>
            {insights ? (
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Lowest, median and highest listed Wegovy pen price by
                    strength
                  </caption>
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Pen strength
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Providers listing
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Lowest listed
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Median
                      </th>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Highest listed
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {insights.doses.map((d) => (
                      <tr key={d.dose}>
                        <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                          {formatDose(d.dose)}
                        </th>
                        <td className="px-4 py-3 tabular-nums">
                          {d.listed} of {insights.providerCount}
                        </td>
                        <td className="px-4 py-3 tabular-nums">{formatGbp(d.low)}</td>
                        <td className="px-4 py-3 tabular-nums">{formatGbp(d.median)}</td>
                        <td className="px-4 py-3 tabular-nums">{formatGbp(d.high)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </section>

        <AnnualCostSection
          medicine="Wegovy"
          estimates={annualCosts}
          providerCount={WEGOVY_UK_COMPARE_PROVIDERS.length}
          intro={
            <>
              Monthly pen prices only tell part of the story. Most people spend
              the first few months on lower starter strengths before settling on
              a maintenance dose, so year one usually costs less than a full year
              at maintenance.
              {highDose
                ? ` The 7.2 mg rows use only the ${highDose.listed} providers that list a 7.2 mg price.`
                : null}
            </>
          }
        />

        <NhsAccessSection medicine="Wegovy">
          <p>
            Yes, but access is limited. Wegovy has NICE approval for weight
            management in England, and the NHS offers it through specialist
            weight management services to people who meet specific clinical
            criteria. The rollout is phased rather than universal.
          </p>
          <p>
            In practice, most people in the UK still get Wegovy on a private
            prescription, either because they do not meet the NHS criteria or
            because waiting times and local availability make private access
            the more realistic route.
          </p>
        </NhsAccessSection>

        {/* Discount strategy */}
        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              A note on discounted Wegovy prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Some providers may offer introductory discounts, subscription
              pricing, or bundles. We have not been able to independently confirm
              any current discount terms, so promotional badges are hidden until
              verified. Always check the provider&apos;s site for the latest offers.
            </p>
          </div>
        </section>

        {/* What is Wegovy short */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What is Wegovy?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Wegovy is a GLP-1 weight loss injection designed to reduce
              appetite and support long-term weight management alongside diet and
              activity changes. It is not suitable for everyone and requires
              medical supervision.
            </p>
            <Link
              href="/what-is-wegovy"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-800 underline-offset-2 hover:underline"
            >
              Learn more about how Wegovy works
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {WEGOVY_COMPARE_UK_FAQ_ITEMS.map((item) => (
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
