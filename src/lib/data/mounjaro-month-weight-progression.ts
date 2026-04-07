/**
 * Illustrative mean % body weight change over months on tirzepatide (SURMOUNT-style).
 * Not individual prediction — for education only.
 */
export const MOUNJARO_MONTH_PROGRESSION_SOURCE =
  "Illustrative curve based on published obesity trials (e.g. SURMOUNT programme).";

export type MounjaroMonthProgressPoint = {
  monthLabel: string;
  monthNum: number;
  pctLost: number;
};

export const MOUNJARO_MONTH_PROGRESSION: MounjaroMonthProgressPoint[] = [
  { monthLabel: "M1", monthNum: 1, pctLost: -3 },
  { monthLabel: "M2", monthNum: 2, pctLost: -5.5 },
  { monthLabel: "M3", monthNum: 3, pctLost: -8.5 },
  { monthLabel: "M4", monthNum: 4, pctLost: -11 },
  { monthLabel: "M6", monthNum: 6, pctLost: -14 },
  { monthLabel: "M12", monthNum: 12, pctLost: -18 },
];
