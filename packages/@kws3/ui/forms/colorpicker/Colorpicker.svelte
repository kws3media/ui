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
      {#if !mini}<Icon icon="hashtag" icon_style="color:#{color}" />{/if}
      <input
        type="text"
        class="input {readonly ? 'readonly' : ''} {mini ? 'mini' : ''}"
        readonly={!typeable || readonly || mini}
        maxlength="6"
        {disabled}
        bind:value={color}
        use:colorpicker />
      <span class="color-preview" style="background:#{color}" />
    </div>
  </div>
</div>

<script>
  import { afterUpdate } from "svelte";
  import ColorPicker from "./actions";
  import { Icon } from "@kws3/ui";

  export let color = "000000",
    typeable = true,
    readonly = false,
    mini = false,
    disabled = false;

  let dragover = false,
    _colorpicker;

  function colorpicker(node) {
    _colorpicker = new ColorPicker(node);

    _colorpicker.on("change", (_color) => (color = _color));

    return {
      destroy() {
        _colorpicker.destroy();
      },
    };
  }

  afterUpdate(() => {
    //if (color) _colorpicker.set("#" + color);
  });

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
