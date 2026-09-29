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
const CURATE_TABLE_PRICES = providerTablePriceSentence("curate", "Curate");
const CURATE_FACTS = providerTableFacts("curate");

const providerUrl = "https://www.curatehealth.co.uk/collections/weight-loss";

/** Provider details we have no recorded source or check date for. Listed openly, not filled in. */
const CURATE_UNCONFIRMED = [
  "Delivery services, delivery times and delivery charges",
  "Pharmacy collection as an alternative to delivery",
  "Packaging and cold-chain handling for injectable pens",
  "Support channels (phone, email, pharmacist follow-up)",
  "Availability of other weight-management medicines",
  "The steps of the consultation and the eligibility criteria Curate applies",
  "Any first-order offer, voucher or subscription pricing (our tables use list price only)",
];

const CURATE_FAQ = [
  {
    q: "Which medicines does Curate list in our comparison?",
    a: "Mounjaro and Wegovy. Both appear in our price tables with the check date shown.",
  },
  {
    q: "How much does Curate weight loss treatment cost?",
    a:
      CURATE_TABLE_PRICES ??
      "Curate's prices vary by medicine and strength; see our comparison tables for the strengths it lists.",
  },
  {
    q: "Does Curate charge for delivery, or offer collection?",
    a: "We have not confirmed Curate's delivery or collection options or charges, so this page does not state them. Check the total at checkout.",
  },
  {
    q: "Is Curate a registered pharmacy?",
    a: `Our comparison records list GPhC registration number ${CURATE_FACTS.gphcRegNo ?? "on file"}. You can confirm it on the GPhC register.`,
  },
  {
    q: "Are non-injection treatments available?",
    a: "We have not confirmed this for Curate, so we do not list any. Ask Curate directly.",
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

export default function CuratePharmacyContent() {
  /** Paste the live code here when available. */
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Curate"
      fileRef="HW-CURATE-2026"
      title="Curate weight management review"
      subtitle="Independent provider review of Curate: checked Mounjaro and Wegovy prices by strength, registration details and what we have not yet confirmed (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy"
      providerName="Curate"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        { k: "Provider", v: "Curate" },
        { k: "Treatments compared", v: "Mounjaro · Wegovy" },
        {
          k: "Prices checked",
          v:
            [...new Set([CURATE_FACTS.mounjaro?.checked, CURATE_FACTS.wegovy?.checked])]
              .filter(Boolean)
              .join(" · ") || "See tables",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Curate.webp"
      heroProviderLogoAlt="Curate"
    >
      <section className="space-y-4">
        <div className="mb-6 rounded-xl border border-amber-100 bg-amber-50/30 p-5 shadow-sm">
          <p className="text-slate-800 leading-relaxed">
            <strong className="text-amber-900">Service profile:</strong> Curate is an online
            provider of prescription weight-loss medicines. This page sets out what we have
            checked and can source, and lists separately what we have not yet confirmed.
          </p>
        </div>
        <p className="text-slate-800 leading-relaxed">
          Curate appears in our Mounjaro and Wegovy comparison tables. The figures below are the
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
              ...(CURATE_FACTS.gphcRegNo
                ? [`GPhC registration number recorded in our tables: ${CURATE_FACTS.gphcRegNo}`]
                : []),
              ...(CURATE_FACTS.rating != null
                ? [`Customer rating shown in our tables: ${CURATE_FACTS.rating} out of 5`]
                : []),
              "A consultation is marked as included in the Mounjaro price record",
              "Prices are list prices for a single pen; delivery is not included",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Curate prices by strength
        </p>
        <PharmacyPriceCompareHint />
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {CURATE_FACTS.mounjaro ? (
            <PriceTable
              title="Mounjaro"
              rows={CURATE_FACTS.mounjaro.rows}
              checked={CURATE_FACTS.mounjaro.checked}
            />
          ) : null}
          {CURATE_FACTS.wegovy ? (
            <PriceTable
              title="Wegovy"
              rows={CURATE_FACTS.wegovy.rows}
              checked={CURATE_FACTS.wegovy.checked}
            />
          ) : null}
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          Wegovy 7.2 mg is marked TBC in the supplied data. We have kept it as listed; confirm
          this strength with Curate before you order.
        </p>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Not yet confirmed
        </p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          We have no recorded source or check date for the details below, so this page does not
          state them. Check them with Curate before you order.
        </p>
        <Points items={CURATE_UNCONFIRMED} />
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
          tables for how Curate sits against other providers.
        </p>
        <div className="mt-6">
          <ProviderCta url={providerUrl} name="Curate">
            Visit Curate
          </ProviderCta>
        </div>
      </section>

      <section>
        <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
          Frequently asked questions
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {CURATE_FAQ.map((item) => (
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
