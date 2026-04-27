import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = join(__dirname, "../src/lib/data/mounjaro-uk-compare-providers.ts");
const bodyPath = join(__dirname, "mounjaro-providers-body.txt");

const full = fs.readFileSync(target, "utf8");
const body = fs.readFileSync(bodyPath, "utf8");
const startMarker = "export const MOUNJARO_UK_COMPARE_PROVIDERS: MounjaroUkProviderCompare[] = [";
const endMarker = "export function getMounjaroCompareProviderById(";
const i0 = full.indexOf(startMarker);
const i1 = full.indexOf(endMarker);
if (i0 < 0 || i1 < 0) throw new Error("markers not found");
const before = full.slice(0, i0 + startMarker.length);
const after = full.slice(i1);
const out = `${before}\n${body.trim()}\n];\n\n${after}`;
fs.writeFileSync(target, out, "utf8");
console.log("spliced", target);
