import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Wegovy FAQs",
  description:
    "Common questions about Wegovy in the UK: maintenance dosing, pricing, and pharmacy policies.",
  alternates: {
    canonical: `${siteOrigin()}/wegovy-faq`,
  },
};

export default function WegovyFaq() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Wegovy FAQ"
        pagePath="/wegovy-faq"
      />
    <div className="container mx-auto max-w-4xl px-4 pb-24 pt-8 sm:px-5 sm:py-12 md:px-6">
      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 sm:mb-6">
        <HelpCircle className="h-8 w-8 text-emerald-600" />
      </div>
      <h1 className="text-balance text-2xl font-extrabold text-slate-900 sm:text-3xl md:text-4xl">
        Wegovy FAQs
      </h1>

      <div className="mt-8 space-y-4 sm:mt-12 sm:space-y-6">
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Why are maintenance doses more expensive?</h3>
          <p className="text-slate-600">Pharmaceutical pricing typically dictates that the 1.7mg and 2.4mg doses are priced significantly higher than the starter doses. Our price comparison tracks these tier jumps accurately.</p>
        </div>
        <div className="rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Do all pharmacies support Wegovy maintenance?</h3>
          <p className="text-slate-600">No. Check our Maintenance Policies section to find providers who will continue prescribing Wegovy after your BMI has dropped below clinical obesity thresholds. Without checking, you risk losing access to your treatment.</p>
        </div>
        <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Is there a Wegovy tablet or pill?</h3>
          <p className="text-slate-600 leading-relaxed">
            Yes. The MHRA approved a daily oral semaglutide tablet in June 2026. For complete guidance on how to take the tablet, dosing, and eligibility, read our{" "}
            <Link href="/wegovy-tablet-faqs" className="font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950">
              Wegovy tablet FAQ
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
