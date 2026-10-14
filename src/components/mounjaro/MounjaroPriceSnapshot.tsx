import type { MounjaroPriceInsights } from "@/lib/data/mounjaro-price-insights";
import { formatDose, formatGbp } from "@/lib/data/mounjaro-price-insights";

export default function MounjaroPriceSnapshot({
  insights,
  typicalFirstSixMonths,
}: {
  insights: MounjaroPriceInsights;
  typicalFirstSixMonths: number;
}) {
  const rows = [
    {
      label: `Cheapest Mounjaro price, starter pen (${formatDose(insights.starter.dose)})`,
      value: formatGbp(insights.starter.low),
    },
    {
      label: `Cheapest top dose pen (${formatDose(insights.top.dose)})`,
      value: formatGbp(insights.top.low),
    },
    {
      label: "Typical cost of your first 6 months",
      value: formatGbp(typicalFirstSixMonths),
    },
    {
      label: `Biggest gap for the same pen (${formatDose(insights.widest.dose)})`,
      value: formatGbp(insights.widest.high - insights.widest.low),
    },
  ];

  return (
    <section
      id="mounjaro-price-snapshot"
      className="border-b border-slate-200/80 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Mounjaro prices UK at a glance
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Mounjaro pricing in the UK goes up as your dose goes up. Here is
          the Mounjaro price in the UK in four numbers.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Dose type</th>
                <th className="px-4 py-3">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="px-4 py-3 text-slate-800">{row.label}</td>
                  <td className="px-4 py-3 tabular-nums font-semibold text-slate-900">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
