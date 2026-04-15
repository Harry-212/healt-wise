import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the Health Wise website: acceptable use, disclaimers, intellectual property, liability limits, and governing law.",
  alternates: {
    canonical: `${siteOrigin()}/terms-of-service`,
  },
};

const LAST = "12 April 2026";

export default function TermsOfServicePage() {
  return (
    <LegalScrollyClient
      eyebrow="Health Wise"
      title="Terms of service"
      lead="By using this website you agree to these terms. They are written to be readable—please read them alongside our Privacy Policy."
      lastUpdated={LAST}
      sections={[
        {
          kicker: "Agreement",
          title: "Using the site",
          paragraphs: [
            "These terms apply to your access to and use of Health Wise websites and embedded tools (the “Services”). If you do not agree, please stop using the Services.",
            "We may update these terms from time to time. The “Last updated” date will change when we publish a new version. Continued use after changes constitutes acceptance of the revised terms.",
          ],
        },
        {
          kicker: "Not medical advice",
          title: "Information only",
          paragraphs: [
            "Content on Health Wise is for general information and comparison purposes. It is not medical advice, diagnosis, or treatment.",
            "Always consult a GPhC-registered prescriber or other qualified clinician about medications, side effects, dosing, and whether a treatment is suitable for you.",
          ],
        },
        {
          kicker: "Accounts & tools",
          title: "Acceptable use",
          paragraphs: [
            "You agree not to misuse the Services—including attempting to probe, scan, or test vulnerabilities without permission, scraping at a rate that harms performance, or using the site to harass others.",
            "If we offer accounts or tools, you are responsible for safeguarding your credentials and for activity under your account.",
          ],
          bullets: [
            "Do not submit unlawful, fraudulent, or misleading information through forms or uploads.",
            "We may suspend access where we reasonably believe there is risk to security, users, or the integrity of the Services.",
          ],
        },
        {
          kicker: "Intellectual property",
          title: "Content ownership",
          paragraphs: [
            "Unless otherwise stated, Health Wise and its licensors own the rights in site design, text, graphics, and compilations. You may view and share links to pages for personal, non-commercial use.",
            "You may not copy large portions of the database, automated rankings, or proprietary layouts for competing commercial products without our written consent.",
          ],
        },
        {
          kicker: "Third parties",
          title: "Links and providers",
          paragraphs: [
            "We may link to third-party websites. Those sites have their own terms and privacy practices. A link is not an endorsement of every statement on an external page.",
            "Pharmacies and clinics listed on Health Wise are independent businesses. Any contract for treatment is between you and the provider.",
          ],
        },
        {
          kicker: "Liability",
          title: "Limits and disclaimers",
          paragraphs: [
            "To the fullest extent permitted by applicable law, Health Wise and its contributors disclaim liability for any indirect or consequential loss arising from use of the Services, including reliance on pricing or availability information that later changes.",
            "Nothing in these terms excludes or limits liability that cannot be excluded or limited under UK law (including death or personal injury caused by negligence, where applicable).",
          ],
        },
        {
          kicker: "Law",
          title: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of England and Wales, and the courts of England and Wales have non-exclusive jurisdiction, unless mandatory consumer protections in your country say otherwise.",
          ],
        },
      ]}
    />
  );
}
