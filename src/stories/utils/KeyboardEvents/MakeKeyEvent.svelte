<div>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label for=""
          >Use following key combinations to check custom key events:</label>
        <p>
          <code>Ctrl + Alt + c</code>, <code>Alt + F8</code>,
          <code>Meta + k</code>, <code>Shift + x</code>
        </p>
        <p>
          <input
            type="text"
            use:ctrlAltC={(event) => {
              eventKeyPressed(event, "`Ctrl + Alt + c`");
            }}
            use:AltF8={(event) => {
              eventKeyPressed(event, "`Alt + F8`");
            }}
            use:MetaD={(event) => {
              eventKeyPressed(event, "`Meta + k`");
            }}
            use:ShiftX={(event) => {
              eventKeyPressed(event, "`Shift + x`");
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

  const ctrlAltC = makeKeyDefinition("ctrl+alt+c");
  const AltF8 = makeKeyDefinition("alt+F8");
  const MetaD = makeKeyDefinition("meta+k");
  const ShiftX = makeKeyDefinition("shift+x");

  let eventText = "";
  function eventKeyPressed(event, key) {
    eventText = key + " Pressed";
  }
</script>
