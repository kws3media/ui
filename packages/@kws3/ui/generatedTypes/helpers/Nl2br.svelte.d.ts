/** @typedef {typeof __propDef.props}  Nl2brProps */
/** @typedef {typeof __propDef.events}  Nl2brEvents */
/** @typedef {typeof __propDef.slots}  Nl2brSlots */
/** @param {string} [text=""] - Text to process and output, Default: `""` */
export default class Nl2br extends SvelteComponentTyped<{
    text?: string;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type Nl2brProps = typeof __propDef.props;
export type Nl2brEvents = typeof __propDef.events;
export type Nl2brSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        text?: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=Nl2br.svelte.d.ts.map