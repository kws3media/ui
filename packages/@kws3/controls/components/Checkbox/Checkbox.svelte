<label
  class:has-icon="{has_icon}"
  class:is-inverted="{inverted}"
  class:is-circle="{circle}"
  class="checkbox kws-checkbox is-{size} is-{color} {classes}"
  style="{style}">
  <input type="checkbox" disabled="{disabled}" bind:checked on:change />
  <span class="kws-checkbox-label" style="{label_style}">
    <slot />
  </span>
  {#if has_icon}
    <Icon family="{icon_family}" icon="{icon}" size="small" />
  {/if}
</label>

<script>
  import Icon from '@kws3/helpers';

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
