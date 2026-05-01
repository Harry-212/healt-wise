"use client";

import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyDossierPage,
  PharmacyPriceCompareHint,
  Points,
} from "./_dossier";

const providerUrl = "https://www.medicspot.co.uk/";

const sectionLabel =
  "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";

export default function MedicspotPharmacyContent() {
  const discountCode = "";
  const hasDiscount = false;

  return (
    <PharmacyDossierPage
      slugLabel="Medicspot"
      fileRef="HW-MEDICSPOT-2026"
      title="Medicspot (UK): Clinician-Led Weight Loss, Mounjaro, Coaching and Home Delivery"
      subtitle="UK clinician led programmes that combine prescription medicines where appropriate, personal coaching, behavioural support, and discreet tracked delivery. Subscription style billing on common plans. Information only, not medical advice."
      scopeLabel="Scope: Mounjaro · Wegovy (where suitable) · coaching · community"
      providerName="Medicspot"
      providerUrl={providerUrl}
      docDetails={[
        { k: "Published", v: "2026" },
        {
          k: "Provider",
          v: "Medicspot (UK telehealth weight management · verify dispensing pharmacy GPhC on supply paperwork)",
        },
        {
          k: "Model",
          v: "Assessment · NHS visibility checks · monthly reviews · GPhC pharmacy partner · ~28-day billing cycles",
        },
        {
          k: "Fulfilment",
          v: "Tracked home delivery · discreet packaging · prescription medicines not returnable after dispatch",
        },
      ]}
      discountCode={discountCode}
      hasDiscount={hasDiscount}
    >
      <section className="space-y-4">
        <p className="text-slate-800 leading-relaxed">
          Sustainable weight management usually needs more than willpower alone: medically supervised
          plans, evidence based medicines where eligible, follow up, and medicines reaching your door
          without repeated clinic travel.{" "}
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-900 underline-offset-2 hover:underline"
          >
            Medicspot
          </a>{" "}
          presents itself as that kind of UK clinician led provider, knitting together prescribing,
          coaching, and structured support in an online first pathway.
        </p>
        <p className="text-slate-800 leading-relaxed">
          Health Wise summarises how they describe the offer on their site so you can weigh it
          against other dossiers: what medicines sit in scope, how tightly controlled prescribing
          is, what happens after the first box lands, and how billing behaves on rolling plans.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Clinically backed medication</p>
        <HazardBox className="mt-3 ring-1 ring-emerald-900/5">
          <p className="text-slate-800 leading-relaxed">
            Medicspot centres on prescription only therapies such as{" "}
            <strong>Mounjaro (tirzepatide)</strong> and other <strong>GLP-1 based</strong> options.
            Promotional material cites trial contexts where suitable candidates achieved substantial
            loss, including figures up to around <strong>26% body weight</strong> in some study
            populations; your own outcome depends on adherence, side effects, dose titration, and
            lifestyle change.
          </p>
          <p className="mt-4 text-slate-800 leading-relaxed">
            <strong>Why prescription supply matters</strong> versus informal supplements: GLP-1
            class medicines act on appetite regulation, help blunt constant hunger and cravings,
            slow gastric emptying so fullness lasts longer, and carry MHRA authorised status when
            supplied lawfully. Medicspot stresses appropriate medical treatment plus lifestyle
            support rather than a quick checkout gimmick.
          </p>
          <Points
            items={[
              "Mounjaro (tirzepatide) where clinically suitable.",
              "Other licensed options such as Wegovy (semaglutide) depending on assessment.",
              "Medicines issued only after individual clinical review and dispensed via a GPhC registered pharmacy partner.",
            ]}
          />
        </HazardBox>
      </section>

      <section>
        <p className={sectionLabel}>Clinician led prescribing pathway</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medicspot contrasts its flow with informal sellers by putting safety at the front:
        </p>
        <Points
          items={[
            "Online health questionnaire: weight, medical history, BMI, lifestyle, current medicines, allergies, conditions, and goals.",
            "Clinician review: a qualified UK prescriber checks the file; marketing states this is not purely automated.",
            "Identity check and NHS context: patients verify identity and supply NHS GP details or Summary Care Record access so eligibility and interactions can be judged.",
            "Prescription only when appropriate: private prescribing follows a positive suitability decision.",
            "Monthly follow up: ongoing reviews to keep the plan safe and adjust treatment where needed.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          That structure aims to ensure the molecule fits you personally, interactions are managed,
          and progress stays under clinical oversight rather than a “pay and post” marketplace model.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Coaching, behaviour change, and community</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Medicspot promotes layered support alongside medicines:
        </p>
        <Points
          items={[
            "Personal health coach: realistic goals, weekly check ins and accountability, behavioural tactics for cravings and eating patterns, habits built for the long term rather than crash cycles.",
            "Private peer community: often positioned on channels such as WhatsApp for tips, wins, and encouragement.",
            "Behavioural and nutritional courses plus free nutrition education.",
            "Materials on transitioning off medication safely when goals or clinical advice point that way.",
          ]}
        />
        <p className="mt-4 text-slate-800 leading-relaxed">
          The narrative is that addressing why weight returns matters as much as suppressing appetite
          in the short term.
        </p>
      </section>

      <section>
        <p className={sectionLabel}>Online access and home delivery</p>
        <div className="mt-3 space-y-3 text-slate-800 leading-relaxed">
          <p>
            The journey is described as <strong>fully online</strong>: screening on your device,
            remote clinician decisions, and coach contact through secure channels, reducing travel and
            appointment friction.
          </p>
          <p>
            After approval a partner pharmacy dispatches medicines in <strong>secure, discreet</strong>{" "}
            outer packaging with <strong>tracked delivery</strong> and usage guidance. Partner
            pharmacies are said to aim for about <strong>24 hours review and dispatch on weekdays</strong>{" "}
            and up to roughly <strong>48 hours</strong> when weekends sit in the timeline, before
            courier speed applies.
          </p>
          <p>
            <strong>Legal limit:</strong> prescription only medicines generally{" "}
            <strong>cannot be cancelled or returned once dispatched</strong>, so accuracy in eligibility,
            address, and cold chain receipt planning matters from the start.
          </p>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Pricing and subscription rhythm</p>
          <PharmacyPriceCompareHint />
          <p className="mt-3 text-slate-800 leading-relaxed">
            Illustrative <strong>Mounjaro</strong> bands include around <strong>£149</strong> for a
            first month on a lower dose with new customer positioning, then roughly{" "}
            <strong>£199 to £329 per four week supply</strong> on continuing doses depending on
            strength (higher strengths contain more active drug per cycle). Each{" "}
            <strong>Mounjaro KwikPen</strong> is described as covering about four weeks of weekly
            injections.
          </p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            <strong>Subscription billing every 28 days</strong> means automatic renewal until you
            cancel, with ongoing clinical review cycles bundled into that rhythm so supply gaps are
            less likely. Read live terms for pause and cancellation windows before each charge date.
          </p>
        </section>
        <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
          <p className={sectionLabel}>Transparency and governance</p>
          <p className="mt-3 text-slate-800 leading-relaxed">
            Medicspot states prescriptions are <strong>not guaranteed</strong> from payment alone:
            suitability comes first and extra information or checks may be requested. Public copy
            references operating within UK medical regulation,{" "}
            <strong>GPhC registered pharmacy partners</strong>, and alignment with{" "}
            <strong>MHRA</strong> and <strong>NICE</strong> expectations for prescribing behaviour.
          </p>
        </section>
      </div>

      <section>
        <p className={sectionLabel}>Practical benefits in one pass</p>
        <Points
          items={[
            "Medical legitimacy under UK regulatory framing versus unverified product sellers.",
            "Evidence backed prescription medicines where prescribed.",
            "Holistic layer: coaching, nutrition themes, and behavioural content.",
            "Convenience: remote pathway from assessment through delivery.",
            "Fast discreet delivery narrative once pharmacy releases the parcel.",
            "Structured follow up: monthly clinical rhythm plus coach touchpoints.",
            "Transparent headline pricing themes relative to other private UK programmes.",
          ]}
        />
      </section>

      <section>
        <p className={sectionLabel}>Who it may suit best</p>
        <p className="mt-3 text-slate-800 leading-relaxed">
          Marketing aligns with adults around <strong>BMI 30 or above</strong>, or{" "}
          <strong>BMI 27 plus weight related conditions</strong>, people who want medically
          supervised evidence based treatment, those who prefer home based access, readers who value
          ongoing support over one off parcels, and anyone comfortable with a structured monthly
          programme that includes coaching and accountability. If you only want an anonymous one click
          pen without clinical engagement, their positioning will feel heavier by design.
        </p>
      </section>

      <section className="border border-slate-200/90 bg-[#fbf9f4] p-6">
        <h2 className="font-sans text-xl font-bold text-slate-900">Frequently asked questions</h2>
        <div className="mt-4 space-y-4">
          {[
            {
              q: "Will payment alone guarantee a prescription?",
              a: "No. Medicspot states medical suitability is assessed first and prescriptions issue only when clinically appropriate.",
            },
            {
              q: "Why do they ask for my GP or Summary Care Record?",
              a: "So prescribers can confirm safety and eligibility against NHS visible medication and condition context.",
            },
            {
              q: "Can I return unused pens?",
              a: "Generally not after dispatch for prescription only medicines; plan cold storage and receipt before you approve supply.",
            },
            {
              q: "How does 28-day billing relate to a four-week pen?",
              a: "Marketing aligns subscription cycles with four-week style supplies; confirm your exact SKU and charge dates on site.",
            },
            {
              q: "Is coaching mandatory?",
              a: "Programme bundles emphasise coach and community layers; check whether your chosen package includes them or medicine-only tiers if offered.",
            },
            {
              q: "Is Medicspot only injections?",
              a: "Copy centres on GLP-1 class injectables; verify any oral lines or alternatives on the live formulary.",
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
          Medicspot sells a <strong>clinical programme story</strong>: prescriber controlled GLP-1
          therapy where suitable, NHS informed safety checks, coaching rails, discreet logistics, and
          rolling 28-day continuity. If you want the cheapest per-milligram strip price alone, other
          dossiers may fit better; if you want structured accountability bundled with medicine, add it
          to your shortlist and compare totals on Health Wise with your clinician’s view.
        </p>
        <div className="mt-6">
          <a
            href={providerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={PHARMACY_PROVIDER_CTA_CLASSNAME}
          >
            Visit Medicspot
          </a>
        </div>
      </section>
    </PharmacyDossierPage>
  );
}
