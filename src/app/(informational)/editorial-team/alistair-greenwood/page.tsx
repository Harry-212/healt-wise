import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";

const TITLE = "Alistair Greenwood, Founder | Healthwise360";
const DESCRIPTION =
  "Alistair Greenwood founded Healthwise360 to make weight-management information easier to understand, compare and trust. He is not a clinician or pharmacist.";
const PATH = "/editorial-team/alistair-greenwood";
const PHOTO_SRC = "/authors/alistair-greenwood.jpg";

export const metadata: Metadata = withDefaultShareImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}${PATH}`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
});

const LAST = "25 September 2026";

function profilePageJsonLd() {
  const base = siteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${base}${PATH}`,
    dateModified: "2026-09-25",
    mainEntity: {
      "@type": "Person",
      name: "Alistair Greenwood",
      jobTitle: "Founder",
      description:
        "Founder of Healthwise360 and weight-management pricing researcher. Not a healthcare professional.",
      worksFor: {
        "@type": "Organization",
        name: "Healthwise360",
        url: base,
      },
      url: `${base}${PATH}`,
      image: `${base}${PHOTO_SRC}`,
    },
  };
}

export default function AlistairGreenwoodProfilePage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Editorial Team"
        sectionPath="/editorial-team"
        pageName="Alistair Greenwood"
        pagePath={PATH}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd()) }}
      />
      <LegalScrollyClient
        eyebrow="Health Wise"
        title="Alistair Greenwood"
        lead="Founder of Healthwise360 | Weight-management pricing researcher"
        lastUpdated={LAST}
        hideHeroImage
        portrait={{ src: PHOTO_SRC, alt: "Alistair Greenwood" }}
        sections={[
          {
            kicker: "Founder",
            title: "Why Healthwise360 exists",
            paragraphs: [
              "I founded Healthwise360 to make weight-management information easier to understand, compare and trust.",
              "My background is in senior project management. Throughout my career, I have worked with complex information, managed detailed projects and turned findings into clear, practical recommendations. I now bring those skills to researching weight-management providers, comparing published prices and explaining the services included.",
            ],
          },
          {
            kicker: "Experience",
            title: "Where the idea came from",
            paragraphs: [
              "My interest in weight management also comes from personal experience. Facing my own challenges with weight and wellbeing led me to research nutrition, metabolic health and sustainable weight management. I discovered how difficult it could be to separate reliable information from marketing claims and compare providers fairly.",
              "That experience inspired Healthwise360. I wanted to help people look beyond headline prices and understand the details that affect a comparison: pack sizes, consultation charges, delivery fees, introductory offers and ongoing costs.",
            ],
          },
          {
            kicker: "Role",
            title: "What I do, and what I don't",
            paragraphs: [
              "My role is to research, organise and explain published information so readers can make better-informed choices. I am not a clinician or pharmacist, and Healthwise360 does not have an in-house clinical or medical team. Our content is not medically reviewed, and we do not assess individual suitability for treatment or provide medical advice.",
            ],
          },
          {
            kicker: "Standards",
            title: "Sources and transparency",
            paragraphs: [
              "We aim to use reliable published sources, explain how our comparisons work and be transparent about commercial relationships. Prices and services can change, so readers should confirm current details directly with providers and discuss treatment decisions with a qualified healthcare professional.",
            ],
            links: [
              { label: "Our methodology", href: "/methodology" },
              { label: "Editorial policy", href: "/editorial-policy" },
            ],
          },
        ]}
      />
    </>
  );
}
