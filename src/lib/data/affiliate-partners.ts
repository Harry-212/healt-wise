export type AffiliatePartnerInfo = {
  id: string;
  name: string;
  badgeLabel: string;
  code?: string;
  secondaryCode?: string;
  affiliateUrl: string;
  ctaLabel: string;
  perkSummary?: string;
  /** Featured-partner card wording when a generic label and fixed "from" price are used instead of the medicine name and ranked price. */
  featuredPriceLabel?: string;
  featuredFromPrice?: string;
};

/**
 * The 6 verified commercial affiliate pharmacies that have an active
 * affiliate tracking link and/or voucher discount code.
 */
export const AFFILIATE_PARTNER_IDS = new Set<string>([
  "pharmacy-me",
  "reach-online-pharmacy",
  "dosedirect",
  "i-prescribe",
  "shemed",
]);

export const AFFILIATE_PARTNERS_MAP: Record<string, AffiliatePartnerInfo> = {
  "pharmacy-me": {
    id: "pharmacy-me",
    name: "Pharmacy + Me",
    badgeLabel: "Featured Partner",
    code: "hw360",
    affiliateUrl: "https://pharmacyme.co.uk/go/hw360",
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
  "i-prescribe": {
    id: "i-prescribe",
    name: "i-Prescribe",
    badgeLabel: "Featured Partner",
    code: "First10",
    secondaryCode: "HW360",
    affiliateUrl: "/go/i-prescribe",
    ctaLabel: "Claim Deal",
    perkSummary: "Code First10 for £10 off first order · Code HW360 on repeat orders",
  },
  shemed: {
    id: "shemed",
    name: "SheMed",
    badgeLabel: "Featured Partner",
    code: "HEALTH20",
    affiliateUrl: "/go/shemed",
    featuredPriceLabel: "Treatment",
    featuredFromPrice: "£179",
    ctaLabel: "Claim Deal",
    perkSummary: "20% off first order with code HEALTH20 · Free blood test & delivery",
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
