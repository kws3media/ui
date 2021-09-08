<!--
  @component


  @param {string} [value=""] - Input field value, Default: `""`
  @param {string} [style=""] - Inline styles for input field, Default: `""`
  @param {boolean} [disabled=false] - Disable input field, Default: `false`
  @param {object} [options={}] - Flatpicker options, Default: `{}`
  @param {string} [class=""] - Input field classes, Default: `""`

-->

<Flatpickr options={_options} bind:value element="#kws-picker">
  <div class="flatpickr" id="kws-picker">
    <input
      class="input {klass}"
      type="text"
      readonly
      placeholder="Select Date.."
      data-input
      {style}
      {disabled} />
  </div>
</Flatpickr>

<script>
  import Flatpickr from "svelte-flatpickr";
  import "flatpickr/dist/flatpickr.css";

  /**
   * Input field value
   */
  export let value = "",
    /**
     * Inline styles for input field
     */
    style = "",
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
</script>
