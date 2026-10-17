export type AffiliatePartnerInfo = {
  id: string;
  name: string;
  badgeLabel: string;
  code?: string;
  affiliateUrl: string;
  ctaLabel: string;
  perkSummary?: string;
};

/**
 * The 4 verified commercial affiliate pharmacies that have an active
 * affiliate tracking link and/or voucher discount code.
 */
export const AFFILIATE_PARTNER_IDS = new Set<string>([
  "pharmacy-me",
  "reach-online-pharmacy",
  "dosedirect",
  "slinic",
]);

export const AFFILIATE_PARTNERS_MAP: Record<string, AffiliatePartnerInfo> = {
  "pharmacy-me": {
    id: "pharmacy-me",
    name: "Pharmacy + Me",
    badgeLabel: "Featured Partner",
    code: "hw360",
    affiliateUrl: "https://pharmacyme.co.uk/go/healthwise360",
    ctaLabel: "Claim Deal",
    perkSummary: "Use code hw360",
  },
  "reach-online-pharmacy": {
    id: "reach-online-pharmacy",
    name: "Reach Online Pharmacy",
    badgeLabel: "Featured Partner",
    code: "Welcome10health",
    affiliateUrl: "https://reachonlinepharmacy.com/weight-loss/",
    ctaLabel: "Claim Deal",
    perkSummary: "Use code Welcome10health",
  },
  dosedirect: {
    id: "dosedirect",
    name: "DoseDirect",
    badgeLabel: "Featured Partner",
    code: undefined,
    affiliateUrl:
      "https://questionnaire.semble.io/eb4dacb08b394c9c1a9ea4f4d0be2cb1a9c4cd2c",
    ctaLabel: "Start Consultation",
    perkSummary: "Free delivery included",
  },
  slinic: {
    id: "slinic",
    name: "Slinic",
    badgeLabel: "Featured Partner",
    code: undefined,
    affiliateUrl:
      "https://slinic.co.uk/condition/weight-loss/?utm_source=healthwise&utm_medium=referral&utm_campaign=weight-loss",
    ctaLabel: "Visit Slinic",
    perkSummary: "Free consultation included",
  },
};

export function isAffiliatePartner(id: string): boolean {
  return AFFILIATE_PARTNER_IDS.has(id);
}

export function getAffiliatePartnerInfo(
  id: string,
): AffiliatePartnerInfo | undefined {
  return AFFILIATE_PARTNERS_MAP[id];
}
