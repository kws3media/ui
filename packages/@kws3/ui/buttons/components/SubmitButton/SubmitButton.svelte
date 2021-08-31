<!--
  @component


  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [size=""] - Size property, Default: `""`
  @param {string} [color="primary"] - Color property, Default: `"primary"`
  @param {string} [text="Save Changes"] - Text property, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Saved_text property, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Error_text property, Default: `"Failed to Save"`
  @param {string} [icon="save"] - Icon property, Default: `"save"`
  @param {string} [cy="submit"] - Cy property, Default: `"submit"`
  @param {object} [tracker={}] - Tracker property, Default: `{}`
  @param {boolean} [icon_only=false] - Icon_only property, Default: `false`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`

-->
<button
  class="button {classes} is-{size} {tracker.saving
    ? 'is-loading is-' + color
    : tracker.error
    ? 'is-danger'
    : tracker.saved
    ? 'is-success'
    : 'is-' + color}"
  type="submit"
  {disabled}
  data-cy={cy}>
  {#if tracker.saved}
    <Icon icon="check" size={icon_size} />
    {#if !icon_only}<span>{saved_text}</span>{/if}
  {:else if tracker.error}
    <Icon icon="exclamation" size={icon_size} />
    {#if !icon_only}<span>{err_text}</span>{/if}
  {:else}
    <Icon {icon} size={icon_size} />
    {#if !icon_only}<span>{text}</span>{/if}
  {/if}
</button>

<script>
  import { Icon } from "@kws3/ui";

  /**
   * CSS classes
   * @type {string}
   * @defaultvalue empty
   */
  export let classes = "";

  /**
   * Size of the Button `small`, `medium`, `large`
   * @type {'small'|'medium'|'large'}
   */
  export let size = "";

  /**
   * Color of the Button `primary`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "primary";

  /**
   * Button text
   * @type {string}
   * @defaultvalue empty
   */
  export let text = "Save Changes";

  /**
   * Text shows after success
   * @type {string}
   * @defaultvalue empty
   */
  export let saved_text = "Saved";

  /**
   * Text shows after process complete
   * @type {string}
   * @defaultvalue empty
   */
  export let error_text = "Failed to Save";

  /**
   * Icon of the Button - can use any fa icon
   * @type {string}
   * @defaultvalue empty
   */
  export let icon = "save";

  /**
   * data-cy attribute for cypress
   * @type {string}
   * @defaultvalue empty
   */
  export let cy = "submit";

  /**
   * Display icon only - true/false
   * @type {boolean}
   * @defaultvalue empty
   */
  export let icon_only = false;

  /**
   * Button disable - true/false
   * @type {boolean}
   * @defaultvalue empty
   */
  export let disabled = false;

  /**
   * Tracker property
   * @type {object}
   */
  export let tracker = {
    saving: false,
    saved: false,
    error: false,
  };

  $: err_text = error_text == "" ? text : error_text;
  $: icon_size = size == "large" ? "" : "small";

  // reviwed
</script>
