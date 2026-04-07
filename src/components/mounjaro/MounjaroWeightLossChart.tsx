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
  MOUNJARO_TRIAL_CHART_POINTS,
  MOUNJARO_TRIAL_CHART_SOURCE,
} from "@/lib/data/mounjaro-trial-chart-data";

const chartData = MOUNJARO_TRIAL_CHART_POINTS.map((p) => ({
  week: p.week,
  Tirzepatide: p.tirzepatidePct,
  Placebo: p.placeboPct,
}));

export default function MounjaroWeightLossChart() {
  return (
    <figure className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Mean change in body weight over 72 weeks (illustrative)
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Tirzepatide vs placebo in a major obesity trial — percentage change from
          baseline. Curve simplified for display.
        </p>
      </figcaption>
      <div
        className="h-72 w-full min-h-[18rem]"
        role="img"
        aria-label="Line chart: mean body weight change percent, tirzepatide versus placebo by week"
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
              dataKey="Tirzepatide"
              stroke="#7c3aed"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Placebo"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={{ r: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Source (full trial): {MOUNJARO_TRIAL_CHART_SOURCE}
      </p>
    </figure>
  );
}
