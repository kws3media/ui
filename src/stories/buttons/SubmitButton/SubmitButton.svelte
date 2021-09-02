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
        bind:tracker={success_tracker} />
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
        bind:tracker={failed_tracker} />
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
    disabled = false,
    success_tracker = {
      saving: false,
      saved: false,
      error: false,
    },
    failed_tracker = {
      saving: false,
      saved: false,
      error: false,
    };

  export function success() {
    success_tracker = {
      saving: true,
      saved: false,
      error: false,
    };

    setTimeout(() => {
      success_tracker = {
        saving: false,
        saved: true,
        error: false,
      };
      setTimeout(() => {
        success_tracker.saved = false;
      }, 2000);
    }, 1000);
  }

  export function failed() {
    failed_tracker = {
      saving: true,
      saved: false,
      error: false,
    };

    setTimeout(() => {
      failed_tracker = {
        saving: false,
        saved: false,
        error: true,
      };
      setTimeout(() => {
        failed_tracker.error = false;
      }, 2000);
    }, 1000);
  }
</script>
