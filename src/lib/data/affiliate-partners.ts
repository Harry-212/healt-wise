import { activeProviders, type ProviderRecord } from "./providers.ts";

export type AffiliatePartnerInfo = {
  id: string;
  name: string;
  badgeLabel: string;
  code?: string;
  secondaryCode?: string;
  affiliateUrl: string;
  ctaLabel: string;
  perkSummary?: string;
};

function toPartnerInfo(p: ProviderRecord): AffiliatePartnerInfo {
  const a = p.affiliate;
  return {
    id: p.id,
    name: p.name,
    badgeLabel: a.badgeLabel,
    code: a.code,
    secondaryCode: a.secondaryCode,
    affiliateUrl: a.outboundUrl,
    ctaLabel: a.ctaLabel,
    perkSummary: a.perkSummary,
  };
}

/**
 * The active commercial affiliate partners, derived from the central provider
 * data (`providers.ts`). Do not list partners here: set `active` there.
 */
export const AFFILIATE_PARTNER_IDS = new Set<string>(
  activeProviders().map((p) => p.id),
);

export const AFFILIATE_PARTNERS_MAP: Record<string, AffiliatePartnerInfo> =
  Object.fromEntries(activeProviders().map((p) => [p.id, toPartnerInfo(p)]));

export function isAffiliatePartner(id: string): boolean {
  return AFFILIATE_PARTNER_IDS.has(id);
}

export function getAffiliatePartnerInfo(
  id: string,
): AffiliatePartnerInfo | undefined {
  return AFFILIATE_PARTNERS_MAP[id];
}
