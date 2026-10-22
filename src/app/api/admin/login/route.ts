import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  adminCookieOptions,
  clearFailedLogins,
  createAdminSessionToken,
  getAdminDashboardPassword,
  isLoginLockedOut,
  recordFailedLogin,
  verifyAdminPassword,
} from "@/lib/admin/auth";

export const runtime = "nodejs";

function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwarded || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: NextRequest) {
  if (!getAdminDashboardPassword()) {
    return NextResponse.json(
      { error: "Admin login is not configured" },
      { status: 503 },
    );
  }

  const key = clientKey(request);
  if (isLoginLockedOut(key)) {
    return NextResponse.json(
      { error: "Too many attempts. Try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const password =
    body && typeof body === "object" && "password" in body
      ? String((body as { password: unknown }).password ?? "")
      : "";

  if (!verifyAdminPassword(password)) {
    recordFailedLogin(key);
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = createAdminSessionToken();
  if (!token) {
    return NextResponse.json(
      { error: "Admin login is not configured" },
      { status: 503 },
    );
  }

  clearFailedLogins(key);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, adminCookieOptions());
  return response;
}
