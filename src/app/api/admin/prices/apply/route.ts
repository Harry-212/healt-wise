import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyPriceApplyToken } from "@/lib/admin/auth";
import { applyPriceUpdates, parseApplyRequest } from "@/lib/admin/price-apply";
import { getMounjaroStore, getWegovyStore, saveMounjaroStore, saveWegovyStore } from "@/lib/data/compare-store";

export const runtime = "nodejs";

/**
 * POST /api/admin/prices/apply — applies an approved monthly price update.
 * Auth: `Authorization: Bearer <PRICE_APPLY_TOKEN>`. `?dryRun=1` reports what
 * would change without saving.
 */
export async function POST(request: NextRequest) {
  if (!process.env.PRICE_APPLY_TOKEN?.trim()) {
    return NextResponse.json({ error: "Price apply is not configured" }, { status: 503 });
  }
  if (!verifyPriceApplyToken(request.headers.get("authorization"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = parseApplyRequest(body);
  if (typeof parsed === "string") return NextResponse.json({ error: parsed }, { status: 400 });

  const dryRun = request.nextUrl.searchParams.get("dryRun") === "1";
  // Work on copies so a dry run never touches the cached stores.
  const stores = {
    mounjaro: structuredClone(getMounjaroStore()),
    wegovy: structuredClone(getWegovyStore()),
  };
  const result = applyPriceUpdates(parsed, stores);

  if (!dryRun && result.checkedProviders > 0) {
    saveMounjaroStore(stores.mounjaro);
    saveWegovyStore(stores.wegovy);
    revalidatePath("/", "layout");
  }

  return NextResponse.json({ ok: true, dryRun, ...result });
}
