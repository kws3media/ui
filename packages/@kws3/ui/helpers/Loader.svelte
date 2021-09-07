<!--
  @component


  @param {string} [spinner_color="grey"] - Spinner color (grey | light | warning | info | danger | primary | success), Default: `"grey"`
  @param {string} [spinner_size="medium"] - Spinner size (small | medium | large), Default: `"medium"`
  @param {string} [background_color="transparent"] - Background color (transparent | warning | info | danger | primary | success | link), Default: `"transparent"`
  @param {string} [background_size="medium"] - Background size (small | medium | large | halfheight | fullheight), Default: `"medium"`
  @param {boolean} [is_inline=false] - Loader is inline, Default: `false`
  @param {boolean} [is_overlay=false] - Loader has overlay, Default: `false`
  @param {string} [style=""] - Inline CSS styles for loader, Default: `""`

-->
<div class={is_overlay ? "is-overlay" : ""}>
  <div
    class="kws-loader hero is-{background_color} is-{background_size}"
    {style}>
    <div
      class="hero-body is-{spinner_color} is-{spinner_size}"
      style={is_inline ? "padding:1rem" : ""}>
      &nbsp;
    </div>
  </div>
</div>

<script>
  /**
   * Color of the Spinner (grey | light | warning | info | danger | primary | success)
   * @link https://bulma.io/documentation/helpers/color-helpers/
   */
  export let spinner_color = "grey",
    /**
     * Size of the Spinner (small | medium | large)
     */
    spinner_size = "medium",
    /**
     * Backgound color of the Spinner container (transparent | warning | info | danger | primary | success | link)
     */
    background_color = "transparent",
    /**
     * Size of the Spinner container.  It can also accept css units such as 10px | 5rem | 100vh
     *
     * (small | medium | large | halfheight | fullheight)
     */
    background_size = "medium",
    /**
     * Determines if the Loader is inline or not
     */
    is_inline = false,
    /**
     * Determines if loader has overlay
     */
    is_overlay = false,
    /**
     * Inline CSS for Loader
     */
    style = "";

  let bg_size = ["small", "medium", "large", "halfheight", "fullheight"];

  $: if (
    bg_size.indexOf(background_size) == -1 &&
    typeof background_size == "string" &&
    background_size.length
  ) {
    let height = "height: " + background_size + ";";

    style =
      (style.length && style.charAt(style.length - 1) != ";"
        ? style + ";"
        : style) + height;
  }
</script>
