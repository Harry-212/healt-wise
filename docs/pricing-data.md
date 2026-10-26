# Pricing data

## The standard-price rule

Healthwise360's main comparison tables use the normal publicly available price for one treatment unit or monthly supply, without a promotional code, new-customer discount or long-term commitment. Delivery and compulsory fees are displayed separately where verified. Introductory, subscription and discount-code prices may be shown separately with their conditions.

The same wording is in `scripts/price-scraper/lib/standard-price-rule.mjs`, the methodology page, the admin dashboard and the monthly report. `npm run prices:test` fails if any of them drifts from this text.

## What counts as the standard price

| Price type | In the main table? | Where it goes |
|---|---|---|
| Normal one-off or pay-per-order price | Yes | Dose cells |
| Monthly, 3-month or 6-month plan price | No | Shown separately with its conditions |
| First-month, introductory or new-patient reward | No | Shown separately, never used for ranking or "lowest" |
| Code price (affiliate or referral, e.g. Reach 10%, Pharmacy + Me 5%, DoseDirect £10) | No | `affiliateDiscount` in `scripts/price-scraper/sources.json` and `src/lib/data/affiliate-partners.ts` |
| Multi-pen bundles and multi-month packs | No | Ignored by the scraper |

A price that is only visible after entering a code is a code price. A strikethrough "was" price is ignored unless the table labels the lower price as limited.

## Cell values (Wegovy dose cells)

- A number: the standard price.
- `TBC`: not yet checked.
- `OOS`: listed but out of stock.
- `N/A`: the provider does not list this strength (for example i-Prescribe and Goodbody Wegovy 7.2 mg).

## Where the data lives

- Seed data in code: `src/lib/data/mounjaro-uk-compare-providers.ts` and `src/lib/data/wegovy-uk-compare-providers.ts`. It is only used when the live JSON file does not exist.
- Live data: `mounjaro-compare.json` and `wegovy-compare.json` in `COMPARE_DATA_DIR` on the server. Edits made in `/admin-dashboard` or by `npm run prices:apply` always win over a code deploy, so a price change in code alone does not change the live site.
- Keep both in step: change the live data first, then update the seed so a rebuilt server matches.

## Evidence for each check

Save, for every provider and dose checked: the official URL, the check date, a screenshot of the selected dose, confirmation that it is a normal public price, and any delivery or consultation information shown before checkout.

Delivery, consultation and compulsory fees are only described as included when the checkout or the provider's page states it. If checkout was not reached, say so.

When a provider's page contradicts itself (for example a dose table and an FAQ), keep the current value, record both values with screenshots, ask the provider, and change the record only once one value is confirmed.

## Monthly review

1. Run `npm run prices:check` and read the generated report. It starts with the rule and a reviewer checklist.
2. Confirm each proposed change is a standard price, not a code, plan or first-order price.
3. Apply approved changes with `npm run prices:apply` (dry run first) or in `/admin-dashboard`, then update the seed files.
4. Open any page the run could not read and check it by hand.

## Provider notes

- Pharmulous: its JSON-LD offers lag behind the live product records that feed its price checker. The scraper reads the embedded records (`"size":"1 x …mg"` with `"label_count":1`) first. The regression tests are in `scripts/price-scraper/__tests__/extract.test.mjs`.
