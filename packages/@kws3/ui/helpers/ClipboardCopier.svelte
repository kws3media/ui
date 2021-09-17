<span
  class="kws-clipboard-copier {klass} has-tooltip"
  on:click={copyToClipboard}
  data-tooltip={copied ? copied_text : text}>
  <!--Used to display clipboard text--><slot />
  <Icon
    icon={copied ? copied_icon : icon}
    size="small"
    color={copied ? copied_icon_color : ""}
    icon_class={copied ? "is-bouncing-once" : ""} />
</span>

<style lang="scss">
  span {
    cursor: pointer;
  }
</style>

<script>
  import { Icon } from "@kws3/ui";

  /**
   * Default tooltip text
   */
  export let text = "Copy to clipboard",
    /**
     * Icon of the Clipboard copier
     */
    icon = "copy",
    /**
     * Tooltip displayed after copy text
     */
    copied_text = "Copied!",
    /**
     * Icon for displaying after successful copy
     */
    copied_icon = "check",
    /**
     * Text copied into clipboard
     */
    copy = "",
    /**
     * State after copy
     */
    copied = false,
    /**
     * Color of the Icon
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    copied_icon_color = "success";

  /**
   * Additional CSS classes
   */
  let klass = "";
  export { klass as class };

  function copyToClipboard() {
    const textArea = document.createElement("textarea");
    textArea.textContent = copy;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    copied = true;
    setTimeout(() => {
      copied = false;
    }, 3000);
  }
</script>
