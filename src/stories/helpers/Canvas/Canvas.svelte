<KwsCanvas
  {styles}
  {lineWidth}
  {eraserWidth}
  {lineColor}
  {backgroundImage}
  {readonly}
  {disabled}
  {image}
  {canUndo}
  {canRedo}
  {expandFrom}
  {initialScale}
  {expandedScale}
  {tools}
  {activeTool}
  {drawing_label}
  {cy} />

<script>
  import { Canvas as KwsCanvas } from "@kws3/ui";

  export let styles = {
      width: "250px",
      height: "250px",
      border: "1px solid #b5b5b5",
    },
    lineWidth = 2,
    eraserWidth = 6,
    lineColor = "#ff0000",
    backgroundImage = "",
    readonly = false,
    disabled = false,
    image = "",
    canUndo = false,
    canRedo = false,
    expandFrom = "center center",
    initialScale = 1,
    expandedScale = 2,
    tools = ["Pen", "Eraser"],
    activeTool = "Pen",
    drawing_label = "",
    cy = "";
</script>
