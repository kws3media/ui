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

  export let enable_dates = null;
  export let disable_dates = null;
  export let range_mode = false;

  export let options = {};

  let klass = "";
  export { klass as class };

  let opts;

  $: range_mode, enable_dates, disable_dates, options, fillOptions();

  function fillOptions() {
    let _opts = Object.assign(
      {
        mode: range_mode ? "range" : "single",
      },
      options
    );
    if (enable_dates) {
      _opts.enabled = enable_dates;
    }
    if (disable_dates) {
      _opts.disabled = disable_dates;
    }

    opts = _opts;
  }
</script>
