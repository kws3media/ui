<div class="columns">
  <div class="column is-8">
    <pre>
      Random Integer within the range: {randomNumber}
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
        regenerateNumber();
      }}>
      <Icon icon="refresh" />
      <span>Re-generate</span>
    </button>
  </div>
</div>

<script>
  //@ts-nocheck
  import { randomIntegerFromInterval } from "@kws3/ui/utils";
  import { Icon } from "@kws3/ui";
  import { onMount } from "svelte";

  let randomNumber = 0;
  let min = 0,
    max = 100;

  onMount(() => {
    regenerateNumber();
  });

  function regenerateNumber() {
    randomNumber = randomIntegerFromInterval(min, max);
  }
</script>
