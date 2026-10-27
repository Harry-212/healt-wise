import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, Layers, ListChecks, ShieldCheck } from "lucide-react";
import PillPriceTable from "@/components/prices/PillPriceTable";
import PillStepUpTable from "@/components/prices/PillStepUpTable";
import {
  CheapestCard,
  FaqAccordion,
  IncludedCallout,
  TrustTile,
  pillButtonClass,
  pillH2Class,
  pillH3Class,
  pillLinkClass,
} from "@/components/prices/PillPricePageParts";
import TrustSignals from "@/components/trust/TrustSignals";
import {
  FOUNDAYO_DOSES,
  PILL_PRICES_LAST_CHECKED_LABEL,
  cheapestAtDose,
  doseRange,
  formatPillGbp,
  stepUpTotals,
} from "@/lib/data/pill-prices";
import { FOUNDAYO_PRICE_ROWS } from "@/lib/data/pill-price-rows";
import { pillPriceJsonLd, type PillFaq } from "@/lib/seo/pill-price-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";
import {
  WHY_CHOOSE_HEALTHWISE360_ALT,
  WHY_CHOOSE_HEALTHWISE360_SRC,
} from "@/lib/site-assets";

const PATH = "/foundayo-price-comparison";
const TITLE = "Foundayo Price Comparison UK: Compare Prices by Dose";
const DESCRIPTION =
  "Compare Foundayo prices from 15 UK providers by dose, from £73 to £199.99 a month. Listed prices, last checked 24 October 2026.";

/**
 * Draft: kept out of search results (and the sitemap) until the medical
 * reviewer is added and Jeff approves the disclosure wording. Remove `robots`
 * and add PATH to the sitemap to publish.
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

/** Flip to true when the Wegovy tablet price comparison page is live. */
const WEGOVY_PILL_PRICE_PAGE_LIVE = false;

const FAQS: PillFaq[] = [
  {
    question: "How much does Foundayo cost in the UK?",
    answer:
      "Across the 15 providers we list, one month of Foundayo costs between £73 and £199.99, depending on the dose. The 0.8mg dose is listed from £73 to £129. The 17.2mg dose is listed from £130 to £199.99. Prices were last checked on 24 October 2026.",
  },
  {
    question: "How much is Foundayo per month?",
    answer:
      "Each price in the table is for one month at one dose. Your monthly cost changes as your dose steps up, so look at the dose you are prescribed.",
  },
  {
    question: "Where can you find the cheapest Foundayo tablets?",
    answer:
      "Of the 15 providers we list, Medicine Marketplace has the lowest listed price at every dose, starting at £73 for 0.8mg. On a pharmacy's own website, Medino is lowest, starting at £94.99. Check the price, any fees and the stock at checkout before you order.",
  },
  {
    question: "What is included in the Foundayo price?",
    answer:
      "Our listed prices are the standard one month price for each dose. Discounts are not applied, and delivery fees are not included unless the provider includes them. Check the total, including any consultation fee, at checkout.",
  },
  {
    question: "Is Foundayo cheaper than Mounjaro?",
    answer:
      "We do not copy Mounjaro prices onto this page. To compare, read our Mounjaro price comparison and look at the same month and dose steps.",
  },
  {
    question: "Is Foundayo cheaper than the Wegovy pill?",
    answer:
      "We do not copy Wegovy pill prices onto this page. To compare, read our Wegovy tablet price comparison when it is live.",
  },
  {
    question: "Do I need a prescription for Foundayo?",
    answer:
      "Yes. Foundayo is a prescription only medicine, so a prescriber must assess you before a pharmacy can supply it.",
  },
  {
    question: "Is Foundayo available on the NHS?",
    answer:
      "Not currently. GOV.UK says Foundayo is approved for use in the UK but is not available through the NHS. NHS use depends on an evaluation by NICE, which has not reported yet.",
  },
];

function withLinks(faq: PillFaq) {
  const links: { phrase: string; href: string }[] = [
    { phrase: "Mounjaro price comparison", href: "/mounjaro-price-comparison" },
    // Added when /wegovy-pill-price-comparison goes live.
  ];
  const link = links.find((l) => faq.answer.includes(l.phrase));
  if (!link) return faq.answer;
  const [before, ...rest] = faq.answer.split(link.phrase);
  return (
    <>
      {before}
      <Link href={link.href} className={pillLinkClass}>
        {link.phrase}
      </Link>
      {rest.join(link.phrase)}
    </>
  );
}

export default function FoundayoPriceComparisonPage() {
  const rows = FOUNDAYO_PRICE_ROWS;
  const ranges = FOUNDAYO_DOSES.map((_, i) => doseRange(rows, i));
  const cheapest = FOUNDAYO_DOSES.map((_, i) => cheapestAtDose(rows, i));
  const totals = stepUpTotals(rows);
  const lowestTotal = totals[0];
  const highestTotal = totals[totals.length - 1];
  const lowestPharmacyTotal = totals.find((t) => t.source === "pharmacy");

  const first = ranges[0];
  const last = ranges[ranges.length - 1];
  const heroAnswer = `Foundayo prices in the UK, across the ${rows.length} providers listed here, run from ${formatPillGbp(first.lowest)} to ${formatPillGbp(first.highest)} a month for the ${FOUNDAYO_DOSES[0]} starting dose and from ${formatPillGbp(last.lowest)} to ${formatPillGbp(last.highest)} a month for the ${FOUNDAYO_DOSES[FOUNDAYO_DOSES.length - 1]} dose.`;

  const jsonLd = pillPriceJsonLd({
    path: PATH,
    title: TITLE,
    headline: "Foundayo Price Comparison UK",
    description: DESCRIPTION,
    aboutName: "Foundayo (orforglipron) prices in the UK",
    breadcrumbName: "Foundayo Price Comparison UK",
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/70">
                Prices last checked {PILL_PRICES_LAST_CHECKED_LABEL}
              </span>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.12]">
                Foundayo Price Comparison UK
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
                  Compare Foundayo prices
                </a>
                <a
                  href="#dose-tabs"
                  className={`${pillButtonClass} bg-white text-slate-900 ring-1 ring-slate-300 hover:bg-slate-50`}
                >
                  Choose your dose
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl space-y-14 px-4 py-10 leading-relaxed text-slate-800 sm:px-6 sm:py-14 md:py-16">
          {/* Section 2: Trust bar */}
          <section aria-label="At a glance" className="space-y-3">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              <TrustTile icon={Layers} value={String(rows.length)} label="providers compared" />
              <TrustTile
                icon={ListChecks}
                value={String(FOUNDAYO_DOSES.length)}
                label={`doses, ${FOUNDAYO_DOSES[0]} to ${FOUNDAYO_DOSES[FOUNDAYO_DOSES.length - 1]}`}
              />
              <div className="col-span-2 md:col-span-1">
                <TrustTile icon={CalendarCheck} label="Source shown for every price" />
              </div>
            </div>
            <p className="flex items-center gap-2 text-sm text-slate-600">
              <ShieldCheck aria-hidden className="h-4 w-4 shrink-0 text-emerald-700" />
              Prescription only medicine · Authorised by the MHRA on 10 August 2026 · Prices
              last checked {PILL_PRICES_LAST_CHECKED_LABEL}
            </p>
          </section>

          {/* Section 3: Price table */}
          <section id="prices" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Foundayo price comparison UK: listed prices by dose</h2>
            <p>
              Choose your dose to see the lowest price first, or read the whole table. The
              table shows the listed price of one month of Foundayo (orforglipron) at each
              dose, from the lowest to the highest {FOUNDAYO_DOSES[0]} price.
            </p>
            <PillPriceTable
              doses={FOUNDAYO_DOSES}
              rows={rows}
              showAllTab
              lastCheckedLabel={PILL_PRICES_LAST_CHECKED_LABEL}
            />
            <p className="text-sm text-slate-600">
              &quot;Pharmacy website&quot; means we read the price on the provider&apos;s own
              website. &quot;Comparison site&quot; means the price comes from an independent
              comparison site and has not been checked at the provider&apos;s checkout.
            </p>
          </section>

          {/* Section 4: Cheapest by dose */}
          <section id="cheapest" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Where is Foundayo cheapest in the UK?</h2>
            <p>
              The cheapest Foundayo is not always the best value, so we show two views for
              each dose: the lowest listed price overall, and the lowest price on a
              pharmacy&apos;s own website.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FOUNDAYO_DOSES.map((dose, i) => (
                <CheapestCard
                  key={dose}
                  dose={dose}
                  seeAllLink
                  overall={`${formatPillGbp(cheapest[i].overall.price)}, ${cheapest[i].overall.providers.join(" and ")}`}
                  pharmacy={
                    cheapest[i].pharmacy
                      ? `${formatPillGbp(cheapest[i].pharmacy.price)}, ${cheapest[i].pharmacy.providers.join(" and ")}`
                      : "Not listed"
                  }
                />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              Medicine Marketplace&apos;s prices come from a comparison site, so confirm them
              at checkout before you rely on them. Check the stock, any consultation fee and any
              delivery fee before you decide.
            </p>
          </section>

          {/* Section 5: Six month step up */}
          <section id="step-up" className="scroll-mt-28 space-y-5">
            <h2 className={pillH2Class}>How much does Foundayo cost per month?</h2>
            <p>
              Foundayo comes in six doses: 0.8mg, 2.5mg, 5.5mg, 9mg, 14.5mg and 17.2mg.
              Treatment starts at 0.8mg and steps up to 17.2mg, with at least one month at
              each dose. The Foundayo UK price depends on the dose you are prescribed, so read
              down the column for that dose.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[420px] text-left text-sm">
                <caption className="sr-only">Listed price range for each Foundayo dose</caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Dose</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Lowest listed price</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Highest listed price</th>
                    <th scope="col" className="px-3 py-3 font-semibold text-slate-900">Providers with a price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {FOUNDAYO_DOSES.map((dose, i) => (
                    <tr key={dose}>
                      <th scope="row" className="px-3 py-3 text-left font-medium text-slate-900">{dose}</th>
                      <td className="px-3 py-3 tabular-nums">{formatPillGbp(ranges[i].lowest)}</td>
                      <td className="px-3 py-3 tabular-nums">{formatPillGbp(ranges[i].highest)}</td>
                      <td className="px-3 py-3 tabular-nums">{ranges[i].providers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className={pillH3Class}>The lowest cost of stepping up through all six doses</h3>
            <p>
              This table adds up the six listed prices for each provider, one month at each
              dose. It is the lowest possible cost of reaching 17.2mg, not a quote. Your
              prescriber decides how long you stay on each dose. Second Nature is not shown
              because it has no listed 9mg price.
            </p>
            <p className="text-sm font-medium text-slate-600">
              Minimum, one month at each dose. Not a quote.
            </p>
            <PillStepUpTable rows={totals} totalLabel="Six month step up total" />
            <p>
              The gap between the lowest and the highest total is{" "}
              {formatPillGbp(Math.round((highestTotal.total - lowestTotal.total) * 100) / 100)}.
              {lowestPharmacyTotal
                ? ` On a pharmacy's own website, ${lowestPharmacyTotal.provider} is lowest at ${formatPillGbp(lowestPharmacyTotal.total)}.`
                : ""}{" "}
              Prices tend to rise with the dose, but not at every provider. Lotus Weight Loss
              and Second Nature, for example, charge the same for the first three doses.
            </p>
          </section>

          {/* Section 6: What is included */}
          <section id="included" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>What is included in the Foundayo price?</h2>
            <IncludedCallout
              included="the standard price for one month at one dose."
              extra="discounts are not applied. Delivery fees are not included unless the provider includes them. Some providers add a consultation fee. We have not checked this for each provider."
            />
            <p>
              The Foundayo cost UK providers list can differ at checkout, so add any fee shown
              before you compare totals.
            </p>
          </section>

          {/* Section 7: How we compare */}
          <section id="how-we-compare" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>How we checked these prices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p>
                  <strong className="text-slate-950">Sources.</strong> For five providers
                  (Boots, Medino, Pharmacy2U, Superdrug and Zava) we read the price on the
                  provider&apos;s own website. For the other ten, the price comes from
                  independent comparison sites and has not been checked at the
                  provider&apos;s checkout.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p>
                  <strong className="text-slate-950">One date.</strong> All prices were
                  collected on {PILL_PRICES_LAST_CHECKED_LABEL}. Prices are indicative and can
                  change, so confirm the price at checkout.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Other treatments */}
          <section id="other-treatments" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Foundayo, Mounjaro and the Wegovy pill: price comparison</h2>
            <p>
              Mounjaro and the Wegovy pill are priced on their own pages. We do not copy their
              prices here, because a figure from another page may be out of date. Compare the
              same month and the same dose steps.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className={pillH3Class}>Mounjaro price comparison</p>
                <Link
                  href="/mounjaro-price-comparison"
                  className={`${pillButtonClass} bg-emerald-700 text-white hover:bg-emerald-800`}
                >
                  Compare Mounjaro prices
                </Link>
              </div>
              {WEGOVY_PILL_PRICE_PAGE_LIVE ? (
                <div className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className={pillH3Class}>Wegovy tablet price comparison</p>
                  <Link
                    href="/wegovy-pill-price-comparison"
                    className={`${pillButtonClass} bg-emerald-700 text-white hover:bg-emerald-800`}
                  >
                    Compare Wegovy tablet prices
                  </Link>
                </div>
              ) : null}
            </div>
          </section>

          {/* Section 9: What is Foundayo */}
          <section id="what-is-foundayo" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>What is Foundayo?</h2>
            <p>
              Foundayo is the brand name of orforglipron, a once daily tablet. If you search for
              orforglipron price UK or orforglipron cost UK, these are the same prices. The
              MHRA authorised Foundayo for Eli Lilly on 10 August 2026. It is authorised for
              adults with a BMI of 30 or above, or a BMI of 27 to 30 with at least one weight
              related health condition. It is used alongside a reduced calorie diet and more
              physical activity. It can be taken at any time of day, with no food or water
              restrictions.
            </p>
            <div className="rounded-2xl border border-amber-200/90 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 sm:text-base">
              Foundayo is a prescription only medicine, so a prescriber must assess you first.
              For doses and side effects, read our{" "}
              <Link href="/foundayo-faqs" className={pillLinkClass}>
                Foundayo FAQs
              </Link>
              .
            </div>
          </section>

          {/* Section 10: FAQ */}
          <section id="faq" className="scroll-mt-28 space-y-4">
            <h2 className={pillH2Class}>Foundayo price questions</h2>
            <FaqAccordion faqs={FAQS} renderAnswer={withLinks} />
          </section>

          {/* Section 11: Final band */}
          <section className="rounded-2xl bg-emerald-50 p-6 text-center">
            <Link
              href="/foundayo-faqs"
              className={`${pillButtonClass} bg-emerald-700 text-white hover:bg-emerald-800`}
            >
              Read the Foundayo FAQs
            </Link>
          </section>
        </div>

        <TrustSignals />
      </article>
    </>
  );
}
