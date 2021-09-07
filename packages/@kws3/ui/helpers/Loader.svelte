<!--
  @component


  @param {'grey' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'} [spinner_color="grey"] - Color of the Spinner, Default: `"grey"`
  @param {'small'|'medium'|'large'} [spinner_size="medium"] - Size of the Spinner, Default: `"medium"`
  @param {'transparent' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link'} [background_color="transparent"] - Backgound color of the Spinner container, Default: `"transparent"`
  @param {'small' | 'medium' | 'large' | 'halfheight' | 'fullheight'} [background_size="medium"] - Size of the Spinner container.  It can also accept css units such as 10px | 5rem | 100vh, Default: `"medium"`
  @param {boolean} [is_inline=false] - Determines if the Loader is inline or not, Default: `false`
  @param {boolean} [has_overlay=false] - Determines if loader is displayed on top of a semi-transparent overlay, Default: `false`
  @param {string} [style=""] - Inline CSS for Loader, Default: `""`
  @param {string} [class=""] - CSS class for Loader, Default: `""`

-->
<div class={has_overlay ? "is-overlay" : ""}>
  <div
    class="kws-loader hero is-{background_color} is-{background_size} {klass}"
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
   * Color of the Spinner
   * @link https://bulma.io/documentation/helpers/color-helpers/
   * @type {'grey' | 'light' | 'warning' | 'info' | 'danger' | 'primary' | 'success'}
   */
  export let spinner_color = "grey",
    /**
     * Size of the Spinner
     * @type {'small'|'medium'|'large'}
     */
    spinner_size = "medium",
    /**
     * Backgound color of the Spinner container
     * @type {'transparent' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link'}
     */
    background_color = "transparent",
    /**
     * Size of the Spinner container.  It can also accept css units
     *
     * **Examples:** `small` | `medium` | `large` | `halfheight` | `fullheight` | `10px` | `5rem` | `100vh`
     */
    background_size = "medium",
    /**
     * Determines if the Loader is inline or not
     */
    is_inline = false,
    /**
     * Determines if loader is displayed on top of a semi-transparent overlay
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

  let bg_size = ["small", "medium", "large", "halfheight", "fullheight"],
    _height = "",
    _style = "";

  $: if (
    bg_size.indexOf(background_size) == -1 &&
    typeof background_size == "string" &&
    background_size.length
  ) {
    _height = "height: " + background_size + ";";

    _style =
      (style.length && style.charAt(style.length - 1) != ";"
        ? style + ";"
        : style) + _height;
  }
</script>
