<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:image
      {styles}
      {width}
      {height}
      {pen_width}
      {eraser_width}
      {pen_color}
      {background_image}
      {readonly}
      {disabled}
      {initial_scale}
      {expand_to}
      {expand_from}
      {expand_scale}
      {tools}
      {active_tool}
      {actions}
      {drawing_label}
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
  // @ts-nocheck

  import { Canvas as KwsCanvas } from "@kws3/ui";

  export let styles = {
      border: "1px solid #b5b5b5",
    },
    width = "250px",
    height = "250px",
    pen_width = 2,
    eraser_width = 6,
    pen_color = "#ff0000",
    background_image = "",
    readonly = false,
    disabled = false,
    image = "",
    initial_scale = 1,
    expand_to = "center",
    expand_from = "center",
    expand_scale = 50,
    tools = ["Pen", "Eraser"],
    actions = ["controls", "colorpicker", "undo", "redo", "reset", "expand"],
    active_tool = "Pen",
    drawing_label = "",
    cy = "";
</script>
