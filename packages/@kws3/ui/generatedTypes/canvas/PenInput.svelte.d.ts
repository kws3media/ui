/** @typedef {typeof __propDef.props}  PenInputProps */
/** @typedef {typeof __propDef.events}  PenInputEvents */
/** @typedef {typeof __propDef.slots}  PenInputSlots */
/**
 * @param {string} [width="250px"] - Canvas width, Default: `"250px"`
 * @param {string} [height="250px"] - Canvas height, Default: `"250px"`
 * @param {number} [pen_width=2] - pen width, Default: `2`
 * @param {number} [eraser_width=6] - Eraser width, Default: `6`
 * @param {string} [pen_color="#000000"] - line color, Default: `"#000000"`
 * @param {string} [background_image=""] - Background image for the canvas, Default: `""`
 * @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
 * @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
 * @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
 * @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
 * @param {number} [expand_scale=50] - Transform scale of the canvas on expansion, Default: `50`
 * @param {object} [tools={}] - List of tools available for user to select from, Default: `{}`
 * @param {any} [DRAWING_PAD=undefined] - DRAWING_PAD property, Default: `undefined`
 */
export default class PenInput extends SvelteComponentTyped<{
    DRAWING_PAD: any;
    width?: string;
    height?: string;
    disabled?: boolean;
    pen_width?: number;
    eraser_width?: number;
    pen_color?: string;
    background_image?: string;
    readonly?: boolean;
    image?: string;
    initial_scale?: number;
    expand_scale?: number;
    tools?: {};
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PenInputProps = typeof __propDef.props;
export type PenInputEvents = typeof __propDef.events;
export type PenInputSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        DRAWING_PAD: any;
        width?: string;
        height?: string;
        disabled?: boolean;
        pen_width?: number;
        eraser_width?: number;
        pen_color?: string;
        background_image?: string;
        readonly?: boolean;
        image?: string;
        initial_scale?: number;
        expand_scale?: number;
        tools?: {};
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=PenInput.svelte.d.ts.map