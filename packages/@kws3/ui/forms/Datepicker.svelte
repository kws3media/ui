<!--
  @component
  

  @param {string} [value=""] - Input field value, Default: `""`
  @param {string} [style=""] - Inline styles for input field, Default: `""`
  @param {string} [placeholder="Select Date.."] - Placeholder for input field, Default: `"Select Date.."`
  @param {boolean} [disabled=false] - Disable input field, Default: `false`
  @param {object} [options={}] - Flatpicker options, Default: `{}`
  @param {string} [class=""] - Input field classes, Default: `""`

  ### Events
  - `change` - Date change event

-->

<Flatpickr
  options={_options}
  bind:value
  element="#kws-picker"
  on:change={handleChange}>
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
    options = {};

  /**
   * Input field classes
   */
  let klass = "";
  export { klass as class };

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

  function handleChange(event) {
    /**
     * Date change event
     */
    fire("change", event.detail);
  }
</script>
