<!--
  @component


  @param {string} [text=""] - Text property, Default: `""`
  @param {'' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link'} [color=""] - Color of the Divider lines and text, Default: `""`
  @param {boolean} [light=false] - Whether to display a lighter variant of the `color`, Default: `false`
  @param {boolean} [vertical=false] - Whether to orient the Divider vertically. Vertical Divider take up the height of their parent., Default: `false`
  @param {'center' | 'left' | 'right' | 'top' | 'bottom'} [alignment="center"] - Alignment of the Divider text. `top` and `bottom` are only valid for vertical Divider, Default: `"center"`
  @param {string} [style=""] - Inline CSS styles for the Divider, Default: `""`
  @param {string} [class=""] - CSS class for Divider, Default: `""`

-->

<div
  class:is-vertical={vertical}
  class:is-light={light}
  class="kws-divider is-{alignment} is-{color} {klass}"
  {style}>
  <!--Default slot for text inside Divider--><slot />
</div>

<script>
  /**
   * Color of the Divider lines
   * @type {'' | 'warning' | 'info' | 'danger' | 'primary' | 'success' | 'link' | 'dark' | 'light'}
   */
  export let color = "",
    /**
     * Whether to display a lighter variant of the `color`
     */
    light = false,
    /**
     * Whether to orient the Divider vertically. Vertical Divider take up the height of their parent.
     */
    vertical = false,
    /**
     * Alignment of the Divider text. `top`/`left` and `bottom`/`right` are analogous for vertical Dividers
     * @type {'center' | 'left' | 'right' | 'top' | 'bottom'}
     */
    alignment = "center",
    /**
     * Inline CSS styles for the Divider
     */
    style = "";

  /**
   * CSS class for Divider
   * @type {string}
   */
  let klass = "";
  export { klass as class };
</script>
