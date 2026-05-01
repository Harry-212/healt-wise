"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.pharmica.co.uk/weight-loss/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function PharmicaPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Pharmica"
      fileRef="HW-PHARMICA-2026"
      title="Pharmica (UK): Mounjaro, Wegovy, Saxenda — Weight Loss, Delivery Tiers, and Pricing"
      subtitle="Official dossier: regulated online pharmacy presentation, pharmacist-led checks, broad injectable and capsule range, same-day dispatch claims, multiple UK delivery speeds (including London same-day), discreet packaging, repeat ordering, customer-volume claims, and indicative delivery fee tiers (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · Saxenda · Orlistat · GLP-1 injectables"
      providerName="Pharmica"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Pharmica (GPhC 9012030 — verify premises and distance-selling registration)",
        },
        {
          k: "Pathway",
          v: "Online questionnaire · pharmacist suitability check · secure checkout",
        },
        {
          k: "Fulfilment",
          v: "Royal Mail / couriers · tracked tiers · optional same-day London courier (where listed)",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/pharmica.webp"
      heroProviderLogoAlt="Pharmica"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Pharmica publicly presents as a <strong>leading UK online pharmacy</strong> with strong
          reputation signals, clinically oriented weight-loss SKUs, fast logistics, and a
          patient-first tone. Marketing commonly references <strong>GPhC</strong> registration and
          broader UK compliance language (including MHRA distance-selling positioning where
          applicable) — Health Wise recommends verifying the exact premises and superintendent on the
          GPhC register rather than trusting any third-party page alone.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Their site also cites a large <strong>customer volume</strong> figure and high satisfaction
          scores on review platforms — useful context, but not a substitute for your own clinical and
          commercial due diligence.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Range of treatments (Mounjaro-first clinical ordering)</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Pharmica is portrayed as offering breadth so different BMI and comorbidity profiles can
          find a medically appropriate lane:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-800 leading-relaxed">
          <li>
            <strong>Injectable GLP-1 options</strong> — marketing references semaglutide-based and
            tirzepatide-based lines (branded names depend on current formulary); titration only per
            prescriber/pharmacist governance.
          </li>
          <li>
            <strong>Prescription capsules</strong> — Orlistat-class products for suitable patients who
            meet criteria for fat-absorption therapy.</li>
          <li>
            <strong>OTC alternatives</strong> — where listed for milder needs; still read labels and
            interactions.</li>
        </ul>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Educational copy on their pages describes appetite suppression via hormone pathways, reduced dietary
          fat absorption (Orlistat), and delayed gastric emptying for satiety — trial percentages for
          weight reduction are sometimes quoted in marketing; your prescriber interprets evidence for
          your case.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Short online consultation</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They claim most users finish the questionnaire in <strong>under two minutes</strong>{" "}
          — convenient for busy users, but only accurate if you have weight, height, full medication
          list, and allergy data ready; under-reporting risks unsafe supply decisions.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Personalised support and monitoring</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Pharmica marketing describes pharmacist access, tailored advice, progress monitoring, and
          adjustments based on health and results — framing weight loss as a guided programme rather
          than a single retail transaction, which matters for months-long GLP-1 therapy.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Dispatch and arrival speed (claims)</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Orders before the daily cut-off: same-day dispatch in marketing copy.",
              "Standard delivery: often next working day; some lines up to three working days.",
              "Goal: start treatment quickly versus long retail queues — still weather and stock dependent.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Multiple delivery options</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their checkout typically offers a tiered menu so patients can trade money versus speed and certainty:
        </p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "First Class — illustrative fee around £2.90; FREE over £50 on orders above that threshold in common marketing tables.",
              "Tracked 24-hour — around £3.95 in cited marketing.",
              "Guaranteed next-day — from about £5.95.",
              "Premium early window — up to about £13.95 for tight time slots.",
              "Same-day courier (London) — from about £4.95 with roughly 3–4 hour windows in promotional copy.",
            ]}
          />
        </HazardBox>
        <p className="mt-3 text-slate-800 leading-relaxed">
          For <strong>cold-chain injectables</strong>, choose a tier that minimises time on a van step
          in heat; premium fees can be cheaper than a wasted pen.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Discreet, secure packaging and direct delivery</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Plain unbranded outers, no obvious contents labelling, and confidential handling are
          emphasised — some copy also claims discreet billing descriptors; confirm statements on
          Pharmica’s live checkout and card issuer rules. Delivery can be home, workplace, or
          collection points with tracking emails and missed-delivery recovery options in the
          narrative.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Illustrative medication prices</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Example brackets sometimes shown in public listings: capsules from roughly <strong>£14.99–£21.99</strong>;
            prescription treatments from about <strong>£51.99+</strong>; injectable programmes from
            roughly <strong>£119.99–£149.99+</strong> depending on line and dose — often bundled with
            private prescription and pharmacist support in the headline positioning.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Free prescription framing</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Many SKUs are advertised as including a <strong>free private prescription</strong> to
            avoid split GP fees — still parse the basket to see whether delivery tier or add-ons
            change totals versus competitors at the same strength.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Easy reordering and repeats</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Account-based reordering, pre-filled consultation fields, and ongoing eligibility checks are
          described to keep continuity without unnecessary delay — expect fresh safety questions on
          repeats when guidelines require reassessment.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Patient safety, eligibility, and reassurance</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Every order is tied to questionnaires, BMI and condition gates, and reassessment for repeat
          prescriptions in responsible pathways — aimed at appropriate treatment selection, reduced
          misuse risk, and better long-term outcomes than unsupervised retail.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Convenience versus high-street pharmacy</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Their positioning contrasts 24/7 online access, fast consultation-to-checkout, home delivery, and
          discretion with limited opening hours, travel time, and reduced privacy at physical
          counters — valid for many lifestyles, though some patients still prefer face-to-face
          counselling.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Integrated lifestyle support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Beyond SKUs, Pharmica marketing references educational resources, health guides, and
          lifestyle advice — aligning medication with habit change, which matches evidence-based
          obesity management principles.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Secure payment and confidentiality</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          They advertise secure checkout and confidential billing presentation — standard
          e-commerce hygiene, but still use unique passwords, device updates, and card alerts for any
          high-value medical purchase.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why Pharmica is positioned as a leading choice</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          In industry terms they tick the usual boxes: regulated trusted pharmacy, wide effective treatment range, fast
          discreet delivery, competitive pricing, professional medical support, and convenient online
          service — Health Wise adds: cross-check <strong>dose-level</strong> pricing on comparison
          tables and pick a delivery tier that protects injectable cold chain.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is the two-minute questionnaire enough for GLP-1s?",
              a: "It may be sufficient for triage only if answers are complete and truthful; complex histories may trigger extra questions or decline — that is a safety feature.",
            },
            {
              q: "Should I pay for premium next-day before 9am?",
              a: "If you cannot refrigerate pens quickly after delivery, a tighter window can reduce risk; compare the fee against the pen replacement cost.",
            },
            {
              q: "Does London same-day apply outside the M25?",
              a: "Same-day courier is marketed within London — wider geography will use standard tiers; read live coverage maps.",
            },
            {
              q: "How do I reorder without repeating every field?",
              a: "Marketing describes pre-filled forms with ongoing checks — some fields must still be updated when your health or medicines change.",
            },
            {
              q: "Are Trustpilot scores a medical guarantee?",
              a: "No. Reviews reflect service experience; clinical suitability and side effects are individual.",
            },
            {
              q: "Where do MHRA and GPhC claims apply?",
              a: "MHRA regulates medicines and advertising rules; GPhC registers pharmacies and professionals — verify both registers and Pharmica’s own compliance pages.",
            },
          ].map((f) => (
            <div key={f.q} className="border-t border-slate-200/70 pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-slate-900">{f.q}</p>
              <p className="mt-2 text-slate-800 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
        <p className={sectionLabel}>Conclusion</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Overall, the Pharmica brand story is <strong>breadth plus logistics</strong>
          : pharmacist-led digital checks, Mounjaro/Wegovy/Saxenda/Orlistat-style catalogue depth,
          granular delivery pricing, same-day London option, strong discretion claims, repeat-friendly
          accounts, and bundled headline pricing. Use Health Wise comparisons at identical strengths
          and add the delivery tier you actually need before judging value.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Pharmica
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
