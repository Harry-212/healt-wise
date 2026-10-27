import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Layers, ListChecks, ShieldCheck } from "lucide-react";
import PillPriceTable from "@/components/prices/PillPriceTable";
import PillStepUpTable from "@/components/prices/PillStepUpTable";
import {
  CheapestCard,
  FaqAccordion,
  TrustTile,
  pillButtonClass,
  pillH2Class,
  pillH3Class,
} from "@/components/prices/PillPricePageParts";
import TrustSignals from "@/components/trust/TrustSignals";
import {
  PILL_PRICES_LAST_CHECKED_LABEL,
  WEGOVY_PILL_DOSES,
  cheapestAtDose,
  doseRange,
  formatPillGbp,
  stepUpTotals,
} from "@/lib/data/pill-prices";
import { WEGOVY_PILL_PRICE_ROWS } from "@/lib/data/pill-price-rows";
import { pillPriceJsonLd, type PillFaq } from "@/lib/seo/pill-price-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

const PATH = "/wegovy-pill-price-comparison";
const TITLE = "Wegovy Pill Price Comparison UK: Compare Prices by Dose";
const DESCRIPTION =
  "Compare Wegovy pill prices from 41 UK providers by dose, from £89 to £269 a month. Listed prices, last checked 24 October 2026.";

/**
 * Draft: kept out of search results (and the sitemap) until Harry confirms the
 * open price checks (25mg on sale, Ashcroft, Curely and Dotor) and Jeff
 * confirms the URL. Remove `robots` and add PATH to the sitemap to publish.
 */
export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: PATH,
    title: TITLE,
    metaDescription: DESCRIPTION,
    openGraphTitle: TITLE,
    openGraphDescription: DESCRIPTION,
    imagePath: WHY_CHOOSE_HEALTHWISE360_SRC,
    imageAlt: WHY_CHOOSE_HEALTHWISE360_ALT,
  }),
  title: { absolute: TITLE },
  robots: { index: false, follow: false },
};

const FAQS: PillFaq[] = [
  {
    question: "How much does the Wegovy pill cost in the UK?",
    answer:
      "On this page, listed monthly prices run from £89 for the 1.5mg dose to £269 for the 25mg dose. Listed prices, last checked 24 October 2026, confirm at checkout.",
  },
  {
    question: "What is the cheapest Wegovy pill price?",
    answer:
      "For the 1.5mg dose the lowest listed price is £89 at Ashcroft Pharmacy. For 4mg, 9mg and 25mg the lowest listed prices are £97, £112 and £158 at Medicine Marketplace.",
  },
  {
    question: "Do Wegovy pill prices change by dose?",
    answer:
      "Yes. Each dose has its own price, and prices rise with the dose. The 1.5mg dose is the lowest priced and the 25mg dose the highest.",
  },
  {
    question: "How much do all four doses cost?",
    answer:
      "One month at each of 1.5mg, 4mg, 9mg and 25mg costs from £457 to £796 across the providers on this page, a gap of £339.",
  },
  {
    question: "Is the Wegovy pill cheaper than the injection?",
    answer:
      "We do not compare the two on this page because the injection is priced and dosed differently. Compare the listed monthly price of each against your prescriber's advice.",
  },
  {
    question: "Does the listed price include delivery?",
    answer:
      "Not always. Some providers list delivery separately or add it at checkout, so check the final total before you order.",
  },
  {
    question: "Is the Wegovy pill available on the NHS?",
    answer:
      "Not at the moment. The MHRA approved the tablet on 11 June 2026, and the NHS has not made it available yet.",
  },
  {
    question: "Why do prices differ between providers?",
    answer:
      "Providers set their own prices and include different services. Some prices also come from comparison sites, which is why each row shows its source.",
  },
];

export default function WegovyPillPriceComparisonPage() {
  const rows = WEGOVY_PILL_PRICE_ROWS;
  const ranges = WEGOVY_PILL_DOSES.map((_, i) => doseRange(rows, i));
  const cheapest = WEGOVY_PILL_DOSES.map((_, i) => cheapestAtDose(rows, i));
  const totals = stepUpTotals(rows);
  const gap = Math.round((totals[totals.length - 1].total - totals[0].total) * 100) / 100;

  const first = ranges[0];
  const last = ranges[ranges.length - 1];
  const heroAnswer = `Listed Wegovy pill prices from ${rows.length} UK providers run from ${formatPillGbp(first.lowest)} a month for the ${WEGOVY_PILL_DOSES[0]} dose to ${formatPillGbp(last.highest)} a month for the ${WEGOVY_PILL_DOSES[WEGOVY_PILL_DOSES.length - 1]} dose. Pick a dose below to see every provider, cheapest first. Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}, confirm at checkout.`;

  const jsonLd = pillPriceJsonLd({
    path: PATH,
    title: TITLE,
    headline: "Wegovy Pill Price Comparison UK",
    description: DESCRIPTION,
    aboutName: "Wegovy pill prices in the UK",
    breadcrumbName: "Wegovy Pill Price Comparison UK",
    dateModified: "2026-10-26",
    faqs: FAQS,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="w-full">
        {/* Section 1: Hero */}
        <section className="w-full border-b border-slate-200/80 bg-gradient-to-b from-[#f4f7f5] to-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12 md:px-8 md:py-16">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                Wegovy Pill Price Comparison UK
              </h1>
              <p
                id="hero-answer"
                className="mt-4 text-base font-medium leading-relaxed text-slate-800 sm:text-lg"
              >
                {heroAnswer}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#price-table"
                  className={`${pillButtonClass} bg-emerald-700 text-white hover:bg-emerald-800`}
                >
                  See the price table
                </a>
                <a
                  href="#step-up"
                  className={`${pillButtonClass} bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50`}
                >
                  See the step up cost
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-14 px-4 py-10 leading-relaxed text-slate-800 sm:px-6 sm:py-14 md:py-16">
          {/* Section 2: Trust bar */}
          <section aria-label="At a glance">
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              <TrustTile icon={Layers} value={String(rows.length)} label="UK providers compared" />
              <TrustTile
                icon={ListChecks}
                value={String(WEGOVY_PILL_DOSES.length)}
                label="doses: 1.5mg, 4mg, 9mg and 25mg"
              />
              <TrustTile
                icon={CalendarCheck}
                label={`Listed prices, last checked ${PILL_PRICES_LAST_CHECKED_LABEL}`}
              />
              <TrustTile icon={ShieldCheck} label="Source shown on every row" />
            </div>
          </section>

          {/* Section 3: Price table */}
          <section id="prices" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Wegovy pill prices by dose</h2>
            <p>
              Prices are monthly listed prices, generally for 30 tablets, with no discount code
              applied. Delivery and consultation fees are only included where the provider says
              so. Each row shows where the price was taken from.
            </p>
            <PillPriceTable
              doses={WEGOVY_PILL_DOSES}
              rows={rows}
              lastCheckedLabel={PILL_PRICES_LAST_CHECKED_LABEL}
            />
            <p className="text-sm text-slate-600">
              Pharmacy website means the price was taken from the provider&apos;s own website.
              Comparison site means the price was taken from comparewegovyprices.co.uk. Listed
              prices, last checked {PILL_PRICES_LAST_CHECKED_LABEL}, confirm at checkout.
            </p>
          </section>

          {/* Section 4: Cheapest by dose */}
          <section id="cheapest" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Cheapest Wegovy pill price by dose</h2>
            <p>
              Two views for each dose: the lowest listed price anywhere on this page, and the
              lowest listed price on a pharmacy&apos;s own website.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {WEGOVY_PILL_DOSES.map((dose, i) => (
                <CheapestCard
                  key={dose}
                  dose={dose}
                  overall={`${formatPillGbp(cheapest[i].overall.price)} at ${cheapest[i].overall.providers.join(" and ")}`}
                  pharmacy={
                    cheapest[i].pharmacy
                      ? `${formatPillGbp(cheapest[i].pharmacy.price)} at ${cheapest[i].pharmacy.providers.join(" and ")}`
                      : "Not listed"
                  }
                />
              ))}
            </div>
          </section>

          {/* Section 5: Step up */}
          <section id="step-up" className="scroll-mt-28 space-y-5">
            <h2 className={pillH2Class}>What the four doses cost in total</h2>
            <p>
              The Wegovy tablet starts at 1.5mg once a day and moves up to 4mg, 9mg and 25mg,
              with at least one month at each dose, according to the MHRA approval announced on
              11 June 2026. The tables below show the minimum cost of one month at each dose,
              using the listed prices above.
            </p>
            <h3 className={pillH3Class}>Price range for each dose</h3>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[320px] text-left text-sm">
                <caption className="sr-only">Listed price range for each Wegovy pill dose</caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Dose</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Lowest</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Highest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {WEGOVY_PILL_DOSES.map((dose, i) => (
                    <tr key={dose}>
                      <th scope="row" className="px-3 py-3 text-left font-medium text-slate-900">{dose}</th>
                      <td className="px-3 py-3 tabular-nums">{formatPillGbp(ranges[i].lowest)}</td>
                      <td className="px-3 py-3 tabular-nums">{formatPillGbp(ranges[i].highest)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className={pillH3Class}>Total for one month at each of the four doses</h3>
            <PillStepUpTable
              rows={totals}
              totalLabel="Total"
              collapsedCount={6}
              highestNote="highest on this page"
            />
            <p>
              The gap between the lowest and highest total is {formatPillGbp(gap)}. Your
              prescriber decides your dose, and some people stay longer on a dose. Totals are one
              month of each dose, 1.5, 4, 9 and 25mg, and exclude delivery and consultation fees.
            </p>
          </section>

          {/* Section 6: What is included */}
          <section id="included" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>What is included in a listed price</h2>
            <div className="grid gap-4 rounded-2xl border border-sky-200 bg-sky-50/70 p-5 text-sm leading-relaxed text-slate-800 sm:grid-cols-2 sm:text-base">
              <p>
                <strong className="text-slate-950">Usually included:</strong> the monthly supply
                of tablets, generally 30 tablets, and the prescriber&apos;s check of your answers.
              </p>
              <p>
                <strong className="text-slate-950">Can be extra:</strong> delivery (for example
                Manchester Chemist lists £5 delivery separately and Reach Online Pharmacy adds
                delivery at checkout), consultation fees, and first order discounts, which we do
                not use.
              </p>
            </div>
          </section>

          {/* Section 7: How we compare */}
          <section id="how-we-compare" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>How we compare Wegovy pill prices</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                ["Same date.", `Every price on this page was checked on ${PILL_PRICES_LAST_CHECKED_LABEL}.`],
                ["Standard prices.", "We list the standard monthly price, not first order or sale prices."],
                [
                  "Source on every row.",
                  "Each row shows whether the price came from the pharmacy's own website or from a comparison site.",
                ],
              ].map(([lead, rest]) => (
                <div key={lead} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p>
                    <strong className="text-slate-950">{lead}</strong> {rest}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: What is the Wegovy pill */}
          <section id="what-is-the-wegovy-pill" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>What is the Wegovy pill?</h2>
            <p>
              The Wegovy pill is a once daily tablet with semaglutide, approved by the MHRA on 11
              June 2026 for adults with a BMI of 30 or above, or a BMI of 27 to 30 with at least
              one weight related health condition, alongside a reduced calorie diet and more
              physical activity. It is taken whole on an empty stomach with a sip of water, after
              fasting for at least 8 hours, and you wait at least 30 minutes before eating or
              drinking. It is not currently available on the NHS.
            </p>
            <Link
              href="/what-is-wegovy"
              className={`${pillButtonClass} bg-emerald-700 text-white hover:bg-emerald-800`}
            >
              Read the full guide
            </Link>
          </section>

          {/* Section 9: FAQ */}
          <section id="faq" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>FAQs</h2>
            <FaqAccordion faqs={FAQS} />
          </section>
        </div>

        <TrustSignals />
      </article>
    </>
  );
}
