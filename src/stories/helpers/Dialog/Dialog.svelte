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
  //@ts-nocheck
  import { Dialog as KwsDialog } from "@kws3/ui";
  import { Checkbox } from "@kws3/ui";

  let useNative = false;

  function openAlert() {
    if (useNative) {
      alert("This is an alert");
    } else {
      KwsDialog.alert("This is an alert", $$props);
    }
  }

  async function openConfirm() {
    let agreed = null;
    if (useNative) {
      agreed = confirm("Agree with everything?");
    } else {
      agreed = await KwsDialog.confirm("Agree with everything?", $$props);
    }

    console.log(agreed);
  }

  async function openPrompt() {
    let age = null;
    if (useNative) {
      age = prompt("How old are you?");
    } else {
      age = await KwsDialog.prompt("How old are you?", $$props);
    }

    console.log(age);
  }
</script>
