<!--
  @component


  @param {string} [classes=""] - `CONST` CSS classes, Default: `""`
  @param {string} [button_class=""] - `CONST` CSS classes for button, Default: `""`
  @param {string} [text="Delete"] - `CONST` Button text, Default: `"Delete"`
  @param {'small'|'medium'|'large'} [size=""] - `CONST` Size of the Button, Default: `""`
  @param {string} [icon="minus-circle"] - `CONST` Icon of the Button - can use any fa icon, Default: `"minus-circle"`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="danger"] - `CONST` Color of the Button, Default: `"danger"`
  @param {string} [cy=""] - `CONST` data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - `CONST` Icon showing after confirm - can use any fa icon, Default: `"hourglass"`
  @param {string} [doing_text="Deleting..."] - `CONST` Text showing after confirm, Default: `"Deleting..."`
  @param {string} [done_icon="check"] - `CONST` Icon showing after success - can use any fa icon, Default: `"check"`
  @param {string} [done_text="Deleted"] - `CONST` Text showing after success - can use any fa icon, Default: `"Deleted"`
  @param {object} [context=null] - `CONST` Context property, Default: `null`
  @param {boolean} [icon_only=false] - `CONST` Boolean - true/false, Default: `false`
  @param {boolean} [disabled=false] - `CONST` Boolean - true/false, Default: `false`

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
  import { ConfirmButton } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * CSS classes
   * @type {string}
   */
  export const classes = "";

  /**
   * CSS classes for button
   * @type {string}
   */
  export const button_class = "";

  /**
   * Button text
   * @type {string}
   */
  export const text = "Delete";

  /**
   * Size of the Button
   * @type {'small'|'medium'|'large'}
   */
  export const size = "";

  /**
   * Icon of the Button - can use any fa icon
   * @type {string}
   */
  export const icon = "minus-circle";

  /**
   * Color of the Button
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export const color = "danger";

  /**
   * data-cy attribute for cypress
   * @type {string}
   */
  export const cy = "";

  /**
   * Icon showing after confirm - can use any fa icon
   * @type {string}
   */
  export const doing_icon = "hourglass";

  /**
   * Text showing after confirm
   * @type {string}
   */
  export const doing_text = "Deleting...";

  /**
   * Icon showing after success - can use any fa icon
   * @type {string}
   */
  export const done_icon = "check";

  /**
   * Text showing after success - can use any fa icon
   * @type {string}
   */
  export const done_text = "Deleted";

  /**
   * Context property
   * @type {object}
   */
  export const context = null;

  /**
   * Boolean - true/false
   * @type {boolean}
   */
  export const icon_only = false;

  /**
   * Boolean - true/false
   * @type {boolean}
   */
  export const disabled = false;

  $: properties = { ...$$props };

  // reviwed
</script>
