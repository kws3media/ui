<!--
  @component


  @param {string} [classes=""] - CSS classes, Default: `""`
  @param {string} [button_class=""] - CSS classes for button, Default: `""`
  @param {string} [text="Delete"] - Button text, Default: `"Delete"`
  @param {string} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="minus-circle"] - Icon of the Button - use any fa/gg/unicorn icons, Default: `"minus-circle"`
  @param {string} [color="danger"] - Color of the Button, Default: `"danger"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Icon showing after confirm - use any fa/gg/unicorn icons, Default: `"hourglass"`
  @param {string} [doing_text="Deleting..."] - Text showing after confirm, Default: `"Deleting..."`
  @param {string} [done_icon="check"] - Icon showing after success - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [done_text="Deleted"] - Text showing after success, Default: `"Deleted"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Icon Only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`

  ### Events
  - `error`
  - `erase`
  - `erased`

-->
<ConfirmButton
  {classes}
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
  on:error
  on:do={({ detail }) => fire("erase", detail)}
  on:done={({ detail }) => fire("erased", detail)} />

<script>
  import { ConfirmButton } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * CSS classes
   */
  export let classes = "",
    /**
     * CSS classes for button
     */
    button_class = "",
    /**
     * Button text
     */
    text = "Delete",
    /**
     * Size of the Button
     */
    size = "",
    /**
     * Icon of the Button - use any fa/gg/unicorn icons
     */
    icon = "minus-circle",
    /**
     * Color of the Button
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

  // reviwed
</script>
