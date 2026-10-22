#!/usr/bin/env node
/**
 * Used by the monthly workflow: the cron fires every morning on days 1–7, and
 * this decides whether today (UK time) is the 1st working day of the month.
 * Writes `run=true|false` and `date=<yyyy-mm-dd>` to $GITHUB_OUTPUT.
 *
 *   node scripts/price-scraper/gate.mjs [--date=2026-11-02] [--force]
 */
import fs from "node:fs";
import { fetchUkBankHolidays, firstWorkingDay, ukToday } from "./lib/schedule.mjs";

const args = Object.fromEntries(process.argv.slice(2).map((a) => a.replace(/^--/, "").split("=")));
const today = args.date ?? ukToday();
const holidays = await fetchUkBankHolidays();
const first = firstWorkingDay(today, holidays);
const run = Boolean(args.force) || today === first;

console.log(`UK date ${today}; first working day this month: ${first} → ${run ? "run" : "skip"}${args.force ? " (forced)" : ""}`);
if (process.env.GITHUB_OUTPUT) {
  fs.appendFileSync(process.env.GITHUB_OUTPUT, `run=${run}\ndate=${today}\n`);
}
