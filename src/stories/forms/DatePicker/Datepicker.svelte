<div id="ms_container">
  <div class="columns">
    <div class="column">
      <Datepicker
        {style}
        {placeholder}
        {disabled}
        bind:value
        color={calendar_color}
        {min_date}
        {max_date}
        {enable_dates}
        {disable_dates}
        {range_mode}
        {options}
        {calendar_color} />
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <label class="checkbox">
        <input type="date" bind:value />
        Value
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
        UI color
        <select bind:value={calendar_color}>
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
  import { Datepicker } from "@kws3/ui";

  export let value = "",
    style = "",
    placeholder = "Select Date..",
    disabled = false,
    min_date = null,
    max_date = null,
    enable_dates = [],
    disable_dates = [],
    range_mode = false,
    options = {},
    calendar_color = "primary";
</script>
