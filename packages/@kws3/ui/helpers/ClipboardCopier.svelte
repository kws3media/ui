<a
  href={"javascript:void(0)"}
  class="kws-clipboard-copier has-text-{color} {text_size} {klass}"
  on:click={copyToClipboard}
  data-tooltip={copied ? copied_text : text}>
  <!--Used to display clipboard text--><slot />
  <Icon
    icon={copied ? copied_icon : icon}
    {size}
    color={copied ? "success" : color}
    icon_class={copied ? "is-bouncing-once" : ""} />
</a>

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
     * Size of the Icon
     *  @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the Icon
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "";

  /**
   * Additional CSS classes
   */
  let klass = "";
  export { klass as class };

  let text_size = "";
  let sizeArr = {
    small: "is-size-7",
    medium: "is-size-6",
    large: "is-size-5",
  };

  $: {
    text_size = sizeArr[size];
  }

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
