/** @typedef {typeof __propDef.props}  LoaderProps */
/** @typedef {typeof __propDef.events}  LoaderEvents */
/** @typedef {typeof __propDef.slots}  LoaderSlots */
/**
 * @param {SpinnerColorOptions} [spinner_color=grey] - Color of the Spinner, Default: `grey`
 * @param {SizeOptions} [spinner_size=medium] - Size of the Spinner, Default: `medium`
 * @param {BGColorOptions} [background_color=transparent] - Backgound color of the Spinner container, Default: `transparent`
 * @param {string} [background_size="medium"] - Size of the Spinner container. It can also accept css units
 *
 * **Examples:** `small` | `medium` | `large` | `halfheight` | `fullheight` | `10px` | `5rem` | `100vh`, Default: `"medium"`
 * @param {boolean} [is_inline=false] - Determines if the Loader is inline or not, Default: `false`
 * @param {boolean} [has_overlay=false] - Determines if loader is displayed on top of a semi-transparent overlay.
 *
 * `background_color` is ignored when this is set to `true`
 *
 * The overlay is absolutely positioned. Ensure that the parent container is relatively positioned when using this., Default: `false`
 * @param {string} [style=""] - Inline CSS for Loader, Default: `""`
 * @param {string} [class=""] - CSS class for Loader, Default: `""`
 */
export default class Loader extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    spinner_color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "grey";
    spinner_size?: import("../internalTypes/type-defs").Sizes;
    background_color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "transparent" | "link";
    background_size?: string;
    is_inline?: boolean;
    has_overlay?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type LoaderProps = typeof __propDef.props;
export type LoaderEvents = typeof __propDef.events;
export type LoaderSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        spinner_color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "grey";
        spinner_size?: import("../internalTypes/type-defs").Sizes;
        background_color?: "" | "primary" | "success" | "warning" | "info" | "danger" | "dark" | "light" | "transparent" | "link";
        background_size?: string;
        is_inline?: boolean;
        has_overlay?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Loader.svelte.d.ts.map