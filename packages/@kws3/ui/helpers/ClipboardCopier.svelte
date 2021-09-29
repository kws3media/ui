<!--
  @component


  @param {string} [text="Copy to clipboard"] - Default tooltip text, Default: `"Copy to clipboard"`
  @param {string} [icon="copy"] - Icon to be used as the copy button, Default: `"copy"`
  @param {string} [copied_text="Copied!"] - Tooltip displayed after a succesful copy operation, Default: `"Copied!"`
  @param {string} [copied_icon="check"] - Icon displayed on successful copy operation, Default: `"check"`
  @param {string} [copy=""] - Text to be copied into clipboard, Default: `""`
  @param {boolean} [copied=false] - Determines if the copy operation has taken place, Default: `false`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [copied_icon_color="success"] - Colour of the Icon after a succesful copy operation

If `''` is selected, Icon will not change colour after copying, Default: `"success"`
  @param {string} [class=""] - CSS classes for the whole component, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Description label displayed before copy icon

-->
<span
  bind:this={el}
  class="kws-clipboard-copier {klass} has-tooltip"
  on:click={copyToClipboard}
  data-tippy-hideOnClick="false"
  data-tooltip={copied ? copied_text : text}>
  <!--Description label displayed before copy icon--><slot />
  <Icon
    icon={copied ? copied_icon : icon}
    size="small"
    color={copied ? copied_icon_color : ""}
    class={copied ? "is-bouncing-once" : ""} />
</span>

<style lang="scss">
  span {
    cursor: pointer;
  }
</style>

<script>
  import { tick } from "svelte";
  import { Icon } from "@kws3/ui";

  /**
   * Default tooltip text
   */
  export let text = "Copy to clipboard",
    /**
     * Icon to be used as the copy button
     */
    icon = "copy",
    /**
     * Tooltip displayed after a succesful copy operation
     */
    copied_text = "Copied!",
    /**
     * Icon displayed on successful copy operation
     */
    copied_icon = "check",
    /**
     * Text to be copied into clipboard
     */
    copy = "",
    /**
     * Determines if the copy operation has taken place
     */
    copied = false,
    /**
     * Colour of the `copied_icon` after a succesful copy operation
     *
     * If `''` is selected, Icon will not change colour after copying
     *
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    copied_icon_color = "success";

  /**
   * CSS classes for the whole component
   */
  let klass = "";
  export { klass as class };

  let el;

  function copyToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.textContent = copy;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    copied = true;
    updateTooltip();
    setTimeout(() => {
      copied = false;
      updateTooltip();
    }, 3000);
  }

  function updateTooltip() {
    tick().then(() => {
      el && el._tippy && el._tippy.setContent(el.getAttribute("data-tooltip"));
    });
  }
</script>
