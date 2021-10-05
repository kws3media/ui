<KwsGridView
  {iteration_key}
  {data}
  {columns}
  {transition}
  {is_striped}
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
  {cellComponentMap} />

<script>
  import { GridView as KwsGridView } from "@kws3/ui";

  export let iteration_key = "id",
    data = [],
    columns = {},
    transition = false,
    is_striped = true,
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectAllCheckboxColor = "primary",
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {},
    cellComponentMap = {};
</script>
