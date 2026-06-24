import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  SITE_BUSINESS_ADDRESS,
  SITE_BUSINESS_EMAIL,
  SITE_BUSINESS_PHONE_DISPLAY,
  SITE_BUSINESS_PHONE_TEL,
  siteBusinessAddressLine,
} from "@/lib/site-contact";
import { siteOrigin } from "@/lib/seo/site-origin";
import { ContactForm } from "./ContactForm";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import BusinessLocationMap from "@/components/contact/BusinessLocationMap";

export const metadata: Metadata = {
  title: "Contact",
  description:
    `Contact ${SITE_BRAND_NAME} for general questions, data corrections, or editorial enquiries. ${siteBusinessAddressLine()}. Telephone: ${SITE_BUSINESS_PHONE_DISPLAY}.`,
  alternates: {
    canonical: `${siteOrigin()}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Contact"
        pagePath="/contact"
      />
    <div className="relative isolate flex min-h-[70vh] flex-col overflow-hidden bg-linear-to-br from-[#e6f4ea] via-[#d8efe0] to-[#c5e6d4] px-4 pb-12 pt-0 sm:px-6 sm:pb-16 lg:pb-20">
      <DecorativeCurves />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-0 sm:px-2">
        <nav
          className="mb-4 flex justify-center text-sm font-medium text-emerald-900/70 sm:mb-5 lg:justify-start"
          aria-label="Breadcrumb"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-emerald-950"
              >
                Home
              </Link>
            </li>
            <li aria-hidden className="text-emerald-800/50">
              →
            </li>
            <li className="text-emerald-950">Contact</li>
          </ol>
        </nav>

        <main className="grid flex-1 grid-cols-1 gap-8 pb-4 pt-0 lg:grid-cols-2 lg:gap-14 lg:pb-8 xl:gap-16">
          <div className="flex flex-col justify-start text-center lg:pr-4 lg:text-left">
            <h1 className="text-balance text-4xl font-bold leading-[1.12] tracking-tight text-emerald-950 sm:text-5xl lg:text-6xl">
              Message - {SITE_BRAND_NAME}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-emerald-900/85 sm:text-xl">
              We will typically reply to your message within 2 business days.
              Our business email is{" "}
              <a
                href={`mailto:${SITE_BUSINESS_EMAIL}`}
                className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
              >
                {SITE_BUSINESS_EMAIL}
              </a>
              .
            </p>

            <div className="mt-8 max-w-md rounded-2xl border border-emerald-800/10 bg-white/60 p-6 text-left shadow-sm ring-1 ring-emerald-950/5 backdrop-blur-sm sm:mx-auto lg:mx-0">
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800/70">
                Business details
              </p>
              <p className="mt-3 text-lg font-bold text-emerald-950">{SITE_BRAND_NAME}</p>
              <address className="mt-3 not-italic text-base leading-relaxed text-emerald-900/85">
                <span className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
                  <span>
                    {SITE_BUSINESS_ADDRESS.suite}
                    <br />
                    {SITE_BUSINESS_ADDRESS.street}
                    <br />
                    {SITE_BUSINESS_ADDRESS.city}, {SITE_BUSINESS_ADDRESS.postcode}
                  </span>
                </span>
                <span className="mt-4 flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
                  <span>
                    Telephone:{" "}
                    <a
                      href={`tel:${SITE_BUSINESS_PHONE_TEL}`}
                      className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
                    >
                      {SITE_BUSINESS_PHONE_DISPLAY}
                    </a>
                  </span>
                </span>
                <span className="mt-4 flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-emerald-700" aria-hidden />
                  <span>
                    Email:{" "}
                    <a
                      href={`mailto:${SITE_BUSINESS_EMAIL}`}
                      className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
                    >
                      {SITE_BUSINESS_EMAIL}
                    </a>
                  </span>
                </span>
              </address>
            </div>

            <BusinessLocationMap
              className="mt-6 max-w-md sm:mx-auto lg:mx-0"
              heightClassName="h-56 sm:h-64"
              variant="light"
              linkClassName="text-sm font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
            />
          </div>

          <div className="relative flex flex-col justify-start lg:pl-2">
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
    </>
  );
}

function DecorativeCurves() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <svg
        className="absolute -right-24 top-0 h-[min(90vw,520px)] w-[min(90vw,520px)] text-emerald-600/12"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
      <svg
        className="absolute -left-32 bottom-0 h-[min(70vw,400px)] w-[min(70vw,400px)] text-teal-600/10"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M-20 380 Q120 280 200 200 T420 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M40 400 Q180 300 260 220 T480 80"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
