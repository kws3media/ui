<script>
  import ConfirmButton from "../ConfirmButton/ConfirmButton.svelte";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export const classes = "",
    button_class = "",
    text = "Delete",
    size = "",
    icon = "minus-circle",
    color = "danger",
    cy = "",
    doing_icon = "hourglass",
    doing_text = "Deleting...",
    done_icon = "check",
    done_text = "Deleted",
    context = null,
    icon_only = false,
    disabled = false;

  $: properties = { ...$$props };

  // reviwed
</script>

<ConfirmButton
  {...properties}
  on:error
  on:do={({ detail }) => fire('erase', detail)}
  on:done={({ detail }) => fire('erased', detail)}
/>
