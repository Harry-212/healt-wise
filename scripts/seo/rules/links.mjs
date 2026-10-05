import { finding } from "../lib/finding.mjs";

const UNDEFINED_PATTERN = /\/(undefined|null)(\/|$|\?)/i;

function findUndefinedUrls(record) {
  const haystacks = [
    ...(record.internalLinkTargets || []),
    record.canonical,
    ...(record.schemaIds || []),
  ].filter(Boolean);
  return [...new Set(haystacks.filter((u) => UNDEFINED_PATTERN.test(u)))];
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestOnce(url) {
  let res = await fetch(url, { method: "HEAD", redirect: "manual" });
  if (res.status === 405 || res.status === 501) {
    res = await fetch(url, { method: "GET", redirect: "manual" });
  }
  return res.status;
}

const MAX_ATTEMPTS = 4;

/**
 * HEAD (falling back to GET) a URL once per run, cached and shared via
 * context.linkStatusCache. Checking ~100+ internal links in a row against the
 * live site makes it occasionally time out a connection under load (observed
 * on healthwise360.co.uk even with a 500ms gap between requests), so a
 * connection failure is retried with growing backoff before the link is
 * actually reported as broken. A real HTTP error status (4xx/5xx) is trusted
 * immediately — only "no response at all" is treated as possibly transient.
 */
async function statusOf(url, cache, requestDelayMs) {
  if (cache.has(url)) return cache.get(url);
  const promise = (async () => {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        const status = await requestOnce(url);
        await sleep(requestDelayMs);
        return status;
      } catch {
        if (attempt === MAX_ATTEMPTS) return null;
        await sleep(requestDelayMs * 2 ** attempt);
      }
    }
  })();
  cache.set(url, promise);
  return promise;
}

/** Internal links (broken, or pointing to a redirect instead of the final URL) and /undefined URLs. */
export async function checkLinks(record, { severities, linkStatusCache, config }) {
  if (record.httpStatus !== 200) return [];
  const findings = [];

  for (const url of findUndefinedUrls(record)) {
    findings.push(
      finding({
        severity: severities.UNDEFINED_URL,
        url: record.url,
        rule: "UNDEFINED_URL",
        problem: "A link, canonical or Schema id resolves to an /undefined or /null URL.",
        expected: "No /undefined, /null or empty URLs in links, canonical or Schema.",
        evidence: url,
      }),
    );
  }

  const requestDelayMs = Math.ceil(60000 / config.internalLinks.requestsPerMinute);
  const targets = [...new Set(record.internalLinkTargets || [])];
  for (const target of targets) {
    const status = await statusOf(target, linkStatusCache, requestDelayMs);
    if (status === null || status >= 400) {
      findings.push(
        finding({
          severity: severities.LINK_BROKEN,
          url: record.url,
          rule: "LINK_BROKEN",
          problem: "An internal link points to a page that does not return 200.",
          expected: "Internal links resolve directly to a 200 page.",
          evidence: `${target} -> ${status ?? "no response"}`,
        }),
      );
    } else if (status >= 300 && status < 400) {
      findings.push(
        finding({
          severity: severities.LINK_TO_REDIRECT,
          url: record.url,
          rule: "LINK_TO_REDIRECT",
          problem: "An internal link points to a redirect instead of the final URL.",
          expected: "Internal links point directly to the final destination.",
          evidence: `${target} -> ${status}`,
        }),
      );
    }
  }

  return findings;
}
