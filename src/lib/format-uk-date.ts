/**
 * Stable, deterministic UK date format (e.g. `25 Jul 2026`) — matches the
 * style used across the compare tables and avoids Intl narrow-space
 * differences between Node and Chromium.
 */
export function formatTodayUK(date: Date = new Date()): string {
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

/** Local calendar date `YYYY-MM-DD` for `<time dateTime>` / JSON-LD. */
export function formatTodayIsoDate(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
