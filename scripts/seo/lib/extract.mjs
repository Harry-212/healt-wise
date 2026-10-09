import * as cheerio from "cheerio";

/** Pulls every @type value out of a JSON-LD node's @type (string or array). */
function typesOf(node) {
  if (!node || !node["@type"]) return [];
  return Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
}

function nameOf(entity) {
  if (!entity) return null;
  if (typeof entity === "string") return entity;
  if (Array.isArray(entity)) return entity.map(nameOf).filter(Boolean);
  return entity.name || null;
}

/** Flattens a parsed JSON-LD document (object, array, or @graph) into a flat node list. */
function flattenJsonLd(parsed) {
  if (Array.isArray(parsed)) return parsed;
  if (parsed["@graph"] && Array.isArray(parsed["@graph"])) return parsed["@graph"];
  return [parsed];
}

export function extractJsonLd($) {
  const blocks = [];
  const schemaTypes = new Set();
  const schemaIds = [];
  const schemaNodesById = [];
  let organizationCount = 0;
  const authors = [];
  const reviewers = [];
  let dateModified = null;
  let datePublished = null;
  const faqEntries = [];

  $('script[type="application/ld+json"]').each((_, el) => {
    const raw = $(el).contents().text();
    try {
      const parsed = JSON.parse(raw);
      blocks.push({ raw: parsed, valid: true });

      for (const node of flattenJsonLd(parsed)) {
        const types = typesOf(node);
        for (const t of types) schemaTypes.add(t);
        if (types.includes("Organization")) organizationCount++;
        if (node["@id"]) {
          schemaIds.push(node["@id"]);
          schemaNodesById.push({ id: node["@id"], node });
        }

        if (node.author) authors.push(nameOf(node.author));
        if (node.reviewedBy) reviewers.push(nameOf(node.reviewedBy));
        if (node.dateModified && !dateModified) dateModified = node.dateModified;
        if (node.datePublished && !datePublished) datePublished = node.datePublished;

        if (types.includes("FAQPage") && Array.isArray(node.mainEntity)) {
          for (const q of node.mainEntity) {
            faqEntries.push({
              question: q.name || null,
              answer: q.acceptedAnswer?.text || null,
            });
          }
        }
      }
    } catch (err) {
      blocks.push({ raw, valid: false, error: err.message });
    }
  });

  return {
    blocks,
    schemaTypes: [...schemaTypes],
    schemaIds,
    schemaNodesById,
    organizationCount,
    authorSchema: authors.flat().filter(Boolean),
    reviewerSchema: reviewers.flat().filter(Boolean),
    dateModifiedSchema: dateModified,
    datePublishedSchema: datePublished,
    faqEntries,
  };
}

/** Each direct child of the H1 (text node or element) is treated as one visual line. */
function h1Lines($, el) {
  const lines = [];
  $(el)
    .contents()
    .each((_, node) => {
      const text =
        node.type === "text" ? node.data : $(node).text();
      const trimmed = (text || "").replace(/\s+/g, " ").trim();
      if (trimmed) lines.push(trimmed);
    });
  return lines;
}

function hostnameOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Where a link sits on the page, for editorial triage (DEV-06 / Task 39/40):
 * "main content, FAQ, sources section or JSON-LD". The site's shared
 * templates (GuideLayout, ArticleSources, UkLocationArticleClient, etc.)
 * consistently wrap these two areas in `#faq` and `#references`/`#sources`,
 * so a closest-ancestor-id check is reliable sitewide without per-template
 * special-casing. Anything else counts as main content.
 */
function locationOf($, el) {
  const faqAncestor = $(el).closest("#faq");
  if (faqAncestor.length) return "FAQ";
  const sourcesAncestor = $(el).closest("#references, #sources");
  if (sourcesAncestor.length) return "Sources section";
  return "Main content";
}

function anchorTextOf($, el) {
  const text = $(el).text().replace(/\s+/g, " ").trim();
  return text || null;
}

function classifyLinks($, pageUrl, siteHostname, approvedSourceDomains) {
  const internalLinkTargets = [];
  const sourceLinkTargets = [];
  const sourceLinks = [];
  let otherExternalLinkCount = 0;

  $("a[href]")
    .filter((_, el) => !$(el).closest("nav, header, footer").length)
    .each((_, el) => {
      const href = $(el).attr("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      let absolute;
      try {
        absolute = new URL(href, pageUrl).toString();
      } catch {
        return;
      }
      const host = hostnameOf(absolute);
      if (!host) return;

      if (host === siteHostname) {
        internalLinkTargets.push(absolute);
      } else if (approvedSourceDomains.some((d) => host === d || host.endsWith(`.${d}`))) {
        sourceLinkTargets.push(absolute);
        sourceLinks.push({
          url: absolute,
          anchorText: anchorTextOf($, el),
          location: locationOf($, el),
        });
      } else {
        otherExternalLinkCount++;
      }
    });

  // A source can be cited only in structured data (e.g. a `citation`/`url`
  // field inside an approved-domain reference) without ever appearing as a
  // visible <a href>. Those still need reachability checking and editorial
  // visibility, flagged with location "JSON-LD" and no anchor text since
  // none is rendered.
  const htmlSourceUrls = new Set(sourceLinkTargets);
  for (const url of jsonLdSourceUrls($, approvedSourceDomains)) {
    if (htmlSourceUrls.has(url)) continue;
    sourceLinkTargets.push(url);
    sourceLinks.push({ url, anchorText: null, location: "JSON-LD" });
  }

  return {
    internalLinkCount: internalLinkTargets.length,
    sourceLinkCount: sourceLinkTargets.length,
    otherExternalLinkCount,
    internalLinkTargets,
    sourceLinkTargets,
    sourceLinks,
  };
}

/** Walks every JSON-LD block's string values for URLs on an approved source domain (e.g. a `citation` field). */
function jsonLdSourceUrls($, approvedSourceDomains) {
  const found = new Set();

  function walk(value) {
    if (typeof value === "string") {
      if (/^https?:\/\//i.test(value)) {
        const host = hostnameOf(value);
        if (host && approvedSourceDomains.some((d) => host === d || host.endsWith(`.${d}`))) {
          found.add(value);
        }
      }
      return;
    }
    if (Array.isArray(value)) {
      for (const item of value) walk(item);
      return;
    }
    if (value && typeof value === "object") {
      for (const v of Object.values(value)) walk(v);
    }
  }

  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      walk(JSON.parse($(el).contents().text()));
    } catch {
      // invalid JSON-LD is reported separately by checkSchema; skip here
    }
  });

  return found;
}

function visibleReviewer($) {
  const bodyText = $("body").text().replace(/\s+/g, " ");
  const match = bodyText.match(
    /(?:medically|clinically)\s+reviewed\s+by\s+([A-Z][^.\n,]{1,80}?)(?:\.|,|\son\s|$)/i,
  );
  return match ? match[1].trim() : null;
}

function visibleAuthor($) {
  const el = $('[rel="author"], [itemprop="author"], .author, .byline').first();
  const text = el.text().replace(/\s+/g, " ").trim();
  return text || null;
}

function visibleLastUpdated($) {
  const bodyText = $("body").text().replace(/\s+/g, " ");
  const match = bodyText.match(
    /last\s+updated[:\s]*(?:on\s*)?([0-9]{1,2}\s+\w+\s+[0-9]{4}|\w+\s+[0-9]{1,2},?\s+[0-9]{4})/i,
  );
  return match ? match[1].trim() : null;
}

/** On a price table (a <th> whose text is exactly "Updated"), reads the Updated column per row. */
function extractPriceCheckDates($) {
  let result = null;

  $("table").each((_, table) => {
    if (result) return;
    const headers = $(table).find("th").toArray().map((th) => $(th).text().trim());
    const updatedIndex = headers.findIndex((h) => h.toLowerCase() === "updated");
    if (updatedIndex === -1) return;

    const rawValues = [];
    $(table)
      .find("tbody tr")
      .each((_, row) => {
        const cell = $(row).find("td").eq(updatedIndex);
        const text = cell.text().trim();
        if (text && text !== "—") rawValues.push(text);
      });

    const parsedDates = rawValues
      .map((v) => new Date(v))
      .filter((d) => !Number.isNaN(d.getTime()));

    result = {
      providerCount: rawValues.length,
      rawValues,
      oldest: parsedDates.length
        ? new Date(Math.min(...parsedDates.map((d) => d.getTime()))).toISOString().slice(0, 10)
        : null,
      newest: parsedDates.length
        ? new Date(Math.max(...parsedDates.map((d) => d.getTime()))).toISOString().slice(0, 10)
        : null,
    };
  });

  return result;
}

/**
 * DEV-02: similarity must compare unique page content, not the navigation,
 * footer, cookie banner, scripts/styles and JSON-LD that are byte-identical
 * (or near-identical) on every page — comparing full body text inflates
 * overlap scores for almost any two pages on the site regardless of their
 * actual topic. Bumping this version string is a signal to re-check cached
 * similarity results after the extraction rule itself changes.
 */
export const MAIN_CONTENT_EXTRACTION_VERSION = "v1-exclude-nav-footer-script-style-jsonld-cookie";

/**
 * Re-parses the HTML into its own DOM (rather than mutating the shared `$`
 * used for the rest of extraction) so removing chrome here can never affect
 * unrelated fields like visibleReviewer/visibleAuthor/visibleLastUpdated,
 * which must still see the full page.
 */
export function extractMainContent(html) {
  try {
    const $ = cheerio.load(html);
    $("nav, footer, script, style").remove();
    $('[role="dialog"]').each((_, el) => {
      const label = ($(el).attr("aria-label") || "").toLowerCase();
      if (label.includes("cookie")) $(el).remove();
    });
    const text = $("body").text().replace(/\s+/g, " ").trim();
    return {
      mainContentText: text,
      mainContentExtractionVersion: MAIN_CONTENT_EXTRACTION_VERSION,
      mainContentExtractionFailed: false,
    };
  } catch (err) {
    return {
      mainContentText: null,
      mainContentExtractionVersion: MAIN_CONTENT_EXTRACTION_VERSION,
      mainContentExtractionFailed: true,
      mainContentExtractionError: err.message,
    };
  }
}

export function extractHtmlFields(html, pageUrl, siteHostname, approvedSourceDomains) {
  const $ = cheerio.load(html);

  const title = $("title").first().text().trim() || null;
  const metaDescription = $('meta[name="description"]').attr("content")?.trim() || null;
  const robotsMeta = $('meta[name="robots"]').attr("content")?.trim() || null;
  const canonical = $('link[rel="canonical"]').attr("href") || null;

  const h1Elements = $("h1").toArray();
  const h1s = h1Elements.map((el) => ({
    text: $(el).text().replace(/\s+/g, " ").trim(),
    lines: h1Lines($, el),
  }));

  const links = classifyLinks($, pageUrl, siteHostname, approvedSourceDomains);
  const jsonLd = extractJsonLd($);
  const bodyText = $("body").text().replace(/\s+/g, " ").trim();

  return {
    title,
    titleLength: title?.length ?? null,
    metaDescription,
    metaDescriptionLength: metaDescription?.length ?? null,
    robotsMeta,
    canonical,
    h1Count: h1s.length,
    h1s,
    authorVisible: visibleAuthor($),
    reviewerVisible: visibleReviewer($),
    lastUpdatedVisible: visibleLastUpdated($),
    priceCheckDates: extractPriceCheckDates($),
    bodyText,
    ...links,
    ...jsonLd,
  };
}
