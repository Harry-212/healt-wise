import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import MounjaroCompareChartsSection from "@/components/compare/MounjaroCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import MounjaroCompareShaderHero from "@/components/mounjaro/MounjaroCompareShaderHero";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import AnnualCostSection from "@/components/compare/AnnualCostSection";
import NhsAccessSection from "@/components/compare/NhsAccessSection";
import {
  estimatedMonthlyCost,
  MOUNJARO_DOSE_KEYS,
  startingPrice,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import {
  buildMounjaroPriceInsights,
  formatDose,
  formatGbp,
} from "@/lib/data/mounjaro-price-insights";
import { getMounjaroCompareProviders } from "@/lib/data/compare-live";
import { getMounjaroLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  MOUNJARO_COMPARE_UK_FAQ_ITEMS,
  mounjaroCompareUkFaqJsonLd,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/mounjaro-price-comparison",
    title: "Mounjaro Price Comparison UK | Compare 60+ Pharmacies",
    metaDescription:
      "Compare Mounjaro prices by dose across 60+ GPhC-registered UK pharmacies. Review delivery fees, provider ratings and total monthly treatment costs.",
    openGraphTitle: "Mounjaro Price Comparison UK | Compare 60+ Pharmacies",
    openGraphDescription:
      "Compare Mounjaro prices by dose across 60+ GPhC-registered UK pharmacies. Review delivery fees, provider ratings and total monthly treatment costs.",
    imagePath: "/mounjaro healt wise.png",
    imageAlt: "Compare Mounjaro prices UK — Healthwise360",
  }),
  title: {
    absolute: "Mounjaro Price Comparison UK | Compare 60+ Pharmacies",
  },
};

const MOUNJARO_RESOURCE_LINKS = [
  {
    href: "/mounjaro-faq",
    title: "Mounjaro FAQ",
    description: "Read common UK questions about fees, doses, and policies.",
  },
] as const;

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mounjaro Price Comparison UK | Compare 60+ Pharmacies",
    description:
      "Compare Mounjaro prices by dose across 60+ GPhC-registered UK pharmacies. Review delivery fees, provider ratings and total monthly treatment costs.",
    url: `${base}/mounjaro-price-comparison`,
    dateModified: "2026-09-24",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

export default function CompareMounjaroPricesUkPage() {
  const MOUNJARO_UK_COMPARE_PROVIDERS = getMounjaroCompareProviders();
  const mounjaroLastUpdated = getMounjaroLastUpdatedLabel();
  const faqLd = mounjaroCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = MOUNJARO_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    startingPrice(a) <= startingPrice(b) ? a : b,
  );
  const annualCosts = buildAnnualCostEstimates(
    MOUNJARO_DOSE_KEYS,
    ["5mg", "7.5mg", "10mg", "12.5mg", "15mg"],
    MOUNJARO_UK_COMPARE_PROVIDERS.map((p) => p.prices),
  );
  const insights = buildMounjaroPriceInsights(MOUNJARO_UK_COMPARE_PROVIDERS);

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Prices"
        sectionPath="/prices"
        pageName="Compare Mounjaro Prices UK (2026)"
        pagePath="/mounjaro-price-comparison"
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
        <MounjaroCompareShaderHero lastUpdated={mounjaroLastUpdated} />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        <section
          id="mounjaro-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Advanced comparison table
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              Each pen strength has its own column (2.5 mg–15 mg). Filter by name,
              starting price band, rating, and delivery type; every column header
              shows sort controls. Tap a provider name for its profile page. Row
              tint and highlighted cells show the lowest prices in your current
              view.
            </p>
            <div className="mt-10">
              <MounjaroUkCompareTable providers={MOUNJARO_UK_COMPARE_PROVIDERS} lastUpdated={mounjaroLastUpdated} />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                More Mounjaro pricing resources
              </h2>
              <p className="mt-3 text-slate-600">
                Questions about Mounjaro fees, pen strengths and switching
                provider are answered in more depth here.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {MOUNJARO_RESOURCE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-violet-100 bg-violet-50/40 p-5 transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:shadow-sm"
                >
                  <h3 className="font-bold text-violet-950">{item.title}</h3>
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

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Mounjaro price UK: what you can expect
              </h2>
              {insights ? (
                <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                  Across the {insights.providerCount} providers in our table
                  (prices checked {mounjaroLastUpdated}), a{" "}
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
                  Pen strength
                </strong>{" "}
                — each strength from 2.5 mg to 15 mg is priced separately, and
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
                <strong className="font-semibold text-slate-900">
                  Chilled delivery
                </strong>{" "}
                — Mounjaro pens are sent refrigerated. Delivery is usually
                charged on top of the table prices; check each provider&apos;s
                delivery note.
              </li>
            </ul>
          </div>
        </section>

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
              Because most of a year is spent at a maintenance strength,
              compare the dose you expect to stay on, not only the first pen.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Lens</th>
                    <th className="px-4 py-3">Example in this snapshot</th>
                    <th className="px-4 py-3">Starting pen</th>
                    <th className="px-4 py-3">Monthly est.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-violet-50/50">
                    <td className="px-4 py-3 font-semibold text-violet-900">
                      Cheapest listed
                    </td>
                    <td className="px-4 py-3 text-slate-800">{cheapest.name}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">
                      £{startingPrice(cheapest)}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">
                      £{estimatedMonthlyCost(cheapest)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              UK verified Mounjaro providers
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              All providers in our table are presented for comparison in a UK
              regulated-medicine context. Confirm the supplying pharmacy on the{" "}
              <a
                href="https://www.pharmacyregulation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                General Pharmaceutical Council (GPhC)
              </a>{" "}
              register before you pay.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              For more on safety, see our{" "}
              <Link
                href="/pharmacy-safety-gphc-verification"
                className="font-semibold text-violet-800 underline-offset-2 hover:underline"
              >
                GPhC verification guide
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How dose affects Mounjaro cost
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Lowest, median and highest listed price per pen at each strength
              across our table. Your prescriber decides which strength you use
              and when it changes.
            </p>
            {insights ? (
              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-sm">
                  <caption className="sr-only">
                    Lowest, median and highest listed Mounjaro pen price by
                    strength
                  </caption>
                  <thead className="bg-slate-50 text-slate-700">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-semibold">
                        Pen strength
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
          medicine="Mounjaro"
          estimates={annualCosts}
          providerCount={MOUNJARO_UK_COMPARE_PROVIDERS.length}
          intro={
            <>
              Mounjaro usually starts at 2.5 mg once a week for four weeks, then
              increases in 2.5 mg steps no sooner than every four weeks, up to
              15 mg. Year one therefore includes several months on lower-priced
              pens before any maintenance strength.
            </>
          }
        />

        <NhsAccessSection medicine="Mounjaro">
          <p>
            Mounjaro has NICE approval for weight management in the UK and is
            being introduced into NHS services through a phased rollout.
            Access is still limited by local commissioning criteria and
            capacity, so most people in the UK currently get tirzepatide on a
            private prescription.
          </p>
        </NhsAccessSection>

        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              A note on discounted Mounjaro prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What is Mounjaro?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Mounjaro (tirzepatide) is a dual GIP/GLP-1 injection used for weight
              management in eligible adults alongside diet and activity changes.
              It is not suitable for everyone and requires medical supervision.
            </p>
            <Link
              href="/what-is-mounjaro"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-800 underline-offset-2 hover:underline"
            >
              Learn more about how Mounjaro works
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 space-y-3">
              {MOUNJARO_COMPARE_UK_FAQ_ITEMS.map((item) => (
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

        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to compare and next-step your care?
            </h2>
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
