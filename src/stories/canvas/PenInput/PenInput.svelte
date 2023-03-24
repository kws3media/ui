<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsPenInput
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
      bind:PEN_INPUT
      on:change={onChange} />
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
  import { PenInput as KwsPenInput } from "@kws3/ui";

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
    PEN_INPUT;

  function onChange({ detail }) {
    image = detail.canvasImage;
  }
</script>
