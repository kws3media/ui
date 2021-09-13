<!--
  @component


  @param {boolean} [open=false] - Open Action Sheet, Default: `false`
  @param {boolean} [closable=true] - Clasable action sheet, Default: `true`
  @param {string} [close_icon="times-circle"] - Close icon, Default: `"times-circle"`
  @param {boolean} [close_on_click_outside=false] - Determines if a closable modal can be closed by clicking anywhere outside the modal, Default: `false`
  @param {string} [style=""] - Inline css of action sheet, Default: `""`
  @param {string} [class=""] - CSS class of action sheet, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used to display sheet content

-->
<div
  class="action-modal-background"
  on:click={closable && close_on_click_outside
    ? () => (open = false)
    : undefined}
  style={bgComputedStyle} />
<div class="action-modal {klass}" style={sheetComputedStyle}>
  {#if closable}
    <span class="action-modal_close" on:click={() => (open = false)}>
      <Icon icon={close_icon} />
    </span>
  {/if}
  <!--Used to display sheet content--><slot />
</div>

<script>
  import { tweened } from "svelte/motion";
  import { Icon } from "@kws3/ui";
  /**
   * Open Action Sheet
   */
  export let open = false,
    /**
     * Clasable action sheet
     */
    closable = true,
    /**
     * Close icon
     */
    close_icon = "times-circle",
    /**
     * Determines if a closable modal can be closed by clicking anywhere outside the modal
     */
    close_on_click_outside = false,
    /**
     * Inline css of action sheet
     */
    style = "";

  /**
   * CSS class of action sheet
   */
  let klass = "";
  export { klass as class };

  const tween = tweened(1, {
    duration: 200,
  });

  $: if (open) {
    tween.set(0);
  } else {
    tween.set(1);
  }

  let bgComputedStyle = "",
    sheetComputedStyle = "";

  $: {
    bgComputedStyle = `opacity:${1 - $tween};visibility:${
      1 - $tween <= 0 ? "hidden" : "visible"
    }`;

    sheetComputedStyle = `transform:translateY(${$tween * 200}%);visibility:${
      1 - $tween <= 0 ? "hidden" : "visible"
    };${style}`;
  }
</script>
