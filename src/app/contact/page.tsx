import type { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Healthwise360 for general questions, data corrections, or editorial enquiries. Business email: contact@healthwise360.co.uk",
  alternates: {
    canonical: `${siteOrigin()}/contact`,
  },
};

export default function ContactPage() {
  return <ContactFormClient />;
}
