<div
  class="drawing-wrapper {expanded ? 'expanded' : ''}"
  style="width:{styles.width || '250px'}; transform: scale({expanded
    ? expandedScale
    : initialScale});transform-origin:{expandFrom || 'center center'}"
  data-cy={cy}>
  <CanvasInput {...$$props} {expanded} bind:CANVAS_IMAGE on:change={onChange} />

  <div class="drawing-controls" style="width:{styles.width || '250px'};">
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
              <div class="dropdown-content">
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
</div>

<script>
  import CanvasInput from "./CanvasInput.svelte";
  import ColorPicker from "../../forms/colorpicker/Colorpicker";
  import { Icon, tooltip } from "@kws3/ui";
  import { onMount } from "svelte";

  export let styles = {
      width: "250px",
      height: "250px",
      border: "1px solid #b5b5b5",
    },
    lineWidth = 2,
    eraserWidth = 6,
    lineColor = "#ff0000",
    backgroundImage = "",
    readonly = false,
    disabled = false,
    image = "",
    canUndo = false,
    canRedo = false,
    expandFrom = "center center",
    initialScale = 1,
    expandedScale = 2,
    tools = ["Pen", "Eraser"],
    activeTool = "Pen",
    drawing_label = "",
    cy = "";

  let EXPANDED_BUTTON, CANVAS_IMAGE;

  let expanded = false,
    showTools = false,
    settingFlag = false;

  let toolMap = {
    Pen: {
      name: "Pen",
      icon: "pencil",
    },
    Eraser: {
      name: "Eraser",
      icon: "eraser",
    },
    Circle: {
      name: "Circle",
      icon: "circle",
    },
  };

  let _colorpicker,
    penColor = "000000";

  $: {
    penColor = lineColor.substring(lineColor.indexOf("#"));
  }

  $: expanded, setScaleFactor();
  $: image, syncImage();
  $: penColor, setTool(activeTool);

  onMount(() => {
    setTool(activeTool);
  });

  function setTool(tool) {
    activeTool = tool;
    showTools = false;
    CANVAS_IMAGE && CANVAS_IMAGE.setTool(tool, `#${penColor}`);
  }

  function setScaleFactor() {
    CANVAS_IMAGE &&
      CANVAS_IMAGE.setScaleFactor(expanded ? expandedScale : initialScale);
  }

  function syncImage() {
    if (!settingFlag) {
      CANVAS_IMAGE && CANVAS_IMAGE.syncImage(image);
    }
  }

  function expandContract() {
    expanded = !expanded;
    if (EXPANDED_BUTTON) {
      EXPANDED_BUTTON._tippy.setContent(
        EXPANDED_BUTTON.getAttribute("data-tooltip")
      );
    }
  }

  function onChange({ detail }) {
    settingFlag = true;
    image = detail.canvasImage;
    canUndo = detail.canUndo;
    canRedo = detail.canRedo;
    settingFlag = false;
  }

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
