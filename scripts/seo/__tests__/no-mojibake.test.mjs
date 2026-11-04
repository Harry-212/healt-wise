import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

// UTF-8 text that was decoded as Windows-1252 and saved again shows up as sequences
// such as "â€™", "â€“", "Â°" or "Â£". They reached live pages, meta descriptions and
// FAQ schema, so fail the build if any come back.
const GARBLED = /[ÂÃâ][\u0080-¿ŒœŠšŸŽžƒˆ˜–—‘-„†-•…‰‹›€™]/;

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx|mdx)$/.test(name)) yield full;
  }
}

test("no source file contains double-encoded (mojibake) characters", () => {
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const text = readFileSync(file, "utf8");
    text.split(/\r?\n/).forEach((line, i) => {
      if (GARBLED.test(line)) offenders.push(`${relative(process.cwd(), file).replaceAll("\\", "/")}:${i + 1}`);
    });
  }
  assert.deepEqual(offenders, []);
});

test("Mounjaro price comparison meta description reads once, with the partner scope", () => {
  const t = readFileSync("src/app/mounjaro-price-comparison/page.tsx", "utf8");
  assert.ok(t.includes("Compare Mounjaro prices by dose across our listed GPhC-registered partner pharmacies, from 2.5 mg to 15 mg."));
  assert.ok(!t.includes("Compare Mounjaro prices at our GPhC registered UK pharmacy partners. Compare Mounjaro"));
});
