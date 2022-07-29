<!--
  @component


  @param {string} [value=""] - Accepts a date value in the format `H:i`

Where `H` is in 24hr format

This property can be bound to, to fetch the selected time. Output is in the same format as input., Default: `""`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {''|'primary'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Colour of the Time picker input, Default: `""`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {string} [placeholder="Select Time.."] - Placeholder text for the input, Default: `"Select Time.."`
  @param {'primary'|'warning'|'info'|'danger'|'dark'|'light'} [ui_color="primary"] - Colour of popup time selection UI, Default: `"primary"`
  @param {boolean} [time_24hr=false] - Display time selection UI in 24hr format, Default: `false`
  @param {object} [options={}] - Extended set of options as supported by Flatpicker
  @param {any} [min_time=null] - Set earliest selectable time as string
  **Example:** `"12:00 PM"` Default: `null`
  @param {any} [max_time=null] - Set latest selectable time as string
  **Example:** `"12:00 AM"` Default: `null`

See: https://flatpickr.js.org/options/, Default: `{}`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

  ### Events
  - `timeChange` - Triggered when time changes
  - `ready` - Triggered when UI is ready
  - `open` - Triggered when popup UI opens
  - `close` - Triggered when popup UI closes
  - `change` - Native input change event

-->
<!--Native input change event-->
<input
  use:timepicker={{ opts, value, placeholder, klass, style, disabled, color }}
  class="input is-{color} {klass}"
  type="text"
  {style}
  {placeholder}
  {disabled}
  {readonly}
  bind:value
  on:change
  on:timeChange={fireTimeChange}
  on:ready={fireReady}
  on:open={fireOpen}
  on:close={fireClose} />

<script>
  import { createEventDispatcher } from "svelte";
  import { timepicker } from "./actions";

  const fire = createEventDispatcher();

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
   * Colour of the Time picker input
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
   * Set earliest selectable time as string
   *
   * **Example:** `"01:00 PM"` or "13:00"`
   * @type {any}
   */
  export let min_time = null;
  /**
   * Set latest selectable time as string
   *
   * **Example:** `"03:00 PM"` or "15:00"`
   * @type {any}
   */
  export let max_time = null;

  /**
   * Extended set of options as supported by Flatpicker
   *
   * See: https://flatpickr.js.org/options/
   */
  export let options = {};

  /**
   * Allows the user to enter directly into the input field. By default, direct entry is disabled.
   */
  export let readonly = true;

  /**
   * CSS classes for the input
   */

  let klass = "";
  export { klass as class };

  let opts;

  $: ui_color, options, time_24hr, min_time, max_time, readonly, fillOptions();

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    return {
      hour: String(hours),
      minute: String(minutes),
      time: `${hours}:${minutes}`,
    };
  };

  function fillOptions() {
    let _opts = Object.assign(
      {
        color: ui_color,
        time_24hr,
      },
      options
    );

    if (min_time) {
      let _minTime24 = convertTime12to24(min_time);
      _opts.minTime = _minTime24.time;
      _opts.defaultHour = _minTime24.hour;
      _opts.defaultMinute = _minTime24.minute;
    }

    if (max_time) {
      let _maxTime24 = convertTime12to24(max_time);
      _opts.maxTime = _maxTime24.time;
    }

    _opts.allowInput = true;
    _opts.clickOpens = true;
    if (readonly) {
      _opts.clickOpens = false;
      _opts.allowInput = false;
    }
    opts = _opts;
  }

  function fireTimeChange({ detail }) {
    /**
     * Triggered when time changes
     */
    fire("timeChange", detail);
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
