<div class="columns">
  <div class="column">
    <CanvasInput
      {expanded}
      {readonly}
      {disabled}
      {is_filled}
      {styles}
      {width}
      {height}
      {lineColor}
      {lineWidth}
      {eraserWidth}
      {image}
      {backgroundImage}
      {initialScale}
      {expand}
      bind:CANVAS_IMAGE
      on:change={onChange} />
  </div>
</div>

<script>
  import { CanvasInput as CanvasInput } from "@kws3/ui";

  export let is_filled = false,
    styles = {},
    width = "250px",
    height = "250px",
    lineColor = "#000000",
    lineWidth = 2,
    eraserWidth = 6,
    image = "",
    backgroundImage = "",
    expanded = false,
    initialScale = 1,
    expand = { from: "center", to: "center", scale: 50 },
    readonly = false,
    disabled = false,
    CANVAS_IMAGE;

  function onChange({ detail }) {
    image = detail.canvasImage;
    console.log(detail);
  }
</script>
