/**
 * Illustrative points approximating mean % change in body weight (STEP 1–style trial,
 * once-weekly semaglutide 2.4 mg vs placebo over 68 weeks). Not for clinical use.
 * See: Wilding et al., NEJM 2021 (STEP 1).
 */
export const WEGOVY_TRIAL_CHART_SOURCE =
  "Wilding JPH et al. Once-weekly semaglutide in adults with overweight or obesity. N Engl J Med. 2021.";

export type TrialChartPoint = {
  week: number;
  semaglutidePct: number;
  placeboPct: number;
};

/** Simplified curve for charting — rounded illustrative values. */
export const WEGOVY_TRIAL_CHART_POINTS: TrialChartPoint[] = [
  { week: 0, semaglutidePct: 0, placeboPct: 0 },
  { week: 8, semaglutidePct: -6, placeboPct: -1.2 },
  { week: 16, semaglutidePct: -9.5, placeboPct: -1.8 },
  { week: 28, semaglutidePct: -12, placeboPct: -2.0 },
  { week: 40, semaglutidePct: -13.5, placeboPct: -2.2 },
  { week: 52, semaglutidePct: -14.5, placeboPct: -2.3 },
  { week: 68, semaglutidePct: -15.2, placeboPct: -2.4 },
];
