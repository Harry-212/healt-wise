"use client";

import Link from "next/link";
import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.chequp.com";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

const paragraphClass = "text-slate-800 leading-relaxed";

export default function ChequpPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="CheqUp Pharmacy"
      fileRef="HW-CHEQUP-2026"
      title="CheqUp Pharmacy weight management review"
      subtitle="Independent provider review of CheqUp Pharmacy: consultation process, clinical support, registered pharmacy fulfilment, delivery fees, treatment prices and total monthly cost (information only — not medical advice)."
      scopeLabel="Scope: Wegovy · Mounjaro · Alli · clinician support · health coaching"
      providerName="CheqUp Pharmacy"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Chequp Health Limited (GPhC 9012707 — verify premises on register)",
        },
        {
          k: "Pathway",
          v: "Online eligibility check · clinical questionnaire · prescriber review · coaching support",
        },
        {
          k: "Fulfilment",
          v: "Monthly programme · discreet delivery · treatment subject to clinical suitability",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
      heroProviderLogoSrc="/logo pharmacy/chequp.png"
      heroProviderLogoAlt="CheqUp Pharmacy"
    >
      <section className="space-y-4">
        <p className={paragraphClass}>
          Losing weight can be difficult, especially when diet and exercise alone do not deliver
          the results someone needs. For adults in the UK who meet medical eligibility criteria,
          clinician-led weight management programmes can offer structured support, regulated care,
          and access to appropriate treatment when prescribed by a qualified professional.
        </p>
        <p className={paragraphClass}>
          CheqUp Pharmacy provides an online, medically supervised weight loss programme designed
          around clinical assessment, ongoing support, and long-term lifestyle change. The service
          includes access to weight loss treatments such as Wegovy, Mounjaro, and Alli, where
          suitable, alongside one-to-one health coaching and clinical guidance. CheqUp states that
          its treatments are available through a monthly programme, with Wegovy and Alli listed
          from £109 and Mounjaro from £159 at the time of writing. You can also{" "}
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
          on Health Wise when reviewing monthly treatment costs.
        </p>
        <p className={paragraphClass}>
          This guide explains why CheqUp Pharmacy may be a trusted option for eligible adults
          looking for structured weight management support, how the programme works, and what makes
          its service different from basic online medication providers.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>What Is CheqUp Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            CheqUp is an online weight management provider offering clinician-led programmes for
            adults in the UK. Its approach combines medical assessment, prescription treatment where
            appropriate, digital tracking, and one-to-one health coaching.
          </p>
          <p className={paragraphClass}>
            The programme is designed to be more than medication alone. CheqUp highlights that its
            service includes access to Health Coaches, clinical support, and smart tracking tools to
            help members build healthier habits while receiving ongoing guidance.
          </p>
          <p className={paragraphClass}>CheqUp&apos;s available treatment options include:</p>
          <Points
            items={[
              "Wegovy",
              "Mounjaro",
              "Alli",
              "Ongoing clinician support",
              "One-to-one Health Coach support",
              "Digital tracking through a support app",
            ]}
          />
          <p className={paragraphClass}>
            All treatment is subject to clinical suitability. CheqUp&apos;s eligibility checker states
            that users must be over 18, be UK residents, and have GP registration. It also notes
            that final suitability is determined by a prescriber after reviewing a full clinical
            questionnaire.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Key Benefits of Choosing CheqUp Pharmacy</p>
        <div className="mt-3 space-y-4">
          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              1. Clinician-Led Weight Management Support
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                One of the main benefits of CheqUp is that its programme is clinically supervised.
                This matters because prescription weight loss treatments are not suitable for
                everyone and should only be used after proper medical review.
              </p>
              <p className={paragraphClass}>
                CheqUp&apos;s programme includes clinical support, dose change advice, and guidance for
                managing side effects. Its Mounjaro programme page also states that members can
                access Health Coaches and clinicians for help during their treatment journey.
              </p>
              <p className={paragraphClass}>
                This makes the service more structured than simply ordering medication online. The
                focus is on safe prescribing, ongoing monitoring, and personalised support.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              2. Regulated UK Pharmacy Standards
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Safety is one of the most important factors when choosing an online pharmacy.
                CheqUp states that its medications are dispensed by Chequp Health Limited, which is
                regulated by the General Pharmaceutical Council under registration number 9012707.
              </p>
              <p className={paragraphClass}>
                The GPhC pharmacy profile describes Chequp Health as a private distance-selling
                pharmacy whose prescribing service is registered with the Care Quality Commission.
                It also notes that medicines are delivered by courier and that the public cannot
                physically access the premises.
              </p>
              <p className={paragraphClass}>
                This regulated structure is important because weight loss medicines should only be
                supplied through safe, legal, and clinically appropriate channels.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              3. Access to Recognised Weight Loss Treatments Where Suitable
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                CheqUp offers several weight management treatment options, including Wegovy,
                Mounjaro, and Alli. Its treatment comparison page describes Wegovy as a weekly
                self-injection containing semaglutide, Mounjaro as a weekly self-injection
                containing tirzepatide, and Alli as a daily tablet containing orlistat.
              </p>
              <p className={paragraphClass}>
                These treatments work in different ways. CheqUp explains that GLP-1 based
                treatments may help regulate appetite, slow stomach emptying, and support blood
                sugar control. Alli works differently by reducing fat absorption from food.
              </p>
              <p className={paragraphClass}>
                Because these options are not suitable for everyone, treatment should always depend
                on a clinician&apos;s assessment.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              4. One-to-One Health Coach Support
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                A major difference between CheqUp and many basic online medication services is the
                inclusion of Health Coach support.
              </p>
              <p className={paragraphClass}>
                CheqUp states that one-to-one Health Coach sessions are built into the programme,
                with no extra cost to book a session or send a direct message. The goal is to help
                members with practical lifestyle changes, including nutrition, exercise,
                motivation, and long-term habit building.
              </p>
              <p className={paragraphClass}>
                This is important because sustainable weight loss usually requires more than
                medication. Support with eating habits, activity, mindset, and consistency can help
                patients stay on track and make healthier choices over time.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              5. Fast and Discreet Delivery
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                CheqUp&apos;s Mounjaro programme page states that treatment can be delivered in 1 to 3
                business days, where suitable and approved. It also highlights fast and discreet
                delivery as part of the purchase.
              </p>
              <p className={paragraphClass}>
                For many adults, discreet home delivery is convenient because it avoids unnecessary
                travel and supports privacy. This can be especially helpful for people with busy
                schedules or those who prefer managing healthcare online.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              6. Ongoing Clinical Guidance
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Weight management treatment often needs regular review. CheqUp states that doses
                are reviewed regularly by a clinician and can be adjusted to suit the patient&apos;s
                needs. It also says members can pause or cancel their subscription or change
                payment dates before the next order is approved.
              </p>
              <p className={paragraphClass}>
                This ongoing supervision helps ensure the programme remains appropriate over time.
                It also gives patients a way to raise concerns, ask questions, and receive advice
                if side effects occur.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              7. Support for Side Effects and Treatment Questions
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                Like all medicines, weight loss treatments can cause side effects. CheqUp notes
                that common side effects may include nausea, vomiting, and diarrhoea, and says
                members can use the clinician chat option in their account for guidance. It also
                advises contacting NHS 111 if side effects are concerning.
              </p>
              <p className={paragraphClass}>
                This kind of support is valuable because patients should not be left to manage
                symptoms alone. Clinical guidance can help people understand what is expected, what
                needs medical attention, and whether treatment should be adjusted.
              </p>
            </div>
          </HazardBox>

          <HazardBox className="ring-1 ring-emerald-900/5">
            <h2 className="font-sans text-lg font-bold text-slate-900 sm:text-xl">
              8. A Programme Built Around Long-Term Weight Health
            </h2>
            <div className="mt-3 space-y-4">
              <p className={paragraphClass}>
                CheqUp presents its service as a long-term weight health programme rather than a
                quick fix. Its treatment page states that early months may involve the body
                adjusting to the medication and that each person&apos;s journey is different.
              </p>
              <p className={paragraphClass}>
                This is an important message. Healthy weight management should focus on sustainable
                progress, realistic habits, and medical safety rather than rapid results.
              </p>
            </div>
          </HazardBox>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Why Regulated Care Matters</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            The UK&apos;s Medicines and Healthcare products Regulatory Agency has warned about the risks
            of buying weight loss products from unregulated websites or social media. The MHRA says
            illegally sold products may be fake, contaminated, incorrectly dosed, or contain
            ingredients not listed on the packaging.
          </p>
          <p className={paragraphClass}>
            This is why choosing a regulated provider matters. Prescription weight loss treatments
            should only be considered through a proper medical assessment and supplied by a
            legitimate pharmacy.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Who May CheqUp Be Suitable For?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            CheqUp may be suitable for adults in the UK who are looking for medically supervised
            weight management support and who meet the required eligibility criteria.
          </p>
          <p className={paragraphClass}>It may be especially relevant for people who:</p>
          <Points
            items={[
              "Have struggled with long-term weight management",
              "Want clinical guidance rather than unsupported treatment",
              "Prefer online access to healthcare support",
              "Need help with nutrition, activity, and habit changes",
              "Want a programme that combines medical review with coaching",
            ]}
          />
          <p className={paragraphClass}>
            However, CheqUp is not suitable for everyone. Its eligibility information states that
            users must be over 18, be UK residents, and have GP registration. It also lists
            exclusions such as pregnancy, breastfeeding, history of pancreatitis, and type 1
            diabetes.
          </p>
        </div>
      </section>

      <section>
        <p className={sectionLabel}>Final Summary: Why Choose CheqUp Pharmacy?</p>
        <div className="mt-3 space-y-4">
          <p className={paragraphClass}>
            CheqUp Pharmacy offers a clinician-led online weight management programme that combines
            regulated pharmacy dispensing, personalised medical assessment, ongoing clinical
            support, and one-to-one Health Coach guidance.
          </p>
          <p className={paragraphClass}>Key reasons to consider CheqUp include:</p>
          <Points
            items={[
              "Clinician-led assessment and prescribing",
              "Regulated UK pharmacy dispensing",
              "Access to recognised treatments where suitable",
              "One-to-one Health Coach support",
              "Digital tracking and practical lifestyle guidance",
              "Fast and discreet delivery",
              "Ongoing support for side effects and dose changes",
              "A long-term approach to weight health",
            ]}
          />
          <p className={paragraphClass}>
            For eligible adults, CheqUp may provide a structured and supportive way to approach
            weight management safely. The most important point is that treatment should always be
            based on clinical suitability, proper medical oversight, and realistic lifestyle
            changes.
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
          Visit CheqUp Pharmacy
        </a>
      </section>
    </PharmacyDossierPage>
  );
}
