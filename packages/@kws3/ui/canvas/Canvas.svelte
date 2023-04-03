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
  @param {string} [expand_from="center"] -  The direction from which the canvas should expand. 'top', 'bottom', 'left', 'right', 'center' and also 'n%' ., Default: `center`
  @param {string} [expand_to="center"] -  The direction to which the canvas should expand. 'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `center`
  @param {number} [expand_scale=50] -  Transform scale of the canvas on expansion, value in percentage %. Default: `50`
  @param {array} [actions=[]] - Contains all the action item name, Default: `['controls', 'colorpicker', 'undo' , 'redo', 'reset', 'expand']`
  @param {boolean} [has_controls=true] - Determines control tools available or not, Default: `true`
  @param {bottom'|'top'} [toolbar_placement="bottom"] - Position of the action toolbar, Default: `"bottom"`
  @param {array} [tools=['Pen','Eraser']] - List of tools available for user to select from, Default: `undefined`
  @param {'Pen'|'Eraser'} [active_tool="Pen"] - Default active tool, Default: `"Pen"`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`

-->

<div
  class="
    kws-canvas-wrapper
    {toolbar_placement === 'top' ? 'has-toolbar-top' : ''}
  "
  class:expanded
  style:width
  style:--kws-peninput-height={height}
  style:--kws-peninput-width={width}
  style:transform="scale({expanded ? 1 + expand_scale * 0.01 : initial_scale})"
  style:transform-origin="{expand_from} {expand_to}"
  data-cy={cy}
>

  <PenInput
    {...$$props}
    {expanded}
    bind:DRAWING_PAD
    on:change={onChange}
  />

  {#if has_controls}
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
  {/if}
</div>

<script>
// @ts-nocheck

  import PenInput from "./PenInput.svelte";
  import PenControls from "./PenControls.svelte";
  import { onMount } from "svelte";



    /**
     * Canvas width
     */
  export let  width = "250px",
    /**
     * Canvas height
     */
    height = "250px",
     /**
     * Default active tool
     * @type {'Pen'|'Eraser'}
     */
    active_tool = "Pen",
    /**
     * The Data created in the canvas by the user
     */
    image = "",
     /**
     *  Determines whether canvas is touched or not
     */
    is_touched = false;



    /**
     *  pen width
    */
  export const pen_width = 2,
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
     * Initial transform scale for the canvas before expansion
     */
    initial_scale = 1,
    /**
     * The direction from which the canvas should expand.
     * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
     */
    expand_from = "center",
    /**
     * The direction to which the canvas should expand.
     * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
     */
    expand_to = "center",
    /**
      * Transform scale of the canvas on expansion
      * value in percentage %
     */
    expand_scale = 50,
    /**
     * List of actions toolbar
     */
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    /**
     * Default position of the action toolbar
     * @type {'bottom'|'top'}
     */
    toolbar_placement = "bottom",
    /**
     * List of tools available for user to select from
     * @type {'Pen'|'Eraser'}
     */
    tools = ["Pen", "Eraser"],


    /**
     * Label for the canvas drawing box
     *
     * Only active when canvas is `readonly` or `disabled`
     */
    drawing_label = "",
    /**
     * data-cy attribute for cypress
     */
    cy = "",

    /**
     *  Determines control tools available or not
     */
    has_controls = true,
    /**
     * Default position of controls
     * @type {'start'|'center'|'end'}
     */
    control_position = 'center';




  let DRAWING_PAD;

  let can_undo = false,
    can_redo = false,
    expanded = false,
    show_tools = false,
    settingFlag = false;

  let penColor = "000000";

  $: {
    is_touched = can_undo;
    penColor =
      pen_color.substr(0, 1) === +"#"
        ? pen_color.substr(1)
        : pen_color.length === 6
        ? pen_color
        : "000000";
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
        expanded ? 1 + expand_scale * 0.01 : initial_scale
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
