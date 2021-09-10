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
   * Inline CSS for the Date-picker
   */
  export let style = "";
  export let color = "";
  /**
   * Disables the component
   */
  export let disabled = false;
  /**
   * Placeholder text for the Date-picker
   */
  export let placeholder = "";

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
   * CSS classes for the Date-picker
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
