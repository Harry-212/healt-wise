import { execFileSync } from "node:child_process";

/**
 * Returns the most recent git commit date across the given content files,
 * so a page's "Last updated" date moves only when its actual content files
 * change — not when an unrelated component or style is edited.
 *
 * Runs at build time (this page is statically generated, so this executes
 * once during `next build`, where `.git` is present). Falls back to the
 * given date if git history isn't available (e.g. a shallow clone, or a
 * production serverless runtime where `.git` has been pruned).
 */
export function getContentLastUpdated(filePaths: string[], fallbackIso: string): string {
  let latest: string | null = null;

  for (const filePath of filePaths) {
    try {
      const out = execFileSync(
        "git",
        ["log", "-1", "--format=%cI", "--", filePath],
        { cwd: process.cwd(), encoding: "utf-8" },
      ).trim();
      if (out && (!latest || out > latest)) {
        latest = out;
      }
    } catch {
      // git unavailable or file has no history — ignore, fall back below.
    }
  }

  return latest ?? fallbackIso;
}

export function formatUkDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
