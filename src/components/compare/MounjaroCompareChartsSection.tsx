"use client";

import dynamic from "next/dynamic";
import ChartSectionPlaceholder from "@/components/compare/ChartSectionPlaceholder";
import DeferNearViewport from "@/components/compare/DeferNearViewport";
import type { MounjaroUkProviderCompare } from "@/lib/data/mounjaro-uk-compare-providers";

const MounjaroUkPriceRangeByDoseChart = dynamic(
  () =>
    import("@/components/mounjaro/MounjaroUkCompareCharts").then(
      (m) => m.MounjaroUkPriceRangeByDoseChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

const MounjaroUkDosageCostLineChart = dynamic(
  () =>
    import("@/components/mounjaro/MounjaroUkCompareCharts").then(
      (m) => m.MounjaroUkDosageCostLineChart,
    ),
  { loading: () => <ChartSectionPlaceholder />, ssr: false },
);

export default function MounjaroCompareChartsSection({
  providers,
}: {
  providers: MounjaroUkProviderCompare[];
}) {
  return (
    <DeferNearViewport
      fallback={
        <div className="grid min-w-0 gap-8">
          <ChartSectionPlaceholder />
          <ChartSectionPlaceholder />
        </div>
      }
    >
      <div className="grid min-w-0 gap-8">
        <MounjaroUkPriceRangeByDoseChart providers={providers} />
        <MounjaroUkDosageCostLineChart providers={providers} />
      </div>
    </DeferNearViewport>
  );
}
