#!/usr/bin/env node
/**
 * One-off, targeted patch: sets DoseDirect's gphcRegNo to the verified
 * registration number (9012841 — confirmed live against
 * https://www.pharmacyregulation.org/registers/pharmacy/9012841, pharmacy
 * name "DoseDirect", status "Registered").
 *
 * Why this script exists instead of just editing mounjaro-uk-compare-providers.ts:
 * the live compare tables read from data/mounjaro-compare.json and
 * data/wegovy-compare.json (or COMPARE_DATA_DIR if set), which are seeded
 * ONCE from the .ts source and never overwritten by a code deploy after
 * that — "admin edits on the live site always win over code/seed deploys"
 * (see src/lib/data/compare-store.ts). So a code-only fix to the .ts file
 * only affects a brand-new environment that has never been seeded; it does
 * nothing for an already-running deployment. This script patches the
 * existing JSON store directly and ONLY the one field on the one provider —
 * every other field (prices, ratings, any other admin edit) is left
 * untouched.
 *
 * Idempotent: if gphcRegNo is already non-empty, it leaves it alone and
 * reports "already set" rather than overwriting a value someone else set.
 *
 * Usage: run on whichever machine/environment holds the live data directory
 * (set COMPARE_DATA_DIR to match that environment's config if it isn't the
 * default `<project>/data`):
 *   node scripts/data/patch-dosedirect-gphc.mjs
 */
import { getMounjaroStore, saveMounjaroStore } from "../../src/lib/data/compare-store.ts";

const VERIFIED_GPHC_REG_NO = "9012841";

function main() {
  const store = getMounjaroStore();
  const provider = store.providers.find((p) => p.id === "dosedirect");

  if (!provider) {
    console.error('No provider with id "dosedirect" found in the Mounjaro compare store. Nothing changed.');
    process.exitCode = 1;
    return;
  }

  if (provider.gphcRegNo?.trim()) {
    console.log(`dosedirect.gphcRegNo is already set to "${provider.gphcRegNo}" — leaving it unchanged.`);
    return;
  }

  provider.gphcRegNo = VERIFIED_GPHC_REG_NO;
  saveMounjaroStore(store);
  console.log(`dosedirect.gphcRegNo set to "${VERIFIED_GPHC_REG_NO}". This also fixes the Wegovy compare table, which derives gphcRegNo from this same Mounjaro provider record. No other field was touched.`);
}

main();
