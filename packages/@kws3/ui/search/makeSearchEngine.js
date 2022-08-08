import { fuzzy } from "../internal";

/**
 * Used to filter the object
 * @param {object} opts - contains search options and fuzzy lib options
 * @param {string} opts.search_key - which key to perform search on.
 * @param {number} opts.scoreThreshold - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches.
 * @param {object} opts.fuzzyOpts - fuzzy.js lib options
 * @return {function} Return function take params needle and haystack.
 */
export function makeSearchEngine(opts) {
  let search_key = defaultValue(opts, "search_key", "value");
  let scoreThreshold = defaultValue(opts, "scoreThreshold", 5);
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

function defaultValue(opts, key, value) {
  return opts && opts[key] ? opts[key] : value;
}
