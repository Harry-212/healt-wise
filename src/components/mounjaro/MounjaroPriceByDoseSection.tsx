import Link from "next/link";
import type { MounjaroDoseStat, CheapestAtDose } from "@/lib/data/mounjaro-price-insights";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";

/** Dose-specific closing remark that doesn't generalise from the numbers alone. */
function doseNote(stat: MounjaroDoseStat): string {
  switch (stat.dose) {
    case "2.5mg":
      return "The patient leaflet says the starting dose is 2.5 mg once a week for four weeks, after which your doctor decides on the next dose. This is the Mounjaro injection 2.5 mg price. A KwikPen holds four weekly doses, so the weekly figure is the pen price divided by four.";
    case "5mg":
      return "The leaflet says your doctor increases the dose to 5 mg after four weeks at 2.5 mg. Our Mounjaro 5mg price comparison for the UK covers all the pharmacies in our table.";
    case "7.5mg":
      return "Your doctor may increase the dose in steps of 2.5 mg, and the leaflet says to stay on each dose for at least 4 weeks before the next. 7.5 mg is one of those steps, and one of the most searched doses, so use the table for a full Mounjaro 7.5mg price comparison in the UK before you choose a pharmacy.";
    case "12.5mg":
      return `At this dose the gap between the lowest and highest listed price is ${formatGbp(Math.round((stat.high - stat.low) * 100) / 100)}.`;
    case "15mg":
      return "15 mg is the top dose in the patient leaflet.";
    default:
      return "";
  }
}

function weeklyPrice(low: number): string {
  return formatGbp(Math.round((low / 4) * 100) / 100);
}

export default function MounjaroPriceByDoseSection({
  doses,
  cheapestByDose,
}: {
  doses: MounjaroDoseStat[];
  cheapestByDose: Record<string, CheapestAtDose[]>;
}) {
  return (
    <section
      id="mounjaro-price-by-dose"
      className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Mounjaro price by dose (UK)
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Mounjaro pen prices go up with each dose. This Mounjaro pen price
          comparison for the UK shows every dose. Find your dose below to
          see the lowest, typical and highest listed price among our checked
          partner pharmacies. Each pen holds 4 weekly doses, so we also show
          the price per week.
        </p>

        <div className="mt-8 space-y-8">
          {doses.map((d) => {
            const note = doseNote(d);
            const cheapest = cheapestByDose[d.dose] ?? [];
            return (
              <div key={d.dose} id={`mounjaro-${d.dose.replace('.', '-')}-price`} className="scroll-mt-28">
                <h3 className="text-lg font-bold text-slate-900">
                  Mounjaro {formatDose(d.dose)} price UK
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  Among our checked partner listings, the lowest Mounjaro{" "}
                  {formatDose(d.dose)} pen price is {formatGbp(d.low)} at{" "}
                  {d.lowProvider}, or {weeklyPrice(d.low)} a week. The median
                  price among our checked partner listings is{" "}
                  {formatGbp(d.median)}, and the highest price is{" "}
                  {formatGbp(d.high)}.{note ? ` ${note}` : ""}
                </p>
                {cheapest.length > 0 ? (
                  <p className="mt-2 text-sm text-slate-500">
                    <strong className="font-semibold text-slate-700">
                      Three lowest priced partner listings:
                    </strong>{" "}
                    {cheapest
                      .map((c) => `${c.name} ${formatGbp(c.price)}`)
                      .join(" · ")}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          Each pharmacy name links to its review in the table above. Need
          help with the pen? Try our{" "}
          <Link
            href="/tools/mounjaro-click-calculator"
            className="font-semibold text-violet-800 underline-offset-2 hover:underline"
          >
            Mounjaro click calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
