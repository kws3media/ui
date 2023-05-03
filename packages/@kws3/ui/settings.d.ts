/**
 * - `defaultIconFamily`: `"fa"` - default icon family
 * - `defaultToastPlacement`: `"bottom"` - default placement of toast notifications
 * - `defaultSnackbarPlacement`: `"bottom-right"` - default placement of snackbar notifications
 * - `defaultNotificationPlacement`: `"top-right"` - default placement of floating notifications
 * - `hasTransitions`: `true` - Transitions are applied
 * - `defaultChartColors`: `["#284BED", "#ED6134", "#1DAFEC", "#EDB405", "#11EDB7", "#77ED11"]` - default colors for charts
 * @param {SettingOptions} obj
 *
 */
export function applySettings(obj: SettingOptions): void;
export type SettingOptions = import('@kws3/ui/types').SettingOptions;
/**
 * @typedef {import('@kws3/ui/types').SettingOptions} SettingOptions
 */
export const defaultIconFamily: import("svelte/store").Writable<string>;
export const defaultToastPlacement: import("svelte/store").Writable<string>;
export const defaultSnackbarPlacement: import("svelte/store").Writable<string>;
export const defaultNotificationPlacement: import("svelte/store").Writable<string>;
export const hasTransitions: import("svelte/store").Writable<boolean>;
export const defaultChartColors: import("svelte/store").Writable<string[]>;
//# sourceMappingURL=settings.d.ts.map