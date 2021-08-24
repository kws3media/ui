<!--
  @component
  

  @param {string} [classes=""] - Classes property, Default: `""`
  @param {string} [button_class=""] - Button_class property, Default: `""`
  @param {string} [text=""] - Text property, Default: `""`
  @param {string} [size=""] - Size property, Default: `""`
  @param {string} [icon="check"] - Icon property, Default: `"check"`
  @param {string} [color="info"] - Color property, Default: `"info"`
  @param {string} [cy=""] - Cy property, Default: `""`
  @param {string} [doing_icon="hourglass"] - Doing_icon property, Default: `"hourglass"`
  @param {string} [doing_text="Please Wait..."] - Doing_text property, Default: `"Please Wait..."`
  @param {string} [done_icon="check"] - Done_icon property, Default: `"check"`
  @param {string} [done_text="Done"] - Done_text property, Default: `"Done"`
  @param {boolean} [confirm=false] - Confirm property, Default: `false`
  @param {boolean} [icon_only=false] - Icon_only property, Default: `false`
  @param {boolean} [disabled=false] - Disabled property, Default: `false`

  ### Events
  - `done`
  - `error`

-->
<div class="field {confirm ? 'has-addons' : ''} {classes}" data-cy={cy}>
  <p class="control">
    {#if confirm}
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
      {:else if confirm}
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

  export let classes = "",
    button_class = "",
    text = "",
    size = "",
    icon = "check",
    color = "info",
    cy = "",
    doing_icon = "hourglass",
    doing_text = "Please Wait...",
    done_icon = "check",
    done_text = "Done",
    confirm = false,
    icon_only = false,
    disabled = false;

  let _doing = false,
    _done = false,
    _error = false;

  $: main_color = "is-" + color;
  $: icon_size = "small";

  function cancel() {
    confirm = false;
  }
  function doit() {
    let _confirm = confirm;
    if (!_confirm) {
      confirm = true;
      return;
    }
    if (_confirm) {
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
      fire("done");
    }, 1500);
  }
  function error() {
    _done = false;
    _doing = false;
    _error = true;

    setTimeout(() => {
      _error = false;
      fire("error");
    }, 1500);
  }

  // reviwed
</script>
