<div class="columns">
  <div class="column is-8">
    <pre>
      Random Integer within the range: {value}
    </pre>
  </div>
  <div class="column is-4">
    <div class="field">
      <div class="control">
        <label for="" class="label">Min Range Value</label>
        <input class="input" type="text" bind:value={min} />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <label for="" class="label">Max Range Value</label>
        <input class="input" type="text" bind:value={max} />
      </div>
    </div>
    <button
      type="button"
      class="button is-success is-pulled-right"
      on:click={() => {
        regenerate();
      }}>
      <Icon icon="refresh" />
      <span>Re-generate</span>
    </button>
  </div>
</div>

<script>
  //@ts-nocheck
  import { randomPercent } from "@kws3/ui/utils";
  import { Icon } from "@kws3/ui";
  import { onMount } from "svelte";

  let value = 0;
  let min = 1,
    max = 100;

  onMount(() => {
    regenerate();
  });

  function regenerate() {
    value = randomPercent(min, max);
  }
</script>
