import Link from "next/link";
import type {
  WegovyDoseStat,
  WegovyCheapestAtDose,
} from "@/lib/data/wegovy-price-insights";
import { formatDose, formatGbp } from "@/lib/data/wegovy-price-insights";

type DoseExtra = {
  dose: string;
  anchorId: string;
  note: string;
};

const DOSE_EXTRAS: DoseExtra[] = [
  {
    dose: "0.25mg",
    anchorId: "wegovy-0-25mg-price",
    note: "0.25 mg is the starter dose, so this is the price you pay in your first month.",
  },
  {
    dose: "0.5mg",
    anchorId: "wegovy-0-5mg-price",
    note: "Our Wegovy 0.5 mg price comparison for the UK covers all 62 pharmacies. Most people move to 0.5 mg in month 2.",
  },
  {
    dose: "1mg",
    anchorId: "wegovy-1mg-price",
    note: "That is the same price as its 0.5 mg pen. Our Wegovy 1mg price comparison for the UK shows every pharmacy that sells it.",
  },
  {
    dose: "1.7mg",
    anchorId: "wegovy-1-7mg-price",
    note: "Most people move to 1.7 mg in month 4.",
  },
  {
    dose: "2.4mg",
    anchorId: "wegovy-2-4mg-price",
    note: "2.4 mg is the dose most people stay on, so do a full Wegovy 2.4 mg price comparison in the UK before you choose a pharmacy.",
  },
  {
    dose: "7.2mg",
    anchorId: "wegovy-7-2mg-price",
    note: "7.2 mg is the highest dose, and only 48 of our 62 pharmacies sell it so far. One pharmacy lists it at £570, so always check the price twice.",
  },
];

function weeklyPrice(low: number): string {
  return formatGbp(Math.round((low / 4) * 100) / 100);
}

export default function WegovyPriceByDoseSection({
  doses,
  cheapestByDose,
}: {
  doses: WegovyDoseStat[];
  cheapestByDose: Record<string, WegovyCheapestAtDose[]>;
}) {
  return (
    <section
      id="wegovy-price-by-dose"
      className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Wegovy price by dose (UK)
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          The Wegovy pen price goes up with each dose. Find your dose below to
          see the lowest, typical and highest price we found. Each pen holds 4
          weekly doses, so we also show the price per week.
        </p>

        <div className="mt-8 space-y-8">
          {doses.map((d) => {
            const extra = DOSE_EXTRAS.find((e) => e.dose === d.dose);
            const cheapest = cheapestByDose[d.dose] ?? [];
            const anchorId = extra?.anchorId ?? `wegovy-${d.dose.replace(".", "-")}-price`;

            return (
              <div key={d.dose} id={anchorId} className="scroll-mt-28">
                <h3 className="text-lg font-bold text-slate-900">
                  Wegovy {formatDose(d.dose)} price UK
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  The cheapest Wegovy {formatDose(d.dose)} pen is{" "}
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
                    {cheapest.map((c, idx) => (
                      <span key={c.id}>
                        <Link
                          href={`/pharmacies/${c.id}`}
                          className="font-medium text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                        >
                          {c.name}
                        </Link>{" "}
                        {formatGbp(c.price)}
                        {idx < cheapest.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-slate-500">
          Each pharmacy name links to its review. Need help with the pen?{" "}
          <Link
            href="/tools/wegovy-click-calculator"
            className="font-semibold text-emerald-800 underline-offset-2 hover:underline"
          >
            Wegovy click calculator
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

