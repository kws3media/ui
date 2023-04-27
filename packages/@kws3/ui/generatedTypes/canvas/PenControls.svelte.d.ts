/** @typedef {typeof __propDef.props}  PenControlsProps */
/** @typedef {typeof __propDef.events}  PenControlsEvents */
/** @typedef {typeof __propDef.slots}  PenControlsSlots */
/**
 * @param {any} [EXPANDED_BUTTON=undefined] - EXPANDED_BUTTON property, Default: `undefined`
 * @param {string} [canvas_controls_styles=""] - Inline CSS for the control, Default: `""`
 * @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
 * @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
 * @param {object} [tools={}] - List of tools available, Default: `{}`
 * @param {array} [actions=[]] - List of actions toolbar, Default: `[]`
 * @param {string} [active_tool="Pen"] - Determines which tool is select, Default: `"Pen"`
 * @param {'bottom'|'top'} [toolbar_placement="bottom"] - Determines where the action tools are placed, Default: `"bottom"`
 * @param {string} [default_color=""] - colorpicker's default color, Default: `""`
 * @param {string|'start'|'center'|'end'} [control_position="center"] - Default position of controls, Default: `"center"`
 * @param {boolean} [can_undo=false] - Can_undo property, Default: `false`
 * @param {boolean} [can_redo=false] - Can_redo property, Default: `false`
 * @param {boolean} [show_tools=false] - Show_tools property, Default: `false`
 *
 * ### Events
 * - `toggleExpand`
 */
export default class PenControls extends SvelteComponentTyped<{
    EXPANDED_BUTTON: any;
    disabled?: boolean;
    readonly?: boolean;
    tools?: {};
    canvas_controls_styles?: string;
    actions?: string[];
    active_tool?: string;
    toolbar_placement?: "bottom" | "top";
    default_color?: string;
    control_position?: string;
    can_undo?: boolean;
    can_redo?: boolean;
    show_tools?: boolean;
}, {
    setTool: CustomEvent<any>;
    undo: CustomEvent<any>;
    redo: CustomEvent<any>;
    reset: CustomEvent<any>;
    changeColor: CustomEvent<any>;
    toggleExpand: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PenControlsProps = typeof __propDef.props;
export type PenControlsEvents = typeof __propDef.events;
export type PenControlsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        EXPANDED_BUTTON: any;
        disabled?: boolean;
        readonly?: boolean;
        tools?: {};
        canvas_controls_styles?: string;
        actions?: string[];
        active_tool?: string;
        toolbar_placement?: 'bottom' | 'top';
        default_color?: string;
        control_position?: string | 'start' | 'center' | 'end';
        can_undo?: boolean;
        can_redo?: boolean;
        show_tools?: boolean;
    };
    events: {
        setTool: CustomEvent<any>;
        undo: CustomEvent<any>;
        redo: CustomEvent<any>;
        reset: CustomEvent<any>;
        changeColor: CustomEvent<any>;
        toggleExpand: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=PenControls.svelte.d.ts.map