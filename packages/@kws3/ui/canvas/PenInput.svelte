<!--
  @component

  @param {object} [styles={}] - Inline CSS for the canvas, Default: `{}`
  @param {string} [width="250px"] - Width of the canvas, Default: `250px`
  @param {string} [height="250px"] - Height of the canvas, Default: `250px`
  @param {number} [pen_width=2] - width of the line, Default: `2`
  @param {number} [eraserWidth=6] - Eraser width, Default: `6`
  @param {string} [lineColor="#000000"] - Line color, Default: `"#000000"`
  @param {string} [backgroundImage=""] - Background image for the canvas, Default: `""`
  @param {boolean} [readonly=false] - Determines whether canvas is readonly or not, Default: `false`
  @param {boolean} [disabled=false] - Determines whether canvas is disabled or not, Default: `false`
  @param {string} [image=""] - The Data created in the canvas by the user, Default: `""`
  @param {number} [initialScale=1] - Initial transform scale for the canvas before expansion, Default: `1`
  @param {object} [expand={}] - Transform scale and the direction from which the canvas should expand on expansion, Default: `{from: "center", to: "center", scale: 50}`
  @param {string} [drawing_label=""] - Label for the canvas drawing box, for readonly mode

Only active when canvas is `readonly` or `disabled`, Default: `""`
  @param {string} [cy=""] - data-cy attribute for cypress, Default: `""`
-->

<div
  class="canvas-box {readonly || disabled ? 'is-readonly' : ''}"
  style="width:{width || '250px'};height:{height || '250px'}">
  {#if disabled || readonly}
    <img alt="canvasimage" src={image || emptyImage} style={_image_syles} />
  {/if}
  <canvas bind:this={CANVAS} style={_styles} />
</div>

<script>
  import { DrawingPad } from "../internal";

  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let is_filled = false,
    /**
     * Inline CSS for the canvas
     */
    styles = {},
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
    eraserWidth = 6,
    /**
     * line color
     */
    lineColor = "#000000",
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
    _styles = {},
    emptyImage =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  $: _image_syles = `
    width:${width || "250px"};
    height:${height || "250px"};
    border:${styles.border || "1px solid #000000"};
    pointer-events: none; background-image:url(${backgroundImage || ""});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  `;
  $: {
    let default_styles = {
      "background-color": "#fdfdfd",
      "background-repeat": "no-repeat",
      "background-size": "contain",
      "background-position": "center center",
      "border-top": "1px dotted #ccc",
      "border-left": "1px dotted #ccc",
      "border-right": "1px dotted #ccc",
      "border-bottom": "1px dotted #ccc",
      "background-image": `url(${backgroundImage})`,
    };
    default_styles["width"] = width;
    default_styles["height"] = height;
    let __styles = { ...default_styles, ...styles };
    if (readonly) {
      __styles["background-color"] = "transparent";
    }
    if (!is_filled) {
      __styles["border"] = "1px dotted #ff0000";
    }
    _styles = Object.entries(__styles)
      .map(([key, val]) => `${key}:${val}`)
      .join(";");
  }

  $: readonly, setEvents();

  onMount(() => {
    CANVAS && CANVAS.setAttribute("width", width.replace("px", ""));
    CANVAS && CANVAS.setAttribute("height", height.replace("px", ""));

    DRAWING_PAD = new DrawingPad(
      { CANVAS, fire },
      {
        penWidth: pen_width,
        lineColor,
        eraserWidth,
        image: image || emptyImage,
        readonly,
        initialScale,
        expand: expand.scale,
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
