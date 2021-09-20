<!--
  @component


  @param {object} [row={}] - Row property, Default: `{}`
  @param {boolean} [rowActive=false] - RowActive property, Default: `false`
  @param {boolean} [clickableRows=false] - ClickableRows property, Default: `false`
  @param {function} [isVisible()] - IsVisible function
  @param {function} [transforms()] - Transforms function
  @param {function} [classNames()] - ClassNames function
  @param {function} [styles()] - Styles function
  @param {array} [column_keys=[]] - Column_keys property, Default: `[]`

  ### Events
  - `rowClick`

-->
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
