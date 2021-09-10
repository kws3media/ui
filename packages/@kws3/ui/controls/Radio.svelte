<!--
  @component


  @param {object} [value=null] - value of radio button, Default: `null`
  @param {string} [style=""] - Inline style, Default: `""`
  @param {string} [label_style=""] - Inline style of Radio label, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the Radio Button, Default: `""`
  @param {'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Radio button, Default: `""`
  @param {boolean} [inverted=false] - Inverted - true/false, Default: `false`
  @param {boolean} [circle=false] - Circle radio button(Default : Square) - true/false, Default: `false`
  @param {boolean} [disabled=false] - Disabled - true/false, Default: `false`
  @param {boolean} [group=false] - Group radio - true/false, Default: `false`
  @param {string} [class=""] - CSS classes, Default: `""`

  ### Events
  - `change` - Radio button change event

  ### Slots
  - `<slot name="default"  />` - Used for displaying radio label

-->
<!-- using Checkbox style file -->

<label
  class="radio kws-checkbox is-{size} is-{color} {inverted
    ? 'is-inverted'
    : ''} {circle ? 'is-circle' : ''} {klass}"
  {style}>
  <!--Radio button change event-->
  <input type="radio" {disabled} bind:group {value} on:change />
  <span class="kws-checkbox-label" style={label_style}>
    <!-- Used for displaying radio label--><slot />
  </span>
</label>

<script>
  /**
   * value of radio button
   */
  export let value = null,
    /**
     * Inline style
     */
    style = "",
    /**
     * Inline style of Radio label
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
     */
    inverted = false,
    /**
     * Circle radio button(Default : Square) - true/false
     */
    circle = false,
    /**
     * Disabled - true/false
     */
    disabled = false,
    /**
     * Group radio - true/false
     */
    group = false;

  /**
   * CSS classes
   */
  let klass = "";
  export { klass as class };
</script>
