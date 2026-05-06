"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Tag,
  ChevronRight,
  Home,
  Truck,
  ClipboardList,
  RefreshCw,
} from "lucide-react";
import {
  HazardBox,
  PHARMACY_PROVIDER_CTA_CLASSNAME,
  PharmacyBrandLogoFooter,
  PharmacyHeroProviderLogo,
  PharmacyPriceCompareHint,
} from "./_dossier";

const providerUrl =
  "https://www.boltpharmacy.co.uk/prelanding30?utm_source=healthwise360";

function Points({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-2">
      {items.map((t) => (
        <div
          key={t}
          className="flex items-start gap-2 border border-slate-200/90 bg-white/80 px-4 py-3 text-sm text-slate-800 shadow-sm"
        >
          <span
            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-amber-200/80 bg-[#f5f0e6]"
            aria-hidden
          >
            <span className="h-2 w-2 rounded-full bg-amber-800/70" />
          </span>
          <span className="leading-relaxed">{t}</span>
        </div>
      ))}
    </div>
  );
}

export default function BoltPharmacyContent() {
  const [copied, setCopied] = useState(false);
  /** Empty until you provide the live code — then set the string here. */
  const discountCode = "";
  const hasDiscount = false;
  const hasDiscountCode = discountCode.trim().length > 0;

  const handleCopy = async () => {
    if (!hasDiscountCode) return;
    try {
      await navigator.clipboard.writeText(discountCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const body = "text-slate-800 leading-relaxed";
  const sectionLabel =
    "font-sans text-xs font-bold uppercase tracking-[0.2em] text-emerald-900/90 sm:text-sm";
  const h2 = "font-sans text-lg font-bold text-slate-900 sm:text-xl";
  const h3 = "font-sans text-base font-bold text-slate-900 sm:text-lg";

  return (
    <article
      className="min-h-screen font-sans pb-16 [background:radial-gradient(ellipse_120%_80%_at_50%_-20%,#f2f0ea_0%,#ece9e2_45%,#e7e3dc_100%)]"
    >
      {/* Aged paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-5 pb-8 sm:px-6 sm:pt-6 sm:pb-10 lg:max-w-4xl xl:max-w-6xl">
        {/* Breadcrumb */}
        <nav
          className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-slate-600 sm:mb-5"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900"
          >
            <Home className="h-4 w-4 shrink-0" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          <span className="text-slate-500">UK online pharmacies</span>
        </nav>

        <PharmacyHeroProviderLogo
          src="/logo pharmacy/bolt.webp"
          alt="Bolt Pharmacy"
        />

        {/* Hero — file ref + title only; GPhC mark top-right */}
        <div className="relative mb-8">
          <div className="pointer-events-none absolute -right-1 -top-2 z-20 w-[100px] max-w-[28%] sm:right-0 sm:top-0 sm:w-[112px] sm:max-w-none">
            <Image
              src="/logo_stamp_GPhc.webp"
              alt="GPhC registration mark"
              width={112}
              height={112}
              className="h-auto w-full object-contain opacity-95 drop-shadow-sm"
              sizes="(max-width: 640px) 28vw, 112px"
            />
          </div>
          <div className="rounded-sm border border-emerald-900/15 bg-white/85 p-5 pr-[min(7.5rem,26%)] shadow-[0_20px_50px_-24px_rgba(6,78,59,0.18)] ring-1 ring-emerald-900/10 backdrop-blur-[2px] sm:p-7 sm:pr-7">
            <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-emerald-900/70">
              File ref · HW-BOLT-2026
            </p>
            <h1 className="text-balance pr-2 font-sans text-lg font-black uppercase leading-tight tracking-tight text-emerald-950 sm:text-xl md:text-2xl">
              Bolt Pharmacy weight loss treatment review: Mounjaro, Wegovy and prescription
              support in the UK
            </h1>
          </div>
        </div>

        {/* Document details + discount — 2-col grid; hazard = thin frame only */}
        <div className="mb-8 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <HazardBox className="h-full min-h-0 shadow-md shadow-emerald-900/12">
              <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-emerald-900/80">
                Link to Bolt Pharmacy
              </p>
              <p className="mt-1 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-950">
                Document details
              </p>
              <dl className="mt-5 min-h-0 flex-1 space-y-0 text-base text-slate-800">
                {[
                  { k: "Published", v: "2026" },
                  { k: "Provider", v: "Bolt Pharmacy" },
                  { k: "Treatments", v: "Mounjaro · Wegovy · Saxenda" },
                  { k: "Fulfilment", v: "Home delivery" },
                ].map((d, i) => (
                  <div
                    key={d.k}
                    className={`flex flex-col gap-0.5 border-emerald-900/10 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${
                      i > 0 ? "border-t border-dashed" : ""
                    }`}
                  >
                    <dt className="shrink-0 font-bold text-slate-900">{d.k}</dt>
                    <dd className="min-w-0 font-semibold text-slate-700 sm:text-right">{d.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto border-t border-dashed border-emerald-900/18 pt-5">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} gap-2`}
                >
                  Visit Bolt Pharmacy
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </a>
                <p className="mt-3 text-center text-sm font-medium leading-relaxed text-slate-600">
                  Information only — confirm eligibility, pricing and prescribing rules on the
                  provider&apos;s own site.
                </p>
              </div>
            </HazardBox>

            <section
              className="flex h-full min-h-0 min-w-0 flex-col scroll-mt-24"
              aria-labelledby="bolt-discount-heading"
            >
              <HazardBox className="h-full min-h-0 shadow-md shadow-emerald-900/12">
                <div className="flex min-h-0 flex-1 flex-col">
                  <div className="flex items-center justify-center gap-2">
                    <Tag className="h-4 w-4 shrink-0 text-emerald-900/85" aria-hidden />
                    <p
                      id="bolt-discount-heading"
                      className="text-center text-xs font-bold uppercase tracking-[0.22em] text-emerald-900/80"
                    >
                      Discounts &amp; offers
                    </p>
                  </div>
                  <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className={`text-base font-medium leading-relaxed ${body}`}>
                        When a public code is available, you can try it at checkout on the
                        provider&apos;s site. We don&apos;t guarantee eligibility or stackability —
                        always confirm live pricing.
                      </p>
                    </div>
                    <div className="shrink-0 self-center rounded-md border border-emerald-800/20 bg-emerald-50/40 px-4 py-3.5 text-center shadow-sm sm:self-start min-w-30 sm:min-w-32">
                      <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-900/75">
                        Code
                      </p>
                      <p
                        className="mt-1 font-mono text-xl font-extrabold tracking-tight text-emerald-950 tabular-nums"
                        aria-live="polite"
                      >
                        {hasDiscountCode ? discountCode : "—"}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto flex flex-col gap-3 border-t border-dashed border-emerald-900/18 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm font-medium leading-relaxed text-slate-600">
                      {!hasDiscountCode
                        ? "Promotional code will be shown here when available. Always confirm live pricing at checkout."
                        : hasDiscount
                          ? "This code is currently flagged as active on the provider site (verify before payment)."
                          : "Confirm validity on Bolt Pharmacy before you pay."}
                    </p>
                    <button
                      type="button"
                      onClick={handleCopy}
                      disabled={!hasDiscountCode}
                      title={!hasDiscountCode ? "No code to copy yet" : undefined}
                      className="inline-flex items-center justify-center gap-2 self-start rounded-md border-2 border-emerald-800/25 bg-white px-4 py-3 text-sm font-bold uppercase tracking-wide text-emerald-950 shadow-sm transition hover:border-emerald-700/40 hover:bg-emerald-50/80 disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-emerald-800" />
                          Copy code
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </HazardBox>
            </section>
          </div>

          <div className="rounded-md border border-emerald-900/12 bg-white/75 px-4 py-4 shadow-sm ring-1 ring-emerald-900/6 sm:px-5">
            <p className="text-base font-semibold leading-relaxed text-slate-800 md:text-lg">
              Official dossier: online consultation, clinical review, home delivery, and what to
              expect before you choose a provider.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-emerald-900/10 pt-3 text-sm font-semibold text-slate-700 sm:text-base">
              <span className="font-mono">Published 2026</span>
              <span className="text-slate-400" aria-hidden>
                ·
              </span>
              <span>Provider: Bolt Pharmacy</span>
              <span className="text-slate-400" aria-hidden>
                ·
              </span>
              <span>Scope: Mounjaro · Wegovy · Saxenda</span>
            </div>
          </div>

          <PharmacyBrandLogoFooter />
        </div>

        {/* Pricing + hazard: tablet vs injectable */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <HazardBox>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-900">
              Tablet &amp; entry options
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li className="flex justify-between gap-2 border-b border-slate-200/80 pb-1.5">
                <span>Tablets (typ. range)</span>
                <span className="font-mono font-semibold">£10–70</span>
              </li>
              <li className="flex justify-between gap-2 text-slate-600">
                <span className="text-xs">Illustrative—confirm at checkout.</span>
              </li>
            </ul>
          </HazardBox>
          <HazardBox>
            <p className="font-sans text-xs font-bold uppercase tracking-wider text-emerald-900">
              Injectable costs
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-800">
              <li className="flex justify-between gap-2 border-b border-slate-200/80 pb-1.5">
                <span>Entry injections (from)</span>
                <span className="font-mono font-semibold">£120+</span>
              </li>
              <li className="flex justify-between gap-2 border-b border-slate-200/80 pb-1.5">
                <span>Higher dose (typ.)</span>
                <span className="font-mono font-semibold">£300+</span>
              </li>
            </ul>
          </HazardBox>
        </div>

        <div className="space-y-10 text-slate-800">
          <section className="space-y-4">
            <div className="mb-6 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm">
              <p className="text-slate-800 leading-relaxed">
                <strong className="text-indigo-900">Service Profile:</strong> Bolt Pharmacy operates within the UK’s regulated online pharmacy sector, providing access to clinically approved weight loss medications. Because no two weight loss journeys are exactly alike, understanding the specific clinical protocols, shipping methods, and pricing tiers of Bolt Pharmacy is a crucial step in finding the right healthcare partner.
              </p>
            </div>
            <p className={body}>
              For a lot of people, weight loss is not really about “trying harder.” It may be
              about access to the right support.
            </p>
            <p className={body}>
              You can meal prep every Sunday, track calories for weeks, even hit 10,000 steps a
              day — and still find progress stalls. That’s often where prescription treatment
              enters the conversation.
            </p>
            <p className={body}>
              Bolt Pharmacy weight loss treatment has become one of the UK providers offering
              that option through an online model, with access to medications such as Mounjaro,
              Wegovy and other medically supervised treatments.
            </p>
            <p className={body}>
              Through Bolt Pharmacy, eligible patients may complete an online consultation,
              receive a clinical review, and have treatment delivered to their home.
            </p>
            <p className={`${body} font-medium`}>Simple in theory.</p>
            <p className={body}>
              But there are a few reasons people consider it beyond convenience alone.
            </p>
          </section>

          <section>
            <p className={sectionLabel}>What is Bolt Pharmacy weight loss treatment?</p>
            <div className="mt-3 space-y-4 rounded-sm border border-emerald-900/10 bg-white/60 p-5 shadow-sm sm:p-6">
              <p className={body}>
                Bolt Pharmacy offers an online prescribing service for weight management
                medications.
              </p>
              <p className={body}>Instead of booking a traditional appointment, patients generally:</p>
              <Points
                items={[
                  "Complete an online health questionnaire",
                  "Receive prescriber review",
                  "Get approved if clinically suitable",
                  "Have medication shipped directly home",
                ]}
              />
              <p className={body}>
                That process may suit people who prefer privacy or who have struggled with delays
                accessing treatment elsewhere.
              </p>
              <p className={body}>And honestly, that seems to be a big part of the appeal.</p>
            </div>
          </section>

          <section>
            <p className={sectionLabel}>Why choose Bolt Pharmacy?</p>
            <div className="mt-3 space-y-4">
              <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
                <h2 className={h2}>
                  1. Convenient access to prescription weight loss medication
                </h2>
                <p className={`mt-3 ${body}`}>
                  Convenience is not a minor feature here. It’s arguably central. With Bolt
                  Pharmacy, the process happens online, which may help avoid:
                </p>
                <Points
                  items={[
                    "Waiting for GP appointments",
                    "Repeat clinic visits",
                    "Delays accessing prescriptions",
                  ]}
                />
                <p className={`mt-3 ${body}`}>
                  For someone working full-time or juggling family schedules, that may be more than
                  convenience — it may be what makes treatment realistic.
                </p>
              </div>
              <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
                <h2 className={h2}>2. Access to clinically backed weight loss injections</h2>
                <p className={`mt-3 ${body}`}>
                  A major reason people look at Bolt Pharmacy is access to prescription injections,
                  including Mounjaro, Wegovy and Saxenda. These treatments may support weight loss
                  by:
                </p>
                <Points
                  items={[
                    "Helping reduce appetite",
                    "Increasing satiety",
                    "Supporting lower calorie intake",
                  ]}
                />
                <p className={`mt-3 ${body}`}>
                  They do not replace behaviour change. That’s worth saying clearly. But they may
                  help make those changes more sustainable.
                </p>
              </div>
              <div className="rounded-sm border border-slate-200/90 bg-[#fbf9f4] p-5">
                <h2 className={h2}>3. Tablet alternatives are available</h2>
                <p className={`mt-3 ${body}`}>
                  Not everyone wants injections. Some patients prefer oral treatment for cost,
                  comfort, or practicality. Bolt Pharmacy also appears to offer:
                </p>
                <Points items={["Orlistat", "Mysimba"]} />
                <p className={`mt-3 ${body}`}>
                  Those options work differently. Some may reduce fat absorption. Others may
                  influence appetite or cravings.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className={sectionLabel}>How Bolt Pharmacy works</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                {
                  Icon: ClipboardList,
                  title: "Online assessment",
                  text: "Questionnaire: height, weight, BMI, history, current meds — screening for suitability.",
                },
                {
                  Icon: RefreshCw,
                  title: "Medical review",
                  text: "A prescriber reviews your information. Not everyone will qualify — that’s intentional.",
                },
                {
                  Icon: Truck,
                  title: "Prescription and delivery",
                  text: "If approved: medication prepared, safety checks, then dispatch.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center border border-slate-200/90 bg-white/80 px-3 py-4 text-center shadow-sm"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded border border-amber-200/80 bg-[#f5f0e6] text-amber-900">
                    <item.Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-left text-xs leading-relaxed text-slate-700 sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-slate-300/80 bg-white/50 p-5 shadow-sm sm:p-6">
              <p className={sectionLabel}>Bolt Pharmacy delivery</p>
              <p className={`mt-3 text-sm sm:text-base ${body}`}>
                Delivery is often overlooked until something goes wrong. Approved medication is
                generally dispensed professionally, packaged securely, and sent with tracked
                delivery. Timeframes can vary; many orders aim for a few working days. Packaging is
                typically plain and unbranded.
              </p>
            </div>
            <div className="border border-slate-300/80 bg-white/50 p-5 shadow-sm sm:p-6">
              <p className={sectionLabel}>
                How much does Bolt Pharmacy weight loss treatment cost?
              </p>
              <PharmacyPriceCompareHint />
              <p className={`mt-3 text-sm sm:text-base ${body}`}>
                Costs depend on treatment choice. Tablet options may start around{" "}
                <strong>£10–£70</strong>. Injection costs typically fall around{" "}
                <strong>£120 per month</strong> at lower doses and <strong>£300+</strong> at
                higher doses, with totals often including consultation, prescription, medication, and
                delivery.
              </p>
            </div>
          </div>

          <section>
            <p className={sectionLabel}>Delivery and packaging</p>
            <div className="mt-3 space-y-4 rounded-sm border border-emerald-900/10 bg-white/60 p-5 sm:p-6">
              <p className={body}>
                Delivery is often overlooked until something goes wrong. Late shipment. Missed
                doses. Supply gaps. Those things matter.
              </p>
              <div className="space-y-3 border-t border-slate-200/80 pt-4">
                <h3 className={h3}>How delivery works</h3>
                <p className={`text-sm sm:text-base ${body}`}>
                  Approved medication is generally dispensed professionally, packaged securely, and
                  sent through tracked delivery.
                </p>
              </div>
              <div className="space-y-3 border-t border-slate-200/80 pt-4">
                <h3 className={h3}>Delivery timeframes</h3>
                <p className={`text-sm sm:text-base ${body}`}>
                  Although timeframes can vary, orders often appear to be processed quickly, with
                  delivery commonly arriving within a few working days.
                </p>
              </div>
              <div className="space-y-3 border-t border-slate-200/80 pt-4">
                <h3 className={h3}>Discreet packaging</h3>
                <p className={`text-sm sm:text-base ${body}`}>
                  Privacy is built into the process. Bolt states packaging is plain and unbranded,
                  with no obvious indication of contents.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className={sectionLabel}>Safety and supervision</p>
            <div className="mt-3 rounded-sm border border-emerald-900/10 bg-white/60 p-5 sm:p-6">
              <h3 className={h3}>Safe handling of prescription injections</h3>
              <p className={`mt-3 text-sm sm:text-base ${body}`}>
                Injectable medications require proper handling, especially if
                temperature-sensitive.
              </p>
              <Points
                items={[
                  "Professional dispensing — regulated pharmacy controls",
                  "Protective packaging — stability and transit protection",
                  "Efficient shipping — faster shipping can reduce risk from delays",
                ]}
              />
            </div>
          </section>

          <section>
            <p className={sectionLabel}>Price</p>
            <PharmacyPriceCompareHint />
            <p className={`mt-3 ${body}`}>Costs depend on treatment choice.</p>
            <p className={`mt-3 ${body}`}>
              Tablet options may start around <strong>£10–£70</strong>. Injection costs typically
              fall around <strong>£120 per month</strong> at lower doses and <strong>£300+</strong>{" "}
              at higher doses. Costs often increase as treatment progresses.
            </p>
          </section>

          <section>
            <p className={sectionLabel}>Considerations</p>
            <p className={`mt-3 ${body}`}>
              Bolt appears competitive against some UK private providers, but support quality
              matters as much as sticker price. This service may suit people who have struggled
              with diet alone, want clinically supported treatment, prefer online healthcare, need
              faster access, and value privacy. It may be less suitable for people wanting regular
              face-to-face support.
            </p>
          </section>

          <section>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-red-900/90 sm:text-sm">
              Frequently asked questions
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
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
                <div key={item.q} className="border border-slate-200/90 bg-white/80 p-5 shadow-sm">
                  <p className="font-bold text-slate-900">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border border-slate-300/80 bg-white/60 p-5 shadow-sm sm:p-6">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">Conclusion</h2>
            <p className="mt-3 text-slate-800 leading-relaxed">
              If you want a private and practical route into prescription weight loss treatment, Bolt
              Pharmacy weight loss treatment appears to offer a credible option. Access to
              medications such as Mounjaro and Wegovy, combined with online assessment, discreet
              delivery and ongoing support, gives it more substance than a basic online pharmacy
              checkout.
            </p>
            <p className="mt-3 text-slate-800 leading-relaxed">
              Is it right for everyone? Probably not. Some people may prefer traditional GP-led
              care. But for those prioritising convenience, access and medically supervised
              treatment, Bolt Pharmacy may well be worth considering.
            </p>
            <div className="mt-6">
              <a
                href={providerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${PHARMACY_PROVIDER_CTA_CLASSNAME} inline-flex gap-2`}
              >
                Visit Bolt Pharmacy
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
