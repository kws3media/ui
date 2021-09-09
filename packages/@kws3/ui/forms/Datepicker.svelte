<input
  use:datepicker={[options, value]}
  class="input {klass}"
  type="text"
  {style}
  readonly
  bind:value
  {placeholder}
  {disabled} />

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
