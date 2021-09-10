<!--
  @component


  @param {number} [min=0] - Minimum Range, Default: `0`
  @param {number} [max=100] - Maximum Range, Default: `100`
  @param {number} [value=50] - Starting Value, Default: `50`
  @param {string} [class=""] - Additional classes, Default: `""`

  ### Events
  - `change` - Change event

-->
<div class="range-control">
  <!--Change event-->
  <input class="input {klass}" type="range" bind:value on:change {min} {max} />
  <output style={computedStyle}>{value}</output>
</div>

<script>
  /**
   * Minimum Range
   */
  export let min = 0,
    /**
     * Maximum Range
     */
    max = 100,
    /**
     * Starting Value
     */
    value = 50;

  /**
   * Additional classes
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
