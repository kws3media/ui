<div class="columns">
  <div class="column">
    <form action="" on:submit|preventDefault={success}>
      <KwsButton
        {text}
        {saved_text}
        {error_text}
        {color}
        {size}
        {icon_only}
        {disabled}
        bind:this={BUTTON_1} />
      <p class="is-block mt-2">This will succeed.</p>
    </form>
  </div>
  <div class="column">
    <form action="" on:submit|preventDefault={failed}>
      <KwsButton
        {text}
        {saved_text}
        {error_text}
        {color}
        {size}
        {icon_only}
        {disabled}
        bind:this={BUTTON_2} />
      <p class="is-block mt-2">This will fail.</p>
    </form>
  </div>
</div>

<script>
  import { SubmitButton as KwsButton } from "@kws3/ui";

  export let color = "primary",
    size = "",
    text = "Save Changes",
    saved_text = "Saved",
    error_text = "Failed to Save",
    icon_only = false,
    disabled = false;

  let BUTTON_1 = null;
  let BUTTON_2 = null;

  export function success() {
    BUTTON_1.saving();
    setTimeout(() => {
      BUTTON_1.saved();
    }, 1000);
  }

  export function failed() {
    BUTTON_2.saving();
    setTimeout(() => {
      BUTTON_2.error();
    }, 1000);
  }
</script>
