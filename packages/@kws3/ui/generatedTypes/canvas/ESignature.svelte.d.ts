/** @typedef {typeof __propDef.props}  ESignatureProps */
/** @typedef {typeof __propDef.events}  ESignatureEvents */
/** @typedef {typeof __propDef.slots}  ESignatureSlots */
/**
 * @param {string} [image=""] - The Data created in the canvas by the user (readonly) (base64), Default: `""`
 * @param {boolean} [is_touched=false] - (readonly) Determines whether canvas is touched or not, Default: `false`
 * @param {string} [width="520px"] - Canvas width, Default: `"520px"`
 * @param {string} [height="170px"] - Canvas height, Default: `"170px"`
 * @param {string} [background_image=""] - Background image for the canvas, Default: `""`
 * @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
 * @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
 * @param {string|'start'|'center'|'end'} [control_position="center"] - Default position of controls, Default: `"center"`
 */
export default class ESignature extends SvelteComponentTyped<{
    width?: string;
    height?: string;
    disabled?: boolean;
    background_image?: string;
    readonly?: boolean;
    image?: string;
    control_position?: string;
    is_touched?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type ESignatureProps = typeof __propDef.props;
export type ESignatureEvents = typeof __propDef.events;
export type ESignatureSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        width?: string;
        height?: string;
        disabled?: boolean;
        background_image?: string;
        readonly?: boolean;
        image?: string;
        control_position?: string | 'start' | 'center' | 'end';
        is_touched?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=ESignature.svelte.d.ts.map