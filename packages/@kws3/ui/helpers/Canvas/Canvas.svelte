<!--
  @component


  @param {object} [styles={}] - Inline CSS for the canvas, Default: `{}`
  @param {string} [width="250px"] - Width of the canvas, Default: `250px`
  @param {string} [height="250px"] - Height of the canvas, Default: `250px`
  @param {number} [line=2] - line width width, Default: `2`
  @param {number} [eraser=6] - Eraser width, Default: `6`
  @param {string} [color="#ff0000"] - Line color, Default: `"#ff0000"`
  @param {string} [backgroundImage=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {number} [initialScale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {object} [expand={}] - Transform scale and the direction from which the canvas should expand on expansion, Default: `{from: "center", to: "center", scale: 50}`
  @param {array} [actions=[]] - Contains all the action item name, Default: `['controls', 'colorpicker', 'undo' , 'redo', 'reset', 'expand']`
  @param {bottom'|'top'} [actionToolbarPosition="bottom"] - Position of the action toolbar, Default: `"bottom"`
  @param {'Pen'|'Eraser'} [tools=undefined] - List of tools available for user to select from, Default: `undefined`
  @param {'Pen'|'Eraser'} [activeTool="Pen"] - Default active tool, Default: `"Pen"`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {boolean} [hide_colorpicker=false] - Determines whether to make the colorpicker available or not, Default: `false`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->

<div
  class="canvas-wrapper {expanded ? 'expanded' : ''}"
  style={wrapperStyles}
  data-cy={cy}>
  <CanvasInput {...$$props} {expanded} bind:CANVAS_IMAGE on:change={onChange} />

  <CanvasControls
    {...$$props}
    {setTool}
    {setColor}
    {expanded}
    {expandContract}
    bind:CANVAS_IMAGE
    bind:penColor
    bind:canUndo
    bind:canRedo
    bind:color
    bind:showTools />
</div>

<script>
  import CanvasInput from "./CanvasInput.svelte";
  import CanvasControls from "./CanvasControls.svelte";
  import { onMount } from "svelte";

  /**
   * Inline CSS for the canvas
   */
  export let styles = {
      border: "1px solid #b5b5b5",
    },
    /**
     * Canvas width
     */
    width = "250px",
    /**
     * Canvas height
     */
    height = "250px",
    /**
     *line width
     */
    line = 2,
    /**
     * Eraser width
     */
    eraser = 6,
    /**
     * line color
     */
    color = "#ff0000",
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
     * Initial transform scale for the canvas before expansion
     */
    initialScale = 1,
    /**
     * Transform scale of the canvas on expansion
     * The direction from which the canvas should expand
     */
    expand = { from: "center", to: "center", scale: 50 },
    /**
     * List of actions toolbar
     */
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    /**
     * Default position of the action toolbar
     * @type {'bottom'|'top'|'left'|'right'}
     */
    actionToolbarPosition = "bottom",
    /**
     * List of tools available for user to select from
     * @type {'Pen'|'Eraser'}
     */
    tools = ["Pen", "Eraser"],
    /**
     * Default active tool
     * @type {'Pen'|'Eraser'}
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
  };

  let _colorpicker,
    wrapperStyles = {},
    penColor = "000000";

  $: {
    penColor =
      color.substr(0, 1) == "#"
        ? color.substr(1)
        : color.length == 6
        ? color
        : "000000";
  }
  $: {
    let default_styles = {
      display: "flex",
      width: width || "250px",
      transform: `scale(${expanded ? 1 + expand.scale * 0.01 : initialScale})`,
      "transform-origin": `${expand.from || "center"} ${expand.to || "center"}`,
      "flex-direction": "column",
    };

    if (actionToolbarPosition == "bottom") {
      default_styles["flex-direction"] = "column";
    } else if (actionToolbarPosition == "top") {
      default_styles["flex-direction"] = "column-reverse";
    } else if (actionToolbarPosition == "right") {
      let _width = +width.replace("px", "") + 30;
      default_styles["width"] = _width + "px";
      default_styles["flex-direction"] = "row";
    } else if (actionToolbarPosition == "left") {
      let _width = +width.replace("px", "") + 40;
      default_styles["width"] = _width + "px";
      default_styles["flex-direction"] = "row-reverse";
    }

    wrapperStyles = Object.entries(default_styles)
      .map(([key, val]) => `${key}:${val}`)
      .join(";");
  }

  $: expanded, setScaleFactor();
  $: image, syncImage();
  $: penColor, setColor();

  onMount(() => {
    setTool(activeTool);
  });

  export function getActions() {
    if (CANVAS_IMAGE) {
      return CANVAS_IMAGE;
    }
    return null;
  }

  function setTool(tool) {
    activeTool = tool;
    showTools = false;
    CANVAS_IMAGE && CANVAS_IMAGE.setTool(tool);
  }

  function setScaleFactor() {
    CANVAS_IMAGE &&
      CANVAS_IMAGE.setScaleFactor(
        expanded ? 1 + expand.scale * 0.01 : initialScale
      );
  }

  function setColor() {
    CANVAS_IMAGE && CANVAS_IMAGE.setcolor(`#${penColor}`);
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
</script>
