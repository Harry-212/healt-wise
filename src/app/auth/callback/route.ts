import { NextResponse } from "next/server";

/** Auth callback — Supabase removed. Will handle Firebase auth redirect when enabled. */
export function GET(_request: Request) {
  return NextResponse.redirect(new URL("/tools/weight-loss-tracker", _request.url));
}
