import { NextResponse } from "next/server";
import sitemap from "@/app/sitemap";
import { siteOrigin } from "@/lib/seo/site-origin";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = "dde37b76c5e0459e942d28e9ab237fc4";
const MAX_URLS_PER_REQUEST = 10_000;

export const dynamic = "force-dynamic";

type SubmitBody = {
  url?: unknown;
  urls?: unknown;
};

function authIsAllowed(request: Request): boolean {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET?.trim();
  if (!secret) return true;

  const requestUrl = new URL(request.url);
  const bearer = request.headers.get("authorization")?.trim();
  return (
    requestUrl.searchParams.get("secret") === secret ||
    bearer === `Bearer ${secret}`
  );
}

function normalizeUrl(value: unknown, origin: string): string | null {
  if (typeof value !== "string" || value.trim() === "") return null;

  try {
    const canonicalOrigin = new URL(origin);
    const url = new URL(value.trim(), origin);
    if (url.protocol !== canonicalOrigin.protocol) return null;
    if (url.hostname !== canonicalOrigin.hostname) return null;

    url.hash = "";
    return url.href;
  } catch {
    return null;
  }
}

function uniqueUrls(values: unknown[], origin: string): string[] {
  const urls = new Set<string>();

  for (const value of values) {
    const normalized = normalizeUrl(value, origin);
    if (normalized) urls.add(normalized);
  }

  return Array.from(urls).slice(0, MAX_URLS_PER_REQUEST);
}

function sitemapUrls(origin: string): string[] {
  return uniqueUrls(
    sitemap().map((entry) => entry.url),
    origin,
  );
}

async function urlsFromRequest(request: Request): Promise<string[]> {
  const origin = siteOrigin();
  const requestUrl = new URL(request.url);
  const queryUrls = requestUrl.searchParams.getAll("url");
  if (queryUrls.length > 0) return uniqueUrls(queryUrls, origin);

  if (request.method !== "POST") return sitemapUrls(origin);

  let body: SubmitBody | null = null;
  try {
    body = (await request.json()) as SubmitBody;
  } catch {
    body = null;
  }

  const bodyUrls: unknown[] = [];
  if (Array.isArray(body?.urls)) bodyUrls.push(...body.urls);
  if (body?.url) bodyUrls.push(body.url);

  return bodyUrls.length > 0 ? uniqueUrls(bodyUrls, origin) : sitemapUrls(origin);
}

async function submitIndexNow(request: Request) {
  if (!authIsAllowed(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const origin = siteOrigin();
  const host = new URL(origin).hostname;
  const urls = await urlsFromRequest(request);

  if (urls.length === 0) {
    return NextResponse.json(
      { error: "No valid canonical URLs to submit." },
      { status: 400 },
    );
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${origin}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });

  const endpointResponse = await response.text();
  const result = {
    ok: response.ok,
    submitted: urls.length,
    keyLocation: `${origin}/${INDEXNOW_KEY}.txt`,
    endpointStatus: response.status,
    endpointResponse: endpointResponse.slice(0, 500) || null,
  };

  if (!response.ok) {
    return NextResponse.json(result, { status: 502 });
  }

  return NextResponse.json(result);
}

export async function GET(request: Request) {
  return submitIndexNow(request);
}

export async function POST(request: Request) {
  return submitIndexNow(request);
}
