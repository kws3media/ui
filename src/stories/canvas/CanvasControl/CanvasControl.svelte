<div class="columns">
  <div class="column has-text-centered mt-4">
    <label for="" class="label">Canvas Control</label>
    <KwsCanvasControls
      {canvasControlsStyles}
      {readonly}
      {disabled}
      {tools}
      {activeTool}
      {actions}
      {toolbarPlacement}
      {drawing_label}
      {setTool}
      {expandContract}
      bind:EXPANDED_BUTTON
      bind:PEN_INPUT
      bind:canUndo
      bind:canRedo
      bind:showTools />
  </div>
</div>

<script>
  import { CanvasControls as KwsCanvasControls } from "@kws3/ui";

  export let canvasControlsStyles = "",
    readonly = false,
    disabled = false,
    tools = ["Pen", "Eraser"],
    actions = ["controls", "undo", "redo", "reset", "expand"],
    toolbarPlacement = "bottom",
    activeTool = "Pen",
    drawing_label = "";

  let PEN_INPUT, EXPANDED_BUTTON;

  let canUndo = false,
    canRedo = false,
    expanded = false,
    showTools = false;

  function setTool(tool) {
    activeTool = tool;
    showTools = false;
    PEN_INPUT && PEN_INPUT.setTool(tool);
  }
  function expandContract() {
    expanded = !expanded;
    if (EXPANDED_BUTTON) {
      EXPANDED_BUTTON._tippy.setContent(
        EXPANDED_BUTTON.getAttribute("data-tooltip")
      );
    }
  }
</script>
