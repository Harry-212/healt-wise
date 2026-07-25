"use client";

import Link from "next/link";
import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://joodlife.com";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function JoodLifePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Jood Life Pharmacy"
      fileRef="HW-JOOD-LIFE-2026"
      title="Jood Life Pharmacy weight management review"
      subtitle="Independent provider review of Jood Life Pharmacy: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Mounjaro · Wegovy · online consultation · prescriber review · delivery"
      providerName="Jood Life Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Jood Life Pharmacy (GPhC 9012990 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online consultation · licensed UK prescriber review · suitable treatment guidance",
        },
        {
          k: "Fulfilment",
          v: "Private online support · convenient delivery where appropriate · ongoing monitoring",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/jood life.png"
      heroProviderLogoAlt="Jood Life Pharmacy"
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Losing weight can be challenging, especially when diet and exercise alone do not deliver
          the results you are hoping for. For many adults in the UK, medically guided weight
          management can provide a more structured, safer, and more supportive path toward long-term
          results.
        </p>
        <p className={paragraphClass}>
          Jood Life Pharmacy offers a modern online weight loss service designed to make private
          weight management more accessible, convenient, and clinically supported. Through an online
          consultation process, eligible patients can receive guidance from licensed UK prescribers,
          access appropriate treatment options, and benefit from ongoing support throughout their
          journey.
        </p>
        <p className={paragraphClass}>
          Jood Life focuses on affordability, transparency, and patient-centred care, with weight
          loss support starting from £89 per month, according to its official website. The service
          also highlights guidance for lasting results and a full-circle approach to weight
          management. Health Wise also lets you{" "}
          <Link
            href="/mounjaro-price-comparison"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            compare UK Mounjaro pharmacy prices
          </Link>{" "}
          and{" "}
          <Link
            href="/wegovy-price-comparison"
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
          >
            compare Wegovy pharmacy prices
          </Link>{" "}
          when checking ongoing treatment costs.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What Is Jood Life Pharmacy Weight Loss Support?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Jood Life Pharmacy is an online weight management service that helps adults in the UK
            access medically guided support from home. Instead of needing to visit a clinic in
            person, patients can complete an online consultation and have their information reviewed
            by qualified healthcare professionals.
          </p>
          <p className={paragraphClass}>
            The service is designed to support people who may need more than general lifestyle
            advice. This can include:
          </p>
          <Points
            items={[
              "Online health assessment",
              "Review by licensed UK prescribers",
              "Personalised treatment guidance where suitable",
              "Ongoing support and monitoring",
              "Convenient home delivery where appropriate",
            ]}
          />
          <p className={paragraphClass}>
            Every patient is assessed individually to ensure any recommended treatment is suitable
            for their health profile, goals, and medical history.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Key Benefits of Choosing Jood Life Pharmacy</p>
        <div className="mt-3 space-y-4">
          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient Online Access
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                One of the biggest advantages of Jood Life Pharmacy is convenience. The process is
                designed to be handled online, allowing patients to begin their weight management
                journey from home.
              </p>
              <p className={paragraphClass}>
                Instead of arranging multiple clinic appointments, patients can:
              </p>
              <Points
                items={[
                  "Complete an online consultation",
                  "Provide relevant medical information",
                  "Receive a clinical review",
                  "Access suitable support if approved",
                  "Continue treatment with ongoing guidance",
                ]}
              />
              <p className={paragraphClass}>
                This makes Jood Life ideal for busy adults who want a discreet, flexible, and
                straightforward way to access private weight loss support.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Clinically Reviewed and Responsible Care
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Weight loss treatment should always be handled safely. Jood Life Pharmacy uses a
                clinical review process to help ensure that patients receive appropriate care based
                on their individual circumstances.
              </p>
              <p className={paragraphClass}>
                This means patients are not simply buying a product online. Their health background,
                suitability, and treatment goals are reviewed before any treatment is recommended.
              </p>
              <p className={paragraphClass}>
                This responsible approach helps protect patients from unsafe or unregulated sources,
                which is especially important because UK regulators and health authorities have
                warned consumers about fake or unsafe weight loss medicines being sold through
                unregulated channels.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Personalised Weight Management Support
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Every person&apos;s weight loss journey is different. Jood Life Pharmacy focuses on
                personalised care rather than a one-size-fits-all approach.
              </p>
              <p className={paragraphClass}>A patient&apos;s plan may take into account:</p>
              <Points
                items={[
                  "Current weight and BMI",
                  "Medical history",
                  "Lifestyle factors",
                  "Previous weight loss attempts",
                  "Current medication use",
                  "Personal goals",
                  "Suitability for treatment",
                ]}
              />
              <p className={paragraphClass}>
                This helps create a more structured and realistic weight management journey. The
                goal is not only to support weight loss, but also to encourage lasting, sustainable
                progress.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Affordable Pricing from £89 Per Month
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Cost is one of the biggest concerns for people considering private weight loss
                support. Jood Life Pharmacy positions itself as an affordable option, with weight
                loss support starting from £89 per month on its official website.
              </p>
              <p className={paragraphClass}>
                The brand also promotes transparent costs and locked pricing, which can help
                patients budget more confidently for ongoing treatment.
              </p>
              <p className={paragraphClass}>
                This is important because weight management often requires consistency over time.
                Clear pricing can make it easier for patients to plan ahead without worrying about
                hidden charges or unexpected increases.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              5. Support Beyond Medication
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                One of the strongest reasons to choose Jood Life Pharmacy is its focus on more than
                just treatment supply. The service promotes guidance for lasting results, which
                suggests a broader approach to weight management.
              </p>
              <p className={paragraphClass}>Successful weight loss usually involves a combination of:</p>
              <Points
                items={[
                  "Healthier eating habits",
                  "Improved portion control",
                  "Better activity levels",
                  "Behaviour change",
                  "Consistent monitoring",
                  "Clinical guidance where needed",
                ]}
              />
              <p className={paragraphClass}>
                Jood Life&apos;s approach is designed to support patients through the wider journey,
                not just the first order.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              6. Discreet and Convenient Delivery
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                For many patients, privacy matters. Jood Life Pharmacy&apos;s online model allows
                patients to receive weight loss support without needing to discuss their goals in a
                public setting.
              </p>
              <p className={paragraphClass}>
                Once a patient has completed the required assessment and been approved where
                appropriate, treatment can be arranged for delivery. This creates a more discreet and
                convenient experience for people who prefer managing their health privately from
                home.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              7. A Modern Online Healthcare Experience
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Jood Life Pharmacy is built around a digital healthcare model. This makes the
                process simpler for patients who want fast access to private support without
                unnecessary delays.
              </p>
              <p className={paragraphClass}>A typical journey may include:</p>
              <Points
                items={[
                  "Starting an online consultation",
                  "Providing health and lifestyle information",
                  "Having the consultation reviewed by a licensed prescriber",
                  "Receiving a suitable recommendation if eligible",
                  "Getting treatment delivered where appropriate",
                  "Continuing with ongoing support and monitoring",
                ]}
              />
              <p className={paragraphClass}>
                This type of online healthcare experience is especially useful for people who want
                convenience, privacy, and structured clinical oversight.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              8. Designed for Long-Term Weight Management
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Sustainable weight loss is rarely about quick fixes. Jood Life Pharmacy&apos;s
                message focuses on lasting results and patient support, which is important for
                people who want to maintain progress over time.
              </p>
              <p className={paragraphClass}>
                A responsible weight management service should help patients understand:
              </p>
              <Points
                items={[
                  "How treatment fits into a wider lifestyle plan",
                  "What results may realistically look like",
                  "How to manage side effects if they occur",
                  "When to adjust treatment",
                  "When treatment may not be suitable",
                  "How to maintain progress after weight loss",
                ]}
              />
              <p className={paragraphClass}>
                Jood Life&apos;s approach is positioned around guidance, affordability, and
                continuity, making it a strong option for adults looking for structured support.
              </p>
            </div>
          </HazardBox>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why Jood Life Pharmacy Stands Out</p>
        <div className="mt-3 space-y-4">
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            1. Affordable Starting Price
          </h2>
          <p className={paragraphClass}>
            With support starting from £89 per month, Jood Life Pharmacy offers a competitive entry
            point for private weight management support in the UK.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            2. Online and Convenient
          </h2>
          <p className={paragraphClass}>
            The consultation process can be completed online, helping patients access support
            without needing to visit a clinic in person.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            3. Patient-Centred Approach
          </h2>
          <p className={paragraphClass}>
            Jood Life focuses on individual suitability, guidance, and long-term results rather than
            offering a generic solution.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            4. Transparent Pricing
          </h2>
          <p className={paragraphClass}>
            Jood promotes clear and stable pricing, helping patients understand the cost of ongoing
            treatment before committing.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            5. Safer Than Unregulated Sellers
          </h2>
          <p className={paragraphClass}>
            Using a proper clinical service is important because counterfeit and unsafe weight loss
            products have become a growing issue in the UK. Patients should only use regulated,
            clinically reviewed services when considering prescription-based weight management.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Final Summary: Why Choose Jood Life Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Choosing Jood Life Pharmacy for weight loss support offers a combination of convenience,
            affordability, privacy, and clinical guidance.
          </p>
          <p className={paragraphClass}>Key reasons to choose Jood Life Pharmacy include:</p>
          <Points
            items={[
              "Online consultation from home",
              "Review by licensed UK prescribers",
              "Weight loss support starting from £89 per month",
              "Transparent pricing",
              "Discreet and convenient service",
              "Ongoing guidance for lasting results",
              "A patient-centred approach to weight management",
            ]}
          />
          <p className={paragraphClass}>
            For adults in the UK who are looking for a structured and clinically reviewed way to
            begin their weight loss journey, Jood Life Pharmacy provides a modern, accessible, and
            supportive option.
          </p>
          <p className={paragraphClass}>
            Weight loss treatment should always be used responsibly and only when suitable. Jood
            Life Pharmacy&apos;s online assessment process helps ensure that patients receive
            guidance based on their individual health needs, making it a safer and more reliable
            alternative to unregulated online sellers.
          </p>
        </div>
      </section>

      <PharmacyPriceCompareHint />

      <section className="rounded-md border border-slate-200 bg-slate-50 p-5">
        <p className="text-sm leading-relaxed text-slate-700">
          Health Wise does not prescribe or sell medicines. Check live eligibility, pricing,
          delivery terms, and clinical suitability directly with the provider before starting any
          treatment.
        </p>
        <a
          href={providerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} mt-4`}
        >
          Visit Jood Life Pharmacy
        </a>
      </section>
    </PharmacyDossierPage>
  );
}
