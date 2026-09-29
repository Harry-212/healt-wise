"use client";

import Link from "next/link";
import {
  HazardBox,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
  ProviderCta,
} from "./_dossier";
import {
  providerTableFacts,
  providerTablePriceSentence,
  type ProviderTableRow,
} from "@/lib/data/provider-price-summary";

/** Checked table prices only (same medicine, strength and single pen). */
const CLOUD_TABLE_PRICES = providerTablePriceSentence("cloud-pharmacy", "Cloud Pharmacy");
const CLOUD_FACTS = providerTableFacts("cloud-pharmacy");
/** Cloud Pharmacy is deliberately excluded from the public Mounjaro table (data-quality hold), so only list what is actually shown. */
const CLOUD_CHECKED_MEDICINES = [
  CLOUD_FACTS.mounjaro ? "Mounjaro" : null,
  CLOUD_FACTS.wegovy ? "Wegovy" : null,
].filter((v): v is string => Boolean(v));
const CLOUD_CHECKED_MEDICINES_LABEL = CLOUD_CHECKED_MEDICINES.join(" · ") || "See tables";

const providerUrl =
  "https://www.cloudpharmacy.co.uk/online-doctor/weight-loss-treatments/";

/** Provider details we have no recorded source or check date for. Listed openly, not filled in. */
const CLOUD_UNCONFIRMED = [
  ...(CLOUD_FACTS.mounjaro
    ? []
    : ["Mounjaro pricing (not currently shown in our comparison table)"]),
  "Delivery services, delivery times and delivery charges",
  "Packaging and cold-chain handling for injectable pens",
  "Support channels (phone, email, pharmacist follow-up)",
  "Availability of other weight-management medicines",
  "The steps of the consultation and the eligibility criteria Cloud Pharmacy applies",
  "Any first-order offer, voucher or subscription pricing (our tables use list price only)",
];

const CLOUD_FAQ = [
  {
    q: "Which medicines does Cloud Pharmacy list in our comparison?",
    a: `${CLOUD_CHECKED_MEDICINES_LABEL}. It appears in our price tables with the check date shown.`,
  },
  {
    q: "How much does Cloud Pharmacy weight loss treatment cost?",
    a:
      CLOUD_TABLE_PRICES ??
      "Cloud Pharmacy's prices vary by medicine and strength; see our comparison tables for the strengths it lists.",
  },
  {
    q: "Does Cloud Pharmacy charge for delivery?",
    a: "We have not confirmed Cloud Pharmacy's delivery services or charges, so this page does not state them. Check the total at checkout.",
  },
  {
    q: "Is Cloud Pharmacy a registered pharmacy?",
    a: `Our comparison records list GPhC registration number ${CLOUD_FACTS.gphcRegNo ?? "on file"}. You can confirm it on the GPhC register.`,
  },
  {
    q: "Are non-injection treatments available?",
    a: "We have not confirmed this for Cloud Pharmacy, so we do not list any. Ask Cloud Pharmacy directly.",
  },
];

function PriceTable({
  title,
  rows,
  checked,
}: {
  title: string;
  rows: ProviderTableRow[];
  checked: string;
}) {
  return (
    <div className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
      <p className="font-bold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-600">Single pen, list price. Checked {checked}.</p>
      <table className="mt-3 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-600">
            <th className="py-1.5 pr-3 font-semibold">Strength</th>
            <th className="py-1.5 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.strength} className="border-b border-slate-100 last:border-0">
              <td className="py-1.5 pr-3 text-slate-800">{r.strength}</td>
              <td className="py-1.5 text-slate-800">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CloudPharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Cloud Pharmacy"
      fileRef="HW-CLOUD-2026"
      title="Cloud Pharmacy weight management review"
      subtitle={`Independent provider review of Cloud Pharmacy: checked ${CLOUD_CHECKED_MEDICINES_LABEL} prices by strength, registration details and what we have not yet confirmed (information only — not medical advice).`}
      scopeLabel={`Scope: ${CLOUD_CHECKED_MEDICINES_LABEL}`}
      providerName="Cloud Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Cloud Pharmacy" },
        { k: "Treatments compared", v: CLOUD_CHECKED_MEDICINES_LABEL },
        {
          k: "Prices checked",
          v:
            [...new Set([CLOUD_FACTS.mounjaro?.checked, CLOUD_FACTS.wegovy?.checked])]
              .filter(Boolean)
              .join(" · ") || "See tables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/cloud.webp"
      heroProviderLogoAlt="Cloud Pharmacy"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            <strong className="text-blue-900">Service profile:</strong> Cloud Pharmacy is an
            online provider of prescription weight-loss medicines. This page sets out what we
            have checked and can source, and lists separately what we have not yet confirmed.
          </p>
        </div>
        <p className="text-slate-800 leading-relaxed">
          Cloud Pharmacy appears in our {CLOUD_CHECKED_MEDICINES_LABEL} comparison table
          {CLOUD_CHECKED_MEDICINES.length === 1 ? "" : "s"}. The figures below are the rows from
          {CLOUD_CHECKED_MEDICINES.length === 1 ? " that table" : " those tables"}, with the check
          date shown on each.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Checked facts
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <Points
            items={[
              ...(CLOUD_FACTS.gphcRegNo
                ? [`GPhC registration number recorded in our tables: ${CLOUD_FACTS.gphcRegNo}`]
                : []),
              ...(CLOUD_FACTS.rating != null
                ? [`Customer rating shown in our tables: ${CLOUD_FACTS.rating} out of 5`]
                : []),
              ...(CLOUD_CHECKED_MEDICINES[0]
                ? [`A consultation is marked as included in the ${CLOUD_CHECKED_MEDICINES[0]} price record`]
                : []),
              "Prices are list prices for a single pen; delivery is not included",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Cloud Pharmacy Wegovy prices
        </p>
        <PharmacyPriceCompareHint
          heading="Compare prices across providers:"
          intro=""
          links={[
            { href: "/wegovy-price-comparison", label: "Compare Wegovy prices" },
            { href: "/mounjaro-price-comparison", label: "Compare Mounjaro prices" },
          ]}
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {CLOUD_FACTS.mounjaro ? (
            <PriceTable
              title="Mounjaro"
              rows={CLOUD_FACTS.mounjaro.rows}
              checked={CLOUD_FACTS.mounjaro.checked}
            />
          ) : null}
          {CLOUD_FACTS.wegovy ? (
            <PriceTable
              title="Wegovy"
              rows={CLOUD_FACTS.wegovy.rows}
              checked={CLOUD_FACTS.wegovy.checked}
            />
          ) : null}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Not yet confirmed
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          We have no recorded source or check date for the details below, so this page does not
          state them. Check them with Cloud Pharmacy before you order.
        </p>
        <Points items={CLOUD_UNCONFIRMED} />
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Our view
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This section is editorial opinion based only on the listed prices. Compare the same
          strength and pack size across providers, and add delivery and any other charges to
          reach a total.
          {CLOUD_FACTS.mounjaro ? (
            <>
              {" "}
              See the{" "}
              <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-800 underline">
                Mounjaro
              </Link>{" "}
              table for how Cloud Pharmacy sits against other providers.
            </>
          ) : null}
          {CLOUD_FACTS.wegovy ? (
            <>
              {" "}
              See the{" "}
              <Link href="/wegovy-price-comparison" className="font-semibold text-emerald-800 underline">
                Wegovy
              </Link>{" "}
              table for how Cloud Pharmacy sits against other providers.
            </>
          ) : null}
        </p>
        <div className="mt-6">
          <ProviderCta url={providerUrl} name="Cloud Pharmacy">
            Visit Cloud Pharmacy
          </ProviderCta>
        </div>
      </section>

      <section>
        <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {CLOUD_FAQ.map((item) => (
            <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
              <h3 className="font-bold text-slate-900">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
