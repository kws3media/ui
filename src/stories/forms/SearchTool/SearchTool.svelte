<div class="columns">
  <div class="column">
    {#if mounted}
      <KwsSearchTool
        {size}
        {color}
        {searchableKeys}
        bind:options
        {highlighted_results}
        {scoreThreshold}
        {placeholder}
        {style}
        class={klass}
        {disabled}
        {readonly} />
    {/if}
  </div>
</div>
<div class="columns">
  <div class="column">
    <h3 class="title is-4">Reviews</h3>
    {#each options as { review }}
      <Message
        color="primary"
        class="is-marginless mb-2"
        inner_class="is-paddingless px-2 py-1">{@html review}</Message>
    {/each}
  </div>
  <div class="column">
    <h3 class="title is-4">Complains</h3>
    {#each options as { complain }}
      <Message
        color="warning"
        class="is-marginless mb-2"
        inner_class="is-paddingless px-2 py-1">{@html complain}</Message>
    {/each}
  </div>
</div>

<style>
  span.h {
    font-weight: 700;
    color: currentColor;
    background: transparent;
  }
</style>

<script>
  import { products_reviews } from "./data.js";
  import { SearchTool as KwsSearchTool, Message } from "@kws3/ui";

  import { onMount } from "svelte";

  onMount(() => {
    options = products_reviews;
    mounted = true;
  });

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    mounted = false,
    options = [],
    searchableKeys = ["review", "complain"],
    highlighted_results = true,
    scoreThreshold = 5,
    placeholder = "Marvel characters...";

  console.log(options);

  let klass = "";
  export { klass as class };
</script>
