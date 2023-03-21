<div
  class="canvas-box {readonly || disabled ? 'is-readonly' : ''}"
  style="width:{width || '250px'};height:{height || '250px'}">
  {#if disabled || readonly}
    <img alt="canvasimage" src={image || emptyImage} style={_image_syles} />
  {/if}
  <canvas bind:this={CANVAS} style={_styles} />
</div>

<script>
  import DrawImage from "./DrawImage";
  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let is_filled = false,
    styles = {},
    width = "250px",
    height = "250px",
    lineColor = "#000000",
    lineWidth = 2,
    eraserWidth = 6,
    image = "",
    backgroundImage = "",
    expanded = false,
    initialScale = 1,
    expand = { from: "center", to: "center", scale: 50 },
    readonly = false,
    disabled = false,
    CANVAS_IMAGE;

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

    _styles = Object.entries(__styles)
      .map(([key, val]) => `${key}:${val}`)
      .join(";");
  }

  $: readonly, setEvents();

  onMount(() => {
    CANVAS && CANVAS.setAttribute("width", width.replace("px", ""));
    CANVAS && CANVAS.setAttribute("height", height.replace("px", ""));

    CANVAS_IMAGE = new DrawImage(
      { CANVAS, fire },
      {
        lineColor,
        lineWidth,
        eraserWidth,
        image: image || emptyImage,
        readonly,
        expanded,
        initialScale,
        expand: expand.scale,
      }
    );

    CANVAS_IMAGE && CANVAS_IMAGE.init();
    is_ready = true;

    return () => {
      CANVAS && CANVAS_IMAGE.removeEvent();
    };
  });

  function setEvents() {
    if (is_ready) {
      if (readonly) {
        CANVAS_IMAGE && CANVAS_IMAGE.removeEvent();
      } else {
        CANVAS_IMAGE && CANVAS_IMAGE.addEvent();
      }
    }
  }
</script>
