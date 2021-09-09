<!--
  @component


  @param {string} [button_class=""] - Additional class for button, Default: `""`
  @param {string} [text="Delete"] - Button text, Default: `"Delete"`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="minus-circle"] - Icon of the Button - use any fa/gg/unicorn icons, Default: `"minus-circle"`
  @param {'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="danger"] - Color of the Button, Default: `"danger"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Icon showing after confirm - use any fa/gg/unicorn icons, Default: `"hourglass"`
  @param {string} [doing_text="Deleting..."] - Text showing after confirm, Default: `"Deleting..."`
  @param {string} [done_icon="check"] - Icon showing after success - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [done_text="Deleted"] - Text showing after success, Default: `"Deleted"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Icon Only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {string} [class=""] - CSS class for button container, Default: `""`

  ### Events
  - `erase` - fires an event on erase
  - `erased` - fires an event after erased
  - `error` - fires an event on error

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
     * fires an event on erase
     */
    fire("erase", detail)}
  on:done={({ detail }) =>
    /**
     * fires an event after erased
     */
    fire("erased", detail)}
  on:error={({ detail }) =>
    /**
     * fires an event on error
     */
    fire("error", detail)} />

<script>
  import { ConfirmButton } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * Additional class for button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "Delete",
    /**
     * Size of the Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Icon of the Button - use any fa/gg/unicorn icons
     */
    icon = "minus-circle",
    /**
     * Color of the Button
     * @type {'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
     */
    color = "danger",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Icon showing after confirm - use any fa/gg/unicorn icons
     */
    doing_icon = "hourglass",
    /**
     * Text showing after confirm
     */
    doing_text = "Deleting...",
    /**
     * Icon showing after success - use any fa/gg/unicorn icons
     */
    done_icon = "check",
    /**
     * Text showing after success
     */
    done_text = "Deleted",
    /**
     * Context property
     */
    context = null,
    /**
     * Icon Only - true/false
     */
    icon_only = false,
    /**
     * Disabled - true/false
     */
    disabled = false;

  /**
   * CSS class for button container
   */
  let klass = "";
  export { klass as class };

  // reviwed
</script>
