"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const fill = "#0d9488";

type Row = { label: string; amount: number; detail: string };

export function CheapestOptionsEntryPricesChart({ data }: { data: Row[] }) {
  const chartRows = data.map((d) => ({
    label: d.label,
    gbp: d.amount,
    detail: d.detail,
  }));

  return (
    <figure className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-sm md:p-6">
      <figcaption className="mb-4">
        <h2 className="text-lg font-semibold text-slate-900">
          Snapshot: lowest listed “entry” order in our tables
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Not a like-for-like medical comparison — different drugs, doses, and
          pack sizes. Use the full comparison pages for every strength and
          provider.
        </p>
      </figcaption>
      <div
        className="h-56 w-full min-h-56 md:h-64"
        role="img"
        aria-label="Bar chart of lowest listed entry prices for Wegovy, Mounjaro, and Saxenda"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartRows}
            layout="vertical"
            margin={{ top: 4, right: 16, left: 8, bottom: 4 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              type="number"
              tick={{ fontSize: 11 }}
              stroke="#64748b"
              tickFormatter={(v) => `£${v}`}
            />
            <YAxis
              type="category"
              dataKey="label"
              width={72}
              tick={{ fontSize: 12 }}
              stroke="#64748b"
            />
            <Tooltip
              formatter={(value, _name, item) => {
                const row = item?.payload as
                  | { gbp: number; detail: string }
                  | undefined;
                const n = typeof value === "number" ? value : Number(value);
                const main = `£${Number.isFinite(n) ? n : value}`;
                return [row?.detail ? `${main} — ${row.detail}` : main, ""];
              }}
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #e2e8f0",
                fontSize: 13,
                maxWidth: 280,
              }}
            />
            <Bar dataKey="gbp" name="Lowest listed" fill={fill} radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </figure>
  );
}
