<!--
  @component


  @param {'small'|'medium'|'large'} [size=""] - Size of the Button `small`, `medium`, `large`, Default: `""`
  @param {object} [input=null] - Input Property, Default: `null`
  @param {number} [value=null] - Default value, Default: `null`
  @param {number} [step=1] - Steps increasing/decreasing, Default: `1`
  @param {number} [min=0] - Starting number, Default: `0`
  @param {number} [max=100] - Maximum number, Default: `100`
  @param {boolean} [disabled=false] - Disable - true/false, Default: `false`
  @param {boolean} [fullwidth=false] - Full width of container - true/false, Default: `false`
  @param {string} [minus_icon="minus"] - Icon of the Minus button, Default: `"minus"`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_icon_color="danger"] - Color of the Minus Icon `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`, Default: `"danger"`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_button_color=""] - Color of the Minus Button `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`, Default: `""`
  @param {string} [plus_icon="plus"] - Icon of the Plus button, Default: `"plus"`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_icon_color="success"] - Color of the Plus Icon `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`, Default: `"success"`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_button_color=""] - Color of the Plus Button `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`, Default: `""`
  @param {number} [_has_focus=0] - _has_focus property, Default: `0`

  ### Events
  - `change`

-->
<div class="field has-addons">
  <div class="control">
    <button
      type="button"
      class="button is-{size} is-{minus_button_color}"
      style="box-shadow:none;"
      on:click={count(-1)}
      disabled={disabled || value <= min}>
      <Icon
        icon={minus_icon}
        size="small"
        icon_class="has-text-{minus_icon_color}" />
    </button>
  </div>
  <div class="control is-{fullwidth ? 'expanded' : 'narrow'}">
    <input
      bind:this={input}
      class="input has-text-centered is-{size} is-{value < min || value > max
        ? 'danger'
        : ''}"
      type="number"
      min
      max
      step
      {disabled}
      bind:value
      on:blur={isBlurred()}
      on:focus={isFocused()} />
  </div>
  <div class="control">
    <button
      type="button"
      class="button is-{size} is-{plus_button_color}"
      style="box-shadow:none;"
      on:click|preventDefault={count(+1)}
      disabled={disabled || value >= max}>
      <Icon
        icon={plus_icon}
        size="small"
        icon_class="has-text-{plus_icon_color}" />
    </button>
  </div>
</div>

<style>
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"]::-moz-inner-spin-button,
  input[type="number"]::-moz-outer-spin-button {
    -moz-appearance: none;
    margin: 0;
  }
  input[type="number"]::inner-spin-button,
  input[type="number"]::outer-spin-button {
    appearance: none;
    margin: 0;
  }
</style>

<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";

  const fire = createEventDispatcher();

  /**
   * Size of the Button
   * @type {''|'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Input Property
     */
    input = null,
    /**
     * Default value
     */
    value = 0,
    /**
     * Steps increasing/decreasing
     */
    step = 1,
    /**
     * Starting number
     */
    min = 0,
    /**
     * Maximum number
     */
    max = 100,
    /**
     * Disable - true/false
     */
    disabled = false,
    /**
     * Full width of container - true/false
     */
    fullwidth = false,
    /**
     * Icon of the Minus button - Can use fa, la, gg, uil icon families
     */
    minus_icon = "minus",
    /**
     * Color of the Minus Icon
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    minus_icon_color = "danger",
    /**
     * Color of the Minus Button
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    minus_button_color = "",
    /**
     * Icon of the Plus button - Can use fa, la, gg, uil icon families
     */
    plus_icon = "plus",
    /**
     * Color of the Plus Icon
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    plus_icon_color = "success",
    /**
     * Color of the Plus Button
     * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    plus_button_color = "";

  export let _has_focus = 0;

  $: value && !_has_focus, validateInput(); // will work like on state changed

  onMount(() => {
    validateInput();
  });

  function isFocused() {
    _has_focus = true;
  }

  function isBlurred() {
    validateInput();
    _has_focus = false;
  }

  const count = (i) => () => {
    if (typeof value == "undefined" || value === null) value = min;
    value = Number(value) + i * step;
    if (step % 1 != 0) value = value.toFixed(1);
    /**
     * Used to change input value
     */
    fire("change");
  };

  function validateInput() {
    if (typeof value == "undefined" || value === null) value = min;

    if (value < min) value = min;
    if (value > max) value = max;

    fire("change");
  }
</script>
