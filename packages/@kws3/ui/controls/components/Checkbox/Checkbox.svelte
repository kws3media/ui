<label
  class:has-icon={has_icon}
  class:is-inverted={inverted}
  class:is-circle={circle}
  class="checkbox kws-checkbox is-{size} is-{color} {classes}"
  {style}>
  <input type="checkbox" {disabled} bind:checked on:change />
  <span class="kws-checkbox-label" style={label_style}>
    <slot />
  </span>
  {#if has_icon}
    <Icon family={icon_family} {icon} size="small" />
  {/if}
</label>

<script>
  import { Icon } from "@kws3/ui";

  export let classes = "",
    style = "",
    label_style = "",
    size = "",
    color = "",
    inverted = false,
    circle = false,
    checked = false,
    disabled = false,
    icon = "check",
    icon_family = null;

  $: has_icon = icon && icon != "";
</script>
