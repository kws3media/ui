import { writable } from "svelte/store";

/**
 * @typedef {import('@kws3/ui/types').SettingOptions} SettingOptions
 */

const defaultIconFamily = writable("fa");
const defaultToastPlacement = writable("bottom");
const defaultSnackbarPlacement = writable("bottom-right");
const defaultNotificationPlacement = writable("top-right");
const hasTransitions = writable(true);
const defaultChartColors = writable([
  "#284BED",
  "#ED6134",
  "#1DAFEC",
  "#EDB405",
  "#11EDB7",
  "#77ED11",
]);

const SETTINGS = {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
  defaultChartColors,
};

export {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
  defaultChartColors,
};
 

/**
 * - `defaultIconFamily`: `"fa"` - default icon family
 * - `defaultToastPlacement`: `"bottom"` - default placement of toast notifications
 * - `defaultSnackbarPlacement`: `"bottom-right"` - default placement of snackbar notifications
 * - `defaultNotificationPlacement`: `"top-right"` - default placement of floating notifications
 * - `hasTransitions`: `true` - Transitions are applied
 * - `defaultChartColors`: `["#284BED", "#ED6134", "#1DAFEC", "#EDB405", "#11EDB7", "#77ED11"]` - default colors for charts
 *
 */



/**
 * containing all settings
 * @param {SettingOptions} obj 
 */

export function applySettings(obj) {
  Object.entries(obj).forEach(([k, v]) => {
    SETTINGS[k] && SETTINGS[k].set(v);
  });
}
