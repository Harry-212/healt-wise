/**
 * Illustrative points approximating mean % change in body weight (SURMOUNT-1–style trial,
 * tirzepatide vs placebo over 72 weeks). Not for clinical use.
 * See: Jastreboff et al., NEJM 2023 (SURMOUNT-1).
 */
export const MOUNJARO_TRIAL_CHART_SOURCE =
  "Jastreboff AM et al. Tirzepatide once weekly for the treatment of obesity. N Engl J Med. 2023.";

export type MounjaroTrialChartPoint = {
  week: number;
  tirzepatidePct: number;
  placeboPct: number;
};

export const MOUNJARO_TRIAL_CHART_POINTS: MounjaroTrialChartPoint[] = [
  { week: 0, tirzepatidePct: 0, placeboPct: 0 },
  { week: 12, tirzepatidePct: -8, placeboPct: -1.5 },
  { week: 24, tirzepatidePct: -12.5, placeboPct: -2 },
  { week: 36, tirzepatidePct: -16, placeboPct: -2.3 },
  { week: 48, tirzepatidePct: -18.5, placeboPct: -2.5 },
  { week: 60, tirzepatidePct: -20, placeboPct: -2.7 },
  { week: 72, tirzepatidePct: -20.9, placeboPct: -3.1 },
];
