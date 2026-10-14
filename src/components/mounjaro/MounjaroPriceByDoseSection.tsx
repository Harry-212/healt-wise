import Link from "next/link";
import type { MounjaroDoseStat, CheapestAtDose } from "@/lib/data/mounjaro-price-insights";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";

type DoseExtra = {
  dose: string;
  /** Dose-specific closing remark that doesn't generalise from the numbers alone. */
  note: string;
};

const DOSE_EXTRAS: DoseExtra[] = [
  {
    dose: "2.5mg",
    note:
      "2.5 mg is the starter dose, so this is the Mounjaro injection 2.5 mg price you pay in your first month.",
  },
  {
    dose: "5mg",
    note:
      "Our Mounjaro 5mg price comparison for the UK covers all the pharmacies in our table. Most people move to 5 mg in month 2.",
  },
  {
    dose: "7.5mg",
    note:
      "The Mounjaro 7.5 mg price is the most searched of all doses, so use the table for a full Mounjaro 7.5mg price comparison in the UK before you choose a pharmacy.",
  },
  {
    dose: "10mg",
    note: "",
  },
  {
    dose: "12.5mg",
    note: "This dose has the biggest price gap for the same pen.",
  },
  {
    dose: "15mg",
    note: "15 mg is the top dose.",
  },
];

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
          see the lowest, typical and highest price we found. Each pen holds
          4 weekly doses, so we also show the price per week.
        </p>

        <div className="mt-8 space-y-8">
          {doses.map((d) => {
            const extra = DOSE_EXTRAS.find((e) => e.dose === d.dose);
            const cheapest = cheapestByDose[d.dose] ?? [];
            return (
              <div key={d.dose}>
                <h3 className="text-lg font-bold text-slate-900">
                  Mounjaro {formatDose(d.dose)} price UK
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  The cheapest Mounjaro {formatDose(d.dose)} pen is{" "}
                  {formatGbp(d.low)} at {d.lowProvider}, or{" "}
                  {weeklyPrice(d.low)} a week. Most pharmacies charge about{" "}
                  {formatGbp(d.median)}, and the highest price is{" "}
                  {formatGbp(d.high)}.{extra?.note ? ` ${extra.note}` : ""}
                </p>
                {cheapest.length > 0 ? (
                  <p className="mt-2 text-sm text-slate-500">
                    <strong className="font-semibold text-slate-700">
                      Cheapest 3:
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
          help with the pen?{" "}
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
