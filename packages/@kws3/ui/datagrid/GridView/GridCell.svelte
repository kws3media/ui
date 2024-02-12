<!--
  @component


  @param {string} [column=""] - Name of the column in the DB, Default: `""`
  @param {object} [row={}] - List of all values in a row, Default: `{}`
  @param {object} [transforms={}] - Finds custom values for the column, Default: `{}`
  @param {object} [classNames={}] - Finds CSS class for the column, Default: `{}`
  @param {object} [styles={}] - Finds CSS styles for the column, Default: `{}`

-->

<td class={classNames(column, row)} style={styles(column, row)}>
  <Transition {transition} x={20} delay={20 * row_index}>
    <!--  eslint-disable-next-line svelte/no-at-html-tags -->
    {@html transforms(column, row)}
  </Transition>
</td>

<script>
  import { Transition } from "@kws3/ui";
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
     * @type {object}
     */
    transforms = {},
    /**
     * Finds CSS class for the column
     * @type {object}
     */
    classNames = {},
    /**
     * Finds CSS styles for the column
     * @type {object}
     */
    styles = {},
    row_index = 0,
    transition = false;
</script>
