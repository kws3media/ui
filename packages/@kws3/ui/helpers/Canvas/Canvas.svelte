<!--
  @component


  @param {object} [styles={}] - Inline CSS for the canvas, Default: `{}`
  @param {number} [lineWidth=2] - Pen input width, Default: `2`
  @param {number} [eraserWidth=6] - Eraser width, Default: `6`
  @param {string} [lineColor="#ff0000"] - Pen input color, Default: `"#ff0000"`
  @param {string} [backgroundImage=""] - Background image for the canvas, Default: `""`
  @param {string} [circlefillStyle=""] - Fill color for circle shape, rgb, rgba or hex, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {'center center'|'center right'|'center left'|'right bottom'|'bottom right'|'top right'|'right top'} [expandFrom="center center"] - The direction from which the canvas should expand, Default: `"center center"`
  @param {number} [initialScale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {number} [expand=2] - Transform scale of the canvas on expansion, Default: `2`
  @param {'Pen'|'Eraser'|'Circle'} [tools=undefined] - List of tools available for user to select from, Default: `undefined`
  @param {'Pen'|'Eraser'|'Circle'} [activeTool="Pen"] - Default active tool, Default: `"Pen"`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {boolean} [hide_colorpicker=false] - Determines whether to make the colorpicker available or not, Default: `false`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->

<div
  class="canvas-wrapper {expanded ? 'expanded' : ''}"
  style="width:{styles.width || '250px'}; transform: scale({expanded
    ? 1 + expand * 0.01
    : initialScale});transform-origin:{expandFrom || 'center center'}"
  data-cy={cy}>
  <CanvasInput {...$$props} {expanded} bind:CANVAS_IMAGE on:change={onChange} />

  <div class="canvas-controls" style="width:{styles.width || '250px'};">
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
</div>

<script>
  import CanvasInput from "./CanvasInput.svelte";
  import ColorPicker from "../../forms/colorpicker/Colorpicker";
  import { Icon, tooltip } from "@kws3/ui";
  import { onMount } from "svelte";

  /**
   * Inline CSS for the canvas
   */
  export let styles = {
      width: "250px",
      height: "250px",
      border: "1px solid #b5b5b5",
    },
    /**
     * Pen input width
     */
    lineWidth = 2,
    /**
     * Eraser width
     */
    eraserWidth = 6,
    /**
     * Pen input color
     */
    lineColor = "#ff0000",
    /**
     * Fill color for circle shape, rgb, rgba or hex
     */
    circlefillStyle = "",
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
     * The Data created in the canvas by the user
     */
    image = "",
    /**
     * The direction from which the canvas should expand
     * @type {'center center'|'center right'|'center left'|'right bottom'|'bottom right'|'top right'|'right top'}
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin
     */
    expandFrom = "center center",
    /**
     * Initial transform scale for the canvas before expansion
     */
    initialScale = 1,
    /**
     * Transform scale of the canvas on expansion
     */
    expand = 50,
    /**
     * List of tools available for user to select from
     * @type {'Pen'|'Eraser'|'Circle'}
     */
    tools = ["Pen", "Eraser", "Circle"],
    /**
     * Default active tool
     * @type {'Pen'|'Eraser'|'Circle'}
     */
    activeTool = "Pen",
    /**
     * Label for the canvas drawing box
     *
     * Only active when canvas is `readonly` or `disabled`
     */
    drawing_label = "",
    /**
     * Determines whether to make the colorpicker available or not
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
      CANVAS_IMAGE.setScaleFactor(expanded ? 1 + expand * 0.01 : initialScale);
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
