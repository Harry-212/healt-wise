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
  ["bath", "Bath", "England"],
  ["birmingham", "Birmingham", "England"],
  ["bradford", "Bradford", "England"],
  ["brighton-and-hove", "Brighton & Hove", "England"],
  ["bristol", "Bristol", "England"],
  ["cambridge", "Cambridge", "England"],
  ["canterbury", "Canterbury", "England"],
  ["carlisle", "Carlisle", "England"],
  ["chelmsford", "Chelmsford", "England"],
  ["chester", "Chester", "England"],
  ["chichester", "Chichester", "England"],
  ["colchester", "Colchester", "England"],
  ["coventry", "Coventry", "England"],
  ["derby", "Derby", "England"],
  ["doncaster", "Doncaster", "England"],
  ["durham", "Durham", "England"],
  ["ely", "Ely", "England"],
  ["exeter", "Exeter", "England"],
  ["gloucester", "Gloucester", "England"],
  ["hereford", "Hereford", "England"],
  ["kingston-upon-hull", "Kingston upon Hull", "England"],
  ["lancaster", "Lancaster", "England"],
  ["leeds", "Leeds", "England"],
  ["leicester", "Leicester", "England"],
  ["lichfield", "Lichfield", "England"],
  ["lincoln", "Lincoln", "England"],
  ["liverpool", "Liverpool", "England"],
  ["london", "London", "England"],
  ["manchester", "Manchester", "England"],
  ["milton-keynes", "Milton Keynes", "England"],
  ["newcastle-upon-tyne", "Newcastle upon Tyne", "England"],
  ["norwich", "Norwich", "England"],
  ["nottingham", "Nottingham", "England"],
  ["oxford", "Oxford", "England"],
  ["peterborough", "Peterborough", "England"],
  ["plymouth", "Plymouth", "England"],
  ["portsmouth", "Portsmouth", "England"],
  ["preston", "Preston", "England"],
  ["ripon", "Ripon", "England"],
  ["salford", "Salford", "England"],
  ["salisbury", "Salisbury", "England"],
  ["sheffield", "Sheffield", "England"],
  ["southampton", "Southampton", "England"],
  ["southend-on-sea", "Southend-on-Sea", "England"],
  ["st-albans", "St Albans", "England"],
  ["stoke-on-trent", "Stoke-on-Trent", "England"],
  ["sunderland", "Sunderland", "England"],
  ["truro", "Truro", "England"],
  ["wakefield", "Wakefield", "England"],
  ["wells", "Wells", "England"],
  ["westminster", "Westminster", "England"],
  ["winchester", "Winchester", "England"],
  ["wolverhampton", "Wolverhampton", "England"],
  ["worcester", "Worcester", "England"],
  ["york", "York", "England"],
  ["armagh", "Armagh", "Northern Ireland"],
  ["bangor-northern-ireland", "Bangor, Northern Ireland", "Northern Ireland"],
  ["belfast", "Belfast", "Northern Ireland"],
  ["lisburn", "Lisburn", "Northern Ireland"],
  ["londonderry", "Londonderry", "Northern Ireland"],
  ["newry", "Newry", "Northern Ireland"],
  ["aberdeen", "Aberdeen", "Scotland"],
  ["dundee", "Dundee", "Scotland"],
  ["dunfermline", "Dunfermline", "Scotland"],
  ["edinburgh", "Edinburgh", "Scotland"],
  ["glasgow", "Glasgow", "Scotland"],
  ["inverness", "Inverness", "Scotland"],
  ["perth", "Perth", "Scotland"],
  ["stirling", "Stirling", "Scotland"],
  ["bangor-wales", "Bangor, Wales", "Wales"],
  ["cardiff", "Cardiff", "Wales"],
  ["newport", "Newport", "Wales"],
  ["st-asaph", "St Asaph", "Wales"],
  ["st-davids", "St Davids", "Wales"],
  ["swansea", "Swansea", "Wales"],
  ["wrexham", "Wrexham", "Wales"],
] as const;

/** Large towns (not always city status) — extra long-tail coverage. */
const UK_TOWNS: readonly (readonly [string, string, UkNation])[] = [
  ["reading", "Reading", "England"],
  ["northampton", "Northampton", "England"],
  ["luton", "Luton", "England"],
  ["bournemouth", "Bournemouth", "England"],
  ["swindon", "Swindon", "England"],
  ["huddersfield", "Huddersfield", "England"],
  ["middlesbrough", "Middlesbrough", "England"],
  ["warrington", "Warrington", "England"],
  ["blackpool", "Blackpool", "England"],
  ["bolton", "Bolton", "England"],
  ["oldham", "Oldham", "England"],
  ["rochdale", "Rochdale", "England"],
  ["stockport", "Stockport", "England"],
  ["wigan", "Wigan", "England"],
  ["woking", "Woking", "England"],
  ["basildon", "Basildon", "England"],
  ["crawley", "Crawley", "England"],
  ["solihull", "Solihull", "England"],
  ["blackburn", "Blackburn", "England"],
  ["paisley", "Paisley", "Scotland"],
  ["east-kilbride", "East Kilbride", "Scotland"],
  ["livingston", "Livingston", "Scotland"],
  ["cumbernauld", "Cumbernauld", "Scotland"],
  ["merthyr-tydfil", "Merthyr Tydfil", "Wales"],
  ["neath-port-talbot", "Neath Port Talbot", "Wales"],
  ["craigavon", "Craigavon", "Northern Ireland"],
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
    `Saxenda ${name} UK`,
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
export const UK_WEIGHT_LOSS_FLAT_INDEX_PATH = "/blog?topic=locations" as const;

export function getUkWeightLossLocationBySlug(
  slug: string,
): UkWeightLossLocation | undefined {
  return UK_WEIGHT_LOSS_LOCATIONS.find((l) => l.slug === slug);
}

export function getAllUkWeightLossLocationSlugs(): string[] {
  return UK_WEIGHT_LOSS_LOCATIONS.map((l) => l.slug);
}
