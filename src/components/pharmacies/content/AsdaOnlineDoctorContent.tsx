"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  ThermometerSnowflake,
  Truck,
  Copy,
  Tag,
  Star,
  ChevronRight,
  Home,
} from "lucide-react";

export default function AsdaOnlineDoctorContent() {
  const asdaUrl =
    "https://onlinedoctor.asda.com/uk/weight-loss-treatment.html?utm_source=healthwise360";
  const [copied, setCopied] = useState(false);

  const discountCode = "ASDA10";
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
            <Link
              href="/"
              className="hover:text-slate-900 transition-colors"
            >
              <Home className="w-4 h-4" />
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href="/wegovy-price-comparison"
              className="hover:text-slate-900 transition-colors"
            >
              Compare prices
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-slate-900">Asda Online Doctor</span>
          </nav>
        </div>
      </div>

      <header className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          className="absolute inset-0 bg-linear-to-b from-emerald-50/50 to-transparent pointer-events-none"
          aria-hidden
        />
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:py-14 relative z-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <span className="text-2xl font-black tracking-tighter text-emerald-600 sm:text-3xl">
                ASDA
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" /> GPhC Regulated
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> 4.8
                  TrustScore
                </span>
              </div>
              <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem] md:leading-tight">
                Asda Online Doctor Weight Loss Treatment: Safe, Convenient and
                Affordable Weight Loss Medication in the UK
              </h1>
              <div className="mt-6">
                <a
                  href={asdaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Visit Asda Online Doctor <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 mt-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-start">
          <div className="space-y-10 max-w-none">
            <section
              className="space-y-4"
              aria-labelledby="asda-intro"
            >
              <h2 id="asda-intro" className="sr-only">
                Introduction
              </h2>
              <p className={p}>
                Losing weight is not always easy, especially when diet and
                exercise alone do not produce the results you need. For many
                people in the UK, prescription treatments such as weight loss
                injections and tablets can offer clinically supported help.
              </p>
              <p className={p}>
                Asda Online Doctor weight loss treatment provides a safe,
                convenient, and regulated way to access medications like{" "}
                <Link
                  href="/what-is-wegovy"
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                >
                  Wegovy
                </Link>
                ,{" "}
                <Link
                  href="/what-is-mounjaro"
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                >
                  Mounjaro
                </Link>
                ,{" "}
                <Link
                  href="/what-is-saxenda"
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                >
                  Saxenda
                </Link>
                , and Orlistat online without visiting a GP in person.
              </p>
              <p className={p}>
                Through a fully digital process, patients can complete an online
                consultation, receive approval from UK-registered doctors, and
                have medication delivered discreetly to their home.
              </p>
              <p className={p}>
                In this guide, we explain how Asda Online Doctor works, what
                treatments are available, pricing, delivery options, and why it
                is a trusted provider for weight loss medication in the UK. For
                broader context, see our{" "}
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                >
                  Wegovy vs Mounjaro
                </Link>{" "}
                comparison and{" "}
                <Link
                  href="/prices/cheapest-options-uk"
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-2 hover:text-emerald-950"
                >
                  cheapest GLP-1 options in the UK
                </Link>
                .
              </p>
            </section>

            <section className="space-y-4" aria-labelledby="what-is-asda">
              <h2 id="what-is-asda" className={h2}>
                What Is Asda Online Doctor Weight Loss Treatment?
              </h2>
              <p className={p}>
                Asda Online Doctor is an online healthcare service that allows
                patients to consult licensed UK doctors remotely and receive
                prescription treatment if clinically suitable.
              </p>
              <p className="font-medium text-slate-800">Its weight loss service includes access to:</p>
              <ul className={ul}>
                <li>
                  <Link
                    href="/what-is-wegovy"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    Wegovy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-is-mounjaro"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    Mounjaro
                  </Link>
                </li>
                <li>
                  <Link
                    href="/what-is-saxenda"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    Saxenda
                  </Link>
                </li>
                <li>Orlistat</li>
              </ul>
              <p className="font-medium text-slate-800">
                These treatments can help support weight loss by:
              </p>
              <ul className={ul}>
                <li>Reducing appetite</li>
                <li>Improving satiety (feeling fuller for longer)</li>
                <li>Supporting blood sugar regulation</li>
                <li>Assisting long-term weight management</li>
              </ul>
              <p className={p}>
                All prescriptions are subject to medical assessment, helping
                ensure treatment is appropriate and safe.
              </p>
            </section>

            <section className="space-y-6" aria-labelledby="why-choose">
              <h2 id="why-choose" className={h2}>
                Why Choose Asda Online Doctor for Weight Loss Treatment?
              </h2>

              <div className="space-y-3">
                <h3 className={h3}>
                  1. Convenient Online Access to Weight Loss Medication
                </h3>
                <p className={p}>
                  One of the main reasons people choose Asda Online Doctor for
                  weight loss injections is convenience. The process is fully
                  online:
                </p>
                <ul className={ul}>
                  <li>Complete a medical questionnaire</li>
                  <li>Receive a doctor review</li>
                  <li>Get approved if suitable</li>
                  <li>Have medication delivered to your door</li>
                </ul>
                <p className={p}>
                  There is no need to book in-person appointments or visit a
                  clinic, making it ideal for busy lifestyles. If you are
                  comparing private routes, our{" "}
                  <Link
                    href="/wegovy-price-comparison"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    Wegovy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/mounjaro-price-comparison"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    Mounjaro
                  </Link>{" "}
                  price comparisons show how different providers present costs.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  2. Safe and Regulated UK Prescribing Service
                </h3>
                <p className={p}>
                  Safety matters when buying weight loss medication online. Asda
                  Online Doctor offers:
                </p>
                <ul className={ul}>
                  <li>UK-registered doctors</li>
                  <li>Regulated pharmacy dispensing</li>
                  <li>Clinical eligibility checks</li>
                  <li>Legitimate prescription-only medication</li>
                </ul>
                <p className={p}>
                  This helps protect patients from counterfeit or unsafe
                  products sold through unregulated sources. Read our{" "}
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
                  >
                    GPhC pharmacy verification
                  </Link>{" "}
                  guide to check any provider yourself.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  3. Access to Effective Weight Loss Treatments
                </h3>
                <p className={p}>
                  Asda offers some of the most popular prescription treatments
                  currently available in the UK.
                </p>
                <p className="font-semibold text-slate-800">Wegovy</p>
                <p className={p}>
                  Wegovy is a weekly GLP-1 injection designed to reduce appetite
                  and support sustainable weight loss. Learn more:{" "}
                  <Link
                    href="/what-is-wegovy"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    what is Wegovy?
                  </Link>
                </p>
                <p className="font-semibold text-slate-800">Mounjaro</p>
                <p className={p}>
                  Mounjaro is another once-weekly injection that targets appetite
                  control and metabolic support. Overview:{" "}
                  <Link
                    href="/what-is-mounjaro"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    what is Mounjaro?
                  </Link>
                </p>
                <p className="font-semibold text-slate-800">Orlistat</p>
                <p className={p}>
                  Orlistat works differently by reducing fat absorption from
                  food. These treatments can be effective when combined with:
                </p>
                <ul className={ul}>
                  <li>Calorie control</li>
                  <li>Healthy nutrition</li>
                  <li>Regular exercise</li>
                </ul>
                <p className={p}>
                  See also{" "}
                  <Link
                    href="/compare/best-weight-loss-injections-uk"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    best weight loss injections in the UK
                  </Link>
                  .
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>4. Personalised Doctor-Led Support</h3>
                <p className={p}>
                  Unlike over-the-counter products, Asda Online Doctor provides
                  medical supervision. Doctors assess:
                </p>
                <ul className={ul}>
                  <li>BMI</li>
                  <li>Medical history</li>
                  <li>Current medications</li>
                  <li>Suitability for treatment</li>
                </ul>
                <p className="font-medium text-slate-800">Patients can also receive:</p>
                <ul className={ul}>
                  <li>Dosage guidance</li>
                  <li>Side effect advice</li>
                  <li>Ongoing monitoring</li>
                  <li>Dose adjustments when needed</li>
                </ul>
                <p className={p}>
                  This creates a more structured weight management plan. For
                  eligibility context in the UK, our{" "}
                  <Link
                    href="/what-is-wegovy#eligibility-uk"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    Wegovy eligibility
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/what-is-mounjaro#eligibility-uk"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    Mounjaro eligibility
                  </Link>{" "}
                  pages explain how prescribers usually think about BMI and
                  health history.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  5. Fast and Discreet Delivery to Your Door
                </h3>
                <p className={p}>
                  A major benefit of Asda weight loss medication delivery is
                  convenience and privacy. Once approved:
                </p>
                <ul className={ul}>
                  <li>Medication is prepared by a regulated pharmacy</li>
                  <li>Securely packaged</li>
                  <li>Shipped directly to your address</li>
                </ul>
                <p className="font-medium text-slate-800">Benefits include:</p>
                <ul className={ul}>
                  <li>Fast dispatch</li>
                  <li>Discreet packaging</li>
                  <li>Secure delivery</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  6. Temperature-Controlled Delivery for Weight Loss Injections
                </h3>
                <p className={p}>
                  Injection medications need proper storage. Asda uses cold-chain
                  packaging to help maintain correct temperatures for medications
                  such as:
                </p>
                <ul className={ul}>
                  <li>Wegovy</li>
                  <li>Mounjaro</li>
                  <li>Saxenda</li>
                </ul>
                <p className={p}>
                  This helps preserve effectiveness during transit. Storage tips:{" "}
                  <Link
                    href="/helpful-guides/mounjaro-delivery-storage-uk"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    Mounjaro delivery &amp; storage (UK)
                  </Link>
                  .
                </p>
                <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 text-cyan-700">
                  <ThermometerSnowflake className="h-5 w-5" aria-hidden />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className={h3}>
                  7. Transparent Pricing With No Hidden Fees
                </h3>
                <p className={p}>
                  One reason many patients choose Asda is pricing transparency.
                  Costs often include:
                </p>
                <ul className={ul}>
                  <li>Consultation</li>
                  <li>Prescription</li>
                  <li>Medication</li>
                  <li>Delivery</li>
                  <li>Ongoing support</li>
                </ul>
                <p className={p}>
                  This makes budgeting easier compared with providers charging
                  separate fees. Always confirm live numbers on the provider
                  site; our{" "}
                  <Link
                    href="/mounjaro-price-comparison"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    Mounjaro price comparison
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/saxenda-price-comparison"
                    className="font-semibold text-emerald-800 underline underline-offset-2"
                  >
                    Saxenda price comparison
                  </Link>{" "}
                  offer illustrative UK snapshots.
                </p>
              </div>
            </section>

            <section className="space-y-4" aria-labelledby="how-much-cost">
              <h2 id="how-much-cost" className={h2}>
                How Much Does Asda Online Doctor Weight Loss Treatment Cost?
              </h2>
              <p className={p}>Pricing depends on medication and dosage.</p>
              <h3 className={h3}>Weight Loss Injection Costs</h3>
              <p className={p}>Typical prices may include:</p>
              <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                Wegovy
              </h4>
              <ul className={ul}>
                <li>From around £88.97 per month</li>
                <li>Higher doses up to £248.97</li>
              </ul>
              <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                Mounjaro
              </h4>
              <ul className={ul}>
                <li>From around £148.97 per month</li>
              </ul>
              <h3 className={`${h3} mt-6`}>Tablet Treatment Costs</h3>
              <p className={p}>
                Orlistat options are generally lower cost.
              </p>
              <h3 className={`${h3} mt-2`}>Average Monthly Cost</h3>
              <p className={p}>
                Most patients can expect to pay <strong className="font-semibold text-slate-900">£90 to £250 per month</strong>{" "}
                depending on treatment and dose.
              </p>
            </section>

            <section className="space-y-5 rounded-2xl border border-slate-200 bg-slate-900 p-6 sm:p-8 text-white">
              <h2
                id="how-it-works-steps"
                className="text-2xl font-bold text-white sm:text-[1.65rem]"
              >
                How Asda Online Doctor Works Step by Step
              </h2>
              <div className="space-y-5 text-slate-300">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Step 1: Complete Online Consultation
                  </h3>
                  <p className="mt-2">Provide information including:</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Weight</li>
                    <li>BMI</li>
                    <li>Medical history</li>
                    <li>Current medications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Step 2: Doctor Review
                  </h3>
                  <p className="mt-2">
                    A UK doctor reviews your information and determines
                    whether treatment is suitable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Step 3: Prescription Approval
                  </h3>
                  <p className="mt-2">If approved:</p>
                  <ul className="mt-2 list-disc pl-5 space-y-1">
                    <li>Prescription is issued</li>
                    <li>Medication is prepared</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Step 4: Home Delivery
                  </h3>
                  <p className="mt-2">
                    Treatment is securely shipped to your address.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Step 5: Ongoing Support
                  </h3>
                  <p className="mt-2">
                    Patients can reorder, ask questions, and manage treatment
                    online.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3" aria-labelledby="delivery-time">
              <h2 id="delivery-time" className={h2}>
                How Long Does Delivery Take?
              </h2>
              <p className={p}>
                Delivery times may vary, but typically:
              </p>
              <ul className={ul}>
                <li>Orders are processed after approval</li>
                <li>
                  Doctors may respond within 48 hours if extra information is
                  needed
                </li>
                <li>Treatment often arrives within a few days</li>
              </ul>
              <p className={p}>
                This can allow many patients to start treatment quickly.
              </p>
            </section>

            <section className="space-y-3" aria-labelledby="reordering">
              <h2 id="reordering" className={h2}>
                Reordering and Continuous Treatment
              </h2>
              <p className={p}>
                Asda makes ongoing treatment straightforward. Patients are often
                advised to reorder at least two weeks before running out.
                Repeat orders may involve:
              </p>
              <ul className={ul}>
                <li>Dose reviews</li>
                <li>New assessments</li>
                <li>Progress monitoring</li>
              </ul>
              <p className={p}>
                This supports safe treatment continuation. For more on
                service expectations, see{" "}
                <Link
                  href="/helpful-guides"
                  className="font-semibold text-emerald-800 underline underline-offset-2"
                >
                  our helpful guides
                </Link>
                .
              </p>
            </section>

            <section className="space-y-6" aria-labelledby="stands-out">
              <h2 id="stands-out" className={h2}>
                Why Asda Online Doctor Stands Out
              </h2>
              <div className="space-y-1.5">
                <h3 className={h3}>Trusted UK Brand</h3>
                <p className={p}>
                  Asda is a recognised name that gives customers confidence.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className={h3}>Fully Online Healthcare</h3>
                <p className={p}>The service is:</p>
                <ul className={ul}>
                  <li>Convenient</li>
                  <li>Accessible</li>
                  <li>Faster than some traditional routes</li>
                </ul>
              </div>
              <div className="space-y-1.5">
                <h3 className={h3}>All-Inclusive Service</h3>
                <p className={p}>Many costs include:</p>
                <ul className={ul}>
                  <li>Consultation</li>
                  <li>Medication</li>
                  <li>Delivery</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="space-y-1.5">
                <h3 className={h3}>
                  Safe Legal Access to Prescription Medication
                </h3>
                <p className={p}>
                  All treatment follows UK prescribing rules.
                </p>
              </div>
              <div className="space-y-1.5">
                <h3 className={h3}>Ongoing Medical Support</h3>
                <p className={p}>
                  Doctors remain available after treatment begins.
                </p>
              </div>
            </section>

            <section className="space-y-4" aria-labelledby="faq">
              <h2 id="faq" className={h2}>
                Frequently Asked Questions (FAQ)
              </h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    1. Can I buy Wegovy online from Asda Online Doctor?
                  </h3>
                  <p className={`${p} mt-2`}>
                    Yes, Wegovy may be available through Asda Online Doctor
                    after completing a medical assessment and receiving doctor
                    approval.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    2. Does Asda Online Doctor deliver weight loss injections to
                    your home?
                  </h3>
                  <p className={`${p} mt-2`}>
                    Yes, approved medications can be delivered directly to your
                    address using discreet and secure delivery, including
                    temperature-controlled packaging for injections.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    3. How much does Asda Online Doctor weight loss treatment
                    cost?
                  </h3>
                  <p className={`${p} mt-2`}>
                    Prices typically range from £90 to £250 per month, depending
                    on medication type and dosage.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    4. Is Mounjaro available through Asda Online Doctor?
                  </h3>
                  <p className={`${p} mt-2`}>
                    Yes, Mounjaro may be prescribed if clinically appropriate
                    following an online consultation.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    5. Is Asda Online Doctor safe for buying weight loss
                    medication?
                  </h3>
                  <p className={`${p} mt-2`}>
                    Yes, the service uses UK-registered doctors and regulated
                    pharmacies, helping ensure safe and legal access to
                    prescription medication.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    6. Do I need a GP appointment before using Asda Online
                    Doctor?
                  </h3>
                  <p className={`${p} mt-2`}>
                    No, the service is fully online, so you can complete
                    consultation and assessment without visiting a GP in person.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              aria-labelledby="conclusion"
            >
              <h2 id="conclusion" className={h2}>
                Conclusion
              </h2>
              <p className={`${p} mt-4`}>
                Choosing Asda Online Doctor weight loss treatment offers a
                practical combination of safety, convenience, and affordability
                for people seeking medically supported weight loss solutions.
              </p>
              <p className={`${p} mt-4`}>
                With access to treatments like Wegovy, Mounjaro and Orlistat,
                plus discreet delivery, transparent pricing, and ongoing doctor
                support, Asda provides a trusted route to accessing prescription
                weight loss medication in the UK.
              </p>
              <p className={`${p} mt-4`}>
                If you are looking for a regulated and convenient way to start
                treatment, Asda Online Doctor can be a reliable option to
                support your long-term weight management journey. Explore{" "}
                <Link
                  href="/mounjaro-faq"
                  className="font-semibold text-emerald-800 underline underline-offset-2"
                >
                  Mounjaro FAQ
                </Link>{" "}
                and{" "}
                <Link
                  href="/wegovy-faq"
                  className="font-semibold text-emerald-800 underline underline-offset-2"
                >
                  Wegovy FAQ
                </Link>{" "}
                for more independent context before you speak to a clinician.
              </p>
              <div className="mt-8 text-center sm:text-left">
                <a
                  href={asdaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Visit Asda Online Doctor
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>

          <div className="relative">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border-2 border-emerald-600 bg-emerald-50 overflow-hidden shadow-lg">
                <div className="bg-emerald-600 p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/20 mb-2">
                    <Tag className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-bold text-white text-lg">Exclusive discount</p>
                  <p className="text-emerald-100 text-sm mt-1">
                    Use our code to save on your first order at Asda Online
                    Doctor.
                  </p>
                </div>
                <div className="p-6 text-center">
                  {hasDiscount ? (
                    <>
                      <p className="text-sm font-medium text-slate-600 mb-3">
                        Click to copy your code:
                      </p>
                      <button
                        onClick={handleCopy}
                        type="button"
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-emerald-300 bg-white py-3.5 transition-all hover:border-emerald-500 hover:bg-emerald-50 active:scale-[0.98]"
                        aria-label="Copy discount code"
                      >
                        <span className="font-mono text-xl font-bold tracking-wider text-emerald-700">
                          {discountCode}
                        </span>
                        {copied ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        )}
                        <div
                          className={`absolute inset-0 flex items-center justify-center bg-emerald-600 text-white font-bold transition-transform duration-300 ${
                            copied ? "translate-y-0" : "translate-y-full"
                          }`}
                        >
                          <CheckCircle2 className="w-5 h-5 mr-2" /> Copied!
                        </div>
                      </button>
                    </>
                  ) : (
                    <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white py-4 px-4 text-center">
                      <span className="text-sm font-semibold text-slate-500">
                        Discount codes coming soon
                      </span>
                      <p className="text-xs text-slate-400 mt-1">
                        We will update this section when a verified code is
                        available. Check back or follow us for updates.
                      </p>
                    </div>
                  )}
                  <div className="mt-5">
                    <a
                      href={asdaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
                    >
                      Visit provider
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" aria-hidden />{" "}
                  Safe &amp; verified
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Asda Online Doctor is a regulated UK healthcare provider. All
                  prescriptions are reviewed by licensed UK prescribers and
                  dispensed by registered pharmacies.
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
