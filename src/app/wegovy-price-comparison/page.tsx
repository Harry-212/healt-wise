import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WegovyCompareChartsSection from "@/components/compare/WegovyCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import WegovyCompareShaderHero from "@/components/wegovy/WegovyCompareShaderHero";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import {
  estimatedMonthlyCost,
  startingPrice,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
} from "@/lib/data/wegovy-uk-compare-providers";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  WEGOVY_COMPARE_UK_FAQ_ITEMS,
  wegovyCompareUkFaqJsonLd,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/wegovy-price-comparison",
  title:
    "Compare Wegovy Prices UK (2026) — Cheapest & safest providers",
  metaDescription:
    "Compare real Wegovy prices across UK pharmacies: starting pen costs, estimated monthly spend, delivery, and GPhC checks. Filter, sort, and switch discount mode. Independent snapshot — updated 2026.",
  openGraphTitle:
    "Compare Wegovy Prices UK (2026) — Cheapest & safest providers | Health Wise",
  openGraphDescription:
    "Interactive UK Wegovy price table: filter by provider, price band, rating, and delivery. Illustrative charts and FAQs.",
  imagePath: "/wegovy healt wise.png",
  imageAlt: "Compare Wegovy prices UK — Health Wise",
});

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compare Wegovy Prices UK (2026)",
    description:
      "Independent comparison of illustrative Wegovy pen prices across UK online pharmacies and clinics.",
    url: `${base}/wegovy-price-comparison`,
    dateModified: "2026-04-07",
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: base,
    },
  };
}

export default function CompareWegovyPricesUkPage() {
  const faqLd = wegovyCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = WEGOVY_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    startingPrice(a) <= startingPrice(b) ? a : b,
  );
  const bestValue =
    WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.badges?.includes("bestValue")) ??
    WEGOVY_UK_COMPARE_PROVIDERS[0];

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
        <WegovyCompareShaderHero lastUpdated={WEGOVY_UK_COMPARE_LAST_UPDATED} />

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
              Each pen strength has its own column. Filter by name, starting
              price band, rating, and delivery type; every column header shows
              sort controls (active column uses a filled arrow). Tap a provider
              name for its profile page. Use{" "}
              <strong className="font-semibold text-slate-800">
                Discount price
              </strong>{" "}
              to preview where verified offers will appear. Row tint and green
              cells highlight the lowest prices in your current view.
            </p>
            <div className="mt-10">
              <WegovyUkCompareTable providers={WEGOVY_UK_COMPARE_PROVIDERS} />
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
              <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                Wegovy prices in the UK vary depending on the provider, dosage,
                and included services. Entry-level pricing often starts lower,
                but total monthly costs can increase as dosage levels rise. The
                charts below summarise how listed prices spread and climb by pen
                strength across our snapshot — not a quote for your care.
              </p>
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
            <p className="mt-4 text-slate-600 leading-relaxed">
              Prices can differ based on:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">Dosage</strong>{" "}
                — higher-strength pens typically cost more per month.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Consultation fees
                </strong>{" "}
                — some sites bundle assessment into the medicine price; others
                break it out.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Delivery and cold-chain logistics
                </strong>{" "}
                — refrigerated shipping and courier choices affect headline
                totals.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Support services
                </strong>{" "}
                — ongoing reviews, apps, or coaching may be reflected in
                pricing.
              </li>
            </ul>
          </div>
        </section>

        {/* Cheapest vs best value */}
        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Cheapest Wegovy vs best value: what matters?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The lowest price is not always the best option. Some providers
              include consultations, support, or faster delivery, which may
              offer better overall value once you factor in time, convenience,
              and clinical follow-up.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Lens</th>
                    <th className="px-4 py-3">Example in this snapshot</th>
                    <th className="px-4 py-3">Starting pen (illustrative)</th>
                    <th className="px-4 py-3">Monthly est.</th>
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
                    <td className="px-4 py-3 tabular-nums text-slate-800">
                      £{estimatedMonthlyCost(cheapest)}
                    </td>
                  </tr>
                  <tr className="bg-teal-50/30">
                    <td className="px-4 py-3 font-semibold text-teal-900">
                      Best value pick
                    </td>
                    <td className="px-4 py-3 text-slate-800">{bestValue.name}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">
                      £{startingPrice(bestValue)}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">
                      £{estimatedMonthlyCost(bestValue)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="border-t border-slate-100 bg-slate-50/80 px-4 py-3 text-xs text-slate-500">
                “Best value” is an editorial highlight for balance of price,
                delivery note, and rating — not a clinical endorsement. Always
                choose a regulated route you trust.
              </p>
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
              As dosage increases, the cost of treatment typically rises. Most
              people begin at a lower dose and gradually increase to a
              maintenance level, so your early months may look cheaper on paper
              than later titration steps. Your prescriber will individualise the
              schedule.
            </p>
          </div>
        </section>

        {/* Discount strategy */}
        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How to find discounted Wegovy prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Some providers may offer introductory discounts, subscription
              pricing, or bundles. We are verifying these on a per-pharmacy
              basis — use the{" "}
              <strong className="text-slate-900">Discount price</strong> toggle
              above to see where promotional rows will appear once confirmed.
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
              <a
                href="#wegovy-compare-table"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:brightness-95"
              >
                Compare prices now
              </a>
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
