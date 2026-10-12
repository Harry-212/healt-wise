import { test } from "node:test";
import assert from "node:assert/strict";
import {
  pageTypeV2For,
  derivePrimaryTopic,
  deriveIndexReason,
  deriveMedicalReviewStatus,
  deriveAffiliateDisclosurePresent,
  deriveHumanDecisionRequired,
  classifyRecord,
  buildSummary,
} from "../classify.mjs";

const TAXONOMY = [
  { pattern: "/", type: "Homepage" },
  { pattern: "/blog/best-weight-loss-treatment-in-*", type: "Location page" },
  { pattern: "/blog/weight-loss-treatment-london", type: "Location page" },
  { pattern: "/blog/topic/*", type: "Topic archive" },
  { pattern: "/tools/*", type: "Calculator or tool" },
  { pattern: "/pharmacies/*", type: "Pharmacy profile" },
  { pattern: "*-price-comparison", type: "Medicine price comparison" },
  { pattern: "/what-is-*", type: "Medicine information" },
  { pattern: "/blog/*", type: "Blog article" },
];

const CLUSTER_BY_TYPE = {
  Homepage: "Homepage",
  "Location page": "Locations",
  "Topic archive": "Blog archives",
  "Calculator or tool": "Tools",
  "Pharmacy profile": "Pharmacy directory",
  "Medicine price comparison": "Price & comparison",
  "Medicine information": "Medicine & treatment education",
  "Blog article": "Blog",
  Other: "REVIEW",
};

const CONFIG = { pageTypeTaxonomyV2: TAXONOMY, contentClusterByPageType: CLUSTER_BY_TYPE };

test("Task 7: page type taxonomy matches the first pattern, falls back to Other", () => {
  assert.equal(pageTypeV2For("/", TAXONOMY), "Homepage");
  assert.equal(pageTypeV2For("/tools/mounjaro-click-calculator", TAXONOMY), "Calculator or tool");
  assert.equal(pageTypeV2For("/pharmacies/slinic", TAXONOMY), "Pharmacy profile");
  assert.equal(pageTypeV2For("/some-unknown-path", TAXONOMY), "Other");
});

test("Task 7: location pages are classified by pattern ahead of the generic blog-article fallback", () => {
  assert.equal(pageTypeV2For("/blog/best-weight-loss-treatment-in-reading", TAXONOMY), "Location page");
  assert.equal(pageTypeV2For("/blog/some-regular-article", TAXONOMY), "Blog article");
});

test("Task 7: primary topic detects medicine keywords from the URL and title", () => {
  assert.equal(
    derivePrimaryTopic({ url: "https://x.test/mounjaro-price-comparison", title: "Mounjaro prices" }, "Medicine price comparison"),
    "Mounjaro",
  );
  assert.equal(
    derivePrimaryTopic({ url: "https://x.test/compare/wegovy-vs-mounjaro", title: "Wegovy vs Mounjaro" }, "Treatment comparison"),
    "Mounjaro & Wegovy",
  );
});

test("Task 7: a medicine-typed page with no medicine keyword is REVIEW, never guessed", () => {
  assert.equal(
    derivePrimaryTopic({ url: "https://x.test/prices/cheapest-options-uk", title: "Cheapest options" }, "Medicine price comparison"),
    "REVIEW",
  );
});

test("Task 7: a pharmacy profile or blog article with no medicine keyword is General, not REVIEW", () => {
  assert.equal(
    derivePrimaryTopic({ url: "https://x.test/pharmacies/slinic", title: "Slinic review" }, "Pharmacy profile"),
    "General",
  );
  assert.equal(
    derivePrimaryTopic({ url: "https://x.test/blog/how-to-eat-well", title: "How to eat well" }, "Blog article"),
    "General",
  );
});

test("Task 7: a page type with no topic concept at all is Not applicable", () => {
  assert.equal(derivePrimaryTopic({ url: "https://x.test/contact", title: "Contact us" }, "Contact page"), "Not applicable");
});

test("Task 7: index reason recognises the non-London noindex policy and the guides archive decision", () => {
  assert.match(
    deriveIndexReason({ url: "https://x.test/blog/best-weight-loss-treatment-in-oxford", indexNoindex: "noindex" }, "Location page"),
    /non-London city page/,
  );
  assert.match(
    deriveIndexReason({ url: "https://x.test/blog/topic/guides", indexNoindex: "noindex" }, "Topic archive"),
    /overlaps ~70% with \/blog/,
  );
});

test("Task 7: an unexplained noindex is flagged REVIEW rather than assumed intentional", () => {
  assert.match(
    deriveIndexReason({ url: "https://x.test/some-page", indexNoindex: "noindex" }, "Blog article"),
    /^REVIEW/,
  );
});

test("Task 7: a page that was never fetched reports Unknown, not a guessed index status", () => {
  assert.match(
    deriveIndexReason({ url: "https://x.test/broken", indexNoindex: null, httpStatus: 500 }, "Blog article"),
    /^Unknown — no HTML fetched \(HTTP 500\)/,
  );
});

test("Task 7: medical review status distinguishes approved, unapproved and absent reviewers", () => {
  assert.equal(deriveMedicalReviewStatus({ reviewerName: null }), "No reviewer declared");
  assert.equal(
    deriveMedicalReviewStatus({ reviewerName: "Dr. Example", reviewerApproved: true }),
    "Reviewed — approved reviewer on record",
  );
  assert.match(
    deriveMedicalReviewStatus({ reviewerName: "Someone", reviewerApproved: false }),
    /^REVIEW/,
  );
});

test("Task 7: affiliate disclosure detection is text-based and never invented when evidence is missing", () => {
  assert.equal(deriveAffiliateDisclosurePresent({ bodyText: "We may earn a commission from some links." }), "Yes");
  assert.equal(deriveAffiliateDisclosurePresent({ bodyText: "Plain content with no such wording." }), "No");
  assert.equal(deriveAffiliateDisclosurePresent({ bodyText: "" }), "Unknown");
});

test("Task 7: human_decision_required aggregates every uncertainty signal, not just one", () => {
  const reasonsA = deriveHumanDecisionRequired({
    pageType: "Other",
    primaryTopic: "Not applicable",
    indexReason: "Default index,follow (no robots directive found)",
    medicalReviewStatus: "No reviewer declared",
    record: { httpStatus: 200, canonicalSelfReferencing: true },
  });
  assert.deepEqual(reasonsA, ["page type did not match any known pattern"]);

  const reasonsB = deriveHumanDecisionRequired({
    pageType: "Blog article",
    primaryTopic: "General",
    indexReason: "REVIEW — noindex with no recorded reason",
    medicalReviewStatus: "REVIEW — reviewer not on the approved list",
    record: { httpStatus: 404, canonicalSelfReferencing: false },
  });
  assert.equal(reasonsB.length, 4);
});

test("Task 7: classifyRecord never invents a field — missing evidence stays blank or Unknown", () => {
  const row = classifyRecord(
    {
      url: "https://x.test/pharmacies/slinic",
      httpStatus: 200,
      indexNoindex: "index",
      title: "Slinic",
      metaDescription: null,
      h1s: [],
      canonicalUrl: "https://x.test/pharmacies/slinic",
      canonicalSelfReferencing: true,
      schemaTypes: [],
      authorVisible: null,
      reviewerVisible: null,
      reviewerName: null,
      reviewerApproved: null,
      priceCheckDates: null,
      sourceLinkCount: 0,
      bodyText: "",
      lastUpdatedVisible: null,
      dateModifiedSchema: null,
      datePublishedSchema: null,
    },
    CONFIG,
  );
  assert.equal(row.page_type, "Pharmacy profile");
  assert.equal(row.primary_topic, "General");
  assert.equal(row.meta_description, "");
  assert.equal(row.price_check_date, "");
  assert.equal(row.affiliate_disclosure_present, "Unknown");
  assert.equal(row.human_decision_required, "No");
});

test("Task 7: buildSummary counts page types/clusters and separately lists Other and flagged URLs", () => {
  const classified = [
    { page_type: "Homepage", content_cluster: "Homepage", human_decision_required: "No", url: "https://x.test/" },
    { page_type: "Other", content_cluster: "REVIEW", human_decision_required: "Yes", human_decision_reasons: "page type did not match any known pattern", url: "https://x.test/weird" },
    { page_type: "Blog article", content_cluster: "Blog", human_decision_required: "No", url: "https://x.test/blog/a" },
  ];
  const summary = buildSummary(classified);
  assert.deepEqual(new Map(summary.byType).get("Homepage"), 1);
  assert.deepEqual(new Map(summary.byCluster).get("REVIEW"), 1);
  assert.equal(summary.unclassified.length, 1);
  assert.equal(summary.unclassified[0].url, "https://x.test/weird");
  assert.equal(summary.needsHumanDecision.length, 1);
});
