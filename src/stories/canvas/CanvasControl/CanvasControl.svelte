<div class="columns">
  <div class="column has-text-centered mt-4">
    <label for="" class="label">Input</label>
    <KwsCanvasControls
      {canvasControlsStyles}
      {readonly}
      {disabled}
      {initialScale}
      {expand}
      {tools}
      {activeTool}
      {actions}
      {toolbarPlacement}
      {drawing_label}
      {setTool}
      {expandContract}
      bind:CANVAS_IMAGE
      bind:canUndo
      bind:canRedo
      bind:showTools
      {cy} />
  </div>
</div>

<script>
  import { CanvasControls as KwsCanvasControls } from "@kws3/ui";

  export let canvasControlsStyles = "",
    readonly = false,
    disabled = false,
    image = "",
    initialScale = 1,
    expand = {
      from: "center",
      to: "center",
      scale: 50,
    },
    tools = ["Pen", "Eraser"],
    actions = ["controls", "undo", "redo", "reset", "expand"],
    toolbarPlacement = "bottom",
    activeTool = "Pen",
    drawing_label = "",
    cy = "";

  let CANVAS_IMAGE, EXPANDED_BUTTON;

  let canUndo = false,
    canRedo = false,
    expanded = false,
    showTools = false,
    settingFlag = false;

  function setTool(tool) {
    activeTool = tool;
    showTools = false;
    CANVAS_IMAGE && CANVAS_IMAGE.setTool(tool);
  }

  function setColor() {
    CANVAS_IMAGE && CANVAS_IMAGE.setColor(`#${penColor}`);
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
