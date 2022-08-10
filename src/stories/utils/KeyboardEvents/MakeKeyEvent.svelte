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
            use:save={(event) => {
              saveEvent(event, "Save");
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
  const save = makeKeyDefinition(opts); //event on 's' key

  let eventText = "";
  function saveEvent(event, key) {
    eventText = key + " Pressed";
  }
</script>
