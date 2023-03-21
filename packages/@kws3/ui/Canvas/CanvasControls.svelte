<div
  class="canvas-controls is-placement-{toolbarPlacement}"
  style={canvasControlsStyles}>
  {#if !readonly && !disabled}
    <div
      class="columns m-0 is-justify-content-center {controlClasses}"
      style="gap: 0.5rem;">
      {#each actions as action}
        {#if action === "controls"}
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
          <!-- {:else if action === "colorpicker"}
          {#if tools.indexOf("Pen") != -1}
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
          {/if} -->
        {:else if action === "undo"}
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
        {:else if action === "redo"}
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
        {:else if action === "reset"}
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
        {:else if action === "expand"}
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
        {/if}
      {/each}
    </div>
  {:else if drawing_label}
    <p class="title is-5 has-text-centered">
      {drawing_label}
    </p>
  {/if}
</div>

<script>
  import { Icon, tooltip } from "@kws3/ui";
  import ColorPicker from "../forms/colorpicker/Colorpicker";

  export let CANVAS_IMAGE,
    EXPANDED_BUTTON,
    width,
    disabled,
    drawing_label,
    readonly,
    showTools,
    tools,
    color,
    penColor,
    setTool,
    canUndo,
    canRedo,
    expanded,
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    expandContract,
    setColor,
    toolbarPlacement,
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

  let canvasControlsStyles = {};
  let _colorpicker;
  let controlClasses = "is-flex-direction-row";

  $: penColor, setColor();
  $: {
    penColor =
      color.substr(0, 1) === "#"
        ? color.substr(1)
        : color.length === 6
        ? color
        : "000000";
  }

  $: {
    if (toolbarPlacement === "left" || toolbarPlacement === "right") {
      controlClasses = "is-flex-direction-column";
    }
  }

  // $: {
  //   let control_default_styles = {
  //     width:
  //       toolbarPlacement === "left" || toolbarPlacement === "right"
  //         ? "auto"
  //         : width || "250px",
  //   };

  //   canvasControlsStyles = Object.entries(control_default_styles)
  //     .map(([key, val]) => `${key}:${val}`)
  //     .join(";");
  // }

  // function colorpicker(node) {
  //   _colorpicker = new ColorPicker(node);

  //   _colorpicker.on("change", (_color) => (penColor = _color));
  //   _colorpicker.set("#" + penColor);

  //   return {
  //     update(newColor) {
  //       _colorpicker.set("#" + newColor);
  //     },
  //     destroy() {
  //       _colorpicker.destroy();
  //     },
  //   };
  // }
</script>
