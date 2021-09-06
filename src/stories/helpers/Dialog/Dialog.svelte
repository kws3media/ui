<div class="columns">
  <div class="column">
    <button class="button" type="button" on:click={kAlert}>Open Alert</button>
  </div>
  <div class="column">
    <button class="button" type="button" on:click={kConfirm}
      >Open Confirm</button>
  </div>
  <div class="column">
    <button class="button" type="button" on:click={kPrompt}>Open Prompt</button>
  </div>
</div>

<script>
  import {
    alert as kAlert,
    confirm as kConfirm,
    prompt as kPrompt,
  } from "@kws3/ui";

  import { Dialog } from "@kws3/ui";

  export let a = 0;
</script>
