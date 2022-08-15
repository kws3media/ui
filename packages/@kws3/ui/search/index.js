import { fuzzy } from "../internal";

/**
 * @typedef {import('@kws3/ui/types').SearchOptions} SearchOptions - contains search options and fuzzy lib options
 */

/**
 * @param {SearchOptions} opts
 * @returns {function} Return function take params `needle` and `haystack`.
 */
export function makeSearchEngine(opts) {
  let search_key = opts.search_key ? opts.search_key : "value";
  let scoreThreshold = opts.scoreThreshold ? opts.scoreThreshold : 5;
  let fuzzyOpts = opts.fuzzyOpts ? opts.fuzzyOpts : {};

  return function (needle, haystack) {
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
  };
}
