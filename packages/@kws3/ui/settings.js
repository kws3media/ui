import { writable } from "svelte/store";

const defaultIconFamily = writable("fa");
const defaultToastPlacement = writable("top-right");
const hasTransitions = writable(true);

const SETTINGS = {
  defaultIconFamily,
  defaultToastPlacement,
  hasTransitions,
};

export { defaultIconFamily, defaultToastPlacement, hasTransitions };

/**
 * - `defaultIconFamily`: `"fa"` - default icon family
 * - `defaultToastPlacement`: `"top-right"` - default placement of toast notifications
 * - `hasTransitions`: `true` - Transitions are applied
 *
 * @param {*} object containing all settings
 */
export function applySettings(obj) {
  Object.entries(obj).forEach(([k, v]) => {
    SETTINGS[k] && SETTINGS[k].set(v);
  });
}
