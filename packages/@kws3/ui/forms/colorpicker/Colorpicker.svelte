<!--
  @component


  @param {string} [color="000000"] - Current selected colour (hex format only)

This property can be bound to, to fetch the current colour, Default: `"000000"`
  @param {boolean} [typeable=true] - Allows typing the colour hex Code, Default: `true`
  @param {boolean} [readonly=false] - Enables read-only mode, Default: `false`
  @param {boolean} [mini=false] - Alternate mini colour picker without typeable input, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {SizeOptions} [size=] - Size of the colour picker trigger, Default: ``

  ### Events
  - `change` - Triggered when color changes

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
      <input
        type="text"
        class="input {readonly ? 'readonly' : ''} {mini
          ? 'mini'
          : ''} is-{size}"
        readonly={!typeable || readonly || mini}
        maxlength="6"
        on:focus={focused}
        {disabled}
        bind:value={color}
        use:colorpicker />
      {#if !mini}
        <Icon icon="hashtag" class="is-left" inner_style="color:#{color}" />
      {/if}
      <span class="color-preview is-{size}" style="background:#{color}" />
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
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Current selected colour (hex format only)
   *
   * This property can be bound to, to fetch the current colour
   */
  export let color = "000000",
    /**
     * Allows typing the colour hex Code
     */
    typeable = true,
    /**
     * Enables read-only mode
     */
    readonly = false,
    /**
     * Alternate mini colour picker without typeable input
     */
    mini = false,
    /**
     * Disables the component
     */
    disabled = false,
    /**
     * Size of the colour picker trigger
     * @type {SizeOptions}
     */
    size = "";

  let dragover = false,
    _colorpicker;

  function colorpicker(node) {
    _colorpicker = new ColorPicker(node);

    _colorpicker.on("change", (_color) => {
      color = _color;

      debouncedChangeEvent();
    });

    _colorpicker.set("#" + color);

    return {
      update(newColor) {
        _colorpicker.set("#" + newColor);
      },
      destroy() {
        _colorpicker.destroy();
      },
    };
  }

  function focused(e) {
    e && e.target && e.target.select();
  }

  function onDragOver() {
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

  function onDragLeave() {
    if (!readonly && !disabled) {
      dragover = false;
    }
    return false;
  }
</script>
