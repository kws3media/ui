<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:image
      bind:is_filled
      {styles}
      {width}
      {height}
      {line}
      {eraser}
      {color}
      {background_image}
      {readonly}
      {disabled}
      {initial_scale}
      {expand}
      {tools}
      {activeTool}
      {actions}
      {toolbar_placement}
      {drawing_label}
      {cy}
      {has_controls}
      {control_position} />
  </div>
  <!-- <div class="column has-text-centered">
    <label for="" class="label">Output</label>
    {#if image}
      <img
        alt="canvasoutput"
        src={image}
        {width}
        {height}
        style="border: 1px solid #b5b5b5;" />
    {/if}
  </div> -->
</div>

<script>
  import { Canvas as KwsCanvas } from "@kws3/ui";

  export let image, is_filled;
  let styles = {
      border: "1px solid #b5b5b5",
    },
    width = "520px",
    height = "170px",
    line = 2,
    eraser = 6,
    color = "#000000",
    background_image = "",
    readonly = false,
    disabled = false,
    initial_scale = 1,
    expand = {
      from: "center",
      to: "center",
      scale: 50,
    },
    tools = ["Pen", "Eraser"],
    actions = ["undo", "redo", "reset"],
    toolbar_placement = "bottom",
    activeTool = "Pen",
    drawing_label = "",
    cy = "",
    has_controls = true,
    control_position = "end";
</script>
