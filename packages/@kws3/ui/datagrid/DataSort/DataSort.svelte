<div class="sorting-filters">
  <div class="field is-grouped">
    <div class="control">
      <small>Sort By:</small>
    </div>
    <div class="control">
      <div class="select is-small">
        <select class="is-fullwidth" bind:value>
          <option value="">Default</option>
          {#each options as opt}
            <option value="{opt.value}">{opt.name}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let options = [],
    sort_by = "",
    value = "";

  $: value, fire("sort", value);
  $: value = sort_by.replace("%20", " ");
</script>
