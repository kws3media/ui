<!--
  @component


  @param {array} [data=[]] - Array of objects for timeline data, Default: `[]`
  @param {number} [visible=2] - Number of rows displayed when collapsed, and `showAll` is `false`, Default: `2`
  @param {number} [offset=2] - Number of additional rows to display when “more items” is clicked, Default: `2`
  @param {'list'|'tree'} [type="list"] - Type of Timeline to be displayed, Default: `"list"`
  @param {boolean} [showAll=false] - When `true` , the Timeline is displayed in full, uncollapsed state, Default: `false`
  @param {boolean} [can_scroll=false] - When `true`, Timeline scrolls up when expanded by clicking `show more`, Default: `false`
  @param {string} [style=""] - Inline CSS for the Timeline container, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color="primary"] - Color of the timeline, Default: `"primary"`
  @param {string} [class=""] - CSS classes for the Timeline container, Default: `""`

  ### Events
  - `viewItem` - Fired when a  specific item is clicked for viewing

-->
<div bind:this={timeline} class={klass} {style}>
  {#if visibleData != null && Object.values(visibleData).length > 0}
    <ul class="timeline is-{type}">
      {#if is_tree}
        {#each Object.entries(visibleData) as [year, items]}
          <li class="is-{color} year">{year.trim()}</li>
          {#each items as item}
            <!--Fired when a  specific item is clicked for viewing-->
            <TimelineItem {item} {is_tree} on:viewItem {color} />
          {/each}
        {/each}
      {:else}
        {#each visibleData as item}
          <TimelineItem {item} on:viewItem {color} />
        {/each}
      {/if}
    </ul>

    {#if numUnVisibleData > 0}
      <div class="columns">
        <div class="column">
          <button
            class="button is-{color} is-small is-fullwidth is-block"
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
   * Array of objects for timeline data
   */
  export let data = [],
    /**
     * Number of rows displayed when collapsed, and `showAll` is `false`
     */
    visible = 2,
    /**
     * Number of additional rows to display when “more items” is clicked
     */
    offset = 2,
    /**
     * Type of Timeline to be displayed
     * @type {'list'|'tree'}
     */
    type = "list",
    /**
     * When `true` , the Timeline is displayed in full, uncollapsed state
     */
    showAll = false,
    /**
     * When `true`, Timeline scrolls up when expanded by clicking `show more`
     */
    can_scroll = false,
    /**
     * Inline CSS for the Timeline container
     */
    style = "",
    /**
     * Color of the timeline
     * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
     */
    color = "primary";

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
      _data = Object.assign({}, typeWiseData);
      let ret = {};

      let years = Object.keys(_data);
      for (let i = years.length - 1; i >= 0; i--) {
        let year = years[i],
          item = _data[year];

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
