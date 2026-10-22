# Price check — 2026-10-22

> Prototype run. **Nothing on the website was changed.** This report shows what the monthly update *would* do.

## Summary

- Providers on Healthwise360: **69** (Mounjaro 68, Wegovy 63); current prices read from the live site.
- Pharmacy pages configured this run: **131** (not-configured: 51, ok: 52, blocked: 17, partial: 6, no-prices: 5).
- Dose prices: **manual** 445 · **unchanged** 273 · **update** 31 · **review** 37.
- Why `manual`: blocked 102 · not-configured 306 · no-prices 30 · partial 6 · ok 1 (not-configured = price-page URL not added to sources.json yet).

| Action | Meaning |
|---|---|
| unchanged | Pharmacy's standard price equals ours |
| update | Read with high confidence, within 5% of the comparison sites (or none to check) — would be updated |
| review | Read, but medium confidence or more than 5% away from the comparison sites — needs a human look |
| manual | No usable price from the pharmacy (not configured, blocked, or page needs a browser) — keep ours |

## Comparison sites (cross-check only)

| Site | Price rows | Matched to our pharmacies | Last updated | Note |
|---|---|---|---|---|
| glpcomparison.com | 971 | 60 pharmacies | 22 October 2026 |  |
| comparemj.co.uk | 264 | 28 pharmacies | per row |  |
| healthcount.app | 271 | 16 pharmacies | per row |  |

## Pharmacy pages read

Fetched with Node first; `curl` means Node was refused and one retry with curl (same user agent) succeeded. `node+curl` means both were refused.

| Pharmacy | Medication | Status | Doses read | Fetched via | Note |
|---|---|---|---|---|---|
| asda-online-doctor | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| asda-online-doctor | wegovy | blocked | 0/6 | node+curl | bot protection page |
| ashcroft-pharmacy | mounjaro | ok | 6/6 | node |  |
| ashcroft-pharmacy | wegovy | ok | 6/6 | node |  |
| ayp-healthcare | mounjaro | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| ayp-healthcare | wegovy | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| bolt-pharmacy | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| bolt-pharmacy | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| boots-online-doctor | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| care-pharmacy | mounjaro | ok | 6/6 | node |  |
| care-pharmacy | wegovy | not-configured | 0/6 | — | Wegovy product page returns 404 |
| chequp | mounjaro | ok | 6/6 | node |  |
| click2pharmacy | mounjaro | ok | 6/6 | node |  |
| click2pharmacy | wegovy | not-configured | 0/6 | — | Wegovy price page not found yet |
| cloud-pharmacy | wegovy | not-configured | 0/6 | — | Wegovy page lists multi-pen bundles only, no single-pen price |
| curate | mounjaro | not-configured | 0/6 | — | page shows several plan prices ~£24 below the one-off price; needs a manual look |
| curate | wegovy | not-configured | 0/6 | — | page shows several plan prices ~£24 below the one-off price; needs a manual look |
| curely | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| curely | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| cuva-health | mounjaro | not-configured | 0/6 | — | only 3 of 6 doses on the page, at introductory prices |
| cuva-health | wegovy | not-configured | 0/6 | — | only 3 of 6 doses on the page, at introductory prices |
| dosedirect | mounjaro | ok | 6/6 | node |  |
| dosedirect | wegovy | partial | 5/6 | node |  |
| dotor | mounjaro | ok | 6/6 | node |  |
| dr-weightmans | mounjaro | ok | 6/6 | node |  |
| dr-weightmans | wegovy | ok | 6/6 | node |  |
| e-surgery | mounjaro | no-prices | 0/6 | node | no dose prices in the page HTML (title "ᐅ Buy Mounjaro (Tirzepatide) Injection \| E-Surgery", 305 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| envigore | mounjaro | ok | 6/6 | node |  |
| envigore | wegovy | partial | 5/6 | node |  |
| farmeci | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| farmeci | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| genmeds | mounjaro | ok | 6/6 | node |  |
| genmeds | wegovy | ok | 6/6 | node |  |
| get-a-drip | mounjaro | ok | 6/6 | node |  |
| get-a-drip | wegovy | ok | 6/6 | node |  |
| getweightloss | mounjaro | ok | 6/6 | node |  |
| getweightloss | wegovy | partial | 5/6 | node |  |
| goodbody-clinic | mounjaro | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| goodbody-clinic | wegovy | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| happy-pharmacy | mounjaro | ok | 6/6 | node |  |
| happy-pharmacy | wegovy | ok | 6/6 | node |  |
| hey-slim | mounjaro | ok | 6/6 | node |  |
| hey-slim | wegovy | ok | 6/6 | node |  |
| iq-doctor | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| iq-doctor | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| jood-life | mounjaro | ok | 6/6 | node |  |
| jood-life | wegovy | partial | 5/6 | node |  |
| juniper | mounjaro | no-prices | 0/6 | node | no dose prices in the page HTML (title "Mounjaro for Weight Loss: Your Complete Guide \| Juniper UK", 102 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| juniper | wegovy | no-prices | 0/6 | node | no dose prices in the page HTML (title "Wegovy for Weight Loss: Your Complete Guide \| Juniper UK", 105 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| live-well-weight-loss | mounjaro | ok | 6/6 | node |  |
| live-well-weight-loss | wegovy | not-configured | 0/6 | — | Wegovy product page returns 404 |
| lloyds-pharmacy-online-doctor | mounjaro | ok | 6/6 | node |  |
| lloyds-pharmacy-online-doctor | wegovy | ok | 6/6 | node | lowest extracted £99.99 is below the page's own "from £119.99" |
| lotus-weight-loss | mounjaro | ok | 6/6 | node |  |
| lotus-weight-loss | wegovy | ok | 6/6 | node |  |
| manchester-chemist | mounjaro | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| manchester-chemist | wegovy | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| medexpress | mounjaro | ok | 6/6 | node |  |
| medexpress | wegovy | ok | 6/6 | node |  |
| medhut | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| medhut | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| medicine-marketplace | mounjaro | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| medicine-marketplace | wegovy | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| medino | mounjaro | ok | 6/6 | node |  |
| medino | wegovy | not-configured | 0/6 | — | Wegovy prices loaded by JavaScript |
| msh-weight-loss | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| my-london-pharmacy | mounjaro | not-configured | 0/6 | — | prices behind the online-clinic app (JavaScript) |
| my-london-pharmacy | wegovy | not-configured | 0/6 | — | prices behind the online-clinic app (JavaScript) |
| next-script | mounjaro | not-configured | 0/6 | — | Mounjaro prices loaded by JavaScript; Wegovy page shows a different product |
| next-script | wegovy | not-configured | 0/6 | — | Mounjaro prices loaded by JavaScript; Wegovy page shows a different product |
| nulife-pharmacy | mounjaro | not-configured | 0/6 | — | bot protection (Vercel checkpoint) even for curl |
| nulife-pharmacy | wegovy | not-configured | 0/6 | — | bot protection (Vercel checkpoint) even for curl |
| numan | mounjaro | ok | 6/6 | node |  |
| numan | wegovy | ok | 6/6 | node |  |
| onlinemeds | mounjaro | ok | 6/6 | node |  |
| onlinemeds | wegovy | ok | 6/6 | node |  |
| oushk | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| oushk | wegovy | blocked | 0/6 | node+curl | bot protection page |
| pharmacy-advance | mounjaro | ok | 6/6 | node |  |
| pharmacy-advance | wegovy | partial | 5/6 | node |  |
| pharmacy-express | mounjaro | not-configured | 0/6 | — | booking flow only, no public price page |
| pharmacy-express | wegovy | not-configured | 0/6 | — | booking flow only, no public price page |
| pharmacy-me | mounjaro | no-prices | 0/6 | node | no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| pharmacy-me | wegovy | no-prices | 0/6 | node | no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| pharmacy2u | mounjaro | blocked | 0/6 | node+curl | HTTP 403 |
| pharmacy2u | wegovy | blocked | 0/6 | node+curl | HTTP 403 |
| pharmica | mounjaro | not-configured | 0/6 | — | bot protection (empty WAF response) |
| pharmica | wegovy | not-configured | 0/6 | — | bot protection (empty WAF response) |
| pharmulous | mounjaro | ok | 6/6 | node |  |
| pharmulous | wegovy | ok | 6/6 | node |  |
| pills2u | mounjaro | ok | 6/6 | node |  |
| pills2u | wegovy | ok | 6/6 | node |  |
| pillsorted | mounjaro | ok | 6/6 | node |  |
| pillsorted | wegovy | ok | 6/6 | node |  |
| pillsphere | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| pillsphere | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| reach-online-pharmacy | mounjaro | ok | 6/6 | node |  |
| reach-online-pharmacy | wegovy | ok | 6/6 | node |  |
| second-nature | mounjaro | not-configured | 0/6 | — | programme pricing, no per-pen price page |
| second-nature | wegovy | not-configured | 0/6 | — | programme pricing, no per-pen price page |
| shape8 | mounjaro | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| shape8 | wegovy | not-configured | 0/6 | — | no product page with dose prices found; check manually |
| simple-online-pharmacy | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| simple-online-pharmacy | wegovy | blocked | 0/6 | node+curl | bot protection page |
| skin-and-shape | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| skin-and-shape | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| slimming-direct | mounjaro | ok | 6/6 | node |  |
| slimming-direct | wegovy | ok | 6/6 | node |  |
| slinic | mounjaro | ok | 6/6 | node |  |
| slinic | wegovy | ok | 6/6 | node |  |
| superdrug-online-doctor | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| superdrug-online-doctor | wegovy | blocked | 0/6 | node+curl | bot protection page |
| swift-doctor | mounjaro | ok | 6/6 | node |  |
| swift-medi | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| swift-medi | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| the-family-chemist | mounjaro | ok | 6/6 | node |  |
| the-family-chemist | wegovy | partial | 5/6 | node |  |
| the-independent-pharmacy | mounjaro | ok | 6/6 | node |  |
| the-independent-pharmacy | wegovy | ok | 6/6 | node |  |
| tribelle | mounjaro | not-configured | 0/6 | — | prices loaded by JavaScript |
| tribelle | wegovy | not-configured | 0/6 | — | prices loaded by JavaScript |
| voy | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| voy | wegovy | blocked | 0/6 | node+curl | bot protection page |
| well-pharmacy | mounjaro | ok | 6/6 | node |  |
| well-pharmacy | wegovy | not-configured | 0/6 | — | Wegovy prices loaded by JavaScript |
| weprescribe | mounjaro | ok | 6/6 | node |  |
| weprescribe | wegovy | ok | 6/6 | node |  |
| yourpharmacy | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| yourpharmacy | wegovy | blocked | 0/6 | node+curl | bot protection page |
| zava | mounjaro | blocked | 0/6 | node+curl | bot protection page |
| zava | wegovy | blocked | 0/6 | node+curl | bot protection page |

## Proposed changes and items to review (68)

Affiliate partners are shown at the price after their partner code, so *Site price* = standard price minus the partner discount.

| Pharmacy | Med | Dose | Ours now | Pharmacy (standard) | Site price | Change | Comparators (median) | Δ vs comparators | Action | How read |
|---|---|---|---|---|---|---|---|---|---|---|
| Ashcroft Pharmacy | mounjaro | 15mg | £294.99 | £284.99 | £284.99 | £-10.00 | £289.99 (2) | -1.7% | **update** | text |
| Chequp | mounjaro | 2.5mg | £189.00 | £189.00 | £189.00 | £0.00 | £189.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Chequp | mounjaro | 5mg | £219.00 | £219.00 | £219.00 | £0.00 | £219.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Chequp | mounjaro | 7.5mg | £269.00 | £269.00 | £269.00 | £0.00 | £269.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Chequp | mounjaro | 10mg | £289.00 | £289.00 | £289.00 | £0.00 | £289.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Chequp | mounjaro | 12.5mg | £299.00 | £309.00 | £309.00 | £10.00 | £309.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Chequp | mounjaro | 15mg | £319.00 | £329.00 | £329.00 | £10.00 | £329.00 (3) | 0% | **review** | text (3 prices shown, took highest) |
| Envigore | mounjaro | 2.5mg | £220.00 | £220.00 | £220.00 | £0.00 | £220.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | mounjaro | 5mg | £249.00 | £249.00 | £249.00 | £0.00 | £249.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | mounjaro | 7.5mg | £299.00 | £299.00 | £299.00 | £0.00 | £299.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | mounjaro | 10mg | £305.00 | £305.00 | £305.00 | £0.00 | £305.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | mounjaro | 12.5mg | £329.00 | £329.00 | £329.00 | £0.00 | £329.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Get Weightloss | mounjaro | 15mg | £269.00 | £269.00 | £269.00 | £0.00 | £269.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Happy Pharmacy | mounjaro | 2.5mg | £139.99 | £149.99 | £149.99 | £10.00 | £149.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | mounjaro | 5mg | £164.99 | £189.99 | £189.99 | £25.00 | £189.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | mounjaro | 7.5mg | £224.99 | £249.99 | £249.99 | £25.00 | £249.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | mounjaro | 10mg | £249.99 | £269.99 | £269.99 | £20.00 | £269.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | mounjaro | 12.5mg | £264.99 | £289.99 | £289.99 | £25.00 | £289.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | mounjaro | 15mg | £294.99 | £319.99 | £319.99 | £25.00 | £319.99 (1) | 0% | **update** | json-ld |
| Jood Life | mounjaro | 15mg | £288.00 | £288.00 | £288.00 | £0.00 | £288.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Pills2U | mounjaro | 2.5mg | £145.99 | £139.99 | £139.99 | £-6.00 | £139.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | mounjaro | 5mg | £164.98 | £158.98 | £158.98 | £-6.00 | £158.98 (1) | 0% | **update** | woocommerce variants |
| Pills2U | mounjaro | 7.5mg | £218.98 | £213.99 | £213.99 | £-4.99 | £213.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | mounjaro | 10mg | £243.99 | £239.99 | £239.99 | £-4.00 | £239.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | mounjaro | 12.5mg | £264.99 | £259.99 | £259.99 | £-5.00 | £259.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | mounjaro | 15mg | £289.99 | £281.99 | £281.99 | £-8.00 | £281.99 (1) | 0% | **update** | woocommerce variants |
| The Family Chemist | mounjaro | 2.5mg | £164.99 | £164.99 | £164.99 | £0.00 | £164.99 (2) | 0% | **review** | text (2 prices shown, took highest) |
| The Family Chemist | mounjaro | 5mg | £178.99 | £178.99 | £178.99 | £0.00 | £176.99 (2) | +1.1% | **review** | text (2 prices shown, took highest) |
| The Family Chemist | mounjaro | 7.5mg | £234.99 | £234.99 | £234.99 | £0.00 | £234.99 (2) | 0% | **review** | text (2 prices shown, took highest) |
| The Family Chemist | mounjaro | 10mg | £258.99 | £258.99 | £258.99 | £0.00 | £259.49 (2) | -0.2% | **review** | text (2 prices shown, took highest) |
| The Family Chemist | mounjaro | 12.5mg | £278.99 | £278.99 | £278.99 | £0.00 | £276.99 (2) | +0.7% | **review** | text (2 prices shown, took highest) |
| The Family Chemist | mounjaro | 15mg | £293.99 | £293.99 | £293.99 | £0.00 | £294.49 (2) | -0.2% | **review** | text (2 prices shown, took highest) |
| DoseDirect | mounjaro | 15mg | £267.99 | £278.99 | £268.99 (−£10) | £1.00 | £278.99 (1) | 0% | **update** | text |
| Reach Online Pharmacy | mounjaro | 7.5mg | £217.99 | £241.99 | £217.79 (−10% code Welcome10health) | £-0.20 | — (0) | — | **update** | text |
| Ashcroft Pharmacy | wegovy | 0.25mg | £120.00 | £79.99 | £79.99 | £-40.01 | £79.99 (1) | 0% | **update** | text |
| Ashcroft Pharmacy | wegovy | 0.5mg | £125.00 | £89.99 | £89.99 | £-35.01 | £89.99 (1) | 0% | **update** | text |
| Ashcroft Pharmacy | wegovy | 1mg | £125.00 | £99.99 | £99.99 | £-25.01 | £99.99 (1) | 0% | **update** | text |
| Ashcroft Pharmacy | wegovy | 1.7mg | £175.00 | £144.99 | £144.99 | £-30.01 | £144.99 (1) | 0% | **update** | text |
| Ashcroft Pharmacy | wegovy | 2.4mg | £225.00 | £209.99 | £209.99 | £-15.01 | £209.99 (1) | 0% | **update** | text |
| Ashcroft Pharmacy | wegovy | 7.2mg | £249.00 | £225.00 | £225.00 | £-24.00 | £225.00 (1) | 0% | **update** | text |
| DoseDirect | wegovy | 0.25mg | £99.99 | £99.99 | £89.99 (−£10) | £-10.00 | £99.99 (1) | 0% | **update** | text |
| Envigore | wegovy | 0.25mg | £135.00 | £135.00 | £135.00 | £0.00 | £135.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | wegovy | 0.5mg | £145.00 | £145.00 | £145.00 | £0.00 | £145.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | wegovy | 1mg | £155.00 | £155.00 | £155.00 | £0.00 | £155.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Envigore | wegovy | 1.7mg | £215.00 | £215.00 | £215.00 | £0.00 | £215.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Get Weightloss | wegovy | 2.4mg | £199.00 | £199.00 | £199.00 | £0.00 | £199.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Happy Pharmacy | wegovy | 0.25mg | £89.99 | £99.99 | £99.99 | £10.00 | £99.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | wegovy | 0.5mg | £110.99 | £109.99 | £109.99 | £-1.00 | £109.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | wegovy | 1mg | £129.99 | £124.99 | £124.99 | £-5.00 | £124.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | wegovy | 1.7mg | £159.99 | £164.99 | £164.99 | £5.00 | £164.99 (1) | 0% | **update** | json-ld |
| Happy Pharmacy | wegovy | 2.4mg | £194.99 | £209.99 | £209.99 | £15.00 | £209.99 (1) | 0% | **update** | json-ld |
| Jood Life | wegovy | 2.4mg | £220.00 | £220.00 | £220.00 | £0.00 | £220.00 (1) | 0% | **review** | text (2 prices shown, took highest) |
| Numan | wegovy | 7.2mg | £319.00 | £379.00 | £379.00 | £60.00 | £319.00 (1) | +18.8% | **review** | text |
| Pharmulous | wegovy | 0.25mg | £124.98 | £99.99 | £99.99 | £-24.99 | £94.99 (1) | +5.3% | **review** | json-ld |
| Pharmulous | wegovy | 0.5mg | £134.98 | £109.99 | £109.99 | £-24.99 | £99.99 (1) | +10% | **review** | json-ld |
| Pharmulous | wegovy | 1mg | £144.98 | £119.99 | £119.99 | £-24.99 | £104.99 (1) | +14.3% | **review** | json-ld |
| Pharmulous | wegovy | 1.7mg | £174.98 | £159.99 | £159.99 | £-14.99 | £149.99 (1) | +6.7% | **review** | json-ld |
| Pharmulous | wegovy | 2.4mg | £224.98 | £209.99 | £209.99 | £-14.99 | £199.99 (1) | +5% | **review** | json-ld |
| Pharmulous | wegovy | 7.2mg | TBC | £229.99 | £229.99 | — | £209.99 (1) | +9.5% | **review** | json-ld |
| Pills2U | wegovy | 0.25mg | £94.99 | £89.99 | £89.99 | £-5.00 | £89.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | wegovy | 1.7mg | £154.99 | £149.99 | £149.99 | £-5.00 | £149.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | wegovy | 2.4mg | £209.99 | £204.99 | £204.99 | £-5.00 | £204.99 (1) | 0% | **update** | woocommerce variants |
| Pills2U | wegovy | 7.2mg | £214.99 | £209.99 | £209.99 | £-5.00 | £209.99 (1) | 0% | **update** | woocommerce variants |
| The Family Chemist | wegovy | 0.25mg | £99.99 | £99.99 | £99.99 | £0.00 | £99.99 (1) | 0% | **review** | text (3 prices shown, took highest) |
| The Family Chemist | wegovy | 0.5mg | £119.99 | £119.99 | £119.99 | £0.00 | £119.99 (1) | 0% | **review** | text (3 prices shown, took highest) |
| The Family Chemist | wegovy | 1mg | £124.99 | £124.99 | £124.99 | £0.00 | £124.99 (1) | 0% | **review** | text (3 prices shown, took highest) |
| The Family Chemist | wegovy | 1.7mg | £168.99 | £149.99 | £149.99 | £-19.00 | £149.99 (1) | 0% | **review** | text (3 prices shown, took highest) |
| The Family Chemist | wegovy | 2.4mg | £188.99 | £174.99 | £174.99 | £-14.00 | £174.99 (1) | 0% | **review** | text (3 prices shown, took highest) |

## Manual check list (28)

These pages are configured but could not be read this run. Open the page, confirm each standard price, and change any that differ in /admin-dashboard.
The comparison sites are hints only; the pharmacy's own page is the source of truth.

### Asda (mounjaro): blocked

Page: https://onlinedoctor.asda.com/uk/mounjaro.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £148.97 | glpcomparison.com £148.97, comparemj.co.uk £148.97, healthcount.app £148.97 | matches comparison sites |
| 5mg | £188.97 | glpcomparison.com £188.97, comparemj.co.uk £188.97, healthcount.app £188.97 | matches comparison sites |
| 7.5mg | £248.97 | glpcomparison.com £248.97, comparemj.co.uk £248.97, healthcount.app £248.97 | matches comparison sites |
| 10mg | £278.97 | glpcomparison.com £278.97, comparemj.co.uk £278.97, healthcount.app £278.97 | matches comparison sites |
| 12.5mg | £287.47 | glpcomparison.com £287.47, comparemj.co.uk £288.97, healthcount.app £287.47 | matches comparison sites |
| 15mg | £298.97 | glpcomparison.com £298.97, comparemj.co.uk £298.97, healthcount.app £298.97 | matches comparison sites |

### Boots (mounjaro): blocked

Page: https://onlinedoctor.boots.com/treatments/mounjaro

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £179.00 | glpcomparison.com £179.00, comparemj.co.uk £176.97, healthcount.app £179.00 | matches comparison sites |
| 5mg | £199.00 | glpcomparison.com £199.00, comparemj.co.uk £189.97, healthcount.app £199.00 | matches comparison sites |
| 7.5mg | £259.00 | glpcomparison.com £259.00, comparemj.co.uk £267.97, healthcount.app £259.00 | matches comparison sites |
| 10mg | £299.00 | glpcomparison.com £299.00, comparemj.co.uk £302.97, healthcount.app £299.00 | matches comparison sites |
| 12.5mg | £319.00 | glpcomparison.com £319.00, comparemj.co.uk £314.97, healthcount.app £319.00 | matches comparison sites |
| 15mg | £339.00 | glpcomparison.com £339.00, comparemj.co.uk £334.97, healthcount.app £339.00 | matches comparison sites |

### e-Surgery (mounjaro): no-prices

Page: https://e-surgery.com/product/mounjaro-tirzepatide-injection/

Why: no dose prices in the page HTML (title "ᐅ Buy Mounjaro (Tirzepatide) Injection \| E-Surgery", 305 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £176.46 | glpcomparison.com £176.46, comparemj.co.uk £176.46, healthcount.app £176.46 | matches comparison sites |
| 5mg | £211.71 | glpcomparison.com £211.71, comparemj.co.uk £211.71, healthcount.app £211.71 | matches comparison sites |
| 7.5mg | £282.29 | glpcomparison.com £282.29, comparemj.co.uk £282.29, healthcount.app £282.29 | matches comparison sites |
| 10mg | £317.59 | glpcomparison.com £317.59, comparemj.co.uk £317.59, healthcount.app £317.59 | matches comparison sites |
| 12.5mg | £341.13 | glpcomparison.com £341.13, comparemj.co.uk £341.13, healthcount.app £341.13 | matches comparison sites |
| 15mg | £359.95 | glpcomparison.com £359.95, comparemj.co.uk £359.95, healthcount.app £359.95 | matches comparison sites |

### Juniper (mounjaro): no-prices

Page: https://www.myjuniper.co.uk/mounjaro-hub

Why: no dose prices in the page HTML (title "Mounjaro for Weight Loss: Your Complete Guide \| Juniper UK", 102 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £199.00 | glpcomparison.com £199.00, comparemj.co.uk £199.00, healthcount.app £199.00 | matches comparison sites |
| 5mg | £229.00 | glpcomparison.com £229.00, comparemj.co.uk £229.00, healthcount.app £229.00 | matches comparison sites |
| 7.5mg | £279.00 | glpcomparison.com £279.00, comparemj.co.uk £279.00, healthcount.app £279.00 | matches comparison sites |
| 10mg | £304.00 | glpcomparison.com £304.00, comparemj.co.uk £304.00, healthcount.app £304.00 | matches comparison sites |
| 12.5mg | £329.00 | glpcomparison.com £329.00, comparemj.co.uk £329.00, healthcount.app £329.00 | matches comparison sites |
| 15mg | £339.00 | glpcomparison.com £339.00, comparemj.co.uk £339.00, healthcount.app £339.00 | matches comparison sites |

### Oushk Pharmacy (mounjaro): blocked

Page: https://www.oushkpharmacy.com/medications/mounjaro

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £169.00 | glpcomparison.com £169.00, comparemj.co.uk £169.00, healthcount.app £169.00 | matches comparison sites |
| 5mg | £189.00 | glpcomparison.com £189.00, comparemj.co.uk £189.00, healthcount.app £189.00 | matches comparison sites |
| 7.5mg | £244.00 | glpcomparison.com £244.00, comparemj.co.uk £244.00, healthcount.app £244.00 | matches comparison sites |
| 10mg | £279.00 | glpcomparison.com £279.00, comparemj.co.uk £279.00, healthcount.app £279.00 | matches comparison sites |
| 12.5mg | £290.00 | glpcomparison.com £290.00, comparemj.co.uk £290.00, healthcount.app £290.00 | matches comparison sites |
| 15mg | £310.00 | glpcomparison.com £310.00, comparemj.co.uk £310.00, healthcount.app £310.00 | matches comparison sites |

### Pharmacy2U (mounjaro): blocked

Page: https://www.pharmacy2u.co.uk/online-doctor/weight-loss/mounjaro

Why: HTTP 403

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £169.99 | glpcomparison.com £169.99, comparemj.co.uk £169.99, healthcount.app £169.99 | matches comparison sites |
| 5mg | £189.99 | glpcomparison.com £189.99, comparemj.co.uk £189.99, healthcount.app £189.99 | matches comparison sites |
| 7.5mg | £244.99 | glpcomparison.com £244.99, comparemj.co.uk £244.99, healthcount.app £244.99 | matches comparison sites |
| 10mg | £279.99 | glpcomparison.com £279.99, comparemj.co.uk £279.99, healthcount.app £279.99 | matches comparison sites |
| 12.5mg | £289.99 | glpcomparison.com £289.99, comparemj.co.uk £289.99, healthcount.app £289.99 | matches comparison sites |
| 15mg | £299.99 | glpcomparison.com £299.99, comparemj.co.uk £299.99, healthcount.app £299.99 | matches comparison sites |

### Simple Online Pharmacy (mounjaro): blocked

Page: https://www.simpleonlinepharmacy.co.uk/weight-loss/mounjaro/

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £169.00 | glpcomparison.com £169.00, comparemj.co.uk £169.00, healthcount.app £169.00 | matches comparison sites |
| 5mg | £199.99 | glpcomparison.com £199.99, comparemj.co.uk £199.99, healthcount.app £199.99 | matches comparison sites |
| 7.5mg | £259.99 | glpcomparison.com £259.99, comparemj.co.uk £259.99, healthcount.app £259.99 | matches comparison sites |
| 10mg | £279.99 | glpcomparison.com £279.99, comparemj.co.uk £279.99, healthcount.app £279.99 | matches comparison sites |
| 12.5mg | £299.99 | glpcomparison.com £299.99, comparemj.co.uk £299.99, healthcount.app £299.99 | matches comparison sites |
| 15mg | £319.99 | glpcomparison.com £319.99, comparemj.co.uk £319.99, healthcount.app £319.99 | matches comparison sites |

### Superdrug (mounjaro): blocked

Page: https://onlinedoctor.superdrug.com/mounjaro.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £179.00 | glpcomparison.com £179.00, comparemj.co.uk £176.00, healthcount.app £179.00 | matches comparison sites |
| 5mg | £199.00 | glpcomparison.com £199.00, comparemj.co.uk £189.00, healthcount.app £199.00 | matches comparison sites |
| 7.5mg | £259.00 | glpcomparison.com £259.00, comparemj.co.uk £267.00, healthcount.app £259.00 | matches comparison sites |
| 10mg | £299.00 | glpcomparison.com £299.00, comparemj.co.uk £302.00, healthcount.app £299.00 | matches comparison sites |
| 12.5mg | £319.00 | glpcomparison.com £319.00, comparemj.co.uk £314.00, healthcount.app £319.00 | matches comparison sites |
| 15mg | £339.00 | glpcomparison.com £339.00, comparemj.co.uk £334.00, healthcount.app £339.00 | matches comparison sites |

### Voy (mounjaro): blocked

Page: https://www.joinvoy.com/weight-loss/medications/mounjaro

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £214.00 | glpcomparison.com £214.00, comparemj.co.uk £194.00, healthcount.app £214.00 | matches comparison sites |
| 5mg | £244.00 | glpcomparison.com £244.00, comparemj.co.uk £224.00, healthcount.app £244.00 | matches comparison sites |
| 7.5mg | £294.00 | glpcomparison.com £294.00, comparemj.co.uk £274.00, healthcount.app £294.00 | matches comparison sites |
| 10mg | £324.00 | glpcomparison.com £324.00, comparemj.co.uk £304.00, healthcount.app £324.00 | matches comparison sites |
| 12.5mg | £344.00 | glpcomparison.com £344.00, comparemj.co.uk £324.00, healthcount.app £344.00 | matches comparison sites |
| 15mg | £359.00 | glpcomparison.com £359.00, comparemj.co.uk £339.00, healthcount.app £359.00 | matches comparison sites |

### YourPharmacy (mounjaro): blocked

Page: https://yourpharmacy.uk/mounjaro/

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £168.00 | glpcomparison.com £168.00 | matches comparison sites |
| 5mg | £189.00 | glpcomparison.com £189.00 | matches comparison sites |
| 7.5mg | £254.00 | glpcomparison.com £254.00 | matches comparison sites |
| 10mg | £275.00 | glpcomparison.com £275.00 | matches comparison sites |
| 12.5mg | £289.00 | glpcomparison.com £289.00 | matches comparison sites |
| 15mg | £298.00 | glpcomparison.com £298.00 | matches comparison sites |

### Zava (mounjaro): blocked

Page: https://www.zavamed.com/uk/mounjaro.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £169.99 | glpcomparison.com £148.99, comparemj.co.uk £169.99, healthcount.app £148.99 | **check**: comparison sites -12.4% |
| 5mg | £187.99 | glpcomparison.com £178.99, comparemj.co.uk £187.99, healthcount.app £178.99 | matches comparison sites |
| 7.5mg | £249.99 | glpcomparison.com £238.99, comparemj.co.uk £249.99, healthcount.app £238.99 | matches comparison sites |
| 10mg | £279.99 | glpcomparison.com £268.99, comparemj.co.uk £279.99, healthcount.app £268.99 | matches comparison sites |
| 12.5mg | £299.99 | glpcomparison.com £288.99, comparemj.co.uk £299.99, healthcount.app £288.99 | matches comparison sites |
| 15mg | £309.99 | glpcomparison.com £298.99, comparemj.co.uk £309.99, healthcount.app £298.99 | matches comparison sites |

### Pharmacy + Me (mounjaro): no-prices

Page: https://pharmacyme.co.uk/

Why: no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £126.34 | glpcomparison.com £132.99 | **check**: comparison sites +5.3% |
| 5mg | £128.24 | glpcomparison.com £149.99 | **check**: comparison sites +17% |
| 7.5mg | £195.69 | glpcomparison.com £205.99 | **check**: comparison sites +5.3% |
| 10mg | £221.34 | glpcomparison.com £232.99 | **check**: comparison sites +5.3% |
| 12.5mg | £239.39 | glpcomparison.com £251.99 | **check**: comparison sites +5.3% |
| 15mg | £259.34 | glpcomparison.com £272.99 | **check**: comparison sites +5.3% |

### Asda (wegovy): blocked

Page: https://onlinedoctor.asda.com/uk/wegovy.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £88.97 | glpcomparison.com £88.97, healthcount.app £88.97 | matches comparison sites |
| 0.5mg | £108.97 | glpcomparison.com £108.97, healthcount.app £108.97 | matches comparison sites |
| 1mg | £138.97 | glpcomparison.com £138.97, healthcount.app £138.97 | matches comparison sites |
| 1.7mg | £168.97 | glpcomparison.com £168.97, healthcount.app £168.97 | matches comparison sites |
| 2.4mg | £188.97 | glpcomparison.com £188.97, healthcount.app £188.97 | matches comparison sites |
| 7.2mg | £258.97 | glpcomparison.com £258.97, healthcount.app £258.97 | matches comparison sites |

### DoseDirect (wegovy): partial

Page: https://dosedirect.co.uk/weight-loss/

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

### Envigore (wegovy): partial

Page: https://envigore.com/wegovy/

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

### Get Weightloss (wegovy): partial

Page: https://getweightloss.co.uk/medications/wegovy

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

### Jood Life (wegovy): partial

Page: https://www.joodlife.com/shop/wegovy

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

### Juniper (wegovy): no-prices

Page: https://www.myjuniper.co.uk/wegovy-hub

Why: no dose prices in the page HTML (title "Wegovy for Weight Loss: Your Complete Guide \| Juniper UK", 105 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £164.00 | glpcomparison.com £164.00, healthcount.app £164.00 | matches comparison sites |
| 0.5mg | £164.00 | glpcomparison.com £164.00, healthcount.app £164.00 | matches comparison sites |
| 1mg | £179.00 | glpcomparison.com £179.00, healthcount.app £179.00 | matches comparison sites |
| 1.7mg | £209.00 | glpcomparison.com £209.00, healthcount.app £209.00 | matches comparison sites |
| 2.4mg | £229.00 | glpcomparison.com £229.00, healthcount.app £229.00 | matches comparison sites |
| 7.2mg | £299.00 | — | no comparison data |

### Oushk Pharmacy (wegovy): blocked

Page: https://www.oushkpharmacy.com/medications/wegovy-semaglutide-weight-loss-injection

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £115.00 | glpcomparison.com £115.00, healthcount.app £115.00 | matches comparison sites |
| 0.5mg | £125.00 | glpcomparison.com £125.00, healthcount.app £125.00 | matches comparison sites |
| 1mg | £130.00 | glpcomparison.com £130.00, healthcount.app £130.00 | matches comparison sites |
| 1.7mg | £170.00 | glpcomparison.com £170.00, healthcount.app £170.00 | matches comparison sites |
| 2.4mg | £190.00 | glpcomparison.com £190.00, healthcount.app £190.00 | matches comparison sites |
| 7.2mg | £260.00 | glpcomparison.com £260.00, healthcount.app £260.00 | matches comparison sites |

### Pharmacy + Me (wegovy): no-prices

Page: https://pharmacyme.co.uk/

Why: no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £76.94 | glpcomparison.com £80.99 | **check**: comparison sites +5.3% |
| 0.5mg | £76.94 | glpcomparison.com £80.99 | **check**: comparison sites +5.3% |
| 1mg | £76.94 | glpcomparison.com £80.99 | **check**: comparison sites +5.3% |
| 1.7mg | £130.14 | glpcomparison.com £136.99 | **check**: comparison sites +5.3% |
| 2.4mg | £183.34 | glpcomparison.com £192.99 | **check**: comparison sites +5.3% |
| 7.2mg | £185.24 | glpcomparison.com £194.99 | **check**: comparison sites +5.3% |

### Pharmacy Advance (wegovy): partial

Page: https://pharmacyadvance.co.uk/product/wegovy/

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

### Pharmacy2U (wegovy): blocked

Page: https://www.pharmacy2u.co.uk/online-doctor/weight-loss/wegovy

Why: HTTP 403

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £99.99 | glpcomparison.com £99.99, healthcount.app £99.99 | matches comparison sites |
| 0.5mg | £114.99 | glpcomparison.com £114.99, healthcount.app £114.99 | matches comparison sites |
| 1mg | £144.99 | glpcomparison.com £144.99, healthcount.app £144.99 | matches comparison sites |
| 1.7mg | £169.99 | glpcomparison.com £169.99, healthcount.app £169.99 | matches comparison sites |
| 2.4mg | £189.99 | glpcomparison.com £189.99, healthcount.app £189.99 | matches comparison sites |
| 7.2mg | £249.99 | glpcomparison.com £249.99, healthcount.app £249.99 | matches comparison sites |

### Simple Online Pharmacy (wegovy): blocked

Page: https://www.simpleonlinepharmacy.co.uk/weight-loss/wegovy/

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £99.00 | glpcomparison.com £99.00, healthcount.app £99.00 | matches comparison sites |
| 0.5mg | £119.00 | glpcomparison.com £119.00, healthcount.app £119.00 | matches comparison sites |
| 1mg | £125.00 | glpcomparison.com £125.00, healthcount.app £125.00 | matches comparison sites |
| 1.7mg | £169.00 | glpcomparison.com £169.00, healthcount.app £169.00 | matches comparison sites |
| 2.4mg | £189.00 | glpcomparison.com £189.00, healthcount.app £189.00 | matches comparison sites |
| 7.2mg | £265.00 | glpcomparison.com £265.00, healthcount.app £265.00 | matches comparison sites |

### Superdrug (wegovy): blocked

Page: https://onlinedoctor.superdrug.com/wegovy.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £99.00 | glpcomparison.com £99.00, healthcount.app £99.00 | matches comparison sites |
| 0.5mg | £119.00 | glpcomparison.com £119.00, healthcount.app £119.00 | matches comparison sites |
| 1mg | £166.00 | glpcomparison.com £166.00, healthcount.app £166.00 | matches comparison sites |
| 1.7mg | £192.00 | glpcomparison.com £192.00, healthcount.app £192.00 | matches comparison sites |
| 2.4mg | £205.00 | glpcomparison.com £205.00, healthcount.app £205.00 | matches comparison sites |
| 7.2mg | £285.00 | glpcomparison.com £285.00, healthcount.app £285.00 | matches comparison sites |

### The Family Chemist (wegovy): partial

Page: https://www.thefamilychemist.co.uk/wegovy/

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | £279.99 | glpcomparison.com £220.00 | **check**: comparison sites -21.4% |

### Voy (wegovy): blocked

Page: https://www.joinvoy.com/weight-loss/medications/wegovy

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £144.00 | glpcomparison.com £144.00, healthcount.app £144.00 | matches comparison sites |
| 0.5mg | £169.00 | glpcomparison.com £169.00, healthcount.app £169.00 | matches comparison sites |
| 1mg | £189.00 | glpcomparison.com £189.00, healthcount.app £189.00 | matches comparison sites |
| 1.7mg | £219.00 | glpcomparison.com £219.00, healthcount.app £219.00 | matches comparison sites |
| 2.4mg | £239.00 | glpcomparison.com £239.00, healthcount.app £239.00 | matches comparison sites |
| 7.2mg | £309.00 | glpcomparison.com £309.00, healthcount.app £409.00 | **check**: comparison sites +16.2% |

### YourPharmacy (wegovy): blocked

Page: https://yourpharmacy.uk/wegovy/

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £129.00 | glpcomparison.com £129.00 | matches comparison sites |
| 0.5mg | £138.00 | glpcomparison.com £138.00 | matches comparison sites |
| 1mg | £149.00 | glpcomparison.com £149.00 | matches comparison sites |
| 1.7mg | £179.00 | glpcomparison.com £179.00 | matches comparison sites |
| 2.4mg | £215.00 | glpcomparison.com £215.00 | matches comparison sites |
| 7.2mg | £270.00 | glpcomparison.com £270.00 | matches comparison sites |

### Zava (wegovy): blocked

Page: https://www.zavamed.com/uk/wegovy.html

Why: bot protection page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £99.99 | glpcomparison.com £89.00, healthcount.app £89.00 | **check**: comparison sites -11% |
| 0.5mg | £119.99 | glpcomparison.com £108.99, healthcount.app £108.99 | **check**: comparison sites -9.2% |
| 1mg | £149.99 | glpcomparison.com £118.99, healthcount.app £118.99 | **check**: comparison sites -20.7% |
| 1.7mg | £168.99 | glpcomparison.com £158.99, healthcount.app £158.99 | **check**: comparison sites -5.9% |
| 2.4mg | £189.99 | glpcomparison.com £178.99, healthcount.app £178.99 | **check**: comparison sites -5.8% |
| 7.2mg | £259.99 | glpcomparison.com £238.99, healthcount.app £238.99 | **check**: comparison sites -8.1% |

## Not configured yet, but comparison sites disagree with us by >5% (27)

Hints only — the pharmacy's own site is the source of truth; these are worth a manual check.

| Pharmacy | Med | Dose | Ours now | Comparators (median) | Sites |
|---|---|---|---|---|---|
| Curely | mounjaro | 2.5mg | £139.59 | £130.30 | glpcomparison.com £121.00, comparemj.co.uk £139.59 |
| Cuva Health | mounjaro | 5mg | £179.99 | £167.99 | glpcomparison.com £167.99 |
| Pharmacy Express | mounjaro | 2.5mg | £144.99 | £162.49 | glpcomparison.com £144.99, comparemj.co.uk £179.99 |
| Pharmacy Express | mounjaro | 5mg | £164.99 | £182.49 | glpcomparison.com £164.99, comparemj.co.uk £199.99 |
| Pharmacy Express | mounjaro | 7.5mg | £224.99 | £237.49 | glpcomparison.com £224.99, comparemj.co.uk £249.99 |
| Pharmacy Express | mounjaro | 10mg | £244.99 | £262.49 | glpcomparison.com £244.99, comparemj.co.uk £279.99 |
| Pharmacy Express | mounjaro | 12.5mg | £264.99 | £282.49 | glpcomparison.com £264.99, comparemj.co.uk £299.99 |
| Cloud Pharmacy | wegovy | 0.25mg | £119.28 | £109.99 | glpcomparison.com £109.99 |
| Cloud Pharmacy | wegovy | 1.7mg | £173.28 | £149.99 | glpcomparison.com £149.99, healthcount.app £149.99 |
| Cloud Pharmacy | wegovy | 2.4mg | £233.28 | £174.99 | glpcomparison.com £174.99, healthcount.app £174.99 |
| Cloud Pharmacy | wegovy | 7.2mg | £284.28 | £259.99 | glpcomparison.com £259.99 |
| Curate | wegovy | 0.25mg | £108.00 | £133.00 | glpcomparison.com £133.00 |
| Curate | wegovy | 0.5mg | £128.00 | £153.00 | glpcomparison.com £153.00 |
| Curate | wegovy | 1mg | £135.00 | £160.00 | glpcomparison.com £160.00 |
| Curate | wegovy | 1.7mg | £178.00 | £203.00 | glpcomparison.com £203.00 |
| Curely | wegovy | 2.4mg | £239.99 | £219.89 | glpcomparison.com £219.89 |
| Curely | wegovy | 7.2mg | £219.89 | £239.89 | glpcomparison.com £239.89 |
| Goodbody Clinic | wegovy | 0.25mg | £205.00 | £109.00 | glpcomparison.com £109.00 |
| Goodbody Clinic | wegovy | 0.5mg | £205.00 | £119.00 | glpcomparison.com £119.00 |
| Goodbody Clinic | wegovy | 1mg | £205.00 | £129.00 | glpcomparison.com £129.00 |
| Goodbody Clinic | wegovy | 1.7mg | £235.00 | £140.00 | glpcomparison.com £140.00 |
| Goodbody Clinic | wegovy | 2.4mg | £290.00 | £160.00 | glpcomparison.com £160.00 |
| Next Script | wegovy | 0.25mg | £84.98 | £79.97 | glpcomparison.com £79.97 |
| Next Script | wegovy | 0.5mg | £84.98 | £79.98 | glpcomparison.com £79.98 |
| Next Script | wegovy | 1mg | £84.98 | £79.99 | glpcomparison.com £79.99 |
| Tribelle | wegovy | 0.5mg | £111.00 | £126.00 | glpcomparison.com £126.00 |
| Tribelle | wegovy | 7.2mg | £570.00 | £237.50 | glpcomparison.com £237.50 |

## Limits of this prototype

- Only the pharmacies listed in `scripts/price-scraper/sources.json` are read; the rest show as `manual` until their price-page URLs are added.
- Pages that need a real browser (prices loaded by JavaScript) are reported, not rendered. Bot-protection challenges are never solved: if both Node and curl get one, the pharmacy is reported as blocked and goes on the manual check list.
- From GitHub's servers, Cloudflare refuses Asda, Superdrug, Zava and YourPharmacy (data-centre IPs); these are expected on the manual check list each month.
- A page that loads without prices, or a failed request, is retried once after a pause before it is reported.
- healthcount.app quotes a monthly total that may include delivery, so it can sit slightly above the pen price.