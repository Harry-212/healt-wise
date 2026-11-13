/**
 * Shared reference to the existing Alistair Greenwood Person entity (Task 150).
 *
 * The full Person node lives on /editorial-team/alistair-greenwood and is referenced
 * by @id across the site. Pages that name him as author reference that same @id with
 * only his name and profile URL, so no second or conflicting Person node is created.
 * He is the author, not a clinician: never add reviewedBy next to this reference.
 */
export const ALISTAIR_GREENWOOD_NAME = "Alistair Greenwood";
export const ALISTAIR_GREENWOOD_PROFILE_PATH = "/editorial-team/alistair-greenwood";

export function alistairGreenwoodAuthorJsonLd(base: string): Record<string, unknown> {
  return {
    "@type": "Person",
    "@id": `${base}${ALISTAIR_GREENWOOD_PROFILE_PATH}#person`,
    name: ALISTAIR_GREENWOOD_NAME,
    url: `${base}${ALISTAIR_GREENWOOD_PROFILE_PATH}`,
  };
}
