<script>
  import Icon from "../helpers/Icon.svelte";

  export let classes = "",
    size = "",
    color = "primary",
    text = "Save Changes",
    saved_text = "Saved",
    error_text = "Failed to Save",
    icon = "save",
    cy = "submit",
    tracker = {
      saving: false,
      saved: false,
      error: false,
    },
    icon_only = false,
    disabled = false;

  $: err_text = error_text == "" ? text : error_text;
  $: icon_size = size == "large" ? "" : "small";

  // reviwed
</script>

<button
  class="button {classes} is-{size} {tracker.saving ? 'is-loading is-' + color : tracker.error ? 'is-danger' : tracker.saved ? 'is-success' : 'is-' + color}"
  type="submit"
  {disabled}
  data-cy={cy}
>
  {#if tracker.saved}
    <Icon icon="check" size={icon_size} />
    {#if !icon_only}<span>{saved_text}</span>{/if}
  {:else if tracker.error}
    <Icon icon="exclamation" size={icon_size} />
    {#if !icon_only}<span>{err_text}</span>{/if}
  {:else}
    <Icon {icon} size={icon_size} />
    {#if !icon_only}<span>{text}</span>{/if}
  {/if}
</button>
