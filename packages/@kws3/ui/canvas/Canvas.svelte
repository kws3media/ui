<!--
  @component


  @param {string} [width="250px"] - Canvas width, Default: `"250px"`
  @param {string} [height="250px"] - Canvas height, Default: `"250px"`
  @param {string |'Pen'|'Eraser'} [active_tool=""] - Default active tool, Default: `""`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {boolean} [is_touched=false] - Determines whether canvas is touched or not, Default: `false`
  @param {number} [pen_width=2] - `CONST` pen width, Default: `2`
  @param {number} [eraser_width=6] - `CONST` Eraser width, Default: `6`
  @param {string} [pen_color="#ff0000"] - line color, Default: `"#ff0000"`
  @param {string} [background_image=""] - `CONST` Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - `CONST` Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - `CONST` Determines whether canvas is disabled or not, Default: `false`
  @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {string} [expand_from="center"] - The direction from which the canvas should expand.
'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
  @param {string} [expand_to="center"] - The direction to which the canvas should expand.
'top', 'bottom', 'left', 'right', 'center' and also 'n%', Default: `"center"`
  @param {number} [expand_scale=50] - Transform scale of the canvas on expansion
value in percentage %, Default: `50`
  @param {array} [actions=[]] - `CONST` List of actions toolbar, Default: `[]`
  @param {Extract<Positions, 'bottom'|'top'>} [toolbar_placement=bottom] - Default position of the action toolbar, Default: `bottom`
  @param {object} [tools={}] - List of tools available for user to select from, Default: `{}`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
  @param {boolean} [has_controls=true] - Determines control tools available or not, Default: `true`
  @param {Extract<Positions, 'start'|'center'|'end'>} [control_position=center] - `CONST` Default position of controls, Default: `center`
  @method `getActions()` - GetActions method

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
  style:transform-origin="{expand_from}
  {expand_to}"
  data-cy={cy}>
  <PenInput {...$$props} {expanded} bind:DRAWING_PAD on:change={onChange} />

  {#if has_controls}
    <PenControls
      {...$$props}
      on:changeColor={({ detail: { color } }) => changeColor(color)}
      on:setTool={({ detail: { tool } }) => setTool(tool)}
      on:undo={() => undo()}
      on:redo={() => redo()}
      on:reset={() => reset()}
      on:toggleExpand={() => toggleExpand()}
      {active_tool}
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
   * @typedef {import('@kws3/ui/types').Positions} Positions
   */

  /**
   * Canvas width
   */
  export let width = "250px";
  /**
   * Canvas height
   */
  export let height = "250px";
  /**
   * Default active tool
   * @type {string |'Pen'|'Eraser'}
   */
  export let active_tool = "";
  /**
   * The Data created in the canvas by the user
   */
  export let image = "";
  /**
   *  Determines whether canvas is touched or not
   */
  export let is_touched = false;

  /**
   *  pen width
   */
  export const pen_width = 2;
  /**
   * Eraser width
   */
  export const eraser_width = 6;
  /**
   * line color
   */
  export let pen_color = "#ff0000";
  /**
   * Background image for the canvas
   */
  export const background_image = "";
  /**
   * Determines whether canvas is readonly or not
   */
  export const readonly = false;
  /**
   * Determines whether canvas is disabled or not
   */
  export const disabled = false;

  /**
   * Initial transform scale for the canvas before expansion
   */
  export let initial_scale = 1;
  /**
   * The direction from which the canvas should expand.
   * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
   */
  export let expand_from = "center";
  /**
   * The direction to which the canvas should expand.
   * 'top', 'bottom', 'left', 'right', 'center' and also 'n%'
   */
  export let expand_to = "center";
  /**
   * Transform scale of the canvas on expansion
   * value in percentage %
   */
  export let expand_scale = 50;
  /**
   * List of actions toolbar
   */
  export const actions = [
    "controls",
    "colorpicker",
    "undo",
    "redo",
    "reset",
    "expand",
  ];
  /**
   * Default position of the action toolbar
   * @type {Extract<Positions, 'bottom'|'top'>}
   */
  export let toolbar_placement = "bottom";
  /**
   * List of tools available for user to select from
   */
  export let tools = {};

  /**
   * data-cy attribute for cypress
   */
  export let cy = "";

  /**
   *  Determines control tools available or not
   */
  export let has_controls = true;
  /**
   * Default position of controls
   * @type {Extract<Positions, 'start'|'center'|'end'>}
   */
  export const control_position = "center";

  let DRAWING_PAD;

  let can_undo = false,
    can_redo = false,
    expanded = false,
    show_tools = false,
    settingFlag = false;

  let penColor = "000000";

  $: penColor =
    typeof window !== "undefined" &&
    window.CSS &&
    window.CSS.supports("color", pen_color)
      ? pen_color
      : "#000000";
  $: is_touched = can_undo;
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
