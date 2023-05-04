<KwsGridView
  {iteration_key}
  {data}
  {columns}
  {transition}
  {is_striped}
  {is_narrow}
  {clickableRows}
  {bulk_actions}
  {selectAll}
  {selectedIds}
  {selectAllCheckboxColor}
  {selectCheckboxColor}
  {selectCheckboxSize}
  {valueTransformers}
  {classTransformers}
  {styleTransformers}
  {visibilityMap}
  {cellComponentMap}
  class={klass} />

<script>
  import { GridView as KwsGridView } from "@kws3/ui";

  export let iteration_key = "id",
    data = [],
    columns = {},
    transition = false,
    is_striped = true,
    is_narrow = false,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    /**
     * @type {Exclude<import('@kws3/ui/types').ColorOptions, 'success'>}
     */
    selectAllCheckboxColor = "primary",
    /**
     * @type {Exclude<import('@kws3/ui/types').ColorOptions, 'success'>}
     */
    selectCheckboxColor = "info",
    /**
     * @type {import('@kws3/ui/types').SizeOptions}
     */
    selectCheckboxSize = "medium",
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {},
    cellComponentMap = {};

  let klass = "";
  export { klass as class };
</script>
