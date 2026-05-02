import {
  buildHealthLandscapeForUkLocation,
  type UkLocationHealthLandscape,
  type UkNation,
} from "@/lib/data/uk-location-health-landscape";

function slugSeed(slug: string): number {
  return slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
}

/** Neutral place backdrop lines — rotated so nearby cities are not byte-identical. */
function buildPlaceSnapshot(slug: string, name: string, nation: UkNation): string {
  const s = slugSeed(slug);
  const templates: string[] = [
    `${name} sits within ${nation}'s broader settlement geography as a recognisable hub for housing, commuting, and primary care access patterns that rarely respect neat marketing regions.`,
    `As a named UK locality, ${name} shows up in administrative lists and travel corridors more often than in obesity spreadsheets updated street-by-street—yet searches from ${name} still spike when GLP-1 medicines trend nationally.`,
    `${name} combines the ordinary friction of booking GP appointments with the same national headlines about weight-loss injections that reach every county in ${nation}; local difference is usually logistics and gatekeeping, not molecular magic.`,
    `People living in or around ${name} often compare notes online because waiting-room answers vary: two households can hear different thresholds for referral even when national guidance reads the same on paper.`,
    `${name} is part of the UK's mixed urban fabric—where pharmacy regulation is national, courier networks are commercial, and accountability still comes down to named clinicians and registered premises.`,
    `From ${name}, it is easy to assume “everyone” is on a weekly injection because feeds are national; day-to-day triage in ${nation} still spends more time on blood pressure, sleep, and medications than on trending molecules.`,
    `${name} readers bump into the same vocabulary—Mounjaro, Wegovy, Saxenda—while local NHS branding and board-level messaging shift the practical path to structured support.`,
    `Community identity in ${name} does not rewrite pharmacology, but it can change whether you are offered group programmes first, whether shared care is realistic, and how quickly repeat prescriptions move.`,
    `${name} illustrates why “near me” searches deserve scrutiny: the safest clinic might be a regulated courier away, while the closest advert might be the riskiest shortcut.`,
    `Service directories age quickly; ${name} residents benefit from checking registration numbers and superintendent pharmacist names rather than trusting hero imagery alone.`,
    `${name} sits where national campaigns meet local capacity—flu clinics run, referrals backlog, and private offers compete for attention in the same inbox.`,
    `Health storytelling often compresses ${nation} into one voice; lived experience in ${name} is usually quieter—repeat monitoring, side-effect plans, and whether your GP agrees with a private titration schedule.`,
  ];
  const core = templates[s % templates.length];
  const tail =
    s % 4 === 0
      ? ` Historically and geographically, ${name} belongs to the wider administrative picture used for transport, census-style grouping, and regional statistics—not to a single evergreen obesity percentage.`
      : s % 4 === 1
        ? ` That statistical framing matters: credible comparisons reference geography and year; vague percentages rarely survive a second tab.`
        : s % 4 === 2
          ? ` When guidance shifts nationally, ${name} clinics usually adapt through paperwork and pathways before street posters catch up.`
          : ` Independent comparisons should separate licensed supply chains from influencer anecdotes—especially where cold-chain medicines are involved.`;
  return `${core}${tail}`;
}

export function buildUkLocationInsights(
  slug: string,
  name: string,
  nation: UkNation,
): {
  placeSnapshot: string;
  healthLandscape: UkLocationHealthLandscape;
  localInsight: string;
} {
  const healthLandscape = buildHealthLandscapeForUkLocation(slug, name, nation);
  const placeSnapshot = buildPlaceSnapshot(slug, name, nation);
  const localInsight = `${placeSnapshot} ${healthLandscape.body}`;
  return { placeSnapshot, healthLandscape, localInsight };
}
