import fuzzy from "fuzzy.js";

export default function fuzzysearch(
  needle,
  haystack,
  search_key = "value",
  scoreThreshold = 5
) {
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
