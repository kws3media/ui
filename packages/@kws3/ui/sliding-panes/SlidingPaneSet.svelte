<!--
  @component


  @param {string} [classes=""] - Additional classes, Default: `""`
  @param {string} [style=""] - Inline style of component, Default: `""`
  @param {boolean} [vertical=false] - Vertical Aligned - true/false, Default: `false`

  ### Slots
  - `<slot name="default"  />`

-->
<div class="sliding-pane-set {vertical ? 'is-vertical' : ''}  {klass}" {style}>
  <slot />
</div>

<script>
  /**
   * Inline style of component
   */
  export let style = "",
    /**
     * Vertical Alignment
     */
    vertical = false;

  /**
   * CSS classes for the SlidingPaneSet
   */
  let klass = "";
  export { klass as class };
</script>
