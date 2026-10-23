/**
 * "1st working day of the month" in the UK (England & Wales bank holidays):
 * the first weekday of the month that is not a bank holiday.
 */

/** yyyy-mm-dd of "now" in Europe/London. */
export function ukToday(now = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London" }).format(now);
}

/** First working day (yyyy-mm-dd) of the month containing `isoDate`. */
export function firstWorkingDay(isoDate, bankHolidays = new Set()) {
  const [y, m] = isoDate.split("-").map(Number);
  for (let d = 1; d <= 7; d++) {
    const date = new Date(Date.UTC(y, m - 1, d));
    const dow = date.getUTCDay();
    const iso = date.toISOString().slice(0, 10);
    if (dow !== 0 && dow !== 6 && !bankHolidays.has(iso)) return iso;
  }
  throw new Error(`No working day in the first week of ${y}-${m}`);
}

/** England & Wales bank holidays from the official GOV.UK feed. */
export async function fetchUkBankHolidays() {
  const res = await fetch("https://www.gov.uk/bank-holidays.json", {
    headers: { "User-Agent": "Healthwise360-PriceCheck/0.1 (+https://www.healthwise360.co.uk/methodology)" },
  });
  if (!res.ok) throw new Error(`GOV.UK bank holidays: HTTP ${res.status}`);
  const data = await res.json();
  return new Set(data["england-and-wales"].events.map((e) => e.date));
}
