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
  use:timepicker={[opts, value]}
  class="input is-{color} {klass}"
  type="text"
  {style}
  {placeholder}
  {disabled}
  readonly
  bind:value
  on:change
  on:timeChange={fireTimeChange}
  on:ready={fireReady}
  on:open={fireOpen}
  on:close={fireClose} />

<script>
  import { timepicker } from "./actions";
  import { createEventDispatcher } from "svelte";

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
