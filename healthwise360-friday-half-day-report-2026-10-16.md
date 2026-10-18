# Healthwise360 — Friday Half-Day Verification Report (16 October 2026)

**Auditor / Engineer:** Agus  
**Date:** 16 October 2026  
**Scope:** 50% workload — strictly limited to the three key rebuilt pages:
1. `https://www.healthwise360.co.uk/`
2. `https://www.healthwise360.co.uk/mounjaro-price-comparison`
3. `https://www.healthwise360.co.uk/wegovy-price-comparison`

---

## 1. Executive Summary

All three rebuilt landing pages and conversion journeys (A, B, and C) have been systematically inspected, tested, and validated.
- **Google Search Console & Indexing:** 100% PASS (All 3 URLs are verified as **"URL ada di Google" / "Halaman diindeks"**, crawled successfully by Smartphone Googlebot, with exact match user-declared and Google-selected canonicals).
- **HTTP & Live Server Accessibility:** 100% PASS (All 3 URLs return HTTP 200 OK with clean HTML, self-referencing canonicals, and valid structured data).
- **Consent & Event Tracking Architecture:** 100% PASS (Zero tracking events dispatched when consent is rejected; exactly one `provider_click` event fired with sanitized metadata when consent is accepted).
- **Navigation & Links:** All cross-links between Homepage, Price Comparison tables, Pharmacy Dossier profiles, and outbound GPhC-registered provider destinations resolve without broken paths or redirection loops.
- **Defects Detected:** **0 Defects** (All Clear).

---

## 2. Google Access and Indexing Check

Detailed audit file saved as:
`healthwise360-rebuilt-pages-indexing-check-2026-10-16.csv`

### Live Search Console Inspection Data

| Target URL | HTTP Status | Declared Canonical | Google-Selected Canonical | Indexing Status | Last Crawl Timestamp (GSC) | Live URL Test | Mobile Usability | Rich Results |
|---|:---:|---|---|:---:|:---:|:---:|:---:|---|
| `https://www.healthwise360.co.uk/` | **200 OK** | `https://www.healthwise360.co.uk/` | `https://www.healthwise360.co.uk/` (URL yang diperiksa) | **Halaman diindeks** | `15 Okt 2026, 12.12.07` | Available to Google | Valid / Mobile Friendly | `WebSite`, `FAQPage`, `BreadcrumbList` |
| `https://www.healthwise360.co.uk/mounjaro-price-comparison` | **200 OK** | `https://www.healthwise360.co.uk/mounjaro-price-comparison` | `https://www.healthwise360.co.uk/mounjaro-price-comparison` (URL yang diperiksa) | **Halaman diindeks** | `14 Okt 2026, 14.21.48` | Available to Google | Valid / Mobile Friendly | `WebPage`, `BreadcrumbList`, `MedicalWebPage` |
| `https://www.healthwise360.co.uk/wegovy-price-comparison` | **200 OK** | `https://www.healthwise360.co.uk/wegovy-price-comparison` | `https://www.healthwise360.co.uk/wegovy-price-comparison` (URL yang diperiksa) | **Halaman diindeks** | `16 Okt 2026, 01.10.05` | Available to Google | Valid / Mobile Friendly | `WebPage`, `BreadcrumbList`, `MedicalWebPage` |

### Technical Verification Notes:
- `robots.txt` permits crawling across all three URLs.
- Meta robots header/tag specifies `index,follow` (no rogue `noindex` tags).
- Crawl user agent confirmed as **Smartphone Googlebot** across all 3 URLs.
- Sitemaps (`https://www.healthwise360.co.uk/sitemap.xml`) properly list and reference all three canonical endpoints.

---

## 3. Links and Click Tracking Verification

Detailed audit file saved as:
`healthwise360-rebuilt-pages-click-check-2026-10-16.csv`

### Journey A: Homepage → Mounjaro Comparison → Pharmacy Profile → Provider Website
- **Step 1:** Homepage (`/`) $\rightarrow$ Click **"Compare Mounjaro prices"** button $\rightarrow$ Navigates smoothly to `/mounjaro-price-comparison`.
- **Step 2:** Mounjaro table $\rightarrow$ Click pharmacy name (`Next Script`) $\rightarrow$ Navigates to `/pharmacies/next-script`.
- **Step 3 (Consent Rejected):** Visitor rejects cookie consent in the banner (`localStorage: hw360_analytics_consent = "denied"`). Google Analytics script (`gtag.js`) is suppressed from rendering. Clicking **"Visit Next Script"** fires **0 analytics events**.
- **Step 4 (Consent Accepted):** Visitor accepts cookie consent (`localStorage: hw360_analytics_consent = "granted"`). `gtag.js` initializes with default granted state. Clicking **"Visit Next Script"** dispatches **exactly one** `provider_click` event:
  - `event`: `provider_click`
  - `provider_name`: `"Next Script"`
  - `provider_id`: `"next-script"`
  - `link_domain`: `"nextscript.co.uk"`
  - `link_url`: `"https://nextscript.co.uk/condition/weight-loss/"` (Sanitized without URL query parameters)
  - `page_path`: `"/pharmacies/next-script"`
  - `transport_type`: `"beacon"`
- **Result:** **PASS**

---

### Journey B: Mounjaro Comparison → Featured Pharmacy Profile → Provider Website
- **Step 1:** Mounjaro table (`/mounjaro-price-comparison`) $\rightarrow$ Click featured partner listing (`Slinic`) $\rightarrow$ Navigates directly to dedicated review dossier at `/pharmacies/slinic`.
- **Step 2 (Consent Rejected):** Clicking provider CTA with consent denied produces **zero analytics requests**.
- **Step 3 (Consent Accepted):** Clicking provider CTA **"Visit Slinic"** sends **one** `provider_click` event:
  - `event`: `provider_click`
  - `provider_name`: `"Slinic"`
  - `provider_id`: `"slinic"`
  - `link_domain`: `"slinic.co.uk"`
  - `link_url`: `"https://slinic.co.uk/condition/weight-loss/"` (Query parameters stripped from GA payload, preserved on actual outbound anchor)
  - `page_path`: `"/pharmacies/slinic"`
  - `transport_type`: `"beacon"`
- **Result:** **PASS**

---

### Journey C: Homepage → Wegovy Comparison → Pharmacy Profile → Provider Website
- **Step 1:** Homepage (`/`) $\rightarrow$ Click **"Compare Wegovy prices"** button $\rightarrow$ Navigates smoothly to `/wegovy-price-comparison`.
- **Step 2:** Wegovy comparison table $\rightarrow$ Click pharmacy profile link (`Reach Online Pharmacy`) $\rightarrow$ Navigates to `/pharmacies/reach-online-pharmacy`.
- **Step 3 (Consent Rejected):** Outbound click sends **zero analytics events**.
- **Step 4 (Consent Accepted):** Clicking **"Claim Deal"** / **"Visit Reach Online Pharmacy"** fires **one** `provider_click` event:
  - `event`: `provider_click`
  - `provider_name`: `"Reach Online Pharmacy"`
  - `provider_id`: `"reach-online-pharmacy"`
  - `link_domain`: `"reachonlinepharmacy.com"`
  - `link_url`: `"https://reachonlinepharmacy.com/weight-loss/"`
  - `page_path`: `"/pharmacies/reach-online-pharmacy"`
  - `transport_type`: `"beacon"`
- **Result:** **PASS**

---

## 4. Defect Log

| Issue # | Target URL | Journey | Description | Severity | Resolution Status |
|:---:|---|:---:|---|:---:|:---:|
| - | None | - | No defects found across all audited routes. | - | **ALL CLEAR** |

---

## 5. Artifacts Created & Output Files

The following files have been generated and updated in accordance with instructions:
1. `healthwise360-rebuilt-pages-indexing-check-2026-10-16.csv` (Search Console & live accessibility audit with verified timestamps).
2. `healthwise360-rebuilt-pages-click-check-2026-10-16.csv` (Journeys A, B, C click and consent verification).
3. `healthwise360-friday-half-day-report-2026-10-16.md` (Formal completion report).

**Check status:** Completed. Workload stopped as instructed.
