const BODY = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>410 Gone | Healthwise360</title>
</head>
<body style="font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem">
<h1>410 &ndash; This page has been removed</h1>
<p>The page you were looking for is no longer available.</p>
<p><a href="/">Go to the Healthwise360 homepage</a></p>
</body>
</html>`;

const HEADERS = {
  "Content-Type": "text/html; charset=utf-8",
  "X-Robots-Tag": "noindex",
  "Cache-Control": "public, max-age=0, s-maxage=3600",
};

/**
 * Target of the 410 rewrites in next.config.ts (paths listed in
 * `src/lib/seo/gone-paths.ts`). A rewrite keeps the original URL in the browser
 * and the crawler sees a real 410 status, which `notFound()` cannot produce.
 */
export function GET() {
  return new Response(BODY, { status: 410, headers: HEADERS });
}

export function HEAD() {
  return new Response(null, { status: 410, headers: HEADERS });
}
