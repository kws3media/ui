<!--
  @component


  @param {object} [value=null] - Value property, Default: `null`
  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [style=""] - Style property, Default: `""`
  @param {string} [label_style=""] - Label_style property, Default: `""`
  @param {string} [size=""] - Size property, Default: `""`
  @param {string} [color=""] - Color property, Default: `""`
  @param {boolean} [inverted=false] - Inverted property, Default: `false`
  @param {boolean} [circle=false] - Circle property, Default: `false`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`
  @param {boolean} [group=false] - Group property, Default: `false`

  ### Events
  - `change`

  ### Slots
  - `<slot name="default"  />`

-->
<!-- using Checkbox style file -->

<label
  class="radio kws-checkbox is-{size} is-{color} {inverted
    ? 'is-inverted'
    : ''} {circle ? 'is-circle' : ''} {classes}"
  {style}>
  <input type="radio" {disabled} bind:group {value} on:change />
  <span class="kws-checkbox-label" style={label_style}><slot /></span>
</label>

<script>
  /**
   * value of radio button
   * @type {string}
   */
  export let value = null,
    /**
     * CSS classes
     * @type {string}
     */
    classes = "",
    /**
     * Supported classes
     * @type {string}
     */
    style = "",
    /**
     * Inline style of Radio label
     * @type {string}
     */
    label_style = "",
    /**
     * Size of the Radio Button `small`, `medium`, `large`
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the Button `primary`, `warning`, `success`, `info`, `danger`, `dark`, `light`
     * @type {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Inverted - true/false
     * @type {boolean}
     */
    inverted = false,
    /**
     * Circle radio button(Default : Square) - true/false
     * @type {boolean}
     */
    circle = false,
    /**
     * Disabled - true/false
     * @type {boolean}
     */
    disabled = false,
    /**
     * Group radio - true/false
     * @type {boolean}
     */
    group = false;
</script>
