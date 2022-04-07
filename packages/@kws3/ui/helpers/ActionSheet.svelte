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
  class="modal kws-action-sheet-outer {klass} {is_active ? 'is-active' : ''}"
  {style}>
  {#if is_active}<div
      transition:fade={{ duration: transitionDuration }}
      class="modal-background"
      on:click={clickOutside} />
    <div
      transition:fly={{
        duration: transitionDuration,
        y: 300,
        delay: transitionDelay,
      }}
      class="kws-action-sheet {inner_class}"
      style={inner_style}>
      {#if closable}
        <button class="delete is-pulled-right" type="button" on:click={close} />
      {/if}
      <!--Used to display sheet content--><slot />
    </div>{/if}
</div>

<script>
  import { fade, fly } from "svelte/transition";
  import { hasTransitions } from "../settings";
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

  $: transitionDuration = $hasTransitions ? 150 : 0;
  $: transitionDelay = $hasTransitions ? 50 : 0;

  function clickOutside() {
    if (close_on_click_outside && closable) {
      is_active = false;
    }
  }

  function close() {
    is_active = false;
  }
</script>
