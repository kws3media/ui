<div id="ms_container">
  <div class="columns">
    <div class="column">
      <Timepicker
        {style}
        {placeholder}
        {disabled}
        bind:time_24hr
        {options}
        {ui_color}
        bind:value
        {color} />
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <label class="checkbox">
        <input type="checkbox" bind:checked={time_24hr} />
        Time Format 24
      </label>
    </div>
  </div>
</div>

<script>
  import { Panel, Timepicker } from "@kws3/ui";

  export let value = "",
    style = "",
    placeholder = "Select Time..",
    disabled = false,
    time_24hr = false,
    options = {},
    ui_color = "primary",
    color = "";

  let klass = "";
  export { klass as class };
</script>
