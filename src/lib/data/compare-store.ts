import "server-only";
import fs from "node:fs";
import path from "node:path";
import type {
  CompareMedication,
  MounjaroCompareStore,
  WegovyCompareStore,
} from "./compare-types";
import { buildMounjaroSeedStore, buildWegovySeedStore } from "./compare-seed";
import type { MounjaroUkProviderCompare } from "./mounjaro-uk-compare-providers";
import type { WegovyUkProviderCompare } from "./wegovy-uk-compare-providers";

const DATA_DIR = path.join(process.cwd(), "data");
const MOUNJARO_JSON = path.join(DATA_DIR, "mounjaro-compare.json");
const WEGOVY_JSON = path.join(DATA_DIR, "wegovy-compare.json");

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
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function lazySeed(medication: CompareMedication) {
  ensureDataDir();

  if (medication === "mounjaro" && !fs.existsSync(MOUNJARO_JSON)) {
    fs.writeFileSync(
      MOUNJARO_JSON,
      JSON.stringify(buildMounjaroSeedStore(), null, 2),
      "utf8",
    );
  }

  if (medication === "wegovy" && !fs.existsSync(WEGOVY_JSON)) {
    fs.writeFileSync(
      WEGOVY_JSON,
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
  const mtime = fileMtime(MOUNJARO_JSON);
  if (mounjaroCache && mounjaroCacheMtime === mtime) return mounjaroCache;
  mounjaroCache = readJsonFile<MounjaroCompareStore>(MOUNJARO_JSON, "mounjaro");
  mounjaroCacheMtime = mtime;
  return mounjaroCache;
}

export function getWegovyStore(): WegovyCompareStore {
  lazySeed("wegovy");
  const mtime = fileMtime(WEGOVY_JSON);
  if (wegovyCache && wegovyCacheMtime === mtime) return wegovyCache;
  wegovyCache = readJsonFile<WegovyCompareStore>(WEGOVY_JSON, "wegovy");
  wegovyCacheMtime = mtime;
  return wegovyCache;
}

export function saveMounjaroStore(store: MounjaroCompareStore): void {
  writeJsonFile(MOUNJARO_JSON, store);
  mounjaroCache = store;
  mounjaroCacheMtime = fileMtime(MOUNJARO_JSON);
}

export function saveWegovyStore(store: WegovyCompareStore): void {
  writeJsonFile(WEGOVY_JSON, store);
  wegovyCache = store;
  wegovyCacheMtime = fileMtime(WEGOVY_JSON);
}

const TRUSTPILOT_URL_BY_PROVIDER_ID: Record<string, string> = {
  "asda-online-doctor": "https://uk.trustpilot.com/review/onlinedoctor.asda.com",
  "ashcroft-pharmacy": "https://uk.trustpilot.com/review/ashcroftpharmacy.co.uk",
  "ayp-healthcare": "https://uk.trustpilot.com/review/ayp.healthcare",
  "bolt-pharmacy": "https://uk.trustpilot.com/review/boltpharmacy.co.uk",
  "boots-online-doctor": "https://www.trustpilot.com/review/onlinedoctor.boots.com",
  chequp: "https://uk.trustpilot.com/review/chequp.com",
  click2pharmacy: "https://uk.trustpilot.com/review/click2pharmacy.co.uk",
  "cloud-pharmacy": "https://uk.trustpilot.com/review/www.cloudpharmacy.co.uk",
  curate: "https://uk.trustpilot.com/review/curatehealth.co.uk",
  curely: "https://uk.trustpilot.com/review/curely.co.uk",
  "cuva-health": "https://www.trustpilot.com/review/cuvahealth.co.uk",
  dotor: "https://www.trustpilot.com/review/dotor.co.uk",
  "dr-weightmans": "https://www.trustpilot.com/review/drweightmans.com",
  "e-surgery": "https://uk.trustpilot.com/review/e-surgery.com",
  envigore: "https://www.trustpilot.com/review/envigore.com",
  farmeci: "https://uk.trustpilot.com/review/www.farmeci.com",
  "fella-health": "https://uk.trustpilot.com/review/fellahealth.com",
  genmeds: "https://uk.trustpilot.com/review/genmeds.co.uk",
  "get-a-drip": "https://uk.trustpilot.com/review/getadrip.shop",
  getweightloss: "https://uk.trustpilot.com/review/getweightloss.co.uk",
  "goodbody-clinic": "https://uk.trustpilot.com/review/goodbodyclinic.com",
  "happy-pharmacy": "https://www.trustpilot.com/review/happypharmacy.co.uk",
  "hey-slim": "https://www.trustpilot.com/review/heyslim.co.uk",
  "iq-doctor": "https://uk.trustpilot.com/review/iqdoctor.co.uk",
  "jood-life": "https://www.trustpilot.com/review/joodlife.com",
  juniper: "https://uk.trustpilot.com/review/myjuniper.co.uk",
  "live-well-weight-loss":
    "https://www.trustpilot.com/review/livewellweightloss.co.uk",
  "lloyds-pharmacy-online-doctor":
    "https://uk.trustpilot.com/review/onlinedoctor.lloydspharmacy.com",
  "lotus-weight-loss": "https://uk.trustpilot.com/review/lotusweightloss.co.uk",
  "manchester-chemist": "https://uk.trustpilot.com/review/manchesterchemist.com",
  medexpress: "https://uk.trustpilot.com/review/www.medexpress.co.uk",
  medhut: "https://uk.trustpilot.com/review/medhut.co.uk",
  "medicine-marketplace":
    "https://www.trustpilot.com/review/medicinemarketplace.com",
  medino: "https://uk.trustpilot.com/review/medino.com",
  "msh-weight-loss": "https://uk.trustpilot.com/review/mshweightloss.co.uk",
  "my-london-pharmacy": "https://uk.trustpilot.com/review/mylondonpharmacy.co.uk",
  "next-script": "https://uk.trustpilot.com/review/nextscript.co.uk",
  "nulife-pharmacy": "https://www.trustpilot.com/review/thenulife.com",
  numan: "https://uk.trustpilot.com/review/numan.com",
  onlinemeds: "https://www.trustpilot.com/review/onlinemeds.co.uk",
  oushk: "https://uk.trustpilot.com/review/oushkpharmacy.com",
  "pharmacy-advance": "https://uk.trustpilot.com/review/pharmacyadvance.co.uk",
  "pharmacy-express": "https://www.trustpilot.com/review/pharmacy-express.co.uk",
  pharmacy2u: "https://uk.trustpilot.com/review/www.pharmacy2u.co.uk",
  pharmica: "https://uk.trustpilot.com/review/pharmica.co.uk",
  pharmulous: "https://uk.trustpilot.com/review/pharmulous.co.uk",
  pills2u: "https://www.trustpilot.com/review/pills2u.co.uk",
  pillsorted: "https://uk.trustpilot.com/review/pillsorted.com",
  pillsphere: "https://uk.trustpilot.com/review/pillsphere.com",
  quickmeds: "https://uk.trustpilot.com/review/quickmeds.co.uk",
  "second-nature": "https://uk.trustpilot.com/review/secondnature.io",
  shape8: "https://www.trustpilot.com/review/shape8.com",
  "simple-online-pharmacy":
    "https://uk.trustpilot.com/review/simpleonlinepharmacy.co.uk",
  "slimming-direct": "https://uk.trustpilot.com/review/slimmingdirect.co.uk",
  "skin-and-shape": "https://uk.trustpilot.com/review/skinandshape.co.uk",
  "superdrug-online-doctor":
    "https://uk.trustpilot.com/review/onlinedoctor.superdrug.com",
  "swift-doctor": "https://www.trustpilot.com/review/swift-doctor.com",
  "swift-medi": "https://uk.trustpilot.com/review/swiftmedi.co.uk",
  "care-pharmacy": "https://uk.trustpilot.com/review/thecarepharmacy.com",
  "the-family-chemist": "https://uk.trustpilot.com/review/thefamilychemist.co.uk",
  "the-independent-pharmacy":
    "https://uk.trustpilot.com/review/www.theindependentpharmacy.co.uk",
  tribelle: "https://uk.trustpilot.com/review/tribelle.co.uk",
  voy: "https://uk.trustpilot.com/review/www.joinvoy.com",
  "well-pharmacy": "https://uk.trustpilot.com/review/www.well.co.uk",
  weprescribe: "https://uk.trustpilot.com/review/weprescribe.co.uk",
  yourpharmacy: "https://uk.trustpilot.com/review/yourpharmacy.uk",
  zava: "https://uk.trustpilot.com/review/zavamed.com/uk",
};

const HIDDEN_MOUNJARO_COMPARE_PROVIDER_IDS = new Set([
  "cloud-pharmacy",
  "fella-health",
  "quickmeds",
]);

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
    .filter((p) => !HIDDEN_MOUNJARO_COMPARE_PROVIDER_IDS.has(p.id))
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
  return sortProvidersByName(getWegovyStore().providers);
}

/** Full Wegovy list for admin (A–Z by pharmacy name). */
export function readWegovyCompareProvidersAdmin(): WegovyUkProviderCompare[] {
  return sortProvidersByName(getWegovyStore().providers);
}

export function getMounjaroLastUpdatedLabel(): string {
  return getMounjaroStore().lastUpdated;
}

export function getWegovyLastUpdatedLabel(): string {
  return getWegovyStore().lastUpdated;
}
