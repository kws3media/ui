/**
 * @typedef {import('@kws3/ui/types').TippyPositions} TippyPositions
 *
 * @typedef {import("svelte/action").Action<HTMLElement, {
 * content?: HTMLElement
 * }>} TippyAction
 */
/**
 * Activates tooltips via event delegation
 * @param {string} container - CSS selector of container
 * @param {object?} opts - tooltip options
 */
export function activateTooltips(container: string, opts?: object | null): void;
/**
 * @type {TippyAction}
 */
export let popover: TippyAction;
/**
 * @type {TippyAction}
 */
export let tooltip: TippyAction;
export type TippyPositions = import('@kws3/ui/types').TippyPositions;
export type TippyAction = import("svelte/action").Action<HTMLElement, {
    content?: HTMLElement;
}>;
//# sourceMappingURL=Tooltip.d.ts.map