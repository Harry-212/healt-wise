import type { Metadata } from "next";
import { Bell } from "lucide-react";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Price drop alerts",
  description: "Price drop alerts for UK GLP-1 providers — not available yet.",
  alternates: {
    canonical: `${siteOrigin()}/price-alerts`,
  },
};

export default function PriceAlerts() {
  return (
    <>
      <BreadcrumbJsonLd pageName="Price alerts" pagePath="/price-alerts" />
    <div className="container mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-16 md:py-20">
      <div className="rounded-3xl border bg-card p-5 text-center shadow-sm sm:p-8 md:p-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
          <Bell className="h-8 w-8 text-emerald-600" />
        </div>
        <h1 className="mb-3 text-balance text-2xl font-extrabold text-slate-900 sm:mb-4 sm:text-3xl">
          Price Drop Alerts
        </h1>
        <p className="mx-auto mb-6 max-w-lg text-sm text-slate-600 sm:mb-8 sm:text-base">
          This feature is not available yet.
        </p>

        <form className="flex flex-col gap-4 max-w-md mx-auto text-left" aria-disabled="true">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input type="email" placeholder="you@example.com" disabled className="w-full min-h-11 cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-4 py-3 text-base text-slate-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Medication Interest</label>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label className="flex min-h-11 flex-1 cursor-not-allowed items-center gap-2 rounded-lg border bg-slate-100 px-4 py-2.5 text-slate-400 touch-manipulation">
                <input type="checkbox" disabled className="accent-slate-400" name="med" value="mounjaro" /> Mounjaro
              </label>
              <label className="flex min-h-11 flex-1 cursor-not-allowed items-center gap-2 rounded-lg border bg-slate-100 px-4 py-2.5 text-slate-400 touch-manipulation">
                <input type="checkbox" disabled className="accent-slate-400" name="med" value="wegovy" /> Wegovy
              </label>
            </div>
          </div>
          <button type="submit" disabled className="mt-4 w-full cursor-not-allowed touch-manipulation rounded-xl bg-slate-300 px-6 py-3.5 font-bold text-slate-500 sm:py-4">
            Not available yet
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
