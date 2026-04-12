import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import TrustSignals from "@/components/trust/TrustSignals";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

const linkClass =
  "block rounded-md py-1 text-sm text-slate-600 transition-colors duration-200 hover:bg-emerald-50/60 hover:text-emerald-700";

const headingClass =
  "mb-3 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800/90";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200/90 bg-linear-to-b from-slate-50/95 via-brand-surface to-slate-100/40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-200/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-[1400px] px-4 pb-12 pt-14 md:px-8 md:pb-14 md:pt-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          <div className="flex flex-col space-y-5 sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex w-fit items-center rounded-lg outline-offset-4 transition-opacity hover:opacity-90"
            >
              <Image
                src={SITE_LOGO_SRC}
                alt="Health Wise Logo"
                width={400}
                height={125}
                className="h-20 w-auto object-contain md:h-24"
              />
            </Link>
            <p className="max-w-sm text-pretty text-sm leading-relaxed text-slate-600">
              Independent UK comparison for GLP-1 treatment prices, maintenance policies, pharmacy
              safety, and support—so you can compare with confidence.
            </p>
          </div>

          <nav aria-label="Treatments">
            <h3 className={headingClass}>Treatments</h3>
            <ul className="space-y-0.5">
              <li>
                <Link href="/mounjaro-price-comparison" className={linkClass}>
                  Mounjaro pricing
                </Link>
              </li>
              <li>
                <Link href="/wegovy-price-comparison" className={linkClass}>
                  Wegovy pricing
                </Link>
              </li>
              <li>
                <Link href="/" className={linkClass}>
                  Compare all
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Trust and safety">
            <h3 className={headingClass}>Trust &amp; safety</h3>
            <ul className="space-y-0.5">
              <li>
                <Link href="/pharmacy-safety-gphc-verification" className={linkClass}>
                  GPhC verification
                </Link>
              </li>
              <li>
                <Link href="/methodology" className={linkClass}>
                  Our methodology
                </Link>
              </li>
              <li>
                <Link href="/helpful-guides" className={linkClass}>
                  Helpful health guides
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Support">
            <h3 className={headingClass}>Support</h3>
            <ul className="space-y-0.5">
              <li>
                <Link href="/mounjaro-faq" className={linkClass}>
                  Mounjaro FAQs
                </Link>
              </li>
              <li>
                <Link href="/wegovy-faq" className={linkClass}>
                  Wegovy FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className={linkClass}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className={headingClass}>Company</h3>
            <ul className="space-y-0.5">
              <li>
                <Link href="/about" className={linkClass}>
                  About us
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className={linkClass}>
                  Editorial policy
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className={linkClass}>
                  Terms of service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 md:mt-14">
          <TrustSignals variant="footer" />
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200/80 pt-10 md:mt-12 md:flex-row md:items-center md:justify-between md:gap-8 md:pt-10">
          <p className="text-center text-sm font-medium text-slate-600 md:text-left">
            © 2026 Health Wise. All rights reserved.
          </p>
          <div className="flex items-start justify-center gap-3 text-pretty text-sm text-slate-500 md:max-w-lg md:justify-end">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
              aria-hidden
            />
            <span>Independent and unbiased. Not affiliated with Novo Nordisk or Eli Lilly.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
