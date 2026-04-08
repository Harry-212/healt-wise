import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import MounjaroCompareShaderHero from "@/components/mounjaro/MounjaroCompareShaderHero";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import {
  MounjaroUkDosageCostLineChart,
  MounjaroUkPriceRangeByDoseChart,
} from "@/components/mounjaro/MounjaroUkCompareCharts";
import InternalLinks from "@/components/content/InternalLinks";
import { internalLinksFor } from "@/lib/internal-linking";
import {
  estimatedMonthlyCost,
  startingPrice,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
} from "@/lib/data/mounjaro-uk-compare-providers";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  MOUNJARO_COMPARE_UK_FAQ_ITEMS,
  mounjaroCompareUkFaqJsonLd,
} from "@/lib/seo/mounjaro-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/mounjaro-price-comparison",
  title:
    "Compare Mounjaro Prices UK (2026) — Cheapest & safest providers",
  metaDescription:
    "Compare real Mounjaro prices across UK pharmacies: pen costs by strength (2.5–15 mg), estimated monthly spend, filters, sort, and discount mode. Independent snapshot — updated 2026.",
  openGraphTitle:
    "Compare Mounjaro Prices UK (2026) — Cheapest & safest providers | Health Wise",
  openGraphDescription:
    "Interactive UK Mounjaro price table: filter by provider, price band, rating, and delivery. Illustrative charts and FAQs.",
  imagePath: "/mounjaro healt wise.png",
  imageAlt: "Compare Mounjaro prices UK — Health Wise",
});

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compare Mounjaro Prices UK (2026)",
    description:
      "Independent comparison of illustrative Mounjaro pen prices across UK online pharmacies and clinics.",
    url: `${base}/mounjaro-price-comparison`,
    dateModified: "2026-04-07",
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: base,
    },
  };
}

export default function CompareMounjaroPricesUkPage() {
  const faqLd = mounjaroCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = MOUNJARO_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    startingPrice(a) <= startingPrice(b) ? a : b,
  );
  const bestValue =
    MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.badges?.includes("bestValue")) ??
    MOUNJARO_UK_COMPARE_PROVIDERS[0];

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
        <MounjaroCompareShaderHero lastUpdated={MOUNJARO_UK_COMPARE_LAST_UPDATED} />

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
              shows sort controls. Tap a provider name for its profile page. Use{" "}
              <strong className="font-semibold text-slate-800">
                Discount price
              </strong>{" "}
              to preview where verified offers will appear. Row tint and
              highlighted cells show the lowest prices in your current view.
            </p>
            <div className="mt-10">
              <MounjaroUkCompareTable providers={MOUNJARO_UK_COMPARE_PROVIDERS} />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Mounjaro price UK: what you can expect
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                Mounjaro prices in the UK vary depending on the provider, dose,
                and included services. Entry-level pricing often starts lower,
                but monthly costs can increase as you titrate to higher strengths.
                The charts below summarise how listed prices spread and climb by
                pen strength across our snapshot — not a quote for your care.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-1">
              <MounjaroUkPriceRangeByDoseChart
                providers={MOUNJARO_UK_COMPARE_PROVIDERS}
              />
              <MounjaroUkDosageCostLineChart
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
            <p className="mt-4 text-slate-600 leading-relaxed">
              Prices can differ based on:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">Dose</strong>{" "}
                — higher strengths typically cost more per month.
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
                — refrigerated shipping affects headline totals.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Support services
                </strong>{" "}
                — reviews, apps, or coaching may be reflected in pricing.
              </li>
            </ul>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Cheapest Mounjaro vs best value: what matters?
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
                  <tr className="bg-violet-50/30">
                    <td className="px-4 py-3 font-semibold text-violet-800">
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
              As dose increases, the cost of treatment typically rises. Most
              people begin at a lower strength and titrate over time; your
              prescriber will individualise the schedule.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How to find discounted Mounjaro prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Some providers may offer introductory discounts, subscription
              pricing, or bundles. We are verifying these per pharmacy — use the{" "}
              <strong className="text-slate-900">Discount price</strong> toggle
              above to see where promotional rows will appear once confirmed.
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
              Use the table to shortlist providers, then confirm eligibility and
              live pricing on regulated sites.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href="#mounjaro-compare-table"
                className="inline-flex items-center justify-center rounded-2xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-900 shadow-lg transition hover:brightness-95"
              >
                Compare prices now
              </a>
              <Link
                href="/what-is-mounjaro#eligibility-uk"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Start your treatment journey
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 sm:px-5 sm:py-10 md:px-8 md:py-12">
          <InternalLinks links={internalLinksFor("mounjaroPriceUk")} />
        </div>
      </article>
    </>
  );
}
