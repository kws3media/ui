<!--
  @component
  

  @param {string} [classes=""] - CSS classes, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the Button, Default: `"primary"`
  @param {string} [text="Save Changes"] - Button text, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Text shows after success, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Text shows after process complete, Default: `"Failed to Save"`
  @param {string} [icon="save"] - Icon of the Button - can use any fa icon, Default: `"save"`
  @param {string} [cy="submit"] - data-cy attribute for cypress, Default: `"submit"`
  @param {boolean} [icon_only=false] - Display icon only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Button disable - true/false, Default: `false`
  @param {object} [tracker={}] - Tracker property, Default: `{}`

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
   */
  export let classes = "",
    /**
     * Size of the Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the Button
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Button text
     */
    text = "Save Changes",
    /**
     * Text shows after success
     */
    saved_text = "Saved",
    /**
     * Text shows after failed
     */
    error_text = "Failed to Save",
    /**
     * Icon of the Button - can use any fa icon
     */
    icon = "save",
    /**
     * data-cy attribute for cypress
     */
    cy = "submit",
    /**
     * Display icon only - true/false
     */
    icon_only = false,
    /**
     * Button disable - true/false
     */
    disabled = false,
    /**
     * Tracker property
     */
    tracker = {
      saving: false,
      saved: false,
      error: false,
    };

  $: err_text = error_text == "" ? text : error_text;
  $: icon_size = size == "large" ? "" : "small";

  // reviwed
</script>
