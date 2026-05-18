import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Paths that should not be indexed — redirect to home (fixes GSC noise). */
const REDIRECT_TO_HOME = new Set(["/$", "/%24"]);

/**
 * One-hop 301 for mistaken crawl URLs (e.g. `https://www.healthwise360.co.uk/$`).
 * Literal `$` is not a real route; often from bad ads, templates, or crawlers.
 */
export function junkPathRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  if (!REDIRECT_TO_HOME.has(pathname)) return null;

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return NextResponse.redirect(url, 301);
}
