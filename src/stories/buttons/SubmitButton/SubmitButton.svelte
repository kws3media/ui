<!--
  @component


  @param {ColorOptions} [color=primary] - Color of the Button, Default: `primary`
  @param {SizeOptions} [size=] - Size of the Button, Default: ``
  @param {string} [text="Save Changes"] - Text property, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Saved_text property, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Error_text property, Default: `"Failed to Save"`
  @param {boolean} [icon_only=false] - Icon_only property, Default: `false`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`
  @param {string} [icon=""] - Icon property, Default: `""`
  @param {object} [tracker={}] - Tracker property, Default: `{}`
  @param {number} [completion_timeout=600] - Completion_timeout property, Default: `600`
  @param {number} [error_timeout=3000] - Error_timeout property, Default: `3000`
  @param {string} [class=""] - Class property, Default: `""`
  @method `success()` - Success method
  @method `failed()` - Failed method

-->
<div class="columns">
  <div class="column">
    <form action="" on:submit|preventDefault={success}>
      <KwsButton
        {text}
        {saved_text}
        {error_text}
        {color}
        {size}
        {icon_only}
        {disabled}
        class={klass}
        {icon}
        {tracker}
        bind:this={BUTTON_1} />
      <p class="is-block mt-2">This will succeed.</p>
    </form>
  </div>
  <div class="column">
    <form action="" on:submit|preventDefault={failed}>
      <KwsButton
        {text}
        {saved_text}
        {error_text}
        {color}
        {size}
        {icon_only}
        {disabled}
        class={klass}
        {icon}
        {tracker}
        {completion_timeout}
        {error_timeout}
        bind:this={BUTTON_2} />
      <p class="is-block mt-2">This will fail.</p>
    </form>
  </div>
</div>

<script>
  import { SubmitButton as KwsButton } from "@kws3/ui";

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Color of the Button
   * @type {ColorOptions}
   */
  export let color = "primary",
    /**
     * Size of the Button
     * @type {SizeOptions}
     */
    size = "",
    text = "Save Changes",
    saved_text = "Saved",
    error_text = "Failed to Save",
    icon_only = false,
    disabled = false,
    icon = "",
    tracker = {
      saving: false,
      saved: false,
      error: false,
    },
    completion_timeout = 600,
    error_timeout = 3000;

  let klass = "";
  export { klass as class };

  let BUTTON_1 = null;
  let BUTTON_2 = null;

  export function success() {
    BUTTON_1.saving();
    setTimeout(() => {
      BUTTON_1.saved();
    }, 1000);
  }

  export function failed() {
    BUTTON_2.saving();
    setTimeout(() => {
      BUTTON_2.error();
    }, 1000);
  }
</script>
