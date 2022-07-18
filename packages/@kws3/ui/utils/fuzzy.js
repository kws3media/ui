/**
 * fuzzy.js v0.1.0
 * (c) 2016 Ben Ripkens
 * @license: MIT
 */
/**
 *
 * Adapted from fuzzy.js for @kws3/ui to work with vite prebundling
 */

export default function fuzzy(term, query, opts) {
  let analyzeSubTerms = opts.analyzeSubTerms ? opts.analyzeSubTerms : false;
  let analyzeSubTermDepth = opts.analyzeSubTermDepth
    ? opts.analyzeSubTermDepth
    : 10;
  let highlighting = opts.highlighting
    ? opts.highlighting
    : {
        before: "<em>",
        after: "</em>",
      };

  let max = calcFuzzyScore(term, query, highlighting);
  let termLength = term.length;

  if (analyzeSubTerms) {
    for (let i = 1; i < termLength && i < analyzeSubTermDepth; i++) {
      let subTerm = term.substring(i);
      let score = calcFuzzyScore(subTerm, query, highlighting);
      if (score.score > max.score) {
        // we need to correct 'term' and 'matchedTerm', as calcFuzzyScore
        // does not now that it operates on a substring. Doing it only for
        // new maximum score to save some performance.
        score.term = term;
        score.highlightedTerm = term.substring(0, i) + score.highlightedTerm;
        max = score;
      }
    }
  }

  return max;
}

function calcFuzzyScore(term, query, highlighting) {
  let score = 0;
  let termLength = term.length;
  let queryLength = query.length;
  let _highlighting = "";
  let ti = 0;
  // -1 would not work as this would break the calculations of bonus
  // points for subsequent character matches. Something like
  // Number.MIN_VALUE would be more appropriate, but unfortunately
  // Number.MIN_VALUE + 1 equals 1...
  let previousMatchingCharacter = -2;

  for (let qi = 0; qi < queryLength && ti < termLength; qi++) {
    let qc = query.charAt(qi);
    let lowerQc = qc.toLowerCase();

    for (; ti < termLength; ti++) {
      let tc = term.charAt(ti);

      if (lowerQc === tc.toLowerCase()) {
        score++;

        if (previousMatchingCharacter + 1 === ti) {
          score += 2;
        }

        _highlighting += highlighting.before + tc + highlighting.after;
        previousMatchingCharacter = ti;
        ti++;
        break;
      } else {
        _highlighting += tc;
      }
    }
  }

  _highlighting += term.substring(ti, term.length);

  return {
    score: score,
    term: term,
    query: query,
    highlightedTerm: _highlighting,
  };
}

// fuzzy.matchComparator = function matchComparator(m1, m2) {
//   return m2.score - m1.score !== 0
//     ? m2.score - m1.score
//     : m1.term.length - m2.term.length;
// };

/*
 * Whether or not fuzzy.js should analyze sub-terms, i.e. also
 * check term starting positions != 0.
 *
 * Example:
 * Given the term 'Halleluja' and query 'luja'
 *
 * Fuzzy.js scores this combination with an 8, when analyzeSubTerms is
 * set to false, as the following matching string will be calculated:
 * Ha[l]lel[uja]
 *
 * If you activate sub temr analysis though, the query will reach a score
 * of 10, as the matching string looks as following:
 * Halle[luja]
 *
 * Naturally, the second version is more expensive than the first one.
 * You should therefore configure how many sub terms you which to analyse.
 * This can be configured through fuzzy.analyzeSubTermDepth = 10.
 */
// fuzzy.analyzeSubTerms = false;

/*
 * How many sub terms should be analyzed.
 */
// fuzzy.analyzeSubTermDepth = 10;

// fuzzy.highlighting = {
//   before: "<em>",
//   after: "</em>",
// };
