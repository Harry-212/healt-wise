import type { FirstMonthsCostEstimate } from "@/lib/data/mounjaro-price-insights";
import type { AnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";

const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

export default function MounjaroMonthlyCostSection({
  starterLow,
  topLow,
  topHigh,
  firstSixMonths,
  annualCosts,
  providerCount,
}: {
  starterLow: number;
  topLow: number;
  topHigh: number;
  firstSixMonths: FirstMonthsCostEstimate;
  annualCosts: AnnualCostEstimates;
  providerCount: number;
}) {
  return (
    <section
      id="mounjaro-monthly-cost"
      className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          How much does Mounjaro cost per month in the UK?
        </h2>
        <p id="monthly-cost-answer" className="mt-4 leading-relaxed text-slate-600">
          The Mounjaro cost in the UK starts at {formatGbp(starterLow)} a
          month. One pen lasts 4 weeks, so the price of one pen is your
          Mounjaro monthly cost. It rises with your dose, to between{" "}
          {formatGbp(topLow)} and {formatGbp(topHigh)} a month on 15 mg.
        </p>

        {/* H3: First 6 months cost */}
        <h3 className="mt-8 text-lg font-bold text-slate-900">
          What your first 6 months cost
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Estimated cost of the first 6 months of Mounjaro, by month and dose
            </caption>
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Month</th>
                <th scope="col" className="px-4 py-3 font-semibold">Dose</th>
                <th scope="col" className="px-4 py-3 font-semibold">Lowest price</th>
                <th scope="col" className="px-4 py-3 font-semibold">Typical price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              {firstSixMonths.rows.map((row) => (
                <tr key={row.month}>
                  <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                    Month {row.month}
                  </th>
                  <td className="px-4 py-3">{formatDose(row.dose)}</td>
                  <td className="px-4 py-3 tabular-nums">{formatGbp(row.low)}</td>
                  <td className="px-4 py-3 tabular-nums">{formatGbp(row.typical)}</td>
                </tr>
              ))}
              <tr className="bg-violet-50/50 font-bold text-slate-900">
                <td className="px-4 py-3" colSpan={2}>6 month total</td>
                <td className="px-4 py-3 tabular-nums">{formatGbp(firstSixMonths.totalLow)}</td>
                <td className="px-4 py-3 tabular-nums">{formatGbp(firstSixMonths.totalTypical)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          This table assumes your dose goes up every 4 weeks until you reach your target strength. Your
          prescriber decides when and whether to escalate, and many people stay on an intermediate dose longer.
        </p>

        {/* H3: Full year cost */}
        <h3 className="mt-10 text-lg font-bold text-slate-900">
          Mounjaro cost for a full year
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Mounjaro usually starts at 2.5 mg once a week for four weeks, then
          increases in 2.5 mg steps no sooner than every four weeks, up to
          15 mg. Year one therefore includes several months on lower-priced
          pens before any maintenance strength. Based on 13 pens a year across {providerCount} UK pharmacies.
        </p>

        {annualCosts.yearOne.length > 0 ? (
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Estimated annual Mounjaro cost by maintenance dose
              </caption>
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">
                    Dose you settle on
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
                {annualCosts.yearOne.map((y1, idx) => {
                  const ongoing = annualCosts.ongoing[idx];
                  return (
                    <tr key={y1.dose}>
                      <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                        {formatDose(y1.dose)}
                      </th>
                      <td className="px-4 py-3 tabular-nums">{gbp.format(y1.low)}</td>
                      <td className="px-4 py-3 tabular-nums">{gbp.format(y1.typical)}</td>
                      <td className="px-4 py-3 tabular-nums">
                        {ongoing ? gbp.format(ongoing.low) : "—"}
                      </td>
                      <td className="px-4 py-3 tabular-nums">
                        {ongoing ? gbp.format(ongoing.typical) : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : null}

        <p className="mt-3 text-xs leading-relaxed text-slate-500">
          Based on 13 pens per calendar year. Year one includes titration doses. Ongoing annual cost assumes 13 pens at the stated maintenance dose. Standard cold-chain delivery and consultation fees are excluded.
        </p>
      </div>
    </section>
  );
}

