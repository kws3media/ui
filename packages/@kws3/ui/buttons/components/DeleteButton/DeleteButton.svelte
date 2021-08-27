<!--
  @component


  @param {string} [classes=""] - `CONST` A Button Component, Default: `""`
  @param {string} [button_class=""] - `CONST` Button_class property, Default: `""`
  @param {string} [text="Delete"] - `CONST` Text property, Default: `"Delete"`
  @param {string} [size="empty"] - `CONST` Size of the Button `small`, `medium` and `large`, Default: `"empty"`
  @param {string} [icon="empty"] - `CONST` Icon of the Button - can use any fa icon, Default: `"empty"`
  @param {string} [color="empty"] - `CONST` Color of the Button `primary`, `success`, `warning`, `danger`, `info`, `light`, Default: `"empty"`
  @param {string} [cy=""] - `CONST` Cy property, Default: `""`
  @param {string} [doing_icon="empty"] - `CONST` Icon showing after confirm - can use any fa icon, Default: `"empty"`
  @param {string} [doing_text="empty"] - `CONST` Text showing after confirm, Default: `"empty"`
  @param {string} [done_icon="empty"] - `CONST` Icon showing after success - can use any fa icon, Default: `"empty"`
  @param {string} [done_text="empty"] - `CONST` Text showing after success - can use any fa icon, Default: `"empty"`
  @param {object} [context={}] - `CONST` Context property, Default: `{}`
  @param {boolean} [icon_only=empty] - `CONST` Boolean - true/false, Default: `empty`
  @param {boolean} [disabled=empty] - `CONST` Boolean - true/false, Default: `empty`

  ### Events
  - `error`
  - `erase`
  - `erased`

-->
<ConfirmButton
  {...properties}
  on:error
  on:do={({ detail }) => fire("erase", detail)}
  on:done={({ detail }) => fire("erased", detail)} />

<script>
  import ConfirmButton from "../ConfirmButton/ConfirmButton.svelte";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * A Button Component
   * @component
   */

  export const classes = "",
    button_class = "",
    text = "Delete";

  /**
   * Size of the Button `small`, `medium` and `large`
   * @type {string}
   * @defaultvalue empty
   */
  export const size = "";

  /**
   * Icon of the Button - can use any fa icon
   * @type {string}
   * @defaultvalue empty
   */
  export const icon = "minus-circle";

  /**
   * Color of the Button `primary`, `success`, `warning`, `danger`, `info`, `light`
   * @type {string}
   * @defaultvalue empty
   */
  export const color = "danger";

  export const cy = "";

  /**
   * Icon showing after confirm - can use any fa icon
   * @type {string}
   * @defaultvalue empty
   */
  export const doing_icon = "hourglass";

  /**
   * Text showing after confirm
   * @type {string}
   * @defaultvalue empty
   */
  export const doing_text = "Deleting...";

  /**
   * Icon showing after success - can use any fa icon
   * @type {string}
   * @defaultvalue empty
   */
  export const done_icon = "check";

  /**
   * Text showing after success - can use any fa icon
   * @type {string}
   * @defaultvalue empty
   */
  export const done_text = "Deleted";

  export const context = null;

  /**
   * Boolean - true/false
   * @type {boolean}
   * @defaultvalue empty
   */
  export const icon_only = false;

  /**
   * Boolean - true/false
   * @type {boolean}
   * @defaultvalue empty
   */
  export const disabled = false;

  $: properties = { ...$$props };

  // reviwed
</script>
