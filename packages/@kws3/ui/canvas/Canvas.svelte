<!--
  @component


  @param {object} [styles={}] - Inline CSS for the canvas, Default: `{}`
  @param {string} [width="250px"] - Width of the canvas, Default: `250px`
  @param {string} [height="250px"] - Height of the canvas, Default: `250px`
  @param {number} [pen_width=2] -  width of the line, Default: `2`
  @param {number} [eraser_width=6] - Eraser width, Default: `6`
  @param {string} [pen_color="#ff0000"] - Line color, Default: `"#ff0000"`
  @param {string} [background_image=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {object} [expand={}] - Transform scale and the direction from which the canvas should expand on expansion, Default: `{from: "center", to: "center", scale: 50}`
  @param {array} [actions=[]] - Contains all the action item name, Default: `['controls', 'colorpicker', 'undo' , 'redo', 'reset', 'expand']`
  @param {'Pen'|'Eraser'} [tools=undefined] - List of tools available for user to select from, Default: `undefined`
  @param {'Pen'|'Eraser'} [active_tool="Pen"] - Default active tool, Default: `"Pen"`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->

<div
  class="canvas-wrapper {expanded ? 'expanded' : ''}"
  style={wrapperStyles}
  data-cy={cy}>
  <PenInput {...$$props} {expanded} bind:DRAWING_PAD on:change={onChange} />

  <PenControls
    {...$$props}
    on:changeColor={({ detail: { color } }) => changeColor(color)}
    on:setTool={({ detail: { tool } }) => setTool(tool)}
    on:undo={() => undo()}
    on:redo={() => redo()}
    on:reset={() => reset()}
    on:toggleExpand={() => toggleExpand()}
    default_color={pen_color}
    bind:can_undo
    bind:can_redo
    bind:show_tools />
</div>

<script>
  // @ts-nocheck

  import PenInput from "./PenInput.svelte";
  import PenControls from "./PenControls.svelte";
  import { onMount } from "svelte";

  /**
   * Inline CSS for the canvas
   */
  export let styles = {},
    /**
     * Canvas width
     */
    width = "250px",
    /**
     * Canvas height
     */
    height = "250px",
    /**
     *pen width
     */
    pen_width = 2,
    /**
     * Eraser width
     */
    eraser_width = 6,
    /**
     * line color
     */
    pen_color = "#ff0000",
    /**
     * Background image for the canvas
     */
    background_image = "",
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
    initial_scale = 1,
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
     * List of tools available for user to select from
     * @type {'Pen'|'Eraser'}
     */
    tools = ["Pen", "Eraser"],
    /**
     * Default active tool
     * @type {'Pen'|'Eraser'}
     */
    active_tool = "Pen",
    /**
     * Label for the canvas drawing box
     *
     * Only active when canvas is `readonly` or `disabled`
     */
    drawing_label = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "";

  let DRAWING_PAD;

  let can_undo = false,
    can_redo = false,
    expanded = false,
    show_tools = false,
    settingFlag = false;

  let _colorpicker,
    wrapperStyles = {},
    penColor = "000000";

  $: {
    penColor =
      pen_color.substr(0, 1) === +"#"
        ? pen_color.substr(1)
        : pen_color.length === 6
        ? pen_color
        : "000000";
  }
  $: {
    let default_styles = {
      display: "flex",
      width: width || "250px",
      transform: `scale(${expanded ? 1 + expand.scale * 0.01 : initial_scale})`,
      "transform-origin": `${expand.from || "center"} ${expand.to || "center"}`,
      "flex-direction": "column",
      "--kws-peninput-height": height,
      "--kws-peninput-width": width,
    };

    wrapperStyles = Object.entries(default_styles)
      .map(([key, val]) => `${key}:${val}`)
      .join(";");
  }

  $: expanded, setScaleFactor();
  $: image, syncImage();
  $: penColor, setColor();

  onMount(() => {
    setTool(active_tool);
  });

  export function getActions() {
    if (DRAWING_PAD) {
      return DRAWING_PAD;
    }
    return null;
  }

  function setTool(tool) {
    active_tool = tool;
    show_tools = false;
    DRAWING_PAD && DRAWING_PAD.setTool(tool);
  }

  function setScaleFactor() {
    DRAWING_PAD &&
      DRAWING_PAD.setScaleFactor(
        expanded ? 1 + expand.scale * 0.01 : initial_scale
      );
  }

  function setColor() {
    DRAWING_PAD && DRAWING_PAD.setColor(`#${penColor}`);
  }

  function syncImage() {
    if (!settingFlag) {
      DRAWING_PAD && DRAWING_PAD.syncImage(image);
    }
  }

  function changeColor(color) {
    penColor = color.substring(1);
    setColor();
  }
  function toggleExpand() {
    expanded = !expanded;
  }

  function undo() {
    DRAWING_PAD && DRAWING_PAD.undo();
  }

  function redo() {
    DRAWING_PAD && DRAWING_PAD.redo();
  }

  function reset() {
    DRAWING_PAD && DRAWING_PAD.reset();
    can_undo = false;
    can_redo = false;
  }

  function onChange({ detail }) {
    let { canvasImage, canRedo, canUndo } = detail;
    settingFlag = true;
    image = canvasImage;
    can_undo = canUndo;
    can_redo = canRedo;
    settingFlag = false;
  }
</script>
