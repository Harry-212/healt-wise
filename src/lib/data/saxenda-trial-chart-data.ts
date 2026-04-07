/**
 * Illustrative points approximating mean % change in body weight (SCALE trial–style,
 * liraglutide 3.0 mg daily vs placebo over 56 weeks). Not for clinical use.
 * See: Pi-Sunyer et al., NEJM 2015.
 */
export const SAXENDA_TRIAL_CHART_SOURCE =
  "Pi-Sunyer X et al. A randomized, controlled trial of 3.0 mg of liraglutide in weight management. N Engl J Med. 2015.";

export type SaxendaTrialChartPoint = {
  week: number;
  liraglutidePct: number;
  placeboPct: number;
};

export const SAXENDA_TRIAL_CHART_POINTS: SaxendaTrialChartPoint[] = [
  { week: 0, liraglutidePct: 0, placeboPct: 0 },
  { week: 8, liraglutidePct: -3.2, placeboPct: -1.1 },
  { week: 16, liraglutidePct: -4.8, placeboPct: -1.4 },
  { week: 28, liraglutidePct: -6.2, placeboPct: -1.7 },
  { week: 40, liraglutidePct: -7.2, placeboPct: -2.0 },
  { week: 56, liraglutidePct: -8.0, placeboPct: -2.4 },
];
