import fuzzy from "./fuzzy.js";

export function fuzzysearch(needle, haystack, opts) {
  let search_key = defaultValue(opts, "search_key", "value");
  let scoreThreshold = defaultValue(opts, "scoreThreshold", 5);
  let fuzzyOpts = opts.fuzzyOpts ? opts.fuzzyOpts : {};

  let OPTS = haystack.map((option) => {
    let item = { ...option };
    item.original = { ...option };
    if (typeof item === "object") {
      if (!Array.isArray(search_key)) {
        search_key = [search_key];
      }

      search_key.forEach((s_key) => {
        if (`${s_key}` in item) {
          let output = fuzzy(option[s_key], needle, fuzzyOpts);
          item.original[s_key] = output.highlightedTerm;
          item.score =
            !item.score || (item.score && item.score < output.score)
              ? output.score
              : item.score || 0;
        }
      });
    }
    return item;
  });

  let maxScore = Math.max(...OPTS.map((i) => i.score));
  let calculatedLimit = maxScore - scoreThreshold;

  OPTS = OPTS.filter(
    (r) => r.score > (calculatedLimit > 0 ? calculatedLimit : 0)
  );
  return OPTS.map((i) => i.original);
}

function defaultValue(opts, key, value) {
  return opts && opts[key] ? opts[key] : value;
}
