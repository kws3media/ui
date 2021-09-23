<div bind:this={timeline} class={klass} {style}>
  {#if visibleData != null && Object.values(visibleData).length > 0}
    <ul class="timeline is-{type}">
      {#if is_tree}
        {#each Object.entries(visibleData) as [year, items]}
          <li class="year">{year.trim()}</li>
          {#each items as item}
            <TimelineItem {item} {is_tree} on:viewItem />
          {/each}
        {/each}
      {:else}
        {#each visibleData as item}
          <TimelineItem {item} />
        {/each}
      {/if}
    </ul>

    {#if numUnVisibleData > 0}
      <div class="columns">
        <div class="column">
          <button
            class="button is-info is-small is-fullwidth is-block"
            type="button"
            on:click={setVisible}>
            <Icon icon="chevron-down" size="small" />
            <span><strong>+{numUnVisibleData}</strong> more items</span>
          </button>
        </div>
      </div>
    {/if}
  {:else}
    <Message>
      <p class="has-text-centered">No list created</p>
    </Message>
  {/if}
</div>

<script>
  import { onMount } from "svelte";
  import { Icon, Message } from "@kws3/ui";
  import TimelineItem from "./TimelineItem.svelte";

  /**
   * Array of timeline objects
   * Array format is like this
   * `[{'title' : '', 'description' : '', 'image' : '', 'date' : '', 'time' : ''},..]`
   */
  export let data = [],
    /**
     * Number of visible rows
     */
    visible = 5,
    /**
     * Offset set for `more items` button
     */
    offset = 5,
    /**
     * Type of the timeline
     * @type {'list'|'tree'}
     */
    type = "list",
    /**
     * Used to show all rows on loading
     */
    showAll = false,
    /**
     * Scroll to the bottom of timeline, when clicking `more items` button
     */
    can_scroll = false,
    /**
     * CSS styles to the Timeline container
     */
    style = "";

  /**
   * CSS classes for the Timeline container
   */
  let klass = "";
  export { klass as class };

  let timeline = null,
    visibleData = [],
    typeWiseData = [],
    _data = [],
    ret = [];

  $: is_tree = type == "tree";

  $: {
    if (!is_tree) {
      data = (data || []).slice();
      visibleData =
        !showAll && data.length > visible + 1 ? data.slice(0, visible) : data;
    }

    if (is_tree && data.length > 0) {
      _data = (data || []).slice();
      _data.forEach((item) => {
        var date = new Date(item.date),
          year = date.getFullYear();

        if (typeof ret[year] == "undefined") {
          ret[year] = [];
        }
        ret[year].push(item);
      });

      typeWiseData = ret;
    }

    if (is_tree && typeWiseData) {
      data = Object.assign({}, typeWiseData);
      let ret = {};

      let years = Object.keys(data);
      for (let i = years.length - 1; i >= 0; i--) {
        let year = years[i],
          item = data[year];

        if (showAll) {
          ret[" " + year] = item.slice();
        } else {
          ret[" " + year] = item.slice(0, visible);

          if (item.length >= visible) break;
          visible -= item.length;
        }
      }
      visibleData = ret;
    }
  }

  $: numUnVisibleData = !showAll ? data.length - visible : 0;

  function setVisible() {
    visible = visible + offset;
    if (visible > data.length) {
      visible = data.length;
    }

    if (can_scroll) {
      var elm = timeline.querySelectorAll("li");
      var e = elm[elm.length - 1];
      setTimeout(() => {
        e.scrollIntoView({ behavior: "smooth" });
      }, 10);
    }
  }
</script>
