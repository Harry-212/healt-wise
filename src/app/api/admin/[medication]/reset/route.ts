import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import type { CompareMedication } from "@/lib/data/compare-types";
import {
  buildMounjaroSeedStore,
  buildWegovySeedStore,
} from "@/lib/data/compare-seed";
import {
  saveMounjaroStore,
  saveWegovyStore,
} from "@/lib/data/compare-store";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ medication: string }> };

function parseMedication(raw: string): CompareMedication | null {
  if (raw === "mounjaro" || raw === "wegovy") return raw;
  return null;
}

function revalidateComparePages(medication: CompareMedication) {
  if (medication === "mounjaro") {
    revalidatePath("/mounjaro-price-comparison");
  } else {
    revalidatePath("/wegovy-price-comparison");
  }
  for (const slug of Object.keys(COMPARE_SLUGS)) {
    revalidatePath(`/compare/${slug}`);
  }
}

export async function POST(_request: NextRequest, context: RouteContext) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { medication: raw } = await context.params;
  const medication = parseMedication(raw);
  if (!medication) {
    return NextResponse.json({ error: "Invalid medication" }, { status: 400 });
  }

  if (medication === "mounjaro") {
    const seed = buildMounjaroSeedStore();
    saveMounjaroStore(seed);
    revalidateComparePages("mounjaro");
    return NextResponse.json({ ok: true, count: seed.providers.length });
  }

  const seed = buildWegovySeedStore();
  saveWegovyStore(seed);
  revalidateComparePages("wegovy");
  return NextResponse.json({ ok: true, count: seed.providers.length });
}
