import Link from "next/link";
import HomeSectionCard from "@/components/ui/HomeSectionCard";

const ROWS = [
  { feature: "Medicine inside", mounjaro: "Tirzepatide", wegovy: "Semaglutide" },
  { feature: "Made by", mounjaro: "Eli Lilly", wegovy: "Novo Nordisk" },
  { feature: "How you take it", mounjaro: "One injection a week", wegovy: "One injection a week" },
  { feature: "Starter dose", mounjaro: "2.5 mg", wegovy: "0.25 mg" },
  { feature: "Usual top dose", mounjaro: "15 mg", wegovy: "2.4 mg" },
  { feature: "Average weight loss in the main trial", mounjaro: "20.9% after 72 weeks (15 mg dose)", wegovy: "14.9% after 68 weeks" },
  { feature: "Starter pen from", mounjaro: "£99", wegovy: "£83" },
] as const;

export default function MounjaroVsWegovySection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Compare weight loss injections UK: Mounjaro vs Wegovy
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Want to compare weight loss jabs in the UK? Mounjaro and Wegovy are
        the two main weight loss injections. Both are weekly pens that help
        you feel full for longer. Here is how they compare.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th scope="col" className="px-4 py-3 font-semibold">Feature</th>
              <th scope="col" className="px-4 py-3 font-semibold">Mounjaro</th>
              <th scope="col" className="px-4 py-3 font-semibold">Wegovy</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.feature} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                <td className="px-4 py-3 text-slate-700">{row.mounjaro}</td>
                <td className="px-4 py-3 text-slate-700">{row.wegovy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
        In trials, people lost more weight on Mounjaro. But the right choice
        depends on your health, and a prescriber will help you decide.
      </p>

      <div className="mt-5">
        <Link
          href="/compare/wegovy-vs-mounjaro"
          className="group inline-flex items-center text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 sm:text-base"
        >
          <span className="underline underline-offset-4 decoration-emerald-500/50 group-hover:decoration-emerald-700">
            Read our full Mounjaro vs Wegovy comparison
          </span>
          <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Trial results: SURMOUNT-1 (Mounjaro), STEP 1 (Wegovy).
      </p>
    </HomeSectionCard>
  );
}
