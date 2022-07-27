<!--
  @component


  @param {string} [value=""] - Accepts a date value in the format `yyyy-mm-dd`

In `range_mode`, the expected format is `yyyy-mm-dd to yyyy-mm-dd`

This property can be bound to, to fetch the selected date or date range. Output is in the same format as input., Default: `""`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Date picker input, Default: `""`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder="Select Date.."] - Placeholder text for the input, Default: `"Select Date.."`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [calendar_color="primary"] - Colour of the Calendar, Default: `"primary"`
  @param {any} [min_date=null] - Set earliest selectable date as an object or string

**Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`, Default: `null`
  @param {any} [max_date=null] - Set latest selectable date as an object or string

**Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`, Default: `null`
  @param {array} [enable_dates=[]] - Enables a range of dates and disables all others, Default: `[]`
  @param {array} [disable_dates=[]] - Disables a range of dates and enables all others, Default: `[]`
  @param {boolean} [range_mode=false] - Allows selecting a date range, Default: `false`
  @param {object} [options={}] - Extended set of options as supported by Flatpicker

See: https://flatpickr.js.org/options/, Default: `{}`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `dateChange` - Triggered when the date changes
  - `monthChange` - Triggered when the Month changes
  - `yearChange` - Triggered when the Year changes
  - `ready` - Triggered when UI is ready
  - `open` - Triggered when popup UI opens
  - `close` - Triggered when popup UI closes
  - `change` - Native input change event

-->
<!--Native input change event-->
<input
  use:datepicker={{
    opts,
    value,
    placeholder,
    klass,
    style,
    disabled,
    color,
  }}
  class="input is-{color} {klass}"
  type="text"
  {style}
  {placeholder}
  {disabled}
  readonly
  bind:value
  on:change
  on:dateChange={fireDateChange}
  on:ready={fireReady}
  on:open={fireOpen}
  on:close={fireClose}
  on:monthChange={fireMonthChange}
  on:yearChange={fireYearChange} />

<script>
  import { datepicker } from "./actions";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * Accepts a date value in the format `yyyy-mm-dd`
   *
   * In `range_mode`, the expected format is `yyyy-mm-dd to yyyy-mm-dd`
   *
   * This property can be bound to, to fetch the selected date or date range. Output is in the same format as input.
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
  export let placeholder = "Select Date..";
  /**
   * Colour of the Calendar
   * @type {'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let calendar_color = "primary";
  /**
   * Set earliest selectable date as an object or string
   *
   * **Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`
   * @type {any}
   */
  export let min_date = null;
  /**
   * Set latest selectable date as an object or string
   *
   * **Example:** `"2021-06-06"` or `"(new Date('2021-01-01'))"`
   * @type {any}
   */
  export let max_date = null;
  /**
   * Enables a range of dates and disables all others
   * @type {array}
   */
  export let enable_dates = [];
  /**
   * Disables a range of dates and enables all others
   * @type {array}
   */
  export let disable_dates = [];
  /**
   * Allows selecting a date range
   */
  export let range_mode = false;

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

  $: calendar_color,
    range_mode,
    enable_dates,
    disable_dates,
    min_date,
    max_date,
    options,
    fillOptions();

  function fillOptions() {
    let _opts = Object.assign(
      {
        color: calendar_color,
        mode: range_mode ? "range" : "single",
      },
      options
    );
    if (enable_dates && enable_dates.length) {
      _opts.enable = enable_dates;
    }
    if (disable_dates && disable_dates.length) {
      _opts.disable = disable_dates;
    }

    if (min_date) {
      _opts.minDate = min_date;
    }

    if (max_date) {
      _opts.maxDate = max_date;
    }
    opts = _opts;
  }

  function fireDateChange({ detail }) {
    /**
     * Triggered when the date changes
     */
    fire("dateChange", detail);
  }

  function fireMonthChange({ detail }) {
    /**
     * Triggered when the Month changes
     */
    fire("monthChange", detail);
  }

  function fireYearChange({ detail }) {
    /**
     * Triggered when the Year changes
     */
    fire("yearChange", detail);
  }

  function fireReady({ detail }) {
    /**
     * Triggered when UI is ready
     */
    fire("ready", detail);
  }

  function fireOpen({ detail }) {
    /**
     * Triggered when popup UI opens
     */
    fire("open", detail);
  }

  function fireClose({ detail }) {
    /**
     * Triggered when popup UI closes
     */
    fire("close", detail);
  }
</script>
