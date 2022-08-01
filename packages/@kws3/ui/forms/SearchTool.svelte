<div class="field has-addons is-marginless">
  <div class="control is-expanded has-icons-left">
    <input
      class="input is-{size}"
      {placeholder}
      bind:value={keywords}
      on:keyup={debouncedSearch} />
    <Icon icon="search" size="small" class="is-left" />
  </div>
  {#if keywords}
    <div class="control">
      <button class="button is-danger is-{size}" type="button" on:click={reset}>
        <Icon icon="times" size="small" />
      </button>
    </div>
  {/if}
</div>

<script>
  import { Icon } from "@kws3/ui";
  import { cloneObject, debounce } from "@kws3/utils";
  import { onDestroy, onMount } from "svelte";
  import { fuzzy, fuzzysearch } from "../../utils/fuzzysearch";

  export let size = "small";
  export let placeholder = "Search";
  export let items = [];
  export let searchableKeys = [];
  export let hasTextHighlighting = true;
  export let highlightColor = "danger-light";
  export let scoreThreshold = 5; //less value will give more results and vice versa

  let keywords = "";
  let orginalItems = [];
  let isSearching = false;

  const debouncedSearch = debounce(search, 300);

  // $: items, setItems(items, 1);

  onMount(() => {
    if (fuzzy) {
      fuzzy.analyzeSubTerms = true;
      fuzzy.analyzeSubTermDepth = 10;
      fuzzy.highlighting.before = "";
      fuzzy.highlighting.after = "";
      if (hasTextHighlighting) {
        fuzzy.highlighting.before = `<span class="has-background-${highlightColor}">`;
        fuzzy.highlighting.after = "</span>";
      }
    }
    console.log(items);
    orginalItems = [...items];
  });

  onDestroy(reset);

  function search() {
    if (!keywords) {
      reset();
      return;
    }

    let result = fuzzysearch(keywords, items, {
      search_key: searchableKeys,
      scoreThreshold,
    });
    items = result;
  }

  function reset() {
    keywords = "";
    console.log(orginalItems);
    items = [...orginalItems];
  }
</script>
