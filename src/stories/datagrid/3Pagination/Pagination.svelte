<KwsPagination
  {meta}
  {showTotal}
  {showCurrent}
  {showPerPage}
  {breakThreshold}
  {entityName}
  {size}
  {frame}
  {iconRight}
  {iconLeft}
  {perPageOptions} />

<script>
  import { Pagination as KwsPagination } from "@kws3/ui";

  export let meta = {
      limit: 0,
      total: 0,
      count: 0,
      offset: 0,
      status: "",
    },
    showTotal = true,
    showCurrent = true,
    showPerPage = true,
    breakThreshold = 10,
    entityName = "entries",
    size = "small",
    frame = false,
    iconRight = "chevron-right",
    iconLeft = "chevron-left",
    perPageOptions = [20, 50, 100, 150, 200, 250];
</script>
