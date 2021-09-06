<!--
  @component

  @param {string} [color="transparent"] - Color of the Loader (transparent | warning | info | danger | primary), Default: `"transparent"`
  @param {string} [background_size="medium"] - Background size of the Loader (small | medium | large), Default: `"medium"`
  @param {string} [spinner_size="medium"] - Spinner size of the Loader (small | medium | large), Default: `"medium"`
  @param {boolean} [is_inline=false] - Loader is inline, Default: `false`
  @param {string} [style=""] - Inline CSS styles for loader, Default: `""`

-->

<div
  class="kws-loader hero is-{background_color} is-{background_size} has-spinner-{spinner_size}"
  {style}>
  <div class="hero-body" style={is_inline ? "padding:1rem" : ""}>&nbsp;</div>
</div>

<script>
  /**
   * Spinner color (transparent | warning | info | danger | primary)
   */
  export let spinner_color = "transparent",
    /**
     * Spinner size (small | medium | large)
     */
    spinner_size = "medium",
    /**
     * Background color (small | medium | large)
     */
    background_color = "transparent",
    /**
     * Background size (small | medium | large)
     */
    background_size = "medium",
    /**
     * Loader is inline
     */
    is_inline = false,
    /**
     * Inline CSS styles for loader
     */
    style = "";
</script>
