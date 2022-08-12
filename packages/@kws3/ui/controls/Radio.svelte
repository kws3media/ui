<!--
  @component


  @param {object} [value=null] - Value of radio button, Default: `null`
  @param {string} [style=""] - Inline CSS for the Radio button, Default: `""`
  @param {string} [label_style=""] - Inline CSS for Radio label, Default: `""`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Radio Button, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the Radio button when selected, Default: `""`
  @param {boolean} [inverted=false] - Inverts the Radio colour theme, Default: `false`
  @param {boolean} [circle=false] - Circular Radio button instead of the default square, Default: `false`
  @param {boolean} [disabled=false] - Disables Radio button, Default: `false`
  @param {any} [group=null] - This is the property to bind to,
so that the selected Radio's value can be obtained

See: https://svelte.dev/docs#bind_group, Default: `null`
  @param {string} [class=""] - CSS classes for the Radio button, Default: `""`

  ### Events
  - `change` - Radio button change event

  ### Slots
  - `<slot name="default"  />` - Used for Radio Label, which can be further styled using `label_style` property

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
    <!-- Used for Radio Label, which can be further styled using `label_style` property--><slot />
  </span>
</label>

<script>
  //@ts-nocheck
  /**
   * Value of radio button
   */
  export let value = null,
    /**
     * Inline CSS for the Radio button
     */
    style = "",
    /**
     * Inline CSS for Radio label
     */
    label_style = "",
    /**
     * Size of the Radio Button
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Color of the Radio button when selected
     * @type {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Inverts the Radio colour theme
     */
    inverted = false,
    /**
     * Circular Radio button instead of the default square
     */
    circle = false,
    /**
     * Disables Radio button
     */
    disabled = false,
    /**
     * This is the property to bind to,
     * so that the selected Radio's value can be obtained
     *
     * See: https://svelte.dev/docs#bind_group
     * @type {any}
     */
    group = null;

  /**
   * CSS classes for the Radio button
   */
  let klass = "";
  export { klass as class };
</script>
