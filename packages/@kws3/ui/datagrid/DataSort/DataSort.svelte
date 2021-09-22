<!--
  @component

  @param {array} [options=[]] - List of option for the dropdown, Default: `[]`
  @param {string} [sort_by=""] - It holds the selected sort value, Default: `""`
-->

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
            <option value={opt.value}>{opt.name}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * List of options in the dropdown
   */
  export let options = [],
    /**
     * It holds the selected option value
     */
    sort_by = "";

  let value = "";

  $: value, fire("sort", value);

  $: {
    value = sort_by.replace("%20", " ");
  }
</script>
