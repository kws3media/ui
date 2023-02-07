<!--
  @component

  @param {array} [labels=[]] - Range labels, Default: []
  @param {number} [min=0] - Minumum permitted value, Default: `0`
  @param {number} [max=100] - Maximum permitted value, Default: `100`
  @param {number} [step=1] - Stepping interval or Rate of change of value, Default: `1`
  @param {number} [value=0] - Current value

This property can be bound to, to fetch the current value

This will be overridden if `min` is higher, or `max` is lower, Default: `0`
  @param {boolean} [output=false] - Displays the current value, Default: `false`
  @param {boolean} [disabled=false] - Disables the Slider, Default: `false`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the Slider, Default: `""`
  @param {''|'primary'|'warning'|'success'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Slider, Default: `""`
  @param {string} [style=""] - Inline CSS for the Slider, Default: `""`
  @param {boolean} [circle=false] - Uses a round slider thumb instead of the default square, Default: `false`
  @param {boolean} [tooltip=false] - Displays the current value of the Slider as a tooltip

  `output` has to be enabled for this to work, Default: `false`
  @param {string} [class=""] - CSS classes for the slider, Default: `""`

  ### Events
  - `change` - Native input change event

-->
<div class="kws-range-with-label-control" style={cssVariables}>
  <!--Native input change event-->
  <input
    class="slider is-fullwidth
    {outputClass}
    is-{size} is-{color} {klass}
    {circle ? 'is-circle' : ''}"
    type="range"
    bind:value
    on:change
    {min}
    {max}
    {step}
    {disabled}
    {style} />
  {#if output}
    <output style={computedStyle}>{value}</output>
  {/if}
</div>

<ul class="kws-range-labels {output ? 'has-output' : ''}">
  {#if _data && _data.length}
    {#each _data as item}
      <li
        class="is-{label_size} {value === item.value ? 'active' : ''}
          {item.value <= value ? 'selected' : ''}">
        <span
          class={value === item.value ? "has-text-" + { active_color } : ""}>
          {item.label}</span>
      </li>
    {/each}
  {/if}
</ul>

<style lang="scss">
  .kws-range-with-label-control {
    input[type="range"] {
      &.slider {
        &::-webkit-slider-runnable-track {
          background: linear-gradient(
            to right,
            #1dafec 0%,
            #1dafec var(--slider-position),
            #dbdbdb var(--slider-position),
            #dbdbdb 100%
          );
        }
        &::-moz-range-track {
          background: linear-gradient(
            to right,
            #1dafec 0%,
            #1dafec var(--slider-position),
            #dbdbdb var(--slider-position),
            #dbdbdb 100%
          );
        }
        &::-ms-track {
          background: linear-gradient(
            to right,
            #1dafec 0%,
            #1dafec var(--slider-position),
            #dbdbdb var(--slider-position),
            #dbdbdb 100%
          );
        }
      }
    }
  }
</style>

<script>
  import { onMount } from "svelte";

  /**
   *
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   *
   */
  /**
   * Minumum permitted value
   */
  export let min = 0,
    /**
     * Maximum permitted value
     */
    max = 100,
    /**
     * Stepping interval or Rate of change of value
     */
    step = 1,
    /**
     * Current value
     *
     * This property can be bound to, to fetch the current value
     *
     * This will be overridden if `min` is higher, or `max` is lower
     */
    value = 0,
    /**
     * Displays the current value
     */
    output = false,
    /**
     * Range labels
     */
    labels = [],
    /**
     * Disables the Slider
     */
    disabled = false,
    /**
     * Size of the Slider
     * @type {SizeOptions}
     */
    size = "",
    /**
     * Size of the Label Size
     * @type {SizeOptions}
     */
    label_size = "small",
    /**
     * Colour of the Slider
     * @type {ColorOptions}
     */
    color = "",
    /**
     * Colour of the Active Label
     * @type {ColorOptions}
     */
    active_color = "info",
    /**
     * Inline CSS for the Slider
     */
    style = "",
    /**
     * Uses a round slider thumb instead of the default square
     */
    circle = false,
    /**
     * Displays the current value of the Slider as a tooltip
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
  let outputClass = "";
  let _data = [];
  let position = 0;

  $: outputClass = output
    ? tooltip
      ? "has-output-tooltip"
      : "has-output"
    : "";

  $: cssVariables = `--slider-position:${position}%;`;
  $: labels, normaliseData();
  $: {
    let range = max - min;
    position = ((value - min) / range) * 100;
    let positionOffset = Math.round(position * 0.4);
    computedStyle = `left:calc(${position}% - ${positionOffset}px)`;
    // style = `background: linear-gradient(to right, #1dafec 0%, #1dafec ${position}%, #fff ${position}%, #fff 100%);`;
  }

  onMount(() => {
    validateInput();
  });

  const normaliseData = () => {
    _data = [];

    labels.forEach((item, index) => {
      let _value = index * step + min;
      if (_value < min) _value = min;
      if (_value > max) _value = max;

      _data.push({
        label: item,
        value: _value,
      });
    });
  };

  function validateInput() {
    if (typeof value == "undefined" || value === null) value = min;

    if (value < min) value = min;
    if (value > max) value = max;
  }
</script>
