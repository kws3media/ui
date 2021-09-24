<Select
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
  {remove_all_tip}
  {remove_btn_tip}
  {no_options_msg} />

<script>
  import Select from "./Select.svelte";

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = "";
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
</script>
