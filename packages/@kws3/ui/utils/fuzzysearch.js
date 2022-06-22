import fuzzy from "fuzzy.js";

let INITIALIZED = false;

export function initFuzzySearch(opts) {
  if (fuzzy) {
    fuzzy.analyzeSubTerms = defaultValue(opts, "analyzeSubTerms", true);
    fuzzy.analyzeSubTermDepth = defaultValue(opts, "analyzeSubTermDepth", 10);
    fuzzy.highlighting.before = "";
    fuzzy.highlighting.after = "";
    if (opts.highlighting) {
      fuzzy.highlighting.before = defaultValue(
        opts,
        "before",
        `<span class="h">`
      );
      fuzzy.highlighting.after = defaultValue(opts, "after", "</span>");
    }
    INITIALIZED = true;
  }
}

export function fuzzySearch(needle, haystack, opts) {
  if (!INITIALIZED) {
    throw new Error("Fuzzy search not initialized");
  }
  let search_key = defaultValue(opts, "search_key", "value");
  let scoreThreshold = defaultValue(opts, "scoreThreshold", 5);
  let OPTS = haystack.map((item) => {
    let key =
      typeof item === "object" && `${search_key}` in item
        ? item[search_key]
        : item;
    let output = fuzzy(key, needle);

    item = { ...output, original: item };
    item.score =
      !item.score || (item.score && item.score < output.score)
        ? output.score
        : item.score || 0;
    return item;
  });

  let maxScore = Math.max(...OPTS.map((i) => i.score));
  let calculatedLimit = maxScore - scoreThreshold;

  OPTS = OPTS.filter(
    (r) => r.score > (calculatedLimit > 0 ? calculatedLimit : 0)
  );

  return OPTS;
}

function defaultValue(opts, key, value) {
  return opts[key] ? opts[key] : value;
}
