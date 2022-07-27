<div class="columns datagrid-example">
  <div class="column">
    <KwsTileView
      {iteration_key}
      {data}
      {transition}
      {tileItemComponent}
      {per_row}
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
  import { TileView as KwsTileView } from "@kws3/ui";

  export let iteration_key = "id",
    data = [],
    transition = false,
    tileItemComponent = null,
    per_row = 3,
    columns = {},
    clickableRows = false,
    valueTransformers = {},
    classTransformers = {},
    styleTransformers = {},
    visibilityMap = {};

  let klass = "";
  export { klass as class };
</script>
