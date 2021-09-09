<input
  use:datepicker={[options, value]}
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

<input type="text" bind:value />

<script>
  import datepicker from "./actions";

  export let value = "";
  export let style = "";
  export let disabled = false;
  export let placeholder = "";
  export let options = {};

  let klass = "";
  export { klass as class };
</script>
