"use client";

import Link from "next/link";
import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://skinandshape.co.uk";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function SkinAndShapePharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Skin & Shape Pharmacy"
      fileRef="HW-SKIN-SHAPE-2026"
      title="Why You Should Choose Skin & Shape Pharmacy for Weight Management Treatment"
      subtitle="Online pharmacist-led weight management support with consultation, regulated treatment access, discreet delivery, and ongoing guidance. Information only, not medical advice."
      scopeLabel="Scope: weight management · pharmacist-led care · online consultation · discreet delivery"
      providerName="Skin & Shape Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Skin & Shape Pharmacy (GPhC 9012790 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online consultation · pharmacist prescriber review · treatment if clinically appropriate",
        },
        {
          k: "Fulfilment",
          v: "Fast and discreet delivery · ongoing support during treatment",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/skin&shape.png"
      heroProviderLogoAlt="Skin & Shape Pharmacy"
      heroProviderLogoClassName="h-24 w-auto max-w-[min(100%,24rem)] object-contain object-center sm:h-32 md:h-40 md:max-w-[min(100%,34rem)]"
      heroProviderLogoUnoptimized
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Losing weight can be difficult, especially when diet changes, exercise, and lifestyle
          adjustments do not always give the results people hope for. For many adults in the UK,
          professional weight management support from a regulated pharmacy can provide a safer and
          more structured way to start their journey.
        </p>
        <p className={paragraphClass}>
          Skin &amp; Shape Pharmacy offers an online weight management service designed to make
          access to pharmacist-led care simple, discreet, and convenient. Through an online
          consultation process, patients can be assessed by qualified healthcare professionals and,
          where suitable, receive clinically appropriate treatment with support throughout their
          journey.
        </p>
        <p className={paragraphClass}>
          This guide explains why Skin &amp; Shape Pharmacy is a trusted choice for weight
          management treatment, how the service works, what makes pharmacist-led care important, and
          what patients can expect from consultation, delivery, and ongoing support. When reviewing
          treatment costs, Health Wise also lets you{" "}
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
          side by side.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What Is Skin &amp; Shape Pharmacy Weight Management Service?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Skin &amp; Shape is a UK-registered pharmacy offering weight management and skincare
            treatments through a convenient online service. The company describes its service as
            pharmacist-approved, regulated, budget-friendly, and designed with discreet delivery for
            patients who want a private and simple process.
          </p>
          <p className={paragraphClass}>Their weight management service is built around:</p>
          <Points
            items={[
              "Simple online consultation",
              "Review by qualified pharmacist prescribers",
              "Safe and regulated treatment access",
              "Fast and discreet delivery",
              "Ongoing support during treatment",
            ]}
          />
          <p className={paragraphClass}>
            The aim is to remove the guesswork from weight management by giving patients access to
            professional guidance rather than relying on unregulated products or unsafe online
            sellers.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why Choose Skin &amp; Shape Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Convenient Online Access
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                One of the biggest benefits of Skin &amp; Shape Pharmacy is convenience. Instead of
                booking an in-person appointment or waiting for a clinic visit, patients can begin
                with an online consultation.
              </p>
              <p className={paragraphClass}>The process is designed to be simple:</p>
              <Points
                items={[
                  "Complete an online health consultation",
                  "Provide relevant medical and lifestyle information",
                  "Have the consultation reviewed by a qualified professional",
                  "Receive treatment if clinically appropriate",
                  "Get medication delivered discreetly",
                ]}
              />
              <p className={paragraphClass}>
                This makes the service suitable for busy adults who want professional support
                without needing to visit a clinic in person.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. UK-Registered and Pharmacist-Led Service
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Safety is one of the most important factors when choosing any medical weight
                management service. Skin &amp; Shape states that it is a UK-registered pharmacy with
                qualified pharmacist prescribers involved in patient care.
              </p>
              <p className={paragraphClass}>
                This is important because prescription weight management treatments should only be
                supplied after a proper medical assessment. A regulated pharmacy service helps
                protect patients from unsafe products, counterfeit medication, and sellers that do
                not carry out appropriate checks.
              </p>
              <p className={paragraphClass}>
                With Skin &amp; Shape Pharmacy, treatment is based on eligibility, medical history,
                and professional review rather than a one-size-fits-all approach.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Simple Online Consultation Process
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Skin &amp; Shape Pharmacy promotes a simple online consultation process. This helps
                patients start their journey from home while still receiving professional clinical
                review.
              </p>
              <p className={paragraphClass}>During the consultation, patients may be asked about:</p>
              <Points
                items={[
                  "Current weight and height",
                  "BMI",
                  "Medical history",
                  "Current medication",
                  "Previous weight loss attempts",
                  "Lifestyle and health goals",
                  "Any conditions that may affect treatment suitability",
                ]}
              />
              <p className={paragraphClass}>
                This information helps the pharmacy team decide whether treatment is appropriate and
                safe.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. Personalised Weight Management Support
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Weight management is not the same for everyone. Each patient may have different
                health needs, lifestyle challenges, medical history, and treatment goals.
              </p>
              <p className={paragraphClass}>
                A pharmacist-led service allows the treatment plan to be reviewed based on the
                patient&apos;s individual situation. This can include advice around safe use,
                possible side effects, treatment expectations, and whether the chosen option remains
                suitable over time.
              </p>
              <p className={paragraphClass}>
                Rather than simply buying a product online, patients receive a structured healthcare
                service with professional oversight.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              5. Discreet and Fast Delivery
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Privacy matters for many people seeking weight management treatment. Skin &amp;
                Shape Pharmacy highlights discreet and fast delivery as part of its service.
              </p>
              <p className={paragraphClass}>
                Once treatment is approved, medication can be prepared and sent directly to the
                patient. This allows patients to receive support privately, without needing to
                collect treatment in person unless that option is available.
              </p>
              <p className={paragraphClass}>
                Discreet delivery can be especially helpful for people who prefer to keep their
                healthcare choices private.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              6. Budget-Friendly Without Clinic Fees
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Another key benefit of Skin &amp; Shape Pharmacy is affordability. The website
                states that treatments start from £11.99 per month, positioning the service as
                budget-friendly compared with traditional clinic-based options.
              </p>
              <p className={paragraphClass}>
                Private weight management clinics can sometimes include extra consultation or
                appointment costs. Skin &amp; Shape Pharmacy&apos;s online model is designed to
                reduce unnecessary clinic fees while still offering professional review and support.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              7. Safe Access to Regulated Treatment
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Weight management treatments should always be used safely and only when appropriate.
                The NHS advises that people living with obesity may need support such as lifestyle
                programmes, medicines, or other treatment pathways, depending on their health needs.
              </p>
              <p className={paragraphClass}>
                Skin &amp; Shape Pharmacy&apos;s consultation-based model helps ensure that patients
                are assessed before treatment is supplied. This matters because not every treatment
                is suitable for every person.
              </p>
              <p className={paragraphClass}>A professional assessment can help identify:</p>
              <Points
                items={[
                  "Whether the patient meets eligibility requirements",
                  "Whether any health conditions may affect treatment",
                  "Whether current medication could interact with treatment",
                  "Whether additional advice or referral may be needed",
                ]}
              />
              <p className={paragraphClass}>
                This helps create a safer and more responsible treatment journey.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              8. Support Beyond the First Order
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Effective weight management is usually not a one-time purchase. It often requires
                regular review, habit changes, and ongoing support.
              </p>
              <p className={paragraphClass}>
                Skin &amp; Shape Pharmacy&apos;s pharmacist-led approach gives patients a more
                structured pathway than simply buying products online. Patients can receive guidance
                on how to use treatment safely, when to seek advice, and how to continue
                responsibly.
              </p>
              <p className={paragraphClass}>
                This is especially important because weight management treatment should normally be
                combined with healthy eating, physical activity, and long-term lifestyle changes.
              </p>
            </div>
          </HazardBox>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>How Skin &amp; Shape Pharmacy Works</p>
        <div className="mt-3 space-y-4">
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 1: Start the Online Consultation
          </h2>
          <p className={paragraphClass}>
            Patients begin by completing an online consultation. This allows the pharmacy team to
            understand the patient&apos;s health background, weight management goals, and treatment
            suitability.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 2: Pharmacist Review
          </h2>
          <p className={paragraphClass}>
            A qualified healthcare professional reviews the information provided. This step is
            important because weight management treatment should only be supplied when it is safe
            and clinically appropriate.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 3: Treatment Recommendation
          </h2>
          <p className={paragraphClass}>
            If suitable, the patient may be offered a treatment option based on their needs. If the
            treatment is not appropriate, the pharmacy may advise a different route or recommend
            speaking with a GP.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 4: Secure Payment and Processing
          </h2>
          <p className={paragraphClass}>
            Once treatment is approved, the order can be processed. Pricing depends on the treatment
            type and plan selected.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 5: Discreet Delivery
          </h2>
          <p className={paragraphClass}>
            Approved treatment is delivered discreetly to the patient&apos;s address. Skin &amp;
            Shape promotes fast, discreet delivery as part of its service.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            Step 6: Ongoing Care
          </h2>
          <p className={paragraphClass}>
            Patients can continue their treatment journey with professional support, review, and
            guidance where needed.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>What Makes Skin &amp; Shape Pharmacy Different?</p>
        <div className="mt-3 space-y-4">
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            1. Pharmacist Prescriber Expertise
          </h2>
          <p className={paragraphClass}>
            Skin &amp; Shape is led by healthcare professionals with clinical experience. The
            company profile mentions Rukhsana, an Advanced Clinical Practitioner and Prescribing
            Pharmacist with over 16 years of experience across healthcare settings including
            community pharmacy, NHS 111, primary care, leadership, and digital health.
          </p>
          <p className={paragraphClass}>
            This clinical background helps build trust because patients know the service is not just
            product-focused. It is based on safe, personalised care.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            2. Focus on Safe and Personalised Care
          </h2>
          <p className={paragraphClass}>
            Skin &amp; Shape describes its approach as safe, effective, and personalised.
          </p>
          <p className={paragraphClass}>
            That matters because responsible weight management treatment should always consider the
            individual patient, not just the desired result. A good service should assess
            suitability, explain risks, and support patients properly.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            3. Positive Customer Reputation
          </h2>
          <p className={paragraphClass}>
            Skin &amp; Shape has a strong public review profile, with Trustpilot showing a high
            rating and customer reviews for the service. Trustpilot also lists the company under
            categories including online pharmacy, skincare clinic, and weight-loss service.
          </p>
          <p className={paragraphClass}>
            Customer reviews should not replace medical advice, but they can help show how patients
            experience the service, delivery, communication, and support.
          </p>
          <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
            4. Weight Management and Skin Care in One Place
          </h2>
          <p className={paragraphClass}>
            Skin &amp; Shape also offers skincare treatments, making it useful for patients who want
            support with both health and confidence-related concerns.
          </p>
          <p className={paragraphClass}>
            This makes the brand different from pharmacies that only focus on one type of treatment.
            Patients can access multiple services through one provider, while still going through
            appropriate consultation and review.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Important Safety Note</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Weight management medication is not suitable for everyone. Patients should always
            complete the consultation honestly and provide accurate information about their health,
            medication, allergies, and medical history.
          </p>
          <p className={paragraphClass}>
            Anyone who is pregnant, breastfeeding, has certain medical conditions, or is taking
            specific medication may not be suitable for some treatments. Patients should always
            follow professional advice and speak to a healthcare provider if they are unsure.
          </p>
          <p className={paragraphClass}>
            For long-term success, treatment should also be supported by healthy eating, regular
            movement, good sleep, and sustainable lifestyle habits.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Final Summary: Why Choose Skin &amp; Shape Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            Skin &amp; Shape Pharmacy offers a convenient, regulated, and pharmacist-led way for
            adults in the UK to access weight management support online.
          </p>
          <p className={paragraphClass}>Key reasons to choose Skin &amp; Shape Pharmacy include:</p>
          <Points
            items={[
              "Simple online consultation process",
              "UK-registered pharmacy service",
              "Qualified pharmacist prescribers",
              "Safe and regulated treatment access",
              "Budget-friendly options starting from £11.99 per month",
              "Fast and discreet delivery",
              "Personalised care and professional support",
              "Strong customer review profile",
              "Weight management and skincare support in one place",
            ]}
          />
          <p className={paragraphClass}>
            For patients looking for a private, convenient, and professionally reviewed approach to
            weight management, Skin &amp; Shape Pharmacy provides a trusted online option that
            combines safety, accessibility, and personalised care.
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
          Visit Skin &amp; Shape Pharmacy
        </a>
      </section>
    </PharmacyDossierPage>
  );
}
