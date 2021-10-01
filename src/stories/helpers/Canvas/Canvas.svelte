<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:image
      {styles}
      {lineWidth}
      {eraserWidth}
      {lineColor}
      {backgroundImage}
      {readonly}
      {disabled}
      {expandFrom}
      {initialScale}
      {expandedScale}
      {tools}
      {activeTool}
      {drawing_label}
      {hide_colorpicker}
      {cy} />
  </div>
  <div class="column has-text-centered">
    <label for="" class="label">Output</label>
    {#if image}
      <img
        alt="canvasoutput"
        src={image}
        width={styles.width}
        height={styles.height}
        style="border: 1px solid #b5b5b5;" />
    {/if}
  </div>
</div>

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
    expandFrom = "center center",
    initialScale = 1,
    expandedScale = 2,
    tools = ["Pen", "Eraser"],
    activeTool = "Pen",
    drawing_label = "",
    hide_colorpicker = false,
    cy = "";
</script>
