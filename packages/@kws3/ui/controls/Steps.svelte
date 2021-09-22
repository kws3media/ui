<div class="steps {klass} is-{size}">
  {#each steps as step, idx}
    <div
      class="step-item is-{color} {active_index >= idx ? 'is-active' : ''}"
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
    active_index = 0,
    size = "small",
    color = "primary",
    clickable = false;

  /**
   * CSS classes for the slider
   */
  let klass = "";
  export { klass as class };

  function navigateStep(index) {
    if (!clickable) return;
    active_index = index;
  }
</script>
