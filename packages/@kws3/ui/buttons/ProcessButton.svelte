<!--
  @component


  @param {string} [button_class=""] - CSS classes for the Process button, Default: `""`
  @param {string} [text="Click Me"] - Button text, Default: `"Click Me"`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="check"] - Name of the icon that is to be displayed in the button, Default: `"check"`
  @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="primary"] - Color of the Button, Default: `"primary"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Icon showing after confirm - use any fa/gg/unicorn icons, Default: `"hourglass"`
  @param {string} [doing_text="Doing..."] - Text displayed after task is completed successfully, Default: `"Doing..."`
  @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
  @param {string} [done_text="Done"] - Button text displayed after task is completed successfully, Default: `"Done"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {string} [class=""] - CSS classes for button container, Default: `""`

  ### Events
  - `do` - Fires an event when user presses button
  - `done` - Fires an event when task completes successfully
  - `error` - Fires an event when there is an error

-->
<ConfirmButton
  {button_class}
  {text}
  {size}
  {icon}
  {color}
  {cy}
  {doing_icon}
  {doing_text}
  {done_icon}
  {done_text}
  {context}
  {icon_only}
  {disabled}
  class={klass}
  should_confirm={false}
  on:do={({ detail }) =>
    /**
     * Fires an event when user presses button
     */
    fire("do", detail)}
  on:done={({ detail }) =>
    /**
     * Fires an event when task completes successfully
     */
    fire("done", detail)}
  on:error={({ detail }) =>
    /**
     * Fires an event when there is an error
     */
    fire("error", detail)} />

<script>
  import { ConfirmButton } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

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
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "check",
    /**
     * Color of the Button
     * @type {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
     */
    color = "primary",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Icon showing after confirm - use any fa/gg/unicorn icons
     */
    doing_icon = "hourglass",
    /**
     * Text displayed after task is completed successfully
     */
    doing_text = "Doing...",
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
     */
    context = null,
    /**
     * Removes text, and text space in the button
     */
    icon_only = false,
    /**
     * Disables the button when `true`
     */
    disabled = false;

  /**
   * CSS classes for button container
   */
  let klass = "";
  export { klass as class };

  // reviwed
</script>
