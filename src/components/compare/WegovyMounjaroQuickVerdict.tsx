import Link from "next/link";
import { ArrowRight, BadgeCheck, Scale, Sparkles, Zap } from "lucide-react";

const COMPARISON_ROWS = [
  {
    feature: "Active ingredient",
    wegovy: "Semaglutide",
    mounjaro: "Tirzepatide",
  },
  {
    feature: "Receptor target",
    wegovy: "GLP-1 receptor agonist",
    mounjaro: "Dual GIP & GLP-1 receptor agonist",
  },
  {
    feature: "Average weight loss in trials",
    wegovy: "Up to ~15%–16% (STEP-1 trial, 68 weeks)",
    mounjaro: "Up to ~21%–22.5% (SURMOUNT-1 trial, 72 weeks)",
    highlight: true,
  },
  {
    feature: "Starting dose (Month 1)",
    wegovy: "0.25 mg once weekly",
    mounjaro: "2.5 mg once weekly",
  },
  {
    feature: "Maximum maintenance dose",
    wegovy: "2.4 mg weekly (48/62 pharmacies also list 7.2 mg)",
    mounjaro: "15 mg once weekly",
  },
  {
    feature: "Cheapest starter pen price",
    wegovy: "From £83 / month (Slinic)",
    mounjaro: "From ~£119–£129 / month",
    highlight: true,
  },
  {
    feature: "Injection routine",
    wegovy: "Once weekly pre-filled FlexTouch pen",
    mounjaro: "Once weekly pre-filled KwikPen",
  },
  {
    feature: "UK regulatory status",
    wegovy: "MHRA licensed for weight management",
    mounjaro: "MHRA licensed for weight management",
  },
  {
    feature: "NHS availability",
    wegovy: "NICE recommended (Tier 3/4 specialist clinics, 2-yr limit)",
    mounjaro: "NICE recommended (phased NHS rollout)",
  },
  {
    feature: "Prescriber assessment",
    wegovy: "Required (GPhC-registered clinical check)",
    mounjaro: "Required (GPhC-registered clinical check)",
  },
];

export default function WegovyMounjaroQuickVerdict() {
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
            Quick Verdict
          </span>
          <span className="text-xs text-slate-500 font-medium">Side-by-side comparison</span>
        </div>

        <h2
          id="quick-verdict-heading"
          className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          Wegovy vs Mounjaro at a Glance
        </h2>

        <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Wegovy (semaglutide) and Mounjaro (tirzepatide) are both once-weekly weight-loss injections licensed in the UK, but they work on different gut hormone receptors, follow different dose ladders, and differ in monthly cost. In clinical trials, Mounjaro produced higher average weight reduction (~21% vs ~15%), while Wegovy offers a longer UK safety history and a lower starting pen price from £83.
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
                    Wegovy (Semaglutide)
                  </th>
                  <th scope="col" className="px-5 py-4 font-bold text-brand-primary bg-emerald-50/60 w-1/3">
                    Mounjaro (Tirzepatide)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {COMPARISON_ROWS.map((row) => (
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

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-500">
          <p>
            * Trial figures reflect average weight loss in STEP-1 and SURMOUNT-1 clinical programmes. Individual response and tolerability vary.
          </p>
          <p className="font-medium text-slate-600">
            A prescriber decides which medicine is clinically right for you.
          </p>
        </div>

        {/* Quick jump CTA buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#cost"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Compare UK Pharmacy Prices
            <Zap className="h-4 w-4 fill-white" aria-hidden />
          </a>
          <a
            href="#difference"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Read Full Differences
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}

