"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  SAXENDA_TRIAL_CHART_POINTS,
  SAXENDA_TRIAL_CHART_SOURCE,
} from "@/lib/data/saxenda-trial-chart-data";
import { RechartsShell } from "@/components/charts/recharts-shell";

const chartData = SAXENDA_TRIAL_CHART_POINTS.map((p) => ({
  week: p.week,
  Liraglutide: p.liraglutidePct,
  Placebo: p.placeboPct,
}));

export default function SaxendaWeightLossChart() {
  return (
    <figure className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Mean change in body weight over 56 weeks (illustrative)
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Liraglutide 3.0 mg daily vs placebo in a major obesity trial — percentage
          change from baseline. Curve simplified for display.
        </p>
      </figcaption>
      <RechartsShell heightPx={288}>
        <div
          className="h-full w-full"
          role="img"
          aria-label="Line chart: mean body weight change percent, liraglutide versus placebo by week"
        >
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-40" stroke="#e2e8f0" />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 11 }}
              label={{ value: "Week", position: "insideBottom", offset: -4, fontSize: 12 }}
            />
            <YAxis
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => `${v}%`}
              label={{
                value: "Change from baseline (%)",
                angle: -90,
                position: "insideLeft",
                fontSize: 12,
              }}
            />
            <Tooltip
              formatter={(value) =>
                value != null && (typeof value === "number" || typeof value === "string")
                  ? [`${Number(value).toFixed(1)}%`, ""]
                  : ["", ""]
              }
              labelFormatter={(w) => `Week ${w}`}
              contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="Liraglutide"
              stroke="#0284c7"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="Placebo"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={{ r: 2 }}
              isAnimationActive={false}
            />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </RechartsShell>
      <p className="mt-4 text-xs text-slate-500">
        Source (full trial): {SAXENDA_TRIAL_CHART_SOURCE}
      </p>
    </figure>
  );
}
