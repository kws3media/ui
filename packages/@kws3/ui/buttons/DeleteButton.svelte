<!--
  @component


  @param {string} [button_class=""] - CSS classes for the Delete button, Default: `""`
  @param {string} [text="Delete"] - Button text, Default: `"Delete"`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="minus-circle"] - Name of the icon that is to be displayed in the button, Default: `"minus-circle"`
  @param {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="danger"] - Color of the Button, Default: `"danger"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Doc and property to be deleted, Default: `"hourglass"`
  @param {string} [doing_text="Deleting..."] - Text showing after confirm, Default: `"Deleting..."`
  @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
  @param {string} [done_text="Deleted"] - Button text displayed after task is completed successfully, Default: `"Deleted"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {string} [class=""] - CSS classes for the button container, Default: `""`

  ### Events
  - `erase` - Fires an event when user confirms delete
  - `erased` - Fires an event when deletion completes
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
  on:do={({ detail }) =>
    /**
     * Fires an event when user confirms delete
     */
    fire("erase", detail)}
  on:done={({ detail }) =>
    /**
     * Fires an event when deletion completes
     */
    fire("erased", detail)}
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
   * CSS classes for the Delete button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "Delete",
    /**
     * Size of the Button
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "minus-circle",
    /**
     * Color of the Button
     * @type {''|'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
     */
    color = "danger",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Doc and property to be deleted
     */
    doing_icon = "hourglass",
    /**
     * Text showing after confirm
     */
    doing_text = "Deleting...",
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
    disabled = false;

  /**
   * CSS classes for the button container
   */
  let klass = "";
  export { klass as class };

  // reviwed
</script>
