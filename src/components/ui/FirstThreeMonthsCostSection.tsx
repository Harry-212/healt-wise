import HomeSectionCard from "@/components/ui/HomeSectionCard";

const ROWS = [
  { month: "Month 1", mounjaroDose: "2.5 mg", mounjaroPrice: "£99", wegovyDose: "0.25 mg", wegovyPrice: "£84.98" },
  { month: "Month 2", mounjaroDose: "5 mg", mounjaroPrice: "£154", wegovyDose: "0.5 mg", wegovyPrice: "£84.98" },
  { month: "Month 3", mounjaroDose: "7.5 mg", mounjaroPrice: "£178", wegovyDose: "1 mg", wegovyPrice: "£84.98" },
] as const;

export default function FirstThreeMonthsCostSection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        What your first 3 months will really cost
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Many sites only show the price of your first pen. But your dose goes
        up each month, so the price goes up too. This weight loss injections
        cost comparison for the UK shows the total for your first 3 months.
      </p>

      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-slate-600">
              <th scope="col" className="px-4 py-3 font-semibold">Month</th>
              <th scope="col" className="px-4 py-3 font-semibold">Mounjaro dose</th>
              <th scope="col" className="px-4 py-3 font-semibold">Lowest price</th>
              <th scope="col" className="px-4 py-3 font-semibold">Wegovy dose</th>
              <th scope="col" className="px-4 py-3 font-semibold">Lowest price</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => (
              <tr key={row.month} className="border-t border-slate-200">
                <td className="px-4 py-3 font-medium text-slate-900">{row.month}</td>
                <td className="px-4 py-3 text-slate-700">{row.mounjaroDose}</td>
                <td className="px-4 py-3 text-slate-700">{row.mounjaroPrice}</td>
                <td className="px-4 py-3 text-slate-700">{row.wegovyDose}</td>
                <td className="px-4 py-3 text-slate-700">{row.wegovyPrice}</td>
              </tr>
            ))}
            <tr className="border-t border-slate-200 bg-emerald-50/60 font-bold text-slate-900">
              <td className="px-4 py-3" colSpan={2}>3-month total</td>
              <td className="px-4 py-3">£431</td>
              <td className="px-4 py-3" />
              <td className="px-4 py-3">£254.94</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-slate-500 sm:text-sm">
        The cheapest totals come from one pharmacy for all 3 months: Medicine
        Marketplace for Mounjaro and Next Script for Wegovy, at our 20
        September 2026 check.
      </p>
    </HomeSectionCard>
  );
}
