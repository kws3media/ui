<div class="columns datagrid-example">
  <div class="column">
    <KwsTileView
      {iteration_key}
      {data}
      {transition}
      {tileItemComponent}
      {per_row}
      {fluid_items_per_row}
      {min_width}
      {max_width}
      {grow}
      {shrink}
      {columns}
      {clickableRows}
      {valueTransformers}
      {classTransformers}
      {styleTransformers}
      {visibilityMap}
      class={klass} />
  </div>
</div>

<script>
  //@ts-nocheck
  import { TileView as KwsTileView } from "@kws3/ui";

  export let iteration_key = "id",
    data = [],
    transition = false,
    tileItemComponent = null,
    per_row = 3,
    fluid_items_per_row = false,
    min_width = "unset",
    max_width = "unset",
    grow = true,
    shrink = true,
    columns = {},
    clickableRows = false,
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {};

  let klass = "";
  export { klass as class };
</script>
