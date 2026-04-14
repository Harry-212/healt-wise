import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Health Wise for corrections and editorial enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-xl px-4 pb-20 pt-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
      <h1 className="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
        Contact
      </h1>
      <p className="mt-4 text-slate-600">
        Health Wise is an independent comparison resource. For pharmacy or
        prescribing questions, speak to your clinician or chosen pharmacy.
      </p>
      <p className="mt-4 text-slate-600">
        For data corrections or methodology questions, please use the contact
        channel you publish publicly for this site (add your email or form
        here).
      </p>
      <p className="mt-8">
        <Link href="/" className="text-brand-primary font-medium underline">
          Back to home
        </Link>
      </p>
    </div>
  );
}
