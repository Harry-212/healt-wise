import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** No-op middleware — Supabase session management removed. Firebase auth goes here when enabled. */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
