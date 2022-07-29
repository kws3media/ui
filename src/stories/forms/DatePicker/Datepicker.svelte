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
        <input type="checkbox" bind:checked={range_mode} />
        Range Mode
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
    <div class="column">
      <label class="checkbox">
        Min Date
        <input type="date" bind:value={min_date} />
      </label>
      <label class="checkbox">
        Max Date
        <input type="date" bind:value={max_date} />
      </label>
    </div>

    <div class="column">
      <label class="checkbox">
        <input type="checkbox" bind:checked={is_en_dts} />
        Enabled Dates
      </label>
      {#if is_en_dts}
        <label class="checkbox">
          <input type="date" bind:value={en_dt} />
          <button
            type="button"
            on:click={(event) => {
              pushDate("en", event);
            }}>Add</button>
        </label>
        <p style="font-size: 8px;">{enable_dates.toString()}</p>
      {/if}

      <label class="checkbox">
        <input type="checkbox" bind:checked={is_ds_dts} />
        Disabled Dates
      </label>

      {#if is_ds_dts}
        <label class="checkbox">
          <input type="date" bind:value={dis_dt} />
          <button
            type="button"
            on:click={(event) => {
              pushDate("ds", event);
            }}>Add</button>
        </label>
        <p style="font-size: 8px;">{disable_dates.toString()}</p>
      {/if}
    </div>
  </div>
</div>

<script>
  import { Datepicker } from "@kws3/ui";

  export let value = "",
    style = "",
    placeholder = "Select Date..",
    disabled = false,
    min_date = "",
    max_date = "",
    enable_dates = [],
    disable_dates = [],
    range_mode = false,
    options = {},
    calendar_color = "primary";

  let en_dt = "";
  let dis_dt = "";
  let is_en_dts = false;
  let is_ds_dts = false;

  $: {
    console.log(enable_dates);
    if (is_en_dts || is_ds_dts) {
      min_date = "";
      max_date = "";
    }
  }

  function pushDate(opt) {
    if (opt === "en") {
      let _newArr = enable_dates;
      _newArr.push(en_dt.toString());
      enable_dates = _newArr;
    }
    if (opt === "ds") {
      let _newArrDs = disable_dates;
      _newArrDs.push(dis_dt.toString());
      disable_dates = _newArrDs;
    }
  }
</script>
