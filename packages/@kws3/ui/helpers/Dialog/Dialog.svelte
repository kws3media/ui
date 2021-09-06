<div class="is-overlay">
  {#if icon && icon != ""}
    <Icon {icon} size={icon_size} color={icon_color} />
  {/if}
  <h1>{title}</h1>
  <p>Dialog</p>
</div>

<script>
  import { Icon } from "@kws3/ui";

  /**
   * Title for dialog box
   * @type {string}
   */
  export let title = "",
    /**
     * Icon on the dialog
     * @type {string}
     */
    icon = "",
    /**
     * Color of the Icon
     * @type {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    icon_color = "primary",
    /**
     * Size of the Icon
     * @type {'small'|'medium'|'large'}
     */
    icon_size = null;
</script>
