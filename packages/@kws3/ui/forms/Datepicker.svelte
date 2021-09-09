<!--
  @component
  

  @param {string} [value=""] - Input field value, Default: `""`
  @param {string} [style=""] - Inline styles for input field, Default: `""`
  @param {string} [placeholder="Select Date.."] - Placeholder for input field, Default: `"Select Date.."`
  @param {boolean} [disabled=false] - Disable input field, Default: `false`
  @param {object} [options={}] - Flatpicker options, Default: `{}`
  @param {string} [formattedValue=""] - Formated date value, Default: `""`
  @param {object} [dateFormat=null] - Date format, Default: `null`
  @param {string} [class=""] - Input field classes, Default: `""`

  ### Events
  - `change` - Change event
  - `ready` - Ready event
  - `open` - Open event
  - `close` - Close event
  - `monthChange` - Month change event
  - `yearChange` - Year change event
  - `valueUpdate` - Value update event
  - `dayCreate` - Day create event

-->

<Flatpickr
  {dateFormat}
  options={_options}
  element="#kws-picker"
  bind:value
  bind:formattedValue
  bind:flatpickr
  on:change={({ detail }) =>
    /**
     * Change event
     */
    fire("change", detail)}
  on:ready={({ detail }) =>
    /**
     * Ready event
     */
    fire("ready", detail)}
  on:open={({ detail }) =>
    /**
     * Open event
     */
    fire("open", detail)}
  on:close={({ detail }) =>
    /**
     * Close event
     */
    fire("close", detail)}
  on:monthChange={({ detail }) =>
    /**
     * Month change event
     */
    fire("monthChange", detail)}
  on:yearChange={({ detail }) =>
    /**
     * Year change event
     */
    fire("yearChange", detail)}
  on:valueUpdate={({ detail }) =>
    /**
     * Value update event
     */
    fire("valueUpdate", detail)}
  on:dayCreate={({ detail }) =>
    /**
     * Day create event
     */
    fire("dayCreate", detail)}>
  <div class="flatpickr" id="kws-picker">
    <input
      class="input {klass}"
      type="text"
      readonly
      data-input
      {placeholder}
      {style}
      {disabled} />
  </div>
</Flatpickr>

<script>
  import { createEventDispatcher } from "svelte";

  import Flatpickr from "svelte-flatpickr";
  import "flatpickr/dist/flatpickr.css";

  const fire = createEventDispatcher();

  /**
   * Input field value
   */
  export let value = "",
    /**
     * Inline styles for input field
     */
    style = "",
    /**
     * Placeholder for input field
     */
    placeholder = "Select Date..",
    /**
     * Disable input field
     */
    disabled = false,
    /**
     * Flatpicker options
     * @link https://flatpickr.js.org/options/
     */
    options = {},
    /**
     * Formated date value
     */
    formattedValue = "",
    /**
     * Date format
     */
    dateFormat = null;

  /**
   * Input field classes
   */
  let klass = "";
  export { klass as class };

  /**
   * Flatpickr instance
   */
  let flatpickr;

  let _options = {};

  $: {
    _options = Object.assign(
      {
        element: "#kws-picker",
        altInput: true,
        altFormat: "d/m/Y",
        dateFormat: "Y-m-d",
        onChange: (date, dateStr) => {
          //do something
        },
      },
      options
    );
  }
</script>
