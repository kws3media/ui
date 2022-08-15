<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the Button, Default: `"primary"`
  @param {string} [text="Save Changes"] - Button text, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Text displayed after submission is completed successfully, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Text displayed if submission is not successful, Default: `"Failed to Save"`
  @param {string} [icon="save"] - Name of the icon that is to be displayed in the button, Default: `"save"`
  @param {string} [cy="submit"] - data-cy attribute for cypress, Default: `"submit"`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {object} [tracker={}] - Tracker object to be sent from outside to change the state of the button., Default: `{}`
  @param {number} [completion_timeout=600] - How long to wait before `saved` event is fired, and the UI state reverts back to normal, Default: `600`
  @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
  @param {string} [class=""] - CSS classes for Button container, Default: `""`
  @method `saving()` - call this method on form saving state
  @method `saved(callback, timeout)` - call this method after form saved
  @method `error(callback, timeout)` - call this method on form error state

  ### Events
  - `saved` - Fired on successful submission
  - `error` - Fired when there is an error

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
  disabled={tracker.saved || tracker.saving || tracker.error || disabled}
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
   * @type {string|''|'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Color of the Button
     * @type {string|''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
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
    },
    /**
     * How long to wait before `saved` event is fired, and the UI state reverts back to normal
     */
    completion_timeout = 600,
    /**
     * How long to wait before `error` event is fired, and the UI state reverts back to normal
     */
    error_timeout = 3000;

  /**
   * CSS classes for Button container
   */
  let klass = "";
  export { klass as class };

  /**
   * call this method on form saving state
   */
  export function saving() {
    tracker = {
      saving: true,
      saved: false,
      error: false,
    };
  }

  /**
   * call this method after form saved
   */
  export function saved(callback, timeout = completion_timeout) {
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
       * Fired on successful submission
       */
      fire("saved");
      callback && callback();
    }, timeout);
  }

  /**
   * call this method on form error state
   */
  export function error(callback, timeout = error_timeout) {
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
       * Fired when there is an error
       */
      fire("error");
      callback && callback();
    }, timeout);
  }

  $: err_text = error_text === "" ? text : error_text;
  $: icon_size = size === "large" ? "" : "small";
</script>
