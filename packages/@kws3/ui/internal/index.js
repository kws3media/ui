export { scrollIntoActiveElement } from "./scrollIntoActiveElement";
export { fuzzy } from "./fuzzy.js";
export { default as UndoManager } from "./UndoManager";
export { default as DrawingPad } from "./DrawingPad";

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

export const IS_MAC =
  typeof window !== "undefined"
    ? "navigator" in window
      ? /mac/i.test(
          window.navigator.userAgentData
            ? window.navigator.userAgentData.platform
            : window.navigator.platform
        )
      : false
    : false;
