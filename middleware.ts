import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

export const config = {
  matcher: [
    // Skip all Next assets and common static files so auth middleware never
    // touches styles, scripts, fonts, or images (avoids edge/CDN quirks).
    "/((?!_next/|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|ico|css|js|mjs|map|woff2?|ttf|eot)$).*)",
  ],
};
