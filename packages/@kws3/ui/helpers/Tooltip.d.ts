/**
 * @typedef {import('@kws3/ui/types').TippyPositions} TippyPositions
 */
/**
 * Activates tooltips via event delegation
 * @param {string} container - CSS selector of container
 * @param {object} opts - tooltip options
 */
export function activateTooltips(container: string, opts?: object): void;
export function popover(node: any, opts: any): {
    update(_opts: any): void;
    destroy(): void;
};
export function tooltip(node: any, opts: any): {
    update(_opts: any): void;
    destroy(): void;
};
export type TippyPositions = import('@kws3/ui/types').TippyPositions;
//# sourceMappingURL=Tooltip.d.ts.map