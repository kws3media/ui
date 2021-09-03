<div class="range-control">
  <input
    class="input {classes}"
    type="range"
    bind:value
    on:change
    {min}
    {max} />
  <output style={computedStyle}>{value}</output>
</div>

<script>
  /**
   * Minimum Range
   * @type {number}
   */
  export let min = 0,
    /**
     * Maximum Range
     * @type {number}
     */
    max = 100,
    /**
     * Starting Value
     * @type {number}
     */
    value = 50,
    /**
     * Additional classes
     * @type {string}
     */
    classes = "";

  let computedStyle = "";

  $: {
    let range = max - min;
    let position = ((value - min) / range) * 100;
    let positionOffset = Math.round(position * 0.4);
    computedStyle = `left:calc(${position}% - ${positionOffset}px`;
  }
</script>
