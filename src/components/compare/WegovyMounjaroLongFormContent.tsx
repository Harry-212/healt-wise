import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  HelpCircle,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import type { HomePriceSnapshotRow } from "@/lib/data/home-price-summary";

/**
 * Editorial long-form content for `/compare/wegovy-vs-mounjaro`.
 * Implements Sections 3–9 of the Healthwise360 Wegovy vs Mounjaro Page Content specification.
 */

const DEFAULT_LATEST_PRICE_CHECK_ROWS: HomePriceSnapshotRow[] = [
  {
    dose: "Wegovy 0.25 mg (starter)",
    lowest: "£72.89",
    typical: "£100",
    highest: "£205",
  },
  {
    dose: "Wegovy 2.4 mg (usual top dose)",
    lowest: "£173.69",
    typical: "£200",
    highest: "£290",
  },
  {
    dose: "Mounjaro 2.5 mg (starter)",
    lowest: "£119.69",
    typical: "£154",
    highest: "£229",
  },
  {
    dose: "Mounjaro 15 mg (top dose)",
    lowest: "£245.69",
    typical: "£299",
    highest: "£359.95",
  },
];

const DEFAULT_FIRST_SIX_MONTHS = {
  wegovyLow: "£701.04",
  wegovyTypical: "£914",
  mounjaroLow: "£1,110.74",
  mounjaroTypical: "£1,408",
};

const DOSE_COMPARISON_ROWS = [
  { weeks: "1 to 4", wegovy: "0.25 mg", mounjaro: "2.5 mg" },
  { weeks: "5 to 8", wegovy: "0.5 mg", mounjaro: "5 mg" },
  { weeks: "9 to 12", wegovy: "1 mg", mounjaro: "7.5 mg" },
  { weeks: "13 to 16", wegovy: "1.7 mg", mounjaro: "10 mg" },
  { weeks: "17 to 20", wegovy: "2.4 mg", mounjaro: "12.5 mg" },
  { weeks: "21 to 24", wegovy: "2.4 mg", mounjaro: "15 mg" },
];

const COMMON_SIDE_EFFECTS = [
  "Feeling sick (nausea)",
  "Being sick (vomiting)",
  "Diarrhoea",
  "Constipation",
  "Stomach pain",
  "Feeling tired",
];

export interface WegovyMounjaroLongFormContentProps {
  priceRows?: HomePriceSnapshotRow[];
  firstSixMonths?: {
    wegovyLow: string;
    wegovyTypical: string;
    mounjaroLow: string;
    mounjaroTypical: string;
  };
  wegovy72Low?: string;
  wegovy72Typical?: string;
  wegovy72Listed?: number;
  wegovyProviderCount?: number;
}

export default function WegovyMounjaroLongFormContent({
  priceRows = DEFAULT_LATEST_PRICE_CHECK_ROWS,
  firstSixMonths = DEFAULT_FIRST_SIX_MONTHS,
  wegovy72Low = "£175.49",
  wegovy72Typical = "£259",
  wegovy72Listed = 48,
  wegovyProviderCount = 62,
}: WegovyMounjaroLongFormContentProps) {
  return (
    <>
      {/* ============================================================== */}
      {/* SECTION 3: DIFFERENCE */}
      {/* ============================================================== */}
      <section
        id="difference"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="difference-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
              <Scale className="h-3.5 w-3.5" aria-hidden />
              Difference
            </span>
            <h2
              id="difference-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              What is the difference between Wegovy and Mounjaro?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The difference between Mounjaro and Wegovy is the medicine inside. In the Mounjaro vs Wegovy UK debate, this is the main point. Wegovy contains semaglutide. Mounjaro contains tirzepatide.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <li>Wegovy copies one gut hormone, called GLP-1.</li>
              <li>Mounjaro copies two gut hormones, GLP-1 and GIP.</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Both medicines slow how fast your stomach empties. That helps you feel full for longer, so you eat less. Both are meant to be used with a healthy diet and more movement.
            </p>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Mounjaro versus Wegovy: which is better for weight loss?
            </h3>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
              <p>
                The fairest test is a head to head trial. In{" "}
                <a
                  href="https://www.nejm.org/doi/full/10.1056/NEJMoa2416394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  SURMOUNT-5
                </a>
                , 751 adults took the highest dose they could handle for 72 weeks. People on Mounjaro lost 20.2% of their body weight on average. People on Wegovy lost 13.7%.
              </p>
              <p>
                The adults in this trial had obesity, or were overweight with a health problem, but did not have diabetes. Every person is different, and Wegovy also helps people lose a lot of weight.
              </p>
              <p>
                The earlier trials tested each medicine alone: 20.9% after 72 weeks on Mounjaro 15 mg (
                <a
                  href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  SURMOUNT-1
                </a>
                ) and 14.9% after 68 weeks on Wegovy 2.4 mg (
                <a
                  href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  STEP 1
                </a>
                ). Separate trials are not a fair match, because the groups and the lengths are different. That is why we use the head to head result when we compare.
              </p>
              <p>
                SURMOUNT-5 tested Wegovy up to 2.4 mg. It did not test the 7.2 mg pen that some providers now list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: COST */}
      {/* ============================================================== */}
      <section
        id="cost"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="cost-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              Cost
            </span>
            <h2
              id="cost-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy vs Mounjaro cost in the UK
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              For the same month of treatment, Wegovy costs less than Mounjaro. Mounjaro vs Wegovy cost comes down to the dose you are on. This Wegovy and Mounjaro price comparison uses our 20 September 2026 check. Our Wegovy table covers 62 providers and our Mounjaro table covers 67.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-3.5">
              <p className="text-sm font-bold text-slate-900 md:text-base">
                Wegovy vs Mounjaro prices at our latest check
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-120 border-collapse text-left text-sm">
                <caption className="sr-only">
                  Wegovy vs Mounjaro prices at our latest check
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900">
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Medicine and dose
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Lowest
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Typical
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Highest
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {priceRows.map((row) => (
                    <tr
                      key={row.dose}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      <th
                        scope="row"
                        className="px-5 py-3.5 font-medium text-slate-900"
                      >
                        {row.dose}
                      </th>
                      <td className="px-5 py-3.5 font-semibold text-emerald-800 tabular-nums">
                        {row.lowest}
                      </td>
                      <td className="px-5 py-3.5 font-medium text-slate-800 tabular-nums">
                        {row.typical}
                      </td>
                      <td className="px-5 py-3.5 text-slate-600 tabular-nums">
                        {row.highest}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              Prices are for the pen only. Delivery is usually extra. Typical means the middle price. The Wegovy vs Mounjaro price gap is clear in this table. You can see the Wegovy vs Mounjaro price in the UK, dose by dose, on our two price pages:
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/wegovy-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Wegovy prices →
              </Link>
              <Link
                href="/mounjaro-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Mounjaro prices →
              </Link>
            </div>
            <p>
              A Wegovy 7.2 mg pen costs from {wegovy72Low} and about {wegovy72Typical} at most providers. Only {wegovy72Listed} of our {wegovyProviderCount} Wegovy providers list it.
            </p>
          </div>

          <div className="mt-10 max-w-3xl">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              What your first 6 months cost
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Your dose goes up as you go, so your price goes up too. This table adds up the first 6 months for both medicines.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-110 border-collapse text-left text-sm">
                <caption className="sr-only">
                  What your first 6 months cost
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900">
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Dose
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Lowest total
                    </th>
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Typical total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {[
                    {
                      dose: "Wegovy (0.25 mg up to 2.4 mg)",
                      lowest: firstSixMonths.wegovyLow,
                      typical: firstSixMonths.wegovyTypical,
                    },
                    {
                      dose: "Mounjaro (2.5 mg up to 15 mg)",
                      lowest: firstSixMonths.mounjaroLow,
                      typical: firstSixMonths.mounjaroTypical,
                    },
                  ].map((row) => (
                    <tr
                      key={row.dose}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      <th
                        scope="row"
                        className="px-5 py-3.5 font-medium text-slate-900"
                      >
                        {row.dose}
                      </th>
                      <td className="px-5 py-3.5 font-semibold text-emerald-800 tabular-nums">
                        {row.lowest}
                      </td>
                      <td className="px-5 py-3.5 font-medium text-slate-800 tabular-nums">
                        {row.typical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Over 6 months, Mounjaro costs more at both the lowest and typical prices. This assumes your dose goes up every 4 weeks until the top dose. Your prescriber decides when. The lowest prices can come from different pharmacies.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: DOSE COMPARISON */}
      {/* ============================================================== */}
      <section
        id="dose"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="dose-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800">
              <Pill className="h-3.5 w-3.5" aria-hidden />
              Dose comparison
            </span>
            <h2
              id="dose-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy and Mounjaro dose comparison
            </h2>

            <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Wegovy vs Mounjaro dose: why the mg numbers do not match
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Do not compare the mg numbers. They belong to two different medicines, so a bigger number on one does not mean a stronger dose than the other. Wegovy doses and Mounjaro doses each have their own steps.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-110 border-collapse text-left text-sm">
                <caption className="sr-only">
                  Wegovy and Mounjaro dose steps by week
                </caption>
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900">
                    <th scope="col" className="px-5 py-3.5 font-bold">
                      Weeks
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 font-bold text-violet-900 bg-violet-50/50"
                    >
                      Wegovy dose
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3.5 font-bold text-brand-primary bg-emerald-50/50"
                    >
                      Mounjaro dose
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {DOSE_COMPARISON_ROWS.map((row) => (
                    <tr
                      key={row.weeks}
                      className="transition-colors hover:bg-slate-50/80"
                    >
                      <th
                        scope="row"
                        className="px-5 py-3.5 font-semibold text-slate-900"
                      >
                        {row.weeks}
                      </th>
                      <td className="px-5 py-3.5 bg-violet-50/20 font-medium text-slate-800">
                        {row.wegovy}
                      </td>
                      <td className="px-5 py-3.5 bg-emerald-50/20 font-medium text-slate-800">
                        {row.mounjaro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 md:text-lg">
            <p>
              This is the usual plan. Your prescriber decides the steps for you, and many people stay on a lower dose for longer. Some providers also list a Wegovy 7.2 mg pen.
            </p>

            <h3 className="pt-4 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              How do doses go up (titration)?
            </h3>
            <p>
              Mounjaro titration and Wegovy titration both start low and go up slowly. This helps your body get used to the medicine and can ease side effects. Each step lasts at least 4 weeks. You stay on the dose that works for you and that you can handle.
            </p>
            <p>
              Already have a pen? Our free click calculators show how many clicks give your dose:{" "}
              <Link
                href="/tools/mounjaro-click-calculator"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Mounjaro click calculator
              </Link>{" "}
              ·{" "}
              <Link
                href="/tools/wegovy-click-calculator"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Wegovy click calculator
              </Link>
              .
            </p>
            <p>
              Want the price for your dose? See{" "}
              <Link
                href="/wegovy-price-comparison#wegovy-price-by-dose"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Wegovy price by dose
              </Link>{" "}
              ·{" "}
              <Link
                href="/mounjaro-price-comparison#mounjaro-price-by-dose"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Mounjaro price by dose
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: SIDE EFFECTS */}
      {/* ============================================================== */}
      <section
        id="side-effects"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="side-effects-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-rose-800">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
              Side effects
            </span>
            <h2
              id="side-effects-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Wegovy vs Mounjaro side effects
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Wegovy and Mounjaro have similar side effects, and most are in the stomach. In the head to head trial, the side effects of the two medicines were alike.
            </p>

            <p className="mt-6 font-semibold text-slate-900 md:text-lg">
              Common side effects of both:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-lg">
              {COMMON_SIDE_EFFECTS.map((effect) => (
                <li key={effect}>{effect}</li>
              ))}
            </ul>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              They are often worse when you start or when your dose goes up. For most people they ease over time. Tell your prescriber if they do not.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Rare but serious problems, such as pancreatitis and gallbladder problems, are listed in the patient leaflet. Read it before you start.
            </p>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Mounjaro and birth control pills
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Mounjaro can make birth control pills work less well for a while after you start, and after each dose rise. Ask your prescriber what extra protection you need.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              See our{" "}
              <Link
                href="/helpful-guides/mounjaro-side-effects-uk"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Mounjaro side effects guide
              </Link>{" "}
              and report any side effect with the{" "}
              <a
                href="https://yellowcard.mhra.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                MHRA Yellow Card scheme
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: NHS */}
      {/* ============================================================== */}
      <section
        id="nhs"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="nhs-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
              NHS
            </span>
            <h2
              id="nhs-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Can you get Wegovy or Mounjaro on the NHS?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Yes, but only some people can, and it depends on where you live. Rules and waiting times differ across the UK.
            </p>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Mounjaro on the NHS
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              In England, some GPs can prescribe Mounjaro in a step by step rollout. It began with people who have a very high BMI and several health problems linked to weight. From June 2026 it widened to more people, for example a BMI of 35 to 39.9 with four or more of these health problems.
            </p>

            <h3 className="mt-8 text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Wegovy on the NHS
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">
              Wegovy is given through NHS specialist weight management services. Your GP refers you. It is given for up to 2 years.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Not every area or GP practice has started. Waiting lists can be long. Ask your GP if you qualify. Most people still pay privately, at the prices on this page. See{" "}
              <a
                href="https://www.nhs.uk/live-well/healthy-weight/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                NHS advice on weight loss medicines
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: WHICH ONE IS RIGHT FOR YOU */}
      {/* ============================================================== */}
      <section
        id="which-one"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
        aria-labelledby="which-one-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Which one is right for you
            </span>
            <h2
              id="which-one-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Mounjaro or Wegovy: which one is right for you?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Mounjaro or Wegovy UK: the answer depends on you. Wegovy or Mounjaro, only a prescriber can decide. These points can help you get ready for that talk.
            </p>

            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <li>
                <strong className="font-semibold text-slate-900">Cost matters most.</strong> Wegovy costs less for the same month. Compare the pen price for the dose you will be on.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">You want the larger average weight loss.</strong> Mounjaro led in the head to head trial.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">You are on one and it costs too much or does not suit you.</strong> Ask your prescriber about a switch. Never switch on your own.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">You are going through the NHS.</strong> You may be offered the medicine your service uses.
              </li>
            </ul>

            <p className="mt-8 font-bold text-slate-900 md:text-lg">
              Before you choose a pharmacy:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <li>Pick the dose you will be on, not only the starter dose.</li>
              <li>Compare the pen price, then add delivery and any fees.</li>
              <li>
                Check the GPhC number on the{" "}
                <a
                  href="https://www.pharmacyregulation.org/registers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
                >
                  official register
                </a>
                .
              </li>
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/wegovy-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Compare Wegovy prices
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/mounjaro-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Compare Mounjaro prices
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: HOW WE COMPARE */}
      {/* ============================================================== */}
      <section
        id="methodology"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        aria-labelledby="methodology-heading"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-primary">
              <ClipboardList className="h-3.5 w-3.5" aria-hidden />
              How we compare
            </span>
            <h2
              id="methodology-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              How we compare Wegovy and Mounjaro prices
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Healthwise360 is an independent UK price comparison site. We do not sell or send medicines. This Wegovy and Mounjaro comparison is free to use. You can compare Mounjaro and Wegovy prices in one place, so you do not need to visit two sites.
            </p>

            <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-slate-700 md:text-lg">
              <li>
                <strong className="font-semibold text-slate-900">Both medicines in one place.</strong> A full Wegovy vs Mounjaro comparison with prices.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">More providers.</strong> 62 for Wegovy and 67 for Mounjaro, each with its GPhC number.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">The real cost.</strong> The price of every dose, plus your first 6 months total.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">No paid rankings.</strong> No provider can pay to change its place in our tables.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Free dose tools.</strong> Click calculators and a BMI calculator.
              </li>
            </ul>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We check every price in the first week of each month and show the date. Healthwise360 does not currently earn commission from providers on this page.
            </p>

            <div className="mt-6">
              <Link
                href="/methodology"
                className="group inline-flex items-center gap-2 font-semibold text-emerald-800 underline-offset-2 hover:underline"
              >
                Read our full methodology →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
