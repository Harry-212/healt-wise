/**
 * Blog + helpful-guides + src/lib/blog.ts: visible "injection" → "treatment".
 * Preserves URLs/slugs, image paths, injection site(s), subcutaneous injection, injection pen, contraception phrase.
 * Uses Map-based placeholders (immune to regex steps that ate __INJTOK__).
 */
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = path.resolve(import.meta.dirname, "..");
const DIRS = [path.join(ROOT, "src", "app", "blog"), path.join(ROOT, "src", "app", "helpful-guides")];
const EXTRA = [path.join(ROOT, "src", "lib", "blog.ts")];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const n of fs.readdirSync(dir)) {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx|ts)$/.test(n)) out.push(p);
  }
  return out;
}

function allFiles() {
  const s = new Set();
  DIRS.forEach((d) => walk(d).forEach((f) => s.add(f)));
  EXTRA.forEach((f) => fs.existsSync(f) && s.add(f));
  return [...s];
}

function transform(raw) {
  /** Private-use placeholders so phrase/word steps cannot alter them. */
  const map = new Map();
  let seq = 0;
  const protect = (m) => {
    const id = `\uF000${String(seq++).padStart(5, "0")}\uF001`;
    map.set(id, m);
    return id;
  };

  let s = raw;

  // 1) Image / asset paths in quotes (keep filenames)
  s = s.replace(
    /(["'])([^"']*\binjections?\b[^"']*\.(?:webp|png|avif|jpeg|jpg))(\1)/gi,
    (_, q, mid, q2) => `${q}${protect(mid)}${q2}`,
  );

  // 2) slug / href / heroImage / PATH / etc.
  s = s.replace(
    /((?:slug|href|@id|url|PATH|SHARE_PATH|HERO_IMAGE|heroImage)\s*[:=]\s*["'`])([^"'`]*[Ii]njections?[^"'`]*)(["'`])/g,
    (_, a, mid, c) => `${a}${protect(mid)}${c}`,
  );

  // 3) JSX href="..." / href='...' (do not scan all backticks — can span whole JSX and break placeholders)
  s = s.replace(/(\bhref=\{?["'])([^"']*[Ii]njections?[^"']*)(["']\}?)/g, (_, a, mid, c) => `${a}${protect(mid)}${c}`);

  // 5) Medical / device (keep wording)
  const medical = [
    /\bInjection site reactions?\b/gi,
    /\binjection site reactions?\b/g,
    /\bInjection site reaction\b/gi,
    /\binjection site irritation\b/gi,
    /\bInjection site irritation\b/gi,
    /\binjection site and\b/gi,
    /\binjection site,\b/gi,
    /\binjection site\.\b/gi,
    /\bat the injection site\b/gi,
    /\baround the injection site\b/gi,
    /\bthe injection site\b/gi,
    /\byour injection site\b/gi,
    /\byour chosen injection site\b/gi,
    /\bchosen injection site\b/gi,
    /\bClean the skin at your chosen injection site\b/g,
    /\bRotate injection sites\b/g,
    /\brotate injection sites\b/g,
    /\bRotating your injection site\b/g,
    /\brotating your injection site\b/g,
    /\bRotate your injection sites\b/g,
    /\brotate your injection sites\b/g,
    /\bCommon injection sites\b/g,
    /\bsubcutaneous injection\b/gi,
    /\bSubcutaneous injection\b/g,
    /\binjection pen\b/gi,
    /\bInjection pen\b/g,
    /\binjection pens\b/gi,
    /\bInjection frequency\b/g,
    /\bInjection reactions\b/g,
    /\bFor injection site reactions\b/g,
    /\bimplant, or injection,\b/g,
    /\bgastrointestinal, injection site\b/gi,
    /\binjection site and other\b/gi,
    /\bchoose and rotate your injection sites\b/gi,
    /\bChoose And Rotate Your Injection Sites\b/g,
    /\bGive Yourself The Wegovy Injection\b/gi,
    /\bWegovy Injection Instructions\b/g,
    /\bWegovy injection instructions\b/g,
    /\bWegovy Injection\b/g,
    /\bWegovy injection\b/g,
    /\bWegovy injections\b/gi,
    /\bUnderstand What Wegovy Injection\b/gi,
    /\bPrepare For Each Weekly Injection\b/gi,
    /\bthe injection end\b/gi,
    /\bthe injection process\b/gi,
    /\bduring the injection\b/gi,
    /\bstart the injection\b/gi,
    /\bAfter each injection\b/g,
    /\bmissed injection\b/gi,
    /\bplanned injection\b/gi,
    /\bnext scheduled injection\b/gi,
    /\bnext injection\b/gi,
    /\bfirst injection\b/gi,
    /\bweekly injection\b/gi,
    /\bWeekly injection\b/g,
    /\bdaily injection option\b/gi,
    /\bMounjaro injection dosing\b/gi,
    /\bpractical injection habits\b/gi,
    /\bweekly subcutaneous injection\b/gi,
    /\bOnce-weekly injection\b/g,
    /\bis a subcutaneous injection\b/gi,
    /\bcontinue your injection\b/gi,
    /\bdelay your injection\b/gi,
    /\bdelaying your next injection\b/gi,
    /\byour injection\b/gi,
    /\bthe injection itself\b/gi,
    /\bthe small habits around the injection\b/gi,
    /\bgiving the injection\b/gi,
    /\binjection technique\b/gi,
    /\bnot injections alone\b/gi,
    /\bthe last injection\b/gi,
    /\bInjection option\b/g,
  ];
  for (const re of medical) s = s.replace(re, (m) => protect(m));

  const phrases = [
    [/Mounjaro weight loss injections \(UK\)/g, "Mounjaro weight loss treatments (UK)"],
    [/Mounjaro weight loss injections/g, "Mounjaro weight loss treatments"],
    [/Mounjaro weight loss injection UK/g, "Mounjaro weight loss treatment UK"],
    [/Mounjaro Weight Loss Injection UK/g, "Mounjaro Weight Loss Treatment UK"],
    [/Mounjaro weight loss injection/g, "Mounjaro weight loss treatment"],
    [/Weekly Weight Loss Injections in the UK/g, "Weekly Weight Loss Treatments in the UK"],
    [/Weekly weight loss injections in the UK/g, "Weekly weight loss treatments in the UK"],
    [/Weekly weight loss injections have/g, "Weekly weight loss treatments have"],
    [/weekly weight loss injection is/g, "weekly weight loss treatment is"],
    [/Which weekly weight loss injection/g, "Which weekly weight loss treatment"],
    [/get these injections on the NHS/g, "get these treatments on the NHS"],
    [/stop weekly injections/g, "stop weekly treatments"],
    [/How these injections affect/g, "How these treatments affect"],
    [/These injections appear/g, "These treatments appear"],
    [/as the injections themselves/g, "as the treatments themselves"],
    [/Weight Loss Injection Shortages/g, "Weight Loss Treatment Shortages"],
    [/weight loss injection shortages/g, "weight loss treatment shortages"],
    [/Weight loss injection shortages/g, "Weight loss treatment shortages"],
    [/weight loss injections/g, "weight loss treatments"],
    [/Weight loss injections/g, "Weight loss treatments"],
    [/Weight Loss Injections/g, "Weight Loss Treatments"],
    [/weight loss injection/g, "weight loss treatment"],
    [/Weight loss injection/g, "Weight loss treatment"],
    [/Weight Loss Injection/g, "Weight Loss Treatment"],
    [/weight loss injection journey/g, "weight loss treatment journey"],
    [/prescription weight loss injections/g, "prescription weight loss treatments"],
    [/Prescription weight loss injections/g, "Prescription weight loss treatments"],
    [/Prescription Weight Loss Injections/g, "Prescription Weight Loss Treatments"],
    [/doctor prescribed weight loss injections/g, "doctor prescribed weight loss treatments"],
    [/Doctor prescribed weight loss injections/g, "Doctor prescribed weight loss treatments"],
    [/Doctor Prescribed Weight Loss Injections/g, "Doctor Prescribed Weight Loss Treatments"],
    [/weekly weight loss injections/g, "weekly weight loss treatments"],
    [/Weekly weight loss injections/g, "Weekly weight loss treatments"],
    [/Weekly Weight Loss Injections/g, "Weekly Weight Loss Treatments"],
    [/licensed weight loss injections/g, "licensed weight loss treatments"],
    [/Licensed weight loss injections/g, "Licensed weight loss treatments"],
    [/Licensed Weight Loss Injections/g, "Licensed Weight Loss Treatments"],
    [/Licensed Weight Loss Injections UK/g, "Licensed Weight Loss Treatments UK"],
    [/prescription slimming injections/g, "prescription slimming treatments"],
    [/Prescription slimming injections/g, "Prescription slimming treatments"],
    [/Prescription Slimming Injections/g, "Prescription Slimming Treatments"],
    [/slimming injections/g, "slimming treatments"],
    [/Slimming injections/g, "Slimming treatments"],
    [/Slimming Injections/g, "Slimming Treatments"],
    [/Wegovy weight loss injection/g, "Wegovy weight loss treatment"],
    [/Wegovy Weight Loss Injection/g, "Wegovy Weight Loss Treatment"],
    [/cheap weight loss injections/g, "cheap weight loss treatments"],
    [/best weight loss injections/g, "best weight loss treatments"],
    [/Best weight loss injections/g, "Best weight loss treatments"],
    [/other popular injections\b/g, "other popular treatments"],
    [/Other weight loss injections/g, "Other weight loss treatments"],
    [/other weight loss injections/g, "other weight loss treatments"],
    [/GLP-1 weight loss injections/g, "GLP-1 weight loss treatments"],
    [/Mounjaro vs Other Weight Loss Injections/g, "Mounjaro vs Other Weight Loss Treatments"],
    [/better than other injections/g, "better than other treatments"],
    [/Are injections painful/g, "Are treatments painful"],
    [/Wegovy Injection Instructions You Can Trust/g, "Wegovy Treatment Instructions You Can Trust"],
    [/wegovy injection instructions/g, "wegovy treatment instructions"],
    [/Easy-to-Follow Wegovy Injection Instructions/g, "Easy-to-Follow Wegovy Treatment Instructions"],
    [/Easy-to-Follow Wegovy injection instructions/g, "Easy-to-Follow Wegovy treatment instructions"],
    [/Mounjaro vs Wegovy — comparing UK GLP-1 weight loss injections/g, "Mounjaro vs Wegovy — comparing UK GLP-1 weight loss treatments"],
    [/Mounjaro Weight Loss Injection UK/g, "Mounjaro Weight Loss Treatment UK"],
    [/injection based treatments/g, "treatment based options"],
    [/injection days\b/gi, "treatment days"],
    [/on injection days\b/gi, "on treatment days"],
    [/UK injections comparison/g, "UK treatments comparison"],
    [/weight-loss injection\b/gi, "weight-loss treatment"],
    [/weight-loss injections\b/gi, "weight-loss treatments"],
    [/other UK injections\b/gi, "other UK treatments"],
  ];
  for (const [re, rep] of phrases) s = s.replace(re, rep);

  s = s.replace(/\bInjections\b/g, "Treatments");
  s = s.replace(/\binjections\b/g, "treatments");
  s = s.replace(/\bInjection\b/g, "Treatment");
  s = s.replace(/\binjection\b/g, "treatment");
  s = s.replace(/\bINJECTIONS\b/g, "TREATMENTS");
  s = s.replace(/\bINJECTION\b/g, "TREATMENT");

  for (const [id, val] of map) {
    if (!s.includes(id)) continue;
    s = s.split(id).join(val);
  }

  if (/\uF000\d{5}\uF001/.test(s)) {
    const bad = s.match(/\uF000\d{5}\uF001/);
    throw new Error(`Unrestored placeholder: ${bad ? JSON.stringify(bad[0]) : "?"}`);
  }

  return s;
}

export { transform };

function isCliMain() {
  const a = import.meta.url;
  const b = pathToFileURL(path.resolve(process.argv[1])).href;
  return a === b;
}

if (isCliMain()) {
  let changed = 0;
  for (const file of allFiles()) {
    const before = fs.readFileSync(file, "utf8");
    let after;
    try {
      after = transform(before);
    } catch (e) {
      console.error("FAIL:", path.relative(ROOT, file), e.message);
      process.exit(1);
    }
    if (after !== before) {
      fs.writeFileSync(file, after, "utf8");
      changed++;
      console.log(path.relative(ROOT, file));
    }
  }
  console.log(`Done. ${changed} files updated.`);
}
