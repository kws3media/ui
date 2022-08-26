<div>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label for="">Use any of the following keys to check</label>
        <p>{keys}</p>
        <p>
          <input
            type="text"
            use:enter={(event) => {
              eventSent(event, "Enter");
            }}
            use:tab={(event) => {
              eventSent(event, "Tab");
            }}
            use:escape={(event) => {
              eventSent(event, "Escape");
            }}
            use:space={(event) => {
              eventSent(event, "Space");
            }}
            use:leftarrow={(event) => {
              eventSent(event, "Leftarrow");
            }}
            use:rightarrow={(event) => {
              eventSent(event, "Rightarrow");
            }}
            use:downarrow={(event) => {
              eventSent(event, "Downarrow");
            }}
            use:uparrow={(event) => {
              eventSent(event, "Uparrow");
            }}
            use:backspace={(event) => {
              eventSent(event, "Backspace");
            }}
            use:del={(event) => {
              eventSent(event, "Delete");
            }}
            class="input" />
        </p>
        <span class="help is-sucess has-text-success">{eventText}</span>
      </div>
    </div>
  </div>
</div>

<script>
  import {
    enter,
    tab,
    escape,
    space,
    leftarrow,
    rightarrow,
    downarrow,
    uparrow,
    backspace,
    del,
  } from "@kws3/ui/keyboard";

  let keys =
    "Enter,Tab, Escape,Space bar,Left Arrow, Right Arrow, Down Arrow, Up Arrow, Back Space, Delete";
  let eventText = "";

  function eventSent(event, key) {
    eventText = key + " Pressed";
  }
</script>
