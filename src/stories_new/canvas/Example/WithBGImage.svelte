<div class="columns mb-6">
  <div class="column has-text-centered">
    <label for="" class="label">Input</label>
    <KwsCanvas
      bind:image
      active_tool="Pen"
      {width}
      {tools}
      {background_image}
     />
  </div>
  <div class="column has-text-centered">
    <label for="" class="label">Output</label>
    {#if image}
      <img
        alt="canvasoutput"
        src={image}
        {width}
        {height}
        style:border="1px solid #b5b5b5;"
        style:background-image="url({background_image})"
        style:background-size="contain"/>
    {/if}
  </div>
</div>


<style lang='scss'>
  :global(.kws-canvas-wrapper .kws-pen-input canvas){
      background-repeat: repeat;
      background-size: cover;
    }
</style>

<script>
  import { Canvas as KwsCanvas, Pen, Eraser} from "@kws3/ui";

  export let image;


  export let width = "350px",
    height='250px',
    background_image = "/images/canvas_bg.png";

    let tools = {Pen, Eraser};
</script>
