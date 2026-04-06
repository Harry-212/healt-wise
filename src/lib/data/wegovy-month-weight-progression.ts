/**
 * Illustrative mean % body weight change over months on semaglutide (trial-style).
 * Not individual prediction — for education only.
 */
export const WEGOVY_MONTH_PROGRESSION_SOURCE =
  "Illustrative curve based on published obesity trials (e.g. STEP programme).";

export type MonthProgressPoint = {
  monthLabel: string;
  monthNum: number;
  pctLost: number;
};

export const WEGOVY_MONTH_PROGRESSION: MonthProgressPoint[] = [
  { monthLabel: "M1", monthNum: 1, pctLost: -2.5 },
  { monthLabel: "M2", monthNum: 2, pctLost: -4.5 },
  { monthLabel: "M3", monthNum: 3, pctLost: -7 },
  { monthLabel: "M4", monthNum: 4, pctLost: -9.5 },
  { monthLabel: "M6", monthNum: 6, pctLost: -12 },
  { monthLabel: "M12", monthNum: 12, pctLost: -15 },
];
