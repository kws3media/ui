<div
  class="drawing-wrapper m-auto {expanded ? 'expanded' : ''}"
  style={wrapperStyles}
  data-cy={cy}>
  <CanvasInput
    {...$$props}
    {expanded}
    bind:CANVAS_IMAGE
    on:change={onChange}
    {is_filled} />
  {#if has_controls}
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
  {/if}
</div>

<script>
  import { onMount } from "svelte";
  import CanvasControls from "./Canvas/CanvasControls.svelte";
  import CanvasInput from "./Canvas/PenInput.svelte";

  export let styles = {},
    width = "250px",
    height = "250px",
    line = 2,
    eraser = 6,
    color = "#000000",
    backgroundImage = "",
    readonly = false,
    disabled = false,
    image = "",
    initialScale = 1,
    expand = { from: "center", to: "center", scale: 50 },
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    toolbarPlacement = "bottom",
    tools = ["Pen", "Eraser"],
    activeTool = "Pen",
    drawing_label = "",
    cy = "",
    lineWidth = 3,
    has_controls = true,
    controlPosition = "center";
  let EXPANDED_BUTTON, CANVAS_IMAGE;
  export let is_filled = false,
    canUndo = false;
  let canRedo = false,
    expanded = false,
    showTools = false,
    settingFlag = false;
  let wrapperStyles = {},
    penColor = "000000";
  $: {
    is_filled = canUndo;
    penColor =
      color.substr(0, 1) === +"#"
        ? color.substr(1)
        : color.length === 6
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
    CANVAS_IMAGE && CANVAS_IMAGE.setColor(`#${penColor}`);
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
