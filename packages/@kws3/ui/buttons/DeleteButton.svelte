<!--
  @component

  @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
  @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions

  @param {string} [button_class=""] - CSS classes for the Delete button, Default: `""`
  @param {string} [text="Delete"] - Button text, Default: `"Delete"`
  @param {SizeOptions} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="minus-circle"] - Name of the icon that is to be displayed in the button, Default: `"minus-circle"`
  @param {ColorOptions} [color="danger"] - Color of the Button, Default: `"danger"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
  @param {string} [done_text="Deleted"] - Button text displayed after task is completed successfully, Default: `"Deleted"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {number} [completion_timeout=600] - How long to wait before `erased` event is fired, and the UI state reverts back to normal, Default: `600`
  @param {number} [error_timeout=3000] - How long to wait before `error` event is fired, and the UI state reverts back to normal, Default: `3000`
  @param {string} [class=""] - CSS classes for the button container, Default: `""`

  ### Events
  - `erase` - Fired when user confirms delete
  - `erased` - Fired when deletion completes
  - `error` - Fired when there is an error

-->
<ConfirmButton
  {button_class}
  {text}
  {size}
  {icon}
  {color}
  {cy}
  {done_icon}
  {done_text}
  {context}
  {icon_only}
  {disabled}
  {completion_timeout}
  {error_timeout}
  class={klass}
  on:do={({ detail }) =>
    /**
     * Fired when user confirms delete
     */
    fire("erase", detail)}
  on:done={({ detail }) =>
    /**
     * Fired when deletion completes
     */
    fire("erased", detail)}
  on:error={({ detail }) =>
    /**
     * Fired when there is an error
     */
    fire("error", detail)} />

<script>
  import { ConfirmButton } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * CSS classes for the Delete button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "Delete",
    /**
     * Size of the Button
     * @type {SizeOptions} size
     */
    size = "",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "minus-circle",
    /**
     * Color of the Button
     * @type {ColorOptions} color
     */
    color = "danger",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Name of the icon displayed after task is completed successfully
     */
    done_icon = "check",
    /**
     * Button text displayed after task is completed successfully
     */
    done_text = "Deleted",
    /**
     * Context property
     */
    context = null,
    /**
     * Removes text, and text space in the button
     */
    icon_only = false,
    /**
     * Disables the button when `true`
     */
    disabled = false,
    /**
     * How long to wait before `erased` event is fired, and the UI state reverts back to normal
     */
    completion_timeout = 600,
    /**
     * How long to wait before `error` event is fired, and the UI state reverts back to normal
     */
    error_timeout = 3000;

  /**
   * CSS classes for the button container
   */
  let klass = "";
  export { klass as class };

  // reviwed
</script>
