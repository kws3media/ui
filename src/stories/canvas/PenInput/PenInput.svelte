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
      {pen_color}
      {pen_width}
      {eraser_width}
      {image}
      {backgroundImage}
      {initialScale}
      {expand}
      bind:DRAWING_PAD
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
    pen_color = "#000000",
    pen_width = 2,
    eraser_width = 6,
    image = "",
    backgroundImage = "",
    expanded = false,
    initialScale = 1,
    expand = { from: "center", to: "center", scale: 50 },
    readonly = false,
    disabled = false,
    DRAWING_PAD;

  function onChange({ detail }) {
    image = detail.canvasImage;
  }
</script>
