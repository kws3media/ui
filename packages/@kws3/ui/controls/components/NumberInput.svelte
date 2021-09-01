<!--
  @component


  @param {string} [size=""] - Size property, Default: `""`
  @param {object} [input=null] - Input property, Default: `null`
  @param {object} [value=null] - Value property, Default: `null`
  @param {number} [step=1] - Step property, Default: `1`
  @param {number} [min=0] - Min property, Default: `0`
  @param {number} [max=100] - Max property, Default: `100`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`
  @param {boolean} [fullwidth=false] - Fullwidth property, Default: `false`
  @param {string} [minus_icon="minus"] - Minus_icon property, Default: `"minus"`
  @param {string} [minus_icon_color="danger"] - Minus_icon_color property, Default: `"danger"`
  @param {string} [minus_button_color=""] - Minus_button_color property, Default: `""`
  @param {string} [plus_icon="plus"] - Plus_icon property, Default: `"plus"`
  @param {string} [plus_icon_color="success"] - Plus_icon_color property, Default: `"success"`
  @param {string} [plus_button_color=""] - Plus_button_color property, Default: `""`
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
   * Size of the Button `small`, `medium`, `large`
   * @type {'small'|'medium'|'large'}
   */
  export let size = "";

  /**
   * Input Property
   * @type {object}
   * @defaultvalue null
   */
  export let input = null;

  /**
   * Default value
   * @type {number}
   * @defaultvalue null
   */
  export let value = null;

  /**
   * Steps increasing/decreasing
   * @type {number}
   * @defaultvalue 1
   */
  export let step = 1;

  /**
   * Starting number
   * @type {number}
   * @defaultvalue 0
   */
  export let min = 0;

  /**
   * Maximum number
   * @type {number}
   * @defaultvalue 100
   */
  export let max = 100;

  /**
   * Disable - true/false
   * @type {boolean}
   * @defaultvalue false
   */
  export let disabled = false;

  /**
   * Full width of container - true/false
   * @type {boolean}
   * @defaultvalue false
   */
  export let fullwidth = false;

  /**
   * Icon of the Minus button
   * @type {string}
   * @defaultvalue `minus`
   */
  export let minus_icon = "minus";

  /**
   * Color of the Minus Icon `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let minus_icon_color = "danger";

  /**
   * Color of the Minus Button `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let minus_button_color = "";

  /**
   * Icon of the Plus button
   * @type {string}
   * @defaultvalue `plus`
   */
  export let plus_icon = "plus";

  /**
   * Color of the Plus Icon `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let plus_icon_color = "success";

  /**
   * Color of the Plus Button `primary`, `success`, `warning`, `info`, `danger`, `dark`, `light`
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let plus_button_color = "";
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

    fire("change");
  };

  function validateInput() {
    if (typeof value == "undefined" || value === null) value = min;

    if (value < min) value = min;
    if (value > max) value = max;

    fire("change");
  }
</script>
