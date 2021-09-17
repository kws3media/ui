<a
  href={"javascript:void(0)"}
  class="kws-clipboard-copier"
  on:click={copyToClipboard}
  data-tooltip={copied ? copied_text : text}>
  <slot />
  <Icon
    icon={copied ? copied_icon : icon}
    size="small"
    color={copied ? "success" : ""}
    icon_class={copied ? "is-bouncing-once" : ""} />
</a>

<script>
  import { Icon } from "@kws3/ui";

  export let text = "Copy to clipboard",
    icon = "copy",
    copied_text = "Copied!",
    copied_icon = "check",
    copy = "",
    copied = false;

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
