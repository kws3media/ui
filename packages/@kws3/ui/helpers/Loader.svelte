<!--
  @component


  @param {ExtendedColorOptions} [spinner_color=grey] - Color of the Spinner, Default: `grey`
  @param {SizeOptions} [spinner_size=medium] - Size of the Spinner, Default: `medium`
  @param {BGColorOptions} [background_color=transparent] - Backgound color of the Spinner container, Default: `transparent`
  @param {string} [background_size="medium"] - Size of the Spinner container. It can also accept css units

**Examples:** `small` | `medium` | `large` | `halfheight` | `fullheight` | `10px` | `5rem` | `100vh`, Default: `"medium"`
  @param {boolean} [is_inline=false] - Determines if the Loader is inline or not, Default: `false`
  @param {boolean} [has_overlay=false] - Determines if loader is displayed on top of a semi-transparent overlay.

`background_color` is ignored when this is set to `true`

The overlay is absolutely positioned. Ensure that the parent container is relatively positioned when using this., Default: `false`
  @param {string} [style=""] - Inline CSS for Loader, Default: `""`
  @param {string} [class=""] - CSS class for Loader, Default: `""`

-->
<div class={has_overlay ? "is-overlay" : ""}>
  <div
    class="kws-loader hero is-{background_color} is-{_background_size} {klass}"
    style={_style}>
    <div
      class="hero-body is-{spinner_color} is-{spinner_size}"
      style={is_inline ? "padding:1rem" : ""}>
      &nbsp;
    </div>
  </div>
</div>

<script>
  /**

   * @typedef {import('@kws3/ui/types').ExtendedColorOptions} ExtendedColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   * @typedef {import('@kws3/ui/types').BGColorOptions} BGColorOptions
   *
   */
  /**
   * Color of the Spinner
   * @link https://bulma.io/documentation/helpers/color-helpers/
   * @type {ExtendedColorOptions}
   */
  export let spinner_color = "grey",
    /**
     * Size of the Spinner
     * @type {SizeOptions}
     */
    spinner_size = "medium",
    /**
     * Backgound color of the Spinner container
     * @type {BGColorOptions}
     */
    background_color = "transparent",
    /**
     * Size of the Spinner container. It can also accept css units
     *
     * **Examples:** `small` | `medium` | `large` | `halfheight` | `fullheight` | `10px` | `5rem` | `100vh`
     */
    background_size = "medium",
    /**
     * Determines if the Loader is inline or not
     */
    is_inline = false,
    /**
     * Determines if loader is displayed on top of a semi-transparent overlay.
     *
     * `background_color` is ignored when this is set to `true`
     *
     * The overlay is absolutely positioned. Ensure that the parent container is relatively positioned when using this.
     */
    has_overlay = false,
    /**
     * Inline CSS for Loader
     */
    style = "";

  /**
   * CSS class for Loader
   * @type {string}
   */
  let klass = "";
  export { klass as class };

  let bg_sizes = ["small", "medium", "large", "halfheight", "fullheight"],
    _height = "",
    _style = "",
    _background_size = "";

  $: background_size, determineHeightStyles();

  function determineHeightStyles() {
    if (
      bg_sizes.indexOf(background_size) === -1 &&
      typeof background_size == "string" &&
      background_size.length
    ) {
      _height = "height: " + background_size + ";";

      _style =
        (style.length && style.charAt(style.length - 1) !== ";"
          ? style + ";"
          : style) + _height;
      _background_size = "";
    } else {
      _height = "";
      _background_size = background_size;
      _style = style;
    }
  }
</script>
