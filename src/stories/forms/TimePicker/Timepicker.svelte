<div id="ms_container">
  <div class="columns">
    <div class="column">
      <Timepicker
        {style}
        {placeholder}
        {disabled}
        {options}
        {ui_color}
        bind:value
        {time_24hr}
        color={ui_color}
        {min_time}
        {max_time} />
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <label class="checkbox">
        <input type="time" bind:value />
        Value
      </label>
    </div>
    <div class="column">
      <label class="checkbox">
        <input type="checkbox" bind:checked={time_24hr} />
        Time Format 24
      </label>
    </div>
    <div class="column">
      <label class="checkbox">
        <input type="checkbox" bind:checked={disabled} />
        Disable
      </label>
    </div>
    <div class="column">
      <label class="checkbox">
        Min Time
        <input type="time" bind:value={min_time} />
      </label>
      <label class="checkbox">
        Max Time
        <input type="time" bind:value={max_time} />
      </label>
    </div>
    <div class="column">
      <label class="checkbox">
        <select bind:value={ui_color}>
          <option value="primary">Primary</option>
          <option value="danger">Danger</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
        </select>
      </label>
    </div>
  </div>
</div>

<script>
  import { Timepicker } from "@kws3/ui";

  export let value = "",
    style = "",
    placeholder = "Select Time..",
    disabled = false,
    time_24hr = true,
    options = {},
    ui_color = "primary",
    min_time = null,
    max_time = null;

  var current = new Date();

  $: {
    min_time = current.toLocaleTimeString();
  }
</script>
