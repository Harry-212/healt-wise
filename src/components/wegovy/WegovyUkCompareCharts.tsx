"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  averagePriceAcrossDoses,
  dosePriceRangeByStrength,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";

const teal = "#0d9488";
const grey = "#94a3b8";

type Props = { providers: WegovyUkProviderCompare[] };

export function WegovyUkPriceRangeByDoseChart({ providers }: Props) {
  const data = dosePriceRangeByStrength(providers).map((r) => ({
    dose: r.dose.replace("mg", " mg"),
    min: r.min,
    max: r.max,
  }));

  return (
    <figure className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Illustrative price spread by pen strength
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Min and max pen prices across listed providers (same snapshot). Teal
          = highest listed; grey = lowest listed for that strength.
        </p>
      </figcaption>
      <div
        className="h-64 w-full min-h-64 md:h-72"
        role="img"
        aria-label="Bar chart of minimum and maximum Wegovy pen prices by dose"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: 4, bottom: 4 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="dose" tick={{ fontSize: 11 }} stroke="#64748b" />
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
            <Bar dataKey="min" name="Lowest listed" fill={grey} radius={[6, 6, 0, 0]} />
            <Bar dataKey="max" name="Highest listed" fill={teal} radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
}

export function WegovyUkDosageCostLineChart({ providers }: Props) {
  const data = averagePriceAcrossDoses(providers).map((r) => ({
    dose: r.dose.replace("mg", " mg"),
    avg: r.avg,
  }));

  return (
    <figure className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Average listed pen price by strength
        </h3>
        <p className="mt-1 text-sm text-slate-600">
          Mean of provider prices at each titration step — costs usually rise as
          dose increases.
        </p>
      </figcaption>
      <div
        className="h-64 w-full min-h-64 md:h-72"
        role="img"
        aria-label="Line chart of average Wegovy price by dose"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: 4, bottom: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="dose" tick={{ fontSize: 11 }} stroke="#64748b" />
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
              name="Average price"
              stroke={teal}
              strokeWidth={2.5}
              dot={{ fill: teal, strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
}
