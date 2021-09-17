<!--
  @component


  @param {string} [title=""] - Title text of the Dialog box, Default: `""`
  @param {string} [help_text=""] - Additional text to provide further context to the user, Default: `""`
  @param {'small'|'medium'|'large'} [size="small"] - Size of the Dialog box, Default: `"small"`
  @param {string} [input_value=""] - Default value inside text input displayed on `prompt()` Dialogs, Default: `""`
  @param {string} [icon=""] - Icon in the Dialog box, Default: `""`
  @param {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [icon_color="primary"] - Color of the Icon in the Dialog box, Default: `"primary"`
  @param {'small'|'medium'|'large'} [icon_size=""] - Size of the Icon in the Dialog box, Default: `""`
  @param {string} [ok_button_text="Ok"] - Text to be displayed in the OK button, Default: `"Ok"`
  @param {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [ok_button_color="primary"] - Color of OK button, Default: `"primary"`
  @param {string} [ok_button_icon="check"] - Icon in the OK button, Default: `"check"`
  @param {string} [cancel_button_text="Cancel"] - Text to be displayed in the Cancel button, Default: `"Cancel"`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [cancel_button_color=""] - Color of Cancel button, Default: `""`
  @param {string} [cancel_button_icon="ban"] - Icon in the Cancel button, Default: `"ban"`
  @param {string} [_type=""] - Determines the type of Dialog.

For internal use only - not part of config object, Default: `""`
  @param {string} [_text=""] - Text inside Dialog box

For internal use only - not part of config object, Default: `""`

  ### Events
  - `_done` - For internal use, not part of any configuration

-->
<svelte:window on:keydown={window_keydown} />
<CardModal title={titleToUse} {size} {is_active} closable={false}>
  <div slot="default">
    <div class="columns is-vcentered is-mobile">
      {#if icon && icon != ""}
        <div class="column is-narrow">
          <Icon {icon} size={icon_size} color={icon_color} />
        </div>
      {/if}
      <div class="column">
        <div>
          <span class="is-block">{@html _text}</span>
          {#if _type == "prompt"}
            <div class="field" style="margin-top:0.5rem;">
              <div class="control">
                <input
                  bind:this={input_box}
                  on:keyup={(e) => isEnterKey(e) && ok()}
                  type="text"
                  class="input"
                  bind:value={input_value} />
              </div>
            </div>
          {/if}
          {#if help_text && help_text != ""}
            <span class="help">{help_text}</span>
          {/if}
        </div>
      </div>
    </div>
  </div>
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
   * Title text of the Dialog box
   * @type {string}
   */
  export let title = "",
    /**
     * Additional text to provide further context to the user
     */
    help_text = "",
    /**
     * Size of the Dialog box
     * @type {'small'|'medium'|'large'}
     */
    size = "small",
    /**
     * Default value inside text input displayed on `prompt()` Dialogs
     * @type {string}
     */
    input_value = "",
    /**
     * Icon in the Dialog box
     */
    icon = "",
    /**
     * Color of the Icon in the Dialog box
     * @type {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    icon_color = "primary",
    /**
     * Size of the Icon in the Dialog box
     * @type {'small'|'medium'|'large'}
     */
    icon_size = "",
    /**
     * Text to be displayed in the OK button
     */
    ok_button_text = "Ok",
    /**
     * Color of OK button
     * @type {'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    ok_button_color = "primary",
    /**
     * Icon in the OK button
     * @type {string}
     */
    ok_button_icon = "check",
    /**
     * Text to be displayed in the Cancel button
     */
    cancel_button_text = "Cancel",
    /**
     * Color of Cancel button
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    cancel_button_color = "",
    /**
     * Icon in the Cancel button
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
        input_box.select();
        break;
    }
  });

  let is_active = true,
    input_box,
    ok_button;

  $: titleToUse = title != "" ? title : capitaliseFirstLetter(_type);

  /**
   * Determines the type of Dialog.
   *
   * For internal use only - not part of config object
   */
  export let _type = "",
    /**
     * Text inside Dialog box
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
        return input_value;
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
