import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import type {
  CompareMedication,
  MounjaroCompareStore,
  MounjaroProviderInput,
  WegovyCompareStore,
  WegovyProviderInput,
} from "@/lib/data/compare-types";
import {
  getMounjaroStore,
  getWegovyStore,
  readMounjaroCompareProvidersAdmin,
  readWegovyCompareProvidersAdmin,
  saveMounjaroStore,
  saveWegovyStore,
} from "@/lib/data/compare-store";
import {
  MOUNJARO_DOSE_KEYS,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  type WegovyPriceCell,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";
import { COMPARE_SLUGS } from "@/lib/routes/compare-slugs";
import { hasPharmacyPage } from "@/lib/routes/all-pharmacy-slugs";
import { slugify } from "@/lib/utils/slugify";

/**
 * Providers that already have a `/pharmacies/:slug` page keep their slug so the
 * link stays valid. New providers get a slug derived from their name, so when a
 * page is later created from that name the link activates automatically.
 */
function resolveProviderId(rawId: string, name: string): string {
  const trimmedId = rawId.trim();
  if (trimmedId && hasPharmacyPage(trimmedId)) return trimmedId;
  return slugify(name) || trimmedId;
}

/** Disambiguate duplicate auto-generated slugs (e.g. two same-named providers). */
function ensureUniqueIds(providers: { id: string }[]): void {
  const seen = new Set<string>();
  for (const prov of providers) {
    if (!seen.has(prov.id)) {
      seen.add(prov.id);
      continue;
    }
    let n = 2;
    while (seen.has(`${prov.id}-${n}`)) n++;
    prov.id = `${prov.id}-${n}`;
    seen.add(prov.id);
  }
}

export const runtime = "nodejs";

type RouteContext = { params: Promise<{ medication: string }> };

function parseMedication(raw: string): CompareMedication | null {
  if (raw === "mounjaro" || raw === "wegovy") return raw;
  return null;
}

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}

function parseWegovyCell(v: unknown): WegovyPriceCell | null {
  if (v === "TBC" || v === "OOS") return v;
  if (isFiniteNumber(v)) return v;
  if (typeof v === "string" && v.trim() !== "") {
    const n = Number.parseFloat(v);
    if (Number.isFinite(n)) return n;
  }
  return null;
}

function validateMounjaroProvider(raw: unknown): MounjaroProviderInput | null {
  if (!raw || typeof raw !== "object") return null;
  const p = raw as Record<string, unknown>;
  if (typeof p.id !== "string" || !p.id.trim()) return null;
  if (typeof p.name !== "string" || !p.name.trim()) return null;
  if (typeof p.deliveryNote !== "string") return null;
  if (!isFiniteNumber(p.rating)) return null;
  if (!isFiniteNumber(p.headlineFrom)) return null;
  if (typeof p.gphcRegNo !== "string") return null;
  if (typeof p.updatedLabel !== "string") return null;
  if (typeof p.consultationIncluded !== "boolean") return null;
  if (typeof p.ctaHref !== "string") return null;
  if (!p.prices || typeof p.prices !== "object") return null;

  const prices = p.prices as Record<string, unknown>;
  const parsedPrices = {} as MounjaroUkProviderCompare["prices"];
  for (const key of MOUNJARO_DOSE_KEYS) {
    const val = prices[key];
    if (!isFiniteNumber(val)) return null;
    parsedPrices[key] = val;
  }

  const positivePrices = MOUNJARO_DOSE_KEYS.map((k) => parsedPrices[k]).filter(
    (n) => n > 0,
  );
  const computedHeadlineFrom =
    positivePrices.length > 0
      ? Math.min(...positivePrices)
      : isFiniteNumber(p.headlineFrom)
        ? p.headlineFrom
        : 0;

  return {
    id: resolveProviderId(p.id, p.name),
    name: p.name.trim(),
    deliveryNote: p.deliveryNote,
    notes: typeof p.notes === "string" ? p.notes : undefined,
    rating: p.rating,
    headlineFrom: computedHeadlineFrom,
    gphcRegNo: p.gphcRegNo,
    trustpilotUrl:
      typeof p.trustpilotUrl === "string" && p.trustpilotUrl.trim()
        ? p.trustpilotUrl.trim()
        : undefined,
    linkProfilePage:
      typeof p.linkProfilePage === "boolean" ? p.linkProfilePage : undefined,
    prices: parsedPrices,
    updatedLabel: p.updatedLabel,
    consultationIncluded: p.consultationIncluded,
    badges: Array.isArray(p.badges) ? (p.badges as MounjaroUkProviderCompare["badges"]) : undefined,
    ctaHref: p.ctaHref,
  };
}

function validateWegovyProvider(raw: unknown): WegovyProviderInput | null {
  if (!raw || typeof raw !== "object") return null;
  const p = raw as Record<string, unknown>;
  if (typeof p.id !== "string" || !p.id.trim()) return null;
  if (typeof p.name !== "string" || !p.name.trim()) return null;
  if (typeof p.deliveryNote !== "string") return null;
  if (!isFiniteNumber(p.rating)) return null;
  if (!isFiniteNumber(p.headlineFrom)) return null;
  if (typeof p.gphcRegNo !== "string") return null;
  if (typeof p.updatedLabel !== "string") return null;
  if (typeof p.consultationIncluded !== "boolean") return null;
  if (typeof p.ctaHref !== "string") return null;
  if (!p.prices || typeof p.prices !== "object") return null;

  const prices = p.prices as Record<string, unknown>;
  const parsedPrices = {} as WegovyUkProviderCompare["prices"];
  for (const key of WEGOVY_DOSE_KEYS) {
    const cell = parseWegovyCell(prices[key]);
    if (cell == null) return null;
    parsedPrices[key] = cell;
  }

  const numericPrices = WEGOVY_DOSE_KEYS.map((k) => parsedPrices[k]).filter(
    (c): c is number => typeof c === "number" && c > 0,
  );
  const computedHeadlineFrom =
    numericPrices.length > 0
      ? Math.min(...numericPrices)
      : isFiniteNumber(p.headlineFrom)
        ? p.headlineFrom
        : 0;

  return {
    id: resolveProviderId(p.id, p.name),
    name: p.name.trim(),
    deliveryNote: p.deliveryNote,
    notes: typeof p.notes === "string" ? p.notes : undefined,
    rating: p.rating,
    headlineFrom: computedHeadlineFrom,
    gphcRegNo: p.gphcRegNo,
    trustpilotUrl:
      typeof p.trustpilotUrl === "string" && p.trustpilotUrl.trim()
        ? p.trustpilotUrl.trim()
        : undefined,
    linkProfilePage:
      typeof p.linkProfilePage === "boolean" ? p.linkProfilePage : undefined,
    prices: parsedPrices,
    updatedLabel: p.updatedLabel,
    consultationIncluded: p.consultationIncluded,
    badges: Array.isArray(p.badges) ? (p.badges as WegovyUkProviderCompare["badges"]) : undefined,
    ctaHref: p.ctaHref,
  };
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

export async function GET(_request: NextRequest, context: RouteContext) {
  if (!(await isAdminAuthenticated())) return unauthorized();

  const { medication: raw } = await context.params;
  const medication = parseMedication(raw);
  if (!medication) return badRequest("Invalid medication");

  if (medication === "mounjaro") {
    const store = getMounjaroStore();
    return NextResponse.json({
      medication,
      lastUpdated: store.lastUpdated,
      providers: readMounjaroCompareProvidersAdmin(),
    });
  }

  const store = getWegovyStore();
  return NextResponse.json({
    medication,
    lastUpdated: store.lastUpdated,
    providers: readWegovyCompareProvidersAdmin(),
  });
}

export async function PUT(request: NextRequest, context: RouteContext) {
  if (!(await isAdminAuthenticated())) return unauthorized();

  const { medication: raw } = await context.params;
  const medication = parseMedication(raw);
  if (!medication) return badRequest("Invalid medication");

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON");
  }

  if (!body || typeof body !== "object") return badRequest("Invalid body");
  const o = body as Record<string, unknown>;

  const lastUpdated =
    typeof o.lastUpdated === "string" && o.lastUpdated.trim()
      ? o.lastUpdated.trim()
      : undefined;

  if (!Array.isArray(o.providers)) {
    return badRequest("providers must be an array");
  }

  if (medication === "mounjaro") {
    const providers: MounjaroUkProviderCompare[] = [];
    for (const item of o.providers) {
      const parsed = validateMounjaroProvider(item);
      if (!parsed) return badRequest("Invalid Mounjaro provider row");
      providers.push(parsed);
    }
    ensureUniqueIds(providers);
    const store: MounjaroCompareStore = {
      lastUpdated: lastUpdated ?? getMounjaroStore().lastUpdated,
      providers,
    };
    saveMounjaroStore(store);
    revalidateComparePages("mounjaro");
    return NextResponse.json({ ok: true, count: providers.length });
  }

  const providers: WegovyUkProviderCompare[] = [];
  for (const item of o.providers) {
    const parsed = validateWegovyProvider(item);
    if (!parsed) return badRequest("Invalid Wegovy provider row");
    providers.push(parsed);
  }
  ensureUniqueIds(providers);
  const store: WegovyCompareStore = {
    lastUpdated: lastUpdated ?? getWegovyStore().lastUpdated,
    providers,
  };
  saveWegovyStore(store);
  revalidateComparePages("wegovy");
  return NextResponse.json({ ok: true, count: providers.length });
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!(await isAdminAuthenticated())) return unauthorized();

  const { medication: raw } = await context.params;
  const medication = parseMedication(raw);
  if (!medication) return badRequest("Invalid medication");

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id")?.trim();
  if (!id) return badRequest("Missing id query parameter");

  if (medication === "mounjaro") {
    const store = getMounjaroStore();
    const next = store.providers.filter((p) => p.id !== id);
    if (next.length === store.providers.length) {
      return NextResponse.json({ error: "Provider not found" }, { status: 404 });
    }
    saveMounjaroStore({ ...store, providers: next });
    revalidateComparePages("mounjaro");
    return NextResponse.json({ ok: true });
  }

  const store = getWegovyStore();
  const next = store.providers.filter((p) => p.id !== id);
  if (next.length === store.providers.length) {
    return NextResponse.json({ error: "Provider not found" }, { status: 404 });
  }
  saveWegovyStore({ ...store, providers: next });
  revalidateComparePages("wegovy");
  return NextResponse.json({ ok: true });
}
