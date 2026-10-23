import { extractStandardPrices } from "./extract.mjs";

/**
 * Reads one pharmacy price page for one medication.
 *
 * A page that loads but shows no dose prices, or a request that fails without
 * being refused, is tried ONCE more after a pause: on 22 Oct 2026 five
 * WooCommerce shops returned such a page during the monthly run and priced
 * normally minutes later. Bot walls ("blocked") are not retried — they are
 * deliberate and persistent. The reason records the page title and size so a
 * failure explains itself in the report.
 */
export const RETRY_DELAY_MS = 20_000;

const defaultSleep = (ms) => new Promise((r) => setTimeout(r, ms));

function pageInfo(body) {
  const title = (body.replace(/<!--[\s\S]*?-->/g, "").match(/<title[^>]*>([^<]{0,80})/i) ?? [])[1]?.trim() ?? "";
  return `${title ? `title "${title}", ` : "no title, "}${Math.round(body.length / 1024)} KB`;
}

function interpret(res, url, medication) {
  if (!res.ok) {
    return {
      status: res.blocked ? "blocked" : "failed",
      reason: res.reason ?? `HTTP ${res.status}`,
      url,
      transport: res.transport ?? null,
      doses: {},
    };
  }
  const { doses, warnings } = extractStandardPrices(res.body, medication);
  const n = Object.keys(doses).length;
  return {
    status: n === 0 ? "no-prices" : n < 6 ? "partial" : "ok",
    reason: n === 0 ? `no dose prices in the page HTML (${pageInfo(res.body)})` : null,
    url,
    transport: res.transport ?? null,
    doses,
    warnings,
  };
}

export async function readPharmacy(fetcher, url, medication, note, { retryDelayMs = RETRY_DELAY_MS, sleep = defaultSleep } = {}) {
  if (!url) return { status: "not-configured", reason: note ?? "price-page URL not confirmed yet", doses: {} };

  const first = interpret(await fetcher.get(url), url, medication);
  if (first.status !== "no-prices" && first.status !== "failed") return first;

  await sleep(retryDelayMs);
  const second = interpret(await fetcher.get(url, { refresh: true }), url, medication);
  if (second.status === "no-prices" || second.status === "failed") {
    return { ...second, retried: true, reason: `${second.reason}; same after a retry — likely loaded by JavaScript or a temporary page` };
  }
  return { ...second, retried: true, reason: [second.reason, `first attempt: ${first.reason}`].filter(Boolean).join("; ") };
}
