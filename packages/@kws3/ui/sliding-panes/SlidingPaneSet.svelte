<!--
  @component


  @param {string} [style=""] - Inline style of component, Default: `""`
  @param {boolean} [vertical=false] - Vertical transform of SlidingPane., Default: `false`
  @param {string} [class=""] - CSS classes for the SlidingPaneSet, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div class="sliding-pane-set {vertical ? 'is-vertical' : ''}  {klass}" {style}>
  <slot />
</div>

<script>
  //@ts-nocheck
  /**
   * Inline style of component
   */
  export let style = "",
    /**
     * Vertical transform of SlidingPane.
     */
    vertical = false;

  /**
   * CSS classes for the SlidingPaneSet
   */
  let klass = "";
  export { klass as class };
</script>
