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
const CURELY_TABLE_PRICES = providerTablePriceSentence("curely", "Curely");
const CURELY_FACTS = providerTableFacts("curely");

const providerUrl = "https://www.curely.co.uk/online-doctor/weight-loss";

/** Provider details we have no recorded source or check date for. Listed openly, not filled in. */
const CURELY_UNCONFIRMED = [
  "Delivery services, delivery times and delivery charges",
  "Packaging and cold-chain handling for injectable pens",
  "Support channels (phone, email, pharmacist follow-up)",
  "Whether Saxenda, Orlistat, Xenical or Alli are currently offered",
  "The steps of the consultation and the eligibility criteria Curely applies",
  "Any first-order offer, voucher or subscription pricing (our tables use list price only)",
];

const CURELY_FAQ = [
  {
    q: "Which medicines does Curely list in our comparison?",
    a: "Mounjaro and Wegovy. Both appear in our price tables with the check date shown.",
  },
  {
    q: "How much does Curely weight loss treatment cost?",
    a:
      CURELY_TABLE_PRICES ??
      "Curely's prices vary by medicine and strength; see our comparison tables for the strengths it lists.",
  },
  {
    q: "Does Curely charge for delivery?",
    a: "We have not confirmed Curely's delivery services or charges, so this page does not state them. Check the total at checkout.",
  },
  {
    q: "Is Curely a registered pharmacy?",
    a: `Our comparison records list GPhC registration number ${CURELY_FACTS.gphcRegNo ?? "on file"}. You can confirm it on the GPhC register.`,
  },
  {
    q: "Are non-injection treatments available?",
    a: "We have not confirmed this for Curely, so we do not list any. Ask Curely directly.",
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

export default function CurelyPharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Curely"
      fileRef="HW-CURELY-2026"
      title="Curely weight management review"
      subtitle="Independent provider review of Curely: checked Mounjaro and Wegovy prices by strength, registration details and what we have not yet confirmed (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy"
      providerName="Curely"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Curely" },
        { k: "Treatments compared", v: "Mounjaro · Wegovy" },
        {
          k: "Prices checked",
          v:
            [...new Set([CURELY_FACTS.mounjaro?.checked, CURELY_FACTS.wegovy?.checked])]
              .filter(Boolean)
              .join(" · ") || "See tables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Curely.webp"
      heroProviderLogoAlt="Curely"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            <strong className="text-indigo-900">Service profile:</strong> Curely is an online
            provider of prescription weight-loss medicines. This page sets out what we have
            checked and can source, and lists separately what we have not yet confirmed.
          </p>
        </div>
        <p className="text-slate-800 leading-relaxed">
          Curely appears in our Mounjaro and Wegovy comparison tables. The figures below are the
          rows from those tables, with the check date shown on each.
        </p>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Checked facts
        </p>
        <HazardBox className="mt-3 ring-1 ring-red-900/5">
          <Points
            items={[
              ...(CURELY_FACTS.gphcRegNo
                ? [`GPhC registration number recorded in our tables: ${CURELY_FACTS.gphcRegNo}`]
                : []),
              ...(CURELY_FACTS.rating != null
                ? [`Customer rating shown in our tables: ${CURELY_FACTS.rating} out of 5`]
                : []),
              "A consultation is marked as included in the Mounjaro price record",
              "Prices are list prices for a single pen; delivery is not included",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Curely prices by strength
        </p>
        <PharmacyPriceCompareHint />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {CURELY_FACTS.mounjaro ? (
            <PriceTable
              title="Mounjaro"
              rows={CURELY_FACTS.mounjaro.rows}
              checked={CURELY_FACTS.mounjaro.checked}
            />
          ) : null}
          {CURELY_FACTS.wegovy ? (
            <PriceTable
              title="Wegovy"
              rows={CURELY_FACTS.wegovy.rows}
              checked={CURELY_FACTS.wegovy.checked}
            />
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          Wegovy 7.2 mg is listed below the 2.4 mg price in the supplied data. We have kept it as
          listed; confirm both strengths with Curely before you order.
        </p>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Not yet confirmed
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          We have no recorded source or check date for the details below, so this page does not
          state them. Check them with Curely before you order.
        </p>
        <Points items={CURELY_UNCONFIRMED} />
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Our view
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This section is editorial opinion based only on the listed prices. Compare the same
          strength and pack size across providers, and add delivery and any other charges to
          reach a total. See the{" "}
          <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-800 underline">
            Mounjaro
          </Link>{" "}
          and{" "}
          <Link href="/wegovy-price-comparison" className="font-semibold text-emerald-800 underline">
            Wegovy
          </Link>{" "}
          tables for how Curely sits against other providers.
        </p>
        <div className="mt-6">
          <ProviderCta url={providerUrl} name="Curely">
            Visit Curely
          </ProviderCta>
        </div>
      </section>

      <section>
        <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {CURELY_FAQ.map((item) => (
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
