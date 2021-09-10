<!--
  @component


  @param {string} [value=""] - Input field value, Default: `""`
  @param {string} [id=""] - Timepicker id attribute, Default: `""`
  @param {string} [style=""] - Inline styles for input field, Default: `""`
  @param {string} [placeholder="Select Time.."] - Placeholder for input field, Default: `"Select Time.."`
  @param {boolean} [disabled=false] - Disable input field, Default: `false`
  @param {object} [options={}] - Flatpicker options, Default: `{}`
  @param {string} [class=""] - Input field classes, Default: `""`

  ### Events
  - `change` - Change event
  - `ready` - Ready event
  - `open` - Open event
  - `close` - Close event

-->

<!-- <Flatpickr
  options={_options}
  element="#kws-timepicker{_id}"
  bind:value
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
    fire("close", detail)}>
  <div class="flatpickr" id="kws-timepicker{_id}">
    <input
      class="input {klass}"
      type="text"
      readonly
      data-input
      {placeholder}
      {style}
      {disabled} />
  </div>
</Flatpickr> -->
<script>
  // import { createEventDispatcher } from "svelte";

  // import Flatpickr from "svelte-flatpickr";
  // import "flatpickr/dist/flatpickr.css";

  // const fire = createEventDispatcher();

  // /**
  //  * Input field value
  //  */
  // export let value = "",
  //   /**
  //    * Timepicker id attribute
  //    */
  //   id = "",
  //   /**
  //    * Inline styles for input field
  //    */
  //   style = "",
  //   /**
  //    * Placeholder for input field
  //    */
  //   placeholder = "Select Time..",
  //   /**
  //    * Disable input field
  //    */
  //   disabled = false,
  //   /**
  //    * Flatpicker options
  //    * @link https://flatpickr.js.org/options/
  //    */
  //   options = {};

  // /**
  //  * Input field classes
  //  */
  // let klass = "";
  // export { klass as class };

  // /**
  //  * Flatpickr instance
  //  */
  // let flatpickr;

  // let _options = {},
  //   _id = "";

  // $: {
  //   _id = id ? `-${id}` : "";

  //   _options = Object.assign(
  //     {
  //       element: "#kws-timepicker" + _id,
  //       altInput: true,
  //       altFormat: "h:i K",
  //       dateFormat: "H:i",
  //       enableTime: true,
  //       noCalendar: true,
  //       onChange: (date, dateStr) => {
  //         //do something
  //       },
  //     },
  //     options
  //   );
  // }
</script>
