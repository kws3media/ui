<!--
  @component


  @param {string} [value=""] - Accepts a date value in the format `H:i`

Where `H` is in 24hr format

This property can be bound to, to fetch the selected time. Output is in the same format as input., Default: `""`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Date picker input, Default: `""`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder="Select Time.."] - Placeholder text for the input, Default: `"Select Time.."`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [ui_color="primary"] - Colour of popup time selection UI, Default: `"primary"`
  @param {boolean} [time_24hr=false] - Display time selection UI in 24hr format, Default: `false`
  @param {object} [options={}] - Extended set of options as supported by Flatpicker

See: https://flatpickr.js.org/options/, Default: `{}`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `change` - Proxied events from Flatpicker
  - `timeChange`
  - `ready`
  - `open`
  - `close`

-->
<!--Proxied events from Flatpicker-->
<input
  use:timepicker={[opts, value]}
  class="input is-{color} {klass}"
  type="text"
  {style}
  {placeholder}
  {disabled}
  readonly
  bind:value
  on:change
  on:timeChange
  on:ready
  on:open
  on:close />

<script>
  import { timepicker } from "./actions";

  /**
   * Accepts a date value in the format `H:i`
   *
   * Where `H` is in 24hr format
   *
   * This property can be bound to, to fetch the selected time. Output is in the same format as input.
   */
  export let value = "";
  /**
   * Inline CSS for the input
   */
  export let style = "";
  /**
   * Colour of the Date picker input
   * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "";
  /**
   * Disables the component
   */
  export let disabled = false;
  /**
   * Placeholder text for the input
   */
  export let placeholder = "Select Time..";
  /**
   * Colour of popup time selection UI
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let ui_color = "primary";

  /**
   * Display time selection UI in 24hr format
   */
  export let time_24hr = false;

  /**
   * Extended set of options as supported by Flatpicker
   *
   * See: https://flatpickr.js.org/options/
   */
  export let options = {};
  /**
   * CSS classes for the input
   */
  let klass = "";
  export { klass as class };

  let opts;

  $: ui_color, options, time_24hr, fillOptions();

  function fillOptions() {
    let _opts = Object.assign(
      {
        color: ui_color,
        time_24hr,
      },
      options
    );

    opts = _opts;
  }
</script>
