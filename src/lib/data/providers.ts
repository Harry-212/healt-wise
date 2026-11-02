/**
 * Central provider-partner data: the one place a partner is added, paused or
 * removed. Everything that lists partners (affiliate registry, `/pharmacies`
 * directory + profile routes, sitemap, llms.txt, footer, cross-links, GPhC and
 * Trustpilot lookups, `/go/<id>` redirects, partner counts, click tracking) is
 * derived from `PROVIDERS` below.
 *
 * Keep this file dependency-free (no path aliases, no server-only imports): it
 * is read by `next.config.ts` and by the plain-Node SEO tests.
 *
 * Scope: identity, links, regulator numbers and the affiliate offer. Retail and
 * promotional prices, delivery fees and price-check dates still live in the
 * compare data (`mounjaro-uk-compare-providers.ts`, `wegovy-uk-compare-providers.ts`,
 * `pill-price-rows.ts`) and move here in a follow-up.
 *
 * No paid or featured placement exists. Nothing in this file (or anything that
 * reads it) may rank or order providers by commission.
 */

/**
 * A discount code, introductory price or other promotion. Offers are stored and
 * shown separately from retail prices: they carry no price fields, and no table,
 * ranking or "from" price may read them. The standard retail price is the only
 * price used to compare providers.
 */
export type ProviderOffer = {
  kind: "discount-code" | "introductory" | "subscription";
  /** Short label for the code box, e.g. "New customers". */
  label?: string;
  code?: string;
  /** The offer as shown on cards, e.g. "Code First10 for £10 off first order". */
  summary: string;
  /**
   * Which orders the offer applies to. Leave unset until the provider's terms
   * are confirmed; `offersWithUnconfirmedTerms()` lists those for follow-up.
   */
  appliesTo?: "first-order" | "repeat-orders";
};

export type ProviderRecord = {
  /** URL slug: profile page is `/pharmacies/<id>`; also the tracking provider id. */
  id: string;
  name: string;
  /**
   * Single switch for inclusion. `false` removes the provider from the
   * directory, tables, counts, schema, sitemap, llms.txt and affiliate tracking.
   */
  active: boolean;
  /** Logo file under `/public`. Omit when none exists: the page shows a text wordmark. */
  logoSrc?: string;
  logoAlt?: string;
  /** GPhC premises registration number. */
  gphcNumber: string;
  /**
   * Standard delivery fee in pounds (0 = free), used only to order by total
   * price. Taken from the delivery note shown in the compare tables (the lowest
   * listed standard tracked fee); Harry confirms exact fees with Task 99.
   */
  standardDeliveryFee: number;
  trustpilotUrl?: string;
  affiliate: {
    /** URL every outbound button uses: a cloaked `/go/<id>` path or a direct link. */
    outboundUrl: string;
    /**
     * Where `/go/<id>` redirects to. Required when `outboundUrl` is a
     * `/go/` path; the redirect is generated from it.
     */
    destinationUrl?: string;
    /**
     * Separate price-evidence URL. Set only when the affiliate destination does
     * not display the verified retail price; otherwise leave unset and the
     * affiliate URL is the evidence.
     */
    priceSourceUrl?: string;
    ctaLabel: string;
    badgeLabel: string;
    /** Non-promotional inclusions shown beside the offers, e.g. "Free delivery included". */
    includedExtras?: string[];
  };
  /** Promotions, kept apart from retail prices. */
  offers: ProviderOffer[];
};

export const PROVIDERS: readonly ProviderRecord[] = [
  {
    id: "pharmacy-me",
    name: "Pharmacy + Me",
    active: true,
    logoSrc: "/logo pharmacy/pharmacy-me.webp",
    gphcNumber: "9012604",
    standardDeliveryFee: 4.99,
    trustpilotUrl: "https://uk.trustpilot.com/review/pharmacyme.co.uk",
    affiliate: {
      outboundUrl: "https://pharmacyme.co.uk/go/hw360",
      ctaLabel: "Claim Deal",
      badgeLabel: "Featured Partner",
    },
    offers: [
      { kind: "discount-code", code: "hw360", summary: "Use code hw360" },
    ],
  },
  {
    id: "reach-online-pharmacy",
    name: "Reach Online Pharmacy",
    active: true,
    logoSrc: "/logo pharmacy/Reach Online Pharmacy.webp",
    gphcNumber: "1093332",
    standardDeliveryFee: 4.99,
    trustpilotUrl: "https://uk.trustpilot.com/review/reachonlinepharmacy.com",
    affiliate: {
      outboundUrl: "https://reachonlinepharmacy.com/weight-loss/",
      ctaLabel: "Claim Deal",
      badgeLabel: "Featured Partner",
    },
    offers: [
      {
        kind: "discount-code",
        code: "Welcome10health",
        summary: "Use code Welcome10health",
      },
    ],
  },
  {
    id: "dosedirect",
    name: "DoseDirect",
    active: true,
    logoSrc: "/logo pharmacy/DoseDirect.webp",
    gphcNumber: "9012841",
    standardDeliveryFee: 0,
    trustpilotUrl: "https://uk.trustpilot.com/review/dosedirect.co.uk",
    affiliate: {
      outboundUrl:
        "https://questionnaire.semble.io/eb4dacb08b394c9c1a9ea4f4d0be2cb1a9c4cd2c",
      ctaLabel: "Start Consultation",
      badgeLabel: "Featured Partner",
      includedExtras: ["Free delivery included"],
    },
    offers: [],
  },
  {
    id: "i-prescribe",
    name: "i-Prescribe",
    active: true,
    logoSrc: "/logo pharmacy/i-prescribe.webp",
    gphcNumber: "9012850",
    standardDeliveryFee: 4.99,
    trustpilotUrl: "https://uk.trustpilot.com/review/i-prescribe.co.uk",
    affiliate: {
      outboundUrl: "/go/i-prescribe",
      destinationUrl:
        "https://i-prescribe.co.uk/pages/pom?formtype=weight-loss&ref=HW360&utm_source=healthwise360&utm_medium=referral&utm_campaign=weight-loss-referral",
      ctaLabel: "Claim Deal",
      badgeLabel: "Featured Partner",
    },
    offers: [
      {
        kind: "discount-code",
        label: "New customers",
        code: "First10",
        summary: "Code First10 for £10 off first order",
        appliesTo: "first-order",
      },
      {
        kind: "discount-code",
        label: "Returning customers",
        code: "HW360",
        summary: "Code HW360 on repeat orders",
        appliesTo: "repeat-orders",
      },
    ],
  },
  {
    id: "shemed",
    name: "SheMed",
    active: true,
    logoSrc: "/logo pharmacy/shemed.webp",
    gphcNumber: "9012578",
    standardDeliveryFee: 0,
    trustpilotUrl: "https://uk.trustpilot.com/review/shemed.co.uk",
    affiliate: {
      outboundUrl: "/go/shemed",
      destinationUrl:
        "https://www.shemed.co.uk/treatment?via=healthwise360&code=HEALTH20",
      ctaLabel: "Claim Deal",
      badgeLabel: "Featured Partner",
      includedExtras: ["Free blood test & delivery"],
    },
    offers: [
      {
        kind: "discount-code",
        code: "HEALTH20",
        summary: "20% off first order with code HEALTH20",
        appliesTo: "first-order",
      },
    ],
  },
  {
    id: "solira",
    name: "Solira",
    active: true,
    gphcNumber: "9013213",
    standardDeliveryFee: 3.99,
    trustpilotUrl: "https://uk.trustpilot.com/review/withsolira.com",
    affiliate: {
      outboundUrl: "/go/solira",
      destinationUrl:
        "https://withsolira.com/treatments/mounjaro?utm_source=healthwise360.co.uk&utm_medium=affiliate&utm_campaign=healthwise360_trial",
      ctaLabel: "Start Consultation",
      badgeLabel: "Featured Partner",
      includedExtras: ["Pharmacist-led care", "Tracked chilled delivery"],
    },
    offers: [],
  },
];

/** Offer summaries then included extras, joined for cards: "Code X for £10 off first order · Free delivery included". */
export function offerPerkSummary(p: ProviderRecord): string | undefined {
  const parts = [...p.offers.map((o) => o.summary), ...(p.affiliate.includedExtras ?? [])];
  return parts.length ? parts.join(" · ") : undefined;
}

/** The provider's discount codes in listed order (first is the main code). */
export function offerCodes(p: ProviderRecord): string[] {
  return p.offers.flatMap((o) => (o.code ? [o.code] : []));
}

/** Visible terms line for an offer. Never states a condition the provider has not confirmed. */
export function offerTermsText(o: ProviderOffer): string {
  if (o.appliesTo === "first-order") return "First order only. Confirm the terms at checkout.";
  if (o.appliesTo === "repeat-orders") return "Repeat orders only. Confirm the terms at checkout.";
  return "Confirm the terms at checkout.";
}

/** Offers whose first-order / repeat-order terms are not yet confirmed: the follow-up list for Harry. */
export function offersWithUnconfirmedTerms(): { providerId: string; code?: string }[] {
  return activeProviders().flatMap((p) =>
    p.offers.filter((o) => !o.appliesTo).map((o) => ({ providerId: p.id, code: o.code })),
  );
}

/** Props the pharmacy profile "Discounts & offers" box needs, from the provider's offers. */
export function dossierOfferProps(id: string): {
  discountCode: string;
  hasDiscount: boolean;
  discountCodeLabel?: string;
  secondaryDiscount?: { label: string; code: string };
  offerTerms: string[];
} {
  const p = getProvider(id);
  const offers = p?.offers.filter((o) => o.code) ?? [];
  const [main, second] = offers;
  return {
    discountCode: main?.code ?? "",
    hasDiscount: offers.length > 0,
    discountCodeLabel: main?.label,
    secondaryDiscount: second?.code ? { label: second.label ?? "Code", code: second.code } : undefined,
    offerTerms: offers.map((o) => `${o.code}: ${offerTermsText(o)}`),
  };
}

/** Standard delivery fee for ordering by total price; null when the provider is unknown. */
export function standardDeliveryFee(id: string): number | null {
  return getProvider(id)?.standardDeliveryFee ?? null;
}

/** Case-insensitive alphabetical order by name: the only default ordering. */
function byName(a: ProviderRecord, b: ProviderRecord): number {
  return a.name.localeCompare(b.name, "en-GB", { sensitivity: "base" });
}

/** Providers currently included on the site, A–Z. */
export function activeProviders(): ProviderRecord[] {
  return PROVIDERS.filter((p) => p.active).sort(byName);
}

/** Exact number of active partners. Use this for every "N partners/pharmacies" claim. */
export function activeProviderCount(): number {
  return PROVIDERS.filter((p) => p.active).length;
}

export function getProvider(id: string): ProviderRecord | undefined {
  return PROVIDERS.find((p) => p.id === id);
}

export function getActiveProvider(id: string): ProviderRecord | undefined {
  const p = getProvider(id);
  return p?.active ? p : undefined;
}

/** `/go/<id>` -> affiliate destination, generated for every active cloaked provider. */
export function affiliateRedirects(): { source: string; destination: string }[] {
  return activeProviders().flatMap((p) =>
    p.affiliate.outboundUrl.startsWith("/go/") && p.affiliate.destinationUrl
      ? [{ source: p.affiliate.outboundUrl, destination: p.affiliate.destinationUrl }]
      : [],
  );
}

/**
 * Data problems that would break the site if a record were added carelessly.
 * Returns an empty list when the table is consistent; the SEO tests assert it.
 */
export function validateProviders(
  providers: readonly ProviderRecord[] = PROVIDERS,
): string[] {
  const problems: string[] = [];
  const seen = new Set<string>();
  for (const p of providers) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.id)) problems.push(`${p.id}: id must be a lowercase slug`);
    if (seen.has(p.id)) problems.push(`${p.id}: duplicate id`);
    seen.add(p.id);
    if (!p.name.trim()) problems.push(`${p.id}: name is empty`);
    if (!(p.standardDeliveryFee >= 0)) problems.push(`${p.id}: standardDeliveryFee must be 0 or more`);
    if (!/^\d{6,7}$/.test(p.gphcNumber)) problems.push(`${p.id}: gphcNumber must be 6-7 digits`);
    const allowedOfferKeys = new Set(["kind", "label", "code", "summary", "appliesTo"]);
    for (const o of p.offers) {
      for (const key of Object.keys(o)) {
        if (!allowedOfferKeys.has(key)) problems.push(`${p.id}: offers may not carry "${key}" (offers hold no prices)`);
      }
      if (!o.summary.trim()) problems.push(`${p.id}: offer summary is empty`);
      if (o.kind === "discount-code" && !o.code?.trim()) problems.push(`${p.id}: discount-code offer needs a code`);
    }
    const out = p.affiliate.outboundUrl;
    if (out.startsWith("/go/")) {
      if (out !== `/go/${p.id}`) problems.push(`${p.id}: cloaked outboundUrl must be /go/${p.id}`);
      if (!p.affiliate.destinationUrl?.startsWith("https://"))
        problems.push(`${p.id}: /go/ outboundUrl needs an https destinationUrl`);
    } else if (!out.startsWith("https://")) {
      problems.push(`${p.id}: outboundUrl must be https or a /go/ path`);
    }
  }
  return problems;
}
