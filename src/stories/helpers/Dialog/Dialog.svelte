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

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Title text of the Dialog box.
   * Will default to `Alert`, `Confirm` or `Prompt` depending on the dialog type
   * @type {string}
   */
  export let title = "",
    /**
     * Additional text to provide further context to the user
     */
    help_text = "",
    /**
     * Size of the Dialog box
     * @type {SizeOptions}
     */
    size = "small",
    /**
     * Default value inside text input displayed on `prompt()` Dialogs
     * @type {string}
     */
    input_value = "",
    /**
     * Icon in the Dialog box
     */
    icon = "",
    /**
     * Color of the Icon in the Dialog box
     * @type {ColorOptions}
     */
    icon_color = "primary",
    /**
     * Size of the Icon in the Dialog box
     * @type {SizeOptions}
     */
    icon_size = "",
    /**
     * Text to be displayed in the OK button
     */
    ok_button_text = "Ok",
    /**
     * Color of OK button
     * @type {ColorOptions} ok_button_color
     */
    ok_button_color = "primary",
    /**
     * Icon in the OK button
     * @type {string}
     */
    ok_button_icon = "check",
    /**
     * Text to be displayed in the Cancel button
     */
    cancel_button_text = "Cancel",
    /**
     * Color of Cancel button
     * @type {ColorOptions}
     */
    cancel_button_color = "",
    /**
     * Icon in the Cancel button
     * @type {string}
     */
    cancel_button_icon = "ban";

  let useNative = false;

  function openAlert() {
    if (useNative) {
      alert("This is an alert");
    } else {
      KwsDialog.alert("This is an alert", {
        title,
        help_text,
        size,
        input_value,
        icon,
        icon_color,
        icon_size,
        ok_button_text,
        ok_button_color,
        ok_button_icon,
        cancel_button_text,
        cancel_button_color,
        cancel_button_icon,
      });
    }
  }

  async function openConfirm() {
    let agreed = null;
    if (useNative) {
      agreed = confirm("Agree with everything?");
    } else {
      agreed = await KwsDialog.confirm("Agree with everything?", {
        title,
        help_text,
        size,
        input_value,
        icon,
        icon_color,
        icon_size,
        ok_button_text,
        ok_button_color,
        ok_button_icon,
        cancel_button_text,
        cancel_button_color,
        cancel_button_icon,
      });
    }

    console.log(agreed);
  }

  async function openPrompt() {
    let age = null;
    if (useNative) {
      age = prompt("How old are you?");
    } else {
      age = await KwsDialog.prompt("How old are you?", {
        title,
        help_text,
        size,
        input_value,
        icon,
        icon_color,
        icon_size,
        ok_button_text,
        ok_button_color,
        ok_button_icon,
        cancel_button_text,
        cancel_button_color,
        cancel_button_icon,
      });
    }

    console.log(age);
  }
</script>
