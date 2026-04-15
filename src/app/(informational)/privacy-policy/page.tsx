import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Health Wise handles personal data for accounts and tools, what we store locally, cookies, and your UK GDPR-aligned rights.",
  alternates: {
    canonical: `${siteOrigin()}/privacy-policy`,
  },
};

const LAST = "12 April 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalScrollyClient
      eyebrow="Health Wise"
      title="Privacy policy"
      lead="We treat health-adjacent data seriously. This page explains what we collect, why we collect it, and the choices you have."
      lastUpdated={LAST}
      sections={[
        {
          kicker: "Overview",
          title: "Who we are and what this covers",
          paragraphs: [
            "This policy describes how Health Wise (“we”, “us”) processes information when you use our website, including optional account features and tools such as the weight tracker.",
            "Our site is operated from the United Kingdom and is intended primarily for UK visitors. If you contact us from elsewhere, we may still process your message to respond.",
          ],
        },
        {
          kicker: "Account sign-in",
          title: "Authentication (Supabase)",
          paragraphs: [
            "When you create an account or sign in, we use Supabase Authentication to validate your email and password (or other providers if we enable them later). Supabase processes this data as a processor on our instructions.",
            "We do not use your account to sell personal data or to build advertising profiles. Session cookies are used so you can stay signed in securely across pages.",
          ],
        },
        {
          kicker: "Weight tracker",
          title: "Data stored on your device",
          paragraphs: [
            "The weight loss tracker may store entries and preferences in your browser (for example, using localStorage) so you can use the tool without re-entering history each visit.",
            "That locally stored data stays on your device unless and until we introduce an optional cloud sync feature, which we would describe separately before it goes live.",
          ],
        },
        {
          kicker: "Analytics & cookies",
          title: "Improving the site",
          paragraphs: [
            "We may use essential cookies required for security and session management. If we add privacy-friendly analytics, we will aim to minimise personal data and document the provider here.",
            "You can control non-essential cookies through your browser settings. Blocking strictly necessary cookies may affect sign-in or security features.",
          ],
        },
        {
          kicker: "Your rights",
          title: "UK GDPR / Data Protection Act 2018",
          paragraphs: [
            "Depending on the situation, you may have rights to access, rectify, erase, restrict, or object to certain processing, and to lodge a complaint with the ICO (Information Commissioner’s Office).",
            "To exercise rights related to your account, contact us using the details on our Contact page. We may need to verify your identity before fulfilling a request.",
          ],
          bullets: [
            "We retain messages and account-related records only as long as needed for the purpose collected.",
            "If we process data on the basis of consent, you can withdraw consent at any time without affecting prior lawful processing.",
          ],
        },
        {
          kicker: "Security",
          title: "How we protect information",
          paragraphs: [
            "We use industry-standard transport encryption (HTTPS) for pages we control and rely on reputable infrastructure providers for authentication and hosting.",
            "No online service can be 100% secure. Please use a unique password for your account and avoid sharing credentials.",
          ],
        },
        {
          kicker: "Updates",
          title: "When this policy changes",
          paragraphs: [
            "We may update this policy to reflect new features or legal requirements. The “Last updated” date at the top of the page will change when we publish a revision.",
          ],
        },
      ]}
    />
  );
}
