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

/**
 * Checks each URL's reachability once, cached on disk for `cacheDays`, at a
 * polite rate (`requestsPerMinute`). Many sites return 403 to automated
 * requests, so a failed check is reported as a status, not treated as proof
 * the link is actually broken — the caller decides severity.
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
      const res = await fetch(url, {
        method: "HEAD",
        redirect: "follow",
        headers: { "User-Agent": "Healthwise360-SEO-Export/1.0" },
      });
      status = res.status;
    } catch {
      status = "unreachable";
    }
    cache[url] = { status, checkedAt: Date.now() };
    results.set(url, status);
    await sleep(delayMs);
  }

  saveCache(cache);
  return results;
}
