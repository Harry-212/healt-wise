"use client";

import dynamic from "next/dynamic";
import ChartSectionPlaceholder from "@/components/compare/ChartSectionPlaceholder";
import DeferNearViewport from "@/components/compare/DeferNearViewport";
import type { WegovyUkProviderCompare } from "@/lib/data/wegovy-uk-compare-providers";

const WegovyUkPriceRangeByDoseChart = dynamic(
  () =>
    import("@/components/wegovy/WegovyUkCompareCharts").then(
      (m) => m.WegovyUkPriceRangeByDoseChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

const WegovyUkDosageCostLineChart = dynamic(
  () =>
    import("@/components/wegovy/WegovyUkCompareCharts").then(
      (m) => m.WegovyUkDosageCostLineChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

export default function WegovyCompareChartsSection({
  providers,
}: {
  providers: WegovyUkProviderCompare[];
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
        <WegovyUkPriceRangeByDoseChart providers={providers} />
        <WegovyUkDosageCostLineChart providers={providers} />
      </div>
    </DeferNearViewport>
  );
}
