/**
 * @typedef {import('@kws3/ui/types').SearchOptions} SearchOptions - contains search options and fuzzy lib options
 * @typedef {import('@kws3/ui/types').SearchHelper} SearchHelper - returned search helper function which take unction take params `needle` and `haystack`.
 */
/**
 * @param {SearchOptions} opts
 */
export function makeSearchEngine(opts: SearchOptions): (needle: string, haystack: any[]) => any[];
/**
 * - contains search options and fuzzy lib options
 */
export type SearchOptions = import('@kws3/ui/types').SearchOptions;
/**
 * - returned search helper function which take unction take params `needle` and `haystack`.
 */
export type SearchHelper = import('@kws3/ui/types').SearchHelper;
//# sourceMappingURL=index.d.ts.map