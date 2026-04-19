/**
 * UK location articles use static assets in `public/city/{slug}.webp`
 * (slug matches `uk-weight-loss-locations.ts`).
 */
export function getUkLocationCityImageUrl(slug: string): string {
  return `/city/${slug}.webp`;
}

export function getUkLocationHeroAlt(cityName: string): string {
  return `${cityName}, UK — city photograph`;
}
