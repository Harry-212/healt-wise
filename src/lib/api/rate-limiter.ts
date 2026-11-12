/**
 * In-memory sliding window rate limiter for public API endpoints.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const ipRequestMap = new Map<string, RateLimitRecord>();
const MAX_TRACKED_IPS = 5000;
let lastSweep = 0;

/** Drop expired records so the map cannot grow without bound. */
function sweep(now: number, windowMs: number): void {
  if (now - lastSweep < windowMs && ipRequestMap.size < MAX_TRACKED_IPS) return;
  lastSweep = now;
  for (const [key, rec] of ipRequestMap) {
    if (rec.timestamps.length === 0 || rec.timestamps[rec.timestamps.length - 1] <= now - windowMs) {
      ipRequestMap.delete(key);
    }
  }
}

export interface RateLimitOptions {
  /** Maximum requests allowed in the window (default: 60). */
  limit?: number;
  /** Window duration in milliseconds (default: 60,000 ms = 1 minute). */
  windowMs?: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

/**
 * Checks if a given IP address is within the rate limit.
 */
export function checkRateLimit(
  ip: string,
  options: RateLimitOptions = {},
): RateLimitResult {
  const limit = options.limit ?? 60;
  const windowMs = options.windowMs ?? 60_000;
  const now = Date.now();
  const windowStart = now - windowMs;
  sweep(now, windowMs);

  let record = ipRequestMap.get(ip);
  if (!record) {
    record = { timestamps: [] };
    ipRequestMap.set(ip, record);
  }

  // Filter timestamps within current window
  record.timestamps = record.timestamps.filter((t) => t > windowStart);

  const resetTime = Math.ceil((now + windowMs) / 1000);

  if (record.timestamps.length >= limit) {
    const oldestInWindow = record.timestamps[0];
    const retryAfter = Math.max(1, Math.ceil((oldestInWindow + windowMs - now) / 1000));
    return {
      success: false,
      limit,
      remaining: 0,
      reset: resetTime,
      retryAfter,
    };
  }

  record.timestamps.push(now);

  return {
    success: true,
    limit,
    remaining: Math.max(0, limit - record.timestamps.length),
    reset: resetTime,
  };
}

/**
 * Helper to extract client IP from incoming request headers.
 */
export function getClientIp(request: Request): string {
  // The first x-forwarded-for entry is client-supplied and can be spoofed to
  // dodge the limit. The last entry is the one appended by our own proxy.
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) {
    return cfConnectingIp.trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const parts = forwardedFor.split(",").map((x) => x.trim()).filter(Boolean);
    if (parts.length > 0) return parts[parts.length - 1];
  }
  return "127.0.0.1";
}

/**
 * Resets the in-memory rate limit table (useful for tests).
 */
export function resetRateLimits(): void {
  ipRequestMap.clear();
}
