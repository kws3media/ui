<!--
  @component

  @param {string} [width="250px"] - Width of the canvas, Default: `250px`
  @param {string} [height="250px"] - Height of the canvas, Default: `250px`
  @param {number} [pen_width=2] - width of the line, Default: `2`
  @param {number} [eraser_width=6] - Eraser width, Default: `6`
  @param {string} [pen_color="#000000"] - Line color, Default: `"#000000"`
  @param {string} [background_image=""] - Background image for the canvas, Default: `""`
  @param {string} [background_size="cover"] - Background image size for the canvas, Default: `"cover"`
  @param {string} [background_repeat="no-repeat"] - Background image repeatation for the canvas, Default: `"no-repeat"`

  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {number} [initial_scale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {number} [expand_scale=50] -  Transform scale of the canvas on expansion Default: `50`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
-->

<div
  class="canvas-box {readonly || disabled ? 'is-readonly' : ''}"
  style:width
  style:height
>
  {#if disabled || readonly}
    <img
      alt="canvasimage"
      src={image || emptyImage}
      style:width
      style:height
      style:background-image="url({background_image})"
      style:background-size={background_size}
      style:background-repeat={background_repeat}
      />
  {/if}
  <canvas bind:this={CANVAS}
    style:width
    style:height
    style:background-size={background_size}
    style:background-repeat={background_repeat}
    style:background-image="url({background_image})"
    style:background-color={readonly ? 'transparent':''}
    style:border={!is_filled ? '1px solid #000000':''}
  />
</div>

<script>
  import { DrawingPad } from "../internal";

  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let is_filled = false,
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
    pen_color = "#000000",
    /**
    /**
     * Background image for the canvas
     */
    background_image = "",
    /**
     * Background image size for the canvas
     */
    background_size = "cover",
    /**
     * Background image repeatation for the canvas
     */
    background_repeat = "no-repeat",
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
     */
    expand_scale = 50,
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
    DRAWING_PAD;

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
