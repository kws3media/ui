<!--
  @component


  @param {string} [color="000000"] - Determines the current selected color, Default: `"000000"`
  @param {boolean} [typeable=true] - Allows typing the colour name in hex Code, Default: `true`
  @param {boolean} [readonly=false] - To display a fixed colour and hex Code

Not changeable by user., Default: `false`
  @param {boolean} [mini=false] - Alternate mini colour picker without form or hex Code, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`

-->
<div class="color-picker-wrapper">
  <div class="field">
    <div
      class="control {mini ? 'mini' : 'has-icons-left'} {dragover &&
      !disabled &&
      !readonly
        ? 'dragover'
        : ''}"
      on:dragover={onDragOver}
      on:drop={onDrop}
      on:dragleave={onDragLeave}>
      {#if !mini}
        <Icon icon="hashtag" icon_style="color:#{color}" />
      {/if}
      <input
        type="text"
        class="input {readonly ? 'readonly' : ''} {mini ? 'mini' : ''}"
        readonly={!typeable || readonly || mini}
        maxlength="6"
        {disabled}
        bind:value={color}
        use:colorpicker={color} />

      <span class="color-preview" style="background:#{color}" />
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import { Icon } from "@kws3/ui";
  import ColorPicker from "./Colorpicker";
  import { debounce } from "../../utils";

  const fire = createEventDispatcher();

  const debouncedChangeEvent = debounce(() => {
    /**
     * Triggered when color changes
     */
    fire("change");
  }, 300);

  /**
   * Determines the current selected color
   */
  export let color = "000000",
    /**
     * Allows typing the colour name in hex Code
     */
    typeable = true,
    /**
     * To display a fixed colour and hex Code
     *
     * Not changeable by user.
     */
    readonly = false,
    /**
     * Alternate mini colour picker without form or hex Code
     */
    mini = false,
    /**
     * Disables the component
     */
    disabled = false;

  let dragover = false,
    _colorpicker;

  function colorpicker(node) {
    _colorpicker = new ColorPicker(node);

    _colorpicker.on("change", (_color) => {
      color = _color;

      debouncedChangeEvent();
    });

    return {
      update(newColor) {
        _colorpicker.set("#" + newColor);
      },
      destroy() {
        _colorpicker.destroy();
      },
    };
  }

  function onDragOver(e) {
    if (!readonly && !disabled) {
      dragover = true;
    }
    return false;
  }

  function onDrop(e) {
    if (!readonly && !disabled) {
      color = e.dataTransfer.getData("text");
      dragover = false;
    }
    return false;
  }

  function onDragLeave(e) {
    if (!readonly && !disabled) {
      dragover = false;
    }
    return false;
  }
</script>
