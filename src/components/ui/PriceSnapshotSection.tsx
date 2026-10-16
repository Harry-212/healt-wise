import Link from "next/link";
import HomeSectionCard from "@/components/ui/HomeSectionCard";
import type { HomePriceSnapshotRow } from "@/lib/data/home-price-summary";

const DEFAULT_ROWS: HomePriceSnapshotRow[] = [
  { dose: "Mounjaro 2.5 mg (starter)", lowest: "£119.69", typical: "£154", highest: "£229" },
  { dose: "Mounjaro 15 mg (top dose)", lowest: "£245.69", typical: "£299", highest: "£359.95" },
  { dose: "Wegovy 0.25 mg (starter)", lowest: "£72.89", typical: "£100", highest: "£205" },
  { dose: "Wegovy 2.4 mg (top dose)", lowest: "£173.69", typical: "£200", highest: "£290" },
];

export interface PriceSnapshotSectionProps {
  rows?: HomePriceSnapshotRow[];
  lastUpdated?: string;
}

export default function PriceSnapshotSection({
  rows = DEFAULT_ROWS,
  lastUpdated = "20 September 2026",
}: PriceSnapshotSectionProps) {
  return (
    <HomeSectionCard id="price-snapshot">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Weight loss injections prices at our latest check
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Our weight loss injection price comparison for the UK shows what a 4
        week pen costs right now, from the cheapest to the most expensive
        pharmacy we check.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th scope="col" className="px-4 py-3 font-semibold">Medicine and dose</th>
              <th scope="col" className="px-4 py-3 font-semibold">Lowest</th>
              <th scope="col" className="px-4 py-3 font-semibold">Typical</th>
              <th scope="col" className="px-4 py-3 font-semibold">Highest</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dose} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-900">{row.dose}</td>
                <td className="px-4 py-3 text-slate-700">{row.lowest}</td>
                <td className="px-4 py-3 text-slate-700">{row.typical}</td>
                <td className="px-4 py-3 text-slate-700">{row.highest}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-slate-500 sm:text-sm">
        Prices are for the pen only. Delivery is usually extra. Last checked
        {" "}{lastUpdated}.
      </p>

      <div className="mt-5">
        <Link
          href="/compare/wegovy-vs-mounjaro"
          className="group inline-flex items-center text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 sm:text-base"
        >
          <span className="underline underline-offset-4 decoration-emerald-500/50 group-hover:decoration-emerald-700">
            See every pharmacy and dose
          </span>
          <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </HomeSectionCard>
  );
}
