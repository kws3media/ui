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
<svelte:window on:keydown={window_keydown} />
<CardModal title={titleToUse} {size} {is_active} closable={false}>
  <p slot="default">
    {#if icon && icon != ""}
      <Icon {icon} size={icon_size} color={icon_color} />
    {/if}
    {@html _text}
    {#if _type == "prompt"}
      <input
        bind:this={input_box}
        on:keyup={(e) => isEnterKey(e) && ok()}
        type="text"
        class="input"
        bind:value={inputValue} />
    {/if}
  </p>
  <div slot="footer" style="width:100%">
    <div class="field is-grouped is-grouped-right">
      {#if _type != "alert"}
        <div class="control">
          <button on:click={cancel} class="button is-{cancel_button_color}"
            >{#if cancel_button_icon != ""}<Icon
                icon={cancel_button_icon}
                size="small" />{/if}<span>{cancel_button_text}</span></button>
        </div>
      {/if}
      <div class="control">
        <button
          bind:this={ok_button}
          on:click={ok}
          class="button is-{ok_button_color}"
          >{#if ok_button_icon != ""}<Icon
              icon={ok_button_icon}
              size="small" />{/if}<span>{ok_button_text}</span></button>
      </div>
    </div>
  </div>
</CardModal>

<script>
  import { tick, onMount, createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  import { CardModal } from "@kws3/ui";
  import { isEnterKey, isEscKey, capitaliseFirstLetter } from "@kws3/ui/utils";

  const fire = createEventDispatcher();

  /**
   * Title for dialog box
   * @type {string}
   */
  export let title = "",
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

  onMount(async () => {
    await tick();

    switch (_type) {
      case "alert":
        ok_button.focus();
        break;
      case "confirm":
        ok_button.focus();
        break;
      case "prompt":
        input_box.focus();
        break;
    }
  });

  let is_active = true,
    inputValue = null,
    input_box,
    ok_button;

  $: titleToUse = title != "" ? title : capitaliseFirstLetter(_type);

  /**
   * Determines the type of dialog.
   *
   * For internal use only - not part of config object
   */
  export let _type = "",
    /**
     * Text inside dialog box
     *
     * For internal use only - not part of config object
     * @type {string}
     */
    _text = "";

  function cancel() {
    /**
     * For internal use, not part of any configuration
     */
    fire("_done", getCancelPayload());
  }

  function ok() {
    /**
     * For internal use, not part of any configuration
     */
    fire("_done", getOkPayload());
  }

  function getOkPayload() {
    switch (_type) {
      case "alert":
        return;
        break;
      case "confirm":
        return true;
        break;
      case "prompt":
        return inputValue;
        break;
    }
  }

  function getCancelPayload() {
    switch (_type) {
      case "alert":
        return;
        break;
      case "confirm":
        return false;
        break;
      case "prompt":
        return null;
        break;
    }
  }

  function window_keydown(e) {
    if (is_active && isEscKey(e)) {
      cancel();
    }
  }
</script>
