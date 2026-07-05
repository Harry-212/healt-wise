"use client";

import { useSyncExternalStore } from "react";

/**
 * Stable, deterministic UK date format (e.g. `9 May 2026`) — matches the
 * style used across the compare tables and avoids Intl narrow-space
 * differences between Node and Chromium.
 */
export function formatTodayUK(date: Date): string {
  const day = date.getDate();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[date.getMonth()] ?? "";
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function todayUkPartsFromDate(d: Date): TodayUkParts {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return {
    display: formatTodayUK(d),
    dateTime: `${y}-${m}-${day}`,
  };
}

const noopSubscribe = () => () => {};

/** Calendar-day key for snapshot caching (`useSyncExternalStore` needs stable refs). */
function localCalendarDayKey(d: Date): string {
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

let cachedTodayLabel = "";
let cachedTodayLabelDay = "";

function getTodayLabelSnapshot(): string {
  const d = new Date();
  const day = localCalendarDayKey(d);
  if (day !== cachedTodayLabelDay) {
    cachedTodayLabelDay = day;
    cachedTodayLabel = formatTodayUK(d);
  }
  return cachedTodayLabel;
}

let cachedTodayUkParts: TodayUkParts | null = null;
let cachedTodayUkPartsDay = "";

function getTodayUkPartsSnapshot(): TodayUkParts {
  const d = new Date();
  const day = localCalendarDayKey(d);
  if (day !== cachedTodayUkPartsDay) {
    cachedTodayUkPartsDay = day;
    cachedTodayUkParts = todayUkPartsFromDate(d);
  }
  return cachedTodayUkParts!;
}

/**
 * Returns today's date as a UK-formatted label (e.g. `9 May 2026`).
 *
 * On the server (and during the very first render) it returns `fallback`
 * (or `null`) so that the SSR HTML matches the first client render. After
 * the component mounts in the browser, the value is replaced with the
 * actual current date so the table always shows "today".
 */
export function useTodayLabel(fallback: string | null = null): string | null {
  return useSyncExternalStore(
    noopSubscribe,
    getTodayLabelSnapshot,
    () => fallback,
  );
}

export type TodayUkParts = {
  /** e.g. `12 May 2026` — same rules as `formatTodayUK` */
  display: string;
  /** Local calendar date `YYYY-MM-DD` for `<time dateTime>` */
  dateTime: string;
};

/**
 * UK-style display label plus machine-readable local date, both set on mount
 * so the UI reflects the visitor’s actual “today” after hydration.
 */
export function useTodayUkParts(
  fallback: TodayUkParts | null = null,
): TodayUkParts | null {
  return useSyncExternalStore(
    noopSubscribe,
    getTodayUkPartsSnapshot,
    () => fallback,
  );
}

const UK_MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function monthYearFromDate(d: Date): string {
  return `${UK_MONTHS_LONG[d.getMonth()]} ${d.getFullYear()}`;
}

let cachedMonthYearLabel = "";
let cachedMonthYearKey = "";

function getMonthYearLabelSnapshot(): string {
  const d = new Date();
  const key = `${d.getFullYear()}-${d.getMonth()}`;
  if (key !== cachedMonthYearKey) {
    cachedMonthYearKey = key;
    cachedMonthYearLabel = monthYearFromDate(d);
  }
  return cachedMonthYearLabel;
}

/** e.g. `July 2026` — updates when the calendar month changes. */
export function useMonthYearLabel(fallback: string | null = null): string | null {
  return useSyncExternalStore(
    noopSubscribe,
    getMonthYearLabelSnapshot,
    () => fallback,
  );
}
