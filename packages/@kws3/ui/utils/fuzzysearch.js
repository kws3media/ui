import fuzzy from "fuzzy.js";

export function fuzzysearch(needle, haystack, opts) {
  console.log("calling fuzzy", { needle, haystack, opts });
  let search_key = defaultValue(opts, "search_key", "value");
  let scoreThreshold = defaultValue(opts, "scoreThreshold", 5);
  let result = {};

  if (!Array.isArray(search_key)) {
    search_key = [search_key];
  }

  search_key.forEach((s_key) => {
    result[s_key] = searchHandler(s_key, needle, haystack, scoreThreshold);
  });

  return result;
}

function searchHandler(search_key, needle, haystack, scoreThreshold) {
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
  return opts && opts[key] ? opts[key] : value;
}

export { fuzzy };
