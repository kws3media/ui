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
            <strong>Total {meta.total} {entityName}</strong>
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
          <strong>{meta.total} {entityName}</strong>
        {/if}
      </div>
    {:else if showPerPage && showTotal && !showCurrent}
      <div class="level-item pagination-showing">
        <strong>Total {meta.total} {entityName}</strong>
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
    fire("setLimit", { currentPage, newLimit: limit });
  }
  function goto(pagenum) {
    let limit = meta.limit,
      i = pagenum - 1,
      offset = limit * i;
    if (offset >= 0 && offset != meta.offset && offset < meta.total) {
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
