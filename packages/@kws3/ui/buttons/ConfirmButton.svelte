<!--
  @component
  

  @param {string} [button_class=""] - CSS classes for button, Default: `""`
  @param {string} [text=""] - Button text, Default: `""`
  @param {string} [size=""] - Size of the Button, Default: `""`
  @param {string} [icon="check"] - Icon of the Button - use any fa/gg/unicorn icons, Default: `"check"`
  @param {string} [color="info"] - Color of the Button, Default: `"info"`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {string} [doing_icon="hourglass"] - Icon shows during process, Default: `"hourglass"`
  @param {string} [doing_text="Please Wait..."] - Text shows during process, Default: `"Please Wait..."`
  @param {string} [done_icon="check"] - Icon shows after process complete, Default: `"check"`
  @param {string} [done_text="Done"] - Text shows after process complete, Default: `"Done"`
  @param {boolean} [confirm=false] - Boolean - true/false, Default: `false`
  @param {boolean} [icon_only=false] - Display icon only - true/false, Default: `false`
  @param {boolean} [disabled=false] - Button disable - true/false, Default: `false`
  @param {boolean} [can_confirm=true] - ask confirm question if it is true, Default: `true`
  @param {string} [class=""] - `CONST` CSS class for button container, Default: `""`

  ### Events
  - `done` - fires an event on complete
  - `error` - fires an event on error

-->
<div class="field {_confirm ? 'has-addons' : ''} {klass}" data-cy={cy}>
  <p class="control">
    {#if _confirm}
      <button
        class="button is-success is-outlined is-shadowless is-{size} {button_class}"
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
        ? 'is-outlined ' + main_color
        : main_color} {button_class}"
      type="button"
      on:click|preventDefault|stopPropagation={doit}
      disabled={_done || _doing || _error || disabled}>
      {#if _done}
        <Icon size={icon_size} icon={done_icon} />
        {#if !icon_only}
          <span>{done_text}</span>
        {/if}
      {:else if _doing}
        <Icon size={icon_size} icon={doing_icon} />
        {#if !icon_only}
          <span>{doing_text}</span>
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
      {:else if !confirm && !_doing && !_done && !_error}
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
   * CSS classes for button
   */
  export let button_class = "",
    /**
     * Button text
     */
    text = "",
    /**
     * Size of the Button
     */
    size = "",
    /**
     * Icon of the Button - use any fa/gg/unicorn icons
     */
    icon = "check",
    /**
     * Color of the Button
     */
    color = "info",
    /**
     * data-cy attribute for cypress
     */
    cy = "",
    /**
     * Icon shows during process
     */
    doing_icon = "hourglass",
    /**
     * Text shows during process
     */
    doing_text = "Please Wait...",
    /**
     * Icon shows after process complete
     */
    done_icon = "check",
    /**
     * Text shows after process complete
     */
    done_text = "Done",
    /**
     * Boolean - true/false
     */
    confirm = false,
    /**
     * Display icon only - true/false
     */
    icon_only = false,
    /**
     * Button disable - true/false
     */
    disabled = false,
    /**
     * ask confirm question if it is true
     */
    can_confirm = true;

  /**
   * CSS class for button container
   */
  let klass = "";
  export { klass as class };

  let _doing = false,
    _done = false,
    _error = false;

  $: main_color = "is-" + color;
  $: icon_size = "small";

  function cancel() {
    confirm = false;
  }

  function doit() {
    let _confirm = can_confirm ? confirm : true;
    if (!_confirm) {
      confirm = true;
      return;
    }
    if (_confirm) {
      /**
       * fires an event on doing
       */
      fire("do", { doing, done, error });
    }
  }

  function doing() {
    confirm = false;
    _doing = true;
    _done = false;
    _error = false;
  }

  function done() {
    _doing = false;
    _done = true;
    _error = false;

    setTimeout(() => {
      _done = false;
      /**
       * fires an event on complete
       */
      fire("done");
    }, 1500);
  }

  function error() {
    _done = false;
    _doing = false;
    _error = true;

    setTimeout(() => {
      _error = false;
      /**
       * fires an event on error
       */
      fire("error");
    }, 1500);
  }

  $: _confirm = can_confirm && confirm;

  // reviwed
</script>
