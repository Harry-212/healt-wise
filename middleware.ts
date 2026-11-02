import type { NextRequest } from "next/server";
import { canonicalHostRedirect } from "@/lib/seo/canonical-redirect";
import { junkPathRedirect } from "@/lib/seo/junk-path-redirect";
import {
  landerRedirect,
  legacyFilterQueryRedirect,
} from "@/lib/seo/legacy-filter-redirect";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    (pathname.startsWith("/blog/best-weight-loss-treatment-in-") &&
      pathname !== "/blog/best-weight-loss-treatment-in-london") ||
    (pathname.startsWith("/blog/uk-weight-loss/") &&
      pathname !== "/blog/uk-weight-loss/london")
  ) {
    return new Response("410 Gone - This location page has been permanently retired.", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    });
  }

  const junk = junkPathRedirect(request);
  if (junk) return junk;
  const lander = landerRedirect(request);
  if (lander) return lander;
  const filter = legacyFilterQueryRedirect(request);
  if (filter) return filter;
  const canonical = canonicalHostRedirect(request);
  if (canonical) return canonical;
  return updateSession(request);
}

export const config = {
  matcher: [
    // Skip Next assets and common static files so auth middleware never
    // touches styles, scripts, fonts, or images (avoids edge/CDN quirks).
    // Sitemap/robots run through middleware so apex/http → canonical www HTTPS.
    "/((?!_next/|api/|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico|css|js|mjs|map|woff2?|ttf|eot)$).*)",
  ],
};
