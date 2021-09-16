{#if transition}
  <tr
    in:fly={{ x: 20, delay: 25 * row_index }}
    on:click|stopPropagation={rowClick}
    class:is-selected={rowActive}>
    {#if bulk_actions}
      <td style="vertical-align:middle;">
        <Checkbox
          size={selectCheckboxSize}
          color={selectCheckboxColor}
          style="margin:0;"
          inverted={false}
          bind:checked
          on:change={changed} />
      </td>
    {/if}
    {#each column_keys as column}
      {#if isVisible(column)}
        <svelte:component
          this={resolveComponent(column, row)}
          on:_forwardEvent
          {column}
          {row}
          {transforms}
          {classNames}
          {styles} />
      {/if}
    {/each}
  </tr>
{:else}
  <tr on:click|stopPropagation={rowClick} class:is-selected={rowActive}>
    {#if bulk_actions}
      <td style="vertical-align:middle;">
        <Checkbox
          size={selectCheckboxSize}
          color={selectCheckboxColor}
          style="margin:0;"
          inverted={false}
          bind:checked
          on:change={changed} />
      </td>
    {/if}
    {#each column_keys as column}
      {#if isVisible(column)}
        <svelte:component
          this={resolveComponent(column, row)}
          on:_forwardEvent
          {column}
          {row}
          {transforms}
          {classNames}
          {styles} />
      {/if}
    {/each}
  </tr>
{/if}

<script>
  import { fly } from "svelte/transition";
  import GridCell from "./GridCell.svelte";
  import { Checkbox } from "@kws3/ui";
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  export let row_index = 0,
    row = {},
    rowActive = false,
    isVisible = {},
    clickableRows = false,
    transforms = {},
    classNames = {},
    transition = false,
    styles = {},
    column_keys = [],
    bulk_actions = false,
    checked = false,
    selectedIds = [],
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    cellComponent = () => null;

  $: resolveComponent = (column, row) => {
    return cellComponent(column, row) || GridCell;
  };

  $: selectedIds, setCheckedValue();

  function setCheckedValue() {
    checked = false;
    if (selectedIds.indexOf(row.id) != -1) {
      checked = true;
    }
  }

  function changed() {
    fire("rowSelectChecked", { checked, row });
  }

  function rowClick() {
    if (clickableRows) {
      rowActive = true;
      fire("rowClick", { row });
    }
  }
</script>
