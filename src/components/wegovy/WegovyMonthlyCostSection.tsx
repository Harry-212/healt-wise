import type { AnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import { formatDose, formatGbp } from "@/lib/data/wegovy-price-insights";
import type { WegovyFirstSixMonthsCostEstimate } from "@/lib/data/wegovy-price-insights";

const YEAR_ONE_AND_AFTER_ROWS = [
  {
    dose: "1mg",
    yearOneLow: 948,
    yearOneTypical: 1609,
    afterLow: 948,
    afterTypical: 1638,
  },
  {
    dose: "1.7mg",
    yearOneLow: 1452,
    yearOneTypical: 2034,
    afterLow: 1603,
    afterTypical: 2197,
  },
  {
    dose: "2.4mg",
    yearOneLow: 1905,
    yearOneTypical: 2337,
    afterLow: 2258,
    afterTypical: 2600,
  },
  {
    dose: "7.2mg",
    yearOneLow: 1920,
    yearOneTypical: 2766,
    afterLow: 2281,
    afterTypical: 3308,
  },
];

export default function WegovyMonthlyCostSection({
  starterLow = 72.89,
  topLow = 173.69,
  topHigh = 290,
  firstSixMonths,
  annualCosts,
}: {
  starterLow?: number;
  topLow?: number;
  topHigh?: number;
  firstSixMonths: WegovyFirstSixMonthsCostEstimate;
  annualCosts?: AnnualCostEstimates;
}) {
  const annualRows =
    annualCosts && annualCosts.yearOne.length > 0
      ? annualCosts.yearOne.map((y1) => {
          const on = annualCosts.ongoing.find((o) => o.dose === y1.dose);
          return {
            dose: y1.dose,
            yearOneLow: y1.low,
            yearOneTypical: y1.typical,
            afterLow: on?.low ?? y1.low,
            afterTypical: on?.typical ?? y1.typical,
          };
        })
      : YEAR_ONE_AND_AFTER_ROWS;

  return (
    <section
      id="wegovy-monthly-cost"
      className="border-b border-slate-200/80 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          How much does Wegovy cost per month in the UK?
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wegovy starts at {formatGbp(starterLow)} a month in the UK. One pen
          lasts 4 weeks, so the price of one pen is your Wegovy monthly cost.
          Your Wegovy cost per month in the UK rises with your dose, to between{" "}
          {formatGbp(topLow)} and {formatGbp(topHigh)} a month on 2.4 mg.
        </p>

        {/* H3: What your first 6 months cost */}
        <h3 className="mt-8 text-lg font-bold text-slate-900">
          What your first 6 months cost
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Estimated cost of the first 6 months of Wegovy, by month and dose
            </caption>
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Month
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Dose
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Lowest price
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Typical price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {firstSixMonths.rows.map((row) => (
                <tr key={row.month}>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-slate-900"
                  >
                    Month {row.month}
                  </th>
                  <td className="px-4 py-3">{formatDose(row.dose)}</td>
                  <td className="px-4 py-3 tabular-nums">{formatGbp(row.low)}</td>
                  <td className="px-4 py-3 tabular-nums">
                    {formatGbp(row.typical)}
                  </td>
                </tr>
              ))}
              <tr className="bg-emerald-50/50 font-bold text-slate-900">
                <td className="px-4 py-3" colSpan={2}>
                  6 month total
                </td>
                <td className="px-4 py-3 tabular-nums">
                  {formatGbp(firstSixMonths.totalLow)}
                </td>
                <td className="px-4 py-3 tabular-nums">
                  {formatGbp(firstSixMonths.totalTypical)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          This table assumes your dose goes up every 4 weeks until 2.4 mg. Your
          prescriber decides when, and many people stay on a lower dose for
          longer. The lowest prices can come from different pharmacies.
        </p>

        {/* H3: Wegovy cost for a full year */}
        <h3 className="mt-10 text-lg font-bold text-slate-900">
          Wegovy cost for a full year
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Estimated annual cost of Wegovy by maintenance dose
            </caption>
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Dose you stay on
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Year one, lowest
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Year one, typical
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Each year after, lowest
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Each year after, typical
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {annualRows.map((row) => (
                <tr key={row.dose}>
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-slate-900"
                  >
                    {formatDose(row.dose)}
                  </th>
                  <td className="px-4 py-3 tabular-nums">
                    {formatGbp(row.yearOneLow)}
                  </td>
                  <td className="px-4 py-3 tabular-nums">
                    {formatGbp(row.yearOneTypical)}
                  </td>
                  <td className="px-4 py-3 tabular-nums">
                    {formatGbp(row.afterLow)}
                  </td>
                  <td className="px-4 py-3 tabular-nums">
                    {formatGbp(row.afterTypical)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Based on 13 pens a year. Year one includes the lower starter doses.
          Delivery and consultation fees are not included.
        </p>
      </div>
    </section>
  );
}

