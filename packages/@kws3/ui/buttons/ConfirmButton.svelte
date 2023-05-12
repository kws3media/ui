<!--
  @component


  @param {string} [button_class=""] - CSS classes for the Confirm button, Default: `""`
  @param {string} [text=""] - Button text, Default: `""`
  @param {SizeOptions} [size=] - Size of the Button, Default: ``
  @param {string} [icon="check"] - Name of the icon that is to be displayed in the button, Default: `"check"`
  @param {ColorOptions} [color=primary] - Color of the Button, Default: `primary`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [done_icon="check"] - Name of the icon displayed after task is completed successfully, Default: `"check"`
  @param {string} [done_text="Done"] - Button text displayed after task is completed successfully, Default: `"Done"`
  @param {boolean} [icon_only=false] - Removes text, and text space in the button, Default: `false`
  @param {boolean} [disabled=false] - Disables the button when `true`, Default: `false`
  @param {boolean} [should_confirm=true] - When `false`, skips the confirmation prompt, and makes it a one step process, Default: `true`
  @param {string} [context=""] - Context property, Default: `""`
  @param {number} [completion_timeout=600] - Specifies the duration to wait after the `done` event, before the UI state returns to normal, Default: `600`
  @param {number} [error_timeout=3000] - Specifies the duration to wait after the `error` event, before the UI state returns to normal, Default: `3000`
  @param {string} [class=""] - CSS classes for button container, Default: `""`

  ### Events
  - `do` - Fired when user confirms action. Or in case of `should_confirm` set at `false`, event is fired when user clicks button.
  - `done` - Fired when task completes
  - `error` - Fired when there is an error

-->
<div class="field {_confirm ? 'has-addons' : ''} {klass}" data-cy={cy}>
  <p class="control">
    {#if _confirm}
      <button
        class="button is-success is-light is-shadowless is-{size} {button_class}"
        type="button"
        on:click|preventDefault|stopPropagation={cancel}>
        Cancel
      </button>
    {/if}
  </p>
  <p class="control is-expanded">
    <button
      class="button is-{size} {_doing
        ? main_color + ' is-loading'
        : _error
        ? 'is-danger is-shaking'
        : _done
        ? main_color
        : confirm
        ? main_color
        : main_color} {button_class}"
      type="button"
      on:click|preventDefault|stopPropagation={doit}
      disabled={_done || _doing || _error || disabled}>
      {#if _done}
        <Icon size={icon_size} icon={done_icon} />
        {#if !icon_only}
          <span>{done_text}</span>
        {/if}
      {:else if _confirm}
        <span>
          {#if !icon_only}
            Are you sure
          {:else}
            Sure
          {/if}
        </span>
        <Icon size={icon_size} icon="question" />
      {:else if _error}
        <Icon size={icon_size} icon="exclamation" />
        <span>Failed</span>
      {:else}
        <Icon size={icon_size} {icon} />
        {#if !icon_only}
          <span>{text}</span>
        {/if}
      {/if}
    </button>
  </p>
</div>

<script>
  import { Icon } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * CSS classes for the Confirm button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "",
    /**
     * Size of the Button
     * @type {SizeOptions}
     */
    size = "",
    /**
     * Name of the icon that is to be displayed in the button
     */
    icon = "check",
    /**
     * Color of the Button
     * @type {ColorOptions}
     */
    color = "primary",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Name of the icon displayed after task is completed successfully
     */
    done_icon = "check",
    /**
     * Button text displayed after task is completed successfully
     */
    done_text = "Done",
    /**
     * Removes text, and text space in the button
     */
    icon_only = false,
    /**
     * Disables the button when `true`
     */
    disabled = false,
    /**
     * When `false`, skips the confirmation prompt, and makes it a one step process
     */
    should_confirm = true,
    /**
     * Context property
     */
    context = "",
    /**
     * Specifies the duration to wait after the `done` event, before the UI state returns to normal
     */
    completion_timeout = 600,
    /**
     * Specifies the duration to wait after the `error` event, before the UI state returns to normal
     */
    error_timeout = 3000;

  /**
   * CSS classes for button container
   */
  let klass = "";
  export { klass as class };

  let _doing = false,
    _done = false,
    _error = false;

  let confirm = false;

  $: main_color = "is-" + color;
  /**
   * Icon Size
   * @type {SizeOptions}
   */
  $: icon_size = "small";
  $: _confirm = should_confirm && confirm;

  function cancel() {
    confirm = false;
  }

  function doit() {
    let _confirm = should_confirm ? confirm : true;
    if (!_confirm) {
      confirm = true;
      return;
    }
    if (_confirm) {
      /**
       * Fired when user confirms action. Or in case of `should_confirm` set at `false`, event is fired when user clicks button.
       */
      fire("do", { doing, done, error, context });
    }
  }

  function doing() {
    confirm = false;
    _doing = true;
    _done = false;
    _error = false;
  }

  function done(callback, timeout = completion_timeout) {
    _doing = false;
    _done = true;
    _error = false;

    setTimeout(() => {
      _done = false;
      /**
       * Fired when task completes
       */
      fire("done");
      callback && callback();
    }, timeout);
  }

  function error(callback, timeout = error_timeout) {
    _done = false;
    _doing = false;
    _error = true;

    setTimeout(() => {
      _error = false;
      /**
       * Fired when there is an error
       */
      fire("error");
      callback && callback();
    }, timeout);
  }
</script>
