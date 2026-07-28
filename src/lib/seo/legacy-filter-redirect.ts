import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  isHelpfulGuideCategorySlug,
  helpfulGuidesCategoryHubPath,
  resolveHelpfulGuideCategoryFilter,
} from "@/lib/helpful-guide-slugs";
import {
  isBlogFeedTag,
  blogTopicHubPath,
  resolveBlogTopicFilter,
} from "@/lib/blog-feed";
import { siteOrigin } from "@/lib/seo/site-origin";

function absoluteRedirect(request: NextRequest, path: string): NextResponse {
  const url = new URL(path, request.nextUrl.origin);
  url.search = "";
  url.hash = "";
  return NextResponse.redirect(url, 308);
}

/**
 * Legacy filter query strings and leftover `?category=` / `?topic=` on static
 * hubs → clean path-only URLs (Next.js config redirects preserve query by default).
 */
export function legacyFilterQueryRedirect(
  request: NextRequest,
): NextResponse | null {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/helpful-guides") {
    const raw = searchParams.get("category");
    if (raw) {
      const resolved = resolveHelpfulGuideCategoryFilter(raw);
      if (resolved) {
        return absoluteRedirect(
          request,
          helpfulGuidesCategoryHubPath(resolved.slug),
        );
      }
    }
  }

  if (pathname === "/blog") {
    const raw = searchParams.get("topic");
    if (raw) {
      const topic = resolveBlogTopicFilter(raw);
      if (topic !== "all") {
        return absoluteRedirect(request, blogTopicHubPath(topic));
      }
    }
  }

  // Already on static hubs but still carrying the legacy query (bad prior redirects).
  const categoryMatch = pathname.match(
    /^\/helpful-guides\/category\/([^/]+)\/?$/,
  );
  if (categoryMatch && searchParams.has("category")) {
    const slug = categoryMatch[1];
    if (isHelpfulGuideCategorySlug(slug)) {
      return absoluteRedirect(request, helpfulGuidesCategoryHubPath(slug));
    }
  }

  const topicMatch = pathname.match(/^\/blog\/topic\/([^/]+)\/?$/);
  if (topicMatch && searchParams.has("topic")) {
    const topic = topicMatch[1];
    if (isBlogFeedTag(topic)) {
      return absoluteRedirect(request, blogTopicHubPath(topic));
    }
  }

  return null;
}

/** Ads / mistaken /lander → canonical homepage in one hop (absolute www). */
export function landerRedirect(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  if (pathname !== "/lander" && pathname !== "/lander/") return null;

  let origin: string;
  try {
    origin = siteOrigin().replace(/\/$/, "");
  } catch {
    origin = "https://www.healthwise360.co.uk";
  }
  return NextResponse.redirect(`${origin}/`, 308);
}
