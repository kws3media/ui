<input
  use:datepicker={[opts, value]}
  class="input {klass}"
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

  export let value = "";
  export let style = "";
  export let disabled = false;
  export let placeholder = "";

  export let min_date = null;
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

  let klass = "";
  export { klass as class };

  let opts;

  $: range_mode,
    enable_dates,
    disable_dates,
    min_date,
    max_date,
    options,
    fillOptions();

  function fillOptions() {
    let _opts = Object.assign(
      {
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
