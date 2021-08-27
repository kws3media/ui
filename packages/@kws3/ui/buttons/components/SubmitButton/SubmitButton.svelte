<!--
  @component


  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [size=""] - Size property, Default: `""`
  @param {string} [color="primary"] - Color property, Default: `"primary"`
  @param {string} [text="Save Changes"] - Text property, Default: `"Save Changes"`
  @param {string} [saved_text="Saved"] - Saved_text property, Default: `"Saved"`
  @param {string} [error_text="Failed to Save"] - Error_text property, Default: `"Failed to Save"`
  @param {string} [icon="save"] - Icon property, Default: `"save"`
  @param {string} [cy="submit"] - Cy property, Default: `"submit"`
  @param {object} [tracker={}] - Tracker property, Default: `{}`
  @param {boolean} [icon_only=false] - Icon_only property, Default: `false`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`

-->
<button
  class="button {classes} is-{size} {tracker.saving
    ? 'is-loading is-' + color
    : tracker.error
    ? 'is-danger'
    : tracker.saved
    ? 'is-success'
    : 'is-' + color}"
  type="submit"
  {disabled}
  data-cy={cy}>
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

<script>
  import { Icon } from "@kws3/ui";

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
