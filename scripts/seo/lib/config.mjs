import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(__dirname, "..", "..", "..");
export const seoDir = path.join(repoRoot, "seo");
export const reportsDir = path.join(repoRoot, "reports", "seo");

export function loadConfig() {
  const raw = readFileSync(path.join(seoDir, "seo.config.json"), "utf8");
  return JSON.parse(raw);
}

export function loadExceptions() {
  const raw = readFileSync(path.join(seoDir, "seo-exceptions.json"), "utf8");
  return JSON.parse(raw).exceptions;
}

/** Matches a pathname against a page-type pattern that may use one leading/trailing "*". */
export function matchesPattern(pathname, pattern) {
  if (pattern.startsWith("*")) return pathname.endsWith(pattern.slice(1));
  if (pattern.endsWith("/*")) return pathname.startsWith(pattern.slice(0, -1));
  if (pattern.endsWith("*")) return pathname.startsWith(pattern.slice(0, -1));
  return pathname === pattern;
}

export function pageTypeFor(pathname, pageTypeRules) {
  const rule = pageTypeRules.find((r) => matchesPattern(pathname, r.pattern));
  return rule ? rule.type : "Unclassified";
}

export function resolveBaseUrl(target, config) {
  if (target === "live") return config.siteUrl;
  return process.env.SEO_LOCAL_BASE_URL || "http://localhost:3000";
}
