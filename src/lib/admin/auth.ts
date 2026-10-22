import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "hw_admin_session";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

/**
 * The admin password must come from the environment. There is no fallback:
 * when it is missing, login is refused instead of accepting a known value.
 */
export function getAdminDashboardPassword(): string | null {
  return process.env.ADMIN_DASHBOARD_PASSWORD?.trim() || null;
}

/**
 * Sessions are signed with ADMIN_SESSION_SECRET when set, otherwise with a key
 * derived from the password — so changing the password also signs everyone out.
 */
function sessionSigningKey(): string | null {
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  if (secret) return secret;
  const password = getAdminDashboardPassword();
  if (!password) return null;
  return createHash("sha256").update(`hw-admin-session:${password}`).digest("hex");
}

function sign(payload: string, key: string): string {
  return createHmac("sha256", key).update(payload).digest("base64url");
}

/** Constant-time string comparison (hashing first equalises the lengths). */
function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest();
  const hb = createHash("sha256").update(b).digest();
  return timingSafeEqual(ha, hb);
}

/**
 * Machine access for the monthly price update (GitHub Actions). Separate from
 * the dashboard password; when PRICE_APPLY_TOKEN is unset, nothing is accepted.
 */
export function verifyPriceApplyToken(authorizationHeader: string | null): boolean {
  const token = process.env.PRICE_APPLY_TOKEN?.trim();
  if (!token || token.length < 32) return false;
  const presented = authorizationHeader?.match(/^Bearer\s+(.+)$/i)?.[1]?.trim() ?? "";
  return safeEqual(presented, token);
}

export function verifyAdminPassword(candidate: string): boolean {
  const password = getAdminDashboardPassword();
  if (!password) return false;
  return safeEqual(candidate, password);
}

/** Token format: `<expiry unix seconds>.<HMAC of expiry>`. */
export function createAdminSessionToken(): string | null {
  const key = sessionSigningKey();
  if (!key) return null;
  const expires = String(Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS);
  return `${expires}.${sign(expires, key)}`;
}

export function isValidAdminSessionToken(token: string | undefined): boolean {
  if (!token) return false;
  const key = sessionSigningKey();
  if (!key) return false;
  const [expires, signature, ...rest] = token.split(".");
  if (!expires || !signature || rest.length > 0) return false;
  if (!/^\d+$/.test(expires)) return false;
  if (Number(expires) <= Math.floor(Date.now() / 1000)) return false;
  return safeEqual(signature, sign(expires, key));
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return isValidAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

export function adminCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  };
}

/**
 * Basic brute-force brake for the login route: after too many failed attempts
 * from one client, further attempts are refused for a while. In-memory, so it
 * resets on restart — enough for a single Node.js process.
 */
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;
const failedAttempts = new Map<string, { count: number; firstAt: number }>();

export function isLoginLockedOut(clientKey: string): boolean {
  const entry = failedAttempts.get(clientKey);
  if (!entry) return false;
  if (Date.now() - entry.firstAt > LOCKOUT_MS) {
    failedAttempts.delete(clientKey);
    return false;
  }
  return entry.count >= MAX_FAILED_ATTEMPTS;
}

export function recordFailedLogin(clientKey: string): void {
  const now = Date.now();
  const entry = failedAttempts.get(clientKey);
  if (!entry || now - entry.firstAt > LOCKOUT_MS) {
    failedAttempts.set(clientKey, { count: 1, firstAt: now });
    return;
  }
  entry.count += 1;
}

export function clearFailedLogins(clientKey: string): void {
  failedAttempts.delete(clientKey);
}
