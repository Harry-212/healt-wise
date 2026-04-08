"use client";

import dynamic from "next/dynamic";
import { InViewDefer } from "@/components/performance/InViewDefer";
import { ChartPlaceholder } from "@/components/performance/ChartPlaceholder";

const WeightLossChart = dynamic(() => import("./SaxendaWeightLossChart"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="18rem" />,
});

const BodyJourneyFlow = dynamic(() => import("./SaxendaBodyJourneyFlow"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="14rem" />,
});

const WeekDoseTimeline = dynamic(() => import("./SaxendaWeekDoseTimeline"), {
  ssr: false,
  loading: () => <ChartPlaceholder minHeight="13rem" />,
});

const WeightProgressionChart = dynamic(
  () => import("./SaxendaWeightProgressionChart"),
  {
    ssr: false,
    loading: () => <ChartPlaceholder minHeight="18rem" />,
  },
);

export function SaxendaDeferredWeightLossChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightLossChart />
    </InViewDefer>
  );
}

export function SaxendaDeferredBodyJourneyFlow() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="14rem" />}>
      <BodyJourneyFlow />
    </InViewDefer>
  );
}

export function SaxendaDeferredWeekDoseTimeline() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="13rem" />}>
      <WeekDoseTimeline />
    </InViewDefer>
  );
}

export function SaxendaDeferredWeightProgressionChart() {
  return (
    <InViewDefer fallback={<ChartPlaceholder minHeight="18rem" />}>
      <WeightProgressionChart />
    </InViewDefer>
  );
}
