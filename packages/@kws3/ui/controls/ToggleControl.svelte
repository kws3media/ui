<!--
  @component


  @param {string} [style=""] - Inline css for ToggleControl, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [class=""] - CSS classes for ToggleControl, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div class="togglebox {klass}" {style} data-cy={cy}>
  <slot />
</div>

<style lang="scss">
  .togglebox {
    display: flex;
    align-items: center;
    min-height: 40px;
    padding-top: 0.75rem;
    :global(.label) {
      flex: 1;
      line-height: 1;
      margin-bottom: 0;
    }
    :global(.toggle-button),
    :global(.toggle-buttons) {
      flex: none;
      margin-left: 0.5rem;
    }
  }
</style>

<script>
  /**
   * Inline css for ToggleControl
   */
  export let style = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  /**
   * CSS classes for ToggleControl
   */
  let klass = "";
  export { klass as class };
</script>
