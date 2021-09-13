<!--
  @component


  @param {string} [value=""] - Accepts a date value in the format

`yyyy-mm-dd`, Default: `""`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Date picker input, Default: `""`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder=""] - Placeholder text for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [calendar_color="primary"] - Colour of the Calendar, Default: `"primary"`
  @param {object} [min_date=null] - Set earliest selectable date as an object, Default: `null`
  @param {object} [max_date=null] - Set latest selectable date as an object, Default: `null`
  @param {array} [enable_dates=[]] - Enable_dates property, Default: `[]`
  @param {array} [disable_dates=[]] - Disable_dates property, Default: `[]`
  @param {boolean} [range_mode=false] - Range_mode property, Default: `false`
  @param {object} [options={}] - Options property, Default: `{}`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `change`
  - `dateChange`
  - `ready`
  - `open`
  - `close`
  - `monthChange`
  - `yearChange`

-->
<input
  use:datepicker={[opts, value]}
  class="input is-{color} {klass}"
  type="text"
  {style}
  {placeholder}
  {disabled}
  readonly
  bind:value
  on:change
  on:dateChange
  on:ready
  on:open
  on:close
  on:monthChange
  on:yearChange />

<script>
  import datepicker from "./actions";

  /**
   * Accepts a date value in the format
   *
   * `yyyy-mm-dd`
   */
  export let value = "";
  /**
   * Inline CSS for the input
   */
  export let style = "";
  /**
   * Colour of the Date picker input
   *
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
  export let placeholder = "";
  /**
   * Colour of the Calendar
   *
   * @type {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let calendar_color = "primary";
  /**
   * Set earliest selectable date as an object
   */
  export let min_date = null;
  /**
   * Set latest selectable date as an object
   */
  export let max_date = null;
  /**
   *
   * @type {array}
   */
  export let enable_dates = [];
  /**
   *
   * @type {array}
   */
  export let disable_dates = [];
  export let range_mode = false;

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
</script>
