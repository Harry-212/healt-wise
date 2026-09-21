import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";
import { siteOrigin } from "@/lib/seo/site-origin";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { withDefaultShareImage } from "@/lib/seo/default-share-image";

const TITLE = "Editorial Team | Healthwise360";
const DESCRIPTION =
  "Who writes and maintains Healthwise360's UK weight-loss treatment content, how we source it, and when a page carries a named clinical reviewer.";

export const metadata: Metadata = withDefaultShareImage({
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteOrigin()}/editorial-team`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
});

const LAST = "10 September 2026";

export default function EditorialTeamPage() {
  return (
    <>
      <BreadcrumbJsonLd
        sectionName="Information"
        sectionPath="/helpful-guides"
        pageName="Editorial Team"
        pagePath="/editorial-team"
      />
      <LegalScrollyClient
        eyebrow="Health Wise"
        title="Editorial team"
        lead="Who writes and maintains what you read on Healthwise360, and how we handle clinical review."
        lastUpdated={LAST}
        sections={[
          {
            kicker: "Who writes this",
            title: "The Healthwise360 Research Team",
            paragraphs: [
              "Content on Healthwise360 is written and maintained by the Healthwise360 Research Team, following the sourcing, accuracy, and correction process set out in our editorial policy before anything publishes.",
              "We are a small independent publisher, not a pharmacy, clinic, or prescriber. We research and cross-check provider pricing, pharmacy registration, and treatment information from public sources — we do not manufacture, dispense, or prescribe any medicine discussed on this site.",
            ],
          },
          {
            kicker: "Clinical review",
            title: "When a page carries a named reviewer",
            paragraphs: [
              "We do not attach a named clinician's sign-off to a page unless a healthcare professional has actually reviewed it. Where that review exists, we state the reviewer's name and the date next to the relevant article.",
              "A page with no such line has been researched and edited by the Research Team against the public sources listed in our editorial policy — it has not been reviewed by a named clinician, and we would rather say so plainly than display a badge that means nothing.",
            ],
          },
          {
            kicker: "Accountability",
            title: "Corrections and contact",
            paragraphs: [
              "If you believe something on this site is outdated, inaccurate, or unclear, we want to hear about it. Corrections are treated as part of editorial maintenance, not as tickets to minimise — see our editorial policy for how we handle them.",
            ],
          },
        ]}
      />
    </>
  );
}
