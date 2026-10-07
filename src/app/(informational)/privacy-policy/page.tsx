import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Healthwise360 collects, uses, shares and protects your personal data, our use of cookies and Google Analytics, and your UK data protection rights.",
  alternates: {
    canonical: `${siteOrigin()}/privacy-policy`,
  },
};

const LAST = "7 October 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Privacy Policy"
        pagePath="/privacy-policy"
      />
    <LegalScrollyClient
      eyebrow="Health Wise"
      title="Privacy policy"
      lead="Healthwise360 is committed to protecting your privacy."
      lastUpdated={LAST}
      sections={[
        {
          kicker: "Collection",
          title: "What information we collect",
          paragraphs: [
            "We may collect: your name, email address and message when you contact us; account and login information where you create an account; technical information such as IP address, browser and device type; and website usage information through cookies and Google Analytics.",
            "Please do not send us medical records or detailed health information unless specifically requested.",
          ],
        },
        {
          kicker: "Use of data",
          title: "How we use your information",
          paragraphs: [
            "We use personal information to: respond to enquiries; manage user accounts; operate and improve our website; maintain website security; understand how visitors use Healthwise360; and send communications where you have agreed to receive them.",
            "We process information where we have your consent, a legitimate business interest, a contractual need or a legal obligation.",
          ],
        },
        {
          kicker: "Cookies",
          title: "Cookies",
          paragraphs: [
            "We use essential cookies for website functionality and security.",
            "With your permission, we may also use analytics cookies, including Google Analytics.",
            "You can manage non-essential cookies through our website cookie settings.",
          ],
        },
        {
          kicker: "Sharing",
          title: "Sharing your information",
          paragraphs: [
            "We may share information with trusted service providers that help us operate the website, including hosting, authentication and analytics providers.",
            "We do not sell your personal information.",
            "Some providers may process information outside the UK. Where required, appropriate UK data protection safeguards are used.",
          ],
        },
        {
          kicker: "Retention",
          title: "How long we keep information",
          paragraphs: [
            "We keep personal information only for as long as necessary for the purpose it was collected or where required by law.",
          ],
        },
        {
          kicker: "Data rights",
          title: "Your rights",
          paragraphs: [
            "Under UK data protection law, you may have the right to access, correct, delete, restrict or object to the use of your personal information and to withdraw consent.",
            "To exercise your rights, contact us at the email below. You can also complain to the Information Commissioner's Office (ICO) at ico.org.uk.",
          ],
          links: [
            { label: "contact@healthwise360.co.uk", href: "mailto:contact@healthwise360.co.uk" },
            { label: "ico.org.uk", href: "https://ico.org.uk" },
          ],
        },
        {
          kicker: "Contact",
          title: "Contact",
          paragraphs: [
            "Healthwise360",
            "195–197 Wood Street, London, E17 3NU, United Kingdom",
            "Email: contact@healthwise360.co.uk",
            "Telephone: +44 7469 549154",
          ],
        },
      ]}
    />
    </>
  );
}
