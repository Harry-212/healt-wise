import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Building2,
  SearchCheck,
  ExternalLink,
  Thermometer,
  FileText,
  BadgeAlert,
} from "lucide-react";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const TITLE = "How to Check an Online Pharmacy Is GPhC Registered (UK)";
const DESCRIPTION =
  "Check if a UK online pharmacy is safe in 3 steps: find the GPhC number, check the register and expect a health questionnaire. Red flags to avoid.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/pharmacy-safety-gphc-verification`,
  },
  openGraph: {
    type: "article",
    url: `${siteOrigin()}/pharmacy-safety-gphc-verification`,
    title: TITLE,
    description: DESCRIPTION,
  },
};

const FAQ_ITEMS = [
  {
    q: "What is the GPhC?",
    a: "The General Pharmaceutical Council (GPhC) is the independent regulatory body for pharmacies, pharmacists and pharmacy technicians in Great Britain. It sets and enforces strict standards for premises, clinical practice, patient safety and the supply of medicines, and it maintains a publicly accessible register of all legally operating pharmacies.",
  },
  {
    q: "Can I trust online pharmacies in the UK?",
    a: "Yes—provided they hold an active, verified registration on the official GPhC register. Always check the pharmacy's GPhC registration number at pharmacyregulation.org/registers/pharmacy before ordering. Legitimate pharmacies will always require a consultation or health assessment by a UK-registered clinician before supplying prescription medications.",
  },
  {
    q: "What happens if a pharmacy fails safety checks?",
    a: "Any online pharmacy that cannot demonstrate full GPhC compliance, active premises registration, or safe clinical prescribing protocols is excluded from our comparison tables entirely. If a listed provider's regulatory status changes, we update or remove them immediately.",
  },
  {
    q: "Why is cold-chain delivery critical for weight loss injections?",
    a: "Injectable medications like Mounjaro (tirzepatide) and Wegovy (semaglutide) are temperature-sensitive peptides that require refrigerated storage (2°C to 8°C) before first use. Verified UK pharmacies use validated insulated packaging and chilled transit to maintain medication potency and safety.",
  },
  {
    q: "Where do I report concerns about an online pharmacy or medication?",
    a: "You can report safety concerns, suspicious websites, or adverse side effects directly to the MHRA Yellow Card scheme (yellowcard.mhra.gov.uk) and notify the General Pharmaceutical Council (pharmacyregulation.org).",
  },
];

export default function PharmacySafetyGphc() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: TITLE,
        description: DESCRIPTION,
        author: { "@type": "Organization", name: "Healthwise360 Clinical & Research Team" },
        publisher: {
          "@type": "Organization",
          name: "Healthwise360",
          logo: { "@type": "ImageObject", url: `${siteOrigin()}/logo-health-wise.webp` },
        },
        datePublished: "2026-04-09",
        dateModified: "2026-10-16",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteOrigin()}/pharmacy-safety-gphc-verification`,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Pharmacy Safety"
        sectionPath="/pharmacy-safety-gphc-verification"
        pageName="GPhC Verification Guide"
        pagePath="/pharmacy-safety-gphc-verification"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-6 sm:py-12 md:px-8">
        {/* Header */}
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 sm:mb-6">
            <ShieldCheck className="h-9 w-9" aria-hidden />
          </div>
          <h1 className="mx-auto max-w-[24ch] text-balance text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">
            How to Check an Online Pharmacy Is Safe: GPhC Verification
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            A transparent guide to verifying UK online pharmacies, spotting dangerous red flags, and ensuring safe prescription GLP-1 weight loss treatments.
          </p>
          <div className="mt-3 text-xs font-semibold text-slate-500">
            Last reviewed October 2026 · Clinical Research Team
          </div>
        </header>

        {/* 3 Step Action Box */}
        <section className="mb-12 overflow-hidden rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/60 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold text-white">
              ✓
            </span>
            <h2 className="text-xl font-extrabold text-emerald-950 sm:text-2xl">
              How to check a pharmacy in 3 steps
            </h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-4 rounded-xl border border-emerald-200/80 bg-white p-4 shadow-xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800 text-sm">
                1
              </span>
              <div>
                <strong className="text-base font-bold text-slate-900">
                  Find the GPhC number on the pharmacy&apos;s website.
                </strong>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  It is usually displayed in the footer or on the &quot;About&quot; page, often accompanied by the official green GPhC internet pharmacy voluntary logo.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-emerald-200/80 bg-white p-4 shadow-xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800 text-sm">
                2
              </span>
              <div>
                <strong className="text-base font-bold text-slate-900">
                  Check it on the official GPhC register.
                </strong>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  Visit the{" "}
                  <a
                    href="https://www.pharmacyregulation.org/registers/pharmacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-800 underline hover:text-emerald-950"
                  >
                    official GPhC pharmacy register
                  </a>
                  . Search the number or name: the registered trading name, owner, and registered premises address must match the website exactly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-emerald-200/80 bg-white p-4 shadow-xs">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-800 text-sm">
                3
              </span>
              <div>
                <strong className="text-base font-bold text-slate-900">
                  Expect a health questionnaire.
                </strong>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  A real online pharmacy for weight loss injections will always ask detailed questions about your weight, height, BMI, medical history, allergies, and concurrent medications.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm font-semibold text-emerald-950 border-t border-emerald-200/70 pt-4">
            Weight loss injections are prescription only medicines in the UK. A registered prescriber must check you are suitable before any medicine is sent.
          </p>
        </section>

        {/* Red Flags Section */}
        <section className="mb-12 rounded-2xl border border-rose-200 bg-rose-50/50 p-6 shadow-sm sm:p-8">
          <div className="flex items-center gap-3 text-rose-900">
            <BadgeAlert className="h-7 w-7 text-rose-600" aria-hidden />
            <h2 className="text-xl font-extrabold sm:text-2xl">Red flags to avoid</h2>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            If an online seller shows any of the following warning signs, do not buy from them:
          </p>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-2.5 rounded-lg border border-rose-200/80 bg-white p-3.5 text-sm text-slate-800">
              <span className="text-rose-600 font-bold">✕</span>
              <span><strong>No GPhC number</strong> or refuses to state its physical UK registered premises.</span>
            </li>
            <li className="flex items-start gap-2.5 rounded-lg border border-rose-200/80 bg-white p-3.5 text-sm text-slate-800">
              <span className="text-rose-600 font-bold">✕</span>
              <span><strong>No questions about your health</strong>, no medical questionnaire, and no identity verification.</span>
            </li>
            <li className="flex items-start gap-2.5 rounded-lg border border-rose-200/80 bg-white p-3.5 text-sm text-slate-800">
              <span className="text-rose-600 font-bold">✕</span>
              <span><strong>Prices far below every other pharmacy</strong>, claiming &quot;cheap Mounjaro pens&quot; or unregulated multi-packs.</span>
            </li>
            <li className="flex items-start gap-2.5 rounded-lg border border-rose-200/80 bg-white p-3.5 text-sm text-slate-800">
              <span className="text-rose-600 font-bold">✕</span>
              <span><strong>Selling &quot;weight loss pens&quot; without a prescription</strong>, through social media, messaging apps, or beauty salons.</span>
            </li>
          </ul>
        </section>

        {/* Full Guide Body Content (Integrated from how-we-verify guide) */}
        <div className="space-y-12">
          {/* Section: Why GPhC Matters */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <Building2 className="h-6 w-6 text-emerald-700" aria-hidden />
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Why GPhC Registration Matters
              </h2>
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              In the UK, all community pharmacies, hospital pharmacies, and distance-selling (online) pharmacies must be registered and regulated by the{" "}
              <a
                href="https://www.pharmacyregulation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-emerald-800 underline hover:text-emerald-950"
              >
                General Pharmaceutical Council (GPhC)
              </a>{" "}
              to operate legally. This regulation exists specifically to protect patients, maintain strict clinical governance, and prevent substandard practice.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              GPhC regulation carries three core protections for patients:
            </p>
            <ul className="mt-3 space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-700 shrink-0" />
                <span><strong>Legal compliance:</strong> Only registered pharmacies can legally procure and dispense genuine prescription-only medicines (POM).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-700 shrink-0" />
                <span><strong>Ongoing inspection:</strong> Pharmacies are routinely inspected against published standards covering governance, staff training, premises hygiene, and cold-chain equipment.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-700 shrink-0" />
                <span><strong>Independent verification:</strong> Patients can freely check the superintendent pharmacist and premises registration on the public GPhC database at any time.</span>
              </li>
            </ul>
          </section>

          {/* Section: Our Verification Process */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <SearchCheck className="h-6 w-6 text-emerald-700" aria-hidden />
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Our Pharmacy Verification Process
              </h2>
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Healthwise360 applies a multi-stage vetting process before any provider is featured in our price comparison tables:
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-bold text-slate-900">1. Register Validation</div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  We cross-reference the provider&apos;s regulatory number directly on the GPhC register to verify active status, matching business entity, and verified UK premises address.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-bold text-slate-900">2. Cold-Chain Review</div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  We evaluate packaging protocols. Weight loss pens like Wegovy and Mounjaro must be shipped in validated thermal packaging maintaining 2°C to 8°C throughout transit.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div className="font-bold text-slate-900">3. Ongoing Monitoring</div>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  We periodically re-audit our tables. Any pharmacy whose registration lapses, fails inspection standards, or uses misleading pricing is removed promptly.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Risks of Unregulated Pharmacies */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600" aria-hidden />
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Risks of Unregulated Online Sellers
              </h2>
            </div>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Due to strong global demand for GLP-1 weight loss injections, the UK Medicines and Healthcare products Regulatory Agency (MHRA) has issued multiple safety warnings regarding illegal and counterfeit products. Purchasing from unregulated sellers exposes you to:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Counterfeit or contaminated pens:</strong> Injections containing incorrect doses, wrong active substances (such as raw insulin), or toxic contaminants that have caused hospitalisations.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Unrefrigerated transit:</strong> Injections left at improper temperatures lose biological potency and become ineffective.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-amber-700">•</span>
                <span><strong>Absence of medical screening:</strong> Injections supplied without screening for contraindications such as medullary thyroid cancer, pancreatitis, or drug interactions.</span>
              </li>
            </ul>
          </section>

          {/* Section: Official Resources & Links */}
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Official Verification Resources
            </h2>
            <p className="mt-2 text-sm text-slate-700">
              Use these official UK regulatory tools to confirm legitimacy or report safety issues:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.pharmacyregulation.org/registers/pharmacy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-slate-400 hover:text-slate-950"
              >
                GPhC Pharmacy Register
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden />
              </a>
              <a
                href="https://yellowcard.mhra.gov.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-slate-400 hover:text-slate-950"
              >
                MHRA Yellow Card Scheme
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" aria-hidden />
              </a>
            </div>

            <p className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold text-slate-800">
              Check any pharmacy in our{" "}
              <Link
                href="/mounjaro-price-comparison"
                className="text-emerald-800 underline hover:text-emerald-950"
              >
                Mounjaro price table
              </Link>{" "}
              or{" "}
              <Link
                href="/wegovy-price-comparison"
                className="text-emerald-800 underline hover:text-emerald-950"
              >
                Wegovy price table
              </Link>
              .
            </p>
          </section>

          {/* FAQ Section */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-slate-100">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q} className="py-4 first:pt-0 last:pb-0">
                  <h3 className="font-bold text-slate-900 text-base">{item.q}</h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
