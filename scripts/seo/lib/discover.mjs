import { readFileSync } from "node:fs";
import path from "node:path";
import { repoRoot } from "./config.mjs";

/**
 * Extracts static redirect `source` paths from next.config.ts's
 * `redirects()` list — these are the site's "known legacy/redirected URLs"
 * (Task 32, point 3). Including them in the full-site crawl confirms they
 * still redirect correctly instead of silently 404ing or drifting to the
 * wrong destination, without hand-maintaining a second list that could go
 * stale against the real redirect config.
 *
 * Deliberately skips dynamic route patterns (":slug", ":path*" — not
 * concrete URLs) and the HELPFUL_GUIDE_SLUGS.map(...) spread, whose entries
 * are current short-URL aliases for existing content, not retired pages.
 */
export function extractKnownLegacyUrls() {
  const configPath = path.join(repoRoot, "next.config.ts");
  const raw = readFileSync(configPath, "utf8");

  // next.config.ts also has a headers() block with its own `source` fields
  // (Cache-Control rules for /_next/image, /_next/static/media/:path*,
  // etc.) — scoping to the redirects() function body only avoids picking
  // those up as if they were retired content URLs.
  const redirectsMatch = raw.match(/async redirects\(\)\s*\{[\s\S]*?\n {2}\},/);
  if (!redirectsMatch) {
    throw new Error("Could not locate redirects() in next.config.ts — discover.mjs's extraction regex may be stale.");
  }
  const redirectsBody = redirectsMatch[0];

  const sourceRegex = /source:\s*"([^"]+)"/g;
  const urls = new Set();
  let match;
  while ((match = sourceRegex.exec(redirectsBody))) {
    const source = match[1];
    if (source.includes(":")) continue; // dynamic route pattern
    urls.add(source);
  }
  return [...urls];
}

/** Pathname-only normalisation shared by the BFS frontier/visited sets. */
export function normalisePath(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, "").toLowerCase() || "/";
  } catch {
    return url.replace(/\/$/, "").toLowerCase();
  }
}
