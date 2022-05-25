<!--
  @component


  @param {string} [value=""] - Value of the Input

This property can be bound to, to fetch the current value, Default: `""`
  @param {string} [placeholder="Please select..."] - Placeholder text for the input, Default: `"Please select..."`
  @param {array} [options=[]] - Array of strings, or objects.
Used to populate the list of options in the dropdown, Default: `[]`
  @param {function|null} [search=null] - Async function to fetch options

Only send this prop if you want to fetch `options` asynchronously.
`options` prop will be ignored if this prop is set., Default: `null`
  @param {'fuzzy'|'strict'} [search_strategy="fuzzy"] - Filtered options to be displayed strictly based on search text or perform a fuzzy match.
Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching., Default: `"fuzzy"`
  @param {boolean} [highlighted_results=true] - Whether to show the highlighted or plain results in the dropdown., Default: `true`
  @param {''|'small'|'medium'|'large'} [size=""] - Size of the input, Default: `""`
  @param {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'} [color=""] - Color of the input, Default: `""`
  @param {string} [style=""] - Inline CSS for input container, Default: `""`
  @param {boolean} [readonly=false] - Marks component as read-only, Default: `false`
  @param {boolean} [disabled=false] - Disables the component, Default: `false`
  @param {HTMLElement|string} [dropdown_portal=undefined] - Where to render the dropdown list.
Can be a DOM element or a `string` with the CSS selector of the element.

By default it renders in a custom container appended to `document.body`., Default: `undefined`
  @param {string} [class=""] - CSS classes for input container, Default: `""`

  ### Events
  - `change`
  - `blur` - Triggered when the input loses focus

  ### Slots
  - `<slot name="default" {option} />` - Slot containing text for each selectable item

Default value: `<span>{option.label}</span>`

-->
<div
  bind:this={el}
  class="
     kws-autocomplete input
    {disabled ? 'is-disabled' : ''}
    {readonly ? 'is-readonly' : ''}
    is-{size} is-{color} {klass}
  "
  class:readonly
  {style}
  on:click|stopPropagation={() => input && input.focus()}>
  <input
    class="input is-{size}"
    bind:this={input}
    autocomplete="off"
    {disabled}
    {readonly}
    bind:value
    on:keydown={handleKeydown}
    on:blur={blurEvent}
    on:blur={() => setOptionsVisible(false)}
    {placeholder} />
  {#if search && options_loading}
    <button
      type="button"
      style="border: none;"
      class="button is-paddingless delete is-medium is-loading" />
  {/if}
  {#if rootContainer}
    <div class="kws-autocomplete" use:portal={dropdown_portal}>
      <ul bind:this={dropdown} class="options" class:hidden={!show_options}>
        {#each filtered_options as option}
          <li
            class="is-size-{list_text_size[size]}"
            on:mousedown|preventDefault|stopPropagation={() =>
              handleOptionMouseDown(option)}
            class:active={active_option === option}>
            <!--
              Slot containing text for each selectable item

              Default value: `<span>{option.label}</span>`
            -->
            <slot {option}>
              <!-- eslint-disable-next-line @ota-meshi/svelte/no-at-html-tags -->
              {@html option.label}
            </slot>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<script>
  import { portal } from "@kws3/ui";
  import { debounce } from "@kws3/ui/utils";
  import { createEventDispatcher, onMount, tick } from "svelte";
  import { createPopper } from "@popperjs/core";
  import fuzzysearch from "@kws3/ui/utils/fuzzysearch";

  const sameWidthPopperModifier = {
    name: "sameWidth",
    enabled: true,
    phase: "beforeWrite",
    requires: ["computeStyles"],
    fn: ({ state }) => {
      state.styles.popper.width = `${Math.max(
        200,
        state.rects.reference.width
      )}px`;
    },
    effect: ({ state }) => {
      state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    },
  };

  const rootContainerId = "kws-overlay-root";

  /**
   * Value of the Input
   *
   * This property can be bound to, to fetch the current value
   */
  export let value = "";

  /**
   * Placeholder text for the input
   */
  export let placeholder = "Please select...";
  /**
   * Array of strings, or objects.
   * Used to populate the list of options in the dropdown
   */
  export let options = [];
  /**
   * Async function to fetch options
   *
   * Only send this prop if you want to fetch `options` asynchronously.
   * `options` prop will be ignored if this prop is set.
   *
   * @type {function|null}
   */
  export let search = null;

  /**
   * Filtered options to be displayed strictly based on search text or perform a fuzzy match.
   * Fuzzy match will not work if `search` function is set, as the backend service is meant to do the matching.
   * @type {'fuzzy'|'strict'}
   */
  export let search_strategy = "fuzzy";

  /**
   * Whether to show the highlighted or plain results in the dropdown.
   */
  export let highlighted_results = true;
  /**
   * Size of the input
   *  @type {''|'small'|'medium'|'large'}
   */
  export let size = "";
  /**
   * Color of the input
   * @type {''|'primary'|'success'|'warning'|'info'|'danger'|'dark'|'light'}
   */
  export let color = "";
  /**
   * Inline CSS for input container
   */
  export let style = "";
  /**
   * Marks component as read-only
   */
  export let readonly = false;
  /**
   * Disables the component
   */
  export let disabled = false;

  /**
   * Where to render the dropdown list.
   * Can be a DOM element or a `string` with the CSS selector of the element.
   *
   * By default it renders in a custom container appended to `document.body`.
   *
   * @type { HTMLElement|string}
   */
  export let dropdown_portal = "#" + rootContainerId;

  /**
   * CSS classes for input container
   */
  let klass = "";
  export { klass as class };

  if (!search && (!options || !options.length))
    console.error(`Missing options`);

  //ensure we have a root container for all our hoisitng related stuff

  let rootContainer = document.getElementById(rootContainerId);
  if (!rootContainer) {
    rootContainer = document.createElement("div");
    rootContainer.id = rootContainerId;
    document.body.appendChild(rootContainer);
  }

  const fire = createEventDispatcher();

  let el, //whole wrapping element
    dropdown, //dropdown ul
    input, //the textbox to type in
    POPPER,
    active_option = "",
    searching = true,
    show_options = false,
    filtered_options = [], //list of options filtered by search query
    normalised_options = [], //list of options normalised
    options_loading = false, //indictaes whether async search function is running
    mounted = false; //indicates whether component is mounted

  let list_text_size = {
    small: "7",
    medium: "5",
    large: "4",
  };

  $: asyncMode = search && typeof search === "function";

  $: options, normaliseOptions();
  $: searching, updateFilteredOptions(value);

  $: allow_fuzzy_match = !search && search_strategy === "fuzzy";

  //convert arrays of strings into normalised arrays of objects
  function normaliseOptions() {
    let _items = options || [];
    if (!_items || !(_items instanceof Array)) {
      normalised_options = [];
      return;
    }

    normalised_options = normaliseArraysToObjects(_items);
  }

  function updateFilteredOptions(value) {
    if (!mounted) return;

    if (asyncMode) {
      searching && debouncedTriggerSearch(sanitizeFilters(value));
    } else {
      searching && triggerSearch(sanitizeFilters(value));
    }
  }

  function triggerSearch(filters) {
    let cache = {};
    //TODO - can optimize more for very long lists
    filters.forEach((word, idx) => {
      // iterate over each word in the search query
      let opts = [];
      if (word) {
        opts = [...normalised_options].filter((item) => {
          // filter out items that don't match `filter`
          if (typeof item === "object" && item.value) {
            return typeof item.value === "string" && match(word, item.value);
          }
        });
      }

      cache[idx] = opts; // storing options to current index on cache
    });

    filtered_options = Object.values(cache) // get values from cache
      .flat() // flatten array
      .filter((v, i, self) => self.indexOf(v) === i); // remove duplicates

    if (highlighted_results) {
      filtered_options = highlightMatches(filtered_options, filters);
    }
    setOptionsVisible(true);
  }

  function triggerExternalSearch(filters) {
    if (!filters.length) {
      //do not trigger async search if filters are empty
      clearDropDownResults();
      return;
    }
    options_loading = true;
    // filtered_options = [];
    search(filters).then((_options) => {
      searching = false;
      options_loading = false;
      tick().then(() => {
        filtered_options = normaliseArraysToObjects(_options);

        if (highlighted_results) {
          filtered_options = highlightMatches(filtered_options, filters);
        }
        setOptionsVisible(true);
      });
    });
  }

  const debouncedTriggerSearch = debounce(triggerExternalSearch, 150, false);

  onMount(() => {
    POPPER = createPopper(el, dropdown, {
      strategy: "fixed",
      placement: "bottom-start",
      modifiers: [sameWidthPopperModifier],
    });

    //normalize value
    if (value === null || typeof value == "undefined") {
      value = null;
    }
    mounted = true;

    return () => {
      POPPER.destroy();
    };
  });

  function setOptionsVisible(show) {
    if (readonly || disabled || show === show_options) return;
    if (!value || !filtered_options.length) {
      show = false;
    }
    show_options = show;
    if (!show) {
      clearDropDownResults();
    }
    POPPER && POPPER.update();
  }

  function handleKeydown(event) {
    if (event.key === `Enter`) {
      event.preventDefault();

      if (active_option) {
        handleOptionMouseDown(active_option);
      } else {
        // no active option means no option is selected and the actual value should be what typed in input.
        setOptionsVisible(false);
      }
    } else if ([`ArrowDown`, `ArrowUp`].includes(event.key)) {
      const increment = event.key === `ArrowUp` ? -1 : 1;
      const newActiveIdx = filtered_options.indexOf(active_option) + increment;

      if (newActiveIdx < 0) {
        active_option = filtered_options[filtered_options.length - 1];
      } else {
        if (newActiveIdx === filtered_options.length)
          active_option = filtered_options[0];
        else active_option = filtered_options[newActiveIdx];
      }
    } else {
      active_option = "";
      searching = true;
    }
  }

  function handleOptionMouseDown(option) {
    add(option);
  }

  function add(token) {
    if (readonly || disabled) {
      return;
    }

    value = token.value;
    fire("change", { token, type: `add` });

    setOptionsVisible(false);
  }

  function blurEvent() {
    /**
     * Triggered when the input loses focus
     */
    fire("blur");
  }

  const match = (needle, haystack) => {
    let _hayStack = haystack.toLowerCase();
    return allow_fuzzy_match
      ? fuzzysearch(needle, _hayStack)
      : _hayStack.indexOf(needle) > -1;
  };

  const normaliseArraysToObjects = (arr) =>
    [...arr].map((item) =>
      typeof item === "object" ? item : { label: item, value: item }
    );

  const highlightMatches = (options, filters) => {
    if (!filters.length) return options;
    // join all filter parts and split into chars and filter out duplicates
    let common_chars = [...filters.join("")].filter(
      (v, i, self) => self.indexOf(v) === i
    );
    let pattern = new RegExp(`[${common_chars.join("")}]`, "gi");
    return options.map((item) => {
      return {
        ...item,
        label: item.value.replace(pattern, (match) => `<span>${match}</span>`),
      };
    });
  };

  const clearDropDownResults = () => {
    filtered_options = [];
    searching = false;
  };
  function sanitizeFilters(v) {
    return v && v.trim() ? v.toLowerCase().trim().split(/\s+/) : [];
  }
</script>
