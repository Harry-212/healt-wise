"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronRight,
  Copy,
  Home,
  Tag,
} from "lucide-react";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

export function HazardBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-[3px] sm:p-1 ${className}`}
      style={{
        background: `repeating-linear-gradient(
          -45deg,
          #b91c1c,
          #b91c1c 7px,
          #ffffff 7px,
          #ffffff 14px
        )`,
      }}
    >
      <div className="h-full bg-[#fbf9f4] p-4 shadow-inner sm:p-5">{children}</div>
    </div>
  );
}

export function ClassifiedStamp({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none select-none font-mono text-[10px] font-bold uppercase tracking-widest text-red-700/90 sm:text-xs"
      aria-hidden
    >
      <div className="inline-block -rotate-12 border-4 border-double border-red-700/80 px-3 py-1.5 text-center opacity-90">
        {label}
        <span className="mt-0.5 block text-[0.65rem] font-normal normal-case tracking-normal text-red-800/80">
          Confidential
        </span>
      </div>
    </div>
  );
}

export function Points({ items }: { items: string[] }) {
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
    <section className="scroll-mt-24" aria-labelledby="discount-heading">
      <HazardBox className="ring-1 ring-red-900/5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p
              id="discount-heading"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-red-900"
            >
              <Tag className="h-4 w-4" aria-hidden />
              Discounts &amp; offers
            </p>
            <p className="mt-2 text-sm text-slate-800 leading-relaxed">
              When a public code is available, you can try it at checkout on the provider&apos;s
              site. Always confirm live pricing before payment.
            </p>
          </div>
          <div className="shrink-0 rounded border border-amber-200/80 bg-amber-50/80 px-3 py-2 text-center min-w-28">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-amber-900/80">
              Code
            </p>
            <p
              className="font-mono text-lg font-bold text-amber-950 tabular-nums"
              aria-live="polite"
            >
              {hasDiscountCode ? discountCode : "—"}
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-2 border-t border-dashed border-red-900/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">
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
            className="inline-flex items-center justify-center gap-2 self-start rounded border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? (
              <>
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy code
              </>
            )}
          </button>
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
  stampLabel = "Verified brief",
  publishedYear = "2026",
  scopeLabel,
  providerName,
  providerUrl,
  docDetails,
  discountCode,
  hasDiscount,
  children,
}: {
  slugLabel: string;
  fileRef: string;
  title: string;
  subtitle: string;
  stampLabel?: string;
  publishedYear?: string;
  scopeLabel: string;
  providerName: string;
  providerUrl: string;
  docDetails: Array<{ k: string; v: string }>;
  discountCode: string;
  hasDiscount: boolean;
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
    <article className="min-h-screen font-sans pb-16 [background:radial-gradient(ellipse_120%_80%_at_50%_-20%,#e5e0d4_0%,#d8d2c4_45%,#cfc7b8_100%)]">
      {/* Aged paper grain */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:max-w-4xl">
        <nav
          className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-slate-600"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-slate-600 transition hover:text-slate-900"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            Home
          </Link>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          <span className="text-slate-500">UK online pharmacies</span>
          <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
          <span className="font-semibold text-slate-900">{slugLabel}</span>
        </nav>

        <div className="relative mb-8">
          <div className="absolute -right-1 -top-2 z-20 sm:right-0 sm:top-0">
            <ClassifiedStamp label={stampLabel} />
          </div>
          <div className="rounded-sm border border-red-900/20 bg-[#f7f3eb]/95 p-5 shadow-md ring-1 ring-red-900/10 sm:p-7">
            <p className="mb-2 font-mono text-[0.7rem] uppercase tracking-[0.35em] text-red-900/70">
              File ref · {fileRef}
            </p>
            <h1 className="text-balance font-sans text-xl font-black uppercase leading-tight tracking-tight text-red-900 sm:text-2xl md:text-3xl">
              {title}
            </h1>
            <p className="mt-4 text-base font-medium text-slate-800 md:text-lg">
              {subtitle}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-red-900/10 pt-4 text-xs text-slate-600 sm:text-sm">
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
        </div>

        {/* Mobile: discount above */}
        <div className="mb-6 lg:hidden">
          <DiscountCodeBox
            discountCode={discountCode}
            hasDiscount={hasDiscount}
            copied={copied}
            onCopy={handleCopy}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="space-y-8">
            {children}

            {/* Mobile: discount below */}
            <div className="lg:hidden">
              <DiscountCodeBox
                discountCode={discountCode}
                hasDiscount={hasDiscount}
                copied={copied}
                onCopy={handleCopy}
              />
            </div>
          </div>

          {/* Desktop: details + discount */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <HazardBox className="ring-1 ring-red-900/5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-900">
                  Document details
                </p>
                <dl className="mt-3 space-y-2 text-sm text-slate-800">
                  {docDetails.map((d) => (
                    <div key={d.k} className="flex items-start justify-between gap-3">
                      <dt className="font-semibold text-slate-900">{d.k}</dt>
                      <dd className="text-right text-slate-700">{d.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 border-t border-dashed border-red-900/15 pt-4">
                  <a
                    href={providerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Visit {providerName}
                  </a>
                  <p className="mt-2 text-xs text-slate-600">
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

              <div className="border border-slate-300/80 bg-white/70 p-4 text-xs text-slate-700 shadow-sm">
                <p className="font-semibold text-slate-900">{SITE_BRAND_NAME}</p>
                <p className="mt-1">Independent overview. Not medical advice.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}

