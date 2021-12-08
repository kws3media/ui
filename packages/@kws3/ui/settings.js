import { writable } from "svelte/store";

const defaultIconFamily = writable("fa");
const defaultToastPlacement = writable("bottom");
const defaultSnackbarPlacement = writable("bottom-right");
const defaultNotificationPlacement = writable("top-right");
const hasTransitions = writable(true);
const chartColors = writable([
  "#1b998b",
  "#d7263d",
  "#f46036",
  "#e2c044",
  "#c5d86d",
  "#03a9f4",
]);

const SETTINGS = {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
  chartColors,
};

export {
  defaultIconFamily,
  defaultToastPlacement,
  defaultSnackbarPlacement,
  defaultNotificationPlacement,
  hasTransitions,
  chartColors,
};

/**
 * - `defaultIconFamily`: `"fa"` - default icon family
 * - `defaultToastPlacement`: `"bottom"` - default placement of toast notifications
 * - `defaultSnackbarPlacement`: `"bottom-right"` - default placement of snackbar notifications
 * - `defaultNotificationPlacement`: `"top-right"` - default placement of floating notifications
 * - `hasTransitions`: `true` - Transitions are applied
 * - `chartColors`: `["#1b998b", "#d7263d", "#f46036", "#e2c044", "#c5d86d", "#03a9f4"]` - default colors for charts
 *
 * @param {*} object containing all settings
 */
export function applySettings(obj) {
  Object.entries(obj).forEach(([k, v]) => {
    SETTINGS[k] && SETTINGS[k].set(v);
  });
}
