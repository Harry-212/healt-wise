import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import SaxendaCompareChartsSection from "@/components/compare/SaxendaCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import SaxendaCompareShaderHero from "@/components/saxenda/SaxendaCompareShaderHero";
import SaxendaUkCompareTable from "@/components/saxenda/SaxendaUkCompareTable";
import {
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
  headlinePackPrice,
} from "@/lib/data/saxenda-uk-compare-providers";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  SAXENDA_COMPARE_UK_FAQ_ITEMS,
  saxendaCompareUkFaqJsonLd,
} from "@/lib/seo/saxenda-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/saxenda-price-comparison",
  title:
    "Compare Saxenda Prices UK (2026) — Cheapest & safest providers",
  metaDescription:
    "Compare illustrative Saxenda (liraglutide) pack prices across UK pharmacies: 1, 3, and 5 pens, £/mg, total and repeat pricing, delivery, trust, and discount mode. Independent snapshot — updated 2026.",
  openGraphTitle:
    "Compare Saxenda Prices UK (2026) — Cheapest & safest providers | Health Wise",
  openGraphDescription:
    "Interactive UK Saxenda table: switch 1/3/5 pens, sort and filter, GPhC and cold-chain context. Pack charts and FAQs.",
  imagePath: "/saxenda health wise.png",
  imageAlt: "Compare Saxenda prices UK — Health Wise",
});

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compare Saxenda Prices UK (2026)",
    description:
      "Independent comparison of illustrative Saxenda multi-pack (1/3/5 pens) prices across UK online pharmacies.",
    url: `${base}/saxenda-price-comparison`,
    dateModified: "2026-04-07",
    isPartOf: {
      "@type": "WebSite",
      name: "Health Wise",
      url: base,
    },
  };
}

export default function CompareSaxendaPricesUkPage() {
  const faqLd = saxendaCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = SAXENDA_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    headlinePackPrice(a, "1") <= headlinePackPrice(b, "1") ? a : b,
  );
  const bestValue =
    SAXENDA_UK_COMPARE_PROVIDERS.find((p) => p.promoNote) ??
    SAXENDA_UK_COMPARE_PROVIDERS.reduce((a, b) =>
      a.rating >= b.rating ? a : b,
    );

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
        <SaxendaCompareShaderHero lastUpdated={SAXENDA_UK_COMPARE_LAST_UPDATED} />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        <section
          id="saxenda-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Advanced comparison table
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              All three pack sizes appear side by side:{" "}
              <strong className="font-semibold text-slate-800">1 pen</strong>,{" "}
              <strong className="font-semibold text-slate-800">3 pens</strong>, and{" "}
              <strong className="font-semibold text-slate-800">5 pens</strong> — each
              cell shows the pack price and £/mg. Filter by name and rating; sort
              any column. Use{" "}
              <strong className="font-semibold text-slate-800">
                Discount price
              </strong>{" "}
              for member offers when verified.
            </p>
            <div className="mt-10">
              <SaxendaUkCompareTable providers={SAXENDA_UK_COMPARE_PROVIDERS} />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Saxenda price UK: what you can expect
              </h2>
              <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
                Saxenda is priced per pack of pens; ordering more pens at once
                often lowers £/mg, but repeat pricing and delivery still vary by
                provider. The charts below summarise how our illustrative
                snapshot spreads by pack size — not a quote for your care.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-1">
              <SaxendaCompareChartsSection
                providers={SAXENDA_UK_COMPARE_PROVIDERS}
              />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Why do Saxenda prices vary in the UK?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Prices can differ based on:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">
                  Pack size
                </strong>{" "}
                — 3- and 5-pen bundles may improve £/mg versus a single pen.
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
                — refrigerated shipping and collection options affect totals.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Membership or promotions
                </strong>{" "}
                — loyalty or member pricing can change the headline checkout.
              </li>
            </ul>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Cheapest Saxenda vs best value: what matters?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              The lowest single-pen price is not always the best option. Some
              providers include consultations, support, or faster collection,
              which may offer better overall value once you factor in time,
              convenience, and clinical follow-up.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Lens</th>
                    <th className="px-4 py-3">Example in this snapshot</th>
                    <th className="px-4 py-3">1 pen (illustrative)</th>
                    <th className="px-4 py-3">5 pens total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-sky-50/50">
                    <td className="px-4 py-3 font-semibold text-sky-900">
                      Cheapest listed
                    </td>
                    <td className="px-4 py-3 text-slate-800">{cheapest.name}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">
                      £{headlinePackPrice(cheapest, "1").toFixed(2)}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">
                      £{cheapest.packs["5"].totalCost.toFixed(2)}
                    </td>
                  </tr>
                  <tr className="bg-sky-50/30">
                    <td className="px-4 py-3 font-semibold text-sky-800">
                      Best value pick
                    </td>
                    <td className="px-4 py-3 text-slate-800">{bestValue.name}</td>
                    <td className="px-4 py-3 tabular-nums text-slate-900">
                      £{headlinePackPrice(bestValue, "1").toFixed(2)}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-slate-800">
                      £{bestValue.packs["5"].totalCost.toFixed(2)}
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
              UK verified Saxenda providers
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              All providers in our table are presented for comparison in a UK
              regulated-medicine context. Confirm the supplying pharmacy on the{" "}
              <a
                href="https://www.pharmacyregulation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sky-800 underline-offset-2 hover:underline"
              >
                General Pharmaceutical Council (GPhC)
              </a>{" "}
              register before you pay.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              For more on safety, see our{" "}
              <Link
                href="/pharmacy-safety-gphc-verification"
                className="font-semibold text-sky-800 underline-offset-2 hover:underline"
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
              Daily dosing and titration
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Saxenda is a daily injection; prescribers usually increase the dose
              gradually. Pack purchases and repeat intervals can look different
              from weekly GLP-1 pens — always follow the schedule your clinician
              gives you.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How to find discounted Saxenda prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Some providers may offer member pricing, introductory discounts, or
              bundles. We are verifying these per pharmacy — use the{" "}
              <strong className="text-slate-900">Discount price</strong> toggle
              above to see where promotional cells will appear once confirmed.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What is Saxenda?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Saxenda (liraglutide) is a GLP-1 injection for weight management in
              eligible adults, taken once daily. It is not suitable for everyone
              and requires medical supervision.
            </p>
            <Link
              href="/what-is-saxenda"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-800 underline-offset-2 hover:underline"
            >
              Learn more about how Saxenda works
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
              {SAXENDA_COMPARE_UK_FAQ_ITEMS.map((item) => (
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
              <CompareHereLink href="#saxenda-compare-table" size="footer" />
              <Link
                href="/what-is-saxenda#eligibility-uk"
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
