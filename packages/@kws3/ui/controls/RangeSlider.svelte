<!--
  @component


  @param {number} [min=0] - Lowest value of the selectable range, Default: `0`
  @param {number} [max=100] - Highest value of the selectable range, Default: `100`
  @param {number} [value=0] - Default set value before any user interaction, Default: `0`
  @param {string} [class=""] - CSS classes for the slider, Default: `""`

  ### Events
  - `change` - Triggered whenever any change is made to the slider value

-->
<div class="range-control">
  <!--Triggered whenever any change is made to the slider value-->
  <input
    class="slider is-fullwidth has-output is-{size} is-{color} {klass} {circle
      ? 'is-circle'
      : ''}"
    type="range"
    bind:value
    on:change
    {min}
    {max}
    {disabled}
    {style} />
  {#if output}
    <output style={computedStyle}>{value}</output>
  {/if}
</div>

<script>
  /**
   * Lowest value of the selectable range
   */
  export let min = 0,
    /**
     * Highest value of the selectable range
     */
    max = 100,
    /**
     * Default set value before any user interaction
     */
    value = 0,
    /**
     * Show output
     */
    output = false,
    /**
     * Disable option
     */
    disabled = false,
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
     * Inline styles
     */
    style = "",
    /**
     * Shape of slider thumb : default square
     */
    circle = false;

  /**
   * CSS classes for the slider
   */
  let klass = "";
  export { klass as class };

  let computedStyle = "";

  $: {
    let range = max - min;
    let position = ((value - min) / range) * 100;
    let positionOffset = Math.round(position * 0.4);
    computedStyle = `left:calc(${position}% - ${positionOffset}px`;
  }
</script>
