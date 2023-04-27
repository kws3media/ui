/**
 * @param {string | number} definition - can be a string like 'Enter', 'Tab' or number as keyCode, also allow combination key like 'ctrl+d', 'ctrl+alt+x'
 * @param {boolean} CommandKey - if true, in mac 'ctrl' key binding will be shift on 'command' key.
 * @returns {function} .
 */
export function makeKeyDefinition(definition: string | number, CommandKey?: boolean): Function;
export let enter: Function;
export let tab: Function;
export let escape: Function;
export let space: Function;
export let leftarrow: Function;
export let rightarrow: Function;
export let downarrow: Function;
export let uparrow: Function;
export let backspace: Function;
export let del: Function;
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