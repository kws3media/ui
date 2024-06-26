<!--
  @component


  @param {SizeOptions} [size=small] - Size of the input, Default: `small`
  @param {ColorOptions} [color=] - Color of the input, Default: ``
  @param {string} [placeholder="Search"] - Placeholder text for the input, Default: `"Search"`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {array} [options=[]] - Array of objects., Default: `[]`
  @param {array} [searchableKeys=[]] - array of object properties to search in., Default: `[]`
  @param {boolean} [highlighted_results=true] - Whether to show the highlighted or plain results in the dropdown., Default: `true`
  @param {number} [score_threshold=2] - Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `2`
  @param {number} [scoreThreshold=undefined] - (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches., Default: `undefined`
  @param {boolean} [word_match=false] - Whether to match against each word seperatly or whole sentence in flow., Default: `false`
  @param {string} [style=""] - Inline CSS for the input, Default: `""`
  @param {string} [class=""] - CSS classes for the input, Default: `""`

-->
<div
  class="
  field has-addons marginless
  {readonly ? 'is-readonly' : ''}
  {disabled ? 'is-disabled' : ''}
  ">
  <div class="control is-expanded has-icons-left">
    <input
      class="input is-{size} is-{color} {klass}"
      {placeholder}
      {disabled}
      {readonly}
      {style}
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
  import { makeSearchEngine } from "@kws3/ui/search";

  /**
   * @typedef {import('@kws3/ui/types').ColorOptions} ColorOptions
   * @typedef {import('@kws3/ui/types').SizeOptions} SizeOptions
   */

  /**
   * Size of the input
   *  @type {SizeOptions}
   */
  export let size = "small";
  /**
   * Color of the input
   * @type {ColorOptions}
   */
  export let color = "";
  /**
   * Placeholder text for the input
   */
  export let placeholder = "Search";
  /**
   * Marks component as read-only
   */
  export let readonly = false;
  /**
   * Disables the component
   */
  export let disabled = false;
  /**
   * Array of objects.
   * @type {array}
   */
  export let options = [];
  /**
   * array of object properties to search in.
   * @type {array}
   */
  export let searchableKeys = [];
  /**
   * Whether to show the highlighted or plain results in the dropdown.
   */
  export let highlighted_results = true;

  /**
   * Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches.
   * @type {number}
   */
  export let score_threshold = 2;
  /**
   * (deprecated) Score threshold for fuzzy search strategy, setting high score gives more fuzzy matches.
   * @type {number}
   */
  export let scoreThreshold = score_threshold;
  /**
   * Whether to match against each word seperatly or whole sentence in flow.
   */
  export let word_match = false;
  /**
   * Inline CSS for the input
   */
  export let style = "";
  /**
   * CSS classes for the input
   */
  let klass = "";
  export { klass as class };

  let keywords = "",
    orginalItems = [],
    fuzzysearch = null;

  const debouncedSearch = debounce(search, 300);

  const sanitizeValue = (v) =>
    v && v.trim() ? v.toLowerCase().trim().split(/\s+/) : [];

  onMount(() => {
    let fuzzyOpts = {
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

    let searchOptions = {
      search_key: searchableKeys,
      scoreThreshold,
      fuzzyOpts,
    };

    fuzzysearch = makeSearchEngine(searchOptions);

    if (word_match) {
      options.forEach((item, i) => {
        item._uid = i;
      });
      orginalItems = [...options];
    } else {
      orginalItems = [...options];
    }
  });

  onDestroy(reset);

  function search() {
    if (!keywords) {
      reset();
      return;
    }
    let result = [];

    if (word_match) {
      let cache = {},
        filters = sanitizeValue(keywords);
      filters.forEach((word, idx) => {
        // iterate over each word in the search query
        let opts = [];
        if (word) opts = fuzzysearch(word, orginalItems);
        cache[idx] = opts; // storing options to current index on cache
      });

      result = Object.values(cache) // get values from cache
        .flat()
        .filter((v, i, self) => i === self.findIndex((t) => t._uid === v._uid)); // flatten array
    } else {
      result = fuzzysearch(keywords, orginalItems);
    }
    options = result;
  }

  function reset() {
    keywords = "";
    options = [...orginalItems];
  }
</script>
