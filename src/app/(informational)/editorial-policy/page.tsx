import type { Metadata } from "next";
import LegalScrollyClient from "@/components/legal/LegalScrollyClient";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "How Health Wise produces independent UK GLP-1 comparison content: standards, corrections, conflicts, and medical-information boundaries.",
};

const LAST = "12 April 2026";

export default function EditorialPolicyPage() {
  return (
    <LegalScrollyClient
      eyebrow="Health Wise"
      title="Editorial policy"
      lead="How we write, verify, and update content—so you can trust what you read and know where the boundaries are."
      lastUpdated={LAST}
      sections={[
        {
          kicker: "Mission",
          title: "Independent information for UK patients",
          paragraphs: [
            "Health Wise publishes comparison and educational material about weight-loss treatments available in the UK, with an emphasis on regulated pathways, transparent methodology, and plain-language explanations.",
            "We are not a pharmacy, clinic, or prescription service. Nothing on this site replaces personalised medical advice from a qualified prescriber who knows your history.",
          ],
        },
        {
          kicker: "Accuracy",
          title: "How we aim to keep content reliable",
          paragraphs: [
            "We cross-check pricing and policy details against public sources and provider pages, and we describe our verification approach where it helps you validate claims yourself (for example, GPhC registration checks).",
            "Markets and prices change quickly. When we discover a material error, we correct the page and, when practical, note the change at the bottom of the article or in our changelog-style updates.",
          ],
          bullets: [
            "We distinguish clearly between facts, our interpretation, and general educational context.",
            "We avoid sensational headlines that misrepresent risk, efficacy, or eligibility.",
          ],
        },
        {
          kicker: "Independence",
          title: "Commercial relationships and conflicts",
          paragraphs: [
            "Editorial decisions are not sold. We do not accept payment to rank a provider higher, to remove criticism, or to disguise advertising as editorial content.",
            "If we ever introduce clearly labelled sponsorship or affiliate links in the future, they will be disclosed next to the relevant module and will not override our methodology for core comparisons.",
          ],
        },
        {
          kicker: "Tone & safety",
          title: "Responsible health communication",
          paragraphs: [
            "We write for adults making decisions with a prescriber. We avoid guarantees about outcomes, discourage self-directed dosing changes, and signpost urgent symptoms to NHS 111 / 999 where appropriate.",
            "We respect platform and regulatory boundaries around prescription medicines and do not encourage illegal importation or off-label use as a substitute for proper care.",
          ],
        },
        {
          kicker: "Corrections",
          title: "Tell us if we got something wrong",
          paragraphs: [
            "If you believe a figure, name, or policy description is outdated or incorrect, please contact us with a link to the page and, where possible, a primary source. We treat credible corrections as part of editorial maintenance—not as customer support tickets to minimise.",
          ],
        },
      ]}
    />
  );
}
