"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Tag,
  ChevronRight,
  Home,
  Syringe,
  Truck,
  ClipboardList,
  Stethoscope,
} from "lucide-react";

const providerUrl =
  "https://ayp.healthcare/weight-management-1?utm_source=healthwise360";

export default function AypHealthcareContent() {
  const [copied, setCopied] = useState(false);
  const discountCode = "AYP10";
  const hasDiscount = false;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const p = "text-slate-700 leading-relaxed";
  const ul = "list-disc pl-5 space-y-1.5 text-slate-700";
  const h2 =
    "scroll-mt-24 text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]";
  const h3 = "text-lg font-bold text-slate-900 sm:text-xl";

  return (
    <article className="min-h-screen bg-slate-50/50 pb-20">
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
          <nav
            className="flex items-center gap-2 text-sm text-slate-500"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-slate-900 transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/prices/cheapest-options-uk"
              className="hover:text-slate-900 transition-colors"
            >
              UK prices
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-slate-900">AYP Healthcare</span>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]"
          aria-hidden
        />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-2xl border border-sky-200/80 bg-linear-to-br from-sky-50 to-white p-5 shadow-sm w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ring-1 ring-sky-100">
              <span className="text-lg font-black tracking-tight text-sky-800 text-center leading-tight sm:text-xl">
                AYP
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-900">
                  <Stethoscope className="w-3.5 h-3.5" /> Online weight
                  management
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
                  Wegovy &amp; Mounjaro context
                </span>
              </div>
              <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[1.85rem] md:leading-tight">
                AYP Healthcare Weight Management Review: Online Access to
                Wegovy, Mounjaro and Medically Supported Weight Loss
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                How the service works, what treatment may cost, delivery and
                support — for UK readers comparing private options. Information
                only; not medical advice.
              </p>
              <div className="mt-6">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-sky-600/20 transition hover:bg-sky-700 hover:shadow-lg"
                >
                  Visit AYP Healthcare
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-2 mb-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "From (guide range)",
              value: "~£130",
              sub: "lower entry injections",
              icon: Syringe,
            },
            {
              label: "Higher doses (guide)",
              value: "£350+",
              sub: "varies by titration",
              icon: Syringe,
            },
            {
              label: "Journey",
              value: "3 steps",
              sub: "consult → select → deliver",
              icon: ClipboardList,
            },
          ].map((row) => (
            <div
              key={row.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {row.label}
                  </p>
                  <p className="mt-1.5 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                    {row.value}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">{row.sub}</p>
                </div>
                <div className="rounded-xl bg-sky-50 p-2 text-sky-600 transition group-hover:scale-105 group-hover:bg-sky-100">
                  <row.icon className="h-5 w-5" aria-hidden />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div className="space-y-10 max-w-none">
            <section className="space-y-4" aria-labelledby="ayp-intro">
              <h2 id="ayp-intro" className="sr-only">
                Introduction
              </h2>
              <p className={p}>
                Losing weight sounds simple in theory. Eat less. Move more.
                Stick with it.
              </p>
              <p className={p}>
                In real life, it’s often messier than that. Appetite, stress,
                metabolic factors, old habits — they can all work against even
                the most disciplined plan. That may be one reason medically
                supported treatment has gained traction in the UK, especially
                with prescription options like{" "}
                <Link
                  href="/what-is-wegovy"
                  className="font-semibold text-sky-800 underline decoration-sky-200 underline-offset-2"
                >
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-is-mounjaro"
                  className="font-semibold text-sky-800 underline decoration-sky-200 underline-offset-2"
                >
                  Mounjaro
                </Link>{" "}
                becoming more widely discussed.
              </p>
              <p className={p}>
                <strong className="text-slate-900">AYP Healthcare</strong> weight
                management positions itself in that space. Through an online
                prescribing model, AYP Healthcare offers consultations,
                prescription treatment, clinical oversight, and home delivery
                — all handled remotely. For some people, that may remove
                practical barriers that often stop treatment before it starts.
              </p>
              <p className={p}>
                This guide looks at how AYP Healthcare works, what treatments
                may be available, pricing, delivery, and why some patients
                consider it for long-term weight management. For wider context
                see{" "}
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="font-semibold text-sky-800 underline"
                >
                  Wegovy vs Mounjaro
                </Link>{" "}
                and our{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-semibold text-sky-800 underline"
                >
                  Wegovy
                </Link>{" "}
                /{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-semibold text-sky-800 underline"
                >
                  Mounjaro
                </Link>{" "}
                price tables.
              </p>
            </section>

            <div
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              role="img"
              aria-label="Illustrative monthly injection cost band"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Typical injection cost band (illustrative)
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                From your brief — confirm live prices on the provider site.
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between text-sm font-medium text-slate-800">
                  <span>Lower entry</span>
                  <span className="text-sky-700">~£130 / month</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[32%] rounded-full bg-linear-to-r from-sky-400 to-sky-600" />
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-800">
                  <span>Higher doses</span>
                  <span className="text-sky-700">£350+ / month</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[90%] rounded-full bg-linear-to-r from-rose-400 to-rose-600" />
                </div>
              </div>
            </div>

            <section className="space-y-3" aria-labelledby="what-is-ayp">
              <h2 id="what-is-ayp" className={h2}>
                What Is AYP Healthcare Weight Management?
              </h2>
              <p className={p}>
                AYP Healthcare provides an online service designed to help
                eligible patients access prescription weight loss treatment.
                Instead of traditional in-person appointments, the process
                happens digitally. Typically, it involves:
              </p>
              <ul className={ul}>
                <li>Completing an online consultation</li>
                <li>Receiving a medical assessment</li>
                <li>Selecting an appropriate treatment</li>
                <li>Having medication delivered to your home</li>
              </ul>
              <p className={p}>
                It sounds straightforward — and it mostly is. The appeal,
                though, is not only convenience. It’s access. For people facing
                long waits or inconsistent availability through traditional
                routes, online prescribing may offer an alternative.
              </p>
            </section>

            <section className="space-y-5" aria-labelledby="why-ayp">
              <h2 id="why-ayp" className={h2}>
                Why Choose AYP Healthcare for Weight Management Treatment?
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-100 hover:shadow-md">
                <h3 className={h3}>
                  1. Easier Access to Prescription Weight Loss Medication
                </h3>
                <p className={p}>
                  One practical advantage is removing friction. No waiting
                  rooms, no travel, no trying to fit appointments into a lunch
                  break. With AYP, the process is managed online, which could
                  suit people who want private access, need a faster route,
                  prefer digital healthcare, or have struggled getting
                  prescriptions elsewhere. Sometimes convenience is not a
                  luxury — it’s what makes treatment realistic.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-100 hover:shadow-md">
                <h3 className={h3}>
                  2. Access to Clinically Proven Weight Loss Injections
                </h3>
                <p className={p}>
                  AYP Healthcare focuses heavily on injectable treatments,
                  including{" "}
                  <Link
                    href="/what-is-mounjaro"
                    className="font-semibold text-sky-800 underline"
                  >
                    Mounjaro
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/what-is-wegovy"
                    className="font-semibold text-sky-800 underline"
                  >
                    Wegovy
                  </Link>
                  . These medications may support weight management by
                  influencing biological pathways linked to hunger and satiety.
                  They may reduce appetite, increase fullness, and lower food
                  cravings. That does not mean effortless weight loss, and
                  clinical evidence is still about support alongside lifestyle
                  change.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-100 hover:shadow-md">
                <h3 className={h3}>
                  3. Treatment That May Support More Than Willpower Alone
                </h3>
                <p className={p}>
                  A useful distinction: these medications do not simply “make
                  you eat less.” They may affect hormonal signals tied to
                  hunger, slow digestion, and support longer-term weight
                  maintenance — different from crash diets built around
                  deprivation. For many patients, that distinction matters.
                </p>
              </div>
            </section>

            <section
              className="rounded-2xl border border-sky-200 bg-linear-to-br from-sky-50/80 to-white p-6 sm:p-8"
              aria-labelledby="three-steps"
            >
              <h2 id="three-steps" className={h2}>
                How AYP Healthcare Works: The 3-Step Process
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    n: "1",
                    t: "Online consultation",
                    d: "Health questionnaire: weight, BMI, history, current medicines — determines suitability.",
                  },
                  {
                    n: "2",
                    t: "Treatment selection",
                    d: "When reviewed, you may choose the most appropriate option (e.g. Wegovy or Mounjaro) depending on goals, tolerance, availability and cost.",
                  },
                  {
                    n: "3",
                    t: "Home delivery",
                    d: "Prescription processed, medication checked by a pharmacist, dispatched to your address.",
                  },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="group relative rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-bold text-slate-900">
                      {step.t}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.d}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4" aria-labelledby="delivery-ayp">
              <h2 id="delivery-ayp" className={h2}>
                Fast Home Delivery and Medication Handling
              </h2>
              <p className={p}>
                Delivery is a surprisingly important part of online treatment —
                if supply is unreliable, treatment continuity suffers. AYP
                appears to recognize that.
              </p>
              <h3 className={`${h3} mt-2`}>How delivery works</h3>
              <p className={p}>
                Once approved, medication is dispensed professionally, securely
                packaged, and shipped directly to you — avoiding pharmacy
                collection altogether.
              </p>
              <h3 className={h3}>Delivery timeframes</h3>
              <p className={p}>
                Although timing may vary, treatment often appears to be
                dispatched quickly after approval, with delivery commonly
                following within several days. For patients starting or
                continuing therapy, that may reduce disruption. Read more in our{" "}
                <Link
                  href="/helpful-guides/mounjaro-delivery-times-uk"
                  className="font-semibold text-sky-800 underline"
                >
                  Mounjaro delivery times (UK)
                </Link>{" "}
                guide.
              </p>
              <h3 className={h3}>Signature on delivery</h3>
              <p className={p}>
                Some orders may require a signature — an extra layer of security
                so medication reaches the intended patient.
              </p>
              <h3 className={h3}>Discreet packaging</h3>
              <p className={p}>
                AYP Healthcare states packaging is neutral and unbranded, so
                deliveries do not advertise what is inside.
              </p>
              <h3 className={h3}>Safe handling of weight loss injections</h3>
              <p className={p}>
                Injectables require careful handling, especially if
                temperature-sensitive. AYP appears to address this through
                pharmacy-level quality checks before dispatch, secure packaging
                to protect product quality, stability and safety, and efficient
                transit — particularly relevant for GLP-1 treatments. See also{" "}
                <Link
                  href="/helpful-guides/mounjaro-delivery-storage-uk"
                  className="font-semibold text-sky-800 underline"
                >
                  storage &amp; delivery
                </Link>
                .
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="cost-ayp">
              <h2 id="cost-ayp" className={h2}>
                How Much Does AYP Healthcare Weight Management Cost?
              </h2>
              <p className={p}>
                Cost will depend on medication and dose.{" "}
                <strong className="text-slate-900">Typical injection costs:</strong>{" "}
                patients may expect roughly around{" "}
                <strong>£130 per month</strong> at lower entry points and{" "}
                <strong>£350+</strong> at higher doses. That range can change
                with treatment progression.
              </p>
              <p className={p}>
                <strong className="text-slate-900">What pricing may include:</strong>{" "}
                consultation, prescription, medication, clinical monitoring,
                and home delivery — a bundled structure that can make pricing
                easier to understand.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="value-ayp">
              <h2 id="value-ayp" className={h2}>
                Is AYP Healthcare Good Value?
              </h2>
              <p className={p}>
                Possibly — especially compared with some private clinics. Part
                of that may come from operating online rather than through
                traditional in-person infrastructure. Still, price alone should
                probably not drive the decision; clinical support matters too.
                Cheaper treatment with weak oversight is not necessarily better
                value. Our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="font-semibold text-sky-800 underline"
                >
                  GPhC verification
                </Link>{" "}
                page explains how to check any UK pharmacy.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="monitoring-ayp">
              <h2 id="monitoring-ayp" className={h2}>
                Ongoing Monitoring and Support
              </h2>
              <p className={p}>
                This is not meant to be a one-time purchase. AYP Healthcare may
                include ongoing monitoring such as prescriber guidance, progress
                reviews, and treatment adjustments. Weight management tends to
                evolve — what works at month one may need changing by month
                four.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="supervision-ayp">
              <h2 id="supervision-ayp" className={h2}>
                Why Medical Supervision Matters
              </h2>
              <p className={p}>
                Prescription weight loss treatment is not suitable for
                everyone. It may be considered for people with BMI over 30, or
                BMI over 27 with related health risks. That is why proper
                screening is necessary — not optional. AYP Healthcare appears to
                place that assessment before prescribing, which is how it
                should be. For eligibility context, see{" "}
                <Link
                  href="/what-is-wegovy#eligibility-uk"
                  className="font-semibold text-sky-800 underline"
                >
                  Wegovy eligibility
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-is-mounjaro#eligibility-uk"
                  className="font-semibold text-sky-800 underline"
                >
                  Mounjaro eligibility
                </Link>{" "}
                (UK framing).
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="who-ayp">
              <h2 id="who-ayp" className={h2}>
                Who Might Consider AYP Healthcare?
              </h2>
              <p className={p}>
                This service may suit people who want medically supported weight
                loss, prefer remote healthcare, need quicker treatment access,
                value privacy, and have struggled with diet-only approaches. It
                may be less ideal for people wanting regular face-to-face
                support — that’s worth acknowledging.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="why-patients-ayp">
              <h2 id="why-patients-ayp" className={h2}>
                Why Some Patients Choose AYP Healthcare
              </h2>
              <p className={p}>
                Several reasons stand out: convenience (everything online),
                access (prescription treatment without long delays), home
                delivery, clinical oversight (assessment and monitoring), and
                relatively transparent pricing. For many users, that combination
                may be enough. Compare approaches on{" "}
                <Link
                  href="/compare/best-weight-loss-injections-uk"
                  className="font-semibold text-sky-800 underline"
                >
                  best weight loss injections UK
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="faq-ayp">
              <h2 id="faq-ayp" className={h2}>
                Frequently Asked Questions
              </h2>
              {[
                {
                  q: "1. Can I get Wegovy through AYP Healthcare?",
                  a: "Yes, Wegovy may be available through AYP Healthcare following a consultation and approval process.",
                },
                {
                  q: "2. Does AYP Healthcare offer Mounjaro for weight loss?",
                  a: "Yes, Mounjaro appears to be one of the treatments offered, subject to suitability checks.",
                },
                {
                  q: "3. How much does AYP Healthcare weight management cost?",
                  a: "Pricing may range from around £130 to £350+ per month, depending on medication and dosage.",
                },
                {
                  q: "4. Does AYP Healthcare deliver medication to your home?",
                  a: "Yes. Approved prescriptions are shipped directly to patients, often with secure and sometimes signed delivery.",
                },
                {
                  q: "5. Is AYP Healthcare a regulated provider?",
                  a: "AYP Healthcare provides treatment through a medically supervised prescribing process, with pharmacy checks before dispatch.",
                },
                {
                  q: "6. Is AYP Healthcare better than going through a GP?",
                  a: "That depends. Some patients may prefer faster private access online. Others may prefer traditional GP-led care. The better option often depends on personal circumstances.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-100 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.q}
                  </h3>
                  <p className={`${p} mt-2`}>{item.a}</p>
                </div>
              ))}
            </section>

            <section
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
              aria-labelledby="conclusion-ayp"
            >
              <h2 id="conclusion-ayp" className={h2}>
                Conclusion
              </h2>
              <p className={`${p} mt-4`}>
                If you’re looking for a private route into prescription weight
                loss treatment, AYP Healthcare weight management appears to
                offer a credible option. Access to treatments like Wegovy and
                Mounjaro, paired with online consultations, home delivery and
                ongoing monitoring, makes it more than a simple online pharmacy
                model. Could it suit everyone? Probably not — some patients may
                still prefer traditional clinical routes. But for people wanting
                convenience, privacy and medically supervised support, AYP
                Healthcare is likely worth considering as part of a long-term
                weight management strategy.
              </p>
              <p className={`${p} mt-4`}>
                More from us:{" "}
                <Link
                  href="/mounjaro-faq"
                  className="font-semibold text-sky-800 underline"
                >
                  Mounjaro FAQ
                </Link>
                ,{" "}
                <Link
                  href="/wegovy-faq"
                  className="font-semibold text-sky-800 underline"
                >
                  Wegovy FAQ
                </Link>
                , and{" "}
                <Link href="/helpful-guides" className="font-semibold text-sky-800 underline">
                  helpful guides
                </Link>
                .
              </p>
              <div className="mt-8">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-sky-700"
                >
                  Visit AYP Healthcare
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border-2 border-sky-500 bg-sky-50/80 overflow-hidden shadow-lg shadow-sky-500/10">
                <div className="bg-linear-to-r from-sky-600 to-cyan-600 p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 mb-2">
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-white text-lg">
                    Exclusive discount
                  </p>
                  <p className="text-sky-100 text-sm mt-1">
                    Add a code when you have one — we’ll show it here.
                  </p>
                </div>
                <div className="p-6 text-center">
                  {hasDiscount ? (
                    <>
                      <p className="text-sm font-medium text-slate-600 mb-3">
                        Click to copy
                      </p>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-sky-300 bg-white py-3.5"
                        aria-label="Copy discount code"
                      >
                        <span className="font-mono text-xl font-bold text-sky-800">
                          {discountCode}
                        </span>
                        {copied ? (
                          <CheckCircle2 className="w-5 h-5 text-sky-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-400 group-hover:text-sky-600" />
                        )}
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-sky-600 text-white font-bold transition-transform duration-300 ${
                            copied ? "translate-y-0" : "translate-y-full"
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5 mr-2" /> Copied
                        </div>
                      </button>
                    </>
                  ) : (
                    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white py-4 px-4 text-center">
                      <span className="text-sm font-semibold text-slate-500">
                        Discount code — coming soon
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        We’ll publish a verified code when available.
                      </p>
                    </div>
                  )}
                  <div className="mt-5">
                    <a
                      href={providerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                    >
                      Go to AYP
                      <Truck className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-600" aria-hidden />
                  Information only
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This page is an independent overview for UK readers. Always
                  confirm services, prices and eligibility on the provider’s own
                  site and with a clinician.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Image
                    src="/window.svg"
                    alt="Health Wise"
                    width={24}
                    height={24}
                    className="opacity-50"
                  />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Health Wise
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
