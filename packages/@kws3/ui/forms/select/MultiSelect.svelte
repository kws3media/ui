<!--
  @component


  @param {string} [value=""] - Value of the Input

This property can be bound to, to fetch the current value, Default: `""`
  @param {object} [max=null] - Maximum number of selectable items from dropdown list.

`null` means unlimited, Default: `null`
  @param {string} [placeholder=""] - Placeholder text for the input, Default: `""`
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
  @param {string} [no_options_msg="No matching options"] - Message to display when no matching options are found, Default: `"No matching options"`
  @param {string} [remove_btn_tip="Remove"] - Hover text for Remove button, Default: `"Remove"`
  @param {string} [remove_all_tip="Remove all"] - Hover text for Remove All button, Default: `"Remove all"`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `add` - Triggered when an item is added from dropdown list
  - `remove` - Triggered when an item is removed from selected options
  - `change` - Triggered when value changes
  - `blur` - Triggered when component looses focus

  ### Slots
  - `<slot name="default" {search_key} {option} />` - Slot containing text for each selectable item

Default value: `<span>{option[search_key] || option}</span>`

-->
<Select
  bind:value
  class={klass}
  {max}
  {placeholder}
  {options}
  {search_key}
  {value_key}
  {size}
  {color}
  {style}
  {readonly}
  {disabled}
  {remove_all_tip}
  {remove_btn_tip}
  {no_options_msg}
  on:add={add}
  on:change={change}
  on:remove={remove}
  on:blur={blur}
  let:option
  let:search_key>
  <!--
    Slot containing text for each selectable item

    Default value: `<span>{option[search_key] || option}</span>`
  --><slot
    {search_key}
    {option}>{option[search_key] || option}</slot>
</Select>

<script>
  import { createEventDispatcher } from "svelte";
  import Select from "./Select.svelte";

  const fire = createEventDispatcher();

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = "";
  /**
   * Maximum number of selectable items from dropdown list.
   *
   * `null` means unlimited
   */
  export let max = null;
  /**
   * Placeholder text for the input
   */
  export let placeholder = "";
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
   * Disables the component
   */
  export let disabled = false;
  /**
   * Message to display when no matching options are found
   */
  export let no_options_msg = "No matching options";
  /**
   * Hover text for Remove button
   * */
  export let remove_btn_tip = "Remove";
  /**
   * Hover text for Remove All button
   */
  export let remove_all_tip = "Remove all";

  /**
   * CSS classes for input container
   */
  let klass = "";
  export { klass as class };

  function add({ detail }) {
    /**
     * Triggered when an item is added from dropdown list
     */
    fire("add", detail);
  }
  function remove({ detail }) {
    /**
     * Triggered when an item is removed from selected options
     */
    fire("remove", detail);
  }
  function change({ detail }) {
    /**
     * Triggered when value changes
     */
    fire("change", detail);
  }
  function blur({ detail }) {
    /**
     * Triggered when component looses focus
     */
    fire("blur", detail);
  }
</script>
