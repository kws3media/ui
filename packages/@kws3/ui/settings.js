import { writable } from "svelte/store";

const defaultIconFamily = writable("fa");
const defaultToastPlacement = writable("bottom");
const defaultSnackbarPlacement = writable("bottom-right");
const defaultNotificationPlacement = writable("top-right");
const hasTransitions = writable(true);

const SETTINGS = {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
};

export {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
};

/**
 * - `defaultIconFamily`: `"fa"` - default icon family
 * - `defaultToastPlacement`: `"bottom"` - default placement of toast notifications
 * - `defaultSnackbarPlacement`: `"bottom-right"` - default placement of snackbar notifications
 * - `defaultNotificationPlacement`: `"top-right"` - default placement of floating notifications
 * - `hasTransitions`: `true` - Transitions are applied
 *
 * @param {*} object containing all settings
 */
export function applySettings(obj) {
  Object.entries(obj).forEach(([k, v]) => {
    SETTINGS[k] && SETTINGS[k].set(v);
  });
}
