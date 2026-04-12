"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  saxendaAveragePackPriceByPack,
  saxendaPackPriceRangeByPack,
  type SaxendaUkProviderCompare,
} from "@/lib/data/saxenda-uk-compare-providers";
import { RechartsShell } from "@/components/charts/recharts-shell";

const sky = "#0284c7";
const grey = "#94a3b8";

type Props = { providers: SaxendaUkProviderCompare[] };

export function SaxendaUkPackPriceRangeChart({ providers }: Props) {
  const data = saxendaPackPriceRangeByPack(providers);

  return (
    <figure className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Illustrative price spread by pack size
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Min and max total pack prices across listed providers (same snapshot).
          Blue = highest listed; grey = lowest listed for that pack count.
        </p>
      </figcaption>
      <RechartsShell heightPx={288}>
        {(dims) => (
          <div
            className="h-full w-full"
            role="img"
            aria-label="Bar chart of minimum and maximum Saxenda pack prices by number of pens"
          >
            <BarChart
              width={dims.width}
              height={dims.height}
              data={data}
              margin={{ top: 8, right: 8, left: 4, bottom: 4 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="pack" tick={{ fontSize: 11 }} stroke="#64748b" />
              <YAxis
                tick={{ fontSize: 11 }}
                stroke="#64748b"
                tickFormatter={(v) => `£${v}`}
              />
              <Tooltip
                formatter={(value) => {
                  const n = typeof value === "number" ? value : Number(value);
                  return [`£${Number.isFinite(n) ? n : value}`, ""];
                }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar
                dataKey="min"
                name="Lowest listed"
                fill={grey}
                radius={[6, 6, 0, 0]}
                isAnimationActive={false}
              />
              <Bar
                dataKey="max"
                name="Highest listed"
                fill={sky}
                radius={[6, 6, 0, 0]}
                isAnimationActive={false}
              />
            </BarChart>
          </div>
        )}
      </RechartsShell>
    </figure>
  );
}

export function SaxendaUkAveragePackLineChart({ providers }: Props) {
  const data = saxendaAveragePackPriceByPack(providers);

  return (
    <figure className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Average listed pack price by size
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Mean of provider totals for 1, 3, and 5 pens — larger packs often
          reduce £/mg but not always the headline repeat cadence.
        </p>
      </figcaption>
      <RechartsShell heightPx={288}>
        {(dims) => (
          <div
            className="h-full w-full"
            role="img"
            aria-label="Line chart of average Saxenda pack price by pack size"
          >
            <LineChart
              width={dims.width}
              height={dims.height}
              data={data}
              margin={{ top: 8, right: 12, left: 4, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="pack" tick={{ fontSize: 11 }} stroke="#64748b" />
              <YAxis
                tick={{ fontSize: 11 }}
                stroke="#64748b"
                tickFormatter={(v) => `£${v}`}
              />
              <Tooltip
                formatter={(value) => {
                  const n = typeof value === "number" ? value : Number(value);
                  return [`£${Number.isFinite(n) ? n : value}`, "Average"];
                }}
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  fontSize: 13,
                }}
              />
              <Line
                type="monotone"
                dataKey="avg"
                name="Average pack price"
                stroke={sky}
                strokeWidth={2.5}
                dot={{ r: 4, fill: sky }}
                isAnimationActive={false}
              />
            </LineChart>
          </div>
        )}
      </RechartsShell>
    </figure>
  );
}
