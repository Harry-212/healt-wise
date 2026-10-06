#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import { loadConfig, pageTypeFor, resolveBaseUrl, reportsDir } from "./lib/config.mjs";
import { fetchWithRedirectTracking } from "./lib/http.mjs";
import { extractHtmlFields } from "./lib/extract.mjs";
import { fetchSitemapUrls, isInSitemap } from "./lib/sitemap.mjs";
import { extractKnownLegacyUrls, normalisePath } from "./lib/discover.mjs";

/** Non-page file extensions skipped when following internal links during a full-site crawl. */
const NON_PAGE_EXTENSION = /\.(pdf|jpe?g|png|webp|avif|gif|svg|ico|xml|txt|zip|woff2?|css|js|json)$/i;

/** Hard safety cap on a full-site crawl, in case a bug in link extraction ever produces a runaway frontier. */
const FULL_SITE_CRAWL_CAP = 600;

function parseArgs(argv) {
  const target = argv.find((a) => a.startsWith("--target="))?.split("=")[1] || "local";
  if (!["local", "live"].includes(target)) {
    throw new Error(`Unknown --target "${target}". Use "local" or "live".`);
  }
  const scope = argv.find((a) => a.startsWith("--scope="))?.split("=")[1] || "prototype";
  if (!["prototype", "full-site"].includes(scope)) {
    throw new Error(`Unknown --scope "${scope}". Use "prototype" or "full-site".`);
  }
  return { target, scope };
}

function combineRobots(metaRobots, headerRobots) {
  const combined = `${metaRobots || ""} ${headerRobots || ""}`.toLowerCase();
  return combined.includes("noindex") ? "noindex" : "index";
}

/**
 * Compares by pathname only, not origin. The app always declares canonical/
 * JSON-LD URLs against the real production origin (src/lib/seo/site-origin.ts),
 * even when a page is actually fetched from localhost during a local/CI
 * build — so comparing full origins would make every local-build canonical
 * look "wrong" even when it is correct.
 */
function normaliseForCompare(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "").toLowerCase() || "/";
  } catch {
    return url;
  }
}

async function exportOne(relativeUrl, { baseUrl, config, sitemapUrls, siteHostname }) {
  const startUrl = new URL(relativeUrl, baseUrl).toString();
  const result = await fetchWithRedirectTracking(startUrl);

  const base = {
    requestedUrl: relativeUrl,
    url: result.finalUrl,
    httpStatus: result.status,
    pageType: pageTypeFor(new URL(relativeUrl, "https://placeholder").pathname, config.pageTypeRules),
    redirectHops: result.hops.length,
    redirectDestination: result.hops.length ? result.finalUrl : null,
    redirectLoop: result.redirectLoop,
    chainTooLong: Boolean(result.chainTooLong),
    sitemapInclusion: isInSitemap(result.finalUrl, sitemapUrls) ? "Yes" : "No",
  };

  if (!result.html) {
    return { ...base, indexNoindex: null, canonicalUrl: null, canonicalSelfReferencing: null };
  }

  const headerRobots = result.response?.headers.get("x-robots-tag") || null;
  const fields = extractHtmlFields(
    result.html,
    result.finalUrl,
    siteHostname,
    config.approvedSourceDomains,
  );

  const reviewerName = fields.reviewerSchema[0] || fields.reviewerVisible || null;
  const reviewerApproved = reviewerName
    ? config.approvedReviewers.includes(reviewerName)
    : null;

  return {
    ...base,
    indexNoindex: combineRobots(fields.robotsMeta, headerRobots),
    robotsMetaRaw: fields.robotsMeta,
    xRobotsTagRaw: headerRobots,
    canonicalUrl: fields.canonical,
    canonicalSelfReferencing: fields.canonical
      ? normaliseForCompare(fields.canonical) === normaliseForCompare(result.finalUrl)
      : null,
    title: fields.title,
    titleLength: fields.titleLength,
    metaDescription: fields.metaDescription,
    metaDescriptionLength: fields.metaDescriptionLength,
    h1Count: fields.h1Count,
    h1s: fields.h1s,
    authorSchema: fields.authorSchema,
    authorVisible: fields.authorVisible,
    reviewerSchema: fields.reviewerSchema,
    reviewerVisible: fields.reviewerVisible,
    reviewerName,
    reviewerApproved,
    dateModifiedSchema: fields.dateModifiedSchema,
    datePublishedSchema: fields.datePublishedSchema,
    lastUpdatedVisible: fields.lastUpdatedVisible,
    priceCheckDates: fields.priceCheckDates,
    schemaTypes: fields.schemaTypes,
    schemaIds: fields.schemaIds,
    schemaNodesById: fields.schemaNodesById,
    schemaInvalidBlocks: fields.blocks.filter((b) => !b.valid),
    organizationCount: fields.organizationCount,
    faqEntries: fields.faqEntries,
    internalLinkCount: fields.internalLinkCount,
    internalLinkTargets: fields.internalLinkTargets,
    sourceLinkCount: fields.sourceLinkCount,
    sourceLinkTargets: fields.sourceLinkTargets,
    otherExternalLinkCount: fields.otherExternalLinkCount,
    bodyText: fields.bodyText,
  };
}

/**
 * Full-site discovery (Task 32, point 3): seeds the crawl frontier with
 * every sitemap.xml URL plus known legacy/redirected URLs (from
 * next.config.ts's redirects()), then breadth-first follows internal links
 * found on each fetched page until the frontier drains or a safety cap is
 * hit. Each URL is fetched/extracted exactly once via exportOne, and its
 * internalLinkTargets feed the next frontier — so no page is fetched twice
 * just to discover links vs to export its record.
 *
 * Rate-limited at config.internalLinks.requestsPerMinute between fetches —
 * reusing the limit already tuned for this exact site after the 2026-10-05
 * Hostinger connection-timeout incidents, rather than introducing a second,
 * untested rate for this new code path.
 */
async function discoverAndExportFullSite({ baseUrl, config, sitemapUrls, siteHostname }) {
  const legacyUrls = extractKnownLegacyUrls();
  const requestDelayMs = Math.ceil(60000 / config.internalLinks.requestsPerMinute);

  const discoverySource = new Map(); // normalised path -> "sitemap" | "legacy" | "internal-link"
  const frontier = [];
  const enqueue = (relativeUrl, source) => {
    const key = normalisePath(new URL(relativeUrl, baseUrl).toString());
    if (discoverySource.has(key)) return;
    discoverySource.set(key, source);
    frontier.push(relativeUrl);
  };

  for (const path of sitemapUrls) enqueue(path, "sitemap");
  for (const path of legacyUrls) enqueue(path, "legacy");

  const records = [];
  let visitedCount = 0;

  while (frontier.length) {
    if (visitedCount >= FULL_SITE_CRAWL_CAP) {
      console.warn(
        `Full-site crawl cap (${FULL_SITE_CRAWL_CAP}) reached with ${frontier.length} URLs still queued — stopping early. Investigate before trusting totals.`,
      );
      break;
    }
    const relativeUrl = frontier.shift();
    visitedCount++;
    console.log(`[${visitedCount}] Fetching ${relativeUrl} (${discoverySource.get(normalisePath(new URL(relativeUrl, baseUrl).toString()))}) ...`);

    let record;
    try {
      record = await exportOne(relativeUrl, { baseUrl, config, sitemapUrls, siteHostname });
    } catch (err) {
      record = { requestedUrl: relativeUrl, error: err.message };
      console.error(`  failed: ${err.message}`);
    }
    record.discoverySource = discoverySource.get(normalisePath(new URL(relativeUrl, baseUrl).toString()));
    records.push(record);

    for (const target of record.internalLinkTargets || []) {
      if (NON_PAGE_EXTENSION.test(new URL(target).pathname)) continue;
      enqueue(target, "internal-link");
    }

    await new Promise((resolve) => setTimeout(resolve, requestDelayMs));
  }

  const missingFromSitemapUrls = records
    .filter((r) => r.discoverySource === "internal-link")
    .map((r) => r.url || r.requestedUrl);

  return {
    records,
    totalDiscovered: discoverySource.size,
    totalCrawled: records.length,
    cappedEarly: visitedCount >= FULL_SITE_CRAWL_CAP,
    missingFromSitemapUrls,
  };
}

function toCsvRow(record) {
  return {
    url: record.url,
    httpStatus: record.httpStatus ?? "",
    pageType: record.pageType,
    indexNoindex: record.indexNoindex ?? "",
    sitemapInclusion: record.sitemapInclusion,
    canonicalUrl: record.canonicalUrl ?? "",
    canonicalSelfReferencing: record.canonicalSelfReferencing ?? "",
    redirectDestination: record.redirectDestination ?? "",
    redirectHops: record.redirectHops,
    title: record.title ?? "",
    titleLength: record.titleLength ?? "",
    metaDescription: record.metaDescription ?? "",
    metaDescriptionLength: record.metaDescriptionLength ?? "",
    h1Count: record.h1Count ?? "",
    h1Text: (record.h1s || []).map((h) => h.lines.join(" / ")).join(" | "),
    authorSchema: (record.authorSchema || []).join(", "),
    authorVisible: record.authorVisible ?? "",
    reviewerName: record.reviewerName ?? "",
    reviewerApproved: record.reviewerApproved ?? "",
    dateModifiedSchema: record.dateModifiedSchema ?? "",
    lastUpdatedVisible: record.lastUpdatedVisible ?? "",
    priceCheckOldest: record.priceCheckDates?.oldest ?? "",
    priceCheckNewest: record.priceCheckDates?.newest ?? "",
    priceCheckProviderCount: record.priceCheckDates?.providerCount ?? "",
    schemaTypes: (record.schemaTypes || []).join(", "),
    internalLinkCount: record.internalLinkCount ?? "",
    sourceLinkCount: record.sourceLinkCount ?? "",
    discoverySource: record.discoverySource ?? "prototype",
  };
}

async function main() {
  const { target, scope } = parseArgs(process.argv.slice(2));
  const config = loadConfig();
  const baseUrl = resolveBaseUrl(target, config);
  const siteHostname = new URL(config.siteUrl).hostname.replace(/^www\./, "");

  console.log(`seo:export — target=${target} scope=${scope} baseUrl=${baseUrl}`);

  const sitemapUrls = await fetchSitemapUrls(baseUrl);
  console.log(`Sitemap entries found: ${sitemapUrls.size}`);

  let records;
  let discoveryMeta = null;

  if (scope === "full-site") {
    const result = await discoverAndExportFullSite({ baseUrl, config, sitemapUrls, siteHostname });
    records = result.records;
    const failed = records.filter((r) => r.error);
    discoveryMeta = {
      totalDiscovered: result.totalDiscovered,
      totalCrawled: result.totalCrawled,
      cappedEarly: result.cappedEarly,
      failedUrls: failed.map((r) => ({ url: r.requestedUrl, error: r.error })),
      missingFromSitemapUrls: result.missingFromSitemapUrls,
    };
    console.log(`\nTotal URLs discovered: ${discoveryMeta.totalDiscovered}`);
    console.log(`Total crawled successfully: ${discoveryMeta.totalCrawled - failed.length}`);
    console.log(`Pages that could not be processed: ${failed.length}`);
    if (failed.length) failed.forEach((r) => console.log(`  - ${r.requestedUrl}: ${r.error}`));
    console.log(`Found via internal links but missing from sitemap.xml: ${discoveryMeta.missingFromSitemapUrls.length}`);
    if (discoveryMeta.cappedEarly) console.warn(`WARNING: crawl stopped early at the ${FULL_SITE_CRAWL_CAP}-page safety cap.`);
  } else {
    records = [];
    for (const relativeUrl of config.prototypeUrls) {
      console.log(`Fetching ${relativeUrl} ...`);
      try {
        const record = await exportOne(relativeUrl, { baseUrl, config, sitemapUrls, siteHostname });
        records.push(record);
      } catch (err) {
        records.push({ requestedUrl: relativeUrl, error: err.message });
        console.error(`  failed: ${err.message}`);
      }
    }
  }

  mkdirSync(reportsDir, { recursive: true });

  const inventoryName = scope === "full-site" ? "seo-inventory-full-site" : "seo-inventory";
  const jsonPath = path.join(reportsDir, `${inventoryName}.json`);
  writeFileSync(
    jsonPath,
    JSON.stringify({ target, scope, baseUrl, generatedAt: new Date().toISOString(), discoveryMeta, records }, null, 2),
  );

  const csvPath = path.join(reportsDir, `${inventoryName}.csv`);
  const csv = stringify(records.filter((r) => !r.error).map(toCsvRow), { header: true });
  writeFileSync(csvPath, csv);

  console.log(`\nWrote ${records.length} records to:`);
  console.log(`  ${jsonPath}`);
  console.log(`  ${csvPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
