<!--
  @component


  @param {number} [min=0] - Lowest value of the selectable range, Default: `0`
  @param {number} [max=100] - Highest value of the selectable range, Default: `100`
  @param {number} [value=0] - Default set value before any user interaction, Default: `0`
  @param {boolean} [output=false] - Display the current position of the Slider as a value, Default: `false`
  @param {boolean} [disabled=false] - Disables the Slider, Default: `false`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Slider, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Slider, Default: `""`
  @param {string} [style=""] - Inline CSS for the Slider, Default: `""`
  @param {boolean} [circle=false] - Uses a round slider instead of the default square, Default: `false`
  @param {boolean} [tooltip=false] - Displays the current position value of the slider as a tooltip

`output` has to be enabled for this to work, Default: `false`
  @param {string} [class=""] - CSS classes for the slider, Default: `""`

  ### Events
  - `change` - Triggered whenever any change is made to the slider value

-->
<div class="range-control">
  <!--Triggered whenever any change is made to the slider value-->
  <input
    class="slider is-fullwidth
    {tooltip ? 'has-output-tooltip' : 'has-output'}
    is-{size} is-{color} {klass}
    {circle ? 'is-circle' : ''}"
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

<style>
  .range-control {
    position: relative;
  }
  input[type="range"].slider:not([orient="vertical"]).has-output-tooltip
    + output {
    top: 2rem !important;
  }
</style>

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
     * Display the current position of the Slider as a value
     */
    output = false,
    /**
     * Disables the Slider
     */
    disabled = false,
    /**
     * Size of the Slider
     * @type {''|'small'|'medium'|'large'}
     */
    size = "",
    /**
     * Colour of the Slider
     * @type {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'}
     */
    color = "",
    /**
     * Inline CSS for the Slider
     */
    style = "",
    /**
     * Uses a round slider instead of the default square
     */
    circle = false,
    /**
     * Displays the current position value of the slider as a tooltip
     *
     * `output` has to be enabled for this to work
     */
    tooltip = false;

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
