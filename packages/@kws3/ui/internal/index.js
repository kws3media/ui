export { scrollIntoActiveElement } from "./scrollIntoActiveElement";
export { fuzzy } from "./fuzzy.js";

/**
 * Detect whether a user has pressed Enter.
 * @param {object} [e=[]] - Event object., Default: `[]`
 */
export function isEnterKey(e) {
  return e.keyCode && e.keyCode === 13;
}

/**
 * Detect whether a user has pressed Escape key.
 * @param {object} [e=[]] - Event object., Default: `[]`
 */
export function isEscKey(e) {
  return e.keyCode && e.keyCode === 27;
}
