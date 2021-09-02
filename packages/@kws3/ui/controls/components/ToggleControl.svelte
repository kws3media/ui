<!--
  @component


  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [style=""] - Style property, Default: `""`
  @param {string} [cy=""] - Cy property, Default: `""`

  ### Slots
  - `<slot name="default"  />`

-->
<div class="togglebox {classes}" {style} data-cy={cy}>
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
   * Supported classes
   * @type {string}
   */
  export let classes = "",
    /**
     * Inline styles
     * @type {string}
     */
    style = "",
    /**
     * data-cy attribute for cypress
     * @type {string}
     */
    cy = "";
</script>
