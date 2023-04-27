/**
 * @typedef {import('../internalTypes').SearchOptions} SearchOptions - contains search options and fuzzy lib options
 * @typedef {import('../internalTypes').SearchHelper} SearchHelper - returned search helper function which take unction take params `needle` and `haystack`.
 */
/**
 * @param {SearchOptions} opts
 */
export function makeSearchEngine(opts: SearchOptions): (needle: string, haystack: any[]) => any[];
/**
 * - contains search options and fuzzy lib options
 */
export type SearchOptions = import('../internalTypes').SearchOptions;
/**
 * - returned search helper function which take unction take params `needle` and `haystack`.
 */
export type SearchHelper = import('../internalTypes').SearchHelper;
//# sourceMappingURL=index.d.ts.map