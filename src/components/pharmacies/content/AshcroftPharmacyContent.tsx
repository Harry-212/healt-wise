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
  Star,
  ChevronRight,
  Home,
  Syringe,
  Pill,
  Truck,
  Clock,
  Package,
} from "lucide-react";

const providerUrl =
  "https://www.ashcroftpharmacy.co.uk/online-doctor/weight-loss/?utm_source=healthwise360";

export default function AshcroftPharmacyContent() {
  const [copied, setCopied] = useState(false);
  const discountCode = "ASHCROFT10";
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
              href="/mounjaro-price-comparison"
              className="hover:text-slate-900 transition-colors"
            >
              Compare prices
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-slate-900">Ashcroft Pharmacy</span>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)]"
          aria-hidden
        />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-2xl border border-indigo-200/80 bg-linear-to-br from-indigo-50 to-white p-5 shadow-sm w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ring-1 ring-indigo-100">
              <span className="text-sm font-black tracking-tight text-indigo-800 text-center leading-tight sm:text-base">
                AP
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-900">
                  <ShieldCheck className="w-3.5 h-3.5" /> UK pharmacy
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.8
                  in our table
                </span>
              </div>
              <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[1.9rem] md:leading-tight">
                Ashcroft Pharmacy Weight Loss Treatment Review: Safe Online
                Access to Wegovy, Mounjaro and More
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                Regulated online prescribing, home delivery, and a wide range
                of weight loss options — in context for UK patients (information
                only, not medical advice).
              </p>
              <div className="mt-6">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/25"
                >
                  Visit Ashcroft Pharmacy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Quick stats + price spectrum — data viz */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 -mt-2 mb-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Wegovy from (guide)",
              value: "~£120",
              sub: "illustrative snapshot",
              icon: Syringe,
            },
            {
              label: "Mounjaro from (guide)",
              value: "~£150",
              sub: "check live site",
              icon: Syringe,
            },
            {
              label: "Next-day window",
              value: "Before 2pm",
              sub: "Mon–Fri (stated by provider)",
              icon: Clock,
            },
          ].map((row) => (
            <div
              key={row.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
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
                <div className="rounded-xl bg-indigo-50 p-2 text-indigo-600 transition group-hover:scale-105 group-hover:bg-indigo-100">
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
            <section className="space-y-4" aria-labelledby="ap-intro">
              <h2 id="ap-intro" className="sr-only">
                Introduction
              </h2>
              <p className={p}>
                Trying to lose weight can feel frustratingly slow. Many people
                cut calories, try meal plans, walk more, maybe even pay for a
                gym they barely use — and still hit a wall. That’s often the
                point where prescription treatment starts entering the
                conversation.
              </p>
              <p className={p}>
                For some people, medications like{" "}
                <Link
                  href="/what-is-wegovy"
                  className="font-semibold text-indigo-800 underline decoration-indigo-200 underline-offset-2 hover:text-indigo-950"
                >
                  Wegovy
                </Link>{" "}
                or{" "}
                <Link
                  href="/what-is-mounjaro"
                  className="font-semibold text-indigo-800 underline decoration-indigo-200 underline-offset-2 hover:text-indigo-950"
                >
                  Mounjaro
                </Link>{" "}
                may offer extra support, particularly when lifestyle changes alone
                haven’t been enough.
              </p>
              <p className={p}>
                That’s where{" "}
                <strong className="font-semibold text-slate-900">
                  Ashcroft Pharmacy weight loss treatment
                </strong>{" "}
                has gained attention in the UK.
              </p>
              <p className={p}>
                Through its online doctor service, Ashcroft Pharmacy provides
                access to regulated weight loss medication, online
                consultation, home delivery, and ongoing pharmacy support — all
                without a traditional GP appointment. But what actually makes
                Ashcroft Pharmacy worth considering? Let’s look closer. For
                context, you can also browse our{" "}
                <Link
                  href="/prices/cheapest-options-uk"
                  className="font-semibold text-indigo-800 underline underline-offset-2"
                >
                  UK price overview
                </Link>{" "}
                and{" "}
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="font-semibold text-indigo-800 underline underline-offset-2"
                >
                  Wegovy vs Mounjaro
                </Link>{" "}
                comparison.
              </p>
            </section>

            {/* Cost spectrum visualization */}
            <div
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              role="img"
              aria-label="Illustrative monthly cost ranges: capsules versus injections"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Monthly cost spectrum (illustrative)
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Not live prices — visual guide from your copy.
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-800">
                    <span>Capsule treatments</span>
                    <span className="text-indigo-700">~£10 – £70 / mo</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full w-[28%] rounded-full bg-linear-to-r from-cyan-400 to-cyan-600 transition-all duration-500"
                      title="Lower monthly band"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-800">
                    <span>Injection treatments</span>
                    <span className="text-indigo-700">~£100 – £300+ / mo</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[85%] rounded-full bg-linear-to-r from-indigo-500 to-violet-600" />
                  </div>
                </div>
              </div>
            </div>

            <section className="space-y-4" aria-labelledby="what-is-ashcroft">
              <h2 id="what-is-ashcroft" className={h2}>
                What Is Ashcroft Pharmacy Online Doctor for Weight Loss?
              </h2>
              <p className={p}>
                Ashcroft Pharmacy offers a digital prescribing service for
                eligible patients seeking prescription weight loss treatment.
                Rather than booking in-person appointments, the process is
                handled online. Typically, it works like this:
              </p>
              <ul className={ul}>
                <li>Complete a health assessment</li>
                <li>Receive a medical review</li>
                <li>Get prescribed treatment if suitable</li>
                <li>Have medication delivered to your home</li>
              </ul>
              <p className={p}>
                Simple on paper. But the bigger appeal may be access. For many
                people, getting weight loss medication through traditional
                channels can be slow or uncertain. GP appointments can take
                weeks. Prescribing criteria may vary. Some patients simply want
                a private route. That seems to be the gap this service is trying
                to fill.
              </p>
            </section>

            <section className="space-y-6" aria-labelledby="why-ashcroft">
              <h2 id="why-ashcroft" className={h2}>
                Why Choose Ashcroft Pharmacy for Weight Loss Treatment?
              </h2>

              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-100 hover:shadow-md">
                <h3 className={h3}>
                  1. Convenient Access to Prescription Weight Loss Medication
                </h3>
                <p className={p}>
                  Convenience is probably the most obvious advantage. Instead
                  of arranging appointments and repeat visits, you can manage
                  much of the process online. That may be useful if you:
                </p>
                <ul className={ul}>
                  <li>Have a busy schedule</li>
                  <li>Prefer privacy</li>
                  <li>Want faster access to treatment</li>
                  <li>Don’t want to navigate long NHS waiting times</li>
                </ul>
                <p className={p}>
                  For some patients, that alone can be a deciding factor. See
                  also{" "}
                  <Link
                    href="/helpful-guides"
                    className="font-semibold text-indigo-800 underline"
                  >
                    our helpful guides
                  </Link>{" "}
                  for UK context.
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-100 hover:shadow-md">
                <h3 className={h3}>2. Wide Choice of Weight Loss Treatments</h3>
                <p className={p}>
                  One thing that sets Ashcroft apart is range. Available
                  treatments may include:
                </p>
                <ul className={ul}>
                  <li>
                    <Link
                      href="/what-is-mounjaro"
                      className="font-semibold text-indigo-800 underline"
                    >
                      Mounjaro
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-is-wegovy"
                      className="font-semibold text-indigo-800 underline"
                    >
                      Wegovy
                    </Link>
                  </li>
                  <li>Rybelsus</li>
                  <li>Mysimba</li>
                  <li>Orlistat</li>
                  <li>Xenical</li>
                </ul>
                <p className={p}>
                  That matters because not every treatment suits every person.
                  Some may prefer weekly injections; others may want tablets.
                  Budget can influence the decision too.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 not-prose">
                {["Injections", "Tablets", "Ongoing support"].map((t, i) => (
                  <div
                    key={t}
                    className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-indigo-200 hover:bg-indigo-50/60 sm:text-sm"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm group-hover:scale-105">
                      {i === 0 ? (
                        <Syringe className="h-3.5 w-3.5" />
                      ) : i === 1 ? (
                        <Pill className="h-3.5 w-3.5" />
                      ) : (
                        <Package className="h-3.5 w-3.5" />
                      )}
                    </div>
                    {t}
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  3. Free Online Consultation Before Prescribing
                </h3>
                <p className={p}>
                  This isn’t simply adding medication to a cart. Before
                  treatment approval, you complete a consultation covering:
                </p>
                <ul className={ul}>
                  <li>BMI</li>
                  <li>Medical history</li>
                  <li>Existing medication</li>
                  <li>General suitability</li>
                </ul>
                <p className={p}>
                  A regulated review helps reduce risk and, ideally, avoids
                  inappropriate prescribing. You can read how we check
                  providers in our{" "}
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className="font-semibold text-indigo-800 underline"
                  >
                    GPhC verification
                  </Link>{" "}
                  article.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  4. Fast Delivery — Including Next-Day Options
                </h3>
                <p className={p}>
                  Speed is a big selling point here. Ashcroft Pharmacy states
                  next-day delivery may be available when orders are placed
                  before 2pm Monday to Friday. That could mean treatment arrives
                  very quickly compared with some routes where approval and
                  dispatch can take longer. Our{" "}
                  <Link
                    href="/wegovy-price-comparison"
                    className="font-semibold text-indigo-800 underline"
                  >
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/mounjaro-price-comparison"
                    className="font-semibold text-indigo-800 underline"
                  >
                    Mounjaro
                  </Link>{" "}
                  tables note delivery text per provider as a snapshot.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  5. Discreet Packaging and Direct Home Delivery
                </h3>
                <p className={p}>
                  Privacy can be underestimated. Not everyone wants a visible
                  pharmacy label arriving at their door. Ashcroft appears to
                  address this through:
                </p>
                <ul className={ul}>
                  <li>Discreet packaging</li>
                  <li>Direct-to-patient shipping</li>
                  <li>Secure medication handling</li>
                </ul>
                <p className={p}>
                  For some users, that may simply be reassuring. Storage tips:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className="font-semibold text-indigo-800 underline"
                  >
                    Mounjaro delivery &amp; storage (UK)
                  </Link>
                  .
                </p>
              </div>
            </section>

            <section className="space-y-4" aria-labelledby="how-delivers">
              <h2 id="how-delivers" className={h2}>
                How Ashcroft Pharmacy Delivers Weight Loss Medication Safely
              </h2>
              <p className={p}>
                Medication delivery is not just putting products in a box —
                especially with injectable treatments.
              </p>
              <h3 className={`${h3} mt-4`}>Pharmacy-Controlled Dispatch</h3>
              <p className={p}>
                Orders are dispensed directly through Ashcroft Pharmacy, which
                may help support:
              </p>
              <ul className={ul}>
                <li>Authentic supply</li>
                <li>Quality control</li>
                <li>Regulatory compliance</li>
              </ul>
              <h3 className={`${h3} mt-4`}>Secure Packaging Systems</h3>
              <p className={p}>
                Products are packaged to protect medication integrity, patient
                safety, and confidentiality. A detail some overlook — until
                temperature-sensitive products are involved.
              </p>
              <h3 className={`${h3} mt-2`}>Fast Transit to Reduce Delays</h3>
              <p className={p}>
                Shorter delivery windows may help maintain product quality and
                reduce treatment interruptions. That’s particularly relevant for
                GLP-1 medications.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="medications">
              <h2 id="medications" className={h2}>
                Weight Loss Medications Available at Ashcroft Pharmacy
              </h2>
              <h3 className={h3}>Injection Treatments</h3>
              <h4 className="mt-2 text-base font-bold text-slate-900 sm:text-lg">
                Wegovy
              </h4>
              <p className={p}>
                Wegovy may help reduce appetite and support long-term weight
                management.{" "}
                <Link href="/what-is-wegovy" className="font-semibold text-indigo-800 underline">
                  Read our Wegovy guide
                </Link>
                .
              </p>
              <h4 className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                Mounjaro
              </h4>
              <p className={p}>
                Mounjaro has become increasingly discussed for weight management
                support.{" "}
                <Link href="/what-is-mounjaro" className="font-semibold text-indigo-800 underline">
                  Mounjaro explained
                </Link>
                .
              </p>
              <h4 className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                Saxenda
              </h4>
              <p className={p}>
                Saxenda remains another option for some patients. See{" "}
                <Link
                  href="/what-is-saxenda"
                  className="font-semibold text-indigo-800 underline"
                >
                  what is Saxenda
                </Link>{" "}
                and our{" "}
                <Link
                  href="/saxenda-price-comparison"
                  className="font-semibold text-indigo-800 underline"
                >
                  Saxenda price comparison
                </Link>
                .
              </p>
              <p className={p}>
                These medications may support reduced hunger, portion control,
                and sustained weight loss efforts — though realistically,
                medication alone rarely does all the work. Diet and behaviour
                changes still matter.
              </p>
              <h3 className={`${h3} mt-6`}>Tablet Treatments</h3>
              <p className={p}>
                Some patients may prefer oral options. Available choices may
                include Orlistat, Mysimba and Rybelsus. These can sometimes be
                more affordable too.
              </p>
              <h3 className={`${h3} mt-4`}>Supporting Supplies</h3>
              <p className={p}>
                Ashcroft also offers practical extras, including pen needles,
                injection wipes, and sharps bins — small details that can make
                treatment management easier.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="how-much">
              <h2 id="how-much" className={h2}>
                How Much Does Ashcroft Pharmacy Weight Loss Treatment Cost?
              </h2>
              <p className={p}>
                Pricing depends heavily on product and dose.
              </p>
              <h3 className={h3}>Capsule Treatments</h3>
              <p className={p}>
                Entry-level costs may start around <strong>£11.99</strong> for
                some Orlistat options, and <strong>£100+</strong> for certain
                tablet treatments.
              </p>
              <h3 className={`${h3} mt-4`}>Injection Costs</h3>
              <p className={p}>
                Typical starting prices may include Wegovy from around{" "}
                <strong>£119.99</strong> and Mounjaro from around{" "}
                <strong>£149.99</strong>. Higher doses generally cost more.
              </p>
              <h3 className={`${h3} mt-4`}>Monthly Cost Expectations</h3>
              <p className={p}>
                Roughly <strong>£10–£70</strong> for capsules and{" "}
                <strong>£100–£300+</strong> for injections, depending on
                treatment. Cheaper does not always mean better value;
                effectiveness matters. Cross-check on our{" "}
                <Link
                  href="/mounjaro-price-comparison"
                  className="font-semibold text-indigo-800 underline"
                >
                  Mounjaro
                </Link>{" "}
                and{" "}
                <Link
                  href="/wegovy-price-comparison"
                  className="font-semibold text-indigo-800 underline"
                >
                  Wegovy
                </Link>{" "}
                pages for snapshot figures.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="is-safe">
              <h2 id="is-safe" className={h2}>
                Is Ashcroft Pharmacy Safe for Weight Loss Medication?
              </h2>
              <p className={p}>
                Short answer — it appears designed to operate within UK
                regulatory standards. Using a licensed provider matters because
                prescription-only medicines should involve professional
                oversight, suitability checks, and genuine medication supply.
                That distinction matters.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="who-might">
              <h2 id="who-might" className={h2}>
                Who Might Use This Service?
              </h2>
              <p className={p}>
                Ashcroft Pharmacy may suit people who struggle losing weight
                through lifestyle changes alone, want medically supported
                treatment, prefer online healthcare, need fast access to
                prescriptions, and value privacy and home delivery. It may be
                less appropriate for people wanting ongoing face-to-face clinical
                support. That’s a reasonable trade-off to consider.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="over-others">
              <h2 id="over-others" className={h2}>
                Why Some Patients Choose Ashcroft Pharmacy Over Other Providers
              </h2>
              <p className={p}>
                Several factors seem to stand out: convenience (everything
                online), speed (next-day may be available), treatment choice
                (injections and tablets), pricing flexibility, and privacy
                (discreet delivery). No provider is perfect — but those factors
                explain why Ashcroft is often considered. Compare with others on{" "}
                <Link
                  href="/compare/best-weight-loss-injections-uk"
                  className="font-semibold text-indigo-800 underline"
                >
                  best weight loss injections UK
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="faq-ash">
              <h2 id="faq-ash" className={h2}>
                Frequently Asked Questions
              </h2>
              {[
                {
                  q: "1. Can I buy Wegovy online from Ashcroft Pharmacy?",
                  a: "Yes, Wegovy may be available through Ashcroft Pharmacy after completing an online consultation and receiving approval.",
                },
                {
                  q: "2. Does Ashcroft Pharmacy offer Mounjaro weight loss injections?",
                  a: "Yes, Mounjaro is listed among available weight loss treatments, subject to suitability assessment.",
                },
                {
                  q: "3. Does Ashcroft Pharmacy provide next-day delivery?",
                  a: "Next-day delivery may be available for eligible orders placed before 2pm Monday to Friday.",
                },
                {
                  q: "4. How much does Ashcroft Pharmacy weight loss treatment cost?",
                  a: "Costs may range from around £11.99 for capsules to £300+ per month for higher-dose injections, depending on treatment.",
                },
                {
                  q: "5. Is Ashcroft Pharmacy a regulated provider?",
                  a: "Ashcroft Pharmacy operates as a licensed pharmacy, supplying prescription treatment with medical screening.",
                },
                {
                  q: "6. Are tablets available instead of injections?",
                  a: "Yes. Options may include Orlistat, Mysimba and Rybelsus.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-100 hover:shadow-md"
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
              aria-labelledby="conclusion-ash"
            >
              <h2 id="conclusion-ash" className={h2}>
                Conclusion
              </h2>
              <p className={`${p} mt-4`}>
                If you want a practical way to access prescription weight loss
                medication online, Ashcroft Pharmacy weight loss treatment
                appears to offer a credible option. Its mix of regulated
                prescribing, fast delivery, treatment choice, and ongoing
                support will likely appeal to people who want convenience
                without sacrificing safety.
              </p>
              <p className={`${p} mt-4`}>
                Access to treatments like Wegovy and Mounjaro, paired with
                discreet home delivery, makes the service more than just an
                online storefront. Is it right for everyone? Maybe not — some
                people may still prefer a traditional GP-led route. But for
                patients looking for private, faster access to clinically
                supported weight loss treatment, Ashcroft Pharmacy is
                certainly one provider worth considering.
              </p>
              <p className={`${p} mt-4`}>
                See also{" "}
                <Link
                  href="/mounjaro-faq"
                  className="font-semibold text-indigo-800 underline"
                >
                  Mounjaro FAQ
                </Link>{" "}
                and{" "}
                <Link
                  href="/wegovy-faq"
                  className="font-semibold text-indigo-800 underline"
                >
                  Wegovy FAQ
                </Link>{" "}
                for independent context.
              </p>
              <div className="mt-8">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-indigo-700"
                >
                  Visit Ashcroft Pharmacy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border-2 border-indigo-500 bg-indigo-50/80 overflow-hidden shadow-lg shadow-indigo-500/10">
                <div className="bg-linear-to-r from-indigo-600 to-violet-600 p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 mb-2">
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-white text-lg">Exclusive discount</p>
                  <p className="text-indigo-100 text-sm mt-1">
                    Paste your code when Ashcroft runs a promotion.
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
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-indigo-300 bg-white py-3.5 transition-all hover:border-indigo-500 hover:bg-indigo-50/80"
                        aria-label="Copy discount code"
                      >
                        <span className="font-mono text-xl font-bold tracking-wider text-indigo-800">
                          {discountCode}
                        </span>
                        {copied ? (
                          <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-400 group-hover:text-indigo-600" />
                        )}
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-indigo-600 text-white font-bold transition-transform duration-300 ${
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
                        We’ll add a verified code here when available. Check
                        back later.
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
                      Go to website
                      <Truck className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck
                    className="w-5 h-5 text-indigo-600"
                    aria-hidden
                  />
                  GPhC context
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We list Ashcroft in our comparison tables. Always confirm the
                  premises on the official{" "}
                  <a
                    href="https://www.pharmacyregulation.org/registers/pharmacy"
                    className="font-semibold text-indigo-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GPhC register
                  </a>
                  . Ref: 9012896 in our data snapshot.
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
