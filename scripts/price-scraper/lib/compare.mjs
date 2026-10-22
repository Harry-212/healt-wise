import { DOSES } from "./doses.mjs";

/** Agreed with the client: >5% gap vs comparison sites needs a human look. */
export const DISCREPANCY_THRESHOLD = 0.05;

function median(nums) {
  if (nums.length === 0) return null;
  const s = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : Math.round(((s[mid - 1] + s[mid]) / 2) * 100) / 100;
}

/**
 * One row per provider × medication × dose. `action` is what the monthly run
 * WOULD do (the prototype changes nothing):
 *   unchanged – pharmacy price equals ours
 *   update    – pharmacy price read with high confidence, agrees with comparators (or none to check)
 *   review    – a price was read but is medium confidence or >5% off the comparators
 *   manual    – no usable pharmacy price; keep ours and check by hand
 */
export function compareAll({ current, pharmacyReads, comparatorRows }) {
  const rows = [];
  for (const medication of Object.keys(DOSES)) {
    for (const provider of current[medication].providers) {
      const read = pharmacyReads.get(provider.id)?.[medication] ?? { status: "not-configured", doses: {} };
      for (const dose of DOSES[medication]) {
        const cur = provider.prices[dose];
        const ph = read.doses?.[dose] ?? null;
        const comps = comparatorRows.filter((r) => r.ourId === provider.id && r.medication === medication && r.dose === dose);
        const consensus = median(comps.map((c) => c.standard));
        const proposed = ph && ph.confidence !== "low" ? ph.price : null;
        const delta = proposed != null && consensus != null ? (proposed - consensus) / consensus : null;
        const discrepancy = delta != null && Math.abs(delta) > DISCREPANCY_THRESHOLD;
        const curNum = typeof cur === "number" && cur > 0 ? cur : null;

        let action;
        if (proposed == null) action = "manual";
        else if (discrepancy || ph.confidence !== "high") action = "review";
        else if (curNum != null && Math.abs(proposed - curNum) < 0.005) action = "unchanged";
        else action = "update";

        rows.push({
          providerId: provider.id,
          provider: provider.name,
          medication,
          dose,
          current: cur ?? null,
          currentCheckedLabel: provider.updatedLabel,
          pharmacy: ph?.price ?? null,
          pharmacyConfidence: ph?.confidence ?? null,
          pharmacyMethod: ph?.method ?? null,
          pharmacyStatus: read.status,
          pharmacyReason: read.reason ?? null,
          pharmacyUrl: read.url ?? null,
          comparators: comps.map((c) => ({ site: c.site, standard: c.standard, promo: c.promo, via: c.via })),
          consensus,
          deltaVsConsensus: delta == null ? null : Math.round(delta * 1000) / 10,
          changeVsCurrent: proposed != null && curNum != null ? Math.round((proposed - curNum) * 100) / 100 : null,
          action,
        });
      }
    }
  }
  return rows;
}
