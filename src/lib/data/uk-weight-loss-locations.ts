import {
  getUkLocationCityImageUrl,
  getUkLocationHeroAlt,
} from "@/lib/data/uk-location-city-image";
import type {
  UkLocationHealthLandscape,
  UkNation,
} from "@/lib/data/uk-location-health-landscape";
import { buildUkLocationInsights } from "@/lib/data/uk-location-local-insights";

export type { UkNation };

export type UkLocationHero = {
  url: string;
  alt: string;
};

export type UkWeightLossLocation = {
  slug: string;
  name: string;
  nation: UkNation;
  /** Neutral place history / geography (unique per slug). */
  placeSnapshot: string;
  /** Regional health statistics framing with official source link metadata. */
  healthLandscape: UkLocationHealthLandscape;
  /** Place snapshot + health body — retained for combined text consumers. */
  localInsight: string;
  /** Synthetic long-tail phrases woven into copy (unique per row). */
  longtails: string[];
  hero: UkLocationHero;
};

/** GOV.UK list of UK cities (2022) — two Bangors disambiguated; excludes Crown Dependencies. */
const UK_CITIES: readonly (readonly [string, string, UkNation])[] = [
  ["hereford", "Hereford", "England"],
  ["london", "London", "England"],
  ["norwich", "Norwich", "England"],
  ["peterborough", "Peterborough", "England"],
  ["plymouth", "Plymouth", "England"],
  ["ripon", "Ripon", "England"],
  ["salford", "Salford", "England"],
  ["southampton", "Southampton", "England"],
  ["bangor-northern-ireland", "Bangor, Northern Ireland", "Northern Ireland"],
  ["perth", "Perth", "Scotland"],
  ["newport", "Newport", "Wales"],
  ["st-davids", "St Davids", "Wales"],
] as const;

/** Large towns (not always city status) — extra long-tail coverage. */
const UK_TOWNS: readonly (readonly [string, string, UkNation])[] = [
  ["reading", "Reading", "England"],
  ["huddersfield", "Huddersfield", "England"],
  ["middlesbrough", "Middlesbrough", "England"],
  ["warrington", "Warrington", "England"],
  ["east-kilbride", "East Kilbride", "Scotland"],
  ["livingston", "Livingston", "Scotland"],
  ["neath-port-talbot", "Neath Port Talbot", "Wales"],
] as const;

function buildLongtails(
  name: string,
  nation: UkNation,
  slug: string,
): string[] {
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const nhs = nation === "Northern Ireland" ? "HSC NI" : "NHS";
  const variants = [
    `best weight loss treatment ${name}`,
    `GLP-1 injections ${name} UK`,
    `Mounjaro ${name} weight loss`,
    `Wegovy ${name} private prescription`,
    `private weight loss treatment ${name}`,
    `online weight loss clinic ${name}`,
    `${nhs} weight management programme ${name}`,
    `obesity specialist ${name} UK`,
    `tirzepatide ${name} comparison`,
    `semaglutide ${name} cost UK`,
    `weight loss injections near ${name}`,
  ];
  const rotate = variants.slice(seed % 3).concat(variants.slice(0, seed % 3));
  return rotate.slice(0, 7);
}

function rowToLocation([slug, name, nation]: readonly [
  string,
  string,
  UkNation,
]): UkWeightLossLocation {
  const { placeSnapshot, healthLandscape, localInsight } = buildUkLocationInsights(
    slug,
    name,
    nation,
  );
  return {
    slug,
    name,
    nation,
    placeSnapshot,
    healthLandscape,
    localInsight,
    longtails: buildLongtails(name, nation, slug),
    hero: {
      url: getUkLocationCityImageUrl(slug),
      alt: getUkLocationHeroAlt(name),
    },
  };
}

const ALL_ROWS = [...UK_CITIES, ...UK_TOWNS] as const;

export const UK_WEIGHT_LOSS_LOCATIONS: UkWeightLossLocation[] =
  ALL_ROWS.map(rowToLocation);

/** Blog grid filtered to UK city articles (20 per page, paginated). */
export const UK_WEIGHT_LOSS_FLAT_INDEX_PATH = "/blog/topic/locations" as const;

export function getUkWeightLossLocationBySlug(
  slug: string,
): UkWeightLossLocation | undefined {
  return UK_WEIGHT_LOSS_LOCATIONS.find((l) => l.slug === slug);
}

export function getAllUkWeightLossLocationSlugs(): string[] {
  return UK_WEIGHT_LOSS_LOCATIONS.map((l) => l.slug);
}
