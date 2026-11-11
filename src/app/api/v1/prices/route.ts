import {
  getLivePriceCheckLabels,
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "@/lib/data/compare-live";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/v1/prices
 * 
 * Central pricing feed API for Healthwise360 and sister websites (e.g. pencompare.co.uk).
 * Provides live, verified dose-level pricing across all partner pharmacies.
 *
 * Query params:
 *   - medicine: "mounjaro" | "wegovy" (optional, returns both if omitted)
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const medicine = url.searchParams.get("medicine")?.toLowerCase();
  const lastUpdated = getLivePriceCheckLabels();

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
  };

  const payload: Record<string, unknown> = {
    success: true,
    meta: {
      source: "Healthwise360 Central Pricing API",
      apiVersion: "v1",
      lastUpdated,
      generatedAt: new Date().toISOString(),
    },
  };

  if (medicine === "mounjaro") {
    payload.data = {
      mounjaro: getMounjaroCompareProviders(),
    };
  } else if (medicine === "wegovy") {
    payload.data = {
      wegovy: getWegovyCompareProviders(),
    };
  } else {
    payload.data = {
      mounjaro: getMounjaroCompareProviders(),
      wegovy: getWegovyCompareProviders(),
    };
  }

  return Response.json(payload, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
