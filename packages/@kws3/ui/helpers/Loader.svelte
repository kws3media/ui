<!--
  @component


  @param {string} [spinner_color="light"] - Spinner color (light | warning | info | danger | primary | success), Default: `"light"`
  @param {string} [spinner_size="medium"] - Spinner size (small | medium | large), Default: `"medium"`
  @param {string} [background_color="transparent"] - Background color (transparent | warning | info | danger | primary | success | link), Default: `"transparent"`
  @param {string} [background_size="medium"] - Background size (small | medium | large | halfheight | fullheight), Default: `"medium"`
  @param {boolean} [is_inline=false] - Loader is inline, Default: `false`
  @param {string} [style=""] - Inline CSS styles for loader, Default: `""`

-->

<div class="kws-loader hero is-{background_color} is-{background_size}" {style}>
  <div
    class="hero-body is-{spinner_color} is-{spinner_size}"
    style={is_inline ? "padding:1rem" : ""}>
    &nbsp;
  </div>
</div>

<script>
  /**
   * Spinner color (grey | light | warning | info | danger | primary | success)
   */
  export let spinner_color = "grey",
    /**
     * Spinner size (small | medium | large)
     */
    spinner_size = "medium",
    /**
     * Background color (transparent | warning | info | danger | primary | success | link)
     */
    background_color = "transparent",
    /**
     * Background size (small | medium | large | halfheight | fullheight)
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
