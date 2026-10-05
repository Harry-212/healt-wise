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
        if (node["@id"]) schemaIds.push(node["@id"]);

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

function classifyLinks($, pageUrl, siteHostname, approvedSourceDomains) {
  let internalLinkCount = 0;
  let sourceLinkCount = 0;
  let otherExternalLinkCount = 0;
  const brokenCandidates = [];

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
        internalLinkCount++;
        brokenCandidates.push(absolute);
      } else if (approvedSourceDomains.some((d) => host === d || host.endsWith(`.${d}`))) {
        sourceLinkCount++;
      } else {
        otherExternalLinkCount++;
      }
    });

  return { internalLinkCount, sourceLinkCount, otherExternalLinkCount, internalLinkTargets: brokenCandidates };
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
    ...links,
    ...jsonLd,
  };
}
