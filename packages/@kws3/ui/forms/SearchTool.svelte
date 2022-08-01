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
  import { debounce } from "@kws3/utils";
  import { onDestroy, onMount } from "svelte";
  import { fuzzysearch } from "../utils/fuzzysearch";

  export let size = "small";
  export let placeholder = "Search";
  export let items = [];
  export let searchableKeys = [];
  export let highlighted_results = true;
  export let highlightColor = "danger-light";
  export let scoreThreshold = 5; //less value will give more results and vice versa

  let keywords = "",
    orginalItems = [],
    isSearching = false,
    fuzzyOpts = {}; // fuzzy.js lib options

  const debouncedSearch = debounce(search, 300);

  // $: items, setItems(items, 1);

  onMount(() => {
    fuzzyOpts = {
      analyzeSubTerms: true,
      analyzeSubTermDepth: 10,
      highlighting: {
        after: "",
        before: "",
      },
    };
    if (highlighted_results) {
      fuzzyOpts.highlighting.before = `<span class="h">`;
      fuzzyOpts.highlighting.after = "</span>";
    }
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
