<!--
  @component


  @param {'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the Button, Default: `"primary"`
  @param {string} [text="Save Changes"] - Button text, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Text shows after success, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Text shows after failed, Default: `"Failed to Save"`
  @param {string} [icon="save"] - Icon of the Button - can use any fa icon, Default: `"save"`
  @param {string} [cy="submit"] - data-cy attribute for cypress, Default: `"submit"`
  @param {boolean} [icon_only=false] - Display icon only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Button disable - true/false, Default: `false`
  @param {object} [tracker={}] - Tracker property, Default: `{}`
  @param {string} [class=""] - `CONST` CSS classes, Default: `""`
  @param {function} [saving()] - call this function on form saving state
  @param {function} [saved(callback)] - call this function after form saved
  @param {function} [error(callback)] - call this function on form error state

  ### Events
  - `saved` - It fires after saved state
  - `error` - It fires after error state

-->
<button
  type="submit"
  class="button {klass} is-{size} {tracker.saving
    ? 'is-loading is-' + color
    : tracker.error
    ? 'is-danger'
    : tracker.saved
    ? 'is-success'
    : 'is-' + color}"
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
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * Size of the Button
   * @type {''|'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Color of the Button
     * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary",
    /**
     * Button text
     */
    text = "Save Changes",
    /**
     * Text displayed after submission is completed successfully
     */
    saved_text = "Saved",
    /**
     * Text displayed if submission is not successful
     */
    error_text = "Failed to Save",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "save",
    /**
     * data-cy attribute for cypress
     */
    cy = "submit",
    /**
     * Removes text, and text space in the button
     */
    icon_only = false,
    /**
     * Disables the button when `true`
     */
    disabled = false,
    /**
     * Tracker object to be sent from outside to change the state of the button.
     */
    tracker = {
      saving: false,
      saved: false,
      error: false,
    };

  /**
   * CSS classes for Button container
   */
  let klass = "";
  export { klass as class };

  /**
   * call this function on form saving state
   */
  export function saving() {
    tracker = {
      saving: true,
      saved: false,
      error: false,
    };
  }

  /**
   * call this function after form saved
   */
  export function saved(callback) {
    tracker = {
      saving: false,
      saved: true,
      error: false,
    };

    setTimeout(() => {
      tracker = {
        saving: false,
        saved: false,
        error: false,
      };
      /**
       * Fires an event on successful submission
       */
      fire("saved");
      callback && callback();
    }, 1000);
  }

  /**
   * call this function on form error state
   */
  export function error(callback) {
    tracker = {
      saving: false,
      saved: false,
      error: true,
    };

    setTimeout(() => {
      tracker = {
        saving: false,
        saved: false,
        error: false,
      };
      /**
       * Fires an event when there is an error
       */
      fire("error");
      callback && callback();
    }, 1000);
  }

  $: err_text = error_text == "" ? text : error_text;
  $: icon_size = size == "large" ? "" : "small";

  // reviwed
</script>
