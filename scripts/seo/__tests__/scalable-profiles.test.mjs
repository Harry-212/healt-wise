import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { register } from "node:module";
import { pathToFileURL } from "node:url";

register(pathToFileURL("./scripts/seo/__tests__/helpers/ts-alias-loader.mjs").href, import.meta.url);
const labels = await import("@/lib/data/partner-labels.ts");
const providers = await import("@/lib/data/providers.ts");

function* sourceFiles(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* sourceFiles(full);
    else if (/\.(ts|tsx)$/.test(name)) yield full;
  }
}

test("a partner added to the provider data always has a profile page", () => {
  const route = readFileSync("src/app/pharmacies/[slug]/page.tsx", "utf8");
  assert.match(route, /getActiveProvider\(slug\)/, "route must look the partner up in the central data");
  assert.match(route, /GenericProviderProfile/, "route must fall back to the generic profile");
  // The only notFound() is for a slug that is not an active partner.
  assert.equal((route.match(/notFound\(\)/g) ?? []).length, 1);
  assert.match(route, /if \(!provider\) notFound\(\);/);
});

test("the partner badge and block wording live in one file", () => {
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    const rel = relative(process.cwd(), file);
    if (rel.endsWith("partner-labels.ts")) continue;
    const text = readFileSync(file, "utf8")
      .split("\n")
      .filter((l) => !/^\s*(\/\/|\*|\/\*)/.test(l))
      .join("\n");
    for (const literal of [labels.PARTNER_BADGE_LABEL, labels.PARTNER_BLOCK_HEADING]) {
      if (text.includes(`"${literal}"`) || text.includes(`>${literal}<`) || new RegExp(`^\s*${literal}\s*$`, "m").test(text)) {
        offenders.push(`${rel}: ${literal}`);
      }
    }
  }
  assert.deepEqual(offenders, [], "import the label from @/lib/data/partner-labels instead");
  for (const p of providers.PROVIDERS) assert.equal(p.affiliate.badgeLabel, labels.PARTNER_BADGE_LABEL, p.id);
});

test("no page states a fixed number of current partners", () => {
  const fixed = /\b(five|six|seven|eight|nine|ten|[5-9]|1[0-9]) (current |active |verified |selected |affiliate |partner )+(partners|providers|pharmacies)\b/i;
  const offenders = [];
  for (const file of sourceFiles(join(process.cwd(), "src"))) {
    readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) return;
      if (fixed.test(line)) offenders.push(`${relative(process.cwd(), file)}:${i + 1}: ${line.trim().slice(0, 100)}`);
    });
  }
  assert.deepEqual(offenders, []);
});

test("the generic profile states facts from the data only", () => {
  const text = readFileSync("src/components/pharmacies/content/GenericProviderProfile.tsx", "utf8");
  assert.ok(!/(best|top-rated|recommended|ranked|#1)/i.test(text.replace(/\/\*[\s\S]*?\*\//g, "")), "no ranking or recommendation wording");
});
