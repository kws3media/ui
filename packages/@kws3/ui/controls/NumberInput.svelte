<!--
  @component


  @param {''|'small'|'medium'|'large'} [size=""] - Size of the component, Default: `""`
  @param {number} [value=0] - Current value

This property can be bound to, to fetch the current value

This will be overridden if `min` is higher, or `max` is lower, Default: `0`
  @param {number} [step=1] - Number of steps to jump when increasing/decreasing using the +/- buttons, Default: `1`
  @param {number} [min=0] - Minumum permitted value, Default: `0`
  @param {number} [max=100] - Maximum permitted value, Default: `100`
  @param {boolean} [disabled=false] - Disables the NumberInput, Default: `false`
  @param {boolean} [fullwidth=false] - Forces the NumberInput to occupy the full width of it's container, Default: `false`
  @param {boolean} [typeable=true] - Allows typing the value into the input, Default: `true`
  @param {string} [minus_icon="minus"] - Name of the icon that is to be displayed in the minus button, Default: `"minus"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_icon_color="danger"] - Color of the Minus Icon, Default: `"danger"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [minus_button_color=""] - Color of the Minus Button, Default: `""`
  @param {string} [plus_icon="plus"] - Name of the icon that is to be displayed in the plus button, Default: `"plus"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_icon_color="success"] - Color of the Plus Icon, Default: `"success"`
  @param {''|'success'|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [plus_button_color=""] - Color of the Plus Button, Default: `""`
  @param {boolean} [input_only=false] - Show input without controls, Default: `false`
  @param {boolean} [force_integer=false] - Prevent decimal numbers such as `1.5`, Default: `false`
  @param {string} [style=""] - Inline CSS for component, Default: `""`
  @param {string} [class=""] - CSS classes for component, Default: `""`

  ### Events
  - `change` - Triggered when value changes
  - `blur`
  - `focus`

-->
{#if input_only}
  <input
    {style}
    data-testid="input"
    class="input has-text-centered {klass} is-{size} is-{value < min ||
    value > max
      ? 'danger'
      : ''}"
    type="number"
    {min}
    {max}
    {step}
    {disabled}
    readonly={!typeable}
    bind:value
    on:blur={isBlurred}
    on:blur
    on:focus={isFocused}
    on:focus />
{:else}
  <div class="field has-addons {klass}" {style}>
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
        data-testid="input"
        class="input has-text-centered is-{size} is-{value < min || value > max
          ? 'danger'
          : ''}"
        type="number"
        {min}
        {max}
        {step}
        {disabled}
        readonly={!typeable}
        bind:value
        on:blur={isBlurred}
        on:blur
        on:focus={isFocused}
        on:focus />
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
          class="has-text-{plus_icon_color}" />
      </button>
    </div>
  </div>
{/if}

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
  input[type="number"] {
    -moz-appearance: textfield;
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
     * Current value
     *
     * This property can be bound to, to fetch the current value
     *
     * This will be overridden if `min` is higher, or `max` is lower
     * @type {number}
     */
    value = 0,
    /**
     * Number of steps to jump when increasing/decreasing using the +/- buttons
     */
    step = 1,
    /**
     * Minumum permitted value
     * @type {number}
     */
    min = 0,
    /**
     * Maximum permitted value
     * @type {number}
     */
    max = 100,
    /**
     * Disables the NumberInput
     */
    disabled = false,
    /**
     * Forces the NumberInput to occupy the full width of it's container
     */
    fullwidth = false,
    /**
     * Allows typing the value into the input
     */
    typeable = true,
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
    plus_button_color = "",
    /**
     * Show input without controls
     */
    input_only = false,
    /**
     * Prevent decimal numbers such as `1.5`
     */
    force_integer = false,
    /**
     * Inline CSS for component
     */
    style = "";

  /**
   * CSS classes for component
   */
  let klass = "";
  export { klass as class };

  let _has_focus = false,
    _old_value = null;

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
    if (step % 1 !== 0) value = Number(value.toFixed(1));
  };

  function validateInput() {
    if (_old_value == null) _old_value = value;

    if (typeof value == "undefined" || value === null) value = min;

    if (force_integer) value = Math.floor(Number(value));

    if (value < min) value = min;
    if (value > max) value = max;

    if (_old_value !== value) {
      _old_value = value;
      /**
       * Triggered when value changes
       */
      fire("change");
    }
  }
</script>
