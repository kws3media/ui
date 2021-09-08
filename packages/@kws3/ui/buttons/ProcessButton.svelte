<!--
  @component
  

  @param {string} [button_class=""] - `CONST` Additional class for button, Default: `""`
  @param {string} [text="Click Me"] - `CONST` Button text, Default: `"Click Me"`
  @param {'small'|'medium'|'large'} [size=""] - `CONST` Size of the Button, Default: `""`
  @param {string} [icon="check"] - `CONST` Icon of the Button - use any fa/gg/unicorn icons, Default: `"check"`
  @param {'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [color="primary"] - `CONST` Color of the Button, Default: `"primary"`
  @param {string} [cy=""] - `CONST` data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - `CONST` Icon showing after confirm - use any fa/gg/unicorn icons, Default: `"hourglass"`
  @param {string} [doing_text="Doing..."] - `CONST` Text showing after confirm, Default: `"Doing..."`
  @param {string} [done_icon="check"] - `CONST` Icon showing after success - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [done_text="Done"] - `CONST` Text showing after success, Default: `"Done"`
  @param {object} [context=null] - `CONST` Context property, Default: `null`
  @param {boolean} [icon_only=false] - `CONST` Icon Only - true/false, Default: `false`
  @param {boolean} [disabled=false] - `CONST` Disabled - true/false, Default: `false`
  @param {string} [class=""] - `CONST` CSS class for button container, Default: `""`

  ### Events
  - `doing` - fires an event on doing
  - `done` - fires an event on complete
  - `error` - fires an event on error

-->
<ConfirmButton
  {...properties}
  can_confirm={false}
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
  export const button_class = "",
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
     * Icon of the Button - use any fa/gg/unicorn icons
     */
    icon = "check",
    /**
     * Color of the Button
     * @type {'dark' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
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
  const klass = "";
  export { klass as class };

  $: properties = { ...$$props };

  function doing({ detail }) {
    /**
     * fires an event on doing
     */
    fire("doing", detail);
  }

  function done({ detail }) {
    /**
     * fires an event on complete
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
