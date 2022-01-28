<div class="canvas-controls" style="width:{width || '250px'};">
  {#if !readonly && !disabled}
    <div class="field is-grouped is-grouped-centered">
      <div class="control">
        <div class="dropdown is-{showTools ? 'active' : ''} is-up">
          <div class="dropdown-trigger">
            <button
              use:tooltip
              class="button is-info is-small "
              data-tooltip="Tools"
              aria-controls="tools-dropdown"
              on:click={() => (showTools = !showTools)}>
              <Icon icon={toolMap[activeTool].icon} size="small" />
            </button>
          </div>

          <div
            class="dropdown-menu"
            id="tools-dropdown"
            role="menu"
            style="min-width:auto;">
            <div class="dropdown-content has-text-left">
              {#each tools as tool}
                <a
                  href="/#"
                  class="dropdown-item"
                  on:click|preventDefault={() => setTool(tool)}
                  style="padding-right:1rem;">
                  <Icon icon={toolMap[tool].icon} size="small" />
                  <span>{toolMap[tool].name}</span>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>

      {#if tools.indexOf("Pen") != -1 && !hide_colorpicker}
        <div class="control" use:tooltip data-tooltip="Pen Color">
          <button
            use:colorpicker={penColor}
            use:tooltip
            type="button"
            class="button is-small"
            data-tooltip="Pen Color"
            style="background-color:#{penColor};"
            disabled={activeTool != "Pen"}>
            <Icon icon="crosshairs" size="small" />
          </button>
        </div>
      {/if}

      <div class="control">
        <div class="field has-addons">
          <div class="control">
            <button
              use:tooltip
              type="button"
              class="button is-small is-warning "
              data-tooltip="Undo"
              on:click={() => CANVAS_IMAGE && CANVAS_IMAGE.undo()}
              disabled={!canUndo}>
              <Icon icon="undo" size="small" />
            </button>
          </div>
          <div class="control">
            <button
              use:tooltip
              type="button"
              class="button is-small is-warning "
              data-tooltip="Redo"
              on:click={() => CANVAS_IMAGE && CANVAS_IMAGE.redo()}
              disabled={!canRedo}>
              <Icon icon="repeat" size="small" />
            </button>
          </div>
        </div>
      </div>

      <div class="control">
        <button
          use:tooltip
          type="button"
          class="button is-small is-danger"
          data-tooltip="Reset"
          on:click={() => CANVAS_IMAGE && CANVAS_IMAGE.reset()}>
          <Icon icon="refresh" size="small" />
        </button>
      </div>

      <div class="control">
        <button
          use:tooltip
          bind:this={EXPANDED_BUTTON}
          type="button"
          class="button is-small is-dark"
          data-tooltip={expanded ? "Contract" : "Expand"}
          on:click={expandContract}>
          <Icon icon={expanded ? "compress" : "expand"} size="small" />
        </button>
      </div>
    </div>
  {:else if drawing_label}
    <p class="title is-5 has-text-centered">
      {drawing_label}
    </p>
  {/if}
</div>

<script>
  import { Icon, tooltip } from "@kws3/ui";
  import ColorPicker from "../../forms/colorpicker/Colorpicker";

  export let CANVAS_IMAGE,
    EXPANDED_BUTTON,
    width,
    disabled,
    drawing_label,
    readonly,
    showTools,
    tools,
    hide_colorpicker,
    lineColor,
    penColor,
    setTool,
    canUndo,
    canRedo,
    expanded,
    expandContract,
    setLineColor,
    activeTool;

  let toolMap = {
    Pen: {
      name: "Pen",
      icon: "pencil",
    },
    Eraser: {
      name: "Eraser",
      icon: "eraser",
    },
  };

  let _colorpicker;

  $: penColor, setLineColor();

  $: {
    penColor =
      lineColor.substr(0, 1) == "#"
        ? lineColor.substr(1)
        : lineColor.length == 6
        ? lineColor
        : "000000";
  }

  let settingFlag = false;

  function colorpicker(node) {
    _colorpicker = new ColorPicker(node);

    _colorpicker.on("change", (_color) => (penColor = _color));
    _colorpicker.set("#" + penColor);

    return {
      update(newColor) {
        _colorpicker.set("#" + newColor);
      },
      destroy() {
        _colorpicker.destroy();
      },
    };
  }
</script>
