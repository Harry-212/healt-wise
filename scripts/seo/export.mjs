#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { stringify } from "csv-stringify/sync";
import { loadConfig, pageTypeFor, resolveBaseUrl, reportsDir } from "./lib/config.mjs";
import { fetchWithRedirectTracking } from "./lib/http.mjs";
import { extractHtmlFields } from "./lib/extract.mjs";
import { fetchSitemapUrls, isInSitemap } from "./lib/sitemap.mjs";

function parseArgs(argv) {
  const target = argv.find((a) => a.startsWith("--target="))?.split("=")[1] || "local";
  if (!["local", "live"].includes(target)) {
    throw new Error(`Unknown --target "${target}". Use "local" or "live".`);
  }
  return { target };
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
  };
}

async function main() {
  const { target } = parseArgs(process.argv.slice(2));
  const config = loadConfig();
  const baseUrl = resolveBaseUrl(target, config);
  const siteHostname = new URL(config.siteUrl).hostname.replace(/^www\./, "");

  console.log(`seo:export — target=${target} baseUrl=${baseUrl}`);

  const sitemapUrls = await fetchSitemapUrls(baseUrl);
  console.log(`Sitemap entries found: ${sitemapUrls.size}`);

  const records = [];
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

  mkdirSync(reportsDir, { recursive: true });

  const jsonPath = path.join(reportsDir, "seo-inventory.json");
  writeFileSync(jsonPath, JSON.stringify({ target, baseUrl, generatedAt: new Date().toISOString(), records }, null, 2));

  const csvPath = path.join(reportsDir, "seo-inventory.csv");
  const csv = stringify(records.filter((r) => !r.error).map(toCsvRow), { header: true });
  writeFileSync(csvPath, csv);

  console.log(`Wrote ${records.length} records to:`);
  console.log(`  ${jsonPath}`);
  console.log(`  ${csvPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
