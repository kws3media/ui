<!--
  @component


  @param {object} [row={}] - List of all values in a row, Default: `{}`
  @param {boolean} [visualActivationOnClick=true] - Determines whether clickable rows activate visually on click, Default: `true`
  @param {object} [activatedId=null] - Unique id of row that is activated, Default: `null`
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
  class:is-selected={activated && visualActivationOnClick}
  class="box {clickableRows ? 'is-hoverable' : ''}"
  on:click|stopPropagation={rowClick}>
  {#each column_keys as column}
    {#if isVisible(column)}
      <div class={classNames(column, row)} style={styles(column, row)}>
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html transforms(column, row)}
      </div>
    {/if}
  {/each}
</div>

<script>
  //@ts-nocheck
  import { createEventDispatcher } from "svelte";

  const fire = createEventDispatcher();

  /**
   * List of all values in a row
   */
  export let row = {},
    /**
     * Determines whether clickable rows activate visually on click
     */
    visualActivationOnClick = true,
    /**
     * Unique id of row that is activated
     */
    activatedId = null,
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

  $: activated = activatedId === row.id;

  function rowClick() {
    if (clickableRows) {
      /**
       * Fires an event when a row is clicked
       */
      fire("rowClick", { row });
    }
  }
</script>
