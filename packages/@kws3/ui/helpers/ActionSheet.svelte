<!--
  @component


  @param {boolean} [is_active=false] - Determines whether the ActionSheet is open or closed, Default: `false`
  @param {boolean} [closable=true] - Determines whether the ActionSheet is closable

If `false` , the component won't have a close button, and will not close on clicking outside the component, Default: `true`
  @param {boolean} [close_on_click_outside=false] - Determines if the ActionSheet can be closed by clicking anywhere outside the component

`closable` needs to be `true` for this to work, Default: `false`
  @param {string} [style=""] - Inline CSS for the ActionSheet, Default: `""`
  @param {string} [inner_style=""] - Inline CSS for ActionSheet content, Default: `""`
  @param {string} [inner_class=""] - CSS classes for ActionSheet content, Default: `""`
  @param {string} [class=""] - CSS classes for the ActionSheet, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Used to display sheet content

-->
<div
  class="action-modal-background {klass}"
  on:click={closable && close_on_click_outside
    ? () => (is_active = false)
    : undefined}
  style={bgComputedStyle} />
<div class="action-modal {inner_class}" style={sheetComputedStyle}>
  {#if closable}
    <button
      class="delete is-pulled-right"
      type="button"
      on:click={() => (is_active = false)} />
  {/if}
  <!--Used to display sheet content--><slot />
</div>

<script>
  import { tweened } from "svelte/motion";
  /**
   * Determines whether the ActionSheet is open or closed
   */
  export let is_active = false,
    /**
     * Determines whether the ActionSheet is closable
     *
     * If `false` , the component won't have a close button, and will not close on clicking outside the component
     */
    closable = true,
    /**
     * Determines if the ActionSheet can be closed by clicking anywhere outside the component
     *
     * `closable` needs to be `true` for this to work
     */
    close_on_click_outside = false,
    /**
     * Inline CSS for the ActionSheet
     */
    style = "",
    /**
     * Inline CSS for ActionSheet content
     */
    inner_style = "",
    /**
     * CSS classes for ActionSheet content
     */
    inner_class = "";

  /**
   * CSS classes for the ActionSheet
   */
  let klass = "";
  export { klass as class };

  const tween = tweened(1, {
    duration: 200,
  });

  $: if (is_active) {
    tween.set(0);
  } else {
    tween.set(1);
  }

  let bgComputedStyle = "",
    sheetComputedStyle = "";

  $: {
    bgComputedStyle = `opacity:${1 - $tween};visibility:${
      1 - $tween <= 0 ? "hidden" : "visible"
    };${inner_style}`;

    sheetComputedStyle = `transform:translateY(${$tween * 200}%);visibility:${
      1 - $tween <= 0 ? "hidden" : "visible"
    };${style}`;
  }
</script>
