<!--
  @component


  @param {string} [column=""] - Name of the column in the DB, Default: `""`
  @param {object} [row={}] - List of all values in a row, Default: `{}`
  @param {object} [transforms={}] - Finds custom values for the column, Default: `{}`
  @param {object} [classNames={}] - Finds CSS class for the column, Default: `{}`
  @param {object} [styles={}] - Finds CSS styles for the column, Default: `{}`

-->

<td class={classNames(column, row)} style={styles(column, row)}>
  <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
  {@html transforms(column, row)}
</td>

<script>
  //@ts-nocheck
  /**
   * Name of the column in the DB
   */
  export let column = "",
    /**
     * List of all values in a row
     */
    row = {},
    /**
     * Finds custom values for the column
     */
    transforms = {},
    /**
     * Finds CSS class for the column
     */
    classNames = {},
    /**
     * Finds CSS styles for the column
     */
    styles = {};
</script>
