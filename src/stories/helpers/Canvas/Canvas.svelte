<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:this={canvasWrapper}
      bind:image
      {styles}
      {width}
      {height}
      {line}
      {eraser}
      {color}
      {backgroundImage}
      {readonly}
      {disabled}
      {initialScale}
      {expand}
      {tools}
      {activeTool}
      {actions}
      {actionToolbarPosition}
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
        {width}
        {height}
        style="border: 1px solid #b5b5b5;" />
    {/if}
  </div>
</div>

<script>
  import { Canvas as KwsCanvas } from "@kws3/ui";

  let canvasWrapper;

  export let styles = {
      border: "1px solid #b5b5b5",
    },
    width = "250px",
    height = "250px",
    line = 2,
    eraser = 6,
    color = "#ff0000",
    backgroundImage = "",
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
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    actionToolbarPosition = "bottom",
    activeTool = "Pen",
    drawing_label = "",
    hide_colorpicker = false,
    cy = "";
</script>
