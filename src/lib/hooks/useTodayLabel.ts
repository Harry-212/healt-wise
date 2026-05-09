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
