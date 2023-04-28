/** @typedef {typeof __propDef.props}  FileUploadProps */
/** @typedef {typeof __propDef.events}  FileUploadEvents */
/** @typedef {typeof __propDef.slots}  FileUploadSlots */
/**
 * @param {string} [key=""] - A property you can send to uniquely identify an uploader.
 *
 * It is returned back in the `getFile()` call from `file_chosen` event, Default: `""`
 * @param {string} [message="Choose File..."] - Message displayed in uploader, Default: `"Choose File..."`
 * @param {string} [info=""] - Information / help / subtitle displayed under the uploader, Default: `""`
 * @param {ColorOptions | 'grey'} [info_color=grey] - Color of the information text, Default: `grey`
 * @param {number} [max=5000000] - Maximum allowed size in bytes, Default: `5000000`
 * @param {any} [allowed=*] - Allowed file types - accepts the string `"*"`, or an array of file type suffixes, Default: `*`
 * @param {boolean} [disabled=false] - Disables the uploader, Default: `false`
 * @param {SizeOptions} [size=] - Size of the File Input, Default: ``
 * @param {ColorOptions} [color=] - Color of the File Input, Default: ``
 * @param {string} [class=""] - CSS classes for the Uploader, Default: `""`
 *
 * ### Events
 * - `file_uploaded` - Triggered when upload completes
 * - `file_upload_error` - Triggered when an error occurs on upload.
 * Returns error message in `event.detail`
 * - `file_chosen` - Triggered when file is chosen by user.
 * The following functions are returned in `event.detail`:
 *
 * - `getFile()`: Returns information about the chosen file
 * - `progress()`: Function to call for updating progress, send file uploaded bytes as parameter
 * - `uploaded()`: Function to call when upload completes
 * - `error()`: Function to call on upload error, send error message as parameter
 */
export default class FileUpload extends SvelteComponentTyped<{
    info?: string;
    class?: string;
    color?: import("../internalTypes/type-defs").Colors;
    size?: import("../internalTypes/type-defs").Sizes;
    message?: string;
    disabled?: boolean;
    key?: string;
    info_color?: import("../internalTypes/type-defs").Colors | "grey";
    max?: number;
    allowed?: any;
}, {
    file_uploaded: CustomEvent<any>;
    file_upload_error: CustomEvent<any>;
    file_chosen: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type FileUploadProps = typeof __propDef.props;
export type FileUploadEvents = typeof __propDef.events;
export type FileUploadSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        info?: string;
        class?: string;
        color?: import("../internalTypes/type-defs").Colors;
        size?: import("../internalTypes/type-defs").Sizes;
        message?: string;
        disabled?: boolean;
        key?: string;
        info_color?: import("../internalTypes/type-defs").Colors | "grey";
        max?: number;
        allowed?: any;
    };
    events: {
        file_uploaded: CustomEvent<any>;
        file_upload_error: CustomEvent<any>;
        file_chosen: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
//# sourceMappingURL=FileUpload.svelte.d.ts.map