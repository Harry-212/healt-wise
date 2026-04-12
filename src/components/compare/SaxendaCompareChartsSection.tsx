"use client";

import dynamic from "next/dynamic";
import ChartSectionPlaceholder from "@/components/compare/ChartSectionPlaceholder";
import DeferNearViewport from "@/components/compare/DeferNearViewport";
import type { SaxendaUkProviderCompare } from "@/lib/data/saxenda-uk-compare-providers";

const SaxendaUkPackPriceRangeChart = dynamic(
  () =>
    import("@/components/saxenda/SaxendaUkCompareCharts").then(
      (m) => m.SaxendaUkPackPriceRangeChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

const SaxendaUkAveragePackLineChart = dynamic(
  () =>
    import("@/components/saxenda/SaxendaUkCompareCharts").then(
      (m) => m.SaxendaUkAveragePackLineChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

export default function SaxendaCompareChartsSection({
  providers,
}: {
  providers: SaxendaUkProviderCompare[];
}) {
  return (
    <DeferNearViewport
      fallback={
        <div className="grid gap-8">
          <ChartSectionPlaceholder />
          <ChartSectionPlaceholder />
        </div>
      }
    >
      <div className="grid gap-8">
        <SaxendaUkPackPriceRangeChart providers={providers} />
        <SaxendaUkAveragePackLineChart providers={providers} />
      </div>
    </DeferNearViewport>
  );
}
