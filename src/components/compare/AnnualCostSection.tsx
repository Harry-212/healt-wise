import type { ReactNode } from "react";
import type {
  AnnualCostEstimates,
  AnnualCostRow,
} from "@/lib/data/annual-cost-estimates";
import { PENS_PER_YEAR } from "@/lib/data/annual-cost-estimates";

const gbp = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
  maximumFractionDigits: 0,
});

function formatDose(dose: string): string {
  return dose.replace("mg", " mg");
}

function CostTable({
  caption,
  firstHeader,
  rows,
}: {
  caption: string;
  firstHeader: string;
  rows: AnnualCostRow[];
}) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-slate-50 text-slate-700">
          <tr>
            <th scope="col" className="px-4 py-3 font-semibold">
              {firstHeader}
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Lowest listed
            </th>
            <th scope="col" className="px-4 py-3 font-semibold">
              Typical (median)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-600">
          {rows.map((r) => (
            <tr key={r.dose}>
              <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                {formatDose(r.dose)}
              </th>
              <td className="px-4 py-3 tabular-nums">{gbp.format(r.low)}</td>
              <td className="px-4 py-3 tabular-nums">
                {gbp.format(r.typical)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AnnualCostSection({
  medicine,
  estimates,
  providerCount,
  intro,
}: {
  medicine: string;
  estimates: AnnualCostEstimates;
  providerCount: number;
  /** Medicine-specific opening paragraph; defaults to the shared wording. */
  intro?: ReactNode;
}) {
  if (estimates.yearOne.length === 0 && estimates.ongoing.length === 0) {
    return null;
  }

  return (
    <section
      id="yearly-cost"
      className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Total {medicine} cost: first year vs ongoing
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          {intro ?? (
            <>
              Monthly pen prices only tell part of the story. Most people spend
              the first few months on lower starter strengths before settling on
              a maintenance dose, so year one usually costs less than a full year
              at maintenance.
            </>
          )}{" "}
          The figures below are calculated from the pen prices of the{" "}
          {providerCount} providers in our table: one pen covers four weekly
          doses, so a year is {PENS_PER_YEAR} pens.
        </p>

        {estimates.yearOne.length > 0 ? (
          <>
            <h3 className="mt-8 text-lg font-semibold text-slate-900">
              Estimated year one cost, including titration
            </h3>
            <p className="mt-2 leading-relaxed text-slate-600">
              Assumes one pen at each lower strength before reaching the dose
              shown, then that dose for the rest of the year.
            </p>
            <CostTable
              caption={`Estimated first-year ${medicine} cost by maintenance dose`}
              firstHeader="Dose you settle on"
              rows={estimates.yearOne}
            />
          </>
        ) : null}

        {estimates.ongoing.length > 0 ? (
          <>
            <h3 className="mt-10 text-lg font-semibold text-slate-900">
              Estimated ongoing annual cost at maintenance
            </h3>
            <CostTable
              caption={`Estimated annual ${medicine} cost at each maintenance dose`}
              firstHeader="Maintenance dose"
              rows={estimates.ongoing}
            />
          </>
        ) : null}

        <p className="mt-6 text-sm leading-relaxed text-slate-500">
          Estimates only, based on medication prices. They do not include
          consultation, delivery or programme fees where a provider charges
          them separately, and your prescriber decides your dose and how
          quickly it changes.
        </p>
      </div>
    </section>
  );
}
