import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import SaxendaCompareChartsSection from "@/components/compare/SaxendaCompareChartsSection";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import SaxendaCompareShaderHero from "@/components/saxenda/SaxendaCompareShaderHero";
import SaxendaUkCompareTable from "@/components/saxenda/SaxendaUkCompareTable";
import {
  SAXENDA_PACK_KEYS,
  SAXENDA_UK_COMPARE_PROVIDERS,
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  headlinePackPrice,
  type SaxendaPackKey,
  type SaxendaUkProviderCompare,
} from "@/lib/data/saxenda-uk-compare-providers";
import { formatGbp } from "@/lib/data/mounjaro-price-insights";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  SAXENDA_COMPARE_UK_FAQ_ITEMS,
  saxendaCompareUkFaqJsonLd,
} from "@/lib/seo/saxenda-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = buildPageShareMetadata({
  canonicalPath: "/saxenda-price-comparison",
  title:
    "Compare Saxenda Prices UK",
  metaDescription:
    "Compare real Saxenda (liraglutide) pack prices across UK pharmacies: 1, 3 and 5 pens, delivery and the date each price was last checked.",
  openGraphTitle:
    "Compare Saxenda Prices UK | Healthwise360",
  openGraphDescription:
    "Interactive UK Saxenda table: switch 1/3/5 pens, sort and filter, GPhC and cold-chain context. Pack charts and FAQs.",
  imagePath: "/saxenda health wise.png",
  imageAlt: "Compare Saxenda prices UK — Healthwise360",
});

function compareWebPageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compare Saxenda Prices UK (2026)",
    description:
      "Independent comparison of Saxenda multi-pack (1/3/5 pens) prices across UK online pharmacies.",
    url: `${base}/saxenda-price-comparison`,
    dateModified: "2026-09-25",
    isPartOf: {
      "@type": "WebSite",
      name: "Healthwise360",
      url: base,
    },
  };
}

const PENS_IN_PACK: Record<SaxendaPackKey, number> = { "1": 1, "3": 3, "5": 5 };

type PackStat = {
  pack: SaxendaPackKey;
  low: SaxendaUkProviderCompare;
  high: SaxendaUkProviderCompare;
};

/** Cheapest and dearest provider for each pack size, from the table data. */
function packStats(providers: SaxendaUkProviderCompare[]): PackStat[] {
  return SAXENDA_PACK_KEYS.map((pack) => {
    const byPrice = [...providers].sort(
      (a, b) => a.packs[pack].packPrice - b.packs[pack].packPrice,
    );
    return { pack, low: byPrice[0], high: byPrice[byPrice.length - 1] };
  });
}

function perPen(p: SaxendaUkProviderCompare, pack: SaxendaPackKey): number {
  return p.packs[pack].packPrice / PENS_IN_PACK[pack];
}

export default function CompareSaxendaPricesUkPage() {
  const faqLd = saxendaCompareUkFaqJsonLd();
  const webLd = compareWebPageJsonLd();

  const cheapest = SAXENDA_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    headlinePackPrice(a, "1") <= headlinePackPrice(b, "1") ? a : b,
  );
  const stats = packStats(SAXENDA_UK_COMPARE_PROVIDERS);
  const [single, , five] = stats;
  // Per-pen saving from buying five pens instead of single pens, per provider.
  const fivePackSavings = SAXENDA_UK_COMPARE_PROVIDERS.map(
    (p) => perPen(p, "1") - perPen(p, "5"),
  );
  const minSaving = Math.min(...fivePackSavings);
  const maxSaving = Math.max(...fivePackSavings);
  const perMgSorted = SAXENDA_UK_COMPARE_PROVIDERS.flatMap((p) =>
    SAXENDA_PACK_KEYS.map((pack) => ({
      p,
      pack,
      perMg: p.packs[pack].pricePerMg,
    })),
  ).sort((a, b) => a.perMg - b.perMg);
  const lowestPerMg = perMgSorted[0];
  const highestPerMg = perMgSorted[perMgSorted.length - 1];
  const packName = (k: SaxendaPackKey) => (k === "1" ? "single pen" : `${k}-pen pack`);

  return (
    <>
      
      <BreadcrumbJsonLd
        sectionName="Prices"
        sectionPath="/prices"
        pageName="Compare Saxenda Prices UK (2026)"
        pagePath="/saxenda-price-comparison"
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
              <strong className="font-semibold text-slate-800">5 pens</strong>. Each
              cell shows the pack price, which is what you pay for that pack,
              and underneath it the £/mg: the pack price divided by the
              liraglutide in the pack (18 mg per pen). Filter by name and
              rating; sort any column.
            </p>
            <div className="mt-10">
              <SaxendaUkCompareTable providers={SAXENDA_UK_COMPARE_PROVIDERS} lastUpdated={SAXENDA_UK_COMPARE_LAST_UPDATED} />
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
                Across the {SAXENDA_UK_COMPARE_PROVIDERS.length} providers in our
                table (latest price update {SAXENDA_UK_COMPARE_LAST_UPDATED}), a
                single pen costs {formatGbp(single.low.packs["1"].packPrice)} to{" "}
                {formatGbp(single.high.packs["1"].packPrice)}. A 3-pen pack costs{" "}
                {formatGbp(stats[1].low.packs["3"].packPrice)} to{" "}
                {formatGbp(stats[1].high.packs["3"].packPrice)} and a 5-pen pack{" "}
                {formatGbp(five.low.packs["5"].packPrice)} to{" "}
                {formatGbp(five.high.packs["5"].packPrice)}. Worked out per pen,
                the 5-pen pack comes to {formatGbp(perPen(five.low, "5"))} to{" "}
                {formatGbp(perPen(five.high, "5"))}. By £/mg, the lowest figure
                is {formatGbp(lowestPerMg.perMg)} ({lowestPerMg.p.name},{" "}
                {packName(lowestPerMg.pack)}) and the highest{" "}
                {formatGbp(highestPerMg.perMg)} ({highestPerMg.p.name},{" "}
                {packName(highestPerMg.pack)}). The charts below show the spread
                for each pack size.
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
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">
                  Pack size
                </strong>{" "}
                — at every provider in our table, buying five pens works out
                cheaper per pen than buying single pens, by{" "}
                {formatGbp(minSaving)} to {formatGbp(maxSaving)} a pen.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Consultation model
                </strong>{" "}
                — online doctors and pharmacies may include the prescriber
                assessment in the pack price; check what each provider
                charges separately.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">
                  Delivery and collection
                </strong>{" "}
                — at the {SAXENDA_UK_COMPARE_LAST_UPDATED} check, each provider
                listed delivery as included; collection options differ, as
                shown in the Delivery column.
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
              {single.low.id !== five.low.id ? (
                <>
                  The cheapest single pen is not the cheapest 5-pen pack: in our
                  table the lowest single-pen price is from {single.low.name},
                  but the lowest 5-pen price is from {five.low.name}.{" "}
                </>
              ) : null}
              Compare providers on the same pack size. Use the per-pen or £/mg
              figure only when comparing different pack sizes, and remember a
              larger pack costs more at checkout even when it is cheaper per
              pen.
            </p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Lens</th>
                    <th className="px-4 py-3">Example in this snapshot</th>
                    <th className="px-4 py-3">1 pen</th>
                    <th className="px-4 py-3">5-pen pack</th>
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
                      £{cheapest.packs["5"].packPrice.toFixed(2)}
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

        <section className="border-b border-slate-200/80 bg-amber-50/40 py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              A note on discounted Saxenda prices
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Some providers may offer member pricing, introductory discounts, or
              bundles. We have not been able to independently confirm any current
              discount terms, so promotional badges are hidden until verified.
              Always check the provider&apos;s site for the latest offers.
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
