<!--
  @component


  @param {string} [title=""] - Title for dialog box, Default: `""`
  @param {string} [text=""] - Text inside dialog box, Default: `""`
  @param {'small'|'medium'|'large'} [size=""] - Size of the modal, Default: `""`
  @param {string} [icon=""] - Icon on the dialog, Default: `""`
  @param {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [icon_color="primary"] - Color of the Icon, Default: `"primary"`
  @param {'small'|'medium'|'large'} [icon_size="null"] - Size of the Icon, Default: `"null"`
  @param {string} [ok_button_text="Ok"] - Ok_button_text property, Default: `"Ok"`
  @param {string} [ok_button_color="primary"] - Ok_button_color property, Default: `"primary"`
  @param {string} [ok_button_icon="check"] - Icon on the OK button, Default: `"check"`
  @param {string} [cancel_button_text="Cancel"] - Cancel_button_text property, Default: `"Cancel"`
  @param {string} [cancel_button_color=""] - Cancel_button_color property, Default: `""`
  @param {string} [cancel_button_icon="ban"] - Icon on the Cancel button, Default: `"ban"`

-->

<CardModal {title} {size} {is_active} closable={false}>
  <p slot="default">
    {#if icon && icon != ""}
      <Icon {icon} size={icon_size} color={icon_color} />
    {/if}
    {@html text}
  </p>
</CardModal>

<script>
  import { Icon } from "@kws3/ui";
  import { CardModal } from "@kws3/ui";

  /**
   * Title for dialog box
   * @type {string}
   */
  export let title = "",
    /**
     * Text inside dialog box
     * @type {string}
     */
    text = "",
    /**
     * Size of the modal
     * @type {'small'|'medium'|'large'}
     */
    size = "",
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
    icon_size = null,
    ok_button_text = "Ok",
    ok_button_color = "primary",
    /**
     * Icon on the OK button
     * @type {string}
     */
    ok_button_icon = "check",
    cancel_button_text = "Cancel",
    cancel_button_color = "",
    /**
     * Icon on the Cancel button
     * @type {string}
     */
    cancel_button_icon = "ban";

  let is_active = true;
</script>
