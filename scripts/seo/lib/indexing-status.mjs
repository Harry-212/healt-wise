/**
 * A page counts as "indexable" only when it actively signals index (not
 * noindex) and is not canonicalised away from itself. Shared between
 * rules/indexing.mjs's INDEXABLE_NOT_IN_SITEMAP check and export.mjs's
 * full-site discovery summary, so a page intentionally excluded via noindex
 * (DEV-05: the 18 non-London city pages) is never treated as "missing from
 * the sitemap" by one code path while the other correctly ignores it.
 */
export function isIndexablePage(record) {
  return (
    record.indexNoindex === "index" &&
    (record.canonicalSelfReferencing === null || record.canonicalSelfReferencing === true)
  );
}
