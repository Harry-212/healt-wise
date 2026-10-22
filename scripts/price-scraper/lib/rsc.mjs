/**
 * Helpers for Next.js App Router pages: the server data rides in
 * `self.__next_f.push([1,"…"])` chunks as JSON-escaped strings.
 */

export function decodeFlightPayload(html) {
  const re = /self\.__next_f\.push\(\[1,("(?:[^"\\]|\\.)*")\]\)/g;
  let out = "";
  let m;
  while ((m = re.exec(html))) {
    try {
      out += JSON.parse(m[1]);
    } catch {
      // Ignore a malformed chunk; the rest is still useful.
    }
  }
  return out;
}

/** Index just past the JSON value (object/array) starting at `start`, or -1. */
function endOfJsonValue(s, start) {
  const open = s[start];
  const close = open === "{" ? "}" : open === "[" ? "]" : null;
  if (!close) return -1;
  let depth = 0;
  let inString = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (inString) {
      if (c === "\\") i++;
      else if (c === '"') inString = false;
      continue;
    }
    if (c === '"') inString = true;
    else if (c === "{" || c === "[") depth++;
    else if (c === "}" || c === "]") {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return -1;
}

/** Every JSON object in `s` that starts with the literal `prefix` (e.g. `{"id":"`). */
export function jsonObjectsStartingWith(s, prefix) {
  const found = [];
  let idx = 0;
  while ((idx = s.indexOf(prefix, idx)) >= 0) {
    const end = endOfJsonValue(s, idx);
    if (end < 0) break;
    try {
      found.push(JSON.parse(s.slice(idx, end)));
    } catch {
      // Not valid JSON on its own (e.g. contains flight references); skip.
    }
    idx = idx + 1;
  }
  return found;
}

/** Values of every `"key":<object|array>` occurrence in `s`. */
export function jsonValuesForKey(s, key) {
  const needle = `"${key}":`;
  const found = [];
  let idx = 0;
  while ((idx = s.indexOf(needle, idx)) >= 0) {
    const start = idx + needle.length;
    const end = endOfJsonValue(s, start);
    if (end > 0) {
      try {
        found.push(JSON.parse(s.slice(start, end)));
      } catch {
        // skip
      }
    }
    idx = start;
  }
  return found;
}
