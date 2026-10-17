import { Sparkles } from "lucide-react";

export interface WegovyMounjaroQuickVerdictProps {
  wegovyStarterLow?: string;
  mounjaroStarterLow?: string;
  wegovyTopTypical?: string;
  mounjaroTopTypical?: string;
  pricesChecked?: string;
}

export default function WegovyMounjaroQuickVerdict({
  wegovyStarterLow = "£72.89",
  mounjaroStarterLow = "£119.69",
  wegovyTopTypical = "£200",
  mounjaroTopTypical = "£299",
  pricesChecked = "20 September 2026",
}: WegovyMounjaroQuickVerdictProps) {
  const comparisonRows = [
    {
      feature: "Medicine inside",
      wegovy: "Semaglutide",
      mounjaro: "Tirzepatide",
    },
    {
      feature: "Made by",
      wegovy: "Novo Nordisk",
      mounjaro: "Eli Lilly",
    },
    {
      feature: "Hormones it copies",
      wegovy: "GLP-1",
      mounjaro: "GLP-1 and GIP",
    },
    {
      feature: "How you take it",
      wegovy: "One injection a week",
      mounjaro: "One injection a week",
    },
    {
      feature: "Starter dose",
      wegovy: "0.25 mg",
      mounjaro: "2.5 mg",
    },
    {
      feature: "Usual top dose",
      wegovy: "2.4 mg (some providers also list 7.2 mg)",
      mounjaro: "15 mg",
    },
    {
      feature: "Average weight loss in its main trial",
      wegovy: "14.9% after 68 weeks (2.4 mg)",
      mounjaro: "20.9% after 72 weeks (15 mg)",
      highlight: true,
    },
    {
      feature: "Head to head trial result",
      wegovy: "13.7% after 72 weeks",
      mounjaro: "20.2% after 72 weeks",
      highlight: true,
    },
    {
      feature: "Starter pen from",
      wegovy: wegovyStarterLow,
      mounjaro: mounjaroStarterLow,
      highlight: true,
    },
    {
      feature: "Typical price of the top dose pen",
      wegovy: `${wegovyTopTypical} (2.4 mg)`,
      mounjaro: `${mounjaroTopTypical} (15 mg)`,
    },
  ];
  return (
    <section
      id="quick-verdict"
      className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      aria-labelledby="quick-verdict-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-800">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Quick comparison
          </span>
        </div>

        <h2
          id="quick-verdict-heading"
          className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          Wegovy vs Mounjaro at a glance
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Wegovy versus Mounjaro: both are weekly pen injections for weight loss. They use different medicines, so the doses and prices are not the same. Use this Wegovy vs Mounjaro UK summary to compare Wegovy and Mounjaro on the main facts.
        </p>

        {/* Comparison table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-140 border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900">
                  <th scope="col" className="px-5 py-4 font-bold text-slate-900 w-1/3">
                    Feature
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-violet-900 bg-violet-50/60 w-1/3">
                    Wegovy
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-brand-primary bg-emerald-50/60 w-1/3">
                    Mounjaro
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {comparisonRows.map((row) => (
                  <tr
                    key={row.feature}
                    className={`transition-colors hover:bg-slate-50/80 ${
                      row.highlight ? "bg-amber-50/30" : ""
                    }`}
                  >
                    <th scope="row" className="px-5 py-3.5 font-medium text-slate-900">
                      {row.feature}
                    </th>
                    <td className="px-5 py-3.5 text-slate-700 bg-violet-50/20 font-medium">
                      {row.wegovy}
                    </td>
                    <td className="px-5 py-3.5 text-slate-700 bg-emerald-50/20 font-medium">
                      {row.mounjaro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs font-medium text-slate-500 md:text-sm">
          Prices checked {pricesChecked}
        </p>

        {/* In short summary */}
        <div className="mt-8 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6">
          <p className="font-bold text-slate-900">In short:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 md:text-base">
            <li>
              <strong className="font-semibold text-slate-900">Weight loss.</strong> Mounjaro led in the head to head trial.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Cost.</strong> Wegovy costs less for the same month of treatment.
            </li>
            <li>
              <strong className="font-semibold text-slate-900">Doses.</strong> Wegovy has 5 steps up to 2.4 mg. Mounjaro has 6 steps up to 15 mg.
            </li>
          </ul>
          <p className="mt-4 text-sm font-medium text-slate-700 md:text-base">
            A prescriber decides which one is right for you.
          </p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-500 sm:text-sm">
          Trial results:{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2206038"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-800 underline-offset-2 hover:underline"
          >
            SURMOUNT-1 (Mounjaro)
          </a>
          ,{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2032183"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-800 underline-offset-2 hover:underline"
          >
            STEP 1 (Wegovy)
          </a>{" "}
          and{" "}
          <a
            href="https://www.nejm.org/doi/full/10.1056/NEJMoa2416394"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-800 underline-offset-2 hover:underline"
          >
            SURMOUNT-5 (head to head)
          </a>
          .
        </p>
      </div>
    </section>
  );
}
