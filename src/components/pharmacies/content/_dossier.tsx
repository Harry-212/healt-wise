"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, ChevronRight, Copy, Home, Tag } from "lucide-react";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

/** Same classes as the primary “Visit {provider}” CTA in Document details (use in conclusion links). */
export const PHARMACY_PROVIDER_CTA_CLASSNAME =
  "inline-flex w-full items-center justify-center rounded-md bg-gradient-to-b from-emerald-700 to-emerald-800 px-5 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-md ring-1 ring-emerald-950/20 transition hover:from-emerald-800 hover:to-emerald-900 hover:shadow-lg sm:w-auto";

const pharmacyCompareLinkClass =
  "font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950";

/** Large footer logo (matches dossier “logo” disclaimer; reuse e.g. Bolt). */
export function PharmacyBrandLogoFooter() {
  return (
    <div className="flex justify-center py-4 sm:py-6">
      <Link href="/" className="inline-flex shrink-0 transition hover:opacity-90">
        <Image
          src={SITE_LOGO_SRC}
          alt={`${SITE_BRAND_NAME} logo`}
          width={800}
          height={250}
          sizes="(max-width: 640px) 85vw, 420px"
          className="h-16 w-auto max-w-[min(100%,22rem)] object-contain object-center sm:h-24 md:h-28 md:max-w-[min(100%,28rem)]"
        />
      </Link>
    </div>
  );
}

/** Callout linking to Health Wise comparison tables (use under “How much does … cost?”). */
export function PharmacyPriceCompareHint({
  className = "mt-3",
}: {
  className?: string;
}) {
  return (
    <div
      className={`rounded-md border border-emerald-800/20 bg-emerald-50/60 px-3 py-3 text-sm text-slate-800 shadow-sm ring-1 ring-emerald-900/10 sm:px-4 ${className}`}
    >
      <p className="font-bold text-emerald-950">Compare UK pharmacy prices</p>
      <p className="mt-2 leading-relaxed text-slate-700">
        See illustrative side-by-side listings on Health Wise:{" "}
        <Link href="/mounjaro-price-comparison" className={pharmacyCompareLinkClass}>
          Mounjaro
        </Link>
        <span className="text-slate-400"> · </span>
        <Link href="/wegovy-price-comparison" className={pharmacyCompareLinkClass}>
          Wegovy
        </Link>
        <span className="text-slate-400"> · </span>
        <Link href="/saxenda-price-comparison" className={pharmacyCompareLinkClass}>
          Saxenda
        </Link>
        <span className="text-slate-400"> · </span>
        <Link href="/prices/cheapest-options-uk" className={pharmacyCompareLinkClass}>
          Cheapest GLP-1 hub
        </Link>
        .
      </p>
    </div>
  );
}

export function HazardBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-md p-[2px] ${className}`}
      style={{
        background: `repeating-linear-gradient(
          -45deg,
          #047857,
          #047857 5px,
          #ffffff 5px,
          #ffffff 10px
        )`,
      }}
    >
      {/* Inner panel: plain surface — hazard strip is only the thin outer frame */}
      <div className="flex min-h-0 h-full flex-col rounded-[calc(0.375rem-2px)] bg-white p-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] sm:p-5">
        {children}
      </div>
    </div>
  );
}

export function ClassifiedStamp({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none select-none font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-800/95 sm:text-xs"
      aria-hidden
    >
      <div className="inline-block -rotate-12 border-4 border-double border-emerald-700/70 bg-white/70 px-3 py-1.5 text-center opacity-95">
        {label}
        <span className="mt-0.5 block text-[0.65rem] font-normal normal-case tracking-normal text-emerald-900/70">
          Confidential
        </span>
      </div>
    </div>
  );
}

export function Points({ items }: { items: string[] }) {
  return (
    <div className="mt-4 grid gap-2 xl:grid-cols-2">
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

function DiscountCodeBox({
  discountCode,
  hasDiscount,
  copied,
  onCopy,
}: {
  discountCode: string;
  hasDiscount: boolean;
  copied: boolean;
  onCopy: () => void;
}) {
  const hasDiscountCode = discountCode.trim().length > 0;

  return (
    <section
      className="scroll-mt-24 flex h-full min-h-0 min-w-0 flex-col"
      aria-labelledby="discount-heading"
    >
      <HazardBox className="h-full min-h-0 shadow-md shadow-emerald-900/12">
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="flex items-center justify-center gap-2">
            <Tag className="h-4 w-4 shrink-0 text-emerald-900/85" aria-hidden />
            <p
              id="discount-heading"
              className="text-center text-xs font-bold uppercase tracking-[0.22em] text-emerald-900/80"
            >
              Discounts &amp; offers
            </p>
          </div>
          <div className="mt-4 flex min-h-0 flex-1 flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-between sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="text-base font-medium leading-relaxed text-slate-800">
                When a public code is available, you can try it at checkout on the
                provider&apos;s site. Always confirm live pricing before payment.
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
                ? "Promotional code will be shown here when available."
                : hasDiscount
                  ? "This code is currently flagged as active (verify at checkout)."
                  : "Confirm validity on the provider site before you pay."}
            </p>
            <button
              type="button"
              onClick={onCopy}
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
  );
}

export function PharmacyDossierPage({
  slugLabel,
  fileRef,
  title,
  subtitle,
  publishedYear = "2026",
  scopeLabel,
  providerName,
  providerUrl,
  docDetails,
  discountCode,
  hasDiscount,
  /** `"logo"` — large project logo only (default). `"text"` — legacy name + tagline card. */
  brandDisclaimerVariant = "logo",
  /** Centered above the title card, outside the hero container (e.g. retailer mark). */
  heroProviderLogoSrc,
  heroProviderLogoAlt = "",
  children,
}: {
  slugLabel: string;
  fileRef: string;
  title: string;
  subtitle: string;
  publishedYear?: string;
  scopeLabel: string;
  providerName: string;
  providerUrl: string;
  docDetails: Array<{ k: string; v: string }>;
  discountCode: string;
  hasDiscount: boolean;
  brandDisclaimerVariant?: "text" | "logo";
  heroProviderLogoSrc?: string;
  heroProviderLogoAlt?: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
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

  return (
    <article className="min-h-screen font-sans pb-16 [background:radial-gradient(ellipse_120%_80%_at_50%_-20%,#f2f0ea_0%,#ece9e2_45%,#e7e3dc_100%)]">
      {/* Aged paper grain — softer on lighter background */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 pt-5 pb-8 sm:px-6 sm:pt-6 sm:pb-10 lg:max-w-4xl xl:max-w-6xl">
        <nav
          className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-slate-600 sm:mb-5"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            Home
          </Link>
          <ChevronRight
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden
          />
          <span className="text-slate-500">UK online pharmacies</span>
          <ChevronRight
            className="h-4 w-4 shrink-0 text-slate-400"
            aria-hidden
          />
          <span className="font-semibold text-slate-900">{slugLabel}</span>
        </nav>

        {heroProviderLogoSrc ? (
          <div className="mb-5 flex justify-center sm:mb-6">
            <Image
              src={heroProviderLogoSrc}
              alt={heroProviderLogoAlt || `${slugLabel} logo`}
              width={480}
              height={180}
              sizes="(max-width: 640px) 280px, 360px"
              className="h-20 w-auto max-w-[min(100%,22rem)] object-contain object-center sm:h-24 md:h-28 md:max-w-[min(100%,28rem)]"
            />
          </div>
        ) : null}

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
              File ref · {fileRef}
            </p>
            <h1 className="text-balance pr-2 font-sans text-lg font-black uppercase leading-tight tracking-tight text-emerald-950 sm:text-xl md:text-2xl">
              {title}
            </h1>
          </div>
        </div>

        {/* Document details + discount: 2-col grid under title; hazard = frame only */}
        <div className="mb-10 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
            <HazardBox className="h-full min-h-0 min-w-0 shadow-md shadow-emerald-900/12">
              <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-emerald-900/80">
                Link to {providerName}
              </p>
              <p className="mt-1 text-center text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-950">
                Document details
              </p>
              <dl className="mt-5 min-h-0 flex-1 space-y-0 text-base text-slate-800">
                {docDetails.map((d, i) => (
                  <div
                    key={d.k}
                    className={`flex flex-col gap-0.5 border-emerald-900/10 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${
                      i > 0 ? "border-t border-dashed" : ""
                    }`}
                  >
                    <dt className="shrink-0 font-bold text-slate-900">{d.k}</dt>
                    <dd className="min-w-0 font-semibold text-slate-700 sm:text-right">
                      {d.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-auto border-t border-dashed border-emerald-900/18 pt-5">
                <a
                  href={providerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={PHARMACY_PROVIDER_CTA_CLASSNAME}
                >
                  Visit {providerName}
                </a>
                <p className="mt-3 text-center text-sm font-medium leading-relaxed text-slate-600">
                  Information only — confirm eligibility, pricing and prescribing rules on the
                  provider&apos;s own site.
                </p>
              </div>
            </HazardBox>

            <DiscountCodeBox
              discountCode={discountCode}
              hasDiscount={hasDiscount}
              copied={copied}
              onCopy={handleCopy}
            />
          </div>

          {/* Subtitle + meta — after doc/discount grid, before brand disclaimer */}
          <div className="rounded-md border border-emerald-900/12 bg-white/75 px-4 py-4 shadow-sm ring-1 ring-emerald-900/6 sm:px-5">
            <p className="text-base font-semibold leading-relaxed text-slate-800 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-emerald-900/10 pt-3 text-sm font-semibold text-slate-700 sm:text-base">
              <span className="font-mono">Published {publishedYear}</span>
              <span className="text-slate-400" aria-hidden>
                ·
              </span>
              <span>Provider: {providerName}</span>
              <span className="text-slate-400" aria-hidden>
                ·
              </span>
              <span>{scopeLabel}</span>
            </div>
          </div>

          {brandDisclaimerVariant === "logo" ? (
            <PharmacyBrandLogoFooter />
          ) : (
            <div className="rounded-md border border-emerald-900/12 bg-white/60 px-4 py-3 text-center text-xs leading-relaxed text-slate-600 shadow-sm ring-1 ring-emerald-900/5">
              <p className="font-semibold text-slate-900">{SITE_BRAND_NAME}</p>
              <p className="mt-0.5">Independent overview. Not medical advice.</p>
            </div>
          )}
        </div>

        <div className="space-y-8">{children}</div>
      </div>
    </article>
  );
}
