<div class="columns">
  <div class="column has-text-centered">
    <label for="" class="label">Please sign here</label>
    <KwsCanvas
      bind:image
      bind:is_filled
      {styles}
      {width}
      {height}
      {background_image}
      {readonly}
      {disabled}
      {activeTool}
      {actions}
      {has_controls}
      {control_position} />
  </div>
</div>

<script>
  import { Canvas as KwsCanvas } from "@kws3/ui";

  export let image, is_filled;
  let styles = {
      border: "1px solid #b5b5b5",
    },
    width = "520px",
    height = "170px",
    background_image = "",
    readonly = false,
    disabled = false,
    actions = ["undo", "redo", "reset"],
    activeTool = "Pen",
    has_controls = true,
    control_position = "end";
</script>
