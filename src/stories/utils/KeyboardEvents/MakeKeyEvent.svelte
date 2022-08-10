<div>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label for=""
          >Use 's' key to fire <code>save</code>
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

  const save = makeKeyDefinition(83); //event on 's' key

  let eventText = "";
  function saveEvent(event, key) {
    eventText = key + " Pressed";
  }
</script>
