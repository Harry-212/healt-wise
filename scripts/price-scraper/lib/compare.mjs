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
 * Price after a partner code. This is a SEPARATE, labelled figure (`codePrice`):
 * it never replaces the standard price and never feeds ranking or "lowest
 * price" (client rule 2026-10-23). `rule` is { type: "percent" | "amount", value, code }.
 */
export function applyAffiliateDiscount(standard, rule) {
  if (standard == null || !rule) return standard;
  const discounted = rule.type === "percent" ? standard * (1 - rule.value / 100) : standard - rule.value;
  return Math.round(discounted * 100) / 100;
}

/**
 * One row per provider × medication × dose. `action` is what the monthly run
 * WOULD do (the prototype changes nothing):
 *   unchanged – the price the site should show equals ours
 *   update    – pharmacy price read with high confidence, agrees with comparators (or none to check)
 *   review    – a price was read but is medium confidence or >5% off the comparators
 *   manual    – no usable pharmacy price; keep ours and check by hand
 * Comparators are matched against the STANDARD price. `sitePrice` is always the
 * standard one-off price; an affiliate code price is carried separately as
 * `codePrice`. The data store currently holds code-discounted numbers for
 * affiliate partners, so those rows are never auto-updated: they go to `review`
 * until the store has separate standard and code-price fields.
 */
export function compareAll({ current, pharmacyReads, comparatorRows, discounts = {} }) {
  const rows = [];
  for (const medication of Object.keys(DOSES)) {
    for (const provider of current[medication].providers) {
      const read = pharmacyReads.get(provider.id)?.[medication] ?? { status: "not-configured", doses: {} };
      const rule = discounts[provider.id] ?? null;
      for (const dose of DOSES[medication]) {
        const cur = provider.prices[dose];
        const ph = read.doses?.[dose] ?? null;
        const comps = comparatorRows.filter((r) => r.ourId === provider.id && r.medication === medication && r.dose === dose);
        const consensus = median(comps.map((c) => c.standard));
        const standard = ph && ph.confidence !== "low" ? ph.price : null;
        const sitePrice = standard;
        const codePrice = applyAffiliateDiscount(standard, rule);
        const delta = standard != null && consensus != null ? (standard - consensus) / consensus : null;
        const discrepancy = delta != null && Math.abs(delta) > DISCREPANCY_THRESHOLD;
        const curNum = typeof cur === "number" && cur > 0 ? cur : null;

        let action;
        if (standard == null) action = "manual";
        else if (discrepancy || ph.confidence !== "high" || rule) action = "review";
        else if (curNum != null && Math.abs(sitePrice - curNum) < 0.005) action = "unchanged";
        else action = "update";

        rows.push({
          providerId: provider.id,
          provider: provider.name,
          medication,
          dose,
          current: cur ?? null,
          currentCheckedLabel: provider.updatedLabel,
          pharmacy: ph?.price ?? null,
          sitePrice,
          codePrice: rule ? codePrice : null,
          affiliateDiscount: rule,
          reviewReason: rule ? "affiliate: stored price may be code-discounted; standard and code price must be stored separately" : null,
          pharmacyConfidence: ph?.confidence ?? null,
          pharmacyMethod: ph?.method ?? null,
          pharmacyStatus: read.status,
          pharmacyReason: read.reason ?? null,
          pharmacyUrl: read.url ?? null,
          comparators: comps.map((c) => ({ site: c.site, standard: c.standard, promo: c.promo, via: c.via })),
          consensus,
          deltaVsConsensus: delta == null ? null : Math.round(delta * 1000) / 10,
          changeVsCurrent: sitePrice != null && curNum != null ? Math.round((sitePrice - curNum) * 100) / 100 : null,
          action,
        });
      }
    }
  }
  return rows;
}
