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
  import { debounce } from "@kws3/ui/utils";
  import { onDestroy, onMount } from "svelte";
  import { fuzzysearch } from "../utils/fuzzysearch";

  /**
   * Size of the input
   *  @type {''|'small'|'medium'|'large'}
   */
  export let size = "small";
  /**
   * Placeholder text for the input
   */
  export let placeholder = "Search";
  /**
   * Array of objects.
   */
  export let options = {};
  /**
   * array of objet properties to search in.
   */
  export let searchableKeys = [];
  /**
   * To highlight the keywords in the results.
   */
  export let highlighted_results = true;
  export let scoreThreshold = 5; //less value will give more results and vice versa

  let keywords = "",
    orginalItems = [],
    fuzzyOpts = {}; // fuzzy.js lib options

  const debouncedSearch = debounce(search, 300);

  // $: options, setItems(options, 1);

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
    orginalItems = [...options];
  });

  onDestroy(reset);

  function search() {
    if (!keywords) {
      reset();
      return;
    }
    let result = fuzzysearch(keywords, orginalItems, {
      search_key: searchableKeys,
      scoreThreshold,
      fuzzyOpts,
    });
    console.log(keywords, options, result, searchableKeys);
    options = result;
  }

  function reset() {
    keywords = "";
    options = [...orginalItems];
  }
</script>
