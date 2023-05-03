/**
 * @typedef {import('@kws3/ui/types').TippyPositions} TippyPositions
 */
/**
 * Activates tooltips via event delegation
 * @param {string} container - CSS selector of container
 * @param {object?} opts - tooltip options
 */
export function activateTooltips(container: string, opts?: object | null): void;
/**
 * @type {import("svelte/action").Action}
 */
export let popover: import("svelte/action").Action;
/**
 * @type {import("svelte/action").Action}
 */
export let tooltip: import("svelte/action").Action;
export type TippyPositions = import('@kws3/ui/types').TippyPositions;
//# sourceMappingURL=Tooltip.d.ts.map