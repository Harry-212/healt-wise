"use client";

import type { ReactNode } from "react";
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

/** Subtle “official paper” border: double rules, corner scrollwork, and margin guilloché. */
function BoltOfficialDocumentFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 -m-3 rounded-sm opacity-[0.45] sm:-m-4"
        aria-hidden
        style={{
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(120, 83, 32, 0.07) 0px,
              rgba(120, 83, 32, 0.07) 1px,
              transparent 1px,
              transparent 10px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(120, 83, 32, 0.05) 0px,
              rgba(120, 83, 32, 0.05) 1px,
              transparent 1px,
              transparent 10px
            )
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -m-3 overflow-hidden rounded-sm sm:-m-4"
        aria-hidden
      >
        <div className="absolute inset-x-4 top-0 h-2.5 border-y border-amber-900/25 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(120,53,15,0.12)_3px,rgba(120,53,15,0.12)_4px)]" />
        <div className="absolute inset-x-4 bottom-0 h-2.5 border-y border-amber-900/25 bg-[repeating-linear-gradient(90deg,transparent,transparent_3px,rgba(120,53,15,0.12)_3px,rgba(120,53,15,0.12)_4px)]" />
        <div className="absolute inset-y-4 left-0 w-2.5 border-x border-amber-900/25 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(120,53,15,0.12)_3px,rgba(120,53,15,0.12)_4px)]" />
        <div className="absolute inset-y-4 right-0 w-2.5 border-x border-amber-900/25 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(120,53,15,0.12)_3px,rgba(120,53,15,0.12)_4px)]" />
        <svg
          className="absolute left-0 top-0 h-14 w-14 text-amber-900/35"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.15"
            d="M2 54V14Q2 2 14 2H54M4 50V16Q4 4 16 4H50"
          />
          <path
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.65"
            d="M6 18H20M10 22H20M6 26H20M10 8V18"
          />
        </svg>
        <svg
          className="absolute right-0 top-0 h-14 w-14 rotate-90 text-amber-900/35"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.15"
            d="M2 54V14Q2 2 14 2H54M4 50V16Q4 4 16 4H50"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 h-14 w-14 -rotate-90 text-amber-900/35"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.15"
            d="M2 54V14Q2 2 14 2H54M4 50V16Q4 4 16 4H50"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 h-14 w-14 rotate-180 text-amber-900/35"
          viewBox="0 0 56 56"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeWidth="1.15"
            d="M2 54V14Q2 2 14 2H54M4 50V16Q4 4 16 4H50"
          />
        </svg>
      </div>
      <div
        className="relative z-[1] rounded-sm border-2 border-amber-900/40 bg-white shadow-[inset_0_0_0_1px_rgba(196,160,80,0.25),0_0_0_1px_rgba(120,53,15,0.1),0_32px_90px_rgba(15,23,42,0.09)]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.018) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      >
        <div className="pointer-events-none absolute inset-3 rounded-sm border border-dashed border-amber-800/20 sm:inset-4" aria-hidden />
        {children}
      </div>
    </div>
  );
}

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
    <article className="min-h-screen bg-[#ddd7cd] pb-20 [background-image:radial-gradient(ellipse_at_30%_0%,#ebe6dc_0%,transparent_55%),radial-gradient(ellipse_at_70%_100%,#d4cec3_0%,#e8e3d8_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <BoltOfficialDocumentFrame>
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex flex-col gap-6 border-b border-amber-900/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="font-medium text-xs uppercase tracking-[0.28em] text-amber-950/70">
                  Health Wise — pharmacy briefing
                </p>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Bolt Pharmacy Weight Loss Treatment UK: Is It a Good Choice for Wegovy, Mounjaro and Online Prescriptions?
                </h1>
                <p className="text-sm leading-7 text-slate-600">
                  Official summary: how Bolt Pharmacy delivers online consultation, clinical review, prescription delivery, and ongoing support in the UK.
                </p>
              </div>
              <div className="rounded-sm border border-amber-900/20 bg-[#faf8f4] p-4 text-sm text-slate-700 shadow-[inset_0_0_0_1px_rgba(180,140,60,0.12)]">
              <div className="mb-3 text-xs uppercase tracking-[0.22em] text-amber-900/60">
                Document details
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-900">Published</span>
                  <span>2026</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-900">Provider</span>
                  <span>Bolt Pharmacy</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-900">Scope</span>
                  <span>Wegovy · Mounjaro · Saxenda</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-900">Mode</span>
                  <span>Online prescribing</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-8 text-slate-700">
            <section className="space-y-4">
              <p className="text-base leading-8">
                For a lot of people, weight loss is not really about “trying harder.” It may be about access to the right support.
              </p>
              <p className="text-base leading-8">
                You can meal prep every Sunday, track calories for weeks, even hit 10,000 steps a day — and still find progress stalls. That’s often where prescription treatment enters the conversation.
              </p>
              <p className="text-base leading-8">
                Bolt Pharmacy weight loss treatment has become one of the UK providers offering that option through an online model, with access to medications such as Wegovy, Mounjaro and other medically supervised treatments.
              </p>
              <p className="text-base leading-8">
                Through Bolt Pharmacy, eligible patients may complete an online consultation, receive a clinical review, and have treatment delivered to their home.
              </p>
              <p className="text-base leading-8">
                Simple in theory.
              </p>
              <p className="text-base leading-8">
                But there are a few reasons people consider it beyond convenience alone.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Key takeaways</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Tablets", value: "£10–70" },
                  { label: "Entry injections", value: "£120+" },
                  { label: "Higher dose", value: "£300+" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-white p-4 shadow-sm border border-slate-200">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-2xl font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">What Is Bolt Pharmacy Weight Loss Treatment?</p>
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-base leading-8">
                  Bolt Pharmacy offers an online prescribing service for weight management medications.
                </p>
                <p className="text-base leading-8">
                  Instead of booking a traditional appointment, patients generally:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-slate-700">
                  <li>Complete an online health questionnaire</li>
                  <li>Receive prescriber review</li>
                  <li>Get approved if clinically suitable</li>
                  <li>Have medication shipped directly home</li>
                </ul>
                <p className="text-base leading-8">
                  That process may suit people who prefer privacy or who have struggled with delays accessing treatment elsewhere.
                </p>
                <p className="text-base leading-8">
                  And honestly, that seems to be a big part of the appeal.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Why Choose Bolt Pharmacy?</p>
              <div className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-semibold text-slate-900">1. Convenient Access to Prescription Weight Loss Medication</h2>
                  <p className="mt-3 text-base leading-8">
                    Convenience is not a minor feature here. It’s arguably central.
                  </p>
                  <p className="text-base leading-8">
                    With Bolt Pharmacy, the process happens online, which may help avoid:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-700">
                    <li>Waiting for GP appointments</li>
                    <li>Repeat clinic visits</li>
                    <li>Delays accessing prescriptions</li>
                  </ul>
                  <p className="text-base leading-8">
                    For someone working full-time or juggling family schedules, that may be more than convenience — it may be what makes treatment realistic.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-semibold text-slate-900">2. Access to Clinically Backed Weight Loss Injections</h2>
                  <p className="mt-3 text-base leading-8">
                    A major reason people look at Bolt Pharmacy is access to prescription injections, including Wegovy, Mounjaro and Saxenda.
                  </p>
                  <p className="text-base leading-8">
                    These treatments may support weight loss by:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-700">
                    <li>Helping reduce appetite</li>
                    <li>Increasing satiety</li>
                    <li>Supporting lower calorie intake</li>
                  </ul>
                  <p className="text-base leading-8">
                    They do not replace behaviour change. That’s worth saying clearly. But they may help make those changes more sustainable.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h2 className="text-xl font-semibold text-slate-900">3. Tablet Alternatives Are Available</h2>
                  <p className="mt-3 text-base leading-8">
                    Not everyone wants injections. Some patients prefer oral treatment for cost, comfort, or practicality.
                  </p>
                  <p className="text-base leading-8">
                    Bolt Pharmacy also appears to offer:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-slate-700">
                    <li>Orlistat</li>
                    <li>Mysimba</li>
                  </ul>
                  <p className="text-base leading-8">
                    Those options work differently. Some may reduce fat absorption. Others may influence appetite or cravings. Different routes. Different considerations.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">How Bolt Pharmacy Works</p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { step: "1", title: "Online assessment", detail: "Questionnaire: height, weight, BMI, history, current meds — screening for suitability." },
                  { step: "2", title: "Medical review", detail: "A prescriber reviews your information. Not everyone will qualify — that’s intentional." },
                  { step: "3", title: "Prescription and delivery", detail: "If approved: medication prepared, safety checks, then dispatch." },
                ].map((item) => (
                  <div key={item.step} className="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Delivery and Packaging</p>
              <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
                <p className="text-base leading-8">
                  Delivery is often overlooked until something goes wrong. Late shipment. Missed doses. Supply gaps. Those things matter.
                </p>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">How Delivery Works</h3>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Approved medication is generally dispensed professionally, packaged securely, and sent through tracked delivery.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Delivery Timeframes</h3>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Although timeframes can vary, orders often appear to be processed quickly, with delivery commonly arriving within a few working days.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">Discreet Packaging</h3>
                  <p className="mt-3 text-base leading-8 text-slate-700">
                    Privacy is built into the process. Bolt states packaging is plain and unbranded, with no obvious indication of contents.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Safety and supervision</p>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-semibold text-slate-900">Safe Handling of Prescription Injections</h3>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  Injectable medications require proper handling, especially if temperature-sensitive.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-slate-700">
                  <li>Professional Dispensing — regulated pharmacy controls</li>
                  <li>Protective Packaging — stability and transit protection</li>
                  <li>Efficient Shipping — faster shipping can reduce risk from delays</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Price</p>
              <p className="text-base leading-8 text-slate-700">
                Costs depend on treatment choice.
              </p>
              <p className="text-base leading-8 text-slate-700">
                Tablet options may start around <strong>£10–£70</strong>. Injection costs typically fall around <strong>£120 per month</strong> at lower doses and <strong>£300+</strong> at higher doses.
              </p>
              <p className="text-base leading-8 text-slate-700">
                Costs often increase as treatment progresses. Pricing may include consultation, prescription, medication, and delivery.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Considerations</p>
              <p className="text-base leading-8 text-slate-700">
                Bolt appears competitive against some UK private providers, but support quality matters as much as sticker price.
              </p>
              <p className="text-base leading-8 text-slate-700">
                This service may suit people who have struggled with diet alone, want clinically supported treatment, prefer online healthcare, need faster access, and value privacy.
              </p>
              <p className="text-base leading-8 text-slate-700">
                It may be less suitable for people wanting regular face-to-face support.
              </p>
            </section>

            <section className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-red-700">Frequently Asked Questions</p>
              <div className="space-y-4">
                {[
                  {
                    q: "Can I buy Wegovy online from Bolt Pharmacy?",
                    a: "Yes, Wegovy may be available through Bolt Pharmacy following an online consultation and approval.",
                  },
                  {
                    q: "Does Bolt Pharmacy offer Mounjaro for weight loss?",
                    a: "Yes, Mounjaro appears among available treatment options, subject to medical suitability.",
                  },
                  {
                    q: "How much does Bolt Pharmacy weight loss treatment cost?",
                    a: "Costs may range from around £10–£70 for tablets and £120–£300+ monthly for injections, depending on medication and dosage.",
                  },
                  {
                    q: "Does Bolt Pharmacy deliver weight loss medication to your home?",
                    a: "Yes. Approved prescriptions are generally shipped directly to your address using tracked delivery.",
                  },
                  {
                    q: "Is Bolt Pharmacy regulated?",
                    a: "Bolt Pharmacy operates through a regulated pharmacy model with medical review and prescription oversight.",
                  },
                  {
                    q: "Are alternatives to injections available?",
                    a: "Yes. Tablet options such as Orlistat and Mysimba may be available.",
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="font-semibold text-slate-900">{item.q}</p>
                    <p className="mt-2 text-slate-700">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold text-slate-900">Conclusion</h2>
              <p className="mt-4 text-base leading-8 text-slate-700">
                If you want a private and practical route into prescription weight loss treatment, Bolt Pharmacy weight loss treatment appears to offer a credible option. Access to medications such as Wegovy and Mounjaro, combined with online assessment, discreet delivery and ongoing support, gives it more substance than a basic online pharmacy checkout.
              </p>
              <p className="text-base leading-8 text-slate-700">
                Is it right for everyone? Probably not. Some people may prefer traditional GP-led care. But for those prioritising convenience, access and medically supervised treatment, Bolt Pharmacy may well be worth considering.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={providerUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                  Visit Bolt Pharmacy
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">Note</p>
                  <p className="mt-2">This page is an informational summary and does not replace medical advice.</p>
                </div>
              </div>
            </section>
          </div>
          </div>
        </BoltOfficialDocumentFrame>
      </div>
    </article>
  );
}
