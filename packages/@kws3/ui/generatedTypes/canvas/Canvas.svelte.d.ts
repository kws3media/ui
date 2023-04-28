/** @typedef {typeof __propDef.props}  CanvasProps */
/** @typedef {typeof __propDef.events}  CanvasEvents */
/** @typedef {typeof __propDef.slots}  CanvasSlots */
/**
 * @param {string} [width="250px"] - Canvas width, Default: `"250px"`
 * @param {string} [height="250px"] - Canvas height, Default: `"250px"`
 * @param {string |'Pen'|'Eraser'} [active_tool=""] - Default active tool, Default: `""`
 * @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
 * @param {boolean} [is_touched=false] - Determines whether canvas is touched or not, Default: `false`
 * @param {number} [pen_width=2] - `CONST` pen width, Default: `2`
 * @param {number} [eraser_width=6] - `CONST` Eraser width, Default: `6`
 * @param {string} [pen_color="#ff0000"] - line color, Default: `"#ff0000"`
 * @param {string} [background_image=""] - `CONST` Background image for the canvas, Default: `""`
 * @param {boolean} [readonly=false] - `CONST` Determines whether canvas is readonly or not, Default: `false`
 * @param {boolean} [disabled=false] - `CONST` Determines whether canvas is disabled or not, Default: `false`
 * @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
 * @param {string} [expand_from="center"] - The direction from which the canvas should expand.
 * 'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
 * @param {string} [expand_to="center"] - The direction to which the canvas should expand.
 * 'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
 * @param {number} [expand_scale=50] - Transform scale of the canvas on expansion
 * value in percentage %, Default: `50`
 * @param {array} [actions=[]] - `CONST` List of actions toolbar, Default: `[]`
 * @param {string|'bottom'|'top'} [toolbar_placement="bottom"] - Default position of the action toolbar, Default: `"bottom"`
 * @param {object} [tools={}] - List of tools available for user to select from, Default: `{}`
 * @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
 * @param {boolean} [has_controls=true] - Determines control tools available or not, Default: `true`
 * @param {string|'start'|'center'|'end'} [control_position="center"] - `CONST` Default position of controls, Default: `"center"`
 * @method `getActions()` - GetActions method
 */
export default class Canvas extends SvelteComponentTyped<{
    [x: string]: any;
    cy?: string;
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
    actions?: string[];
    active_tool?: string;
    toolbar_placement?: string;
    control_position?: string;
    is_touched?: boolean;
    expand_from?: string;
    expand_to?: string;
    has_controls?: boolean;
    getActions?: () => any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get pen_width(): number;
    get eraser_width(): number;
    get background_image(): string;
    get readonly(): boolean;
    get disabled(): boolean;
    get actions(): string[];
    get control_position(): string;
    get getActions(): () => any;
}
export type CanvasProps = typeof __propDef.props;
export type CanvasEvents = typeof __propDef.events;
export type CanvasSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        cy?: string;
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
        actions?: string[];
        active_tool?: string | 'Pen' | 'Eraser';
        toolbar_placement?: string | 'bottom' | 'top';
        control_position?: string | 'start' | 'center' | 'end';
        is_touched?: boolean;
        expand_from?: string;
        expand_to?: string;
        has_controls?: boolean;
        getActions?: () => any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Canvas.svelte.d.ts.map