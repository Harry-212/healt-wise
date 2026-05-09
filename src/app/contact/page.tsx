import type { Metadata } from "next";
import Link from "next/link";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { siteOrigin } from "@/lib/seo/site-origin";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Healthwise360 for general questions, data corrections, or editorial enquiries. Business email: contact@healthwise360.co.uk",
  alternates: {
    canonical: `${siteOrigin()}/contact`,
  },
};

export default function ContactPage() {
  return (
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
                href="mailto:contact@healthwise360.co.uk"
                className="font-semibold text-emerald-800 underline decoration-emerald-400/80 underline-offset-4 hover:text-emerald-950"
              >
                contact@healthwise360.co.uk
              </a>
              .
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-emerald-900/75 sm:mx-auto sm:text-lg lg:mx-0">
              Please do not include sensitive medical information in your
              message; use a secure channel with your clinician for clinical
              matters.
            </p>
          </div>

          <div className="relative flex flex-col justify-start lg:pl-2">
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
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
