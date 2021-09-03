<!--
  @component


  @param {string} [classes=""] - Additional classes, Default: `""`
  @param {string} [style=""] - Inline style of component, Default: `""`
  @param {boolean} [vertical=false] - Vertical Aligned - true/false, Default: `false`

  ### Slots
  - `<slot name="default"  />`

-->
<div
  class="sliding-pane-set {vertical ? 'is-vertical' : ''}  {classes}"
  {style}>
  <slot />
</div>

<script>
  /**
   * Additional classes
   * @type {string}
   */
  export let classes = "",
    /**
     * Inline style of component
     * @type {string}
     */
    style = "",
    /**
     * Vertical Aligned - true/false
     * @type {boolean}
     */
    vertical = false;
</script>
