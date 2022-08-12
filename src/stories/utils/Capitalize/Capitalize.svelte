<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Original Text</h2>
      <pre>{text}</pre>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Capitalized Text</h2>
      <pre>{capitaliseFirstLetter(text)}</pre>
    </div>
  </div>
</div>

<script>
  //@ts-nocheck
  import { capitaliseFirstLetter } from "@kws3/ui/utils";
  let text = "lorem ipsum dollar sit amet.";
</script>
