<!--
  @component

  @param {string} [column=""] - It holds the column name in db, Default: `""`
  @param {object} [row={}] - It has all column value, Default: `{}`
  @param {object} [transforms={}] - It finds custom values for the column, Default: `{}`
  @param {object} [classNames={}] - It finds css class for the column, Default: `{}`
  @param {object} [styles={}] - It finds css styles for the column, Default: `{}`
-->

<td class={classNames(column, row)} style={styles(column, row)}>
  {@html transforms(column, row)}
</td>

<script>
  /**
   * It holds the column name in db
   */
  export let column = "",
    /**
     * It has all column value
     */
    row = {},
    /**
     * It finds custom values for the column
     */
    transforms = {},
    /**
     * It finds css class for the column
     */
    classNames = {},
    /**
     * It finds css styles for the column
     */
    styles = {};
</script>
