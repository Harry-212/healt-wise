import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Store,
  ArrowRight,
  Search,
  Activity,
  Stethoscope,
  FileText,
  Sparkles,
} from "lucide-react";
import DecisionCard from "@/components/ui/DecisionCard";
import ProviderCard from "@/components/ui/ProviderCard";
import { PharmacyProvider } from "@/lib/types/provider";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import AboutSection2 from "@/components/ui/about-section-2";

/** Illustrative snapshot for homepage preview — verify live before publishing. */
const LAST_UPDATED_LABEL = "4 April 2026";
const PHARMACIES_TRACKED = 18;

const HOME_PREVIEW_PROVIDERS: PharmacyProvider[] = [
  {
    id: "medexpress",
    name: "MedExpress",
    brandOffered: "Both",
    dose: ["2.5mg", "0.25mg"],
    totalPrice: 149.99,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "Subscription",
    stockStatus: "In Stock",
    maintenanceAllowed: true,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9012345",
    deliverySpeed: "Next day",
    supportFeatures: ["App"],
    lastCheckedDate: new Date().toISOString(),
  },
  {
    id: "boots",
    name: "Boots Online Doctor",
    brandOffered: "Wegovy",
    dose: ["0.25mg", "0.5mg"],
    totalPrice: 199,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "One-off",
    stockStatus: "In Stock",
    maintenanceAllowed: false,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9010112",
    deliverySpeed: "Standard (2–3 days)",
    supportFeatures: ["In-store pickup"],
    lastCheckedDate: new Date().toISOString(),
  },
  {
    id: "simple-online",
    name: "Simple Online Pharmacy",
    brandOffered: "Mounjaro",
    dose: ["2.5mg"],
    totalPrice: 159,
    shippingCost: "Included",
    consultationCost: 9.99,
    subscriptionType: "Subscription",
    stockStatus: "In Stock",
    maintenanceAllowed: true,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9010567",
    deliverySpeed: "Next day",
    supportFeatures: [],
    lastCheckedDate: new Date().toISOString(),
  },
  {
    id: "pharmacy2u",
    name: "Pharmacy2U",
    brandOffered: "Both",
    dose: ["2.5mg", "0.25mg"],
    totalPrice: 169.5,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "Subscription",
    stockStatus: "Low Stock",
    maintenanceAllowed: true,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9010789",
    deliverySpeed: "2–3 working days",
    supportFeatures: ["NHS EPS"],
    lastCheckedDate: new Date().toISOString(),
  },
  {
    id: "cloud-pharmacy",
    name: "Cloud Pharmacy",
    brandOffered: "Wegovy",
    dose: ["0.25mg", "1.0mg"],
    totalPrice: 189,
    shippingCost: 4.99,
    consultationCost: "Included",
    subscriptionType: "Both",
    stockStatus: "In Stock",
    maintenanceAllowed: false,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9010234",
    deliverySpeed: "Next day (order by 3pm)",
    supportFeatures: [],
    lastCheckedDate: new Date().toISOString(),
  },
  {
    id: "numark-online",
    name: "Numark Online",
    brandOffered: "Mounjaro",
    dose: ["2.5mg", "5mg"],
    totalPrice: 174,
    shippingCost: "Included",
    consultationCost: "Included",
    subscriptionType: "Subscription",
    stockStatus: "In Stock",
    maintenanceAllowed: true,
    minBMI: 30,
    gphcStatus: "Verified",
    gphcRegistrationNumber: "9010456",
    deliverySpeed: "Standard (3–5 days)",
    supportFeatures: [],
    lastCheckedDate: new Date().toISOString(),
  },
];

const jumpLinkClass =
  "group relative overflow-hidden rounded-full border border-slate-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-px hover:border-emerald-300/70 hover:text-emerald-900 hover:shadow-md dark:border-slate-600/80 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-violet-500/50 dark:hover:text-white";

export default function Homepage() {
  return (
    <div className="flex flex-col pb-20">
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/Woman_comparing_weight.mp4"
        bgImageSrc="/comparing_weight_loss.jpeg"
        title="Compare Weight-Loss Treatments Prices UK Safely"
        splitTitle={false}
        trustStatement="Independent, updated regularly, GPhC-aware, no pharmacy ownership."
        ctas={[
          { label: "Compare prices", href: "#compare-preview" },
          {
            label: "Check maintenance policies",
            href: "/mounjaro-maintenance-pharmacies",
          },
        ]}
        scrollToExpand="Scroll to explore"
        textBlend={false}
      >
        <div className="flex flex-col gap-6 md:gap-10">
          <AboutSection2 />

          {/* Trust bar — full-bleed, right after About */}
          <section
            id="trust-bar"
            className="w-full scroll-mt-24 border-y border-slate-200 bg-card py-6 dark:border-slate-800"
          >
            <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-8 px-4 text-sm font-medium text-slate-600 md:gap-14 md:px-8 lg:px-10 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>Last updated {LAST_UPDATED_LABEL}</span>
              </div>
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span>{PHARMACIES_TRACKED}+ pharmacies tracked</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <Link
                  href="/pharmacy-safety-gphc-verification"
                  className="text-emerald-700 underline-offset-2 hover:underline dark:text-emerald-400"
                >
                  GPhC verification process
                </Link>
              </div>
              <Link
                href="/methodology"
                className="inline-flex items-center gap-1 text-emerald-700 hover:underline dark:text-emerald-400"
              >
                How we compare (methodology)
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Page-level jump links */}
          <nav
            className="w-full px-4 md:px-8 lg:px-10"
            aria-label="On this page"
          >
            <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white/95 via-slate-50/90 to-purple-50/40 p-5 shadow-sm backdrop-blur-md dark:border-slate-700/60 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-purple-950/20 md:p-6">
              <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-slate-400">
                On this page
              </p>
              <ul className="flex flex-wrap gap-2.5 md:gap-3">
                <li>
                  <a href="#about" className={jumpLinkClass}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#decisions" className={jumpLinkClass}>
                    Next steps
                  </a>
                </li>
                <li>
                  <a href="#trust-bar" className={jumpLinkClass}>
                    Trust signals
                  </a>
                </li>
                <li>
                  <a href="#compare-preview" className={jumpLinkClass}>
                    Live offers
                  </a>
                </li>
                <li>
                  <a href="#why-trust-us" className={jumpLinkClass}>
                    Why trust us
                  </a>
                </li>
                <li>
                  <a href="#safety" className={jumpLinkClass}>
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#alerts" className={jumpLinkClass}>
                    Price alerts
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Three decision cards — parallel to Wegovy top tasks, renamed for comparison */}
          <section
            id="decisions"
            className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
          >
            <h2 className="mb-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
              Where do you want to start?
            </h2>
            <p className="mx-auto mb-12 w-full text-center text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
              Three short paths—like the best treatment sites’ top tasks—mapped
              to a comparison mindset: options first, verification second, true
              costs third.
            </p>
            <div className="grid gap-7 md:grid-cols-3 md:gap-8">
              <DecisionCard
                step="1"
                title="Compare treatment options"
                description="Same clarity as “Is it right for me?”—but for both GLP-1 brands: differences, suitability, and what to ask a prescriber before you pay."
                href="/nhs-vs-private-weight-loss-treatment"
                icon={<Search className="h-6 w-6" />}
              />
              <DecisionCard
                step="2"
                title="Find a verified pharmacy"
                description="Parallel to “How do I get it?”—with GPhC-backed checks and the policy detail we require before listing a UK provider."
                href="/pharmacy-safety-gphc-verification"
                icon={<ShieldCheck className="h-6 w-6" />}
              />
              <DecisionCard
                step="3"
                title="See real total costs"
                description="The “What will I pay?” path for comparators: starting dose, titration, delivery, consultation, and maintenance in one view."
                href="/mounjaro-price-comparison"
                icon={<Activity className="h-6 w-6" />}
              />
            </div>
          </section>

          {/* Comparison preview — cards only, not a long table */}
          <section
            id="compare-preview"
            className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Live comparison preview
                </h2>
                <p className="mt-2 w-full max-w-full text-slate-600 dark:text-slate-400">
                  A sample of providers we track—full sortable comparison on the
                  dedicated page.
                </p>
              </div>
              <Link
                href="/mounjaro-price-comparison"
                className="hidden items-center gap-1 font-medium text-emerald-600 hover:underline sm:inline-flex dark:text-emerald-400"
              >
                View full comparison
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {HOME_PREVIEW_PROVIDERS.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/mounjaro-price-comparison"
                className="inline-flex items-center gap-1 font-medium text-emerald-600 hover:underline dark:text-emerald-400"
              >
                View full comparison
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Why trust us — early methodology / about framing */}
          <section
            id="why-trust-us"
            className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
          >
            <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-purple-50/40 p-8 md:flex md:items-start md:gap-10 md:p-12 dark:border-slate-800 dark:from-slate-900/80 dark:to-purple-950/20">
              <div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-slate-800 md:mb-0">
                <Sparkles className="h-7 w-7 text-purple-600 dark:text-purple-300" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Why trust Health Wise
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700 dark:text-slate-300">
                  We are not a pharmacy and we do not fulfil prescriptions. We
                  publish comparison data—pricing, delivery, consultation,
                  maintenance policies, and GPhC registration checks—so you can
                  decide where to go next. Our methodology explains how often we
                  refresh figures, what we count as &ldquo;included,&rdquo; and
                  how we handle corrections.
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-sm font-medium text-slate-800 dark:text-slate-200 sm:flex-row sm:flex-wrap">
                  <li>
                    <Link
                      href="/methodology"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:underline dark:text-emerald-400"
                    >
                      <FileText className="h-4 w-4" />
                      Read the methodology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:underline dark:text-emerald-400"
                    >
                      About us
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Safety & disclaimer */}
          <section
            id="safety"
            className="w-full scroll-mt-24 px-4 md:px-8 lg:px-10"
          >
            <div className="flex flex-col items-center gap-8 rounded-2xl bg-slate-900 p-8 text-center text-white md:flex-row md:p-12 md:text-left dark:bg-slate-950">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                <Stethoscope className="h-8 w-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-bold">
                  Safety & prescribing
                </h2>
                <p className="text-sm leading-relaxed text-slate-300 md:text-base">
                  GLP-1 medicines are prescription-only (POM). They are not
                  suitable for everyone. A registered clinician must assess you
                  before any supply. Answer questionnaires honestly, read the
                  patient information for your medicine, and speak to your GP or
                  NHS 111 if you are unsure. This site is informational only and
                  does not replace medical advice.
                </p>
              </div>
            </div>
          </section>

          {/* Email / alerts */}
          <section
            id="alerts"
            className="w-full scroll-mt-24 px-4 text-center md:px-8 lg:px-10"
          >
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-8 dark:border-emerald-900/40 dark:bg-emerald-950/30 md:p-12">
              <h2 className="mb-3 text-2xl font-bold text-emerald-950 dark:text-emerald-100">
                Price &amp; policy alerts
              </h2>
              <p className="mb-4 font-medium text-emerald-900/90 dark:text-emerald-200/90">
                Get email updates when it matters:
              </p>
              <ul className="mx-auto mb-8 w-full max-w-full list-inside list-disc text-left text-sm text-emerald-900/85 sm:max-w-xl md:max-w-2xl dark:text-emerald-100/85">
                <li>
                  Price drop alerts when starting or maintenance rates move
                </li>
                <li>
                  Stock alerts when a listed pharmacy changes availability
                </li>
                <li>
                  Maintenance policy alerts when providers change long-term
                  prescribing rules
                </li>
              </ul>
              <form className="mx-auto flex w-full max-w-full flex-col gap-3 sm:max-w-lg sm:flex-row">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  className="flex-1 rounded-xl border border-emerald-200 bg-white px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:outline-none dark:border-emerald-800 dark:bg-slate-900"
                  required
                />
                <button
                  type="submit"
                  className="rounded-xl bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-xs text-emerald-800/70 dark:text-emerald-300/70">
                No pharmacy spam—unsubscribe any time. (Form wiring can connect
                to your ESP later.)
              </p>
            </div>
          </section>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
