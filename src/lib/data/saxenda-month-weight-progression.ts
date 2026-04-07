/**
 * Illustrative mean % body weight change over months on liraglutide 3 mg (trial-style).
 * Not individual prediction — for education only.
 */
export const SAXENDA_MONTH_PROGRESSION_SOURCE =
  "Illustrative curve based on published obesity trials (e.g. SCALE programme, ~56 weeks).";

export type SaxendaMonthProgressPoint = {
  monthLabel: string;
  monthNum: number;
  pctLost: number;
};

export const SAXENDA_MONTH_PROGRESSION: SaxendaMonthProgressPoint[] = [
  { monthLabel: "M1", monthNum: 1, pctLost: -1.8 },
  { monthLabel: "M2", monthNum: 2, pctLost: -3.2 },
  { monthLabel: "M3", monthNum: 3, pctLost: -4.8 },
  { monthLabel: "M4", monthNum: 4, pctLost: -5.8 },
  { monthLabel: "M6", monthNum: 6, pctLost: -6.8 },
  { monthLabel: "M12", monthNum: 12, pctLost: -7.5 },
];
