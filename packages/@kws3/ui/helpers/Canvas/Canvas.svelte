<!--
  @component


  @param {object} [styles={}] - CSS styles for the canvas, Default: `{}`
  @param {number} [lineWidth=2] - Pen input line width, Default: `2`
  @param {number} [eraserWidth=6] - Eraser width, Default: `6`
  @param {string} [lineColor="#ff0000"] - Pen input line color, Default: `"#ff0000"`
  @param {string} [backgroundImage=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - It will hold the drawing image data, Default: `""`
  @param {string} [expandFrom="center center"] - Expand position values, Default: `"center center"`
  @param {number} [initialScale=1] - Canvas transform scale before expand, Default: `1`
  @param {number} [expandedScale=2] - Canvas transform scale after expand, Default: `2`
  @param {'Pen'|'Eraser'|'Circle'} [tools=undefined] - List of available tools, Default: `undefined`
  @param {'Pen'|'Eraser'|'Circle'} [activeTool="Pen"] - Initially active tool, Default: `"Pen"`
  @param {string} [drawing_label=""] - The label for brawing box, only active if it is `readonly` or `disabled`, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->

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
</div>

<script>
  import CanvasInput from "./CanvasInput.svelte";
  import ColorPicker from "../../forms/colorpicker/Colorpicker";
  import { Icon, tooltip } from "@kws3/ui";
  import { onMount } from "svelte";

  /**
   * CSS styles for the canvas
   */
  export let styles = {
      width: "250px",
      height: "250px",
      border: "1px solid #b5b5b5",
    },
    /**
     * Pen input line width
     */
    lineWidth = 2,
    /**
     * Eraser width
     */
    eraserWidth = 6,
    /**
     * Pen input line color
     */
    lineColor = "#ff0000",
    /**
     * Background image for the canvas
     */
    backgroundImage = "",
    /**
     * Determines whether canvas is readonly or not
     */
    readonly = false,
    /**
     * Determines whether canvas is disabled or not
     */
    disabled = false,
    /**
     * It will hold the drawing image data
     */
    image = "",
    /**
     * Expand position values
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    expandFrom = "center center",
    /**
     * Canvas transform scale before expand
     */
    initialScale = 1,
    /**
     * Canvas transform scale after expand
     */
    expandedScale = 2,
    /**
     * List of available tools
     * @type {'Pen'|'Eraser'|'Circle'}
     */
    tools = ["Pen", "Eraser", "Circle"],
    /**
     * Initially active tool
     * @type {'Pen'|'Eraser'|'Circle'}
     */
    activeTool = "Pen",
    /**
     * The label for brawing box, only active if it is `readonly` or `disabled`
     */
    drawing_label = "",
    /**
     * Determines whether pen colorpicker is visible or not
     */
    hide_colorpicker = false,
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  let EXPANDED_BUTTON, CANVAS_IMAGE;

  let canUndo = false,
    canRedo = false,
    expanded = false,
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
    penColor =
      lineColor.substr(0, 1) == "#"
        ? lineColor.substr(1)
        : lineColor.length == 6
        ? lineColor
        : "000000";
  }

  $: expanded, setScaleFactor();
  $: image, syncImage();
  $: penColor, setLineColor();

  onMount(() => {
    setTool(activeTool);
  });

  function setTool(tool) {
    activeTool = tool;
    showTools = false;
    CANVAS_IMAGE && CANVAS_IMAGE.setTool(tool);
  }

  function setScaleFactor() {
    CANVAS_IMAGE &&
      CANVAS_IMAGE.setScaleFactor(expanded ? expandedScale : initialScale);
  }

  function setLineColor() {
    CANVAS_IMAGE && CANVAS_IMAGE.setLineColor(`#${penColor}`);
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
