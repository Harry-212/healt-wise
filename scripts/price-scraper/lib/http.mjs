import { execFile } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/**
 * Polite fetcher for the price check:
 * - identifies itself honestly (no browser impersonation),
 * - obeys robots.txt for its own user agent (falling back to the "*" group),
 * - one request at a time per host, with a pause between them,
 * - caches bodies for the day so re-runs do not hit sites again.
 * Some CDNs refuse Node's built-in HTTP client but serve curl, with the same
 * honest user agent. So a refused request is retried ONCE with curl; if curl
 * also gets a challenge page, the site is reported as blocked — challenge
 * pages are never solved or worked around.
 */

export const USER_AGENT =
  "Healthwise360-PriceCheck/0.1 (+https://www.healthwise360.co.uk/methodology)";
const UA_TOKEN = "healthwise360-pricecheck";
const PER_HOST_DELAY_MS = 1500;
const TIMEOUT_MS = 25_000;

const BOT_WALL = /Just a moment\.\.\.|cf-chl|Security Checkpoint|Incapsula|_Incapsula_|px-captcha|datadome/i;
const CURL_STATUS_MARKER = "\n__HW360_STATUS__";

export function isRefused(r) {
  return r.status === 403 || r.status === 429 || BOT_WALL.test(r.body.slice(0, 20_000));
}

/** Same request via the curl binary (same UA and Accept header, no browser headers). */
export function curlGet(url) {
  const args = [
    "--silent", "--location", "--compressed",
    "--max-time", String(TIMEOUT_MS / 1000),
    "--user-agent", USER_AGENT,
    "--header", "Accept: text/html,application/json;q=0.9,*/*;q=0.8",
    "--write-out", `${CURL_STATUS_MARKER}%{http_code} %{url_effective}`,
    url,
  ];
  return new Promise((resolve, reject) => {
    execFile("curl", args, { maxBuffer: 32 * 1024 * 1024, windowsHide: true }, (err, stdout) => {
      if (err && !stdout) return reject(err);
      const at = stdout.lastIndexOf(CURL_STATUS_MARKER);
      if (at < 0) return reject(new Error("curl returned no status"));
      const [code, finalUrl] = stdout.slice(at + CURL_STATUS_MARKER.length).trim().split(" ");
      resolve({ status: Number(code), finalUrl: finalUrl || url, body: stdout.slice(0, at), transport: "curl" });
    });
  });
}

export function createFetcher({ cacheDir, fresh = false }) {
  const robotsCache = new Map();
  const hostQueue = new Map();
  const day = new Date().toISOString().slice(0, 10);
  if (cacheDir) fs.mkdirSync(cacheDir, { recursive: true });

  function cachePath(url) {
    const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 16);
    return path.join(cacheDir, `${day}-${hash}.json`);
  }

  /** Serialises requests per host and spaces them out. */
  function scheduleForHost(host, task) {
    const prev = hostQueue.get(host) ?? Promise.resolve();
    const next = prev.then(task, task).finally(() => new Promise((r) => setTimeout(r, PER_HOST_DELAY_MS)));
    hostQueue.set(host, next.catch(() => {}));
    return next;
  }

  async function rawGet(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": USER_AGENT, Accept: "text/html,application/json;q=0.9,*/*;q=0.8" },
        redirect: "follow",
        signal: ctrl.signal,
      });
      const body = await res.text();
      return { status: res.status, finalUrl: res.url, body, transport: "node" };
    } finally {
      clearTimeout(timer);
    }
  }

  /** Node fetch first; one curl retry when the response is a refusal. */
  async function getWithFallback(url) {
    const first = await rawGet(url);
    if (!isRefused(first)) return first;
    try {
      const second = await curlGet(url);
      return isRefused(second) ? { ...second, transport: "node+curl" } : second;
    } catch {
      return first;
    }
  }

  async function robotsAllows(url) {
    const { origin, pathname, search } = new URL(url);
    if (!robotsCache.has(origin)) {
      robotsCache.set(
        origin,
        scheduleForHost(new URL(url).host, () => getWithFallback(`${origin}/robots.txt`))
          .then((r) => (r.status >= 200 && r.status < 300 && !isRefused(r) ? parseRobots(r.body) : null))
          .catch(() => null),
      );
    }
    const rules = await robotsCache.get(origin);
    return isAllowed(rules, pathname + search);
  }

  /**
   * GET a URL. Returns { ok, status, body, finalUrl, blocked, reason, fromCache }.
   * `blocked` is set for robots.txt disallows and bot walls.
   */
  /** `refresh: true` skips today's cache for this request (used by the retry). */
  async function get(url, { refresh = false } = {}) {
    const file = cacheDir ? cachePath(url) : null;
    if (file && !fresh && !refresh && fs.existsSync(file)) {
      return { ...JSON.parse(fs.readFileSync(file, "utf8")), fromCache: true };
    }
    if (!(await robotsAllows(url))) {
      return { ok: false, status: null, body: "", finalUrl: url, blocked: true, reason: "robots.txt disallows this URL" };
    }
    let result;
    try {
      const r = await scheduleForHost(new URL(url).host, () => getWithFallback(url));
      const wall = BOT_WALL.test(r.body.slice(0, 20_000));
      result = {
        ok: r.status >= 200 && r.status < 300 && !wall,
        status: r.status,
        body: r.body,
        finalUrl: r.finalUrl,
        transport: r.transport,
        blocked: wall || r.status === 403 || r.status === 429,
        reason: wall ? "bot protection page" : r.status >= 400 ? `HTTP ${r.status}` : null,
      };
    } catch (err) {
      result = { ok: false, status: null, body: "", finalUrl: url, blocked: false, reason: `fetch failed: ${err.cause?.code ?? err.name}` };
    }
    if (file && result.ok) fs.writeFileSync(file, JSON.stringify(result));
    return { ...result, fromCache: false };
  }

  return { get };
}

// ---------------------------------------------------------------- robots.txt

/** Returns the rule list of the group for our UA, or the "*" group. */
export function parseRobots(txt) {
  const groups = [];
  let current = null;
  let lastWasAgent = false;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, "").trim();
    const m = line.match(/^([A-Za-z-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1].toLowerCase();
    const value = m[2].trim();
    if (key === "user-agent") {
      if (!lastWasAgent || !current) {
        current = { agents: [], rules: [] };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue;
    if (key === "allow" || key === "disallow") current.rules.push({ allow: key === "allow", path: value });
  }
  const ours = groups.find((g) => g.agents.some((a) => a !== "*" && UA_TOKEN.includes(a)));
  return (ours ?? groups.find((g) => g.agents.includes("*")))?.rules ?? [];
}

/** Longest matching rule wins; Allow wins ties (RFC 9309). */
export function isAllowed(rules, pathAndQuery) {
  if (!rules) return true;
  let best = null;
  for (const r of rules) {
    if (r.path === "") continue;
    const pattern = new RegExp(
      "^" + r.path.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\\\$$/, "$"),
    );
    if (!pattern.test(pathAndQuery)) continue;
    if (!best || r.path.length > best.path.length || (r.path.length === best.path.length && r.allow)) best = r;
  }
  return best ? best.allow : true;
}
