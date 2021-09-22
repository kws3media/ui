<!--
  @component


  @param {object} [row={}] - It contains all the columns value in a row, Default: `{}`
  @param {boolean} [rowActive=false] - Determines whether the row is selected or not, Default: `false`
  @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
  @param {function} [isVisible()] - It returns whether a column can be visible or not
  @param {function} [transforms()] - It returns column custom value
  @param {function} [classNames()] - It returns column custom css class
  @param {function} [styles()] - It returns column custom css styles
  @param {array} [column_keys=[]] - It contains all the column key names, Default: `[]`

  ### Events
  - `rowClick` - Fire an event on click item

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

  /**
   * It contains all the columns value in a row
   */
  export let row = {},
    /**
     * Determines whether the row is selected or not
     */
    rowActive = false,
    /**
     * Determines whether the row is clickable or not
     */
    clickableRows = false,
    /**
     * It returns whether a column can be visible or not
     */
    isVisible = function () {},
    /**
     * It returns column custom value
     */
    transforms = function () {},
    /**
     * It returns column custom css class
     */
    classNames = function () {},
    /**
     * It returns column custom css styles
     */
    styles = function () {},
    /**
     * It contains all the column key names
     */
    column_keys = [];

  function rowClick() {
    if (clickableRows) {
      rowActive = true;
      /**
       * Fire an event on click item
       */
      fire("rowClick", { row });
    }
  }
</script>
