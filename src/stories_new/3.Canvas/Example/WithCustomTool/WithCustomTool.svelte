<div class="columns mb-6">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:image
      active_tool="Circle"
      {width}
      {tools}
      {pen_width}
      {eraser_width} />
  </div>
  <div class="column has-text-centered">
    <label for="" class="label">Output</label>
    {#if image}
      <img
        alt="canvasoutput"
        src={image}
        {width}
        {height}
        style:border="1px solid #b5b5b5;" />
    {/if}
  </div>
</div>

<style lang="scss">
  :global(.kws-canvas-wrapper .kws-pen-input canvas) {
    background-repeat: repeat;
    background-size: cover;
  }
</style>

<script>
  import { Canvas as KwsCanvas, Eraser } from "@kws3/ui";

  export let image,
    pen_width = 2,
    eraser_width = 2;

  let Circle = {
    name: "Circle",
    icon: "circle-o",
    draw: (instance) => {
      const x = instance.currentPos.x;
      const y = instance.currentPos.y;
      const radius = 50;

      instance.context.beginPath();
      instance.context.arc(x, y, radius, 0, 2 * Math.PI);
      instance.context.stroke();
      instance.context.globalCompositeOperation = "source-over";
    },
  };

  export let width = "350px",
    height = "250px";

  let tools = { Circle, Eraser };
</script>
