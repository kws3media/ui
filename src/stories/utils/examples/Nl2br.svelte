<div id="tooltip-example-container-1">
  <div class="columns is-multiline">
    <div class="column is-6">
      <h2 class="subtitle is-5">Original Text</h2>
      <div>{text}</div>
    </div>
    <div class="column is-6">
      <h2 class="subtitle is-5">Text after html break</h2>
      <div>
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html new_text}
      </div>
    </div>
  </div>
</div>

<script>
  import { nl_2_br } from "@kws3/ui";

  let text = `Lorem ipsum dolor sit amet\n, consectetur adipiscing elit\n, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  let new_text = "";
  $: {
    new_text = nl_2_br(text);
    console.log(new_text);
  }
</script>
