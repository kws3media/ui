<!--
  @component


  @param {ColorOptions} [color=] - Color of the Divider lines, Default: ``
  @param {boolean} [light=false] - Whether to display a lighter variant of the `color`, Default: `false`
  @param {boolean} [vertical=false] - Whether to orient the Divider vertically. Vertical Divider take up the height of their parent., Default: `false`
  @param {Exclude<Positions, 'start'|'end'>} [alignment=center] - Alignment of the Divider text. `top`/`left` and `bottom`/`right` are analogous for vertical Dividers, Default: `center`
  @param {string} [style=""] - Inline CSS styles for the Divider, Default: `""`
  @param {string} [class=""] - CSS class for Divider, Default: `""`

  ### Slots
  - `<slot name="default"  />` - Default slot for text inside Divider

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
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   * @typedef {import('@kws3/ui/types').Positions} Positions
   */

  /**
   * Color of the Divider lines
   * @type {ColorOptions}
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
     * @type {Exclude<Positions, 'start'|'end'>}
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
