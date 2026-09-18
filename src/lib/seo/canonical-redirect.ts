import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { siteOrigin } from "@/lib/seo/site-origin";

const APEX_HOST = "healthwise360.co.uk";

/**
 * Both public hostnames, so whichever one is not canonical always gets
 * redirected. Matching only the apex left `www` serving 200 as a silent
 * duplicate whenever the canonical origin resolved to the apex.
 */
const PUBLIC_HOSTS = new Set([APEX_HOST, `www.${APEX_HOST}`]);

/**
 * One hop to the canonical origin (HTTPS + hostname from `siteOrigin()`),
 * only for the production healthwise360.co.uk hostnames. Skips localhost
 * and unrelated hosts (previews, etc.) so dev/preview keep working.
 */
export function canonicalHostRedirect(request: NextRequest): NextResponse | null {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host) return null;

  if (host === "localhost" || host.endsWith(".localhost") || host.startsWith("127.")) {
    return null;
  }

  let origin: string;
  try {
    origin = siteOrigin().replace(/\/$/, "");
  } catch {
    origin = "https://www.healthwise360.co.uk";
  }

  let canonicalHost: string;
  try {
    canonicalHost = new URL(origin).hostname.toLowerCase();
  } catch {
    canonicalHost = "www.healthwise360.co.uk";
  }

  if (!PUBLIC_HOSTS.has(host)) return null;

  const forwarded = request.headers.get("x-forwarded-proto");
  const scheme = (forwarded ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();

  const wrongHost = host !== canonicalHost;
  const wrongScheme = scheme !== "https";
  if (!wrongHost && !wrongScheme) return null;

  const next = request.nextUrl.clone();
  next.hostname = canonicalHost;
  next.protocol = "https:";
  next.port = "";
  const response = NextResponse.redirect(next, 308);
  // Let the Hostinger CDN serve this hop from the edge instead of forwarding
  // every apex/http hit to the Node origin (~0.35s vs ~0.13s per redirect).
  // Safe to cache: the target depends only on host + URL, which key the cache.
  response.headers.set("Cache-Control", "public, max-age=86400, s-maxage=31536000");
  return response;
}
