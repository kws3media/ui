<div bind:this={timeline}>
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

  export let data = [
      {
        user: "User 1",
        description: "Test",
      },
      {
        user: "User 2",
        description: "Test 2",
      },
    ],
    visible = 5,
    offset = 5,
    type = "list", // 'list' || 'tree'
    showAll = false,
    can_scroll = false,
    timeline = null;

  let visibleData = [],
    typeWiseData = [];
  $: is_tree = type == "tree";

  $: {
    if (!is_tree) {
      data = (data || []).slice();
      visibleData =
        !showAll && data.length > visible + 1 ? data.slice(0, visible) : data;
    }

    if (is_tree) {
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

  // onstate({changed, current}){
  //   if(changed.visible){
  //     if(this.refs && this.refs.timeline && current.can_scroll){
  //       var elm = this.refs.timeline.querySelectorAll('li');
  //       var e = elm[elm.length - 1]
  //       setTimeout(() => {
  //         e.scrollIntoView({behavior: 'smooth'});
  //       }, 10);
  //     }
  //   }
  // }

  onMount(() => {
    if (!is_tree) typeWiseData = data;
    if (is_tree) {
      var _data = (data || []).slice();

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
  });

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
