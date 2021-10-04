<KwsTileView
  {iteration_key}
  {data}
  {transition}
  {tileItemComponent}
  {per_row}
  {columns}
  {clickableRows}
  {bulk_actions}
  {selectAll}
  {selectedIds}
  {selectCheckboxColor}
  {selectCheckboxSize}
  {valueTransformers}
  {classTransformers}
  {styleTransformers}
  {visibilityMap} />

<script>
  import { TileView as KwsTileView } from "@kws3/ui";

  export let iteration_key = "id",
    data = [],
    transition = false,
    tileItemComponent = null,
    per_row = 3,
    columns = {},
    clickableRows = false,
    bulk_actions = false,
    selectAll = false,
    selectedIds = [],
    selectCheckboxColor = "info",
    selectCheckboxSize = "medium",
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {};
</script>
