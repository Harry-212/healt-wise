import path from "node:path";
import { pathToFileURL } from "node:url";

/**
 * Resolves the `@/*` -> `src/*` path alias (tsconfig.json's `paths`) for
 * plain Node ESM, so test files can import the *real* .ts source — e.g.
 * src/lib/seo/shared-json-ld.ts and ssot-page-seo.ts — instead of a
 * hand-copied fixture that could silently drift from it. Node's built-in
 * TypeScript type-stripping (stable since Node 23.6) handles the .ts
 * syntax itself; this hook only teaches Node where `@/...` points.
 */
const SRC_ROOT = path.resolve(import.meta.dirname, "..", "..", "..", "..", "src");

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith("@/")) {
    const rest = specifier.slice(2);
    const target = path.join(SRC_ROOT, rest);
    const withExt = /\.(ts|tsx|mts)$/.test(rest) ? target : `${target}.ts`;
    return nextResolve(pathToFileURL(withExt).href, context);
  }
  return nextResolve(specifier, context);
}
