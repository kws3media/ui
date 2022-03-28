<!--
  @component


  @param {object} [value=null] - Value of the Input

This property can be bound to, to fetch the current value, Default: `null`
  @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
  @param {array} [options=[]] - Array of strings, or objects.
Used to populate the list of options in the dropdown, Default: `[]`
  @param {string} [search_key="name"] - If `options` is an array of objects,
this property of each object will be searched, Default: `"name"`
  @param {string} [value_key="id"] - If `options` is an array of objects,
this property of each object will be returned as the value, Default: `"id"`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {boolean} [asyncSelect=false] - For support AsyncSelection, Default: `false`
  @param {boolean} [isLoading=false] - For Check AsyncSelection loading status, Default: `false`
  @param {string} [selected_icon="check"] - Icon used to mark selected items in dropdown list, Default: `"check"`
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
  @param {string} [remove_all_tip="Clear Selection"] - Tooltip text for the Clear selection button, Default: `"Clear Selection"`
  @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
Can be a DOM element or a `string` with the CSS selector of the element.

By default it renders in a custom container appended to `document.body`., Default: `undefined`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `change` - Triggered when the value changes
  - `blur` - Triggered when the input loses focus

  ### Slots
  - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item

Default value: `<span>{option[search_key] || option}</span>`

-->
<MultiSelect
  bind:value
  class={klass}
  max={1}
  {placeholder}
  {options}
  {search_key}
  {value_key}
  {size}
  {color}
  {style}
  {readonly}
  {disabled}
  {hotFilter}
  {selected_icon}
  {remove_all_tip}
  {no_options_msg}
  {dropdown_portal}
  {options_loading}
  on:change={change}
  on:blur={blur}
  let:option
  let:search_key>
  <!--
    Slot containing text for each selectable item

    Default value: `<span>{option[search_key] || option}</span>`
  --><slot
    {search_key}
    {option}>{option[search_key] || option}</slot>
</MultiSelect>

<script>
  import { createEventDispatcher } from "svelte";
  import { MultiSelect } from "@kws3/ui";

  const fire = createEventDispatcher();

  const rootContainerId = "kws-overlay-root";

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = null;
  /**
   * Placeholder text for the input
   */
  export let placeholder = "Please select...";
  /**
   * Array of strings, or objects.
   * Used to populate the list of options in the dropdown
   */
  export let options = [];

  /**
   * If `options` is an array of objects,
   * this property of each object will be searched
   */
  export let search_key = "name";
  /**
   * If `options` is an array of objects,
   * this property of each object will be returned as the value
   */
  export let value_key = "id";
  /**
   * Size of the input
   *  @type {''|'small'|'medium'|'large'}
   */
  export let size = "";
  /**
   * Color of the input
   * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "";
  /**
   * Inline CSS for input container
   */
  export let style = "";
  /**
   * Marks component as read-only
   */
  export let readonly = false;
  /**
   * Function to filter the options from external source
   */
  export let hotFilter = undefined;
  /**
   * For detecting the loading state of Async Select
   */
  export let options_loading = false;
  /**
   * Disables the component
   */
  export let disabled = false;
  /**
   * Icon used to mark selected items in dropdown list
   */
  export let selected_icon = "check";
  /**
   * Message to display when no matching options are found
   */
  export let no_options_msg = "No matching options";
  /**
   * Tooltip text for the Clear selection button
   */
  export let remove_all_tip = "Clear Selection";
  /**
   * Where to render the dropdown list.
   * Can be a DOM element or a `string` with the CSS selector of the element.
   *
   * By default it renders in a custom container appended to `document.body`.
   *
   * @type { HTMLElement|string}
   */
  export let dropdown_portal = "#" + rootContainerId;

  /**
   * CSS classes for input container
   */
  let klass = "";
  export { klass as class };

  function change({ detail }) {
    /**
     * Triggered when the value changes
     */
    fire("change", detail);
  }
  function blur({ detail }) {
    /**
     * Triggered when the input loses focus
     */
    fire("blur", detail);
  }
</script>
