<div>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label for=""
          >Use <code>Ctrl + S</code> key to fire <code>save</code>
          event</label>
        <p>
          <input
            type="text"
            use:ctrlAltC={(event) => {
              eventOne(event, "Save");
            }}
            use:AltF8={(event) => {
              eventTwo(event, "Save");
            }}
            class="input" />
        </p>
        <span class="help is-sucess has-text-success">{eventText}</span>
      </div>
    </div>
  </div>
</div>

<script>
  import { makeKeyDefinition } from "@kws3/ui/keyboard";

  let opts = {
    code: 17, //ctrl
    key: "s",
  };
  const ctrlAltC = makeKeyDefinition("ctrl+alt+c");
  const AltF8 = makeKeyDefinition("alt+F8");

  let eventText = "";
  function eventOne(event) {
    eventText = " ctrl+alt+c Pressed";
  }
  function eventTwo(event) {
    eventText = " alt+F8 Pressed";
  }
</script>
