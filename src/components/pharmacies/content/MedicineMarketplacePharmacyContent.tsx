"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://medicinemarketplace.com/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MedicineMarketplacePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Medicine Market Place"
      fileRef="HW-MEDICINE-MARKETPLACE-2026"
      title="Medicine Market Place (Preston): Online Pharmacy, Weight Loss Catalogue and UK Delivery"
      subtitle="Digital pharmacy and health storefront in Preston: weight loss aisle spanning diet aids, slimming pills, and supplements plus prescription routes after review, tracked shipping, modest fees, and free delivery thresholds. Information only, not medical advice."
      scopeLabel="Scope: OTC weight products · Prescription weight loss where approved"
      providerName="Medicine Market Place"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Medicine Market Place, Preston (GPhC 1116946 — verify superintendent pharmacist on register)",
        },
        {
          k: "Range",
          v: "Diet aids · slimming pills · supplements · prescription medicines after consultation",
        },
        {
          k: "Fulfilment",
          v: "Tracked carriers (e.g. Royal Mail; Amazon Shipping cited historically) · ~1–2 working days dispatch · ~3–5 working days typical door-to-door",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/Medicine Marketplace.webp"
      heroProviderLogoAlt="Medicine Market Place"
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Medicine Market Place describes itself as an online pharmacy and medication marketplace
          based in <strong>Preston, United Kingdom</strong>, operating as a digital pharmacy and drug
          store with both over the counter goods and prescription medicines where the law requires a
          supply route through consultation and professional sign off.
        </p>
        <p className="text-slate-800 leading-relaxed">
          The business highlights registration with a <strong>superintendent pharmacist</strong> and
          UK pharmacy regulation as its backbone. Health Wise explains how{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            medicinemarketplace.com
          </a>{" "}
          positions ordering, verification, delivery, costs, and review sentiment so you can place
          it next to GLP-1 only clinics elsewhere on the site.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Why buyers consider this storefront</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <Points
            items={[
              "Weight loss category spans diet aids, slimming pills, and supplements in one catalogue.",
              "Broader health SKU mix than a single brand clinic; useful if you want OTC alongside Rx where offered.",
              "Site navigation by category, price band, or condition described as simple for repeat buyers.",
              "Checkout framed as a short flow: pick product, pay, email confirmation.",
            ]}
          />
          <p className="mt-4 text-slate-800 leading-relaxed">
            Some user feedback notes product detail can feel spread across pages compared with
            deeper single product clinics; others emphasise speed once they reorder familiar SKUs.
          </p>
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Safety and verification</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          For prescription weight loss medicines the pathway may include a{" "}
          <strong>short health questionnaire</strong>, <strong>medical history checks</strong>, and in
          some cases <strong>photo or video steps</strong> to confirm identity or clinical context.
          That extra friction at onboarding is consistent with lawful UK dispensing rather than
          anonymous checkout for prescription only lines.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>How orders are processed and shipped</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            After payment, internal pharmacy preparation commonly takes about{" "}
            <strong>1–2 working days</strong> before handover to a courier.{" "}
            <strong>Weekends and UK bank holidays pause processing</strong>; orders placed late on
            Friday may not move until the following Monday.
          </p>
          <p>
            Marketing cites <strong>tracked delivery</strong> with carriers such as{" "}
            <strong>Royal Mail</strong>, and historically references{" "}
            <strong>Amazon Shipping</strong> on some lanes. After dispatch, many parcels arrive within
            about <strong>48 hours</strong> or two working days depending on postcode, implying a
            reasonable end to end estimate of roughly <strong>3–5 working days</strong> from order
            date when stock is available and no external delay hits.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Delivery fees and free shipping</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            <strong>Standard postage</strong> is often quoted around <strong>£3.19</strong> depending
            on basket composition.
          </p>
          <p>
            <strong>Free delivery</strong> may apply when the order exceeds a threshold commonly near{" "}
            <strong>£40</strong>, though <strong>temperature controlled lines</strong> (for example
            some injections) may be <strong>excluded</strong> from free shipping promotions.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Managing delivery to your address</p>
        <Points
          items={[
            "Confirm full address at checkout; save profiles in an account for faster repeats.",
            "Request changes through support before dispatch; after the dispatch email with tracking, amendments are often blocked.",
            "Use tracking numbers from dispatch mail in the courier portal to plan someone home for cold items.",
          ]}
        />
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Typical costs</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Non prescription supplements and aids vary by SKU. Prescription weight loss supply
            bundles medicine cost plus any separate consultation fee the live funnel applies, and
            postage unless the basket clears the free delivery threshold on qualifying lines.
          </p>
          <p className="mt-3 text-sm text-slate-600">
            Regular buyers sometimes structure baskets to clear £40 style thresholds on eligible
            goods, excluding cold chain carve outs.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Reviews and sentiment</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Aggregators such as <strong>Trustpilot</strong> and similar surfaces often show{" "}
            <strong>fast delivery after dispatch</strong>, <strong>competitive pricing</strong>,{" "}
            <strong>clear email updates</strong>, and <strong>easy repeat ordering</strong> as common
            positives.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Smaller clusters of criticism mention <strong>courier delays outside pharmacy control</strong>
            , <strong>detailed verification feeling heavier than expected</strong>, or{" "}
            <strong>support friction on edge case resolutions</strong>. Weight recent threads alongside
            your own risk tolerance.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Returns and customer support</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          A returns window may apply to some consumer goods;{" "}
          <strong>many medicines cannot legally be returned</strong> once supplied. Contact routes
          typically include <strong>web form</strong>, <strong>email</strong>, and{" "}
          <strong>telephone</strong>. Keep dispatch confirmations and tracking screenshots if you need
          to evidence non delivery or damage.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Non medical disclaimer</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          This dossier summarises public logistics, regulation framing, and shopper themes. It is not
          medical advice, not an endorsement of any slimming product, and not a substitute for
          discussion with a licensed prescriber about whether a given treatment fits your history.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Is Medicine Market Place only weight loss?",
              a: "No. It is a broader digital pharmacy and marketplace; weight management is one aisle.",
            },
            {
              q: "Can I buy prescription injections without assessment?",
              a: "Legitimate UK routes require proper prescribing and supply checks; any site that skips that entirely is a red flag.",
            },
            {
              q: "Will free delivery apply to refrigerated medicines?",
              a: "Marketing often excludes temperature controlled SKUs from threshold promotions; read basket rules at checkout.",
            },
            {
              q: "Why might my order wait over a weekend?",
              a: "Pharmacy processing is commonly weekday only; Friday night orders may queue until Monday.",
            },
            {
              q: "How do I fix a wrong address?",
              a: "Contact support immediately before dispatch; after tracking is live, changes are usually impossible.",
            },
            {
              q: "Is Trustpilot the final word?",
              a: "Use it as one signal among GPhC verification, your clinician input, and live policy pages.",
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
        <p className={sectionLabel}>Closing view</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medicine Market Place fits shoppers who want a Preston anchored UK pharmacy storefront with
          marketplace breadth in the weight aisle, tracked logistics, modest flat postage, threshold
          based free shipping on qualifying lines, and verification steps that match prescription law.
          It is less lifestyle programme led than dedicated GLP-1 clinics and more retail plus
          compliance: know whether you are buying a supplement, an OTC aid, or a prescription only
          medicine before comparing prices with other Health Wise dossiers.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Medicine Market Place
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
