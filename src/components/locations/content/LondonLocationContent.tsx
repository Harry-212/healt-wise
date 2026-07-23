"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowLeft, Calendar, Clock, Moon, Sun } from "lucide-react";
import BlogArticleHeroImage from "@/components/blog/BlogArticleHeroImage";
import BlogArticleColumn from "@/components/blog/BlogArticleColumn";
import { GuideSection } from "@/components/guide/GuideLayout";
import { GuideSharePanel } from "@/components/guide/GuideSharePanel";
import {
  UK_WEIGHT_LOSS_FLAT_INDEX_PATH,
  type UkWeightLossLocation,
} from "@/lib/data/uk-weight-loss-locations";
import { capitalizeHeadingWords } from "@/lib/text/heading-case";

type Props = {
  loc: UkWeightLossLocation;
  shareUrl: string;
};

const PAGE_TITLE =
  "Weight Loss Treatment in London: Clinics, Pharmacies and Online Services";

export default function LondonLocationContent({ loc, shareUrl }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  const { nation, hero } = loc;

  const toc = useMemo(
    () => [
      { id: "intro", label: "London overview" },
      { id: "quick-comparison", label: "Quick comparison" },
      { id: "healthwise360", label: "1. Healthwise360" },
      { id: "my-london-pharmacy", label: "2. My London Pharmacy" },
      { id: "pharmica", label: "3. Pharmica" },
      { id: "zava", label: "4. ZAVA" },
      { id: "numan", label: "5. Numan" },
      { id: "get-a-drip", label: "6. Get A Drip" },
      { id: "juniper", label: "7. Juniper" },
      { id: "boots", label: "8. Boots Online Doctor" },
      { id: "superdrug", label: "9. Superdrug Online Doctor" },
      { id: "lloyds", label: "10. LloydsPharmacy Online Doctor" },
      { id: "medexpress", label: "11. MedExpress" },
      { id: "pharmacy2u", label: "12. Pharmacy2U" },
      { id: "nhs", label: "NHS support in London" },
      { id: "nhs-digital", label: "NHS Digital programme" },
      { id: "compare-factors", label: "How to compare services" },
      { id: "pharmacy-check", label: "Verify an online pharmacy" },
      { id: "advertising-note", label: "Advertising and editorial note" },
      { id: "questions", label: "Questions to ask" },
      { id: "faq", label: "Frequently Asked Questions" },
      { id: "conclusion", label: "Final considerations" },
      { id: "next-steps", label: "Practical next steps" },
      { id: "disclaimer", label: "Disclaimer" },
      { id: "more-uk", label: "Other places in the UK" },
    ],
    [],
  );

  const p = darkMode ? "text-slate-300" : "text-slate-700";
  const muted = darkMode ? "text-slate-400" : "text-slate-600";
  const strong = darkMode ? "text-white" : "text-slate-900";
  const border = darkMode ? "border-slate-700" : "border-slate-200";
  const boxBg = darkMode ? "bg-slate-900/80" : "bg-slate-50/90";
  const tableBorder = darkMode ? "border-slate-700" : "border-slate-200";
  const linkCls =
    "font-medium text-emerald-600 underline-offset-2 hover:underline";

  return (
    <div
      className={`w-full font-sans transition-colors duration-300 ${
        darkMode ? "bg-slate-950 text-slate-300" : "bg-white text-slate-800"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-12 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog/topic/locations"
            className={`flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-75 ${
              darkMode ? "text-slate-300" : "text-slate-900"
            }`}
          >
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                darkMode ? "bg-slate-800" : "bg-slate-100"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </div>
            Back to News
          </Link>

          <div className="flex items-center gap-3">
            <Moon
              className={`h-4 w-4 ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            />
            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className={`relative flex h-6 w-12 items-center rounded-full p-1 shadow-inner transition-colors ${
                darkMode ? "bg-slate-700" : "bg-slate-200"
              }`}
              aria-label="Toggle dark mode"
            >
              <div
                className={`h-4 w-4 rounded-full shadow transition-all ${
                  darkMode
                    ? "translate-x-6 bg-slate-900"
                    : "translate-x-0 bg-white"
                }`}
              />
            </button>
            <Sun
              className={`h-4 w-4 ${
                darkMode ? "text-yellow-400" : "text-slate-400"
              }`}
            />
          </div>
        </div>

        <nav
          aria-label="Breadcrumb"
          className={`mb-8 flex flex-wrap items-center gap-2 text-xs font-medium ${muted}`}
        >
          <Link href="/" className={linkCls}>
            Home
          </Link>
          <span>/</span>
          <Link href="/blog/topic/locations" className={linkCls}>
            Locations
          </Link>
          <span>/</span>
          <span className={strong}>London</span>
        </nav>

        <header className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-wide text-emerald-600">
            {capitalizeHeadingWords("Locations in UK")}
          </p>
          <h1
            className={`mb-6 text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl lg:text-[54px] ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {PAGE_TITLE}
          </h1>
          <div
            className={`mb-10 flex flex-wrap items-center gap-6 text-sm font-medium ${muted}`}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {nation}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Independent guide · July 2026
            </span>
          </div>

          <BlogArticleHeroImage src={hero.url} alt={hero.alt} />
          <div
            id="guide-article-hero-end"
            aria-hidden
            className="pointer-events-none h-0 w-full overflow-hidden"
          />
        </header>
        <BlogArticleColumn toc={toc} darkMode={darkMode}>
          <article className="space-y-8 leading-relaxed">
            <GuideSection
              darkMode={darkMode}
              id="intro"
              heading="Weight Loss Treatment in London: Clinics, Pharmacies and Online Services"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                London residents have access to a wide range of
                weight-management services, from NHS behavioural programmes and
                specialist clinics to private online pharmacies, digital health
                platforms and in-person consultations.
              </p>
              <p className={p}>
                Having more options does not necessarily make choosing a service
                easier. Prices, consultation methods, ongoing support, delivery
                charges and eligibility requirements can differ considerably
                between providers.
              </p>
              <p className={p}>
                This guide explains the main routes available and profiles
                several services accessible to London residents. It begins with
                Healthwise360 as a comparison resource, followed by London-based
                services and national providers delivering across the capital.
              </p>
              <div
                className={`mt-4 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950 ${
                  darkMode ? "border-amber-700/60 bg-amber-950/40 text-amber-100" : ""
                }`}
              >
                <p>
                  <strong>Important:</strong> Healthwise360 is a comparison
                  website. It is not a pharmacy, clinic, prescriber or medicine
                  supplier. Provider inclusion is not a clinical recommendation,
                  and prescription treatment remains subject to an individual
                  assessment by a qualified healthcare professional.
                </p>
              </div>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="quick-comparison"
              heading="Quick comparison"
            >
              <div className={`overflow-x-auto rounded-xl border ${border}`}>
                <table
                  className={`w-full min-w-[720px] border-collapse text-sm ${p}`}
                >
                  <thead>
                    <tr
                      className={
                        darkMode ? "bg-slate-800/80" : "bg-slate-100"
                      }
                    >
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Service
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Type
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        London connection
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Consultation model
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Useful for
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Healthwise360",
                        "Comparison resource",
                        "Based in London",
                        "No clinical consultations",
                        "Comparing providers, prices and service details",
                      ],
                      [
                        "My London Pharmacy",
                        "Online pharmacy",
                        "Pharmacy premises in Greenford",
                        "Online assessment",
                        "London-based dispensing and delivery",
                      ],
                      [
                        "Pharmica",
                        "Online pharmacy",
                        "Based on Gray's Inn Road",
                        "Online assessment",
                        "Central London-based online access",
                      ],
                      [
                        "ZAVA",
                        "Online doctor",
                        "Business address in Islington",
                        "Online doctor assessment",
                        "Remote consultations and delivery",
                      ],
                      [
                        "Numan",
                        "Digital health programme",
                        "Registered office in Farringdon",
                        "Online clinical programme",
                        "Coaching and ongoing digital support",
                      ],
                      [
                        "Get A Drip",
                        "Clinic and online service",
                        "Multiple London locations",
                        "Online and selected clinic access",
                        "People seeking a hybrid service",
                      ],
                      [
                        "Juniper",
                        "Digital weight-management programme",
                        "UK online service available in London",
                        "Remote clinical programme",
                        "Coaching-led support",
                      ],
                      [
                        "Boots Online Doctor",
                        "National pharmacy service",
                        "Online plus London store presence",
                        "Online assessment",
                        "Delivery or collection options",
                      ],
                      [
                        "Superdrug Online Doctor",
                        "National online service",
                        "London high-street presence",
                        "Online doctor assessment",
                        "Online ordering and selected collection",
                      ],
                      [
                        "LloydsPharmacy Online Doctor",
                        "National online service",
                        "Available throughout London",
                        "Online clinical assessment",
                        "Remote treatment and support",
                      ],
                      [
                        "MedExpress",
                        "National online provider",
                        "Delivers to London",
                        "Remote prescribing",
                        "Online assessment and home delivery",
                      ],
                      [
                        "Pharmacy2U",
                        "National online pharmacy",
                        "Delivers across London",
                        "CQC-registered online doctor",
                        "Online access and delivery",
                      ],
                    ].map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td
                            key={`${row[0]}-${cell}`}
                            className={`border px-3 py-2 ${tableBorder}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                The services are grouped by type rather than ranked by medical
                quality. Healthwise360 appears first because it is the comparison
                resource publishing this guide. You can also start with our{" "}
                <Link
                  href="/compare/best-weight-loss-treatments-uk"
                  className={linkCls}
                >
                  UK weight loss treatment comparison
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="healthwise360"
              heading="1. Healthwise360: compare weight-management providers"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Healthwise360 is a London-based comparison website that helps
                users review private UK weight-management providers before
                beginning a consultation.
              </p>
              <p className={p}>The platform compares information such as:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Provider prices.</li>
                <li>Delivery charges.</li>
                <li>Consultation fees.</li>
                <li>Available dose prices.</li>
                <li>Pharmacy details.</li>
                <li>Ongoing-support arrangements.</li>
                <li>Provider terms.</li>
                <li>Estimated total costs.</li>
              </ul>
              <p className={p}>
                Healthwise360 explains that it compares providers but does not
                prescribe, dispense, store or deliver medicines. Its{" "}
                <Link href="/methodology" className={linkCls}>
                  methodology
                </Link>{" "}
                considers listed treatment prices, consultation costs, delivery
                charges and mandatory additional fees when estimating the
                potential total cost to a patient.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Healthwise360 contact details
              </h3>
              <div
                className={`mt-2 space-y-1 rounded-xl border p-4 text-sm ${border} ${boxBg} ${p}`}
              >
                <p>
                  <strong className={strong}>Business name:</strong>{" "}
                  Healthwise360
                </p>
                <p>
                  <strong className={strong}>Address:</strong> 195 Wood St,
                  London E17 3NU, United Kingdom
                </p>
                <p>
                  <strong className={strong}>Phone:</strong> +44 7469 549154
                </p>
                <p>
                  <strong className={strong}>Service type:</strong> Independent
                  comparison and educational website
                </p>
                <p>
                  <strong className={strong}>Clinical service:</strong> None
                </p>
                <p>
                  <strong className={strong}>Prescribing service:</strong> None
                </p>
                <p>
                  <strong className={strong}>Pharmacy service:</strong> None
                </p>
              </div>
              <p className={`mt-4 ${p}`}>
                Healthwise360 should be used to research and compare services.
                Any clinical consultation, prescription, payment and supply
                agreement takes place directly between the patient and their
                selected provider.
              </p>

              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                What Healthwise360 can help users compare
              </h3>
              <p className={`mt-2 ${p}`}>
                Healthwise360 may be useful for people who want to:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Compare the total cost rather than only the advertised starting
                  price.
                </li>
                <li>Check whether delivery is included.</li>
                <li>Review how providers conduct consultations.</li>
                <li>Identify the dispensing pharmacy.</li>
                <li>Compare ongoing clinical or coaching support.</li>
                <li>Understand whether prices increase at later doses.</li>
                <li>Find questions to ask before starting treatment.</li>
              </ul>
              <p className={p}>
                Users should confirm live prices and eligibility information on
                the provider&apos;s website before paying because pharmacy
                prices, stock and prescribing arrangements can change. Start with
                the{" "}
                <Link href="/mounjaro-price-comparison" className={linkCls}>
                  Mounjaro
                </Link>
                ,{" "}
                <Link href="/wegovy-price-comparison" className={linkCls}>
                  Wegovy
                </Link>{" "}
                and{" "}
                <Link href="/saxenda-price-comparison" className={linkCls}>
                  Saxenda
                </Link>{" "}
                comparison tables.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="my-london-pharmacy"
              heading="2. My London Pharmacy"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link
                  href="/pharmacies/my-london-pharmacy"
                  className={linkCls}
                >
                  My London Pharmacy
                </Link>{" "}
                is an online pharmacy operating from Greenford in Greater London.
              </p>
              <p className={p}>
                Its official website lists pharmacy premises at Unit 33, Taunton
                Road, Greenford, UB6 8UQ, with GPhC registration number 9012851.
                The service provides online consultations, clinician review and
                delivery rather than functioning as a conventional walk-in
                weight-management clinic.
              </p>
              <p className={p}>A typical process involves:</p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Completing an online medical questionnaire.</li>
                <li>Providing requested health and identity information.</li>
                <li>Waiting for clinical review.</li>
                <li>Receiving approval or additional questions.</li>
                <li>Having approved treatment dispensed and delivered.</li>
              </ol>
              <p className={p}>
                The provider states that its clinical team reviews applications
                before an order is approved.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to check
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Whether delivery is included.</li>
                <li>How frequently progress is reviewed.</li>
                <li>Which services are included at each price.</li>
                <li>What happens when a higher dose is prescribed.</li>
                <li>Whether GP information is requested.</li>
                <li>What support is available for side effects.</li>
                <li>
                  Whether the listed Greenford premises matches the GPhC
                  register.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> People who
                prefer a London-based online pharmacy with remote assessment and
                home delivery.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="pharmica" heading="3. Pharmica">
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/pharmica" className={linkCls}>
                  Pharmica
                </Link>{" "}
                is an online pharmacy with company details published at 236
                Gray&apos;s Inn Road, London WC1X 8HB.
              </p>
              <p className={p}>
                The service operates primarily online rather than as a
                conventional walk-in weight-management clinic. Its website
                provides remote access to consultations, prescribing and pharmacy
                fulfilment.
              </p>
              <p className={p}>
                Its central London address gives it a genuine London connection,
                but users should not assume that all consultations take place
                face to face.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Consultation and assessment requirements.</li>
                <li>Current provider and pharmacy registration.</li>
                <li>Delivery options and charges.</li>
                <li>Whether follow-up reviews are included.</li>
                <li>Contact options for clinical questions.</li>
                <li>How the service handles dose changes.</li>
                <li>
                  Whether the displayed price includes all mandatory fees.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> London
                residents who want an online pharmacy whose company and
                dispensing operations are based in central London.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="zava" heading="4. ZAVA">
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/zava" className={linkCls}>
                  ZAVA
                </Link>{" "}
                is an online doctor service with a London address at 46 Essex
                Road, London N1 8LN.
              </p>
              <p className={p}>
                The service provides remote consultations for a range of health
                conditions, including weight management. Patients normally
                communicate with doctors and the patient-care team through a
                secure online account rather than attending a conventional
                clinic.
              </p>
              <p className={p}>ZAVA&apos;s model may include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Online medical assessment.</li>
                <li>Doctor review.</li>
                <li>Secure account messaging.</li>
                <li>Prescription fulfilment where appropriate.</li>
                <li>Home delivery.</li>
                <li>Patient-care support.</li>
              </ul>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Which pharmacy dispenses approved prescriptions.</li>
                <li>Consultation and delivery charges.</li>
                <li>Response times for clinical questions.</li>
                <li>Follow-up arrangements.</li>
                <li>Refund terms if an application is declined.</li>
                <li>
                  Whether ongoing support is included or separately charged.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> London
                residents who prefer a remote doctor service with a London-based
                administrative presence.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="numan" heading="5. Numan">
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/numan" className={linkCls}>
                  Numan
                </Link>{" "}
                is a UK digital healthcare provider with a registered office at
                Farringdon Point, 33 Farringdon Road, London EC1M 3JF.
              </p>
              <p className={p}>
                The company describes itself as CQC regulated and lists a
                GPhC-licensed pharmacy. Its weight-management service combines
                clinical review with digital tools and health coaching rather
                than operating purely as a medicine-only pharmacy.
              </p>
              <p className={p}>The programme may include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Health-history assessment.</li>
                <li>Clinician-backed treatment planning.</li>
                <li>Digital progress tracking.</li>
                <li>Health coaching.</li>
                <li>Repeat reviews.</li>
                <li>Pharmacy fulfilment.</li>
                <li>Home delivery.</li>
              </ul>
              <p className={p}>
                Because Numan offers a broader programme, users should compare
                the total package price with simpler pharmacy-only services.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Whether coaching is included in the advertised price.
                </li>
                <li>Minimum programme duration.</li>
                <li>Cancellation terms.</li>
                <li>Pricing after an introductory period.</li>
                <li>How often clinical reviews take place.</li>
                <li>
                  Whether the patient can contact a clinician directly.
                </li>
                <li>
                  Which tests or monitoring may be recommended.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> People seeking
                a digital programme combining prescribing, tracking and coaching.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="get-a-drip"
              heading="6. Get A Drip"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/get-a-drip" className={linkCls}>
                  Get A Drip
                </Link>{" "}
                operates a combination of digital services, mobile services and
                physical clinic locations.
              </p>
              <p className={p}>
                Its published London locations include Canary Wharf, High Street
                Kensington, Kingston, Redbridge, Shoreditch and Westfield London,
                alongside several mobile or pop-up locations. The company also
                offers an online eligibility assessment and delivery model.
              </p>
              <p className={p}>
                This gives it a stronger physical London presence than many
                online-only providers. However, not every London location
                necessarily offers the same service.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Before booking, confirm
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Whether weight-management consultations are available at the
                  selected location.
                </li>
                <li>Whether the consultation is online or in person.</li>
                <li>Which pharmacy dispenses treatment.</li>
                <li>Whether follow-up is digital or clinic-based.</li>
                <li>
                  Which locations are permanent, mobile or temporary.
                </li>
                <li>What is included in the programme fee.</li>
                <li>
                  Whether blood tests or other services are optional or required.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> London
                residents seeking a hybrid model with online access and potential
                clinic-based support.
              </p>
            </GuideSection>

            <GuideSection darkMode={darkMode} id="juniper" heading="7. Juniper">
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/juniper" className={linkCls}>
                  Juniper
                </Link>{" "}
                provides a digital weight-management programme designed primarily
                for women.
              </p>
              <p className={p}>
                Its service combines remote clinical assessment, treatment where
                appropriate, digital tracking, nutrition support and health
                coaching. Juniper describes its programme as a supported service
                rather than a simple online pharmacy transaction.
              </p>
              <p className={p}>Programme features may include:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Clinical consultations.</li>
                <li>Personalised treatment planning.</li>
                <li>Digital access to a care team.</li>
                <li>Nutrition and exercise guidance.</li>
                <li>Side-effect support.</li>
                <li>Progress tracking.</li>
                <li>Ongoing dose review.</li>
              </ul>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Monthly programme cost.</li>
                <li>Treatment and services included.</li>
                <li>Cancellation or pause conditions.</li>
                <li>Access to prescribers.</li>
                <li>Frequency of reviews.</li>
                <li>
                  Whether blood testing is required or optional.
                </li>
                <li>
                  Which partner pharmacy dispenses prescriptions.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> Women who
                value structured coaching and continued digital support rather
                than a medicine-only service.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="boots"
              heading="8. Boots Online Doctor"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link
                  href="/pharmacies/boots-online-doctor"
                  className={linkCls}
                >
                  Boots Online Doctor
                </Link>{" "}
                provides an online weight-management service with delivery and,
                for some prescriptions, collection through Boots stores.
              </p>
              <p className={p}>
                The service describes its model as combining clinical care,
                ongoing check-ins, lifestyle resources and optional coaching.
                Boots has a substantial high-street presence throughout London,
                although the online doctor service is managed digitally.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Useful features to check
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Home delivery or store collection.</li>
                <li>
                  Whether a particular London store supports collection.
                </li>
                <li>Included lifestyle-support resources.</li>
                <li>Additional cost for individual coaching.</li>
                <li>Repeat-prescription arrangements.</li>
                <li>Availability at the time of consultation.</li>
                <li>Pricing at later treatment stages.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> People who
                prefer a recognised national pharmacy brand and may value store
                collection.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="superdrug"
              heading="9. Superdrug Online Doctor"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link
                  href="/pharmacies/superdrug-online-doctor"
                  className={linkCls}
                >
                  Superdrug Online Doctor
                </Link>{" "}
                provides remote clinical assessments, prescribing where
                appropriate and delivery or selected pharmacy collection.
              </p>
              <p className={p}>
                Superdrug has numerous London stores, but the online service
                should not be confused with an in-store specialist
                weight-management clinic. Its doctors assess suitability remotely
                and monitor treatment through the online service.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Whether collection is available at the user&apos;s preferred
                  London store.
                </li>
                <li>Home-delivery fees.</li>
                <li>Prescriber response times.</li>
                <li>Frequency of ongoing reviews.</li>
                <li>Which pharmacy fulfils delivery orders.</li>
                <li>Support available for side effects.</li>
                <li>Total price after introductory offers end.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> London
                residents who want remote doctor access with the possibility of
                using a familiar high-street pharmacy network.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="lloyds"
              heading="10. LloydsPharmacy Online Doctor"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link
                  href="/pharmacies/lloyds-pharmacy-online-doctor"
                  className={linkCls}
                >
                  LloydsPharmacy Online Doctor
                </Link>{" "}
                provides a national online weight-management service available to
                London residents.
              </p>
              <p className={p}>
                The service offers online clinical assessment, prescription
                options where appropriate and ongoing lifestyle information. Its
                current programme pages describe clinical support and multiple
                treatment formats, although specific availability and pricing can
                change.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>
                  Whether consultation fees are separate from treatment costs.
                </li>
                <li>Delivery charges.</li>
                <li>Current prescribing options.</li>
                <li>Included clinical support.</li>
                <li>Terms for repeat treatment.</li>
                <li>
                  Contact arrangements for urgent side-effect concerns.
                </li>
                <li>
                  Whether any advertised discount applies only to new patients.
                </li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> People looking
                for a national online doctor service with a recognisable pharmacy
                brand.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="medexpress"
              heading="11. MedExpress"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/medexpress" className={linkCls}>
                  MedExpress
                </Link>{" "}
                is a UK online doctor and pharmacy service that delivers to
                London.
              </p>
              <p className={p}>
                The service uses remote prescribing and states that treatment is
                recommended by UK-licensed clinicians when considered
                appropriate. Its weight-management pages identify the medical
                team and describe clinician review and delivery.
              </p>
              <p className={p}>
                MedExpress should be presented as an online provider serving
                London, not as a physical London clinic. Its published company
                information references pharmacy operations outside London.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Total delivery cost.</li>
                <li>Clinical-review process.</li>
                <li>Support when side effects occur.</li>
                <li>
                  Requirements for photographs, identity or medical records.
                </li>
                <li>What happens if a dose is not tolerated.</li>
                <li>Repeat-order timing.</li>
                <li>Refund and cancellation policies.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> London
                residents comfortable completing consultations and follow-up
                remotely.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy2u"
              heading="12. Pharmacy2U"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                <Link href="/pharmacies/pharmacy2u" className={linkCls}>
                  Pharmacy2U
                </Link>{" "}
                operates a CQC-registered Online Doctor service providing
                weight-management consultations and delivery across the UK,
                including London.
              </p>
              <p className={p}>
                Its service includes online assessments, clinician review and
                delivery of approved treatment. It also publishes educational
                material on weight management, healthy eating and post-treatment
                planning.
              </p>
              <h3 className={`mt-6 text-lg font-semibold ${strong}`}>
                Points to compare
              </h3>
              <ul className={`mt-2 list-disc space-y-2 pl-5 ${p}`}>
                <li>Delivery times and charges.</li>
                <li>Consultation costs.</li>
                <li>Ongoing clinical-support arrangements.</li>
                <li>Current provider prices.</li>
                <li>Repeat-prescription process.</li>
                <li>
                  How the provider supports patients stopping treatment.
                </li>
                <li>Pharmacy and prescriber registration.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Best suited to:</strong> People who
                want a large national online pharmacy with delivery throughout
                London.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs"
              heading="NHS weight-management support in London"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Private online treatment is not the only option.
              </p>
              <p className={p}>London residents may be able to access:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>GP support.</li>
                <li>Borough-funded healthy-weight programmes.</li>
                <li>Specialist weight-management services.</li>
                <li>Dietitian support.</li>
                <li>NHS behavioural programmes.</li>
                <li>Bariatric assessment.</li>
                <li>
                  NHS prescription treatment for eligible patients.
                </li>
              </ul>
              <p className={p}>
                Access varies by borough, integrated care board, BMI, medical
                history and local capacity.
              </p>
              <p className={p}>
                The NHS advises people to check their GP practice or local
                integrated care board for available services. Prescription
                weight-management medicines are generally used alongside
                nutrition and physical-activity support and remain subject to
                eligibility and clinical assessment. A{" "}
                <Link href="/tools/bmi-calculator" className={linkCls}>
                  BMI calculator
                </Link>{" "}
                can help you prepare for that conversation.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="nhs-digital"
              heading="NHS Digital Weight Management Programme"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Eligible London residents may qualify for the NHS Digital Weight
                Management Programme.
              </p>
              <p className={p}>
                The service is a free 12-week online behavioural and lifestyle
                programme for adults living with obesity who also have diabetes,
                hypertension or both. It can be accessed using a smartphone,
                tablet or computer.
              </p>
              <p className={p}>
                Eligibility and referral should be confirmed through a GP
                practice or the relevant NHS pathway.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="compare-factors"
              heading="How these services should be compared"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Do not choose solely on the lowest advertised starting price.
              </p>
              <p className={p}>Compare:</p>
              <div className={`overflow-x-auto rounded-xl border ${border}`}>
                <table
                  className={`w-full min-w-[480px] border-collapse text-sm ${p}`}
                >
                  <thead>
                    <tr
                      className={
                        darkMode ? "bg-slate-800/80" : "bg-slate-100"
                      }
                    >
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        Factor
                      </th>
                      <th
                        className={`border px-3 py-2 text-left font-semibold ${tableBorder}`}
                      >
                        What to check
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [
                        "Regulation",
                        "Pharmacy, prescriber and healthcare-service registration",
                      ],
                      [
                        "Consultation",
                        "Questionnaire, video, telephone or in-person assessment",
                      ],
                      [
                        "Total cost",
                        "Treatment, consultation, delivery and mandatory fees",
                      ],
                      [
                        "Ongoing support",
                        "Reviews, clinician access, coaching and side-effect help",
                      ],
                      [
                        "Delivery",
                        "Courier, temperature control and missed-delivery policy",
                      ],
                      [
                        "GP communication",
                        "Whether and when the provider contacts your GP",
                      ],
                      [
                        "Maintenance",
                        "Support after weight loss or when treatment stops",
                      ],
                      [
                        "Cancellation",
                        "Notice periods, refunds and subscription conditions",
                      ],
                      [
                        "Clinical access",
                        "How quickly a patient can reach a clinician",
                      ],
                      [
                        "Transparency",
                        "Clear pharmacy, prescriber and company information",
                      ],
                    ].map(([factor, check]) => (
                      <tr key={factor}>
                        <td className={`border px-3 py-2 ${tableBorder}`}>
                          {factor}
                        </td>
                        <td className={`border px-3 py-2 ${tableBorder}`}>
                          {check}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={`mt-4 ${p}`}>
                Healthwise360&apos;s{" "}
                <Link href="/methodology" className={linkCls}>
                  methodology
                </Link>{" "}
                calculates estimated total cost by combining the listed price
                with assessment, delivery and mandatory additional charges where
                available.
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="pharmacy-check"
              heading="How to verify an online pharmacy"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Before paying a provider:
              </p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Find the dispensing pharmacy&apos;s legal name.</li>
                <li>Find its GPhC registration number.</li>
                <li>Search the number on the official GPhC register.</li>
                <li>
                  Confirm that the registered name and address match.
                </li>
                <li>Check the prescriber&apos;s professional registration.</li>
                <li>Confirm that a clinical assessment is required.</li>
                <li>Read the delivery and temperature-control policy.</li>
                <li>
                  Check how side effects and urgent concerns are handled.
                </li>
                <li>Review cancellation and refund terms.</li>
                <li>
                  Avoid social-media sellers and personal bank-transfer requests.
                </li>
              </ol>
              <p className={p}>
                The GPhC maintains the official register of pharmacy premises and
                advises patients to check the registration of online health
                services before using them. All pharmacies operating in Great
                Britain, including internet pharmacies, must be registered and
                meet GPhC standards. Follow our{" "}
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className={linkCls}
                >
                  pharmacy safety and GPhC verification guide
                </Link>{" "}
                and{" "}
                <Link
                  href="/helpful-guides/fake-online-pharmacy-uk-how-to-spot-stay-safe"
                  className={linkCls}
                >
                  fake online pharmacy checklist
                </Link>
                .
              </p>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="advertising-note"
              heading="Important advertising and editorial note"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                Prescription-only medicines cannot legally be advertised directly
                or indirectly to the UK public.
              </p>
              <p className={p}>For that reason, this page should remain focused on:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Weight-management services.</li>
                <li>Consultation methods.</li>
                <li>Provider verification.</li>
                <li>Costs and fees.</li>
                <li>Clinical-support arrangements.</li>
                <li>NHS and private access.</li>
                <li>Questions patients should ask.</li>
              </ul>
              <p className={p}>Avoid promotional calls to action such as:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>&quot;Buy injections now.&quot;</li>
                <li>&quot;Order treatment today.&quot;</li>
                <li>&quot;Get the cheapest pen.&quot;</li>
                <li>&quot;Guaranteed approval.&quot;</li>
                <li>&quot;Lose weight fast.&quot;</li>
              </ul>
              <p className={p}>
                ASA and CAP guidance states that prescription-only medicines and
                prescription-only medical treatments must not be advertised to
                the public. Regulators have also taken action against advertising
                that implies weight-loss prescription medicines without
                explicitly naming them.
              </p>
              <p className={p}>Use neutral calls to action such as:</p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Compare weight-management providers.</li>
                <li>Review provider costs and support.</li>
                <li>Check pharmacy registration.</li>
                <li>Understand consultation options.</li>
                <li>Speak to a qualified healthcare professional.</li>
              </ul>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="questions"
              heading="Questions to ask before selecting a provider"
            >
              <p className={`text-lg md:text-xl ${p}`}>Ask each provider:</p>
              <ol className={`list-decimal space-y-2 pl-5 ${p}`}>
                <li>Who will assess my consultation?</li>
                <li>How can I verify the prescriber?</li>
                <li>Which pharmacy will dispense my prescription?</li>
                <li>What is the pharmacy&apos;s GPhC number?</li>
                <li>Is delivery included in the displayed price?</li>
                <li>Does the price change later?</li>
                <li>How often will my progress be reviewed?</li>
                <li>Can I contact a clinician directly?</li>
                <li>What support is available for side effects?</li>
                <li>Will you contact my GP?</li>
                <li>What happens if my application is declined?</li>
                <li>
                  What happens if a delivery is late or arrives warm?
                </li>
                <li>Is there a subscription or minimum commitment?</li>
                <li>
                  What support is provided when treatment ends?
                </li>
                <li>How are complaints and refunds handled?</li>
              </ol>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="faq"
              heading="Frequently asked questions"
            >
              <div className="space-y-6">
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Is Healthwise360 a London pharmacy?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Healthwise360 is a London-based provider-comparison and
                    educational website. It does not prescribe, dispense or
                    deliver medicines.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Why is Healthwise360 listed first?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Healthwise360 is listed first because it is the comparison
                    resource publishing the guide. It is shown separately from
                    clinics, pharmacies and prescribing platforms so users are
                    not misled about its role.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Are all the services listed physical London clinics?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Some have London offices or pharmacy premises, some
                    operate physical London locations, and others are national
                    online providers delivering to London.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I attend My London Pharmacy in person?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Its weight-management service is primarily online. Do not
                    assume that the Greenford premises provides walk-in
                    consultations without confirming directly.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Which services offer face-to-face appointments?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Get A Drip lists several London locations, but service
                    availability differs between locations. Boots and Superdrug
                    have high-street stores, although their online doctor
                    assessments are generally completed remotely.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Does inclusion mean Healthwise360 recommends a provider?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Inclusion means the service is relevant to London
                    residents and can be compared. It does not mean that a
                    provider is clinically appropriate for every person.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can a provider guarantee approval?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    No. Prescription treatment requires a clinical assessment. A
                    responsible prescriber may decline an application.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Should I use the provider with the lowest price?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Not necessarily. Compare total cost, registration, clinical
                    assessment, ongoing support, delivery arrangements and
                    later-stage pricing.
                  </p>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${strong}`}>
                    Can I get NHS weight-management support in London?
                  </h3>
                  <p className={`mt-2 ${p}`}>
                    Possibly. Access depends on your borough, GP practice,
                    integrated care board, BMI, medical history and current local
                    service capacity.
                  </p>
                </div>
              </div>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="conclusion"
              heading="Final considerations"
            >
              <p className={`text-lg md:text-xl ${p}`}>
                London residents can choose from NHS support, local pharmacies,
                physical clinics and national digital providers.
              </p>
              <p className={p}>
                The most suitable service is not automatically the nearest clinic
                or the provider advertising the lowest introductory price. A
                reliable decision should consider:
              </p>
              <ul className={`list-disc space-y-2 pl-5 ${p}`}>
                <li>Regulation.</li>
                <li>Clinical assessment.</li>
                <li>Total ongoing cost.</li>
                <li>Access to qualified support.</li>
                <li>Delivery and storage arrangements.</li>
                <li>Follow-up.</li>
                <li>Cancellation terms.</li>
                <li>Long-term maintenance planning.</li>
              </ul>
              <p className={p}>
                Healthwise360 can be used as a starting point to compare
                providers, but the final decision should be made after checking
                current information and completing an individual clinical
                assessment with the selected service.
              </p>
              <div
                className={`mt-6 rounded-xl border p-4 text-sm leading-relaxed ${border} ${boxBg}`}
              >
                <p className={p}>
                  Health Wise compares UK providers independently. Read our{" "}
                  <Link href="/methodology" className={linkCls}>
                    methodology
                  </Link>{" "}
                  and{" "}
                  <Link href="/editorial-policy" className={linkCls}>
                    editorial policy
                  </Link>
                  .
                </p>
              </div>
            </GuideSection>

            <GuideSection
              darkMode={darkMode}
              id="next-steps"
              heading="Practical next steps for London residents"
            >
              <ul className={`list-none space-y-2.5 text-sm ${p}`}>
                <li>
                  <Link
                    href="/compare/best-weight-loss-treatments-uk"
                    className={linkCls}
                  >
                    Compare best weight loss treatments in the UK
                  </Link>
                </li>
                <li>
                  <Link href="/tools/bmi-calculator" className={linkCls}>
                    Check your BMI before a GP or clinic appointment
                  </Link>
                </li>
                <li>
                  <Link href="/mounjaro-price-comparison" className={linkCls}>
                    Mounjaro price comparison
                  </Link>
                  <span className={muted}> · </span>
                  <Link href="/wegovy-price-comparison" className={linkCls}>
                    Wegovy price comparison
                  </Link>
                  <span className={muted}> · </span>
                  <Link href="/saxenda-price-comparison" className={linkCls}>
                    Saxenda price comparison
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pharmacy-safety-gphc-verification"
                    className={linkCls}
                  >
                    Verify pharmacy safety and GPhC registration
                  </Link>
                </li>
              </ul>
            </GuideSection>

            <section
              id="disclaimer"
              className="scroll-mt-28 rounded-xl border border-amber-200 bg-amber-50/90 p-4 text-sm leading-relaxed text-amber-950"
            >
              <h2 className="text-xl font-semibold text-amber-950">
                Disclaimer
              </h2>
              <p className="mt-2">
                This article provides general comparison and educational
                information. It is not medical advice, diagnosis or treatment.
                Healthwise360 does not prescribe or dispense medicines. Always
                confirm provider registration, current prices, eligibility
                requirements and treatment suitability with a qualified
                healthcare professional.
              </p>
            </section>

            <section
              id="more-uk"
              className={`scroll-mt-28 rounded-xl border p-5 text-sm ${border} ${
                darkMode ? "bg-slate-900/60" : "bg-slate-50"
              }`}
            >
              <h2 className={`text-xl font-semibold ${strong}`}>
                Other places in the UK
              </h2>
              <p className={`mt-2 leading-relaxed ${p}`}>
                Browse every UK city guide{" "}
                <Link
                  href={UK_WEIGHT_LOSS_FLAT_INDEX_PATH}
                  className={linkCls}
                >
                  All UK location articles
                </Link>
                , or compare nearby guides for{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-reading"
                  className={linkCls}
                >
                  Reading
                </Link>
                ,{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-oxford"
                  className={linkCls}
                >
                  Oxford
                </Link>{" "}
                and{" "}
                <Link
                  href="/blog/best-weight-loss-treatment-in-luton"
                  className={linkCls}
                >
                  Luton
                </Link>
                .
              </p>
            </section>
          </article>

          <div className="mt-14">
            <GuideSharePanel
              url={shareUrl}
              title={PAGE_TITLE}
              description="Compare NHS support, London-based clinics, online pharmacies and weight-management services available to London residents, including costs and safety checks."
            />
          </div>
        </BlogArticleColumn>
      </div>
    </div>
  );
}
