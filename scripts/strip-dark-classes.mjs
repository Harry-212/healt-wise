import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "src");

/** Remove Tailwind `dark:*` utilities from class strings (light-only site). */
function stripDarkFromString(s) {
  let out = s;
  let prev;
  do {
    prev = out;
    out = out.replace(/\s+dark:\[[^\]]*\][^\s"'`>]+/g, "");
    out = out.replace(/\s+dark:[^\s"'`>]+/g, "");
  } while (out !== prev);
  return out;
}

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".tsx") || e.name.endsWith(".ts")) {
      let s = fs.readFileSync(p, "utf8");
      const orig = s;
      s = stripDarkFromString(s);
      if (s !== orig) fs.writeFileSync(p, s);
    }
  }
}

walk(root);
console.log("Stripped dark: classes under src/");
