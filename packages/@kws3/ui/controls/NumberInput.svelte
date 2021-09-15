<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the component, Default: `""`
  @param {object} [input=null] - Input Property, Default: `null`
  @param {number} [value=0] - Default number displayed in the NumberInput

This will be over-ridden if `min` is higher, or `max` is lower, Default: `0`
  @param {number} [step=1] - Number of steps to jump when increasing/decreasing using the +/- buttons, Default: `1`
  @param {number} [min=0] - Smallest number the NumberInput will allow, Default: `0`
  @param {number} [max=100] - Largest number the NumberInput will allow, Default: `100`
  @param {boolean} [disabled=false] - Disables the NumberInput, Default: `false`
  @param {boolean} [fullwidth=false] - Forces the NumberInput to take the full width of its container, Default: `false`
  @param {string} [minus_icon="minus"] - Name of the icon that is to be displayed in the minus button, Default: `"minus"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_icon_color="danger"] - Color of the Minus Icon, Default: `"danger"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_button_color=""] - Color of the Minus Button, Default: `""`
  @param {string} [plus_icon="plus"] - Name of the icon that is to be displayed in the plus button, Default: `"plus"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_icon_color="success"] - Color of the Plus Icon, Default: `"success"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_button_color=""] - Color of the Plus Button, Default: `""`
  @param {number} [_has_focus=0] - _has_focus property, Default: `0`

  ### Events
  - `change` - Fires event when the input value changes

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
        class="has-text-{minus_icon_color}" />
    </button>
  </div>
  <div class="control is-{fullwidth ? 'expanded' : 'narrow'}">
    <input
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
      <Icon icon={plus_icon} size="small" class="has-text-{plus_icon_color}" />
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
   * Size of the component
   * @type {''|'small'|'medium'|'large'}
   */
  export let size = "",
    /**
     * Default number displayed in the NumberInput
     *
     * This will be over-ridden if `min` is higher, or `max` is lower
     */
    value = 0,
    /**
     * Number of steps to jump when increasing/decreasing using the +/- buttons
     */
    step = 1,
    /**
     * Smallest number the NumberInput will allow
     */
    min = 0,
    /**
     * Largest number the NumberInput will allow
     */
    max = 100,
    /**
     * Disables the NumberInput
     */
    disabled = false,
    /**
     * Forces the NumberInput to take the full width of its container
     */
    fullwidth = false,
    /**
     * Name of the icon that is to be displayed in the minus button
     */
    minus_icon = "minus",
    /**
     * Color of the Minus Icon
     * @type {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    minus_icon_color = "danger",
    /**
     * Color of the Minus Button
     * @type {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    minus_button_color = "",
    /**
     * Name of the icon that is to be displayed in the plus button
     */
    plus_icon = "plus",
    /**
     * Color of the Plus Icon
     * @type {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    plus_icon_color = "success",
    /**
     * Color of the Plus Button
     * @type {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    plus_button_color = "";

  let _has_focus = false;

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
     * Fires event when the input value changes
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
