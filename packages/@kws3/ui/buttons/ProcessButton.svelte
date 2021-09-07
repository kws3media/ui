<!--
  @component


  @param {string} [button_class=""] - Additional class for button, Default: `""`
  @param {string} [text="Click Me"] - Button text, Default: `"Click Me"`
  @param {string} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="check"] - Icon of the Button - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [color="primary"] - Color of the Button, Default: `"primary"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Icon showing after confirm - use any fa/gg/unicorn icons, Default: `"hourglass"`
  @param {string} [doing_text="Doing..."] - Text showing after confirm, Default: `"Doing..."`
  @param {string} [done_icon="check"] - Icon showing after success - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [done_text="Done"] - Text showing after success, Default: `"Done"`
  @param {object} [context=null] - Context property, Default: `null`
  @param {boolean} [icon_only=false] - Icon Only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {string} [class=""] - `CONST` CSS class for button container, Default: `""`

  ### Events
  - `doing` - fires an event on doing
  - `done` - fires an event on error
  - `error` - fires an event on error

-->
<ConfirmButton
  can_confirm={false}
  class={klass}
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
  on:error={error}
  on:do={doing}
  on:done={done} />

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
    text = "Click Me",
    /**
     * Size of the Button
     */
    size = "",
    /**
     * Icon of the Button - use any fa/gg/unicorn icons
     */
    icon = "check",
    /**
     * Color of the Button
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
     * Text showing after confirm
     */
    doing_text = "Doing...",
    /**
     * Icon showing after success - use any fa/gg/unicorn icons
     */
    done_icon = "check",
    /**
     * Text showing after success
     */
    done_text = "Done",
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

  function doing({ detail }) {
    /**
     * fires an event on doing
     */
    fire("doing", detail);
  }

  function done({ detail }) {
    /**
     * fires an event on error
     */
    fire("done", detail);
  }

  function error(e) {
    /**
     * fires an event on error
     */
    fire("error", e);
  }

  // reviwed
</script>
