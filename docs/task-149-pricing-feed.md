# Task 149 - Pricing feed safeguards (/api/v1/prices)

| # | Safeguard | Where |
|---|---|---|
| 1-3 | Public data only: fields are whitelisted in `sanitizeProvider`; no admin, affiliate URL, commission or token fields. Public discount codes appear only under `offers`. | `src/app/api/v1/prices/route.ts` |
| 4 | Retail prices in `prices`; promotions only in `offers`. | same |
| 5 | `deliveryNote` (text) plus `deliveryFeeFromGbp` (lowest charge, 0 = free, null = see note). | same |
| 6 | `priceCheckDate` and `updatedLabel` on every provider. | same |
| 7 | 400 `INVALID_MEDICINE` / `INVALID_DOSAGE`; errors are `no-store`. | same |
| 8 | 60 requests/min per client IP, 429 + `Retry-After`. In-memory per process (not shared across instances); add an edge rule if the host runs several. | `src/lib/api/rate-limiter.ts` |
| 9 | `Cache-Control: s-maxage=300` plus 60 s in-memory cache. | route |
| 10 | Not in `sitemap.ts`; `/api/` disallowed in `robots.ts`. | tests |
| 11 | `X-Robots-Tag: noindex, nofollow, noarchive` on every response. | route |
| 12 | `/api/v1/prices/health` (200 ok / 503 failing) polled every 6 h by `.github/workflows/pricing-feed-health.yml`; a failed run notifies via GitHub. | health route, workflow |
| 13 | No price or date is modified by any of this. | - |

CORS: browser access is limited to https://pencompare.co.uk and https://www.pencompare.co.uk (`ALLOWED_ORIGINS` in the route). Server-to-server calls are unaffected. Add origins there to open the feed further.
