/**
 * @param {string | number} definition - can be a string like 'Enter', 'Tab' or number as keyCode, also allow combination key like 'ctrl+d', 'ctrl+alt+x'
 * @param {boolean} CommandKey - if true, in mac 'ctrl' key binding will be shift on 'command' key.
 * @returns {import("svelte/action").Action} .
 */
export function makeKeyDefinition(definition: string | number, CommandKey?: boolean): import("svelte/action").Action;
export let enter: import("svelte/action").Action<HTMLElement, any, any>;
export let tab: import("svelte/action").Action<HTMLElement, any, any>;
export let escape: import("svelte/action").Action<HTMLElement, any, any>;
export let space: import("svelte/action").Action<HTMLElement, any, any>;
export let leftarrow: import("svelte/action").Action<HTMLElement, any, any>;
export let rightarrow: import("svelte/action").Action<HTMLElement, any, any>;
export let downarrow: import("svelte/action").Action<HTMLElement, any, any>;
export let uparrow: import("svelte/action").Action<HTMLElement, any, any>;
export let backspace: import("svelte/action").Action<HTMLElement, any, any>;
export let del: import("svelte/action").Action<HTMLElement, any, any>;
declare namespace _default {
    export { enter };
    export { tab };
    export { escape };
    export { space };
    export { leftarrow };
    export { rightarrow };
    export { downarrow };
    export { uparrow };
    export { backspace };
    export { del };
}
export default _default;
//# sourceMappingURL=index.d.ts.map