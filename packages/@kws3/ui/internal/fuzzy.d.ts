/**
 * fuzzy.js v0.1.0
 * (c) 2016 Ben Ripkens
 * @license: MIT
 * @params
 *  term : haystack
 *  query : needle
 *  opts: {
 *   analyzeSubTerms,
 *   analyzeSubTermDepth
 *   highlighting
 *  }
 */
/**
 *
 * Adapted from fuzzy.js for @kws3/ui to work with vite prebundling
 */
export function fuzzy(term: any, query: any, opts?: {}): {
    score: number;
    term: any;
    query: any;
    highlightedTerm: string;
};
//# sourceMappingURL=fuzzy.d.ts.map