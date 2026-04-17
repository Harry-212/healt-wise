import type { NextRequest } from "next/server";
import { canonicalHostRedirect } from "@/lib/seo/canonical-redirect";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
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
