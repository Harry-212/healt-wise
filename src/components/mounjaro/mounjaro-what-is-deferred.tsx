"use client";

import dynamic from "next/dynamic";
import { InViewDefer } from "@/components/performance/InViewDefer";
import { ChartPlaceholder } from "@/components/performance/ChartPlaceholder";

const WeightLossChart = dynamic(() => import("./MounjaroWeightLossChart"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="18rem" />,
});

const BodyJourneyFlow = dynamic(() => import("./MounjaroBodyJourneyFlow"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="14rem" />,
});

const MonthTimeline = dynamic(() => import("./MounjaroMonthTimeline"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="13rem" />,
});

const WeightProgressionChart = dynamic(
  () => import("./MounjaroWeightProgressionChart"),
  {
    ssr: false,
    loading: () => <ChartPlaceholder minHeight="18rem" />,
  },
);

export function MounjaroDeferredWeightLossChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightLossChart />
    </InViewDefer>
  );
}

export function MounjaroDeferredBodyJourneyFlow() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="14rem" />}>
      <BodyJourneyFlow />
    </InViewDefer>
  );
}

export function MounjaroDeferredMonthTimeline() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="13rem" />}>
      <MonthTimeline />
    </InViewDefer>
  );
}

export function MounjaroDeferredWeightProgressionChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightProgressionChart />
    </InViewDefer>
  );
}
