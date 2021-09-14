<!--
  @component


  @param {boolean} [open=false] - Determines whether the ActionSheet is open or closed, Default: `false`
  @param {boolean} [closable=true] - Determines whether the ActionSheet is closable

If `false` , the component won't have a close button, and will not close on clicking outside the component, Default: `true`
  @param {string} [close_icon="times-circle"] - Close icon, Default: `"times-circle"`
  @param {boolean} [close_on_click_outside=false] - Determines if the ActionSheet can be closed by clicking anywhere outside the component

`closable` needs to be `true` for this to work, Default: `false`
  @param {string} [style=""] - Inline CSS for the ActionSheet, Default: `""`
  @param {string} [class=""] - CSS classes for the ActionSheet, Default: `""`

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
   * Determines whether the ActionSheet is open or closed
   */
  export let open = false,
    /**
     * Determines whether the ActionSheet is closable
     *
     * If `false` , the component won't have a close button, and will not close on clicking outside the component
     */
    closable = true,
    /**
     * Close icon
     */
    close_icon = "times-circle",
    /**
     * Determines if the ActionSheet can be closed by clicking anywhere outside the component
     *
     * `closable` needs to be `true` for this to work
     */
    close_on_click_outside = false,
    /**
     * Inline CSS for the ActionSheet
     */
    style = "";

  /**
   * CSS classes for the ActionSheet
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
