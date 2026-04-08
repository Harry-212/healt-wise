"use client";

import dynamic from "next/dynamic";
import { InViewDefer } from "@/components/performance/InViewDefer";
import { ChartPlaceholder } from "@/components/performance/ChartPlaceholder";

const WeightLossChart = dynamic(() => import("./WegovyWeightLossChart"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="18rem" />,
});

const BodyJourneyFlow = dynamic(() => import("./WegovyBodyJourneyFlow"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="14rem" />,
});

const MonthTimeline = dynamic(() => import("./WegovyMonthTimeline"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="13rem" />,
});

const WeightProgressionChart = dynamic(
  () => import("./WegovyWeightProgressionChart"),
  {
    ssr: false,
    loading: () => <ChartPlaceholder minHeight="18rem" />,
  },
);

export function WegovyDeferredWeightLossChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightLossChart />
    </InViewDefer>
  );
}

export function WegovyDeferredBodyJourneyFlow() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="14rem" />}>
      <BodyJourneyFlow />
    </InViewDefer>
  );
}

export function WegovyDeferredMonthTimeline() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="13rem" />}>
      <MonthTimeline />
    </InViewDefer>
  );
}

export function WegovyDeferredWeightProgressionChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightProgressionChart />
    </InViewDefer>
  );
}
