<div class="columns">
  <div class="column">
    <KwsSearchInput
      {size}
      {color}
      {searchableKeys}
      bind:options
      {highlighted_results}
      {score_threshold}
      {word_match}
      {placeholder}
      {style}
      class={klass}
      {disabled}
      {readonly} />
  </div>
</div>
<div class="columns searchinput-examples">
  <div class="column">
    <h3 class="title is-4">Reviews ({options.length})</h3>
    {#each options as { review }}
      <Notification
        color="primary"
        light={true}
        class="p-0 px-4 py-2 m-0 mb-2 is-italic">
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html review}
      </Notification>
    {/each}
  </div>
  <div class="column">
    <h3 class="title is-4">Complains ({options.length})</h3>
    {#each options as { complain }}
      <Notification
        color="warning"
        light={true}
        class="p-0 px-4 py-2 m-0 mb-2 is-italic">
        <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
        {@html complain}
      </Notification>
    {/each}
  </div>
</div>

<script>
  import { SearchInput as KwsSearchInput, Notification } from "@kws3/ui";

  /**
   * Size of the input
   *  @type {import('@kws3/ui/types').SizeOptions}
   */
  export let size = "",
    /**
     * Color of the input
     * @type {import('@kws3/ui/types').ColorOptions}
     */
    color = "",
    style = "",
    disabled = false,
    readonly = false,
    word_match = true,
    options = [],
    searchableKeys = [],
    highlighted_results = true,
    score_threshold = 2,
    placeholder = "";

  // $: console.log(options);

  let klass = "";
  export { klass as class };
</script>
