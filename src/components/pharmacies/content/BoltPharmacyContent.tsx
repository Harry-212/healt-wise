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
  Pill,
  Truck,
  Package,
} from "lucide-react";

const providerUrl =
  "https://www.boltpharmacy.co.uk/prelanding30?utm_source=healthwise360";

export default function BoltPharmacyContent() {
  const [copied, setCopied] = useState(false);
  const discountCode = "BOLT10";
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
  const linkC =
    "font-semibold text-amber-800 underline decoration-amber-200 underline-offset-2 hover:text-amber-950";

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
            <span className="font-medium text-slate-900">Bolt Pharmacy</span>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.11),transparent)]"
          aria-hidden
        />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50 to-white p-5 shadow-sm w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ring-1 ring-amber-100">
              <span className="text-lg font-black tracking-tight text-amber-800 sm:text-xl">
                Bolt
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                  <Package className="w-3.5 h-3.5" /> UK online pharmacy
                </span>
                <span className="text-sm text-slate-600">
                  Wegovy · Mounjaro · Saxenda context
                </span>
              </div>
              <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[1.85rem] md:leading-tight">
                Bolt Pharmacy Weight Loss Treatment Review: Online Access to
                Wegovy, Mounjaro and Prescription Support in the UK
              </h1>
              <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                How Bolt&apos;s online service fits private weight management:
                assessment, treatment choice, delivery and support — information
                only, not medical advice. For context read our{" "}
                <Link
                  href="/blog/mounjaro-vs-wegovy-key-differences-explained"
                  className={linkC}
                >
                  Mounjaro vs Wegovy blog
                </Link>{" "}
                and{" "}
                <Link
                  href="/helpful-guides/mounjaro-eligibility-bmi-requirements-uk"
                  className={linkC}
                >
                  BMI &amp; eligibility (UK) guide
                </Link>
                .
              </p>
              <div className="mt-6">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-amber-600/20 transition hover:bg-amber-700"
                >
                  Visit Bolt Pharmacy
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
            { label: "Tablets (guide)", value: "£10–70", sub: "typical band" },
            { label: "Injections from", value: "~£120", sub: "entry level" },
            { label: "Higher doses", value: "£300+", sub: "dose titration" },
          ].map((row) => (
            <div
              key={row.label}
              className="group rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                {row.label}
              </p>
              <p className="mt-1.5 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl">
                {row.value}
              </p>
              <p className="text-xs text-slate-500">{row.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px] items-start">
          <div className="space-y-10 max-w-none">
            <section className="space-y-4" aria-labelledby="bolt-intro">
              <h2 id="bolt-intro" className="sr-only">
                Introduction
              </h2>
              <p className={p}>
                Weight loss advice can sound deceptively simple. Eat fewer
                calories. Move more. Stay consistent. Most people know it often
                doesn’t play out that neatly. Hunger, emotional eating, plateaus,
                long workdays, metabolic factors — those things tend to
                complicate the theory. That may help explain why prescription
                weight loss treatments, especially options like{" "}
                <Link href="/what-is-wegovy" className={linkC}>
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link href="/what-is-mounjaro" className={linkC}>
                  Mounjaro
                </Link>
                , have become increasingly discussed across the UK.
              </p>
              <p className={p}>
                <strong className="text-slate-900">Bolt Pharmacy</strong> weight
                loss treatment sits in that space. Through its online
                prescribing service, Bolt Pharmacy offers medical assessments,
                prescription treatment, home delivery, and ongoing support for
                eligible patients seeking clinically supported weight management.
                This guide looks at how Bolt Pharmacy works, what medications may
                be available, how delivery is handled, what pricing may look
                like, and why some patients consider it — alongside our{" "}
                <Link href="/wegovy-price-comparison" className={linkC}>
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link href="/mounjaro-price-comparison" className={linkC}>
                  Mounjaro
                </Link>{" "}
                comparison tables and{" "}
                <Link href="/compare/wegovy-vs-mounjaro" className={linkC}>
                  direct comparison
                </Link>
                .
              </p>
            </section>

            <div
              className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              role="img"
              aria-label="Illustrative tablet versus injection price bands"
            >
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Cost bands (illustrative)
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-800">
                    <span>Tablet range</span>
                    <span className="text-amber-800">~£10 – £70 / mo</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[30%] rounded-full bg-linear-to-r from-amber-400 to-orange-500" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm font-medium text-slate-800">
                    <span>Injections (entry → higher)</span>
                    <span className="text-amber-800">~£120 – £300+ / mo</span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[78%] rounded-full bg-linear-to-r from-orange-500 to-rose-600" />
                  </div>
                </div>
              </div>
            </div>

            <section className="space-y-3" aria-labelledby="what-bolt">
              <h2 id="what-bolt" className={h2}>
                What Is Bolt Pharmacy Weight Loss Treatment?
              </h2>
              <p className={p}>
                Bolt Pharmacy offers online access to prescription weight loss
                medication following a medical review. Rather than attending a
                clinic, patients typically:
              </p>
              <ul className={ul}>
                <li>Complete an online consultation</li>
                <li>Receive a prescriber assessment</li>
                <li>Get approved if treatment is suitable</li>
                <li>Have medication delivered to their home</li>
              </ul>
              <p className={p}>
                For many people, getting treatment isn’t about motivation — it’s
                about navigating systems. Appointments, delays, repeat visits
                can stop progress before it starts. Unsure how GLP-1s compare?
                See{" "}
                <Link
                  href="/blog/mounjaro-weight-loss-benefits-backed-by-science"
                  className={linkC}
                >
                  our science overview
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="why-bolt">
              <h2 id="why-bolt" className={h2}>
                Why Choose Bolt Pharmacy for Weight Loss Treatment?
              </h2>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-100 hover:shadow-md">
                <h3 className={h3}>
                  1. Convenient Online Access to Prescription Treatment
                </h3>
                <p className={p}>
                  Everything happens remotely: no waiting room, no collecting
                  prescriptions after work. That could make a real difference for
                  people who prefer private treatment, need faster access, want
                  to avoid GP delays, or like managing healthcare online.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-100 hover:shadow-md">
                <h3 className={h3}>
                  2. Access to Clinically Backed Weight Loss Medications
                </h3>
                <p className={p}>
                  Bolt Pharmacy offers several prescription treatments, including{" "}
                  <Link href="/what-is-wegovy" className={linkC}>
                    Wegovy
                  </Link>
                  ,{" "}
                  <Link href="/what-is-mounjaro" className={linkC}>
                    Mounjaro
                  </Link>
                  ,{" "}
                  <Link href="/what-is-saxenda" className={linkC}>
                    Saxenda
                  </Link>
                  , Orlistat, and Mysimba. For{" "}
                  <Link
                    href="/saxenda-price-comparison"
                    className={linkC}
                  >
                    Saxenda
                  </Link>{" "}
                  pricing context in the UK, use our table.
                </p>
                <h4 className="mt-4 text-base font-bold text-slate-900">
                  How weight loss injections may work
                </h4>
                <p className={p}>
                  GLP-1 based medications such as Wegovy and Mounjaro may
                  support weight loss by helping regulate appetite. They may
                  increase fullness, reduce hunger signals, and lower calorie
                  intake over time. That doesn’t remove the need for diet
                  changes. For injection technique and pens, our{" "}
                  <Link
                    href="/blog/understanding-the-mounjaro-kwikpen-a-user-guide"
                    className={linkC}
                  >
                    KwikPen user guide
                  </Link>{" "}
                  may help.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {["Wegovy", "Mounjaro", "Tablets too"].map((t, i) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-amber-50/40 px-3 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-amber-200 sm:text-sm"
                  >
                    {i < 2 ? (
                      <Syringe className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                    ) : (
                      <Pill className="h-3.5 w-3.5 shrink-0 text-amber-600" />
                    )}
                    {t}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-100 hover:shadow-md">
                <h3 className={h3}>
                  3. Tablet-Based Alternatives Are Available
                </h3>
                <p className={p}>
                  Not everyone wants injections. Bolt also appears to offer oral
                  options including Orlistat and Mysimba. Orlistat may reduce fat
                  absorption; Mysimba may help with appetite or cravings — different
                  mechanisms, different trade-offs.
                </p>
              </div>
            </section>

            <section
              className="rounded-2xl border border-amber-200/80 bg-linear-to-br from-amber-50/50 to-white p-6 sm:p-8"
              aria-labelledby="steps-bolt"
            >
              <h2 id="steps-bolt" className={h2}>
                How Bolt Pharmacy Works
              </h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    n: "1",
                    t: "Online health assessment",
                    d: "Questionnaire: height, weight, BMI, history, current meds — screening for suitability.",
                  },
                  {
                    n: "2",
                    t: "Medical review",
                    d: "A prescriber reviews your information. Not everyone will qualify — that’s intentional.",
                  },
                  {
                    n: "3",
                    t: "Prescription and delivery",
                    d: "If approved: medication prepared, safety checks, then dispatch.",
                  },
                ].map((s) => (
                  <div
                    key={s.n}
                    className="group rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-amber-600 text-xs font-bold text-white">
                      {s.n}
                    </span>
                    <h3 className="mt-2 font-bold text-slate-900">{s.t}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4" aria-labelledby="delivery-bolt">
              <h2 id="delivery-bolt" className={h2}>
                Bolt Pharmacy Delivery and Home Shipping
              </h2>
              <p className={p}>
                Once approved, medication is dispensed, securely packaged, and
                sent using <strong>tracked</strong> delivery. Many deliveries
                may arrive within a few working days. Plain, unbranded packaging
                supports privacy. For cold-chain and storage, see our{" "}
                <Link
                  href="/helpful-guides/mounjaro-delivery-storage-uk"
                  className={linkC}
                >
                  Mounjaro delivery &amp; storage
                </Link>{" "}
                and{" "}
                <Link
                  href="/helpful-guides/mounjaro-delivery-times-uk"
                  className={linkC}
                >
                  delivery times
                </Link>{" "}
                guides. To verify any UK provider, use{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkC}
                >
                  GPhC verification
                </Link>{" "}
                and our{" "}
                <Link
                  href="/helpful-guides/how-we-verify-uk-pharmacies-gphc-safety-standards"
                  className={linkC}
                >
                  how we verify pharmacies
                </Link>{" "}
                article.
              </p>
              <h3 className={`${h3} mt-2`}>Safe handling for injections</h3>
              <p className={p}>
                Professionally dispensed, packed for integrity and stability, with
                efficient shipping — important for GLP-1 products. If progress
                stalls, our{" "}
                <Link
                  href="/helpful-guides/mounjaro-weight-loss-plateau"
                  className={linkC}
                >
                  weight loss plateau
                </Link>{" "}
                guide covers common next steps to discuss with a clinician.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="price-bolt">
              <h2 id="price-bolt" className={h2}>
                How Much Does Bolt Pharmacy Weight Loss Treatment Cost?
              </h2>
              <p className={p}>
                Tablet options may start around <strong>£10 to £70</strong>{" "}
                depending on medication. Injection typical ranges: around{" "}
                <strong>£120</strong> per month at entry-level and{" "}
                <strong>£300+</strong> at higher doses as titration progresses.
                Pricing may cover consultation, prescription, medication, and
                delivery. Compare headline figures on our price pages, then
                confirm on Bolt’s site. See also{" "}
                <Link href="/compare/best-weight-loss-injections-uk" className={linkC}>
                  best weight loss injections UK
                </Link>
                .
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="afford-bolt">
              <h2 id="afford-bolt" className={h2}>
                Is Bolt Pharmacy Affordable?
              </h2>
              <p className={p}>
                Compared with some UK private providers, Bolt appears
                competitively priced, though &quot;affordable&quot; depends on
                perspective. Support, continuity, and safety matter as much as
                sticker price.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="support-bolt">
              <h2 id="support-bolt" className={h2}>
                Ongoing Support and Monitoring
              </h2>
              <p className={p}>
                Weight management often requires adjustment. Bolt may offer
                support through treatment reviews, medication guidance, and dose
                adjustments over time.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="oversight-bolt">
              <h2 id="oversight-bolt" className={h2}>
                Why Medical Oversight Matters
              </h2>
              <p className={p}>
                These medications are not casual products. They may be prescribed
                for people with BMI above 30, or BMI above 27 with related health
                conditions. Bolt appears to build assessment into the process. Our
                UK framing for thresholds is in{" "}
                <Link
                  href="/what-is-wegovy#eligibility-uk"
                  className={linkC}
                >
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link
                  href="/what-is-mounjaro#eligibility-uk"
                  className={linkC}
                >
                  Mounjaro
                </Link>{" "}
                eligibility sections.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="who-bolt">
              <h2 id="who-bolt" className={h2}>
                Who Might Consider Bolt Pharmacy?
              </h2>
              <p className={p}>
                People who have struggled with diet alone, want medically
                supported treatment, prefer online healthcare, need quicker
                access, and value privacy. It may be less suitable for those who
                prefer face-to-face care.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="why-choose-bolt">
              <h2 id="why-choose-bolt" className={h2}>
                Why Some Patients Choose Bolt Pharmacy
              </h2>
              <p className={p}>
                Convenience, treatment choice (injections and tablets), fast
                delivery, competitive pricing, and ongoing support — that
                combination may be enough for many patients.
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="faq-bolt">
              <h2 id="faq-bolt" className={h2}>
                Frequently Asked Questions
              </h2>
              {[
                {
                  q: "1. Can I get Wegovy from Bolt Pharmacy?",
                  a: "Yes, Wegovy may be available through Bolt Pharmacy following an online assessment and approval.",
                },
                {
                  q: "2. Does Bolt Pharmacy offer Mounjaro for weight loss?",
                  a: "Yes, Mounjaro appears to be among available treatment options, subject to suitability checks.",
                },
                {
                  q: "3. How much does Bolt Pharmacy weight loss treatment cost?",
                  a: "Costs may range from around £10–£70 for tablets and £120–£300+ monthly for injections, depending on medication and dosage.",
                },
                {
                  q: "4. Does Bolt Pharmacy deliver weight loss injections to your home?",
                  a: "Yes. Approved prescriptions are shipped directly to your chosen address, often using tracked delivery.",
                },
                {
                  q: "5. Is Bolt Pharmacy regulated?",
                  a: "Bolt Pharmacy operates as a regulated pharmacy provider supplying prescription medication through medical review.",
                },
                {
                  q: "6. Are tablet alternatives available instead of injections?",
                  a: "Yes. Options may include Orlistat and Mysimba for patients preferring non-injectable treatment.",
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-amber-100 hover:shadow-md"
                >
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {item.q}
                  </h3>
                  <p className={`${p} mt-2`}>{item.a}</p>
                </div>
              ))}
            </section>

            <section
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              aria-labelledby="conclusion-bolt"
            >
              <h2 id="conclusion-bolt" className={h2}>
                Conclusion
              </h2>
              <p className={`${p} mt-4`}>
                If you’re looking for a private route to prescription weight loss
                treatment, Bolt Pharmacy weight loss treatment appears to offer a
                practical option, with Wegovy and Mounjaro, online assessments,
                discreet home delivery, and ongoing support. Will it suit
                everyone? Probably not — but for people prioritising convenience
                and medically supervised support, it may be worth considering.
                Explore{" "}
                <Link href="/mounjaro-faq" className={linkC}>
                  Mounjaro FAQ
                </Link>
                ,{" "}
                <Link href="/wegovy-faq" className={linkC}>
                  Wegovy FAQ
                </Link>
                , and the{" "}
                <Link href="/helpful-guides" className={linkC}>
                  helpful guides hub
                </Link>{" "}
                for more before you speak to a prescriber.
              </p>
              <div className="mt-8">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-amber-700"
                >
                  Visit Bolt Pharmacy
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border-2 border-amber-500 bg-amber-50/80 overflow-hidden shadow-lg">
                <div className="bg-linear-to-r from-amber-600 to-orange-600 p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 mb-2">
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-white text-lg">
                    Discount code
                  </p>
                  <p className="text-amber-100 text-sm mt-1">
                    Add a verified code here when you have one.
                  </p>
                </div>
                <div className="p-6 text-center">
                  {hasDiscount ? (
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="group w-full rounded-xl border-2 border-dashed border-amber-300 bg-white py-3.5 font-mono font-bold text-amber-800"
                    >
                      {copied ? "Copied!" : discountCode}
                    </button>
                  ) : (
                    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white py-4 text-sm text-slate-500">
                      Coming soon
                    </div>
                  )}
                  <a
                    href={providerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white"
                  >
                    <Truck className="w-4 h-4" />
                    Go to website
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-600" />
                  Read more
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>
                    <Link href="/pharmacy-safety-gphc-verification" className={linkC}>
                      GPhC safety checks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/weight-loss-injection-shortages-in-the-uk-what-you-need-to-know"
                      className={linkC}
                    >
                      Injection shortages in the UK
                    </Link>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <Image
                    src="/window.svg"
                    alt="Health Wise"
                    width={24}
                    height={24}
                    className="opacity-50"
                  />
                  <span className="text-xs font-semibold text-slate-500 uppercase">
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
