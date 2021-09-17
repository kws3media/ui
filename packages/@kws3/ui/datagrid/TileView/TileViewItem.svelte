<div
  class:is-selected={rowActive}
  class="box {clickableRows ? 'is-hoverable' : ''}"
  on:click|stopPropagation={rowClick}>
  {#each column_keys as column}
    {#if isVisible(column)}
      <div class={classNames(column, row)} style={styles(column, row)}>
        {@html transforms(column, row)}
      </div>
    {/if}
  {/each}
</div>

<script>
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let row = {},
    rowActive = false,
    clickableRows = false,
    isVisible = function () {},
    transforms = function () {},
    classNames = function () {},
    styles = function () {},
    column_keys = [];

  function rowClick() {
    if (clickableRows) {
      rowActive = true;
      fire("rowClick", { row });
    }
  }
</script>
