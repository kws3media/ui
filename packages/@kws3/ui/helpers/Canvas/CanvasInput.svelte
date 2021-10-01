<div
  class="drawing-box {readonly || disabled ? 'is-readonly' : ''}"
  style="width:{styles.width || '340px'};height:{styles.height || '100px'}">
  {#if disabled || readonly}
    <img alt="canvasimage" src={image || emptyImage} style={_image_syles} />
  {/if}
  <canvas bind:this={CANVAS} style={_styles} />
</div>

<script>
  import DrawImage from "./DrawImage";
  import { onMount, createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let styles = {
      width: "250px",
      height: "250px",
    },
    lineColor = "#3d44c8",
    lineWidth = 2,
    eraserWidth = 6,
    image = "",
    backgroundImage = "",
    expanded = false,
    initialScale = 1,
    expandedScale = 2,
    readonly = false,
    disabled = false,
    CANVAS_IMAGE;

  let CANVAS,
    is_ready = false,
    _styles = {},
    emptyImage =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

  $: _image_syles = `width:${styles.width || "250px"}; height:${
    styles.height || "250px"
  }; border:${
    styles.border || "1px solid #000000"
  }; pointer-events: none; background-image:url(${
    backgroundImage || ""
  }); background-repeat: no-repeat; background-size: contain; background-position: center center;`;

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

    default_styles["width"] = "340px";
    default_styles["height"] = "100px";

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
    CANVAS && CANVAS.setAttribute("width", styles.width.replace("px", ""));
    CANVAS && CANVAS.setAttribute("height", styles.height.replace("px", ""));

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
        expandedScale,
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
