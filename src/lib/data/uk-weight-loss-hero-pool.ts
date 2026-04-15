/**
 * Curated hero images (UK / cityscape / health-neutral stock).
 * Pexels only — `images.pexels.com` tends to be more reliable than Unsplash in some regions/CDNs.
 * Attribution shown on each article.
 */
export type HeroSource = "pexels";

export type UkHeroImage = {
  url: string;
  scene: string;
  photographer: string;
  profileUrl: string;
  source: HeroSource;
};

const P = (id: number, photographer: string, profileSlug: string) =>
  ({
    url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
    photographer,
    profileUrl: `https://www.pexels.com/@${profileSlug}/`,
    source: "pexels" as const,
  }) satisfies Pick<UkHeroImage, "url" | "photographer" | "profileUrl" | "source">;

/** Rotating pool when a settlement has no dedicated override. */
export const UK_WEIGHT_LOSS_HERO_POOL: readonly UkHeroImage[] = [
  { ...P(460672, "Pixabay", "pixabay"), scene: "London and Tower Bridge" },
  { ...P(672532, "Pixabay", "pixabay"), scene: "London skyline from the Thames" },
  { ...P(313691, "Pixabay", "pixabay"), scene: "London skyline at dusk" },
  { ...P(258117, "Pixabay", "pixabay"), scene: "London skyline panorama" },
  { ...P(771881, "Diego Madrigal", "diego-madrigal-1146602"), scene: "Urban UK-style towers" },
  { ...P(325185, "Pixabay", "pixabay"), scene: "Busy urban road (UK-style)" },
  { ...P(258154, "Pixabay", "pixabay"), scene: "Classic UK terrace street" },
  { ...P(378570, "Pixabay", "pixabay"), scene: "Town square with clock tower" },
  { ...P(2901209, "Rostyslav Savchyn", "rostyslav-savchyn-688590"), scene: "Rainy city street atmosphere" },
  { ...P(373965, "Pixabay", "pixabay"), scene: "City skyline silhouette" },
  { ...P(2387867, "Victor Miyata", "victor-miyata-1374506"), scene: "City lights at blue hour" },
  { ...P(1396122, "Dominika Roseclay", "dominika-roseclay"), scene: "Aerial city blocks" },
  { ...P(316080, "Pixabay", "pixabay"), scene: "Historic civic architecture" },
  { ...P(374870, "Pixabay", "pixabay"), scene: "Waterfront promenade" },
] as const;

/** Extra stock so fewer cities share the same hero. */
export const UK_WEIGHT_LOSS_HERO_POOL_EXTRA: readonly UkHeroImage[] = [
  { ...P(137587, "Pixabay", "pixabay"), scene: "Urban skyline at golden hour" },
  { ...P(2028885, "Andrea Piacquadio", "olly"), scene: "Green hills near towns" },
  { ...P(534124, "Trace Hudson", "trace-hudson-272513"), scene: "Coastal path and sea" },
  { ...P(2507008, "João Jesus", "joaojesusdesign"), scene: "Modern glass towers" },
  { ...P(356286, "Pixabay", "pixabay"), scene: "Cathedral spire above rooftops" },
  { ...P(227383, "Brett Sayles", "brett-sayles"), scene: "River through a city" },
  { ...P(110469, "James Frid", "james-frid"), scene: "Suburb and treeline" },
  { ...P(443383, "James Frid", "james-frid"), scene: "Park and residential skyline" },
  { ...P(1434608, "Valdemaras D.", "valdemaras-d-784301"), scene: "Industrial heritage skyline" },
  { ...P(1486619, "Irina Iriser", "irina-iriser"), scene: "Pastel row houses" },
  { ...P(1519088, "Brixiv", "brixiv"), scene: "Canal-side buildings" },
  { ...P(2166559, "Peter Spencer", "peter-spencer-783943"), scene: "Hill town above mist" },
  { ...P(366553, "Pixabay", "pixabay"), scene: "High street from pavement level" },
] as const;

/** City slug → index into `UK_WEIGHT_LOSS_HERO_POOL` for a recognisable local hero where possible. */
export const UK_WEIGHT_LOSS_HERO_OVERRIDE_INDEX: Readonly<Record<string, number>> = {
  london: 0,
  edinburgh: 1,
  liverpool: 8,
  manchester: 9,
  bristol: 10,
  birmingham: 11,
  cardiff: 12,
  glasgow: 13,
  leeds: 3,
  sheffield: 4,
  nottingham: 7,
  "newcastle-upon-tyne": 6,
  york: 7,
  oxford: 5,
  cambridge: 2,
  bath: 10,
  belfast: 13,
  aberdeen: 13,
  swansea: 12,
  "brighton-and-hove": 11,
  plymouth: 6,
  southampton: 6,
  portsmouth: 6,
  norwich: 7,
  exeter: 7,
  chester: 10,
  stirling: 13,
  inverness: 1,
  perth: 13,
  dunfermline: 13,
  dundee: 1,
  newport: 12,
  wrexham: 5,
  londonderry: 3,
  armagh: 4,
  newry: 4,
  lisburn: 4,
  "bangor-northern-ireland": 4,
  "bangor-wales": 12,
};

function djb2(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = (h * 33) ^ s.charCodeAt(i);
  }
  return Math.abs(h);
}

function combinedHeroPool(): UkHeroImage[] {
  return [...UK_WEIGHT_LOSS_HERO_POOL, ...UK_WEIGHT_LOSS_HERO_POOL_EXTRA];
}

export function resolveUkWeightLossHero(slug: string): UkHeroImage {
  const idx = UK_WEIGHT_LOSS_HERO_OVERRIDE_INDEX[slug];
  if (idx !== undefined && UK_WEIGHT_LOSS_HERO_POOL[idx]) {
    return UK_WEIGHT_LOSS_HERO_POOL[idx];
  }
  const all = combinedHeroPool();
  const pick = (djb2(slug) * 17 + slug.length * 3) % all.length;
  return all[pick]!;
}
