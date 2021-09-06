<Checkbox bind:checked={useNative}>Use Native Dialogs</Checkbox>
<hr />
<div class="columns">
  <div class="column has-text-centered">
    <button class="button is-primary" type="button" on:click={openAlert}
      >Open Alert</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-info" type="button" on:click={openConfirm}
      >Open Confirm</button>
  </div>
  <div class="column has-text-centered">
    <button class="button is-dark" type="button" on:click={openPrompt}
      >Open Prompt</button>
  </div>
</div>

<script>
  import { Dialog as KwsDialog } from "@kws3/ui";
  import { Checkbox } from "@kws3/ui";

  let useNative = false;

  function openAlert() {
    if (useNative) {
      alert("hello");
    } else {
      KwsDialog.alert("hello", $$props);
    }
  }

  function openConfirm() {
    if (useNative) {
      confirm("agree?");
    } else {
      KwsDialog.confirm("agree?", $$props);
    }
  }

  function openPrompt() {
    if (useNative) {
      prompt("How old are you?");
    } else {
      KwsDialog.prompt("How old are you?", $$props);
    }
  }
</script>
