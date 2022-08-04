<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">
        Animation
        <button
          type="button"
          class="button is-primary is-small"
          on:click={() => {
            start();
          }}>Start</button>
        <button
          type="button"
          class="button is-danger is-small"
          on:click={() => {
            stop();
          }}>Stop</button>
      </h2>
      <div id="animatedDiv" style="width:100%;height : 200px" key={globalID} />
    </div>
  </div>
</div>

<script>
  import { rAF } from "@kws3/ui";

  let globalID;
  function repeatOften() {
    var div = document.getElementById("animatedDiv");
    div.innerHTML += `<div style=" width: 10px;
    height: 10px;
    background: orange;
    float: left;"></div>`;
    globalID = rAF(repeatOften);
  }
  globalID = rAF(repeatOften);

  function start() {
    globalID = rAF(repeatOften);
  }

  function stop() {
    cancelAnimationFrame(globalID);
  }
</script>
