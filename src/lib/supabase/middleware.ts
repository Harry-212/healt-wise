import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Supabase session middleware — stubbed out. Replaced by Firebase. */
export async function updateSession(_request: NextRequest) {
  return NextResponse.next();
}
