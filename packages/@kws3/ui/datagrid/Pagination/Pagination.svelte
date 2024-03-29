<!--
  @component


  @param {object} [meta={}] - Object containing `total`, `count`, `limit` and `offset` values

**DEPRECATED**: Use `total`, `count`, `limit` and `offset`  props instead, Default: `{}`
  @param {number} [limit=0] - Number of items to be displayed per page, Default: `0`
  @param {number} [count=0] - Number of items being displayed in this page, Default: `0`
  @param {number} [total=0] - Total number of items available, Default: `0`
  @param {number} [offset=0] - Offset of the first item in this page, Default: `0`
  @param {boolean} [showTotal=true] - Determines whether to show total or not, Default: `true`
  @param {boolean} [showCurrent=true] - Determines whether to display a breakdown of the range of items currently being displayed in a page, Default: `true`
  @param {boolean} [showPerPage=true] - Determines whether to display the UI that allows user to choose the number of items to be displayed per page, Default: `true`
  @param {number} [maxVisiblePages=10] - Maximum number of consecutive pages to show in pagination after which a break is introduced in between them, Default: `10`
  @param {string} [entityName="entries"] - String to display total entries, Default: `"entries"`
  @param {SizeOptions} [size=small] - Size of the pagination elements, Default: `small`
  @param {boolean} [frame=false] - Determines whether to show pagination frame or not, Default: `false`
  @param {string} [iconRight="chevron-right"] - Right navigation icon, Default: `"chevron-right"`
  @param {string} [iconLeft="chevron-left"] - Left navigation icon, Default: `"chevron-left"`
  @param {array} [perPageOptions=[]] - Available options given to the user, to choose the number of items displayed per page, Default: `[]`
  @method `goto(targetPage)` - Go to an arbitrary page number
  @method `prev()` - Go to the previous page
  @method `next()` - Go to the next page
  @method `first()` - Go to the first page
  @method `last()` - Go to the last page

  ### Events
  - `setLimit` - Event used to set a new `limit`.

*Event Data:* `{currentPage, newLimit}`
  - `paginate` - Event triggered on pagination change with new `offset` and current `limit` values.

*Event Data:* `{offset, limit}`

-->
<div
  class="pagination_frame {frame ? 'has-frame' : ''}"
  data-cy="pagination-frame">
  <div class="level">
    <div class="level-left">
      {#if showPerPage}
        <div class="level-item pagination-showing">
          <nav class="pagination {size ? 'is-' + size : ''}">
            <ul
              class="pagination-list pagination-limit-chooser"
              data-cy="paginationLimit">
              {#each Object.entries(_perPageOptions) as [k, v]}
                <li>
                  <button
                    type="button"
                    class="pagination-link {_limit === v ? 'is-current' : ''}"
                    on:click={() => setLimit(v)}>{k}</button>
                </li>
              {/each}
            </ul>
            <span>&nbsp;per page</span>
          </nav>
        </div>
      {:else}
        <div class="level-item">
          {#if showTotal}
            <strong>Total {totalItems} {entityName}</strong>
          {:else if showCurrent}
            {#if _total > 0}Showing {_offset * 1 + 1} to {_offset * 1 +
                _count * 1}{/if}
          {/if}
        </div>
      {/if}
    </div>

    {#if showCurrent && showTotal && !showPerPage}
      <div class="level-item pagination-showing">
        {#if _total > 0}
          Showing {_offset * 1 + 1} to {_offset * 1 + _count * 1}
        {/if}
      </div>
    {:else if showPerPage && showCurrent}
      <div class="level-item pagination-showing">
        {#if _total > 0}
          Showing {_offset * 1 + 1} to {_offset * 1 + _count * 1}
          {#if showTotal}
            |&nbsp;
          {/if}
        {/if}
        {#if showTotal}
          <strong>{totalItems} {entityName}</strong>
        {/if}
      </div>
    {:else if showPerPage && showTotal && !showCurrent}
      <div class="level-item pagination-showing">
        <strong>Total {totalItems} {entityName}</strong>
      </div>
    {/if}

    <div class="level-right">
      {#if _total > 0}
        <nav class="pagination is-centered {size ? 'is-' + size : ''}">
          <button
            type="button"
            on:click={prev}
            class="pagination-previous {_offset === 0 ? 'is-disabled' : ''}">
            <Icon icon={iconLeft} />
          </button>
          <button
            type="button"
            on:click={next}
            class="pagination-next {currentPage + 1 === totalPages
              ? 'is-disabled'
              : ''}">
            <Icon icon={iconRight} />
          </button>
          <ul class="pagination-list" data-cy="pagination-list">
            {#each pages as page}
              {#if page.p === "sep"}
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
              {:else}
                <li>
                  <button
                    type="button"
                    class="pagination-link {page.p === currentPage
                      ? 'is-current'
                      : ''}"
                    on:click={() => goto(page.p + 1)}>{page.p + 1}</button>
                </li>
              {/if}
            {/each}
          </ul>
        </nav>
      {/if}
    </div>
  </div>
</div>

<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "../../helpers/Icon.svelte";

  const fire = createEventDispatcher();

  /**
   * Object containing `total`, `count`, `limit` and `offset` values
   *
   * **DEPRECATED**: Use `total`, `count`, `limit` and `offset`  props instead
   */
  export let meta = {
      limit: 0,
      total: 0,
      count: 0,
      offset: 0,
    },
    /**
     * Number of items to be displayed per page
     */
    limit = 0,
    /**
     * Number of items being displayed in this page
     */
    count = 0,
    /**
     * Total number of items available
     */
    total = 0,
    /**
     * Offset of the first item in this page
     */
    offset = 0,
    /**
     * Determines whether to show total or not
     */
    showTotal = true,
    /**
     * Determines whether to display a breakdown of the range of items currently being displayed in a page
     */
    showCurrent = true,
    /**
     * Determines whether to display the UI that allows user to choose the number of items to be displayed per page
     */
    showPerPage = true,
    /**
     * Maximum number of consecutive pages to show in pagination after which a break is introduced in between them
     */
    maxVisiblePages = 10,
    /**
     * String to display total entries
     */
    entityName = "entries",
    /**
     * Size of the pagination elements
     *
     * @type {import('@kws3/ui/types').SizeOptions}
     */
    size = "small",
    /**
     * Determines whether to show pagination frame or not
     */
    frame = false,
    /**
     * Right navigation icon
     */
    iconRight = "chevron-right",
    /**
     * Left navigation icon
     */
    iconLeft = "chevron-left",
    /**
     * Available options given to the user, to choose the number of items displayed per page
     */
    perPageOptions = [20, 50, 100, 150, 200, 250];

  let pages = [],
    _perPageOptions = {};

  $: _total = total || meta.total || 0;
  $: _count = count || meta.count || 0;
  $: _offset = offset || meta.offset || 0;
  $: _limit = limit || meta.limit || 0;

  $: {
    let max = _total,
      ppo = perPageOptions || [],
      ppmax = Math.max(...ppo),
      ret = {};

    if (max < ppo[0]) {
      ret[ppo[0]] = ppo[0];
    } else {
      ppo.forEach((item) => {
        if (item < max) {
          ret[item] = item;
        }
      });

      if (max < ppmax) {
        ret["All"] = max;
      }
    }
    _perPageOptions = ret;
  }

  $: totalItems = meta && _total ? _total : 0;
  $: currentPage = Math.floor(_offset / _limit);
  $: totalPages = Math.ceil(_total / (_limit || 1));
  $: totalPages, currentPage, maxVisiblePages, calculatePages();

  function calculatePages() {
    pages = new Array(totalPages || 0);

    var total = pages.length,
      ret = [];

    for (var i = 0; i < total; i++) {
      if (total > maxVisiblePages) {
        let threshold = Math.max(
          Math.floor(maxVisiblePages / 3),
          Math.min(3, maxVisiblePages - 3)
        );
        if (i < threshold) {
          ret.push({ p: i });
        } else if (i >= total - threshold) {
          ret.push({ p: i });
        } else if (i === Math.floor(total / 2)) {
          ret.push({ p: i });
        } else if (
          i === currentPage ||
          i === currentPage - 1 ||
          i === currentPage + 1
        ) {
          ret.push({ p: i });
        }
      } else {
        ret.push({ p: i });
      }
    }

    let _prev = 0,
      items = []; // _prev was prev
    if (total > maxVisiblePages) {
      for (var j = 0; j < ret.length; j++) {
        var page = ret[j].p;
        if (page !== _prev + 1 && page !== 0) {
          items.push({ p: "sep" });
        }
        items.push(ret[j]);
        _prev = page;
      }
    } else {
      items = ret;
    }

    pages = items;
  }

  function setLimit(limit) {
    /**
     * Event used to set a new `limit`.
     *
     * *Event Data:* `{currentPage, newLimit}`
     */
    fire("setLimit", { currentPage, newLimit: limit });
  }

  /**
   * Go to an arbitrary page number
   * @param {number} targetPage
   */
  export function goto(targetPage) {
    let limit = _limit,
      i = targetPage - 1,
      __offset = limit * i;
    if (__offset >= 0 && __offset !== _offset && __offset < _total) {
      /**
       * Event triggered on pagination change with new `offset` and current `limit` values.
       *
       * *Event Data:* `{offset, limit}`
       */
      fire("paginate", { offset: __offset, limit });
    }
  }

  /**
   * Go to the previous page
   */
  export function prev() {
    goto(currentPage);
  }

  /**
   * Go to the next page
   */
  export function next() {
    goto(currentPage + 2);
  }

  /**
   * Go to the first page
   */
  export function first() {
    goto(1);
  }

  /**
   * Go to the last page
   */
  export function last() {
    goto(totalPages);
  }
</script>
