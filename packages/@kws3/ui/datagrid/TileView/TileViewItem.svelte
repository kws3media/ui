<!--
  @component


  @param {object} [row={}] - List of all values in a row, Default: `{}`
  @param {boolean} [rowActive=false] - Determines whether the row is selected or not, Default: `false`
  @param {boolean} [clickableRows=false] - Determines whether the row is clickable or not, Default: `false`
  @param {function} [isVisible()] - Returns whether a column can be visible or not
  @param {function} [transforms()] - Returns column custom value
  @param {function} [classNames()] - Returns column custom CSS class
  @param {function} [styles()] - Returns column custom CSS styles
  @param {array} [column_keys=[]] - Contains all the column key names, Default: `[]`

  ### Events
  - `rowClick` - Fires an event when a row is clicked

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
   * List of all values in a row
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
     * Returns whether a column can be visible or not
     */
    isVisible = function () {},
    /**
     * Returns column custom value
     */
    transforms = function () {},
    /**
     * Returns column custom CSS class
     */
    classNames = function () {},
    /**
     * Returns column custom CSS styles
     */
    styles = function () {},
    /**
     * Contains all the column key names
     */
    column_keys = [];

  function rowClick() {
    if (clickableRows) {
      rowActive = true;
      /**
       * Fires an event when a row is clicked
       */
      fire("rowClick", { row });
    }
  }
</script>
