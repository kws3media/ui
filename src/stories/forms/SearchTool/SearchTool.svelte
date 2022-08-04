<div class="columns">
  <div class="column">
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
  </div>
</div>
<div class="columns searchtool-examples">
  <div class="column">
    <h3 class="title is-4">Reviews</h3>
    {#each options as { review }}
      <Message
        color="primary"
        class="is-marginless mb-2"
        inner_class="is-paddingless px-2 py-1">
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html review}
      </Message>
    {/each}
  </div>
  <div class="column">
    <h3 class="title is-4">Complains</h3>
    {#each options as { complain }}
      <Message
        color="warning"
        class="is-marginless mb-2"
        inner_class="is-paddingless px-2 py-1">
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html complain}
      </Message>
    {/each}
  </div>
</div>

<script>
  import { SearchTool as KwsSearchTool, Message } from "@kws3/ui";

  export let size = "",
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    options = [],
    searchableKeys = [],
    highlighted_results = true,
    scoreThreshold = 5,
    placeholder = "";

  $: console.log(options);

  let klass = "";
  export { klass as class };
</script>
