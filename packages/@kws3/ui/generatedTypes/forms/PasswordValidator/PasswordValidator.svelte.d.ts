/** @typedef {typeof __propDef.props}  PasswordValidatorProps */
/** @typedef {typeof __propDef.events}  PasswordValidatorEvents */
/** @typedef {typeof __propDef.slots}  PasswordValidatorSlots */
/**
 * @param {number} [min=8] - Minimum number of characters required, Default: `8`
 * @param {boolean} [lower=true] - Whether a lower-case character is required, Default: `true`
 * @param {boolean} [upper=true] - Whether a upper-case character is required, Default: `true`
 * @param {boolean} [digit=true] - Whether a digit character is required, Default: `true`
 * @param {boolean} [special=true] - Whether a special character is required, Default: `true`
 * @param {array} [custom_rules=[]] - Array of custom rules defined as objects
 *
 * Object must contain:
 * `name`
 * `text`
 * `identifier`
 * `regex`
 * `negate (optional)`, Default: `[]`
 * @param {string} [password=""] - Password for validating, Default: `""`
 * @param {string} [style=""] - Inline CSS style for container, Default: `""`
 * @param {boolean} [compact=true] - Determines whether validator should display in compact mode or expanded mode, Default: `true`
 * @param {boolean} [valid=false] - Variable used to check if password Validator returns true or false
 *
 * Should be used with `bind` from parent component, Default: `false`
 * @param {string} [class=""] - CSS classes for container, Default: `""`
 */
export default class PasswordValidator extends SvelteComponentTyped<{
    style?: string;
    class?: string;
    min?: number;
    password?: string;
    lower?: boolean;
    upper?: boolean;
    digit?: boolean;
    special?: boolean;
    custom_rules?: any[];
    compact?: boolean;
    valid?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type PasswordValidatorProps = typeof __propDef.props;
export type PasswordValidatorEvents = typeof __propDef.events;
export type PasswordValidatorSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        style?: string;
        class?: string;
        min?: number;
        password?: string;
        lower?: boolean;
        upper?: boolean;
        digit?: boolean;
        special?: boolean;
        custom_rules?: any[];
        compact?: boolean;
        valid?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=PasswordValidator.svelte.d.ts.map