<!--
  @component


  @param {object} [meta={}] - Contains the total, count, limit, offset values, Default: `{}`
  @param {boolean} [showTotal=true] - Determines whether to show total or not, Default: `true`
  @param {boolean} [showCurrent=true] - Determines whether to show current page details, Default: `true`
  @param {boolean} [showPerPage=true] - Determines whether to show per page options, Default: `true`
  @param {number} [breakThreshold=10] - Limit the number of visible pages in pagination, Default: `10`
  @param {string} [entityName="entries"] - String to display total entries, Default: `"entries"`
  @param {string} [size="small"] - Size of the pagination, Default: `"small"`
  @param {boolean} [frame=false] - Determines whether to show pagination frame or not, Default: `false`
  @param {string} [iconRight="chevron-right"] - Right navigation icon, Default: `"chevron-right"`
  @param {string} [iconLeft="chevron-left"] - Left navigation icon, Default: `"chevron-left"`
  @param {array} [perPageOptions=[]] - Determines the number of rows displayed in a page., Default: `[]`

  ### Events
  - `setLimit` - Event used to set limit of pagination
  - `paginate` - Event triggered on paginate

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
                    class="pagination-link {meta.limit == v
                      ? 'is-current'
                      : ''}"
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
            {#if meta.total > 0}Showing {meta.offset * 1 + 1} to {meta.offset *
                1 +
                meta.count * 1}{/if}
          {/if}
        </div>
      {/if}
    </div>

    {#if showCurrent && showTotal && !showPerPage}
      <div class="level-item pagination-showing">
        {#if meta.total > 0}
          Showing {meta.offset * 1 + 1} to {meta.offset * 1 + meta.count * 1}
        {/if}
      </div>
    {:else if showPerPage && showCurrent}
      <div class="level-item pagination-showing">
        {#if meta.total > 0}
          Showing {meta.offset * 1 + 1} to {meta.offset * 1 + meta.count * 1}
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
      {#if meta.total > 0}
        <nav class="pagination is-centered {size ? 'is-' + size : ''}">
          <button
            type="button"
            on:click={prev}
            class="pagination-previous {meta.offset == 0 ? 'is-disabled' : ''}">
            <Icon {size} icon={iconLeft} />
          </button>
          <button
            type="button"
            on:click={next}
            class="pagination-next {currentPage + 1 == totalPages
              ? 'is-disabled'
              : ''}">
            <Icon {size} icon={iconRight} />
          </button>
          <ul class="pagination-list" data-cy="pagination-list">
            {#each pages as page}
              {#if page.p == "sep"}
                <li>
                  <span class="pagination-ellipsis">&hellip;</span>
                </li>
              {:else}
                <li>
                  <button
                    type="button"
                    class="pagination-link {page.p == currentPage
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
   * Contains the total, count, limit, offset values
   */
  export let meta = {
      limit: 0,
      total: 0,
      count: 0,
      offset: 0,
      status: "",
    },
    /**
     * Determines whether to show total or not
     */
    showTotal = true,
    /**
     * Determines whether to show current page details
     */
    showCurrent = true,
    /**
     * Determines whether to show per page options
     */
    showPerPage = true,
    /**
     * Limit the number of visible pages in pagination
     */
    breakThreshold = 10,
    /**
     * String to display total entries
     */
    entityName = "entries",
    /**
     * Size of the pagination
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
     * Determines the number of rows displayed in a page.
     */
    perPageOptions = [20, 50, 100, 150, 200, 250];

  let pages = [],
    _perPageOptions = 0;

  $: {
    let max = meta.total,
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

  $: totalItems = meta && meta.total ? meta.total : 0;
  $: currentPage = Math.floor(meta.offset / meta.limit);
  $: totalPages = Math.ceil(meta.total / (meta.limit || 1));
  $: totalPages, currentPage, breakThreshold, calculatePages();

  function calculatePages() {
    pages = new Array(totalPages || 0);

    var total = pages.length,
      ret = [];

    for (var i = 0; i < total; i++) {
      if (total > breakThreshold) {
        if (i < 3) {
          ret.push({ p: i });
        } else if (i > total - 4) {
          ret.push({ p: i });
        } else if (i == Math.floor(total / 2)) {
          ret.push({ p: i });
        } else if (
          i == currentPage ||
          i == currentPage - 1 ||
          i == currentPage + 1
        ) {
          ret.push({ p: i });
        }
      } else {
        ret.push({ p: i });
      }
    }

    let _prev = 0,
      items = []; // _prev was prev
    if (total > breakThreshold) {
      for (var j = 0; j < ret.length; j++) {
        var page = ret[j].p;
        if (page != _prev + 1 && page != 0) {
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
     * Event used to set limit of pagination
     */
    fire("setLimit", { currentPage, newLimit: limit });
  }
  function goto(pagenum) {
    let limit = meta.limit,
      i = pagenum - 1,
      offset = limit * i;
    if (offset >= 0 && offset != meta.offset && offset < meta.total) {
      /**
       * Event triggered on paginate
       */
      fire("paginate", { offset, limit });
    }
  }
  function prev() {
    goto(currentPage);
  }
  function next() {
    goto(currentPage + 2);
  }
  function first() {
    goto(1);
  }
  function last() {
    goto(totalPages);
  }
</script>
