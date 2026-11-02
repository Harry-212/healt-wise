# Price check — 2026-11-02

> **Standard-price rule.** Healthwise360's main comparison tables use the normal publicly available price for one treatment unit or monthly supply, without a promotional code, new-customer discount or long-term commitment. Delivery and compulsory fees are displayed separately where verified. Introductory, subscription and discount-code prices may be shown separately with their conditions.

Reviewer checklist: (1) confirm every proposed price is the normal public price, not a code, first-order, subscription or plan price; (2) a price shown only after a code or first-order reward is stored separately, never in the table; (3) delivery and consultation fees are only called "included" when the checkout shows it; (4) a strength the provider does not list is "N/A", not "TBC".

> Prototype run. **Nothing on the website was changed.** This report shows what the monthly update *would* do.

## Summary

- Providers on Healthwise360: **6** (Mounjaro 6, Wegovy 6); current prices read from the live site.
- Pharmacy pages configured this run: **8** (ok: 3, partial: 1, no-prices: 4).
- Dose prices: **review** 23 · **manual** 49.
- Why `manual`: no-prices 24 · not-configured 24 · partial 1 (not-configured = price-page URL not added to sources.json yet).

| Action | Meaning |
|---|---|
| unchanged | Pharmacy's standard price equals ours |
| update | Read with high confidence, within 5% of the comparison sites (or none to check) — would be updated |
| review | Read, but medium confidence or more than 5% away from the comparison sites — needs a human look |
| manual | No usable price from the pharmacy (not configured, blocked, or page needs a browser) — keep ours |

## Comparison sites (cross-check only)

| Site | Price rows | Matched to our pharmacies | Last updated | Note |
|---|---|---|---|---|
| glpcomparison.com | 971 | 3 pharmacies | 29 October 2026 |  |
| comparemj.co.uk | 264 | 1 pharmacies | per row |  |
| healthcount.app | 271 | 1 pharmacies | per row |  |

## Pharmacy pages read

Fetched with Node first; `curl` means Node was refused and one retry with curl (same user agent) succeeded. `node+curl` means both were refused.

| Pharmacy | Medication | Status | Doses read | Fetched via | Note |
|---|---|---|---|---|---|
| dosedirect | mounjaro | ok | 6/6 | node |  |
| dosedirect | wegovy | partial | 5/6 | node |  |
| pharmacy-me | mounjaro | no-prices | 0/6 | node | no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| pharmacy-me | wegovy | no-prices | 0/6 | node | no dose prices in the page HTML (title "Pharmacy + Me \| Clinician-Led Weight Management", 5 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| reach-online-pharmacy | mounjaro | ok | 6/6 | node |  |
| reach-online-pharmacy | wegovy | ok | 6/6 | node |  |
| solira | mounjaro | no-prices | 0/6 | node | no dose prices in the page HTML (title "Mounjaro UK (Tirzepatide) Weight Loss Injections, 2.5mg to 15mg \| Solira", 406 KB); same after a retry — likely loaded by JavaScript or a temporary page |
| solira | wegovy | no-prices | 0/6 | node | no dose prices in the page HTML (title "Wegovy UK (Semaglutide Injection) for Weight Loss \| Solira", 383 KB); same after a retry — likely loaded by JavaScript or a temporary page |

## Proposed changes and items to review (23)

*Site price* is always the public one-off standard price. Partner-code prices are shown separately in brackets as *code price*, never used for ranking, and affiliate rows are never applied automatically.

| Pharmacy | Med | Dose | Ours now | Pharmacy (standard) | Site price | Change | Comparators (median) | Δ vs comparators | Action | How read |
|---|---|---|---|---|---|---|---|---|---|---|
| DoseDirect | mounjaro | 2.5mg | £134.99 | £144.99 | £144.99 (code price £134.99, −£10) | £10.00 | £144.99 (1) | 0% | **review** | text |
| DoseDirect | mounjaro | 5mg | £155.99 | £165.99 | £165.99 (code price £155.99, −£10) | £10.00 | £165.99 (1) | 0% | **review** | text |
| DoseDirect | mounjaro | 7.5mg | £207.99 | £217.99 | £217.99 (code price £207.99, −£10) | £10.00 | £217.99 (1) | 0% | **review** | text |
| DoseDirect | mounjaro | 10mg | £231.99 | £241.99 | £241.99 (code price £231.99, −£10) | £10.00 | £241.99 (1) | 0% | **review** | text |
| DoseDirect | mounjaro | 12.5mg | £248.99 | £258.99 | £258.99 (code price £248.99, −£10) | £10.00 | £258.99 (1) | 0% | **review** | text |
| DoseDirect | mounjaro | 15mg | £267.99 | £278.99 | £278.99 (code price £268.99, −£10) | £11.00 | £278.99 (1) | 0% | **review** | text |
| Reach Online Pharmacy | mounjaro | 2.5mg | £139.49 | £154.99 | £154.99 (code price £139.49, −10% code Welcome10health) | £15.50 | — (0) | — | **review** | text |
| Reach Online Pharmacy | mounjaro | 5mg | £158.39 | £175.99 | £175.99 (code price £158.39, −10% code Welcome10health) | £17.60 | — (0) | — | **review** | text |
| Reach Online Pharmacy | mounjaro | 7.5mg | £217.99 | £241.99 | £241.99 (code price £217.79, −10% code Welcome10health) | £24.00 | — (0) | — | **review** | text |
| Reach Online Pharmacy | mounjaro | 10mg | £239.39 | £265.99 | £265.99 (code price £239.39, −10% code Welcome10health) | £26.60 | — (0) | — | **review** | text |
| Reach Online Pharmacy | mounjaro | 12.5mg | £267.29 | £296.99 | £296.99 (code price £267.29, −10% code Welcome10health) | £29.70 | — (0) | — | **review** | text |
| Reach Online Pharmacy | mounjaro | 15mg | £290.69 | £322.99 | £322.99 (code price £290.69, −10% code Welcome10health) | £32.30 | — (0) | — | **review** | text |
| DoseDirect | wegovy | 0.25mg | £99.99 | £99.99 | £99.99 (code price £89.99, −£10) | £0.00 | £99.99 (1) | 0% | **review** | text |
| DoseDirect | wegovy | 0.5mg | £104.99 | £114.99 | £114.99 (code price £104.99, −£10) | £10.00 | £114.99 (1) | 0% | **review** | text |
| DoseDirect | wegovy | 1mg | £109.99 | £119.99 | £119.99 (code price £109.99, −£10) | £10.00 | £119.99 (1) | 0% | **review** | text |
| DoseDirect | wegovy | 1.7mg | £139.99 | £149.99 | £149.99 (code price £139.99, −£10) | £10.00 | £149.99 (1) | 0% | **review** | text |
| DoseDirect | wegovy | 2.4mg | £189.99 | £199.99 | £199.99 (code price £189.99, −£10) | £10.00 | £199.99 (1) | 0% | **review** | text |
| Reach Online Pharmacy | wegovy | 0.25mg | £85.49 | £94.99 | £94.99 (code price £85.49, −10% code Welcome10health) | £9.50 | — (0) | — | **review** | text |
| Reach Online Pharmacy | wegovy | 0.5mg | £89.99 | £99.99 | £99.99 (code price £89.99, −10% code Welcome10health) | £10.00 | — (0) | — | **review** | text |
| Reach Online Pharmacy | wegovy | 1mg | £93.59 | £103.99 | £103.99 (code price £93.59, −10% code Welcome10health) | £10.40 | — (0) | — | **review** | text |
| Reach Online Pharmacy | wegovy | 1.7mg | £157.49 | £174.99 | £174.99 (code price £157.49, −10% code Welcome10health) | £17.50 | — (0) | — | **review** | text |
| Reach Online Pharmacy | wegovy | 2.4mg | £206.09 | £228.99 | £228.99 (code price £206.09, −10% code Welcome10health) | £22.90 | — (0) | — | **review** | text |
| Reach Online Pharmacy | wegovy | 7.2mg | £245.69 | £272.99 | £272.99 (code price £245.69, −10% code Welcome10health) | £27.30 | — (0) | — | **review** | text |

## Manual check list (5)

These pages are configured but could not be read this run. Open the page, confirm each standard price, and change any that differ in /admin-dashboard.
The comparison sites are hints only; the pharmacy's own page is the source of truth.

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

### Solira (mounjaro): no-prices

Page: https://withsolira.com/treatments/mounjaro

Why: no dose prices in the page HTML (title "Mounjaro UK (Tirzepatide) Weight Loss Injections, 2.5mg to 15mg \| Solira", 406 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 2.5mg | £119.99 | — | no comparison data |
| 5mg | £159.99 | — | no comparison data |
| 7.5mg | £219.99 | — | no comparison data |
| 10mg | £249.99 | — | no comparison data |
| 12.5mg | £259.99 | — | no comparison data |
| 15mg | £279.99 | — | no comparison data |

### DoseDirect (wegovy): partial

Page: https://dosedirect.co.uk/weight-loss/

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 7.2mg | TBC | — | no comparison data |

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

### Solira (wegovy): no-prices

Page: https://withsolira.com/treatments/wegovy

Why: no dose prices in the page HTML (title "Wegovy UK (Semaglutide Injection) for Weight Loss \| Solira", 383 KB); same after a retry — likely loaded by JavaScript or a temporary page

| Dose | Ours now | Comparison sites | Hint |
|---|---|---|---|
| 0.25mg | £64.99 | — | no comparison data |
| 0.5mg | £87.99 | — | no comparison data |
| 1mg | £99.99 | — | no comparison data |
| 1.7mg | £139.99 | — | no comparison data |
| 2.4mg | £189.99 | — | no comparison data |
| 7.2mg | £229.00 | — | no comparison data |

## Not configured yet, but comparison sites disagree with us by >5% (0)

Hints only — the pharmacy's own site is the source of truth; these are worth a manual check.

## Limits of this prototype

- Only the pharmacies listed in `scripts/price-scraper/sources.json` are read; the rest show as `manual` until their price-page URLs are added.
- Pages that need a real browser (prices loaded by JavaScript) are reported, not rendered. Bot-protection challenges are never solved: if both Node and curl get one, the pharmacy is reported as blocked and goes on the manual check list.
- From GitHub's servers, Cloudflare refuses Asda, Superdrug, Zava and YourPharmacy (data-centre IPs); these are expected on the manual check list each month.
- A page that loads without prices, or a failed request, is retried once after a pause before it is reported.
- healthcount.app quotes a monthly total that may include delivery, so it can sit slightly above the pen price.