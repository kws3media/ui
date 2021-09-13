<!--
  @component


  @param {string} [value=""] - Accepts a date value in the format `yyyy-mm-dd`

In `range_mode`, the expected format is `yyyy-mm-dd to yyyy-mm-dd`

This property can be bound to, to fetch the selected date or date range. Output is in the same format as input., Default: `""`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Date picker input, Default: `""`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder=""] - Placeholder text for the input, Default: `""`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [calendar_color="primary"] - Colour of the Calendar, Default: `"primary"`
  @param {any} [min_date=null] - Set earliest selectable date as an object or string

**Example:** `'2021-06-06'` or `{(new Date('2021-01-01'))}`, Default: `null`
  @param {any} [max_date=null] - Set latest selectable date as an object or string

**Example:** `'2021-06-06'` or `{(new Date('2021-01-01'))}`, Default: `null`
  @param {array} [enable_dates=[]] - Enables a range of dates and disables all others, Default: `[]`
  @param {array} [disable_dates=[]] - Disables a range of dates and enables all others, Default: `[]`
  @param {boolean} [range_mode=false] - Allows selecting a date range, Default: `false`
  @param {object} [options={}] - Extended set of options as supported by Flatpicker

See: https://flatpickr.js.org/options/, Default: `{}`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `change` - Proxied events from Flatpicker
  - `dateChange`
  - `ready`
  - `open`
  - `close`
  - `monthChange`
  - `yearChange`

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

<input type="text" bind:value />

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
