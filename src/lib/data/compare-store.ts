import "server-only";
import fs from "node:fs";
import path from "node:path";
import type {
  CompareMedication,
  MounjaroCompareStore,
  WegovyCompareStore,
} from "./compare-types";
import { AFFILIATE_PARTNER_IDS } from "./affiliate-partners";
import { buildMounjaroSeedStore, buildWegovySeedStore } from "./compare-seed";
import type { MounjaroUkProviderCompare } from "./mounjaro-uk-compare-providers";
import type { WegovyUkProviderCompare } from "./wegovy-uk-compare-providers";

/**
 * Live price JSON lives outside (or beside) the deploy tree when
 * COMPARE_DATA_DIR is set — so code deploys never wipe admin Saves.
 * Default: `<project>/data` (local/dev).
 */
function compareDataDir(): string {
  const fromEnv = process.env.COMPARE_DATA_DIR?.trim();
  if (fromEnv) return path.resolve(fromEnv);
  return path.join(process.cwd(), "data");
}

function mounjaroJsonPath(): string {
  return path.join(compareDataDir(), "mounjaro-compare.json");
}

function wegovyJsonPath(): string {
  return path.join(compareDataDir(), "wegovy-compare.json");
}

let mounjaroCache: MounjaroCompareStore | null = null;
let wegovyCache: WegovyCompareStore | null = null;
let mounjaroCacheMtime = 0;
let wegovyCacheMtime = 0;

function fileMtime(filePath: string): number {
  try {
    return fs.statSync(filePath).mtimeMs;
  } catch {
    return 0;
  }
}

function ensureDataDir() {
  const dir = compareDataDir();
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Create JSON only when missing. Never overwrite an existing file — admin
 * edits on the live site always win over code/seed deploys.
 */
function lazySeed(medication: CompareMedication) {
  ensureDataDir();

  if (medication === "mounjaro" && !fs.existsSync(mounjaroJsonPath())) {
    fs.writeFileSync(
      mounjaroJsonPath(),
      JSON.stringify(buildMounjaroSeedStore(), null, 2),
      "utf8",
    );
  }

  if (medication === "wegovy" && !fs.existsSync(wegovyJsonPath())) {
    fs.writeFileSync(
      wegovyJsonPath(),
      JSON.stringify(buildWegovySeedStore(), null, 2),
      "utf8",
    );
  }
}

function readJsonFile<T>(filePath: string, medication: CompareMedication): T {
  lazySeed(medication);
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

function writeJsonFile(filePath: string, data: unknown) {
  ensureDataDir();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

export function invalidateCompareCache(medication?: CompareMedication) {
  if (!medication || medication === "mounjaro") {
    mounjaroCache = null;
    mounjaroCacheMtime = 0;
  }
  if (!medication || medication === "wegovy") {
    wegovyCache = null;
    wegovyCacheMtime = 0;
  }
}

export function getMounjaroStore(): MounjaroCompareStore {
  lazySeed("mounjaro");
  const filePath = mounjaroJsonPath();
  const mtime = fileMtime(filePath);
  if (mounjaroCache && mounjaroCacheMtime === mtime) return mounjaroCache;
  mounjaroCache = readJsonFile<MounjaroCompareStore>(filePath, "mounjaro");
  mounjaroCacheMtime = mtime;
  return mounjaroCache;
}

export function getWegovyStore(): WegovyCompareStore {
  lazySeed("wegovy");
  const filePath = wegovyJsonPath();
  const mtime = fileMtime(filePath);
  if (wegovyCache && wegovyCacheMtime === mtime) return wegovyCache;
  wegovyCache = readJsonFile<WegovyCompareStore>(filePath, "wegovy");
  wegovyCacheMtime = mtime;
  return wegovyCache;
}

export function saveMounjaroStore(store: MounjaroCompareStore): void {
  const filePath = mounjaroJsonPath();
  writeJsonFile(filePath, store);
  mounjaroCache = store;
  mounjaroCacheMtime = fileMtime(filePath);
}

export function saveWegovyStore(store: WegovyCompareStore): void {
  const filePath = wegovyJsonPath();
  writeJsonFile(filePath, store);
  wegovyCache = store;
  wegovyCacheMtime = fileMtime(filePath);
}

const TRUSTPILOT_URL_BY_PROVIDER_ID: Record<string, string> = {
  "pharmacy-me": "https://uk.trustpilot.com/review/pharmacyme.co.uk",
  "i-prescribe": "https://uk.trustpilot.com/review/i-prescribe.co.uk",
  shemed: "https://uk.trustpilot.com/review/shemed.co.uk",
};

/**
 * Only affiliate partners are shown on the site. The stored JSON may still hold
 * other providers (kept so they can be re-added later); they are never read here.
 */
function isShownProvider(p: { id: string }): boolean {
  return AFFILIATE_PARTNER_IDS.has(p.id);
}

function enrichMounjaroProvider(
  p: MounjaroUkProviderCompare,
): MounjaroUkProviderCompare {
  return {
    ...p,
    trustpilotUrl: TRUSTPILOT_URL_BY_PROVIDER_ID[p.id] ?? p.trustpilotUrl,
  };
}

/** Live Mounjaro list for public pages (filtered + Trustpilot enrichment). */
export function readMounjaroCompareProviders(): MounjaroUkProviderCompare[] {
  const store = getMounjaroStore();
  return store.providers
    .filter(isShownProvider)
    .map(enrichMounjaroProvider);
}

/** Admin follows the public Mounjaro table count (hidden providers excluded). */
export function readMounjaroCompareProvidersAdmin(): MounjaroUkProviderCompare[] {
  return readMounjaroCompareProviders();
}

function sortProvidersByName<T extends { name: string }>(providers: T[]): T[] {
  return [...providers].sort((a, b) => a.name.localeCompare(b.name, "en-GB"));
}

/** Live Wegovy list for public pages (A–Z by pharmacy name). */
export function readWegovyCompareProviders(): WegovyUkProviderCompare[] {
  return sortProvidersByName(
    getWegovyStore().providers.filter(isShownProvider),
  );
}

/** Full Wegovy list for admin (A–Z by pharmacy name). */
export function readWegovyCompareProvidersAdmin(): WegovyUkProviderCompare[] {
  return readWegovyCompareProviders();
}

export function getMounjaroLastUpdatedLabel(): string {
  return getMounjaroStore().lastUpdated;
}

export function getWegovyLastUpdatedLabel(): string {
  return getWegovyStore().lastUpdated;
}
