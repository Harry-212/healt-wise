import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { siteOrigin } from "@/lib/seo/site-origin";

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

  const apex = "healthwise360.co.uk";
  if (host !== apex && host !== canonicalHost) return null;

  const forwarded = request.headers.get("x-forwarded-proto");
  const scheme = (forwarded ?? request.nextUrl.protocol.replace(":", "")).toLowerCase();

  const wrongHost = host !== canonicalHost;
  const wrongScheme = scheme !== "https";
  if (!wrongHost && !wrongScheme) return null;

  const next = request.nextUrl.clone();
  next.hostname = canonicalHost;
  next.protocol = "https:";
  next.port = "";
  return NextResponse.redirect(next, 308);
}
