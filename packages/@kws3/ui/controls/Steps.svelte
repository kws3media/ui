<div class="steps {klass}">
  {#each steps as step, idx}
    <div
      class="step-item is-success {active_index == idx ? 'is-active' : ''}"
      on:click={() => navigateStep(idx)}
      style="cursor:pointer;">
      <div class="step-marker">{idx + 1}</div>
      {#if steps[idx].name || steps[idx].description}
        <div class="step-details">
          <p class="step-title">{steps[idx].name}</p>
          {#if steps[idx].description}
            <p>{steps[idx].description}</p>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>

<script>
  import { onMount } from "svelte";

  /**
   * Minumum permitted value
   */
  export let steps = [],
    active_index = 0;

  /**
   * CSS classes for the slider
   */
  let klass = "";
  export { klass as class };

  function navigateStep(index) {
    active_index = index;
  }
</script>
