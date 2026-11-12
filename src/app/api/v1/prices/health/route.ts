import {
  getMounjaroCompareProviders,
  getWegovyCompareProviders,
} from "@/lib/data/compare-live";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EXPECTED_PROVIDERS = 6;

/**
 * GET /api/v1/prices/health
 *
 * Feed health check for uptime monitoring. Returns 200 when both price lists
 * are complete and valid, 503 with the failing checks otherwise. It reports
 * counts only and never changes prices or verification dates.
 */
export function GET() {
  const problems: string[] = [];
  let mounjaro = 0;
  let wegovy = 0;

  try {
    for (const [name, list] of [
      ["mounjaro", getMounjaroCompareProviders()],
      ["wegovy", getWegovyCompareProviders()],
    ] as const) {
      if (name === "mounjaro") mounjaro = list.length;
      else wegovy = list.length;
      if (list.length !== EXPECTED_PROVIDERS) {
        problems.push(`${name}: expected ${EXPECTED_PROVIDERS} providers, got ${list.length}`);
      }
      for (const p of list) {
        const values = Object.values(p.prices as Record<string, number | null>);
        if (!values.some((v) => typeof v === "number" && Number.isFinite(v) && v > 0)) {
          problems.push(`${name}/${p.id}: no valid price`);
        }
      }
    }
  } catch (err) {
    problems.push(`feed threw: ${err instanceof Error ? err.message : "unknown error"}`);
  }

  const ok = problems.length === 0;
  return Response.json(
    {
      status: ok ? "ok" : "failing",
      providers: { mounjaro, wegovy },
      priceCheckDate: PRICE_CHECK_DATE_LONG,
      ...(ok ? {} : { problems }),
    },
    {
      status: ok ? 200 : 503,
      headers: {
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex, nofollow, noarchive",
      },
    },
  );
}
