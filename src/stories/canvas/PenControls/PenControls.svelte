<div class="columns">
  <div class="column has-text-centered mt-4">
    <label for="" class="label">Canvas Control</label>
    <KwsPenControls
      {penControlsStyles}
      {readonly}
      {disabled}
      {tools}
      {active_tool}
      {actions}
      {drawing_label}
      {setTool}
      {expandContract}
      bind:EXPANDED_BUTTON
      bind:DRAWING_PAD
      bind:can_undo
      bind:canRedo
      bind:show_tools />
  </div>
</div>

<script>
  import { PenControls as KwsPenControls } from "@kws3/ui";

  export let penControlsStyles = "",
    readonly = false,
    disabled = false,
    tools = ["Pen", "Eraser"],
    actions = ["controls", "undo", "redo", "reset", "expand"],
    active_tool = "Pen",
    drawing_label = "";

  let DRAWING_PAD, EXPANDED_BUTTON;

  let can_undo = false,
    canRedo = false,
    expanded = false,
    show_tools = false;

  function setTool(tool) {
    active_tool = tool;
    show_tools = false;
    DRAWING_PAD && DRAWING_PAD.setTool(tool);
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
