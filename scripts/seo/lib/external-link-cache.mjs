import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { reportsDir } from "./config.mjs";

const cachePath = path.join(reportsDir, "external-link-cache.json");

export function loadCache() {
  if (!existsSync(cachePath)) return {};
  try {
    return JSON.parse(readFileSync(cachePath, "utf8"));
  } catch {
    return {};
  }
}

export function saveCache(cache) {
  writeFileSync(cachePath, JSON.stringify(cache, null, 2));
}

export function isFresh(entry, cacheDays, now = Date.now()) {
  return entry && now - entry.checkedAt < cacheDays * 24 * 60 * 60 * 1000;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const REQUEST_TIMEOUT_MS = 15000;

async function probe(url, method) {
  const res = await fetch(url, {
    method,
    redirect: "follow",
    headers: { "User-Agent": "Healthwise360-SEO-Export/1.0" },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  return res.status;
}

/**
 * Task 39/40: classifies a raw HTTP result into the four buckets the client
 * asked for, so a bot-blocked automated request (401/403/429) is never
 * reported the same way as a confirmed-dead link (404/410). "unreachable"
 * (DNS/connection/TLS failure) and "timeout" are both treated as temporary —
 * neither confirms the destination is actually gone.
 */
export function classifyHttpResult(status) {
  if (status === "timeout" || status === "unreachable") return "Temporarily unavailable";
  if (typeof status === "number") {
    if (status === 404 || status === 410) return "Broken";
    if ([401, 403, 405, 429].includes(status)) return "Blocked";
    if (status >= 500) return "Temporarily unavailable";
    return "Working";
  }
  return "Temporarily unavailable";
}

export const RECOMMENDED_ACTION = {
  Broken: "Confirmed broken (404/410) — add to the editorial approval queue for a replacement source. Do not change destination or wording without qualified reviewer approval.",
  Blocked: "Automated request was blocked (401/403/405/429) — not proof the link is broken. Verify manually in a browser before taking any action.",
  "Temporarily unavailable": "Timeout or server error — re-check on the next scheduled audit run. Do not replace the source based on a single transient failure.",
  Working: "No action needed.",
};

/**
 * Checks each URL's reachability once, cached on disk for `cacheDays`, at a
 * polite rate (`requestsPerMinute`). Many sites return 403/405/429 to
 * automated requests, so a failed check is reported as a status, not treated
 * as proof the link is actually broken — classifyHttpResult() decides that.
 * A HEAD that comes back 405 (method not allowed — common on sites that only
 * permit GET) is retried once with GET before being recorded, since 405 on
 * HEAD alone would otherwise misreport a perfectly reachable page as Blocked.
 */
export async function checkExternalLinks(urls, { cacheDays, requestsPerMinute }) {
  const cache = loadCache();
  const delayMs = Math.ceil(60000 / requestsPerMinute);
  const results = new Map();

  for (const url of urls) {
    if (isFresh(cache[url], cacheDays)) {
      results.set(url, cache[url].status);
      continue;
    }
    let status;
    try {
      status = await probe(url, "HEAD");
      if (status === 405) {
        status = await probe(url, "GET");
      }
    } catch (err) {
      status = err.name === "TimeoutError" || err.name === "AbortError" ? "timeout" : "unreachable";
    }
    cache[url] = { status, checkedAt: Date.now() };
    results.set(url, status);
    await sleep(delayMs);
  }

  saveCache(cache);
  return results;
}
