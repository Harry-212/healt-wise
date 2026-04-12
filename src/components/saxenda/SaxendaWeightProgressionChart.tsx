"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  SAXENDA_MONTH_PROGRESSION,
  SAXENDA_MONTH_PROGRESSION_SOURCE,
} from "@/lib/data/saxenda-month-weight-progression";
import { RechartsShell } from "@/components/charts/recharts-shell";

const data = SAXENDA_MONTH_PROGRESSION.map((p) => ({
  month: p.monthLabel,
  monthNum: p.monthNum,
  pct: p.pctLost,
}));

export default function SaxendaWeightProgressionChart() {
  return (
    <figure className="rounded-2xl border border-brand-border bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Illustrative weight loss progression over months
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Mean-style curve for education only — individual results vary widely.
        </p>
      </figcaption>
      <RechartsShell heightPx={288}>
        {(dims) => (
          <div
            className="h-full w-full"
            role="img"
            aria-label="Line chart of body weight percent change by month for liraglutide"
          >
            <LineChart
              width={dims.width}
              height={dims.height}
              data={data}
              margin={{ top: 8, right: 12, left: 4, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="opacity-60" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 11 }}
                label={{
                  value: "Time (months)",
                  position: "insideBottom",
                  offset: -2,
                  fontSize: 11,
                }}
              />
              <YAxis
                tick={{ fontSize: 11 }}
                tickFormatter={(v) => `${v}%`}
                domain={["dataMin - 0.5", 0]}
                label={{
                  value: "Change from baseline (%)",
                  angle: -90,
                  position: "insideLeft",
                  fontSize: 11,
                }}
              />
              <Tooltip
                formatter={(value) =>
                  value != null && (typeof value === "number" || typeof value === "string")
                    ? [`${Number(value).toFixed(1)}%`, "Approx. change"]
                    : ["", ""]
                }
                labelFormatter={(label) => `Month marker: ${label}`}
                contentStyle={{ borderRadius: "12px", border: "1px solid #e5e7eb" }}
              />
              <Line
                type="monotone"
                dataKey="pct"
                name="Illustrative % change"
                stroke="#0284c7"
                strokeWidth={2.5}
                dot={{ r: 4, fill: "#0284c7" }}
                activeDot={{ r: 6 }}
                isAnimationActive={false}
              />
            </LineChart>
          </div>
        )}
      </RechartsShell>
      <p className="mt-3 text-xs text-slate-500">{SAXENDA_MONTH_PROGRESSION_SOURCE}</p>
    </figure>
  );
}
