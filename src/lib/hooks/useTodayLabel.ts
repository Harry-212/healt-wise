"use client";

import { useEffect, useState } from "react";

/**
 * Stable, deterministic UK date format (e.g. `9 May 2026`) — matches the
 * style used across the compare tables and avoids Intl narrow-space
 * differences between Node and Chromium.
 */
function formatTodayUK(date: Date): string {
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

/**
 * Returns today's date as a UK-formatted label (e.g. `9 May 2026`).
 *
 * On the server (and during the very first render) it returns `fallback`
 * (or `null`) so that the SSR HTML matches the first client render. After
 * the component mounts in the browser, the value is replaced with the
 * actual current date so the table always shows "today".
 */
export function useTodayLabel(fallback: string | null = null): string | null {
  const [label, setLabel] = useState<string | null>(fallback);

  useEffect(() => {
    setLabel(formatTodayUK(new Date()));
  }, []);

  return label;
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
  const [parts, setParts] = useState<TodayUkParts | null>(fallback);

  useEffect(() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    setParts({
      display: formatTodayUK(d),
      dateTime: `${y}-${m}-${day}`,
    });
  }, []);

  return parts;
}
