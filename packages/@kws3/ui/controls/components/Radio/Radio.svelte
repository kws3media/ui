<!--
  @component
  

  @param {string} [value="null"] - value of radio button, Default: `"null"`
  @param {string} [classes=""] - CSS classes, Default: `""`
  @param {string} [style=""] - Supported classes, Default: `""`
  @param {string} [label_style=""] - Inline style of Radio label, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Radio Button, Default: `""`
  @param {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Radio button, Default: `""`
  @param {boolean} [inverted=false] - Inverted - true/false, Default: `false`
  @param {boolean} [circle=false] - Circle radio button(Default : Square) - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {boolean} [group=false] - Group radio - true/false, Default: `false`

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
     * Size of the Radio Button
     * @type {'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the Radio button
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
