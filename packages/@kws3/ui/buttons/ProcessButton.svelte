<!--
  @component


  @param {string} [button_class=""] - CSS classes for the Process button, Default: `""`
  @param {string} [text="Click Me"] - Button text, Default: `"Click Me"`
  @param {SizeOptions} [size=] - Size of the Button, Default: ``
  @param {string} [icon="check"] - Name of the icon that is to be displayed in the button, Default: `"check"`
  @param {ColorOptions} [color=primary] - Color of the Button, Default: `primary`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
  @param {string} [done_text="Done"] - Button text displayed after task is completed successfully, Default: `"Done"`
  @param {string} [context=""] - Context property, Default: `""`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {number} [completion_timeout=600] - Specifies the duration to wait after the `done` event, before the UI state returns to normal, Default: `600`
  @param {number} [error_timeout=3000] - Specifies the duration to wait after the `error` event, before the UI state returns to normal, Default: `3000`
  @param {string} [class=""] - CSS classes for button container, Default: `""`

  ### Events
  - `do` - Fired when user presses button
  - `done` - Fired when task completes successfully
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
  should_confirm={false}
  on:do={({ detail }) =>
    /**
     * Fired when user presses button
     */
    fire("do", detail)}
  on:done={({ detail }) =>
    /**
     * Fired when task completes successfully
     */
    fire("done", detail)}
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
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * CSS classes for the Process button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "Click Me",
    /**
     * Size of the Button
     * @type {SizeOptions}
     */
    size = "",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "check",
    /**
     * Color of the Button
     * @type {ColorOptions}
     */
    color = "primary",
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
    done_text = "Done",
    /**
     * Context property
     * @type {any}
     */
    context = "",
    /**
     * Removes text, and text space in the button
     */
    icon_only = false,
    /**
     * Disables the button when `true`
     */
    disabled = false,
    /**
     * Specifies the duration to wait after the `done` event, before the UI state returns to normal
     */
    completion_timeout = 600,
    /**
     * Specifies the duration to wait after the `error` event, before the UI state returns to normal
     */
    error_timeout = 3000;

  /**
   * CSS classes for button container
   */
  let klass = "";
  export { klass as class };

  // reviwed
</script>
