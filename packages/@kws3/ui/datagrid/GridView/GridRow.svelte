<!--
  @component


  @param {number} [row_index=0] - Row_index property, Default: `0`
  @param {object} [row={}] - Row property, Default: `{}`
  @param {boolean} [rowActive=false] - RowActive property, Default: `false`
  @param {object} [isVisible={}] - IsVisible property, Default: `{}`
  @param {boolean} [clickableRows=false] - ClickableRows property, Default: `false`
  @param {object} [transforms={}] - Transforms property, Default: `{}`
  @param {object} [classNames={}] - ClassNames property, Default: `{}`
  @param {boolean} [transition=false] - Transition property, Default: `false`
  @param {object} [styles={}] - Styles property, Default: `{}`
  @param {array} [column_keys=[]] - Column_keys property, Default: `[]`
  @param {boolean} [bulk_actions=false] - Bulk_actions property, Default: `false`
  @param {boolean} [checked=false] - Checked property, Default: `false`
  @param {array} [selectedIds=[]] - SelectedIds property, Default: `[]`
  @param {string} [selectCheckboxColor="info"] - SelectCheckboxColor property, Default: `"info"`
  @param {string} [selectCheckboxSize="medium"] - SelectCheckboxSize property, Default: `"medium"`
  @param {function} [cellComponent()] - CellComponent function

  ### Events
  - `rowSelectChecked`
  - `rowClick`
  - `_forwardEvent`

-->
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
