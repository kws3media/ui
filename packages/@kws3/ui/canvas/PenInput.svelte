<!--
  @component


  @param {string} [width="250px"] - Canvas width, Default: `"250px"`
  @param {string} [height="250px"] - Canvas height, Default: `"250px"`
  @param {number} [pen_width=2] - pen width, Default: `2`
  @param {number} [eraser_width=6] - Eraser width, Default: `6`
  @param {string} [pen_color="#000000"] - line color, Default: `"#000000"`
  @param {string} [background_image=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {number} [expand_scale=50] - Transform scale of the canvas on expansion, Default: `50`
  @param {DrawingTools} [tools=undefined] - List of tools available for user to select from, Default: `undefined`
  @param {DrawingPad} [DRAWING_PAD=undefined] - DRAWING_PAD property, Default: `undefined`

-->
<div
  class="kws-pen-input {readonly || disabled ? 'is-readonly' : ''}"
  style:width
  style:height>
  {#if disabled || readonly}
    <img
      alt="canvasimage"
      src={image || emptyImage}
      style:width
      style:height
      style:background-image="url({background_image})" />
  {/if}
  <canvas
    bind:this={CANVAS}
    style:width
    style:height
    style:background-image="url({background_image})"
    style:background-color={readonly ? "transparent" : ""} />
</div>

<script>
  import { DrawingPad } from "../internal";

  import { onMount, createEventDispatcher } from "svelte";
  /**
   * @typedef {import('@kws3/ui/internal/DrawingPad').DrawingPad} DrawingPad
   * @typedef {import('@kws3/ui/types').DrawingTools} DrawingTools
   */

  const fire = createEventDispatcher();

  /**
   * Canvas width
   */
  export let width = "250px";
  /**
   * Canvas height
   */
  export let height = "250px";
  /**
   *pen width
   */
  export let pen_width = 2;
  /**
   * Eraser width
   */
  export let eraser_width = 6;
  /**
   * line color
   */
  export let pen_color = "#000000";
  /**
    /**
     * Background image for the canvas
     */
  export let background_image = "";
  /**
   * Determines whether canvas is readonly or not
   */
  export let readonly = false;
  /**
   * Determines whether canvas is disabled or not
   */
  export let disabled = false;
  /**
   * The Data created in the canvas by the user
   */
  export let image = "";
  /**
   * Initial transform scale for the canvas before expansion
   */
  export let initial_scale = 1;
  /**
   * Transform scale of the canvas on expansion
   */
  export let expand_scale = 50;
  /**
   * List of tools available for user to select from
   * @type {DrawingTools}
   */
  export let tools = {};

  /**
   * @type {DrawingPad}
   */
  export let DRAWING_PAD;

  /**
   * @type {HTMLCanvasElement}
   */
  let CANVAS,
    is_ready = false,
    emptyImage =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  $: readonly, setEvents();

  onMount(() => {
    CANVAS && CANVAS.setAttribute("width", width.replace("px", ""));
    CANVAS && CANVAS.setAttribute("height", height.replace("px", ""));

    DRAWING_PAD = new DrawingPad(
      { CANVAS, fire },
      {
        penWidth: pen_width,
        penColor: pen_color,
        eraserWidth: eraser_width,
        initialScale: initial_scale,
        image: image || emptyImage,
        readonly,
        expand: expand_scale,
        tools: tools,
      }
    );

    DRAWING_PAD && DRAWING_PAD.init();
    is_ready = true;

    return () => {
      CANVAS && DRAWING_PAD.removeEvent();
    };
  });

  function setEvents() {
    if (is_ready) {
      if (readonly) {
        DRAWING_PAD && DRAWING_PAD.removeEvent();
      } else {
        DRAWING_PAD && DRAWING_PAD.addEvent();
      }
    }
  }
</script>
