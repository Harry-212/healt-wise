import { NextRequest, NextResponse } from "next/server";

function allowedHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return (
    h === "ibb.co.com" ||
    h === "www.ibb.co.com" ||
    h === "ibb.co" ||
    h === "www.ibb.co" ||
    h === "i.ibb.co.com" ||
    h === "i.ibb.co"
  );
}

function cleanDirectUrl(raw: string): string | null {
  const s = raw
    .replace(/&quot;/g, "")
    .replace(/\[\/img\].*$/i, "")
    .split(/["'\s<>]/)[0];
  if (!s.startsWith("http")) return null;
  try {
    const u = new URL(s);
    if (!allowedHost(u.hostname)) return null;
    return u.toString();
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("u");
  if (!raw?.trim()) {
    return new NextResponse("Missing u", { status: 400 });
  }

  let pageUrl: URL;
  try {
    pageUrl = new URL(raw.trim());
  } catch {
    return new NextResponse("Invalid URL", { status: 400 });
  }

  if (!allowedHost(pageUrl.hostname)) {
    return new NextResponse("Host not allowed", { status: 400 });
  }

  // Already a direct image host → redirect to canonical URL
  if (pageUrl.hostname === "i.ibb.co.com" || pageUrl.hostname === "i.ibb.co") {
    return NextResponse.redirect(pageUrl.toString(), 302);
  }

  const upstream = await fetch(pageUrl.toString(), {
    headers: { "User-Agent": "HealthWise-ImgBB-Resolver/1.0" },
    next: { revalidate: 86400 },
  });

  if (!upstream.ok) {
    return new NextResponse("ImgBB page fetch failed", { status: 502 });
  }

  const html = await upstream.text();
  const matches = html.match(/https?:\/\/i\.ibb\.co(?:\.com)?\/[^"'\\s<>]+/g);
  if (!matches?.length) {
    return new NextResponse("Direct image URL not found on page", { status: 404 });
  }

  for (const m of matches) {
    const direct = cleanDirectUrl(m);
    if (direct) return NextResponse.redirect(direct, 302);
  }

  return new NextResponse("Could not parse image URL", { status: 404 });
}
