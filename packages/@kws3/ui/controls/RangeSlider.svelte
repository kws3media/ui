<!--
  @component


  @param {number} [min=0] - Lowest value of the selectable range, Default: `0`
  @param {number} [max=100] - Highest value of the selectable range, Default: `100`
  @param {number} [value=50] - Default set value before any user interaction, Default: `50`
  @param {string} [class=""] - CSS classes for the slider, Default: `""`

  ### Events
  - `change` - Triggered when any change is made from the default set value

-->
<div class="range-control">
  <!--Triggered when any change is made from the default set value-->
  <input class="input {klass}" type="range" bind:value on:change {min} {max} />
  <output style={computedStyle}>{value}</output>
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
    value = 50;

  /**
   * CSS classes for the slider
   * @type {string}
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
