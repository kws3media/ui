<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Enter inputs to check key stroke</h2>
      <div>
        <input
          type=""
          class="input "
          name=""
          on:keyup={(event) => {
            checkKey(event);
          }} />
      </div>
      {msg}
    </div>
  </div>
</div>

<script>
  import { isEscKey } from "@kws3/ui";

  let msg = "";
  function checkKey(e) {
    if (isEscKey(e)) {
      msg = "Escape key is pressed";
      return;
    }
    msg = "Pressed invalid key";
    return;
  }
</script>
