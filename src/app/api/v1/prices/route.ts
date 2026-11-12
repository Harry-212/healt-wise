import {
  getLivePriceCheckLabels,
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "@/lib/data/compare-live";
import { getProvider } from "@/lib/data/providers";
import { PRICE_CHECK_DATE_LONG, PRICE_CHECK_DATE_SHORT } from "@/lib/data/price-check";
import {
  checkRateLimit,
  getClientIp,
  type RateLimitResult,
} from "@/lib/api/rate-limiter";
import type { MounjaroUkProviderCompare } from "@/lib/data/mounjaro-uk-compare-providers";
import type { WegovyUkProviderCompare } from "@/lib/data/wegovy-uk-compare-providers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const VALID_MEDICINES = ["mounjaro", "wegovy"] as const;
type ValidMedicine = (typeof VALID_MEDICINES)[number];

const MOUNJARO_DOSES = ["2.5mg", "5mg", "7.5mg", "10mg", "12.5mg", "15mg"] as const;
const WEGOVY_DOSES = ["0.25mg", "0.5mg", "1mg", "1.7mg", "2.4mg", "7.2mg"] as const;

export interface PublicPriceProvider {
  id: string;
  name: string;
  gphcRegNo: string;
  rating: number;
  deliveryNote: string;
  /** Lowest delivery charge in GBP parsed from deliveryNote; 0 = free, null = see deliveryNote. */
  deliveryFeeFromGbp: number | null;
  consultationIncluded: boolean;
  priceCheckDate: string;
  updatedLabel: string;
  headlineFrom: number;
  prices: Record<string, number | null>;
  offers: Array<{
    kind: string;
    label?: string;
    code?: string;
    summary: string;
    appliesTo?: string;
  }>;
  trustpilotUrl?: string;
  notes?: string;
}

// In-memory response cache to protect against rapid repeat processing
interface CacheEntry {
  cachedAt: number;
  payload: Record<string, unknown>;
}
const responseCache = new Map<string, CacheEntry>();
const CACHE_TTL_MS = 60_000; // 60 seconds

/**
 * Browser access (CORS) is limited to the sister site for now. Server-to-server
 * calls are not affected by CORS. Add origins here to open the feed further.
 */
const ALLOWED_ORIGINS: readonly string[] = [
  "https://pencompare.co.uk",
  "https://www.pencompare.co.uk",
];

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get("origin");
  return origin && ALLOWED_ORIGINS.includes(origin)
    ? { "Access-Control-Allow-Origin": origin, Vary: "Origin" }
    : { Vary: "Origin" };
}

/** Error responses must never be stored by a shared cache. */
function errorHeaders(request: Request, rateLimit: RateLimitResult): Record<string, string> {
  return { ...buildHeaders(request, rateLimit), "Cache-Control": "no-store" };
}

function buildHeaders(request: Request, rateLimit: RateLimitResult): Record<string, string> {
  return {
    ...corsHeaders(request),
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
    "X-RateLimit-Limit": String(rateLimit.limit),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
    "X-RateLimit-Reset": String(rateLimit.reset),
  };
}

function parseDeliveryFeeFrom(note: string): number | null {
  const amounts = [...note.matchAll(/£\s?(\d+(?:\.\d{1,2})?)/g)].map((m) => Number(m[1]));
  if (amounts.length > 0) return Math.min(...amounts);
  return /\bfree\b/i.test(note) ? 0 : null;
}

function sanitizeProvider(
  p: MounjaroUkProviderCompare | WegovyUkProviderCompare,
  dosageFilter?: string,
): PublicPriceProvider {
  const providerMeta = getProvider(p.id);
  const rawPrices = p.prices as Record<string, number | null>;
  let prices = rawPrices;

  if (dosageFilter && Object.prototype.hasOwnProperty.call(rawPrices, dosageFilter)) {
    prices = { [dosageFilter]: rawPrices[dosageFilter] ?? null };
  }

  return {
    id: p.id,
    name: p.name,
    gphcRegNo: p.gphcRegNo,
    rating: p.rating,
    deliveryNote: p.deliveryNote,
    deliveryFeeFromGbp: parseDeliveryFeeFrom(p.deliveryNote),
    consultationIncluded: p.consultationIncluded,
    priceCheckDate: PRICE_CHECK_DATE_LONG,
    updatedLabel: p.updatedLabel || PRICE_CHECK_DATE_SHORT,
    headlineFrom: p.headlineFrom,
    prices,
    offers: (providerMeta?.offers ?? []).map((o) => ({
      kind: o.kind,
      ...(o.label ? { label: o.label } : {}),
      ...(o.code ? { code: o.code } : {}),
      summary: o.summary,
      ...(o.appliesTo ? { appliesTo: o.appliesTo } : {}),
    })),
    ...(p.trustpilotUrl ? { trustpilotUrl: p.trustpilotUrl } : {}),
    ...(p.notes ? { notes: p.notes } : {}),
  };
}

/**
 * GET /api/v1/prices
 * 
 * Central pricing feed API for Healthwise360 and sister websites (e.g. pencompare.co.uk).
 * Provides live, verified standard retail prices across all active partner pharmacies.
 *
 * Query params:
 *   - medicine: "mounjaro" | "wegovy" (optional, returns both if omitted)
 *   - dosage: pen strength, e.g. "2.5mg" or "0.25mg" (optional)
 */
export async function GET(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip);

  if (!rateLimit.success) {
    return Response.json(
      {
        success: false,
        error: {
          code: "RATE_LIMIT_EXCEEDED",
          message: "Too many requests. Please slow down and try again later.",
        },
      },
      {
        status: 429,
        headers: {
          ...corsHeaders(request),
          "Cache-Control": "no-store",
          "Retry-After": String(rateLimit.retryAfter ?? 60),
          "X-Robots-Tag": "noindex, nofollow, noarchive",
          "X-RateLimit-Limit": String(rateLimit.limit),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimit.reset),
        },
      },
    );
  }

  const headers = buildHeaders(request, rateLimit);
  const url = new URL(request.url);
  const rawMedicine = url.searchParams.get("medicine");
  const medicine = rawMedicine?.trim().toLowerCase();
  const rawDosage = url.searchParams.get("dosage");
  const dosage = rawDosage?.trim().toLowerCase();

  // Validate medicine if provided
  if (medicine && !VALID_MEDICINES.includes(medicine as ValidMedicine)) {
    return Response.json(
      {
        success: false,
        error: {
          code: "INVALID_MEDICINE",
          message: `Invalid medicine parameter '${rawMedicine}'. Supported values are 'mounjaro' and 'wegovy'.`,
        },
      },
      {
        status: 400,
        headers: errorHeaders(request, rateLimit),
      },
    );
  }

  // Validate dosage if provided
  if (dosage) {
    const allowedDoses: readonly string[] =
      medicine === "mounjaro"
        ? MOUNJARO_DOSES
        : medicine === "wegovy"
          ? WEGOVY_DOSES
          : [...MOUNJARO_DOSES, ...WEGOVY_DOSES];

    if (!allowedDoses.includes(dosage)) {
      return Response.json(
        {
          success: false,
          error: {
            code: "INVALID_DOSAGE",
            message: `Invalid dosage parameter '${rawDosage}'. Supported dosages${
              medicine ? ` for ${medicine}` : ""
            }: ${allowedDoses.join(", ")}.`,
          },
        },
        {
          status: 400,
          headers: errorHeaders(request, rateLimit),
        },
      );
    }
  }

  // Check in-memory cache
  const cacheKey = `${medicine || "all"}:${dosage || "all"}`;
  const now = Date.now();
  const cached = responseCache.get(cacheKey);
  if (cached && now - cached.cachedAt < CACHE_TTL_MS) {
    return Response.json(cached.payload, {
      status: 200,
      headers,
    });
  }

  const lastUpdated = getLivePriceCheckLabels();
  // A dosage belongs to exactly one medicine, so it must only filter (and
  // only return) that medicine's providers.
  const dosageMedicine: ValidMedicine | undefined = !dosage
    ? undefined
    : (MOUNJARO_DOSES as readonly string[]).includes(dosage)
      ? "mounjaro"
      : "wegovy";
  const mounjaroProviders = getMounjaroCompareProviders().map((p) =>
    sanitizeProvider(p, dosageMedicine === "mounjaro" ? dosage : undefined),
  );
  const wegovyProviders = getWegovyCompareProviders().map((p) =>
    sanitizeProvider(p, dosageMedicine === "wegovy" ? dosage : undefined),
  );
  const wantMounjaro = medicine ? medicine === "mounjaro" : dosageMedicine !== "wegovy";
  const wantWegovy = medicine ? medicine === "wegovy" : dosageMedicine !== "mounjaro";

  const payload: Record<string, unknown> = {
    success: true,
    meta: {
      source: "Healthwise360 Central Pricing API",
      apiVersion: "v1",
      pricingPolicy: "Standard retail prices. Promotional offers listed separately.",
      priceCheckDate: PRICE_CHECK_DATE_LONG,
      lastUpdated,
      generatedAt: new Date().toISOString(),
    },
  };

  payload.data = {
    ...(wantMounjaro ? { mounjaro: mounjaroProviders } : {}),
    ...(wantWegovy ? { wegovy: wegovyProviders } : {}),
  };

  // Store in cache
  responseCache.set(cacheKey, { cachedAt: now, payload });

  return Response.json(payload, {
    status: 200,
    headers,
  });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders(request),
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "X-Robots-Tag": "noindex, nofollow, noarchive",
    },
  });
}
