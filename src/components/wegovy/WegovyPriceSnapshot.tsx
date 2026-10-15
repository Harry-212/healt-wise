import type { WegovyPriceInsights } from "@/lib/data/wegovy-price-insights";
import { formatGbp } from "@/lib/data/wegovy-price-insights";

export default function WegovyPriceSnapshot({
  insights,
  typicalFirstSixMonths,
}: {
  insights: WegovyPriceInsights;
  typicalFirstSixMonths: number;
}) {
  const dose2_4 = insights.doses.find((d) => d.dose === "2.4mg") ?? insights.top;
  const gap2_4 = dose2_4.high - dose2_4.low;

  const rows = [
    {
      label: "Cheapest Wegovy price, starter pen (0.25 mg)",
      value: formatGbp(insights.starter.low),
    },
    {
      label: "Cheapest 2.4 mg pen (the usual long term dose)",
      value: formatGbp(dose2_4.low),
    },
    {
      label: "Typical cost of your first 6 months",
      value: formatGbp(typicalFirstSixMonths),
    },
    {
      label: "Biggest gap for the same pen (2.4 mg)",
      value: formatGbp(gap2_4),
    },
  ];

  return (
    <section
      id="wegovy-price-snapshot"
      className="border-b border-slate-200/80 bg-white py-12 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Wegovy prices UK at a glance
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Wegovy pricing in the UK goes up with your dose. The cheapest Wegovy
          price in the UK is {formatGbp(insights.starter.low)}, for the starter
          pen. Here are the prices of Wegovy in the UK in four numbers.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
          <table className="w-full border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Price type</th>
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

