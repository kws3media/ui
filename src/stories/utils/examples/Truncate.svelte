<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Original Text</h2>
      <div>{text}</div>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Truncated Text</h2>
      <pre>
        {truncate(text, 20)}
      </pre>
    </div>
  </div>
</div>

<script>
  import { truncate } from "@kws3/ui";
  let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`;
</script>
